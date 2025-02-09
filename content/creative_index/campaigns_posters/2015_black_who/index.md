---
layout: layouts/base.njk
title: Black Like Who?
description: Poster for exhibition
date: 2015-07-11
tags:
  - graphic design
  - marketing
  - poster
  - exhibition
eleventyNavigation:
  key: black like who
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("black like who") %}
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
			<figcaption>2015 | Birmingham Museum of Art</figcaption>
			<figcaption>Poster</figcaption>
			<figcaption>Fonts in Use:</br>Akzidenz Grotesk</figcaption>
            <hr>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "who_11.jpg", "Poster for an art exhibition" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "who_13.jpg", "Poster for an art exhibition" %}
		</div>
		<div class="col">
			{% _image "who_10.jpg", "Poster for an art exhibition" %}
		</div>
        <div class="col">
			{% _image "who_12.jpg", "Poster for an art exhibition" %}
		</div>
	</div>
</div>