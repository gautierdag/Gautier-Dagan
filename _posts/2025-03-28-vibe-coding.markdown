---
title: "Vibe Coding a VSCode Extension"
layout: post
date: 2025-03-28 10:00
tag:
- TypeScript
- VSCode
image: /assets/images/vibe-coding.png
headerImage: true
projects: true
hidden: true # don't count this post in blog pagination
description: "I vibe coded a VSCode extension"
category: project
author: gautierdagan
externalLink: false
---

Was talking to a friend, about the trend of ["vibe coding"](https://en.wikipedia.org/wiki/Vibe_coding) where you just code with an Agent and let it do all the work for you based on vibes.
My friend does research with the CIA World Factbook datasets that incoporate a lot of country data and got me thinking to building a simple VSCode extension that would show a country flag emoji next to the ISO country code directly in your IDE.

There are VSCode extensions that do this for HTML color codes -- showing you the color next to the code or in the background of the code.
They are really nice to quickly see what a color code refers to, and I thought it would be a fun project to do something similar for country codes.

What if I could just see a country code like "SG" and have the flag emoji show up next to it in my code? Even better - what if I could hover over the code and see the full country name?

My first try using Copilot agent mode (Code Insiders) was unsuccessful.
It generated a lot of boiler-plate but didn't actually do anything.
Even after manually installing the extension, it didn't work.
I realise now that it was likely following an old VSCode npm version which had different APIs and was silently failing somewhere.

However after browsing the VScode instructions for creating an extension, I realised I could just generate a full template for a VSCode extension using the Yeoman generator.
After I had all the boiler hello-world in place I re-asked copilot to add the functionality I wanted.
It was able to do so in a couple of minutes and I was able to run the extension locally and test it out.

The quick learning here is probably that **if you can generate the boilerplate code using a template, you should do that first**. That should guarantee that you have the right dependencies and versions in place and the LLM can take it from there.

I had to jump into a few more hoops to publish the extension to the marketplace, but overall it easy and I was able to get it done in a matter of a couple of hours.

Anyways here is the link to the extension on the marketplace: [Country Flag Inline](https://marketplace.visualstudio.com/items?itemName=gautierdag.country-flag-hover)

It's been fun seeing NA display the Namibian flag.

And the source code is [here](https://github.com/gautierdag/flag-vscode-extension/).
