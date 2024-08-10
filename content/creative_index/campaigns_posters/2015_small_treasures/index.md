---
layout: layouts/base.njk
title: Small Treasures
description: Poster for exhibition of small Dutch paintings
date: 2015-01-31
tags:
  - graphic design
  - marketing
  - poster
  - exhibition
eleventyNavigation:
  key: small treasures
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("small treasures") %}
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
			<figcaption>2015 | Birmingham Museum of Art</figcaption>
			<figcaption>Campaign</figcaption>
			<figcaption>Fonts in Use:</br>DIN and Akzidenz Grotesk</figcaption>
            <hr>
			<p><em>Small Treasures: Rembrandt, Vermeer, Hals, and Their Contemporaries</em> was the first exhibition to explore this little-known field of small-format 17th-century paintings from the Dutch and Flemish Golden Age.</p>
			<p>The exhibition brought together 40 small-scale oil paintings, most of which are no more than ten inches in height, by 28 artists who lived and worked in what is today the Netherlands and Belgium during the 17th century.</p>
			<p>During the Golden Age of Dutch and Flemish painting in the 17th century, artists demonstrated more than ever before a love for minute and precise detail by painting on a small scale. At the time, the incredible technical skills of artists were highly revered, creating a demand for small-scale portraits. These precious paintings played an important part of many artists’ practices but have historically been overlooked by scholars and museum exhibitions.</p>
			<p>Drawn from public and private collections throughout the United States, <em>Small Treasures</em> featured the small–scale work of the greatest masters of Dutch and Flemish art including Anthony van Dyck, Adriaen Brouwer, David Teniers, Frans Hals, Rembrandt, Vermeer, Jan Steen, Gerard Terborch, Gerrit Dou, and Frans van Mieris.</p>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
		      {% _image "small_treasures_1.jpg", "Poster for an exhibition of small dutch paintings" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
    	<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col"><figcaption>Posters</br>11 x 17 format allowing for the 1:1 scale reproduction of the paintings in an abstraction of their period specific frames.</figcaption></div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		    {% _image "small_treasures_2.jpg", "Poster for an exhibition of small dutch paintings" %}
		</div>
		<div class="col">
		    {% _image "small_treasures_3.jpg", "Poster for an exhibition of small dutch paintings" %}
		</div>
		<div class="col">
		    {% _image "small_treasures_4.jpg", "Poster for an exhibition of small dutch paintings" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
    	<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col"><figcaption>Billboards</figcaption></div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
		      {% _image "small_treasures_6.jpg", "Poster for an exhibition of small dutch paintings" %}
			</br></br>
		      {% _image "small_treasures_7.jpg", "Poster for an exhibition of small dutch paintings" %}
			</br></br>
		      {% _image "small_treasures_8.jpg", "Poster for an exhibition of small dutch paintings" %}
			</br></br>
		</div>
		<div class="col">
		      {% _image "small_treasures_10.jpg", "Poster for an exhibition of small dutch paintings" %}
			</br></br>
		      {% _image "small_treasures_11.jpg", "Poster for an exhibition of small dutch paintings" %}
			</br></br>
		      {% _image "small_treasures_12.jpg", "Poster for an exhibition of small dutch paintings" %}
			</br></br>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
    	<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col"><figcaption>Building Banners</figcaption></div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		    {% _image "small_treasures_13.jpg", "Poster for an exhibition of small dutch paintings" %}
		</div>
		<div class="col">
		    {% _image "small_treasures_14.jpg", "Poster for an exhibition of small dutch paintings" %}
		</div>
		<div class="col">
		    {% _image "small_treasures_15.jpg", "Poster for an exhibition of small dutch paintings" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>