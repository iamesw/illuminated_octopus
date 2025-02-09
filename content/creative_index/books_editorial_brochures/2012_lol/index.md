---
layout: layouts/base.njk
title: The Look of Love
description: Catalog for an exhibition of lovers' eye jewelry
date: 2012-02-07
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: Look of Love Catalog
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Look of Love Catalog") %}
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
            <figcaption>Exhibition Catalog</br>208 pages / hardcover with dust jacket</figcaption>
            <figcaption>Fonts in use:</br>Didot and Archer</figcaption>
            <figcaption>Related Projects:</br>Marketing Materials</figcaption>
			<hr>
		    	<p>This exhibition explored the little-known subject of “lover’s eyes,” hand-painted miniatures of single human eyes set in jewelry and given as tokens of affection or remembrance. In 1785, when the Prince of Wales secretly proposed to Mrs. Maria Fitzherbert with a miniature of his own eye, he inspired an aristocratic fad for exchanging eye portraits mounted in a wide variety of settings including brooches, rings, lockets, and toothpick cases.</p>
                <p>With over 100 examples, the collection of Dr. and Mrs. David A. Skier of Birmingham is the largest in the world. This exhibition offered an unprecedented look at these unusual and intriguing works of art.</p>
		</div>
		<div class="col"></div>
		<div class="col-6 col-6-md col-6-lg">{% _image "lol_1.jpg", "book cover with image of lover's eye jewelry" %}</div>
	</div>
	<div class="row">
		<div class="col">{% _image "lol_2.jpg", "book layout" %}</div>
        <div class="col">{% _image "lol_3.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "lol_4.jpg", "book layout" %}</div>
        <div class="col">{% _image "lol_5.jpg", "book layout" %}</div>
        <div class="col">{% _image "lol_6.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "lol_7.jpg", "book layout" %}</div>
        <div class="col">{% _image "lol_8.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "lol_9.jpg", "book layout" %}</div>
        <div class="col">{% _image "lol_10.jpg", "book layout" %}</div>
        <div class="col">{% _image "lol_11.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "lol_12.jpg", "book layout" %}</div>
        <div class="col">{% _image "lol_13.jpg", "book layout" %}</div>
  	</div>
</div>