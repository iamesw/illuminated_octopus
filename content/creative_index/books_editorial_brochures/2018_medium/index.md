---
layout: layouts/base.njk
title: Medium
description: The quarterly members magazine of the Birmingham Museum of Art
date: 2018-01-01
tags:
  - graphic design
  - editorial
eleventyNavigation:
  key: Medium_Rev1
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Medium_Rev1") %}
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
			<figcaption>2018 | Birmingham Museum of Art</figcaption>
            <figcaption>Magazine</br>32 page saddlestitch self-cover</br>Typeset in Akzidenz Grotesk</figcaption>
			<hr>
		    	<p>Published quarterly, <em>Medium</em> was the members magazine of the museum. It featured the exhibitions and programming of the museum, as well as feature articles highlighting scholarly research, museum news, and donor profiles.</p>
                <p>This was the final redesign before the publication went digital only during the pandemic in 2020.</p>
			<hr>
        </div>
		<div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">{% _image "medium_1.jpg", "magazine cover" %}</div>
	</div>
    <div class="row">
		<div class="col">{% _image "medium_19.jpg", "book layout" %}</div>
        <div class="col">{% _image "medium_23.jpg", "book layout" %}</div>
        <div class="col">{% _image "medium_24.jpg", "book layout" %}</div>
    </div>
    <div class="row">
		<div class="col">{% _image "medium_3.jpg", "book layout" %}</div>
        <div class="col">{% _image "medium_4.jpg", "book layout" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "medium_5.jpg", "book layout" %}</div>
        <div class="col">{% _image "medium_6.jpg", "book layout" %}</div>
        <div class="col">{% _image "medium_7.jpg", "book layout" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "medium_10.jpg", "book layout" %}</div>
        <div class="col">{% _image "medium_11.jpg", "book layout" %}</div>
        </div>
    <div class="row">
		<div class="col">{% _image "medium_2.jpg", "book layout" %}</div>
        <div class="col">{% _image "medium_8.jpg", "book layout" %}</div>
        <div class="col">{% _image "medium_20.jpg", "book layout" %}</div>
    </div>
    <div class="row">
		<div class="col">{% _image "medium_12.jpg", "book layout" %}</div>
        <div class="col">{% _image "medium_13.jpg", "book layout" %}</div>
        <div class="col">{% _image "medium_16.jpg", "book layout" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "medium_17.jpg", "book layout" %}</div>
        <div class="col">{% _image "medium_18.jpg", "book layout" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "medium_9.jpg", "book layout" %}</div>
		<div class="col">{% _image "medium_14.jpg", "book layout" %}</div>
        <div class="col">{% _image "medium_15.jpg", "book layout" %}</div>
    </div>
    <div class="row">
		<div class="col">{% _image "medium_21.jpg", "book layout" %}</div>
        <div class="col">{% _image "medium_22.jpg", "book layout" %}</div>
  	</div>
</div>