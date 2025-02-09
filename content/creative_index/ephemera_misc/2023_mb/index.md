---
layout: layouts/base.njk
title: Bollywood Nights
description: invitation for an event
date: 2023-05-06
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2023 mb
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2023 mb") %}
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
			<figcaption>2023 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Lust and Nobel</figcaption>
            <hr>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "mb_2023_1.png", "event invitation" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "mb_2023_3.png", "event invitation" %}
		</div>
	</div>
	<div class="row">
		<div class="col"></div>
		<div class="col-9 col-9-md col-9-lg">
			{% _image "mb_2023_2.png", "event invitation" %}
		</div>
	</div>
</div>