---
layout: layouts/base.njk
title: Pop / Op Art Themed Invitation Concept
description: invitation for an event
date: 2019-05-04
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2019 mb
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2019 mb") %}
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
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Macula, Acier, and Neutra</figcaption>
            <hr>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "mb_2019_12.png", "event invitation" %}
			<figcaption>Three invitation pieces stacked and wrapped in small "folder" with band holding all pieces together.</figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "mb_2019_11.jpg", "event invitation" %}
			<figcaption>Single Fold Invitation | Can be swapped with Save the Date</figcaption>
		</div>
		<div class="col">
			{% _image "mb_2019_10.jpg", "event invitation" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "mb_2019_9.jpg", "event invitation" %}
			<figcaption>Wrap</figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "mb_2019_5.jpg", "event invitation" %}
			<figcaption>Save the Date Card | Can be swapped with Invitation</figcaption>
		</div>
		<div class="col">
			{% _image "mb_2019_6.jpg", "event invitation" %}
		</div>
		<div class="col">
			{% _image "mb_2019_7.jpg", "event invitation" %}
			</br>
			{% _image "mb_2019_14.jpg", "event invitation" %}
			<figcaption>Committee Card</figcaption>
		</div>
		<div class="col">
			{% _image "mb_2019_8.jpg", "event invitation" %}
			<figcaption>RSVP Card</figcaption>
		</div>
	</div>
</div>