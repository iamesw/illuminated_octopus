---
layout: layouts/base.njk
title: Beyond the Ordinary
description: invitation for an event
date: 2015-05-02
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2020 mb
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2020 mb") %}
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
			<figcaption>2020 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Lust, Pompadour Numerals, and Nobel</figcaption>
            <hr>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "mb_2020_5.jpg", "event invitation" %}
			</br>
			{% _image "mb_2020_6.jpg", "event invitation" %}
			<figcaption>Save the Date</figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col-6 col-6-md col-6-lg">
			{% _image "mb_2020_0.jpg", "event invitation" %}
			<figcaption>Invitation</figcaption>
		</div>
		<div class="col"></div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "mb_2020_2.jpg", "event invitation" %}
		</div>
	</div>
</div>