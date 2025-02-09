---
layout: layouts/base.njk
title: All the Colors of the Rainbow
description: Catalog for exhibition of Ikat robes
date: 2016-03-19
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: Ikat Catalog
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Afterlife Gallery Guide") %}
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
            <figcaption>2016 | Birmingham Museum of Art</figcaption>
			<figcaption>Exhibition Catalog</br>96 pages / softcover / perfect pound</figcaption>
            <figcaption>Fonts in use:</br>Austin, Trade Gothic Pro, and Mercury</figcaption>
            <hr>
		    <p>For the past decade, ikat patterns have permeated the fashion and design industry, touching everything from clothing and furniture to decorative arts. Despite its recent ubiquity, the ikat tradition has roots that go back centuries and cross many different cultures.</p>
            <p><em>All the Colors of the Rainbow</em> presented a vivid collection of ikat garments created in Uzbekistan in the 19th century, comprising robes, shoes, hats, bags, and even jewelry. Historically, clothing represented rank and status in the oasis communities. The wealthiest residents wore costly, bright silk ikats, while those in lesser positions wore similar robes made of cotton. The ikat robes produced in Uzbekistan in the 19th century came in a wide spectrum of vibrant colors and were used as clothing, decoration, and gifts.</p>
            <P>Though the Birmingham Museum of Art has hosted and originated many exhibitions concerning various aspects of Asian art over the years, this was the first to feature pieces from Central Asia.</p>
		</div>
		<div class="col"></div>
		<div class="col-6 col-6-md col-6-lg">{% _image "ikat_1.jpg", "book cover with folk art as background image" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "ikat_2.jpg", "book layout" %}</div>
        <div class="col">{% _image "ikat_3.jpg", "book layout" %}</div>
        <div class="col">{% _image "ikat_4.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "ikat_5.jpg", "book layout" %}</div>
        <div class="col">{% _image "ikat_6.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "ikat_7.jpg", "book layout" %}</div>
        <div class="col">{% _image "ikat_8.jpg", "book layout" %}</div>
        <div class="col">{% _image "ikat_9.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "ikat_10.jpg", "book layout" %}</div>
        <div class="col">{% _image "ikat_11.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "ikat_12.jpg", "book layout" %}</div>
        <div class="col">{% _image "ikat_13.jpg", "book layout" %}</div>
        <div class="col">{% _image "ikat_14.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "ikat_15.jpg", "book layout" %}</div>
        <div class="col">{% _image "ikat_16.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "ikat_17.jpg", "book layout" %}</div>
        <div class="col">{% _image "ikat_18.jpg", "book layout" %}</div>
        <div class="col">{% _image "ikat_19.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "ikat_20.jpg", "book layout" %}</div>
        <div class="col">{% _image "ikat_21.jpg", "book layout" %}</div>
  	</div>
</div>