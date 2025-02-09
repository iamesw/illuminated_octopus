---
layout: layouts/base.njk
title: Vox Humana
description: Paintings of Sloss Furnaces workers
date: 2009-08
tags:
  - painting
  - marketingseries
eleventyNavigation:
  key: Vox Humana
  parent: Prints + Paintings
---

{% set navPages = collections.all | eleventyNavigationBreadcrumb("Vox Humana") %}
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
            <figcaption>2009–2010 | Series</figcaption>
            <figcaption>Acrylic on canvas</figcaption>
            <hr>
        </div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
            {%_image "humana_1.jpg", "abstract painting" %}
        </div>
    </div>
    <div class="row">
        <div class="col-5 col-5-md col-5-lg">
            {%_image "humana_2.jpg", "abstract painting" %}
        </div>
        <div class="col"></div>
        <div class="col-5 col-5-md col-5-lg">
            <div class="spacer-lg"></div>
            {%_image "humana_3.jpg", "abstract painting" %}
        </div> 
    </div>
</div>