---
title: "Co-evolution of Language and Agent"
layout: post
date: 2019-09-01 10:00
tag:
  - NLP
  - Pytorch
  - Meta-Learning
  - Referential Games
  - Multi-Agent
image: /assets/images/kirby.png
headerImage: true
projects: true
hidden: true # don't count this post in blog pagination
description: "Co-evolution of Language and Agent in Referential Games"
category: project
author: gautierdagan
externalLink: false
---

This was my Master's Thesis and was done through the Institute for Logic, Language, and Computation under the supervision of Dr. Elia Bruni and Dr. Dieuwke Hupkes.

Referential games offer a grounded learning environment for neural agents, that accounts for the functional aspects of language.
However, they fail to account for another fundamental aspect of human language: Because languages are transmitted from generation to generation, they have to be *learnable* by new language users, which makes them subject to *cultural evolution*. Recent work has shown that incorporating cultural evolution in referential game results in considerable improvements in the properties of the languages that emerge in the game. In this work, we first substantiate this claim with a different data set and a wider array of evaluation metrics. Then, drawing inspiration from linguistic theories of human language evolution, we consider a scenario in which not only cultural but also genetic evolution is integrated. As our core contribution, we introduce the *Language Transmission Engine*, in which *cultural* evolution of the language is combined with *genetic* evolution of the agents' architecture. We show that this *co-evolution* scenario leads to across-the-board improvements on all considered metrics. These results stress that cultural evolution is important for language emergence studies, but also the suitability of the architecture itself should be considered.

The full paper was published in [EACL 2021](https://aclanthology.org/2021.eacl-main.260/) and the Github repo can be found [here](https://github.com/gautierdag/cultural-evolution-engine).
