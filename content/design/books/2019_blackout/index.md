---
layout: layouts/base.njk
title: Black Out – Silhouettes Then and Now
description: Gallery guide for an exhibition of silhouettes
date: 2019-09-28
tags:
  - graphic design
  - exhibition
  - gallery guide
eleventyNavigation:
  key: blackout-gg
  parent: Books + Editorial + Ephemera
---

<div class="container">
  <div class="row">
    <div class="col">
  		{% set navPages = collections.all | eleventyNavigationBreadcrumb("blackout-gg") %}
	  	<ul class="post-breadcrumb">
		      {%- for entry in navPages %}
			  <li{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}> » <a href="{{ entry.url }}">{{ entry.title }}</a></li>
  			  {%- endfor %}
	    	<li><active-breadcrumb>» {{ title }}</active-breadcrumb></li>
			</ul>
    </div>
  </div>
  <hr>
  <div class="row"></div>
  	<div class="row">
		<div class="col">
			<h1>{{ title }}</h1>
			<figcaption>2019 | Birmingham Museum of Art</figcaption>
            <figcaption> Gallery Guide</br>12 pages / selfcover</br>Typeset in modified DIN, Aritus, and Akzidenz Grotesk</figcaption>
	        <figcaption>Related Projects:</br>Exhibition Design</figcaption>
			<hr>
		    	<p><em>Black Out</em> presented historic silhouettes from the collection of the Smithsonian’s National Portrait Gallery and other institutions alongside works by contemporary artists who reimagine silhouettes in bold and unforgettable ways.</p>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
			{% _image "blackout_1.jpg", "cover with illustrated cover" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
            {% _image "blackout_2.jpg", "book layout" %}
        </br></br>
            {% _image "blackout_3.jpg", "book layout" %}
        </br></br>
            {% _image "blackout_4.jpg", "book layout" %}
        </div>
  	</div>
</div>