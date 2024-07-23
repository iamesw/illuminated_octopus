---
layout: layouts/base.njk
title: Amy Pleasant // Suspended
description: Gallery Guide for outdoor installation by Amy Pleasant
date: 2009-11-01
tags:
  - graphic design
  - exhibition
  - gallery guide
eleventyNavigation:
  key: Suspended Gallery Guide
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Suspended Gallery Guide") %}
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
			<hr>
			<figcaption>2009 | Birmingham Museum of Art</figcaption>
			<figcaption>Gallery Guide / Poster</br>4 pages / selfcover</figcaption>
			<figcaption>Fonts in use:</br>Akzidenz Grotesk and Weiss</figcaption>
			<hr>
		    	<p>Birmingham artist Amy Pleasant created a site-specific drawing installation that wrapped the four walls of the Museum’s Lower Sculpture Garden. This was the artist’s first wall drawing created without her signature figurative imagery. The work was a “cloudscape” executed in black exterior paint directly on the walls of this “outdoor gallery.” <em>Suspended</em> evolved from a series of drawings the artist made while viewing the clouds from a plane window.</p>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "pleasant_1.jpg", "exhibition gallery guide cover" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
	    <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
            {% _image "pleasant_0.jpg", "book layout" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
	    <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "pleasant_2.jpg", "book layout" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col"></div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
		    {% _image "pleasant_3.jpg", "book layout" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>