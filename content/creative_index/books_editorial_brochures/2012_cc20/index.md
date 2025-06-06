---
layout: layouts/base.njk
title: The Collectors Circle for Contemporary Art at Twenty
description: Catalog for support group anniversary
date: 2018-04-18
tags:
  - graphic design
  - catalog
eleventyNavigation:
  key: Collectors Circle at 20
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Collectors Circle at 20") %}
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
			<figcaption>2012 | Birmingham Museum of Art</figcaption>
            <figcaption>Book</br>48 pages / softcover / perfect bound</figcaption>
            <figcaption>Fonts in use:</br>Akzidenz Grotesk</figcaption>
			<hr>
		    	<p>Founded in 1991 to support the Museum’s contemporary art collection and related exhibitions, the Collectors Circle organizes a variety of social events, trips, and educational programs for its members. This catalog was published to celebrate 20 years of acquisitions by the Collectors Circle.</p>
			<hr>
		</div>
		<div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">{% _image "cc20_1.jpg", "book cover with an abstract typographic cover" %}</div>
    </div>
	<div class="row">
		<div class="col">{% _image "cc20_2.jpg", "book layout" %}</div>
        <div class="col">{% _image "cc20_3.jpg", "book layout" %}</div>
        <div class="col">{% _image "cc20_4.jpg", "book layout" %}</div>
    </div>
	<div class="row">
        <div class="col">{% _image "cc20_5.jpg", "book layout" %}</div>
        <div class="col">{% _image "cc20_6.jpg", "book layout" %}</div>
    </div>
	<div class="row">
        <div class="col">{% _image "cc20_7.jpg", "book layout" %}</div>
        <div class="col">{% _image "cc20_8.jpg", "book layout" %}</div>
        <div class="col">{% _image "cc20_10.jpg", "book layout" %}</div>
  	</div>
</div>