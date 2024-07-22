---
layout: layouts/base.njk
title: Clayton Colvin – Space Mountain
description: Catalog for contemporary exhibition
date: 2012-11-01
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: space-catalog
  parent: Books + Editorial + Ephemera
---

<div class="container">
  <div class="row">
    <div class="col">
  		{% set navPages = collections.all | eleventyNavigationBreadcrumb("space-catalog") %}
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
			<figcaption>2012 | Maus Contemporary | beta pictoris gallery</figcaption>
            <figcaption>Exhibition Catalog / Artist Monograph</br>72 pages / hardcover</br>Typeset in Bourgeois and Chino</figcaption>
			<hr>
		    <p>Exhibition and career retrospective catalog for contemporary artist Clayton Colvin.</p>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
			{% _image "space_1.jpg", "book cover" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
            {% _image "space_2.jpg", "book cover" %}
        </br></br>
            {% _image "space_3.jpg", "book layout" %}
        </br></br>
            {% _image "space_4.jpg", "book layout" %}
        </br></br>
            {% _image "space_5.jpg", "book layout" %}
        </br></br>
            {% _image "space_6.jpg", "book layout" %}
        </br></br>
            {% _image "space_7.jpg", "book layout" %}
        </br></br>
            {% _image "space_8.jpg", "book layout" %}
        </br></br>
            {% _image "space_9.jpg", "book layout" %}
        </br></br>
            {% _image "space_10.jpg", "book layout" %}
        </br></br>
            {% _image "space_11.jpg", "book layout" %}
        </br></br>
            {% _image "space_12.jpg", "book layout" %}
        </br></br>
            {% _image "space_13.jpg", "book layout" %}
        </br></br>
            {% _image "space_14.jpg", "book layout" %}
        </br></br>
            {% _image "space_15.jpg", "book layout" %}
        </br></br>
            {% _image "space_16.jpg", "book layout" %}
        </br></br>
            {% _image "space_17.jpg", "book layout" %}
        </br></br>
            {% _image "space_18.jpg", "book layout" %}
        </div>
  	</div>
</div>