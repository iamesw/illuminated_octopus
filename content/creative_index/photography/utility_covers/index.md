---
layout: layouts/base.njk
title: Utility Covers
description: Photography of utility covers
date: 2008-08
tags:
  - photography
  - utility covers
  - series
eleventyNavigation:
  key: Utility Covers
  parent: Photography
---

{% set navPages = collections.all | eleventyNavigationBreadcrumb("Utility Covers") %}
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
            <figcaption>Ongoing Series</br>iPhone</figcaption>
            <figcaption><a href=#DET>DET</a>  |  <a href=#MAD>MAD</a>  |  <a href=#ZGZ>ZGZ</a>  |  <a href=#BCA>BCA</a></figcaption>
            <p>Ongoing series of photographs of utility covers. Taken while walking new places, old places. A meditation on man-made art objects cross-referenced with location. One perhaps to be revisited to see the impact and process of aging. </p>
        </div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
        </div>
        <div class="col-1 col-1-md col-1-lg"></div>
    </div>
    <hr>
    {% include "partials/utility/det.njk" %}
    <hr>
    {% include "partials/utility/mad.njk" %}
    <hr>
    {% include "partials/utility/zgz.njk" %}
    <hr>
    {% include "partials/utility/bca.njk" %}
</div>