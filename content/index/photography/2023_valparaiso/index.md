---
layout: layouts/base.njk
title: Valparaiso, Chile
description: travel photography in Valparaiso, Chile
date: 2023-12
tags:
  - photography
  - travel
eleventyNavigation:
  key: Valparaiso, Chile
  parent: Photography
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Valparaiso, Chile") %}
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
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
			<figcaption>December 2023</br>Fujifilm X-Pro 2</figcaption>
			</ul>
			<hr>
			<p>It's hard to shoot black and white in a place like Valparaiso. Situated on forty some odd hills on the Pacific Ocean, there is a vibe similar to San Francisco, but with a distinctly Global South vibe.</p>
			<hr>
			<figcaption>[ more photos to come ]</figcaption>
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
		   <div class="col">
			{% _image "valpo_1.jpg", "" %}
		<figcaption>La Mestiza</br> Fujifilm X-Pro 2</figcaption>
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col"></div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>