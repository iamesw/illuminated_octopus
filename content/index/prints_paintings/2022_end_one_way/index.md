---
layout: layouts/base.njk
title: End One Way
description: Painting of a broken street sign
date: 2020-04-11
tags:
  - painting
eleventyNavigation:
  key: End One Way
  parent: Prints + Paintings
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("End One Way") %}
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
			<figcaption>2020 | Painting</figcaption>
			<figcaption>Acrylic on plywood</br>24 x 24 inches</figcaption>
            <hr>
			<p>Street signs are a common theme in my photography. I came across a temporary set of signs that had been set up on the sidewalk and then blown over in inclement weather. That photograph became a drawing in Procreate. Before I transferred the image to plywood I needed to test a technical issue with Acrobat Pro at work. I opened the drawing in editing mode and shuffled pieces around. It was random happenstance event that I had not planned on. I liked the results, took a screen grab to post to Instagram. Then, the pandemic lock down began. It was the first, and only, piece of art I made during that time.</P>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "end_one_way.jpg", "painting depicting a one way sign fallen over and fragmented in an abstract composition" %}
		</div>
    <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row"></div>
	<div class="row">
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "end_one_way_1.jpg", "photography depicting a one way sign fallen over" %}
			<figcaption>The original photograph as posted to Instagram</figcaption>
		</div>
		<div class="col">
			{% _image "end_one_way_2.jpg", "digital illustration depicting a one way sign fallen over" %}
			<figcaption>The final drawing from Procreate</figcaption>
		</div>
		<div class="col">
			{% _image "end_one_way_3.jpg", "digital illustration depicting a one way sign fallen over and fragmented in an abstract composition" %}
			<figcaption>The digital drawing after shuffling in Acrobat</figcaption>
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row"></div>
	<div class="row">
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "end_one_way.jpg", "painting depicting a one way sign fallen over and fragmented in an abstract composition" %}
		</div>
    <div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>