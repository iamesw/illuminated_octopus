---
layout: layouts/base.njk
title: Frank Fleming - Between Fantasy and Reality
description: Opening invitation for a frank fleming exhibition
date: 2015-02-27
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2015 fleming invitation
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2015 fleming invitation") %}
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
			<figcaption>2015 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Akzidenz Grotesk</figcaption>
			<figcaption>Related Projects:</br>» <a href=/creative_index/books_editorial_brochures/2015_fleming>Gallery Guide</a>
				</br>» <a href=/creative_index/interactive_exhibitions/2015_ex_fleming>Environmental Graphics | Exhibition</a></figcaption>  
			<hr>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "fleming_01.jpg", "event invitation" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "fleming_02.jpg", "event invitation" %}
		</div>
        <div class="col">
			{% _image "fleming_01.jpg", "event invitation" %}
		</div>
		<div class="col">
			{% _image "fleming_02.jpg", "event invitation" %}
		</div>
	</div>
</div>