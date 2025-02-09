---
layout: layouts/base.njk
title: Seasons Mailer
description: A twice per year publication outlining the seasonal programs of the Birmingham Museum of Art
date: 2022-01-01
tags:
  - graphic design
  - editorial
eleventyNavigation:
  key: seasons_mailer
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("seasons_mailer") %}
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
			<figcaption>2022 | Birmingham Museum of Art</figcaption>
            <figcaption>Magazine</br>12 page saddlestitch self-cover</figcaption>
            <figcaption>Fonts in use:</br>Akzidenz Grotesk (two issues)</br>Oswald and Public Sans (third issue)</figcaption>
			<hr>
		    <p>Published twice per year, the Seasons mailer was calendar for the museum. It featured the exhibitions and programming of the museum.</p>
			<hr>
		</div>
        <div class="col"></div>
		<div class="col-6 col-6-md col-6-lg">{% _image "seasons_01.jpg", "magazine cover" %}
            <figcaption>Third issue using Oswald and Public sans</figcaption>
		</div>
	</div>
	<div class="row">
        <div class="col">{% _image "seasons_9.jpg", "book layout" %}</div>
        <div class="col">{% _image "seasons_10.jpg", "book layout" %}</div>
    </div>
    <div class="row">
		<div class="col">{% _image "seasons_11.jpg", "book layout" %}<figcaption>Issue two using Akzidenz Grotesk</figcaption></div>
        <div class="col">{% _image "seasons_2.jpg", "book layout" %}<figcaption>Issue one using Akzidenz Grotesk</figcaption></div>
        <div class="col"></div>
    </div>
    <div class="row">
        <div class="col">{% _image "seasons_13.jpg", "book layout" %}</div>
        <div class="col">{% _image "seasons_14.jpg", "book layout" %}</div>
        </div>
	<div class="row">
        <div class="col">{% _image "seasons_3.jpg", "book layout" %}</div>
        <div class="col">{% _image "seasons_4.jpg", "book layout" %}</div>
        <div class="col">{% _image "seasons_6.jpg", "book layout" %}</div>
    </div>
</div>