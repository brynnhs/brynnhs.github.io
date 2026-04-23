---
title: "fUSPredict"
date: 2026-02-01
status: 'in progress'
# image: "/assets/images/small.png"
description: "My master’s thesis research project which uses deep learning to predict future functional ultrasound (fUS) activity from past imaging data."
category: "Neuroimaging Deep Learning"
technologies:
  - Python
  - Pytorch
  - Signal processing
links:
- label: "GitHub"
  icon: "fab fa-github"
  url: "https://github.com/brynnhs/fUSPredict"
---

## Overview

fUS imaging captures cerebral blood flow dynamics at high spatiotemporal resolution, producing rich sequences of brain activity over time. This project frames future frame prediction as a spatiotemporal sequence modeling problem — given N past fUS frames, predict what comes next.
The work started with a persistence baseline (predicting the next frame as identical to the current one) to characterize the temporal autocorrelation structure of fUS data and establish a meaningful lower bound for model evaluation. The next stage is autoregressive modeling, working toward architectures that can capture both local spatial patterns and longer-range temporal dependencies in cerebral blood flow. The final stage is to move onto deeper models, starting with ConvLSTM and progressing to autoencoders and pretrained backbones. 

<!-- ## Features

- Feature one
- Feature two
- Feature three

## Technologies Used

- **JavaScript**: For interactivity
- **HTML/CSS**: For structure and styling -->

## Results

in progress... 
