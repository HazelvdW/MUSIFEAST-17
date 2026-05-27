# MUSIFEAST-17

**MUsic Stimuli for Imagination, Familiarity, Emotion, and Aesthetic STudies across 17 genres**

*van der Walle, H. A., Wu, W., Margulis, E. H., & Jakubowski, K. (2025). MUSIFEAST-17: MUsic Stimuli for Imagination, Familiarity, Emotion, and Aesthetic STudies across 17 genres. Behavior Research Methods, 57(7), 1–26. https://doi.org/10.3758/s13428-025-02724-0*

---

## Overview

MUSIFEAST-17 is an open, normed music stimulus set comprising **356 instrumental 30-second clips** drawn from commercially released music across **17 genres**: 60s, 80s, Ambient, Classical, Country, Dance, Electronic, Film, Folk, Funk, Hip-hop, Jazz, Metal, Pop, R&B, Rock, and Video game.

The set was designed to maximise ecological validity for UK and US listeners and to reflect the genuine diversity of everyday Western musical experience — spanning art music, popular music, and music composed for media. Stimuli are available to select both independently (e.g. targeting a specific valence–arousal quadrant) and in combination across dimensions.

Normative data were collected from **701 UK and US participants** sampled evenly across adulthood (ages 18–75), and include ratings of:

- Familiarity
- Enjoyment
- Emotional expression (valence, arousal)
- Perceived contrast
- Genre recognition
- Thought types evoked during listening
- Contextual associations

---

## Interactive App 🎵

An interactive Shiny app lets you explore the stimulus set visually — plot any two normative dimensions against each other, filter by genre, and click any point to play the associated audio clip directly in your browser.

**➜ [Launch the MUSIFEAST-17 app](https://hazelvdw.github.io/MUSIFEAST-17/app)**

Built with [Shinylive](https://posit-dev.github.io/r-shinylive/) + [webR](https://docs.r-wasm.org/webr/latest/) — runs entirely in the browser, no server required. First load takes 30–90 seconds while the R environment initialises.

---

## Repository Structure

```
MUSIFEAST-17/
├── app.R                        # Shiny app source
├── data/
│   ├── MUSIFEAST17_all.csv      # Full normative data (all participants)
│   ├── MUSIFEAST17_UK18to30.csv
│   ├── MUSIFEAST17_UK31to45.csv
│   ├── MUSIFEAST17_UK46to60.csv
│   ├── MUSIFEAST17_UK61to75.csv
│   ├── MUSIFEAST17_US18to30.csv
│   ├── MUSIFEAST17_US31to45.csv
│   ├── MUSIFEAST17_US46to60.csv
│   ├── MUSIFEAST17_US61to75.csv
│   ├── M17_raw_data_cleaned.csv
│   ├── Raw_data_description.pdf
│   └── README_M17_description.pdf
├── stimuli/
│   ├── _MUSIFEAST17_metadata.csv
│   ├── _stimulus_collection_method.pdf
│   └── [356 × genre_arousal_XX.mp3]
└── docs/
    └── app/                     # Shinylive deployment (GitHub Pages)
```

---

## Data

All normative data tables are available in `data/`. The primary file is `MUSIFEAST17_all.csv`, which contains the full dataset across all participants. Age- and region-stratified subsets (UK/US × 18–30 / 31–45 / 46–60 / 61–75) are provided separately for analyses targeting specific listener groups.

The full dataset is also archived on OSF: **https://osf.io/5ebz2**

### Variable naming

Normative columns follow the convention `DIMENSION_M` (mean) and `DIMENSION_SD` (standard deviation). For example: `valence_M`, `arousal_M`, `familiarity_M`, `enjoyment_M`. See `data/Raw_data_description.pdf` for full variable descriptions.

---

## Stimuli

All 356 audio clips (30-second instrumental excerpts, `.mp3`) are in `stimuli/`. Files are named by collection-stage genre and familiarity category: `GENRE_FAMILIARITY_XX.mp3` (e.g. `Jazz_HIGH_03.mp3`). Metadata including track titles, artists, and genre assignments are in `stimuli/_MUSIFEAST17_metadata.csv`.

Stimulus selection methodology is described in `stimuli/_stimulus_collection_method.pdf` and in the paper below.

---

## Audio Features

Audio features for MUSIFEAST-17 were independently extracted by **Tuomas Eerola** using MIR Toolbox. Both a full feature set and a reduced 33-feature set are available:

- **GitHub:** [tuomaseerola/MUSIFEAST17-audio](https://github.com/tuomaseerola/MUSIFEAST17-audio)
- **Visualised report:** [tuomaseerola.github.io/MUSIFEAST17-audio](https://tuomaseerola.github.io/MUSIFEAST17-audio/MUSIFEST17_audio_features.html)

---

## Papers

**Stimulus set paper**
> van der Walle, H. A., Wu, W., Margulis, E. H., & Jakubowski, K. (2025). MUSIFEAST-17: MUsic Stimuli for Imagination, Familiarity, Emotion, and Aesthetic STudies across 17 genres. *Behavior Research Methods*, 57(7), 1–26. https://doi.org/10.3758/s13428-025-02724-0

**Thought types paper**
> van der Walle, H. A., Wu, W., Margulis, E. H., & Jakubowski, K. (2025). Thoughtscapes in music: An examination of thought types occurring during music listening across 17 genres. *Psychology of Music*. https://doi.org/10.1177/03057356251346654

---

## Licence

Music stimuli are used under fair dealing / fair use for non-commercial academic research. Normative data and all other materials in this repository are released under **CC0 1.0** (public domain) unless otherwise noted — see `LICENSE`.

---

## Citation

If you use MUSIFEAST-17 in your research, please cite:

```
van der Walle, H. A., Wu, W., Margulis, E. H., & Jakubowski, K. (2025).
MUSIFEAST-17: MUsic Stimuli for Imagination, Familiarity, Emotion, and
Aesthetic STudies across 17 genres. Behavior Research Methods, 57(7), 1–26.
https://doi.org/10.3758/s13428-025-02724-0
```

---

## Contact

Hazel Aileen van der Walle · Durham University, Music Department
[hazel.a.van-der-walle@durham.ac.uk](mailto:hazel.a.van-der-walle@durham.ac.uk) · [ORCID 0009-0003-1029-9683](https://orcid.org/0009-0003-1029-9683) · [github.com/HazelvdW](https://github.com/HazelvdW)
