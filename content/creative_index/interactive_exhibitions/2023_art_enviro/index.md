---
layout: layouts/base.njk
title: Art + the Environment
description: 
date: 
tags:
  - graphic design
  - exhibition
  - environmental graphics
eleventyNavigation:
  key: Art Enviro Ex
  parent: Interactive + Exhibitions
---

{% set navPages = collections.all | eleventyNavigationBreadcrumb("Art Enviro Ex") %}
<div class="breadcrumb">
    <h3 class="visually-hidden">Breadcrumb</h3>
    <ul class="nav">
            {%- for entry in navPages %}
        <li class="nav-item"{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}> » <a href="{{ entry.url }}">{{ entry.title }}</a></li>
            {%- endfor %}
        <li class="nav-item"><active-breadcrumb>» {{ title }}</active-breadcrumb></li>
    </ul>
</div>
</div>
<div class="container">
    <div class="row"></div>
    <div class="row">
        <div class="col-4 col-4-md col-4-lg">
            <h1>{{ title }}</h1>
            <figcaption>2023 | Birmingham Museum of Art</figcaption>
            <figcaption>Exhibition Design | Environmental Graphics</figcaption>
            <figcaption>Fonts in Use:</br>Oswald</br>Public Sans</figcaption>
            <hr>
        </div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
            {% _image "art_enviro_1.jpg", "exhibition didactic panel" %}
        </div>
    </div>
    <div class="row">
        <div class="col">{% _image "art_enviro_2.jpg", "exhibition didactic panel" %}</div>
        <div class="col">{% _image "art_enviro_3.jpg", "exhibition didactic panel" %}</div>
        <div class="col">{% _image "art_enviro_4.jpg", "exhibition didactic panel" %}</div>
        <div class="col">{% _image "art_enviro_5.jpg", "exhibition didactic panel" %}</div>
        <div class="col">{% _image "art_enviro_6.jpg", "exhibition didactic panel" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "art_enviro_0.jpg", "exhibition layout diagram" %}</div>
    </div>
</div>