---
layout: layouts/base.njk
title: Baby James Announcements
description: baby shower and birth announcements
date: 2012-06-30
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2012 baby james
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2012 baby james") %}
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
			<figcaption>2012 | Freelance</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Block Berthold and Bello</figcaption>
            <hr>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "babyjames_3.jpg", "event invitation" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "babyjames_1.jpg", "event invitation" %}
			<figcaption>Shower Invitation</figcaption>
		</div>
        <div class="col">
			{% _image "babyjames_2.jpg", "event invitation" %}
		</div>
		<div class="col"></div>
	</div>
	<div class="row">
		<div class="col"></div>
		<div class="col">
			{% _image "babyjames_3.jpg", "event invitation" %}
			<figcaption>Birth Announcement</figcaption>
		</div>
        <div class="col">
			{% _image "babyjames_4.jpg", "event invitation" %}
		</div>
	</div>
</div>