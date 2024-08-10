---
layout: layouts/base.njk
title: Norman Rockwell's America
description: campaign for an exhibition of Norman Rockwell paintings
date: 2016-02-04
tags:
  - graphic design
  - marketing
  - poster
  - exhibition
  - campaign
eleventyNavigation:
  key: rockwell 2012
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("rockwell 2012") %}
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
			<figcaption>2012 | Birmingham Museum of Art</figcaption>
			<figcaption>Campaign</figcaption>
			<figcaption>Fonts in Use:</br>Trade Gothic and Wisdom Script</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "rockwell_2.jpg", "poster for an art exhibition" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "rockwell_3.jpg", "poster for an art exhibition" %}
		</div>
		<div class="col">
			{% _image "rockwell_4.jpg", "poster for an art exhibition" %}
		</div>
		<div class="col">
			{% _image "rockwell_5.jpg", "poster for an art exhibition" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>