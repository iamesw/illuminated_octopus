---
layout: layouts/base.njk
title: The Lotus Blossom Ball
description: invitation for an event
date: 2009-05-02
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2009 mb
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2009 mb") %}
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
			<figcaption>2009 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>P22 Johnston Underground and P22 FLLW Exhibition</figcaption>
            <hr>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "mb_2009_1.jpg", "event invitation" %}
		</div>
	</div>
	<div class="row">
		<div class="col"></div>
		<div class="col">
			{% _image "mb_2009_4.jpg", "event invitation" %}
			<figcaption>Invitation "Book" with z-fold pull out.</figcaption>
		</div>
		<div class="col-6 col-6-md col-6-lg">
			{% _image "mb_2009_6.jpg", "event invitation" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "mb_2009_5.jpg", "event invitation" %}
		</div>
	</div>
</div>