---
layout: layouts/base.njk
title: Extreme Gulf Present
description: Poster for lecture
date: 2016-07-28
tags:
  - graphic design
  - marketing
  - poster
  - lecture
eleventyNavigation:
  key: artpapers live gulf
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("artpapers live gulf") %}
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
		<div class="col">
			<h1>{{ title }}</h1>
			<figcaption>2016 | Birmingham Museum of Art</figcaption>
			<figcaption>Poster</figcaption>
			<figcaption>Fonts in Use:</br>Akzidenz Grotesk</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
	      {% _image "gulf_3.jpg", "Poster for a lecture" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
    	<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			<figcaption>Alternate ad / handbill layouts</figcaption>
    	</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
    	<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
	      {% _image "gulf_1.jpg", "Poster for a lecture" %}
		</div>
		<div class="col">
	      {% _image "gulf_2.jpg", "Poster for a lecture" %}
		</div>
        <div class="col">
	      {% _image "gulf_4.jpg", "Poster for a lecture" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>