---
layout: layouts/base.njk
title: Birmingham Museum of Art 2012 Annual Report
description: 
date: 
tags:
  - graphic design
  - book
  - editorial
  - annual report
eleventyNavigation:
  key: 2012 AR
  parent: Books + Editorial + Brochures
---

{% set navPages = collections.all | eleventyNavigationBreadcrumb("2012 AR") %}
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
            <figcaption>2012 | Birmingham Museum of Art</figcaption>
            <figcaption>Annual Report</br>64 pages / softcover / perfect bound</figcaption>
            <figcaption>Fonts in Use:</br>Akzidenz Grotesk</br>Mercury</figcaption>
            <hr>
        </div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
            {% _image "AR_2012_1.jpg", "book cover with a highly decorated vietnamese ceramic jar on the cover" %}
        </div>
    </div>
    <div class="row">
        <div class="col">{% _image "AR_2012_2.jpg", "book spread" %}</div>
        <div class="col">{% _image "AR_2012_3.jpg", "book spread" %}</div>
        <div class="col">{% _image "AR_2012_4.jpg", "book spread" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "AR_2012_5.jpg", "book spread" %}</div>
        <div class="col">{% _image "AR_2012_6.jpg", "book spread" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "AR_2012_7.jpg", "book spread" %}</div>
        <div class="col">{% _image "AR_2012_8.jpg", "book spread" %}</div>
        <div class="col">{% _image "AR_2012_9.jpg", "book spread" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "AR_2012_10.jpg", "book spread" %}</div>
        <div class="col">{% _image "AR_2012_11.jpg", "book spread" %}</div>
    </div>
</div>