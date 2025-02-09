---
layout: layouts/base.njk
title: La Ville Magique
description: invitation for an event
date: 2014-05-03
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2014 mb
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2014 mb") %}
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
			<figcaption>2014 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Didot and Perugia Cursive</figcaption>
            <hr>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "mb_2014_5.jpg", "event invitation" %}
			</br>
			{% _image "mb_2014_6.jpg", "event invitation" %}
			<figcaption>Save the Date</figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col-3 col-3-md col-3-lg"></div>
		<div class="col-6 col-6-md col-6-lg">
			{% _image "mb_2014_1.jpg", "event invitation" %}
			<figcaption>Gatefold Invitation</figcaption>
		</div>
		<div class="col-3 col-3-md col-3-lg"></div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "mb_2014_2.jpg", "event invitation" %}
			</br>
			{% _image "mb_2014_3.jpg", "event invitation" %}
		</div>
	</div>
	<div class="row">
		<div class="col-3 col-3-md col-3-lg"></div>
		<div class="col-6 col-6-md col-6-lg">
			{% _image "mb_2014_4.jpg", "event invitation" %}
		<figcaption>Vellum Insert</figcaption>
		</div>
		<div class="col-3 col-3-md col-3-lg"></div>
	</div>
</div>