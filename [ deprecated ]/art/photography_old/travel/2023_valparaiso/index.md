---
layout: layouts/base.njk
title: Valparaiso
description: travel photography in Valparaiso, Chile
date: 2023-12
tags:
  - photography
  - travel
eleventyNavigation:
  key: Valparaiso
  parent: Travel
---

<div class="container">
	<div class="row">
		<div class="col">
			{% set navPages = collections.all | eleventyNavigationBreadcrumb("Valparaiso") %}
			<ul class="post-metadata">
			{%- for entry in navPages %}
				<li{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}>
    			» <a href="{{ entry.url }}">{{ entry.title }}</a>
  				</li>
			{%- endfor %}
				<li><active-breadcrumb>» {{ title }}</active-breadcrumb></li>
			</ul>
		<div class="col">
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
			<figcaption>December 2023</br>Fujifilm X-Pro 2</figcaption>
			</ul>
			<hr>
			<p>It's hard to shoot black and white in a place like Valparaiso. Situated on forty some odd hills on the Pacific Ocean, there is a vibe similar to San Francisco, but with a distinctly Global South vibe.</p>
			<hr>
		</div>
		<div class="col-12 col-1-md col-1-lg"></div>
		   <div class="col">
			{% _image "valpo_1.jpg", "" %}
		<figcaption>La Mestiza</br> Fujifilm X-Pro 2</figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<figcaption>[ more to come ]</figcaption>
		</div>
	</div>
</div>