---
layout: layouts/base.njk
title: Deus Ex Machina
description: Paintings of Sloss Furnaces
date: 2008-08
tags:
  - painting
  - series
eleventyNavigation:
  key: Deus Ex Machina
  parent: Prints + Paintings
---

{% set navPages = collections.all | eleventyNavigationBreadcrumb("Deus Ex Machina") %}
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
            <figcaption>2008–2011 | Series</figcaption>
            <figcaption>Acrylic on Canvas</figcaption>
            <hr>
        </div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
            {%_image "machina_1.jpg", "abstract painting" %}
        </div>
    </div>
    <div class="row">
        <div class="col-5 col-5-md col-5-lg">
            {%_image "machina_2.jpg", "abstract painting" %}
            <div class="spacer-md"></div>
            {%_image "machina_3.jpg", "abstract painting" %}
            <figcaption>2009</figcaption>
        </div>
        <div class="col"></div>
        <div class="col-5 col-5-md col-5-lg">
            <div class="spacer-lg"></div>
            {%_image "machina_4.jpg", "abstract painting" %}
            <figcaption>2011</figcaption>
        </div> 
    </div>
</div>