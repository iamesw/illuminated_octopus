---
layout: layouts/base.njk
title: The Original Makers
description: Poster for a folk art exhibition
date: 2018-06-16
tags:
  - graphic design
  - marketing
  - exhibition
eleventyNavigation:
  key: Cargo Poster
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Cargo Poster") %}
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
			<figcaption>Poster</figcaption>
			<figcaption>Fonts in Use:</br>Bureau Grotesque and Akzidenz Grotesk</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "cargo_3.jpg", "Poster for an exhibition of folk art" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>