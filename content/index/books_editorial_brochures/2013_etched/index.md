---
layout: layouts/base.njk
title: Etched in Collective History
description: Catalog for exhibition of contemporary art
date: 2013-08-18
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: Etched Catalog
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Etched Catalog") %}
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
            <figcaption>2013 | Birmingham Museum of Art</figcaption>
            <figcaption>Exhibition Catalog</br>96 pages / softcover / perfect bound</figcaption>
            <figcaption>Fonts in use:</br>Trade Gothic and Mercury</br>Title hand-lettered</figcaption>
            <figcaption>Related Projects:</br>Marketing Materials</br>Logotype</figcaption>
			<hr>
		    <p><em>Etched in Collective History</em> presents the work of artists who interrogate, depict, and memorialize the Civil Rights Movement. The Movement inspired a number of artists to participate physically, in marches and sit-ins, as well as creatively, through the act of making art. This exhibition presented the work of these artists and the artists who followed, telling a multi-generational story of the Civil Rights Movement. These various perspectives and works form a powerful synthesis of art, relating dynamic responses to our collective history.</p>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "etched_1.jpg", "book cover with hand-lettered title" %}
            <figcaption>Proposed book cover, hand-lettered, in reference to protest signs seen in photographs from the exhibition.</figcaption>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
        <div class="col"></div>
		<div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "etched_2.jpg", "book cover with hand-lettered title" %}
            <figcaption>Chosen book cover.</figcaption>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
            {% _image "etched_3.jpg", "book layout" %}
        </br></br>
            {% _image "etched_4.jpg", "book layout" %}
        </br></br>
            {% _image "etched_5.jpg", "book layout" %}
        </br></br>
            {% _image "etched_6.jpg", "book layout" %}
        </br></br>
            {% _image "etched_7.jpg", "book layout" %}
        </br></br>
            {% _image "etched_8.jpg", "book layout" %}
        </br></br>
            {% _image "etched_9.jpg", "book layout" %}
        </br></br>
            {% _image "etched_10.jpg", "book layout" %}
        </br></br>
            {% _image "etched_11.jpg", "book layout" %}
        </br></br>
            {% _image "etched_12.jpg", "book layout" %}
        </br></br>
            {% _image "etched_13.jpg", "book layout" %}
        </br></br>
            {% _image "etched_14.jpg", "book layout" %}
        </br></br>
            {% _image "etched_15.jpg", "book layout" %}
        </div>
        <div class="col-1 col-1-md col-1-lg">
  	</div>
</div>