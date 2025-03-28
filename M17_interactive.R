#
# Hazel Aileen van der Walle
# March 2025
# MUSIFEAST-17 stimulus set INTERACTIVE! :)
# 


# Load packages ---------------------------

library(shiny)
library(ggplot2)
library(tidyverse)
library(tidyr)
library(dplyr)
library(plotly)
library(htmltools)
library(bslib)


# Load data ---------------------------

M17_all_norm_data_csv <- 
  "https://raw.githubusercontent.com/HazelvdW/MUSIFEAST-17/refs/heads/main/M17_normative_data_tables/MUSIFEAST17_all.csv"
df <- readr::read_csv(M17_all_norm_data_csv)
varSelect <- df |> select(ends_with('_M'))


# Define ui ---------------------------

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
        choices = unique(df$GENRE), 
        selected = unique(df$GENRE)
      ),
      
      tags$head(
        tags$style(HTML("
      .genre-legend {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        margin-top: 10px;
        padding: 10px;
        background-color: white;
        border-radius: 5px;
      }
      .genre-item {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 14px;
        color: black;
      }
      .genre-color {
        width: 15px;
        height: 15px;
        border-radius: 50%;
      }
    "))
      ),
      
      hr(), 
      checkboxInput("by_genre", "Show genres", TRUE)
    ),
    mainPanel(
      plotlyOutput("scatterplot", height = "700px"),
      uiOutput("genre_legend")
    )
  ),
  
  # add JavaScript for handling clicks
  tags$script(HTML("
    $(document).on('plotly_click', function(e, data) {
      var pointNumber = data.points[0].pointNumber;
      var audioFile = data.points[0].customdata;
      
      // Update selected point in Shiny
      Shiny.setInputValue('clicked_point_index', pointNumber);
    });
  "))
)


# Define server ---------------------------

server <- function(input, output, session) {
  
  genre_colors <- c(
    "60s" = "#e7756e", "80s" = "#3cc281", "Ambient" = "#20a2f2", "Classical" = "#9090e7", 
    "Country" = "#3b7137", "Dance" = "#37ccc8", "Electronic" = "#cbef1a", 
    "Film" = "#681fc3", "Folk" = "#581d40", "Funk" = "#bf1fcd", "Hip-hop" = "#1e1178", 
    "Jazz" = "#ffaf08", "Metal" = "#fb0101", "Pop" = "#ff16b1", "R&B" = "#41ffff", 
    "Rock" = "#e44c55", "Video game" = "#30ff00")
  
  subsetted <- reactive({
    req(input$Genre)
    df |> filter(GENRE %in% input$Genre)
  })
  
  data <- reactive({
    req(input$xvar, input$yvar)
    
    data.frame(
      id = subsetted()$CLIP_NAME,
      x = subsetted()[[input$xvar]],  # dynamic x variable
      y = subsetted()[[input$yvar]],  # dynamic y variable
      audio_file = paste0(
        "https://raw.githubusercontent.com/HazelvdW/MUSIFEAST-17/refs/heads/main/M17_music_stimuli/", 
        subsetted()$CLIP_NAME, ".mp3"),
      description = subsetted()$TRACK_TITLE,
      GENRE = subsetted()$GENRE
    )
  })
  
  # Create the interactive plotly scatterplot
  output$scatterplot <- renderPlotly({
    plot_data <- data()

    if (input$by_genre) {
      plot_data$color <- genre_colors[plot_data$GENRE]
    } else {
      plot_data$color <- "#472b81"
    }
    
    # Create the plotly scatter plot
    p <- plot_ly(plot_data, 
                 x = ~x, 
                 y = ~y,
                 type = "scatter",
                 mode = "markers",
                 marker = list(
                   size = 12,
                   color = ~color,
                   opacity = 0.7
                 ), 
                 text = ~description,
                 customdata = ~audio_file,
                 hoverinfo = "text") %>%
      
      layout(
        xaxis = list(
          title = list(text = input$xvar, font = list(size = 14)),
          zeroline = TRUE,
          showgrid = TRUE,
          gridcolor = "#E2E2E2",
          showline = TRUE,
          linecolor = "#000000",
          tickfont = list(size = 12),
          range = c(min(plot_data$x) - 0.5, max(plot_data$x) + 0.5)  # added axes padding
          ),
        yaxis = list(
          title = list(text = input$yvar, font = list(size = 14)),
          zeroline = TRUE,
          showgrid = TRUE,
          gridcolor = "#E2E2E2",
          showline = TRUE,
          linecolor = "#000000",
          tickfont = list(size = 12),
          range = c(min(plot_data$y) - 0.5, max(plot_data$y) + 0.5)  # added axes padding
          ),
        
        hoverlabel = list(
          bgcolor = "white",
          font = list(size = 12, color = "black")
        ),
        margin = list(l = 50, r = 50, b = 50, t = 50, pad = 4)
        )
    return(p)
    })
  
  # Create manual legend
  output$genre_legend <- renderUI({
    req(input$by_genre)
    
    genre_items <- lapply(input$Genre, function(genre) {
      tags$div(
        class = "genre-item",
        tags$div(
          class = "genre-color", 
          style = paste0("background-color: ", genre_colors[genre], ";")
        ),
        tags$span(genre)
      )
    })
    
    tags$div(
      class = "genre-legend",
      genre_items
    )
  })
  
  # React to clicked point and get the associated data
  selectedPoint <- reactive({
    req(input$clicked_point_index)
    index <- input$clicked_point_index + 1
    point <- data()[index, ]
    return(point)
  })
  
  # Display selected point info
  output$selected_info <- renderText({
    if (is.null(input$clicked_point_index)) {
      return("No point selected yet. Click a point to play its audio.")
    } else {
      point <- selectedPoint()
      paste0(
        "Selected Point:\n",
        "ID: ", point$id, "\n",
        "X: ", round(point$x, 3), "\n",
        "Y: ", round(point$y, 3), "\n",
        "Track: ", point$description
      )
    }
  })
  
  # Generate audio player for selected point
  output$audio_player_ui <- renderUI({
    if (is.null(input$clicked_point_index)) {
      return(NULL)
    } else {
      point <- selectedPoint()
      tags$div(
        tags$p(paste("Playing audio for point:", point$id)),
        tags$audio(src = point$audio_file, type = "audio/mp3", controls = TRUE, autoplay = TRUE)
      )
    }
  })
}

# Create & run Shiny app ---------------------------

shinyApp(ui = ui, server = server)   

