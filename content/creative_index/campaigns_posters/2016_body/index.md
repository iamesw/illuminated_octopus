---
layout: layouts/base.njk
title: What the Body Can Say
description: Poster for portraiture exhibition
date: 2016-02-04
tags:
  - graphic design
  - marketing
  - poster
  - lecture
eleventyNavigation:
  key: artpapers live body
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("artpapers live body") %}
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
			<figcaption>2016 | Birmingham Museum of Art</figcaption>
			<figcaption>Poster</figcaption>
			<figcaption>Fonts in Use:</br>Akzidenz Grotesk</figcaption>
            <hr>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
      		{% _image "body_1.jpg", "Poster for a lecture" %}
		</div>
	</div>
</div>