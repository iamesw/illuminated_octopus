---
layout: layouts/base.njk
title: WALLCEILINGFLOOR Opening Invitation
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
		<div class="col">
			<h1>{{ title }}</h1>
			<figcaption>2007 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Univers</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "wallceilingfloor_5.jpg", "event invitation" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col"></div>
        <div class="col-12 col-12-md col-9-lg">
			{% _image "wallceilingfloor_6.jpg", "event invitation" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>