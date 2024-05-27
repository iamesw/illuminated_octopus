---
layout: layouts/base.njk
title: Zaragoza
description: utility covers in Zaragoza
date: 2019-10
tags:
  - photography
  - utility covers
eleventyNavigation:
  key: Zaragoza
  parent: Utility Covers
---

<div class="container">
	<div class="row">
		<div class="col">
			{% set navPages = collections.all | eleventyNavigationBreadcrumb("Zaragoza") %}
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
		</div>
		<div class="col-12 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "zga_2.jpeg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "zga_1.jpeg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "zga_3.jpeg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "zga_4.jpeg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
		</div>
		<div class="col">
			{% _image "zga_5.jpeg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "zga_6.jpeg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "zga_10.jpeg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
		</div>
		<div class="col">
			{% _image "zga_7.jpeg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "zga_8.jpeg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "zga_9.jpeg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
		</div>
	</div>
</div>