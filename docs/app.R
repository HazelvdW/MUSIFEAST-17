#
# Hazel Aileen van der Walle
# MUSIFEAST-17 Interactive Stimulus Explorer
# Adapted for shinylive (runs entirely in browser via webR)
#

library(shiny)
library(ggplot2)
library(readr)
library(dplyr)
library(tidyr)
library(plotly)
library(htmltools)
library(bslib)

# Load data — fetches directly from GitHub (works in shinylive via webR HTTP)
M17_url <- "https://raw.githubusercontent.com/HazelvdW/MUSIFEAST-17/refs/heads/main/M17_normative_data_tables/MUSIFEAST17_all.csv"
df <- readr::read_csv(M17_url, show_col_types = FALSE)
varSelect <- df |> dplyr::select(ends_with('_M'))

# UI
ui <- fluidPage(
  titlePanel("Interactive MUSIFEAST-17 Player!"),
  theme = bs_theme(preset = "vapor"),

  sidebarLayout(
    sidebarPanel(
      HTML('<p class="text-secondary">Click on points to play associated audio</p>'),
      uiOutput("audio_player_ui"),
      verbatimTextOutput("selected_info"),

      selectInput("xvar", "X variable", names(varSelect), selected = "valence_M"),
      selectInput("yvar", "Y variable", names(varSelect), selected = "arousal_M"),
      checkboxGroupInput(
        "Genre", "Filter by genre",
        choices  = unique(df$GENRE),
        selected = unique(df$GENRE)
      ),

      tags$head(tags$style(HTML("
        .genre-legend { display:flex; flex-wrap:wrap; justify-content:center;
          gap:10px; margin-top:10px; padding:10px;
          background-color:white; border-radius:5px; }
        .genre-item  { display:flex; align-items:center; gap:5px;
          font-size:14px; color:black; }
        .genre-color { width:15px; height:15px; border-radius:50%; }
      "))),

      hr(),
      checkboxInput("by_genre", "Show genres", TRUE)
    ),

    mainPanel(
      plotlyOutput("scatterplot", height = "700px"),
      uiOutput("genre_legend")
    )
  ),

  tags$script(HTML("
    $(document).on('plotly_click', function(e, data) {
      var pointNumber = data.points[0].pointNumber;
      Shiny.setInputValue('clicked_point_index', pointNumber);
    });
  "))
)

# Server
server <- function(input, output, session) {

  genre_colors <- c(
    "60s"        = "#b11226", "80s"       = "#008000",
    "Ambient"    = "#20a2f2", "Classical" = "#9090e7",
    "Country"    = "#7b7137", "Dance"     = "#37ccc8",
    "Electronic" = "#cbef1a", "Film"      = "#681fc3",
    "Folk"       = "#581d40", "Funk"      = "#bf1fcd",
    "Hip-hop"    = "#1e1178", "Jazz"      = "#ffbd31",
    "Metal"      = "#ff0800", "Pop"       = "#ff16b1",
    "R&B"        = "#41ffff", "Rock"      = "#ff6900",
    "Video game" = "#30ff00"
  )

  subsetted <- reactive({
    req(input$Genre)
    df |> dplyr::filter(GENRE %in% input$Genre)
  })

  plotData <- reactive({
    req(input$xvar, input$yvar)
    data.frame(
      id         = subsetted()$CLIP_NAME,
      x          = subsetted()[[input$xvar]],
      y          = subsetted()[[input$yvar]],
      audio_file = paste0(
        "https://raw.githubusercontent.com/HazelvdW/MUSIFEAST-17/refs/heads/main/M17_music_stimuli/",
        subsetted()$CLIP_NAME, ".mp3"),
      description = subsetted()$TRACK_TITLE,
      GENRE       = subsetted()$GENRE
    )
  })

  output$scatterplot <- renderPlotly({
    d <- plotData()
    d$color <- if (input$by_genre) genre_colors[d$GENRE] else "#472b81"

    plot_ly(d,
      x = ~x, y = ~y,
      type = "scatter", mode = "markers",
      marker    = list(size = 12, color = ~color, opacity = 0.7),
      text      = ~description,
      customdata = ~audio_file,
      hoverinfo = "text"
    ) |>
    layout(
      xaxis = list(title = list(text = input$xvar, font = list(size = 14)),
                   zeroline = TRUE, showgrid = TRUE, gridcolor = "#E2E2E2",
                   showline = TRUE, linecolor = "#000000", tickfont = list(size = 12),
                   range = c(min(d$x) - 0.5, max(d$x) + 0.5)),
      yaxis = list(title = list(text = input$yvar, font = list(size = 14)),
                   zeroline = TRUE, showgrid = TRUE, gridcolor = "#E2E2E2",
                   showline = TRUE, linecolor = "#000000", tickfont = list(size = 12),
                   range = c(min(d$y) - 0.5, max(d$y) + 0.5)),
      hoverlabel = list(bgcolor = "white", font = list(size = 12, color = "black")),
      margin     = list(l = 50, r = 50, b = 50, t = 50, pad = 4)
    )
  })

  output$genre_legend <- renderUI({
    req(input$by_genre)
    items <- lapply(input$Genre, function(g) {
      tags$div(class = "genre-item",
        tags$div(class = "genre-color",
                 style = paste0("background-color:", genre_colors[g], ";")),
        tags$span(g))
    })
    tags$div(class = "genre-legend", items)
  })

  selectedPoint <- reactive({
    req(input$clicked_point_index)
    plotData()[input$clicked_point_index + 1, ]
  })

  output$selected_info <- renderText({
    if (is.null(input$clicked_point_index))
      return("No point selected yet. Click a point to play its audio.")
    p <- selectedPoint()
    paste0("Selected:\n", "ID: ", p$id, "\n",
           "X: ", round(p$x, 3), "\n",
           "Y: ", round(p$y, 3), "\n",
           "Track: ", p$description)
  })

  output$audio_player_ui <- renderUI({
    if (is.null(input$clicked_point_index)) return(NULL)
    p <- selectedPoint()
    tags$div(
      tags$p(paste("Playing:", p$id)),
      tags$audio(src = p$audio_file, type = "audio/mp3",
                 controls = TRUE, autoplay = TRUE)
    )
  })
}

shinyApp(ui = ui, server = server)
