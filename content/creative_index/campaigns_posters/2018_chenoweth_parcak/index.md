---
layout: layouts/base.njk
title: Chenoweth Lecture - Sarah Parcak
description: Poster for lecture by Sarah Parcak
date: 2018-11-01
tags:
  - graphic design
  - marketing
  - lecture
  - poster
eleventyNavigation:
  key: Chenoweth Parcak
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Chenoweth Parcak") %}
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
			<figcaption>2018 | Birmingham Museum of Art</figcaption>
			<figcaption>Poster</figcaption>
			<figcaption>Fonts in Use:</br>Akzidenz Grotesk</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "chenoweth_parcak_1.jpg", "poster for a lecture" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>