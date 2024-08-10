---
layout: layouts/base.njk
title: Museum Map
description: Marketing materials for photography exhibition
date: 2001-08-15
tags:
  - graphic design
  - marketing
  - exhibition
  - student work
eleventyNavigation:
  key: Museum Map - 2018
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Museum Map - 2018") %}
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
			<figcaption>2018 | Birmingham Museum of Art</figcaption>
			<figcaption>Tri-fold Brochure</figcaption>
			<figcaption>Fonts in Use</br>Akzidenz Grotesk</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "map_2018_1.jpg", "map brochure" %}
		</div>
		<div class="col">
			{% _image "map_2018_1s.jpg", "map brochure" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "map_2018_2.jpg", "map brochure" %}
		</div>
		<div class="col">
			{% _image "map_2018_2s.jpg", "map brochure" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "map_2018_3.jpg", "map brochure" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "map_2018_3s.jpg", "map brochure" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>