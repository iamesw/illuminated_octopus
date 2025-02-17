---
layout: layouts/base.njk
title: WALLCEILINGFLOOR
description: Gallery Guide for exhibition of minimal and conceptual art
date: 2007-01-28
tags:
  - graphic design
  - exhibition
  - gallery guide
eleventyNavigation:
  key: wallceilingfloor Gallery Guide
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("wallceilingfloor Gallery Guide") %}
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
			<hr>
			<figcaption>2007 | Birmingham Museum of Art</figcaption>
			<figcaption>Gallery Guide</br>6 panel / tri-fold</figcaption>
			<figcaption>Fonts in use:</br>Univers</figcaption>
			<figcaption>Related Projects:</br>» <a href=/creative_index/ephemera_misc/2007_wallceilingfloor>Invitation</a></figcaption>
			<hr>
		    <p><em>WALLCEILINGFLOOR</em> presented work by three important figures in minimal and conceptual art.</p>
		</div>
		<div class="col"></div>
		<div class="col-6 col-6-md col-6-lg">
			{%_image "wallceilingfloor_1.jpg", "cover with sculpture" %}
		</div>
	</div>
	<div class="row">
		<div class="col"></div>
		<div class="col-9 col-9-md col-9-lg">
            {%_image "wallceilingfloor_2.jpg", "brochure layout" %}
        </div>
	</div>
	<div class="row">
		<div class="col">
		    {%_image "wallceilingfloor_3.jpg", "brochure layout" %}
		</div>
  	</div>
</div>