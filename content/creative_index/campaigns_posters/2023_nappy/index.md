---
layout: layouts/base.njk
title: Nappy Roots
description: Poster for exhibition of African American Art
date: 2023-07-08
tags:
  - graphic design
  - marketing
  - exhibition
eleventyNavigation:
  key: Nappy Roots Poster
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Nappy Roots Poster") %}
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
			{% _image "nappy_1.jpg", "Poster for a contemporary art exhibition about african american hair" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>