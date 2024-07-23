---
layout: layouts/base.njk
title: Dragons and Lotus Blossoms
description: Catalog for exhibition of Vietnamese ceramics
date: 2012-22-01
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: Dragons and Lotus Blossoms Catalog
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Dragons and Lotus Blossoms Catalog") %}
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
			<figcaption>2012 | Birmingham Museum of Art</figcaption>
            <figcaption>Exhibition Catalog</br>264 pages / softcover / perfect bound</figcaption>
            <figcaption>Fonts in use:</br>Verlag and Mercury</figcaption>
			<hr>
            <P>Vietnam created the most sophisticated ceramics in Southeast Asia. Though they borrowed from China, Vietnamese potters explored their own indigenous tastes and developed their own production techniques. <em>Dragons and Lotus Blossoms: Vietnamese Ceramics from the Birmingham Museum of Art</em> was the largest exhibition in the United States to date devoted solely to Vietnamese ceramics. TheThe entire Birmingham Museum of Art collection of over two hundred pieces were displayed and illustrated in the catalog.</P>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "vietnam_1.jpg", "book cover with vietnamese ewer" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
            {% _image "vietnam_2.png", "book cover with vietnamese ewer" %}
        </br></br>
            {% _image "vietnam_4.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_5.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_6.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_7.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_8.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_9.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_10.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_11.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_12.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_13.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_14.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_15.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_16.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_17.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_18.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_19.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_20.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_21.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_22.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_23.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_24.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_25.jpg", "book layout" %}
        </br></br>
            {% _image "vietnam_26.jpg", "book layout" %}
        </div>
        <div class="col-1 col-1-md col-1-lg"></div>
  	</div>
</div>