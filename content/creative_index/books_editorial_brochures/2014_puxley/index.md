---
layout: layouts/base.njk
title: David Puxley – Wedgwood's First Studio Potter
description: Gallery Guide for exhibition of Wedgwood studio pottery
date: 2014-04-18
tags:
  - graphic design
  - exhibition
  - gallery guide
eleventyNavigation:
  key: David Puxley Gallery Guide
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("David Puxley Gallery Guide") %}
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
			<figcaption>2014 | Birmingham Museum of Art</figcaption>
      <figcaption>Gallery Guide</br>12 pages / selfcover</figcaption>
			<figcaption>Fonts in Use:</br>Akzidenz Grotesk and Mercury</figcaption>
			<figcaption>Related Projects:</br>» <a href=/creative_index/interactive_exhibitions/2014_ex_puxley>Exhibition Design</a></figcaption>
			<hr>
		    	<p>From the late eighteenth century when Josiah Wedgwood utilized the designs of artists like John Flaxman and Lady Elizabeth Templetown for many of his jasperware designs, the Wedgwood company has established a firm tradition of employing the best and the brightest. In 1964, the firm continued this tradition by inviting a young potter named David Puxley to serve as its first studio potter in residence. David was given a spot at the factory and access to all materials and personnel—and then he was just told to create! While many of his designs went into production, others were sold at special exhibitions and through private channels.</p>
                <p>The exhibition explored the notion of “studio pottery” during the second half of the twentieth century and highlighted Puxley’s creative work and his role in establishing a studio pottery tradition at Wedgwood.</p>
		</div>
    <div class="col"></div>
		<div class="col-6 col-6-md col-6-lg">
			{% _image "puxley_1.jpg", "cover with illustrated cover" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
        {% _image "puxley_2.jpg", "book layout" %}
      </div>
      <div class="col">
        {% _image "puxley_3.jpg", "book layout" %}
      </div>
	</div>
	<div class="row">
      <div class="col">
        {% _image "puxley_4.jpg", "book layout" %}
      </div>
      <div class="col">
        {% _image "puxley_5.jpg", "book layout" %}
      </div>
      <div class="col">
        {% _image "puxley_6.jpg", "book layout" %}
      </div>
	</div>
	<div class="row">
		<div class="col"></div>
		<div class="col">
        {% _image "puxley_7.jpg", "book layout" %}
      </div>
  	</div>
</div>