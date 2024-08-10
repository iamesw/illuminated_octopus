---
layout: layouts/base.njk
title: Art After 5
description: Poster for portraiture exhibition
date: 2017-11-02
tags:
  - graphic design
  - marketing
  - poster
  - social media assets
eleventyNavigation:
  key: AA5 - 2017
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("AA5 - 2017") %}
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
			<figcaption>2017 | Birmingham Museum of Art</figcaption>
			<figcaption>Poster | Social Media Assets</figcaption>
			<figcaption>Fonts in Use:</br>Paper cut out</br>based on Akzidenz Grotesk</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "aa5_1.jpg", "Poster for a program" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
    	<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			<figcaption>Social Media Digital Assets</figcaption>
    	</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "aa5_18.jpg", "Poster for a program" %}
			</br></br>
			{% _image "aa5_11.jpg", "Poster for a program" %}
			</br></br>
			{% _image "aa5_2.jpg", "Poster for a program" %}
			</br></br>
			{% _image "aa5_3.jpg", "Poster for a program" %}
		</div>
		<div class="col">
			{% _image "aa5_5.jpg", "Poster for a program" %}
			</br></br>
			{% _image "aa5_4.jpg", "Poster for a program" %}
			</br></br>
			{% _image "aa5_16.jpg", "Poster for a program" %}
			</br></br>
			{% _image "aa5_15.jpg", "Poster for a program" %}
			</br></br>
			{% _image "aa5_14.jpg", "Poster for a program" %}
			</div>
		<div class="col">
			{% _image "aa5_9.jpg", "Poster for a program" %}
			</br></br>
			{% _image "aa5_10.jpg", "Poster for a program" %}
			</br></br>
			{% _image "aa5_13.jpg", "Poster for a program" %}
			</br></br>
			{% _image "aa5_17.jpg", "Poster for a program" %}
			</br></br>
			{% _image "aa5_12.jpg", "Poster for a program" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>