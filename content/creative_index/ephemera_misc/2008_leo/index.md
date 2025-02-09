---
layout: layouts/base.njk
title: Leonardo da Vinci – Drawings from the Biblioteca Reale in Turin
description: Opening invitation for a folk art exhibition
date: 2001-08-15
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2007 leo press
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2007 leo press") %}
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
			<figcaption>2008 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Adobe Jenson, and Cloister Open Face</figcaption>
            <figcaption>Related Projects:</br>» <a href="/creative_index/books_editorial_brochures/2008_leo">Exhibition Catalog</a></figcaption>  
			<hr>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "leo_02.jpg", "event invitation" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "leo_01.jpg", "event invitation" %}
			<figcaption>Card 1 - Front</figcaption>
		</div>
        <div class="col">
			{% _image "leo_02.jpg", "event invitation" %}
			<figcaption>Card 1 - Back</figcaption>
		</div>
		<div class="col"></div>
	</div>
	<div class="row">
		<div class="col"></div>
		<div class="col">
			{% _image "leo_03.jpg", "event invitation" %}
			<figcaption>Card 2 - Front</figcaption>
		</div>
        <div class="col">
			{% _image "leo_04.jpg", "event invitation" %}
			<figcaption>Card 2 - Back</figcaption>
		</div>
	</div>
</div>