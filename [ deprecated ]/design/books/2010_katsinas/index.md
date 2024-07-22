---
layout: layouts/base.njk
title: Katsinas – Wilson Tawaquaptewa - The Dick Jemison Collection
description: Gallery Guide for exhibition of Native American Katsina figures
date: 2010-04-18
tags:
  - graphic design
  - exhibition
  - gallery guide
eleventyNavigation:
  key: katsinas-gg
  parent: Books + Editorial + Ephemera
---

<div class="container">
  <div class="row">
    <div class="col">
  		{% set navPages = collections.all | eleventyNavigationBreadcrumb("katsinas-gg") %}
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
			<figcaption>2010 | Birmingham Museum of Art</figcaption>
            <figcaption>Gallery Guide</br>8 pages / selfcover</br>Typeset in Akzidenz Grotesk and Weiss</figcaption>
			<hr>
		    	<p>Gallery guide for an exhibition of Hopi Katsina figures.</p>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
			{% _image "katsinas_1.jpg", "cover with illustrated cover" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
            {% _image "katsinas_2.jpg", "book layout" %}
        </br></br>
            {% _image "katsinas_3.jpg", "book layout" %}
        </br></br>
            {% _image "katsinas_4.jpg", "book layout" %}
        </br></br>
            {% _image "katsinas_6.jpg", "book layout" %}
        </div>
  	</div>
</div>