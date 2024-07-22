---
layout: layouts/base.njk
title: Katsinas – Wilson Tawaquaptewa - The Dick Jemison Collection
description: Gallery Guide for exhibition of Native American Katsina figures
date: 2010-04-18
tags:
  - graphic design
  - exhibition
  - gallery guide
eleventyNavigation:
  key: Katsinas Gallery Guide
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Katsinas Gallery Guide") %}
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
			<figcaption>2010 | Birmingham Museum of Art</figcaption>
            <figcaption>Gallery Guide</br>8 pages / selfcover</figcaption>
            <figcaption>Fonts in use:</br>Akzidenz Grotesk and Weiss</figcaption>
			<hr>
		    	<p>Gallery guide for an exhibition of Hopi Katsina figures.</p>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "katsinas_1.jpg", "cover with illustrated cover" %}
		</div>
    <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
        <div class="col-1 col-1-md col-1-lg"></div>
    		<div class="col">
            {% _image "katsinas_2.jpg", "book layout" %}
        </br></br>
            {% _image "katsinas_3.jpg", "book layout" %}
        </br></br>
            {% _image "katsinas_4.jpg", "book layout" %}
        </br></br>
            {% _image "katsinas_6.jpg", "book layout" %}
        </div>
        <div class="col-1 col-1-md col-1-lg"></div>
  	</div>
</div>