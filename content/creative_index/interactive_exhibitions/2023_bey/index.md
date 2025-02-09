---
layout: layouts/base.njk
title: The Birmingham Project Revisited
description: Exhibition design for a Dawoud Bey photography commission commemorating the 50th anniversary of the 16th st baptist church bombing
date: 
tags:
  - graphic design
  - exhibition design
  - environmental graphics
  - exhibition
eleventyNavigation:
  key: 2023 Bey
  parent: Interactive + Exhibitions
---

{% set navPages = collections.all | eleventyNavigationBreadcrumb("2023 Bey") %}
<div class="breadcrumb">
    <h3 class="visually-hidden">Breadcrumb</h3>
    <ul class="nav">
            {%- for entry in navPages %}
        <li class="nav-item"{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}> » <a href="{{ entry.url }}">{{ entry.title }}</a></li>
            {%- endfor %}
        <li class="nav-item"><active-breadcrumb>» {{ title }}</active-breadcrumb></li>
    </ul>
</div>
<div class="container">
    <div class="row"></div>
    <div class="row">
        <div class="col-4 col-4-md col-4-lg">
            <h1>{{ title }}</h1>
            <figcaption>2023 | Birmingham Museum of Art</figcaption>
            <figcaption>Exhibition Design</figcaption>
            <hr>
        </div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
            {% _image "bey_2023_00.png", "" %}
        </div>
    </div>
    <div class="row">
        <div class="col">{% _image "bey_2023_24.jpg", "" %}</div>
    </div>
    <div class="row">
        <div class="col"></div>
        <div class="col-9 col-9-md col-9-lg">{% _image "bey_2023_5.jpg", "" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "bey_2023_21.png", "" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "bey_2023_12.jpg", "" %}</div>
        <div class="col">{% _image "bey_2023_14.jpg", "" %}</div>
        <div class="col">{% _image "bey_2023_15.jpg", "" %}</div>
        <div class="col">{% _image "bey_2023_16.jpg", "" %}</div>
    </div> 
    <div class="row">
        <div class="col-9 col-9-md col-9-lg">{% _image "bey_2023_8.jpg", "" %}</div>
        <div class="col"></div>
    </div>
    <div class="row">
        <div class="col"></div>
        <div class="col-9 col-9-md col-9-lg">{% _image "bey_2023_9.jpg", "" %}</div>
    </div>
    <div class="row">
        <div class="col"></div>
        <div class="col-9 col-9-md col-9-lg">{% _image "bey_2023_7.jpg", "" %}</div>
    </div>
</div>