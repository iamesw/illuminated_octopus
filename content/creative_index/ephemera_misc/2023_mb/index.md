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
		<div class="col">
			<h1>{{ title }}</h1>
			<figcaption>2023 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Lust and Nobel</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "mb_2023_1.png", "event invitation" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mb_2023_3.png", "event invitation" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col"></div>
		<div class="col-1 col-4-md col-8-lg">
			{% _image "mb_2023_2.png", "event invitation" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>