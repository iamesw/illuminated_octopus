---
layout: layouts/base.njk
title: Guide to the Collection
description: Handbook of the Birmingham Museum of Art collection
date: 2018-04-18
tags:
  - graphic design
  - catalog
eleventyNavigation:
  key: BMA Handbook
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("BMA Handbook") %}
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
            <figcaption>Book</br>286 pages / softcover / perfect bound</figcaption>
            <figcaption>Fonts in use:</br>Akzidenz Grotesk and Mercury</figcaption>
			<hr>
		    	<p>Published in anticipation of the Birmingham Museum of Art’s 60th anniversary. The guide featured highlights of the museum’s collection.</p>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "handbook_1.jpg", "book cover with abstract art as background image" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
            {% _image "handbook_2.png", "book cover with abstract art as background image" %}
        </br></br>
            {% _image "handbook_3.jpg", "book layout" %}
        </br></br>
            {% _image "handbook_4.jpg", "book layout" %}
        </br></br>
            {% _image "handbook_5.jpg", "book layout" %}
        </br></br>
            {% _image "handbook_6.jpg", "book layout" %}
        </br></br>
            {% _image "handbook_7.jpg", "book layout" %}
        </br></br>
            {% _image "handbook_8.jpg", "book layout" %}
        </br></br>
            {% _image "handbook_9.jpg", "book layout" %}
        </br></br>
            {% _image "handbook_10.jpg", "book layout" %}
        </br></br>
            {% _image "handbook_11.jpg", "book layout" %}
        </br></br>
            {% _image "handbook_12.jpg", "book layout" %}
        </br></br>
            {% _image "handbook_13.jpg", "book layout" %}
        </br></br>
            {% _image "handbook_14.jpg", "book layout" %}
        </br></br>
            {% _image "handbook_15.jpg", "book layout" %}
        </br></br>
            {% _image "handbook_16.jpg", "book layout" %}
        </br></br>
            {% _image "handbook_17.jpg", "book layout" %}
        </br></br>
            {% _image "handbook_18.jpg", "book layout" %}
        </br></br>
            {% _image "handbook_19.jpg", "book layout" %}
        </br></br>
            {% _image "handbook_20.jpg", "book layout" %}
        </div>
        <div class="col-1 col-1-md col-1-lg"></div>
  	</div>
</div>