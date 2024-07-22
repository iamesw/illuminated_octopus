---
layout: layouts/base.njk
title: MAD
description: utility covers in Madrid
date: 2019-10
tags:
  - photography
  - utility covers
eleventyNavigation:
  key: Madrid Utility
  parent: Photography
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Madrid Utility") %}
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
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mad_1.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mad_2.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "mad_3.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "mad_4.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
		</div>
		<div class="col">
			{% _image "mad_5.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "mad_6.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
		</div>
		<div class="col">
			{% _image "mad_7.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "mad_8.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
			</br></br>
			{% _image "mad_9.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>