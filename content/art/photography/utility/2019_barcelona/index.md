---
layout: layouts/base.njk
title: Barcelona
description: utility covers in Barcelona
date: 2019-10
tags:
  - photography
  - utility covers
eleventyNavigation:
  key: Barcelona
  parent: Utility Covers
---

<div class="container">
	<div class="row">
		<div class="col">
			{% set navPages = collections.all | eleventyNavigationBreadcrumb("Barcelona") %}
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
			{% _image "bca_8.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "bca_2.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "bca_3.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "bca_4.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "bca_5.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "bca_6.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
		</div>
		<div class="col">
			{% _image "bca_7.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "bca_1.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "bca_9.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "bca_10.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "bca_11.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "bca_12.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
		</div>
		<div class="col">
			{% _image "bca_13.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "bca_14.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "bca_15.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "bca_16.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "bca_17.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
		</div>
	</div>
</div>