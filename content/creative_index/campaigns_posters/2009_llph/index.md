---
layout: layouts/base.njk
title: Life, Liberty, and the Pursuit of Happiness
description: Poster for exhibition of american art
date: 2017-11-02
tags:
  - graphic design
  - marketing
  - poster
  - exhibition
  - campaign
eleventyNavigation:
  key: llph 2009
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("AA5 - 2017") %}
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
			<figcaption>2009 | Birmingham Museum of Art</figcaption>
			<figcaption>Campaign</figcaption>
			<figcaption>Fonts in Use:</br>Knockout</figcaption>
            <figcaption>Related Projects:</br>» <a href=/creative_index/ephemera_misc/2009_llph>Invitation</a></br>» Logotype</figcaption>  
			<hr>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "llph_18.jpg", "poster for an exhibition of american art" %}
			<figcaption>Poster</figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<figcaption>Billboards</figcaption>
    	</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "llph_3.jpg", "billboard for an exhibition of american art" %}
			</br></br>
			{% _image "llph_21.jpg", "billboard for an exhibition of american art" %}
		</div>
	</div>
		<div class="row">
		<div class="col">
			{% _image "llph_11.jpg", "billboard for an exhibition of american art" %}
			</br></br>
			{% _image "llph_12.jpg", "billboard for an exhibition of american art" %}
		</div>
		<div class="col">
			{% _image "llph_13.jpg", "billboard for an exhibition of american art" %}
			</br></br>
			{% _image "llph_14.jpg", "billboard for an exhibition of american art" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
			<figcaption>Print Ads</figcaption>
    	</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "llph_6.jpg", "ad for an exhibition of american art" %}
		</div>
		<div class="col">
			{% _image "llph_10.jpg", "ad for an exhibition of american art" %}
		</div>
		<div class="col">
			{% _image "llph_19.jpg", "ad for an exhibition of american art" %}
		</div>
		<div class="col">
			{% _image "llph_20.jpg", "ad for an exhibition of american art" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "llph_8.jpg", "ad for an exhibition of american art" %}
		</div>
		<div class="col">
			{% _image "llph_9.jpg", "ad for an exhibition of american art" %}
		</div>
		<div class="col">
		</div>
	</div>
</div>