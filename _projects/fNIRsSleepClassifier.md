---
title: "fNIRS Sleep Classifier"
date: 2026-03-24
status: 'in progress'
description: "A side project exploring fNIRS analysis using Meta’s new NeuroAI framework, building models to classify infant language background from brain activity during sleep"
category: "Neuroimaging Machine Learning"
poster_image: "/assets/images/bfl_poster.jpg"
poster_caption: "Overview poster displayed at BioFab Lab highlighting the end-to-end mouse memory analysis pipeline."
technologies:
  - Python
  - NeuroAI
  - Signal processing
links:
  - label: "GitHub"
    icon: "fab fa-github"
    url: "https://github.com/brynnhs/fNIRS-sleep-classifier"
---

## Overview

This project applies ML to fNIRS resting-state data recorded from 104 four-month-old infants during natural sleep (Blanco et al., 2022), with the goal of classifying infants by language background — Spanish monolingual, Basque monolingual, or bilingual — from their hemodynamic brain activity patterns.

The scientific premise is that bilingual exposure leaves measurable traces in functional brain organization as early as 4 months. The question is whether those group-level differences are detectable at the individual level.

The project starts with the preprocessed data from the original study, applying a functional connectivity → PCA → classifier pipeline. Next, UMAP will be used to test whether language group structure emerges without labels. Finally, the plan is to return to the raw fNIRS data and implement preprocessing from scratch using Meta's NeuroAI framework for standardized neural data workflows.

## Results

in progress... 

<!-- ## Key Features

Interactive dashboards make it easy to scrub through large photometry datasets, while real-time analytics surface behavioural correlations as the recordings stream in. The app bundles signal processing tools, behavioural event overlays, and automated report exports so researchers can move from raw data to publication-ready visuals without leaving the interface.

## Impact

<div class="project-impact">
  <p>This toolkit is actively used in photometry studies to interrogate memory formation and retrieval in mouse models. By pairing neural signals with behavioural annotations in one place, it shortens the feedback loop for hypotheses and accelerates translational neurotechnology work.</p>
</div> -->
