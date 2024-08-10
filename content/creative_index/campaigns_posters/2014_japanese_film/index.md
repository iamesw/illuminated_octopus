---
layout: layouts/base.njk
title: Japanese Film Festival
description: Poster for japanese film festival
date: 2014-08-07
tags:
  - graphic design
  - marketing
  - poster
  - social media assets
eleventyNavigation:
  key: japanese film
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("japanese film") %}
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
			<figcaption>2014 | Birmingham Museum of Art</figcaption>
			<figcaption>Poster | Social Media Assets</figcaption>
			<figcaption>Fonts in Use:</br>Algre Sans and Futura</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
      		{% _image "japanese_film_1.jpg", "Poster with a film still of samurai in a field with an overlaid red circle" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
    	<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			<figcaption>Social Media Digital Assets</figcaption>
    	</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
	      {% _image "japanese_film_3.jpg", "Poster with a film still of samurai in a field with an overlaid red circle" %}
		</div>
		<div class="col">
	      {% _image "japanese_film_2.jpg", "Poster with a film still of samurai in a field with an overlaid red circle" %}
		</div>
		<div class="col">
	      {% _image "japanese_film_4.jpg", "Poster with a film still of samurai in a field with an overlaid red circle" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>