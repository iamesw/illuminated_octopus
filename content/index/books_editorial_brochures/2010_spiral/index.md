---
layout: layouts/base.njk
title: Spiral – Perspectives on an African American Art Collective
description: Gallery Guide for exhibition of African American art from the Spiral Collective.
date: 2010-12-10
tags:
  - graphic design
  - exhibition
  - gallery guide
eleventyNavigation:
  key: Spiral Gallery Guide
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Spiral Gallery Guide") %}
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
            <figcaption>Gallery Guide</br>8 pages / selfcover</figcaption>
			<figcaption>Fonts in use:</br>Sentinel and Mercury</figcaption>
			<hr>
		    	<p>In the early 1960s in New York, the artist Romare Bearden invited a group of African-American artists to meet and discuss their roles as black artists during the charged years of the Civil Rights movement. On July 5th, 1963, the group decided to form a collective and called themselves Spiral. The name was inspired by the Archimedean spiral, which moves outward embracing all directions, yet constantly upward.</P>
				<p>This exhibition, <em>Spiral: Perspectives on an African-American Art Collective</em>, featured work by Romare Bearden, Norman Lewis, Charles Alston, Hale Woodruff, Reginald Gammon, Richard Mayhew, and Emma Amos.</p>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "spiral_1.jpg", "cover with illustrated cover" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
            {% _image "spiral_2.jpg", "book layout" %}
        </br></br>
            {% _image "spiral_3.jpg", "book layout" %}
        </br></br>
            {% _image "spiral_4.jpg", "book layout" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
  	</div>
	<div class="row">
		<div class="col"></div>
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
            {% _image "spiral_5.jpg", "book layout" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
  	</div>
</div>