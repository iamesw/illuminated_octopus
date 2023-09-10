---
layout: layouts/base.njk
title: The Collectors Circle for Contemporary Art at Twenty
description: Catalog for support group anniversary
date: 2018-04-18
tags:
  - graphic design
  - catalog
eleventyNavigation:
  key: cc-catalog
  parent: Books + Editorial + Ephemera
---

<div class="container">
  <div class="row">
    <div class="col">
  		{% set navPages = collections.all | eleventyNavigationBreadcrumb("cc-catalog") %}
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
			<figcaption>2012 | Birmingham Museum of Art</figcaption>
            <figcaption>Book</br>48 pages / softcover / perfect bound</br>Typeset in Akzidenz Grotesk</figcaption>
			<hr>
		    	<p>Founded in 1991 to support the Museum’s contemporary art collection and related exhibitions, the Collectors Circle organizes a variety of social events, trips, and educational programs for its members. This catalog was published to celebrate 20 years of acquisitions by the Collectors Circle.</p>
			<hr>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
			{% _image "cc20_1.jpg", "book cover with folk art as background image" %}
		</div>
	</div>
	<div class="row">
		<div class="col">       
            {% _image "cc20_2.jpg", "book layout" %}
        </br></br>
            {% _image "cc20_3.jpg", "book layout" %}
        </br></br>
            {% _image "cc20_4.jpg", "book layout" %}
        </br></br>
            {% _image "cc20_5.jpg", "book layout" %}
        </br></br>
            {% _image "cc20_6.jpg", "book layout" %}
        </br></br>
            {% _image "cc20_7.jpg", "book layout" %}
        </br></br>
            {% _image "cc20_8.jpg", "book layout" %}
        </br></br>
            {% _image "cc20_9.jpg", "book layout" %}
        </br></br>
            {% _image "cc20_10.jpg", "book layout" %}
        </div>
  	</div>
</div>