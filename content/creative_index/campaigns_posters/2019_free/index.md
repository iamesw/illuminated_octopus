---
layout: layouts/base.njk
title: Art Free For All
description: campaign to highlight free general admission for an art museum
date: 2019-08-15
tags:
  - graphic design
  - marketing
  - poster
  - sign
  - billboard
eleventyNavigation:
  key: free for all
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("free for all") %}
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
			<figcaption>2019 | Birmingham Museum of Art</figcaption>
			<figcaption>Poster | Out of House</figcaption>
			<figcaption>Fonts in Use:</br>Akzidenz Grotesk</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
      		{% _image "free_1.jpg", "poster for an art museum" %}
			<figcaption>Building Banner</figcaption>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
      		{% _image "free_2.jpg", "poster for an art museum" %}
			<figcaption>Billboard</figcaption>
		</div>
		<div class="col">
      		{% _image "free_3.jpg", "poster for an art museum" %}
			<figcaption>Pre-roll Theater Ad</figcaption>
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
      		{% _image "free_6.jpg", "poster for an art museum" %}
			<figcaption>Installation at the Birmingham airport</figcaption>
			</br>
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>