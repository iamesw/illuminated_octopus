---
layout: layouts/base.njk
title: Still Life
description: Poster for portraiture exhibition
date: 2011-02-07
tags:
  - graphic design
  - marketing
  - poster
  - exhibition
  - campaign
eleventyNavigation:
  key: lol 2011
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("lol 2011") %}
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
			<figcaption>2011 | Birmingham Museum of Art</figcaption>
			<figcaption>Campaign</figcaption>
			<figcaption>Fonts in Use:</br>Archer and Didot</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "lol_ad_1.jpg", "poster for an exhibition of eye miniatures" %}
			<figcaption>Poster</figcaption>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col"><figcaption>Handbills</figcaption></div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "lol_ad_4.jpg", "poster for an exhibition of eye miniatures" %}
			</br></br>
			{% _image "lol_ad_5.jpg", "poster for an exhibition of eye miniatures" %}
		</div>
		<div class="col">
			{% _image "lol_ad_6.jpg", "poster for an exhibition of eye miniatures" %}
			</br></br>
			{% _image "lol_ad_7.jpg", "poster for an exhibition of eye miniatures" %}
		</div>
		<div class="col">
			{% _image "lol_ad_8.jpg", "poster for an exhibition of eye miniatures" %}
			</br></br>
			{% _image "lol_ad_9.jpg", "poster for an exhibition of eye miniatures" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "lol_ad_10.jpg", "poster for an exhibition of eye miniatures" %}
		</div>
		<div class="col">
			{% _image "lol_ad_12.jpg", "poster for an exhibition of eye miniatures" %}
		</div>
		<div class="col">
			{% _image "lol_ad_14.jpg", "poster for an exhibition of eye miniatures" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>