---
layout: layouts/base.njk
title: Magic City Realism
description: Catalog for contemporary folk art exhibition
date: 2018-04-18
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: Magic City Realism Catalog
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Magic City Realism Catalog") %}
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
		    <figcaption>Exhibition Catalog</br>48 pages / softcover / perfect bound</figcaption>
            <figcaption>Fonts in use:</br>DDC Hardware, Akzidenz Grotesk, and Mercury</figcaption>
            <figcaption>Related Projects:</br>Exhibition Design</br>Interactive Design</figcaption>
        <hr>
            <p>In the wake of the Great Depression, Birmingham experienced a remarkable transformation that helped shape the city as we know it today. Artist Richard Coe, an Alabama native, documented the city’s rapidly changing urban fabric in his prints and paintings. Magic City Realism: Richard Coe’s Birmingham brought together over 60 of Coe’s images of the city from this decade for the first time.</p>
            <p>In 1929, the stock market crashed and the United States economy plummeted into the Great Depression. By 1933, President Franklin Roosevelt had implemented a series of New Deal programs designed to speed economic growth and recovery. Coe arrived in Birmingham in 1934. Working in his Five Points South studio, he illustrated the local impact of these initiatives with his etching needle and paint brush.</p>
            <p>In Coe’s images, billowing smoke stacks signify Birmingham’s burgeoning industrial economy. Shown side-by-side with the city’s gleaming downtown, these images capture a flourishing metropolis. Coe also pictured developing residential neighborhoods—both elite and humble—and scenes of daily life that relate a city reshaped by industrial growth and New Deal housing initiatives.</p>
		</div>
		<div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">{% _image "coe_1.jpg", "book cover with an engraving of an industrial image" %}
		</div>
	</div>
	<div class="row">
        <div class="col">{% _image "coe_3.jpg", "book layout" %}</div>
        <div class="col">{% _image "coe_4.jpg", "book layout" %}</div>
        <div class="col">{% _image "coe_5.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "coe_6.jpg", "book layout" %}</div>
        <div class="col">{% _image "coe_7.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "coe_8.jpg", "book layout" %}</div>
        <div class="col">{% _image "coe_9.jpg", "book layout" %}</div>
        <div class="col">{% _image "coe_10.jpg", "book layout" %}</div>
  	</div>
	<div class="row">
        <div class="col">{% _image "coe_2.png", "book cover with an engraving of an industrial image" %}</div>
    </div>
</div>