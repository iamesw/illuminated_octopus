---
layout: layouts/base.njk
title: WALLCEILINGFLOOR
description: invitation to a contemporary art exhibition opening
date: 2007-01-26
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2007 wallceiling floor invitation
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2007 wallceiling floor invitation") %}
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
			<figcaption>2007 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Univers</figcaption>
			<figcaption>Related Projects:</br>» <a href=/creative_index/books_editorial_brochures/2007_wallceilingfloor>Gallery Guide</a></figcaption>
            <hr>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "wallceilingfloor_5.jpg", "event invitation" %}
		</div>
	</div>
	<div class="row">
		<div class="col"></div>
        <div class="col-9 col-9-md col-9-lg">
			{% _image "wallceilingfloor_6.jpg", "event invitation" %}
		</div>
	</div>
</div>