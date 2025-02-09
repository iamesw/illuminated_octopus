---
layout: layouts/base.njk
title: Holiday Prints
description: Annual print for the holidays
date: 2003-12
tags:
  - graphic design
  - linocut
  - series
  - print
eleventyNavigation:
  key: Xmas Prints
  parent: Prints + Paintings
---

{% set navPages = collections.all | eleventyNavigationBreadcrumb("Xmas Prints") %}
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
            <figcaption>Series</figcaption>
            <figcaption>Linocuts</figcaption>
            <hr>
        </div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
            {%_image "xmas_p1.jpg", "linocut christmas print" %} <figcaption>2003  |  1 Color Linocut and Acrylic Stencil</figcaption>
        </div>
    </div>
    <div class="row">
        <div class="col">{%_image "xmas_p5.jpg", "linocut christmas print" %}<figcaption>2007  |  2 Color Linocut and Ink Stamp</figcaption></div>
        <div class="col">{%_image "xmas_p4.jpg", "linocut christmas print" %}<figcaption>2006  |  2 Color Linocut</figcaption></div>
        <div class="col">{%_image "xmas_p3.jpg", "linocut christmas print" %}<figcaption>2005  |  2 Color Linocut</figcaption></div>
    </div>
    <div class="row">
        <div class="col">{%_image "xmas_p2.jpg", "linocut christmas print" %}<figcaption>2004  |  2 Color Linocut</figcaption></div>
        <div class="col">{%_image "xmas_p1.jpg", "linocut christmas print" %}<figcaption>2003  |  1 Color Linocut and Acrylic Stencil</figcaption></div>
        <div class="col"></div>
    </div>
</div>