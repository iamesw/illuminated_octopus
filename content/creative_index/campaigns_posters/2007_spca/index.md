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
		<div class="col-4 col-4-md col-4-lg">
			<h1>{{ title }}</h1>
			<figcaption>2007 | SPCA of Bakersfield</figcaption>
			<figcaption>Posters</figcaption>
			<figcaption>Fonts in Use:</br>DIN</figcaption>
            <hr>
			<div class="spacer-sm"></div>
			{% _image "spca_2.jpg", "Poster for the society for the prevention of cruelty to animals" %}
		</div>
		<div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
		{% _image "spca_1.jpg", "Poster for the society for the prevention of cruelty to animals" %}
		</div>
	</div>
</div>