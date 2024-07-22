---
layout: layouts/base.njk
title: Dream – Contemporary Asian Works on Paper
description: Catalog for contemporary Asian works on paper exhibition
date: 2007-03-19
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: Dream Catalog
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Dream Catalog") %}
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
			<figcaption>2007 | Tina Newton Gallery</figcaption>
            <figcaption>Gallery Catalog</br>16 pages / softcover / saddlestich</figcaption>
            <figcaption>Fonts in use:</br>Univers</figcaption>
            </ul>
			<hr>
		    	<p>Small catalog for a group gallery show. The catalog was designed to work being read from front to back or back to front, including page numbering for both directions.</p>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{%_image "dream_1.jpg", "book cover" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
            {%_image "dream_2.jpg", "book cover" %}
        </br></br>
            {%_image "dream_3.jpg", "book layout" %}
        </br></br>
            {%_image "dream_4.jpg", "book layout" %}
        </br></br>
            {%_image "dream_5.jpg", "book layout" %}
        </br></br>
            {%_image "dream_6.jpg", "book layout" %}
        </br></br>
            {%_image "dream_7.jpg", "book layout" %}
        </br></br>
            {%_image "dream_8.jpg", "book layout" %}
        </br></br>
            {%_image "dream_9.jpg", "book layout" %}
        </br></br>
            {%_image "dream_10.jpg", "book layout" %}
        </div>
        <div class="col-1 col-1-md col-1-lg"></div>
  	</div>
    <div class="row">
		<div class="col"></div>
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
            {%_image "dream_11.jpg", "book layout" %}
      	</div>
		<div class="col-1 col-1-md col-1-lg"></div>
    </div>
</div>