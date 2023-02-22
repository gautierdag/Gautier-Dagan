---
title: "Positional Language Modelling"
layout: post
date: 2019-2-01 10:00
tag:
  - NLP
  - Pytorch
  - Language Modelling
image: /assets/images/attention.png
headerImage: true
projects: true
hidden: true # don't count this post in blog pagination
description: "Positional Attention in Language Modelling"
category: project
author: gautierdagan
externalLink: false
---

This was an independent research project through the Institute for Logic, Language, and Computation under the supervision of Dr. Elia Bruni.

In this paper, we proposed using the Positional Attention mechanism in an Attentive Language Model architecture. We evaluate it compared to an LSTM baseline and standard attention and find that it surpasses standard attention on both validation and test perplexity on both the Penn Treebank and Wikitext-02 datasets while still using fewer parameters. Using the attention distribution vectors we are able to analyze the differences between the two mechanisms and offer insight into the potential benefits of positional attention.

Standard Attention:
![Standard Attention](/assets/images/attention.png)

Positional Attention:
![Positional Attention](/assets/images/attentionpos.png)

You can view the full PDF report [here](/assets/pdfs/PAIReport.pdf) and the Github repo can be found [here](https://github.com/gautierdag/pytorch-attentive-lm)

Update (september/2020):
This work was included as part of an official research paper and published to [ACL 2020](https://aclanthology.org/2020.acl-main.39.pdf).
