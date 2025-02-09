---
layout: layouts/base.njk
title: Sharon Louden – Taking Turns
description: Catalog for contemporary art exhibition
date: 2008-09-28
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: Sharon Louden Catalog
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Sharon Louden Catalog") %}
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
			<figcaption>2008 | Birmingham Museum of Art</figcaption>
            <figcaption>Exhibition Catalog</br>48 pages / softcover / perfect bound</figcaption>
            <figcaption>Fonts in use:</br>Gothic and Linotype Aroma</figcaption>
			<hr>
	    	<p>This exhibition presented new work by New York-based artist Sharon Louden that visually connected the Museum’s galleries and the Sculpture Garden. Louden’s work primarily focuses on gesture, line, and materials. She used three mediums in this project: fiber optic sculpture in the Sculpture Garden, along with projected video animations and paintings inside the galleries.</p>
		</div>
		<div class="col"></div>
		<div class="col-6 col-6-md col-6-lg">{%_image "louden_1.jpg", "book cover abstract illustration" %}</div>
	</div>
	<div class="row">
        <div class="col">{%_image "louden_5.jpg", "book layout" %}</div>
        <div class="col">{%_image "louden_6.jpg", "book layout" %}</div>
        <div class="col">{%_image "louden_7.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{%_image "louden_8.jpg", "book layout" %}</div>
        <div class="col">{%_image "louden_9.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{%_image "louden_10.jpg", "book layout" %}</div>
        <div class="col">{%_image "louden_11.jpg", "book layout" %}</div>
        <div class="col">{%_image "louden_12.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{%_image "louden_13.jpg", "book layout" %}</div>
        <div class="col">{%_image "louden_14.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{%_image "louden_2.png", "book cover abstract illustration" %}</div>
  	</div>
</div>