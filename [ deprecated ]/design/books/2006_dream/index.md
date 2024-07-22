---
layout: layouts/base.njk
title: Dream – Contemporary Asian Works on Paper
description: Catalog for contemporary Asian works on paper exhibition
date: 2007-03-19
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: dream-catalog
  parent: Books + Editorial + Ephemera
---

<div class="container">
  <div class="row">
    <div class="col">
  		{% set navPages = collections.all | eleventyNavigationBreadcrumb("dream-catalog") %}
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
			<figcaption>2007 | Tina Newton Gallery</figcaption>
            <figcaption>Gallery Catalog</br>16 pages / softcover / saddlestich</br>Typeset in Univers</figcaption>
            </ul>
			<hr>
		    	<p>Small catalog for a group gallery show. The catalog was designed to work being read from front to back or back to front, including page numbering for both directions.</p>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
			{%_image "dream_1.jpg", "book cover" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
            {%_image "dream_2.jpg", "book cover" %}
        </br></br>
            {%_image "dream_3.jpg", "book layout" %}
        </br></br>
            {%_image "dream_4.jpg", "book layout" %}
        </br></br>
            {%_image "dream_5.jpg", "book layout" %}
        </br></br>
            {%_image "dream_6.jpg", "book layout" %}
        </br></br>
            {%_image "dream_7.jpg", "book layout" %}
        </br></br>
            {%_image "dream_8.jpg", "book layout" %}
        </br></br>
            {%_image "dream_9.jpg", "book layout" %}
        </br></br>
            {%_image "dream_10.jpg", "book layout" %}
        </div>
  	</div>
    <div class="row">
		<div class="col"></div>
		<div class="col-12 col-12-md col-6-lg">
            {%_image "dream_11.jpg", "book layout" %}
		<div class="col"></div>
  	</div>
</div>