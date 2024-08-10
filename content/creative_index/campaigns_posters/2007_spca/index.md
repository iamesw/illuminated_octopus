---
layout: layouts/base.njk
title: SPCA PSA
description: Marketing materials for photography exhibition
date: 2007-08-15
tags:
  - graphic design
  - marketing
  - poster
eleventyNavigation:
  key: SPCA bakersfield
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("SPCA bakersfield") %}
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
			<figcaption>2007 | SPCA of Bakersfield</figcaption>
			<figcaption>Poster</figcaption>
			<figcaption>Fonts in Use:</br>DIN</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
		{% _image "spca_1.jpg", "Poster for the society for the prevention of cruelty to animals" %}
		</br></br>
		{% _image "spca_2.jpg", "Poster for the society for the prevention of cruelty to animals" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>