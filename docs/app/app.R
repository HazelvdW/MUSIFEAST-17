#
# Hazel Aileen van der Walle
# MUSIFEAST-17 Interactive Stimulus Explorer
# Shinylive / webR version — minimal dependencies for browser compatibility
#
# Changes from original:
#   - No tidyverse (can't install in webR)
#   - No bslib / bs_theme (Bootswatch presets unreliable in webR)
#   - Data loaded reactively inside server, not at top level
#   - Uses only: shiny, dplyr, readr, plotly
#

library(shiny)
library(dplyr)
library(readr)
library(plotly)

# ── UI ────────────────────────────────────────────────────────────────────────
ui <- fluidPage(

  # Inline dark styling — no bslib needed
  tags$head(tags$style(HTML("
    body { background-color: #1a1a2e; color: #eee;
           font-family: 'Segoe UI', sans-serif; }
    .well { background-color: #16213e; border: 1px solid #0f3460; color: #eee; }
    .selectize-input, .selectize-dropdown { background: #16213e !important; color: #eee !important; }
    h2, label { color: #eee !important; }
    .shiny-input-container { color: #eee; }
    .genre-legend {
      display: flex; flex-wrap: wrap; justify-content: center;
      gap: 8px; margin-top: 10px; padding: 10px;
      background-color: rgba(255,255,255,0.08); border-radius: 5px;
    }
    .genre-item  { display: flex; align-items: center; gap: 5px;
                   font-size: 13px; color: #eee; }
    .genre-color { width: 13px; height: 13px; border-radius: 50%; flex-shrink: 0; }
    pre { background: #16213e; color: #aed6f1; border: none; font-size: 0.8rem; }
  "))),

  titlePanel(
    tags$span("Interactive MUSIFEAST-17 Explorer",
              style = "color:#39ff14; font-weight:700;")
  ),

  sidebarLayout(
    sidebarPanel(
      style = "background:#16213e; border:1px solid #0f3460;",

      uiOutput("data_status"),
      tags$p("Click any point to play its audio.",
             style = "color:#aaa; font-size:0.85rem; margin-bottom:0.8rem;"),

      uiOutput("audio_player_ui"),
      verbatimTextOutput("selected_info"),

      uiOutput("x_select"),
      uiOutput("y_select"),
      uiOutput("genre_filter"),

      tags$hr(style = "border-color:#0f3460;"),
      checkboxInput("by_genre", "Colour by genre", TRUE)
    ),

    mainPanel(
      plotlyOutput("scatterplot", height = "680px"),
      uiOutput("genre_legend")
    )
  ),

  tags$script(HTML("
    $(document).on('plotly_click', function(e, data) {
      if (data && data.points && data.points.length > 0) {
        Shiny.setInputValue('clicked_point_index', data.points[0].pointNumber);
      }
    });
  "))
)

# ── Server ────────────────────────────────────────────────────────────────────
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

  # Load data reactively — never at top level in shinylive
  df_data <- reactiveVal(NULL)

  observe({
    url <- paste0(
      "https://raw.githubusercontent.com/HazelvdW/MUSIFEAST-17/",
      "refs/heads/main/M17_normative_data_tables/MUSIFEAST17_all.csv"
    )
    tryCatch({
      d <- readr::read_csv(url, show_col_types = FALSE)
      df_data(d)
    }, error = function(e) {
      showNotification(
        paste("Data load failed:", conditionMessage(e)),
        type = "error", duration = NULL
      )
    })
  })

  # Status banner while data fetches
  output$data_status <- renderUI({
    if (is.null(df_data())) {
      tags$p("⏳ Fetching stimulus data from GitHub…",
             style = "color:#ffbd31; font-size:0.82rem; margin-bottom:0.6rem;")
    } else {
      tags$p(paste0("✓ ", nrow(df_data()), " stimuli loaded."),
             style = "color:#39ff14; font-size:0.82rem; margin-bottom:0.6rem;")
    }
  })

  # Dynamic dropdowns — appear once data is ready
  m_cols <- reactive({
    req(df_data())
    names(dplyr::select(df_data(), ends_with("_M")))
  })

  output$x_select <- renderUI({
    req(m_cols())
    selectInput("xvar", "X axis variable", m_cols(), selected = "valence_M")
  })

  output$y_select <- renderUI({
    req(m_cols())
    selectInput("yvar", "Y axis variable", m_cols(), selected = "arousal_M")
  })

  output$genre_filter <- renderUI({
    req(df_data())
    genres <- sort(unique(df_data()$GENRE))
    checkboxGroupInput("Genre", "Filter by genre",
                       choices = genres, selected = genres)
  })

  # Filtered + shaped data for plotting
  plot_data <- reactive({
    req(df_data(), input$Genre, input$xvar, input$yvar)
    sub <- dplyr::filter(df_data(), GENRE %in% input$Genre)
    data.frame(
      id          = sub$CLIP_NAME,
      x           = sub[[input$xvar]],
      y           = sub[[input$yvar]],
      audio_file  = paste0(
        "https://raw.githubusercontent.com/HazelvdW/MUSIFEAST-17/",
        "refs/heads/main/M17_music_stimuli/",
        sub$CLIP_NAME, ".mp3"
      ),
      description = sub$TRACK_TITLE,
      GENRE       = sub$GENRE,
      stringsAsFactors = FALSE
    )
  })

  # Scatterplot
  output$scatterplot <- renderPlotly({
    d <- plot_data()
    d$color <- if (isTRUE(input$by_genre)) genre_colors[d$GENRE] else "#472b81"

    plot_ly(
      d, x = ~x, y = ~y,
      type = "scatter", mode = "markers",
      marker     = list(size = 11, color = ~color, opacity = 0.75),
      text       = ~description,
      customdata = ~audio_file,
      hoverinfo  = "text",
      source     = "scatter"
    ) |>
      layout(
        paper_bgcolor = "#1a1a2e",
        plot_bgcolor  = "#1a1a2e",
        font          = list(color = "#eee"),
        xaxis = list(
          title     = list(text = input$xvar, font = list(size = 13, color = "#eee")),
          zeroline  = TRUE, zerolinecolor = "#555",
          showgrid  = TRUE, gridcolor = "#333",
          showline  = TRUE, linecolor = "#555",
          tickfont  = list(size = 11, color = "#ccc"),
          range     = c(min(d$x, na.rm = TRUE) - 0.5, max(d$x, na.rm = TRUE) + 0.5)
        ),
        yaxis = list(
          title     = list(text = input$yvar, font = list(size = 13, color = "#eee")),
          zeroline  = TRUE, zerolinecolor = "#555",
          showgrid  = TRUE, gridcolor = "#333",
          showline  = TRUE, linecolor = "#555",
          tickfont  = list(size = 11, color = "#ccc"),
          range     = c(min(d$y, na.rm = TRUE) - 0.5, max(d$y, na.rm = TRUE) + 0.5)
        ),
        hoverlabel = list(bgcolor = "#fff", font = list(size = 12, color = "#000")),
        margin     = list(l = 55, r = 20, b = 55, t = 20)
      )
  })

  # Genre colour legend
  output$genre_legend <- renderUI({
    req(isTRUE(input$by_genre), input$Genre)
    items <- lapply(sort(input$Genre), function(g) {
      tags$div(class = "genre-item",
        tags$div(class  = "genre-color",
                 style  = paste0("background-color:", genre_colors[[g]], ";")),
        tags$span(g))
    })
    tags$div(class = "genre-legend", items)
  })

  # Click → audio
  selected_point <- reactive({
    req(input$clicked_point_index, plot_data())
    idx <- as.integer(input$clicked_point_index) + 1L
    plot_data()[idx, ]
  })

  output$selected_info <- renderText({
    if (is.null(input$clicked_point_index))
      return("No point selected.\nClick a point to hear its clip.")
    p <- selected_point()
    paste0("ID: ", p$id, "\n",
           input$xvar, ": ", round(p$x, 3), "\n",
           input$yvar, ": ", round(p$y, 3), "\n",
           "Track: ", p$description)
  })

  output$audio_player_ui <- renderUI({
    if (is.null(input$clicked_point_index)) return(NULL)
    p <- selected_point()
    tags$div(
      style = "margin-bottom:0.6rem;",
      tags$p(paste("▶", p$id),
             style = "font-size:0.82rem; color:#aed6f1; margin:0 0 4px;"),
      tags$audio(src = p$audio_file, type = "audio/mp3",
                 controls = TRUE, autoplay = TRUE,
                 style = "width:100%;")
    )
  })
}

shinyApp(ui = ui, server = server)
