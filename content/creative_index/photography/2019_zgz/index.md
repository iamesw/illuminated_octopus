---
layout: layouts/base.njk
title: ZGZ
description: utility covers in Zaragoza
date: 2019-10
tags:
  - photography
  - utility covers
eleventyNavigation:
  key: Zaragoza Utility
  parent: Photography
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Zaragoza Utility") %}
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
			{% _image "zga_2.jpeg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
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