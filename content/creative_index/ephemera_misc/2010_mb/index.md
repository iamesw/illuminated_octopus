---
layout: layouts/base.njk
title: The Decades Ball
description: invitation for an event
date: 2010-05-01
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2010 mb
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2010 mb") %}
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
			<figcaption>2010 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Archer and Neutra Sans</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "mb_2010_2.jpg", "event invitation" %}
			<figcaption>Save the Date</figcaption>
			{% _image "mb_2010_3.jpg", "event invitation" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mb_2010_1.jpg", "event invitation" %}
		<figcaption>Z-fold Invitation</figcaption>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		</div>
		<div class="col">
			<figcaption>Event Program</figcaption>
			{% _image "mb_2010_4.jpg", "event invitation" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mb_2010_5.jpg", "event invitation" %}
			</br></br>
			{% _image "mb_2010_6.jpg", "event invitation" %}
			</br></br>
			{% _image "mb_2010_8.jpg", "event invitation" %}
			</br></br>
			{% _image "mb_2010_10.jpg", "event invitation" %}
			</br></br>
			{% _image "mb_2010_11.jpg", "event invitation" %}
			</br></br>
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>