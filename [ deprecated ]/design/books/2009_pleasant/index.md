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
  key: suspended-gg
  parent: Books + Editorial + Ephemera
---

<div class="container">
  <div class="row">
    <div class="col">
  		{% set navPages = collections.all | eleventyNavigationBreadcrumb("suspended-gg") %}
	  	<ul class="post-breadcrumb">
		      {%- for entry in navPages %}
			  <li{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}> » <a href="{{ entry.url }}">{{ entry.title }}</a></li>
  			  {%- endfor %}
	    	<li><active-breadcrumb>» {{ title }}</active-breadcrumb></li>
			</ul>
    </div>
  </div>
  <hr>
  <div class="row"></div>
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
			<hr>
			<figcaption>2009 | Birmingham Museum of Art</figcaption>
			<figcaption>Gallery Guide / Poster</br>4 pages / selfcover</br>Typeset in Akzidenz Grotesk and Weiss</figcaption>
			<hr>
		    	<p>Birmingham artist Amy Pleasant created a site-specific drawing installation that wrapped the four walls of the Museum’s Lower Sculpture Garden. This was the artist’s first wall drawing created without her signature figurative imagery. The work was a “cloudscape” executed in black exterior paint directly on the walls of this “outdoor gallery.” <em>Suspended</em> evolved from a series of drawings the artist made while viewing the clouds from a plane window.</p>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
			{% _image "pleasant_1.jpg", "exhibition gallery guide cover" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
            {% _image "pleasant_0.jpg", "book layout" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "pleasant_2.jpg", "book layout" %}
		</div>
	</div>
	<div class="row">
		<div class="col"></div>
        <div class="col-12 col-12-md col-9-lg">
		    {% _image "pleasant_3.jpg", "book layout" %}
		</div>
	</div>
</div>