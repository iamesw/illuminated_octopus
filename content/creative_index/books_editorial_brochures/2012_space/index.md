---
layout: layouts/base.njk
title: Clayton Colvin – Space Mountain
description: Catalog for contemporary exhibition
date: 2012-11-01
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: Space Mountain Monograph
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Space Mountain Monograph") %}
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
			<figcaption>2012 | Maus Contemporary | beta pictoris gallery</figcaption>
            <figcaption>Exhibition Catalog / Artist Monograph</br>72 pages / hardcover</figcaption>
            <figcaption>Fonts in use:</br>Bourgeois and Chino</figcaption>
			<hr>
		    <p>Exhibition and career retrospective catalog for contemporary artist Clayton Colvin.</p>
		</div>
		<div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">{% _image "space_1.jpg", "book cover" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "space_2.jpg", "book cover" %}</div>
        <div class="col">{% _image "space_3.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "space_4.jpg", "book layout" %}</div>
        <div class="col">{% _image "space_5.jpg", "book layout" %}</div>
        <div class="col">{% _image "space_6.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "space_7.jpg", "book layout" %}</div>
        <div class="col">{% _image "space_8.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "space_9.jpg", "book layout" %}</div>
        <div class="col">{% _image "space_10.jpg", "book layout" %}</div>
        <div class="col">{% _image "space_11.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "space_12.jpg", "book layout" %}</div>
        <div class="col">{% _image "space_13.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "space_14.jpg", "book layout" %}</div>
        <div class="col">{% _image "space_15.jpg", "book layout" %}</div>
        <div class="col">{% _image "space_16.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "space_17.jpg", "book layout" %}</div>
        <div class="col">{% _image "space_18.jpg", "book layout" %}</div>
  	</div>
</div>