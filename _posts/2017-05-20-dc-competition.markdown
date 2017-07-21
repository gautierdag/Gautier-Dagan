---
title: "Northwestern Design Competition 2017"
layout: post
date: 2017-05-20 10:00
tag:
  - C++
  - Robotics
image: /assets/images/robot.jpg
headerImage: true
projects: true
hidden: true # don't count this post in blog pagination
description: "The Annual Northwestern Robotics Competition"
category: project
author: gautierdagan
externalLink: false
---

This was my second time competing in the annual robotics competition. This year the challenge was to design a robot that would carry a solo cup (on a platform above itself) around a maze, all the while an enemy team is piloting another robot looking to make the cup fall. Our strategy was to make the smallest and most compact robot in order to navigate the maze better, and then apply smart path finding with a utility function to select the best way to escape the maze.

The playing field had a Vive Lighthouse sensor above it, and the enemy robot broadcasted its own position to make things more interesting. We designed our robot with several Lighthouse sensors in order be able to get accurate X,Y coordinates of our robot on the field, and attached an Xbee wireless module to obtain the enemy robot's position. Unfortunately we also decided to include an advanced compass to help our robots sense of direction, but had not anticipated that the building in which the playing resided in was a large Faraday cage.

![Our Robot](/assets/images/robot.jpg)
<figcaption class="caption">Our robot with the Cup Platform and back Vive Lighthouse Sensors</figcaption>

I programmed our pathfinding algorithm, which was an modified A*. Using our knowledge of the Maze, the Teensy would divide the field into coordinates and pre-calculate all paths possible and all best escape paths (this was possible by us limiting the number of coordinates by knowing where the walls and obstacles were laid). Even though we did not win the competition, our implementation and robotics design did prove robust.


---
Stack:

- C++
- Arduino - Teensy 3.5
