---
layout: layouts/base.njk
title: Afterlife – Asian Art from the Weldon Collection
description: Gallery Guide for exhibition of Asian art
date: 2017-11-04
tags:
  - graphic design
  - exhibition
  - gallery guide
eleventyNavigation:
  key: afterlife-gg
  parent: Books + Editorial + Ephemera
---

<div class="container">
  <div class="row">
    <div class="col">
  		{% set navPages = collections.all | eleventyNavigationBreadcrumb("afterlife-gg") %}
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
			<figcaption>2017 | Birmingham Museum of Art</figcaption>
			<figcaption>Gallery Guide</br>12 pages / selfcover</br>Typeset in Akzidenz Grotesk</figcaption>
			<hr>
		    	<p><em>Afterlife: Asian Art from the Weldon Collection</em> journeyed across Asia to explore the fascinating role of art in this life and the next. Inspired by the bequest of Henry and June (“Jimmy”) Weldon, the exhibition included a wide variety of sculpture, ceramics, and tomb wares that reflect ancient fashion trends, entertainments, status symbols and religions, throughout the ages. Over 60 works spanned thousands of years of history from China, Japan, India, the Himalayas and Southeast Asia.</p>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
			{% _image "afterlife_1.jpg", "cover with illustrated cover" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
            {% _image "afterlife_2.jpg", "book layout" %}
        </br></br>
            {% _image "afterlife_3.jpg", "book layout" %}
        </br></br>
            {% _image "afterlife_4.jpg", "book layout" %}
        </br></br>
            {% _image "afterlife_6.jpg", "book layout" %}
        </div>
  	</div>
</div>