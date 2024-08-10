---
layout: layouts/base.njk
title: Leonardo da Vinci Press Luncheon Invitation
description: Opening invitation for a folk art exhibition
date: 2001-08-15
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2007 leo press
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2007 leo press") %}
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
			<figcaption>2008 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Adobe Jenson, and Cloister Open Face</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "leo_02.jpg", "event invitation" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "leo_01.jpg", "event invitation" %}
			<figcaption>Card 1 - Front</figcaption>
		</div>
        <div class="col">
			{% _image "leo_02.jpg", "event invitation" %}
			<figcaption>Card 1 - Back</figcaption>
		</div>
		<div class="col"></div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col"></div>
		<div class="col">
			{% _image "leo_03.jpg", "event invitation" %}
			<figcaption>Card 2 - Front</figcaption>
		</div>
        <div class="col">
			{% _image "leo_04.jpg", "event invitation" %}
			<figcaption>Card 2 - Back</figcaption>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>