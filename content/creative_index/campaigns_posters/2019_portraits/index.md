---
layout: layouts/base.njk
title: Ways of Seeing - Portraits
description: Poster for portraiture exhibition
date: 2019-08-31
tags:
  - graphic design
  - marketing
  - exhibition
eleventyNavigation:
  key: WoS Portraits Poster
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("WoS Portraits Poster") %}
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
			<figcaption>2019 | Birmingham Museum of Art</figcaption>
			<figcaption>Poster</figcaption>
			<figcaption>Fonts in Use:</br>Akzidenz Grotesk</figcaption>
            <hr>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "portraits.jpg", "Poster for a portraiture exhibition" %}
		</div>
	</div>
</div>