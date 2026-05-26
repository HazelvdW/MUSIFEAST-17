#
# Hazel Aileen van der Walle
# MUSIFEAST-17 — Interactive Stimulus Explorer
# Shinylive / GitHub Pages deployment
#

library(shiny)
library(ggplot2)
library(tidyverse)
library(tidyr)
library(dplyr)
library(plotly)
library(htmltools)
library(bslib)


# Load data ---------------------------
# The CSV must sit next to app.R — Shinylive cannot fetch external URLs.
# Download it from your repo and place it in the same folder as app.R before exporting.

df <- readr::read_csv("MUSIFEAST17_all.csv")
varSelect <- df |> select(ends_with('_M'))


# Theme — matches HAVDW site (dark, Space Grotesk) ---------------------------

site_theme <- bs_theme(
  bg           = "#0d0d0d",
  fg           = "#ffffff",
  primary      = "#39ff14",   # neon green — matches site accent
  secondary    = "#2a2a2a",
  base_font    = font_google("Space Grotesk"),
  code_font    = font_google("Space Mono"),
  border_radius = "0.5rem",
  bootswatch   = NULL
) |>
  bs_add_rules("
    body { background-color: #0d0d0d !important; color: #fff !important; }
    .sidebar { background-color: #141414 !important; border-right: 1px solid #2a2a2a; }
    .form-control, .selectize-input { background: #1a1a1a !important; color: #fff !important; border-color: #333 !important; }
    .form-check-label { color: #ccc !important; }
    h1, h2, h3, .title { color: #39ff14 !important; font-weight: 600; letter-spacing: 0.03em; }
    .well, .shiny-output-error { background: #1a1a1a; border-color: #333; color: #ccc; }
    pre { background: #1a1a1a; color: #ccc; border-color: #333; font-size: 0.8rem; }
    .btn-default, .btn-primary { background: transparent; border: 1px solid #39ff14; color: #0d0d0d !important; }
    .btn-default:hover { background: #39ff14; color: #0d0d0d !important; }
    hr { border-color: #2a2a2a; }
    audio { width: 100%; margin-top: 0.5rem; filter: invert(1) hue-rotate(90deg); }
    .genre-legend {
      display: flex; flex-wrap: wrap; justify-content: flex-start;
      gap: 8px; margin-top: 10px; padding: 8px 0;
    }
    .genre-item {
      display: flex; align-items: center; gap: 5px;
      font-size: 12px; color: #ccc;
    }
    .genre-color { width: 12px; height: 12px; border-radius: 50%; flex-shrink: 0; }
    .sidebar-text { color: #888; font-size: 0.8rem; margin-bottom: 0.5rem; }
  ")


# UI ---------------------------

ui <- fluidPage(
  theme = site_theme,
  titlePanel(
    div(
      h1("MUSIFEAST-17", style = "margin-bottom: 0; font-size: 1.6rem;"),
      p("Interactive Stimulus Explorer — click any point to play its audio",
        style = "color: #888; font-size: 0.85rem; margin-top: 0.25rem;")
    )
  ),

  sidebarLayout(
    sidebarPanel(
      width = 3,

      uiOutput("audio_player_ui"),
      verbatimTextOutput("selected_info"),

      hr(),

      selectInput("xvar", "X axis", names(varSelect), selected = "valence_M"),
      selectInput("yvar", "Y axis", names(varSelect), selected = "arousal_M"),

      hr(),

      checkboxInput("by_genre", "Colour by genre", TRUE),

      conditionalPanel(
        condition = "input.by_genre == true",
        checkboxGroupInput(
          "Genre", "Filter genres",
          choices  = unique(df$GENRE),
          selected = unique(df$GENRE)
        )
      ),

      tags$head(tags$style(HTML("
        .irs-bar, .irs-bar-edge { background: #39ff14 !important; border-color: #39ff14 !important; }
        .irs-single { background: #39ff14 !important; color: #0d0d0d !important; }
      ")))
    ),

    mainPanel(
      width = 9,
      plotlyOutput("scatterplot", height = "620px"),
      uiOutput("genre_legend")
    )
  ),

  tags$script(HTML("
    $(document).on('plotly_click', function(e, data) {
      if (data && data.points && data.points.length > 0) {
        var pointNumber = data.points[0].pointNumber;
        Shiny.setInputValue('clicked_point_index', pointNumber, {priority: 'event'});
      }
    });
  "))
)


# Server ---------------------------

server <- function(input, output, session) {

  genre_colors <- c(
    "60s" = "#b11226", "80s" = "#008000", "Ambient" = "#20a2f2", "Classical" = "#9090e7",
    "Country" = "#7b7137", "Dance" = "#37ccc8", "Electronic" = "#cbef1a",
    "Film" = "#681fc3", "Folk" = "#581d40", "Funk" = "#bf1fcd", "Hip-hop" = "#1e1178",
    "Jazz" = "#ffbd31", "Metal" = "#ff0800", "Pop" = "#ff16b1", "R&B" = "#41ffff",
    "Rock" = "#ff6900", "Video game" = "#30ff00"
  )

  subsetted <- reactive({
    req(input$Genre)
    df |> filter(GENRE %in% input$Genre)
  })

  plot_data <- reactive({
    req(input$xvar, input$yvar)
    data.frame(
      id         = subsetted()$CLIP_NAME,
      x          = subsetted()[[input$xvar]],
      y          = subsetted()[[input$yvar]],
      audio_file = paste0(
        "https://raw.githubusercontent.com/HazelvdW/MUSIFEAST-17/refs/heads/main/M17_music_stimuli/",
        subsetted()$CLIP_NAME, ".mp3"
      ),
      description = subsetted()$TRACK_TITLE,
      GENRE       = subsetted()$GENRE
    )
  })

  output$scatterplot <- renderPlotly({
    pd <- plot_data()
    pd$color <- if (input$by_genre) genre_colors[pd$GENRE] else "#39ff14"

    plot_ly(
      pd,
      x          = ~x,
      y          = ~y,
      type       = "scatter",
      mode       = "markers",
      marker     = list(size = 11, color = ~color, opacity = 0.8,
                        line = list(width = 0.5, color = "rgba(255,255,255,0.2)")),
      text       = ~paste0("<b>", description, "</b><br>", GENRE, "<br>",
                            input$xvar, ": ", round(x, 2), "<br>",
                            input$yvar, ": ", round(y, 2)),
      customdata = ~audio_file,
      hoverinfo  = "text"
    ) |>
      layout(
        paper_bgcolor = "rgba(0,0,0,0)",
        plot_bgcolor  = "rgba(20,20,20,0.6)",
        font          = list(color = "#ccc", family = "Space Grotesk"),
        xaxis = list(
          title     = list(text = input$xvar, font = list(size = 13, color = "#aaa")),
          zeroline  = TRUE, zerolinecolor = "#444",
          gridcolor = "#2a2a2a", showline = TRUE, linecolor = "#444",
          tickfont  = list(size = 11, color = "#aaa"),
          range     = c(min(pd$x, na.rm = TRUE) - 0.4, max(pd$x, na.rm = TRUE) + 0.4)
        ),
        yaxis = list(
          title     = list(text = input$yvar, font = list(size = 13, color = "#aaa")),
          zeroline  = TRUE, zerolinecolor = "#444",
          gridcolor = "#2a2a2a", showline = TRUE, linecolor = "#444",
          tickfont  = list(size = 11, color = "#aaa"),
          range     = c(min(pd$y, na.rm = TRUE) - 0.4, max(pd$y, na.rm = TRUE) + 0.4)
        ),
        hoverlabel = list(bgcolor = "#1a1a1a", bordercolor = "#39ff14",
                          font = list(size = 12, color = "#fff")),
        margin     = list(l = 50, r = 30, b = 50, t = 20, pad = 4)
      )
  })

  output$genre_legend <- renderUI({
    req(input$by_genre)
    genre_items <- lapply(input$Genre, function(g) {
      tags$div(
        class = "genre-item",
        tags$div(class = "genre-color",
                 style = paste0("background-color:", genre_colors[g], ";")),
        tags$span(g)
      )
    })
    tags$div(class = "genre-legend", genre_items)
  })

  selectedPoint <- reactive({
    req(input$clicked_point_index)
    idx <- input$clicked_point_index + 1
    plot_data()[idx, ]
  })

  output$selected_info <- renderText({
    if (is.null(input$clicked_point_index)) {
      "Click a point to play its audio."
    } else {
      pt <- selectedPoint()
      paste0(pt$description, "\n", pt$GENRE,
             "\n", input$xvar, ": ", round(pt$x, 3),
             "\n", input$yvar, ": ", round(pt$y, 3))
    }
  })

  output$audio_player_ui <- renderUI({
    if (is.null(input$clicked_point_index)) return(NULL)
    pt <- selectedPoint()
    tags$div(
      tags$p(pt$id, style = "font-size:0.75rem; color:#888; margin-bottom:0.25rem;"),
      tags$audio(
        src      = pt$audio_file,
        type     = "audio/mpeg",
        controls = TRUE,
        autoplay = NA   # autoplay — may be blocked by browser policy; user can press play
      )
    )
  })
}


shinyApp(ui = ui, server = server)
