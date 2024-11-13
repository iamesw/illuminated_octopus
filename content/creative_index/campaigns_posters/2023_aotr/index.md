---
layout: layouts/base.njk
title: Art on the Rocks 2023
description: Poster for exhibition of African American Art
date: 2023-07-08
tags:
  - graphic design
  - marketing
  - exhibition
eleventyNavigation:
  key: aotr 2023
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("aotr 2023") %}
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
			<figcaption>2023 | Birmingham Museum of Art</figcaption>
			<figcaption>Poster</figcaption>
			<figcaption>Fonts in Use:</br>Oswald and Public Sans</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "aotr_2023_2.jpg", "event poster" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>