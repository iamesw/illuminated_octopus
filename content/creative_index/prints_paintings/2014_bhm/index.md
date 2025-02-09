---
layout: layouts/base.njk
title: BHM
description: Paintings of utility covers found in Birmingham, AL
date: 2014-12
tags:
  - painting
  - series
eleventyNavigation:
  key: BHM - Paintings
  parent: Prints + Paintings
---

{% set navPages = collections.all | eleventyNavigationBreadcrumb("BHM - Paintings") %}
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
            <figcaption>2014–2016 | Series</figcaption>
            <figcaption>Acrylic on canvas</figcaption>
            <hr>
        </div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
            {%_image "bhm_01.jpg", "abstract painting" %}
        </div>
    </div>
    <div class="row">
        <div class="col">{%_image "bhm_02.jpg", "abstract painting" %}</div>
        <div class="col">{%_image "bhm_03.jpg", "abstract painting" %}</div>
        <div class="col">{%_image "bhm_04.jpg", "abstract painting" %}</div>
    </div>
</div>