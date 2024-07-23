---
layout: layouts/base.njk
title: Matt Wycoff – Variations
description: Catalog for contemporary exhibition
date: 2012-11-01
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: Variations Monograph
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Variations Monograph") %}
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
			<figcaption>2012 | Maus Contemporary | beta pictoris gallery</figcaption>
            <figcaption>Exhibition Catalog / Artist Monograph</br>153 pages / hardcover</figcaption>
            <figcaption>Fonts in use:</br>News Gothic and Verlag</figcaption>
			<hr>
		    	<p>Exhibition and career retrospective catalog for contemporary artist Matt Wycoff.</p>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "variations_1.jpg", "book cover" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
            {% _image "variations_2.jpg", "book cover" %}
        </br></br>
            {% _image "variations_3.jpg", "book layout" %}
        </br></br>
            {% _image "variations_4.jpg", "book layout" %}
        </br></br>
            {% _image "variations_5.jpg", "book layout" %}
        </br></br>
            {% _image "variations_6.jpg", "book layout" %}
        </br></br>
            {% _image "variations_7.jpg", "book layout" %}
        </br></br>
            {% _image "variations_8.jpg", "book layout" %}
        </br></br>
            {% _image "variations_9.jpg", "book layout" %}
        </br></br>
            {% _image "variations_10.jpg", "book layout" %}
        </br></br>
            {% _image "variations_11.jpg", "book layout" %}
        </div>
        <div class="col-1 col-1-md col-1-lg"></div>
  	</div>
</div>