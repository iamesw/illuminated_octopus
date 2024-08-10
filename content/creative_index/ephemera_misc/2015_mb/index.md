---
layout: layouts/base.njk
title: An Evening in Reverie
description: invitation for an event
date: 2015-05-02
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2015 mb
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2015 mb") %}
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
			<figcaption>2015 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Mrs. Eaves, Mr. Eaves Sans, and Riviera Script</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "mb_2015_3.jpg", "event invitation" %}
			</br>
			{% _image "mb_2015_4.jpg", "event invitation" %}
			<figcaption>Save the Date</figcaption>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mb_2015_5.jpg", "event invitation" %}
			<figcaption>Tri-fold Invitation</figcaption>
		</div>
		<div class="col">
			{% _image "mb_2015_6.jpg", "event invitation" %}
		</div>
		<div class="col">
			{% _image "mb_2015_7.jpg", "event invitation" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>