---
layout: layouts/base.njk
title: Masterpieces in Our Midst
description: invitation for an event
date: 2012-05-05
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2012 mb
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2012 mb") %}
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
			<figcaption>2012 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Brandon Grotesque</figcaption>
            <hr>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "mb_2012_5.jpg", "event invitation" %}
		</div>
	</div>
	<div class="row">
			<div class="col">
		{% _image "mb_2012_1.jpg", "event invitation" %}
		<figcaption>Z-fold Invitation</figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col-2 col-2-md col-2-lg"></div>
		<div class="col">
			{% _image "mb_2012_3.jpg", "event invitation" %}
			<figcaption>Save the Date</figcaption>
		</div>
		<div class="col">
			{% _image "mb_2012_4.jpg", "event invitation" %}
		</div>
	</div>
	<div class="row">
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col">
			{% _image "mb2012.png", "monogram" %}
			<figcaption>Event Monogram</figcaption>
		</div>
	</div>
</div>