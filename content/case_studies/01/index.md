---
layout: layouts/base.njk
title: The Original Makers
description: Catalog for contemporary folk art exhibition
date: 2018-04-18
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: Case Cargo
  parent: Case Studies
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Case Cargo") %}
<div class="breadcrumb">
    <h3 class="visually-hidden">Breadcrumb</h3>
	<ul class="nav">
            {%- for entry in navPages %}
		<li class="nav-item"{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}> » <a href="{{ entry.url }}">{{ entry.title }}</a></li>
  	    	{%- endfor %}
	    <li class="nav-item"><active-breadcrumb>» 01 | {{ title }}</active-breadcrumb></li>
	</ul>
</div>
<div class="container">
  <div class="row"></div>
      <div class="full-width">{% res_image "case/cargo_group_4x5.jpg", "case/cargo_group_header.jpg", "black and white image of an open book sitting on a concrete block in harsh light and shadows" %}</div>
      <div class="spacer"></div>
	<div class="row">
		<div class="col-4 col-4-md col-4-lg">
			<figcaption>Case Study 01</figcaption>
            <hr>
            <h1>{{ title }}</h1>
            <figcaption>2018 | Birmingham Museum of Art</figcaption>
            <figcaption>Exhibition Catalog</br>192 pages / softcover / perfect bound</figcaption>
            <figcaption>Fonts in use:</br>Bureau Grotesque and Akzidenz Grotesk</figcaption>
            <figcaption>Related Projects:</br>Marketing Materials</br>Exhibition + Interactive Design</figcaption>
			<hr>
		    	<p>In commemoration of Alabama’s Bicentennial, the Birmingham Museum of Art presented <em>The Original Makers: Folk Art from the Cargo Collection</em>, an exhibition featuring more than 160 works of folk art.</p>
                <p>As a new generation of Southern makers explores the joy of creating, this exhibition celebrated the artists who have lived in our midst, inspired by their life experiences, their faith, their communities, and the landscape around them. Documenting many Southern ways of life, in all their variety, <em>The Original Makers</em> explored themes that have inspired self-taught and craft artists over many decades, including scenes of daily life and work, nature, faith and religion, patriotism, and music.</p>
            <hr>
            <figcaption>DESIGN NOTES</figcaption> 
            <hr>
            <figcaption>Idiosyncratic approach to placing images on the grid, anchored by a solid, recurring text block.</br></br>
        Titles were set in various weights and widths of Bureau Grotesk to highlight the originality of each personality.</br></br>
        In reference to the religious nature of much of the work, and alluding to the red letter editions of the Bible, direct quotes of the artists were rendered in red.</figcaption>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">{% _image "cc_1.jpg", "book cover with folk art as background image" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "cc_2.jpg", "book layout" %}</div>
        <div class="col">{% _image "cc_3.jpg", "book layout" %}</div>
        <div class="col">{% _image "cc_4.jpg", "book layout" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "cc_5.jpg", "book layout" %}</div>
        <div class="col">{% _image "cc_6.jpg", "book layout" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "cc_7.jpg", "book layout" %}</div>
        <div class="col">{% _image "cc_8.jpg", "book layout" %}</div>
        <div class="col">{% _image "cc_9.jpg", "book layout" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "cc_10.jpg", "book layout" %}</div>
        <div class="col">{% _image "cc_11.jpg", "book layout" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "cc_12.jpg", "book layout" %}</div>
        <div class="col">{% _image "cc_13.jpg", "book layout" %}</div>
        <div class="col">{% _image "cc_14.jpg", "book layout" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "cc_15.jpg", "book layout" %}</div>
        <div class="col">{% _image "cc_16.jpg", "book layout" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "cc_17.jpg", "book layout" %}</div>
        <div class="col">{% _image "cc_18.jpg", "book layout" %}</div>
        <div class="col">{% _image "cc_19.jpg", "book layout" %}</div>
  	</div>
    <div class="row">
        <div class="col">{% _image "cc_cover.png", "book cover with folk art as background image" %}
        <figcaption>The cover featured a painting by Rev. B.F. Perkins wrapping from front to back cover.</figcaption>
    </div>
    </div>
</div>