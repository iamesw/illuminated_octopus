---
layout: layouts/base.njk
title: David Puxley
description: General materials for ceramics exhibition 
date: 2014-04-18
tags:
  - graphic design
  - exhibition
eleventyNavigation:
  key: Puxley Exhibition
  parent: Interactive + Exhibitions
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Puxley Exhibition") %}
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
			<h1>{{ title }}</br>Wedgwoods First Studio Potter</h1>
			<figcaption>2015 | Birmingham Museum of Art</figcaption>
			<figcaption>Poster</figcaption>
			<figcaption>Fonts in Use:</br>Akzidenz Grotesk and Mercury</figcaption>
			<hr>
		    	<p>Description of the Puxley exhibition to go here.</p>
			<hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
				{% _image "puxley_ex_1.jpg", "" %}
				<figcaption>Base illustration created for gallery guides and timeline graphics. Color palette for the illustration and other graphics were pulled from the glazes of Puxley's pottery.</figcaption>
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<hr>
		<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
        	{% _image "puxley_ex_2.png", "" %}
            </br>
            {% _image "puxley_ex_3.png", "" %}
            </br>
            {% _image "puxley_ex_4.png", "" %}
            <figcaption>Exhibition graphics featuring a timeline of the Wedgwood studio potter program, David Puxley's influences, and behind the scenes photography of Puxley at work.</figcaption>
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
  	</div>
</div>