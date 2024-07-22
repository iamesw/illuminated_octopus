---
layout: layouts/base.njk
title: BCA
description: utility covers in Barcelona
date: 2019-10
tags:
  - photography
  - utility covers
eleventyNavigation:
  key: Barcelona
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
			{% _image "bca_8.jpg", "black and white image of a utility cover" %}
			<figcaption></figcaption>
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
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
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>