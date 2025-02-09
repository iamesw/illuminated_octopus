---
layout: layouts/base.njk
title: Collectors Circle Event Invitation Suite
description: invitation for an event
date: 2015-10-22
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2015 cc
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2015 cc") %}
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
			<figcaption>2015 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Courier</figcaption>
            <hr>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "cc_2015_4.jpg", "event invitation" %}
		</div>
	</div>
	<div class="row">
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "cc_2015_2.jpg", "event invitation" %}
			<figcaption>Invitation</figcaption>
		</div>
        <div class="col">
			{% _image "cc_2015_3.jpg", "event invitation" %}
		</div>
	</div>
	<div class="row">
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col"></div>
		<div class="col">
			{% _image "cc_2015_4.jpg", "event invitation" %}
			<figcaption>Response Card</figcaption>
		</div>
        <div class="col">
			{% _image "cc_2015_5.jpg", "event invitation" %}
		</div>
	</div>
	<div class="row">
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "cc_2015_1.jpg", "event invitation" %}
			<figcaption>Envelopes</figcaption>
		</div>
        <div class="col">
			{% _image "cc_2015_6.jpg", "event invitation" %}
		</div>
	</div>
</div>