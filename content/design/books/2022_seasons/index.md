---
layout: layouts/base.njk
title: Seasons Mailer
description: A twice per year publication outlining the seasonal programs of the Birmingham Museum of Art
date: 2022-01-01
tags:
  - graphic design
  - editorial
eleventyNavigation:
  key: seasons-2022
  parent: Books + Editorial + Ephemera
---

<div class="container">
  <div class="row">
    <div class="col">
  		{% set navPages = collections.all | eleventyNavigationBreadcrumb("seasons-2022") %}
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
			<figcaption>2022 | Birmingham Museum of Art</figcaption>
            <figcaption>Magazine</br>12 page saddlestitch self-cover</br>Fonts in use: Akzidenz Grotesk (two issues) Oswald and Public Sans (third issue)</figcaption>
			<hr>
		    	<p>Published twice per year, the Seasons mailer was calendar for the museum. It featured the exhibitions and programming of the museum.</p>
			<hr>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
			{% _image "seasons_01.jpg", "magazine cover" %}
            <figcaption>Third issue using Oswald and Public sans</figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col">
            {% _image "seasons_02.jpg", "book layout" %}
            </br></br>
            {% _image "seasons_8.jpg", "book layout" %}
            </br></br>
            {% _image "seasons_9.jpg", "book layout" %}
            </br></br>
            {% _image "seasons_10.jpg", "book layout" %}
        </div>
    </div>
    <div class="row">
		<div class="col"></div>
		<div class="col-12 col-12-md col-6-lg">
            {% _image "seasons_11.jpg", "book layout" %}
            <figcaption>Issue two using Akzidenz Grotesk</figcaption>
        </div>
    </div>
    <div class="row">
		<div class="col">
            {% _image "seasons_12.jpg", "book layout" %}
        </br></br>
            {% _image "seasons_13.jpg", "book layout" %}
        </br></br>
            {% _image "seasons_14.jpg", "book layout" %}
        </br></br>
            {% _image "seasons_15.jpg", "book layout" %}
        </div>
    </div>
    <div class="row">
		<div class="col"></div>
		<div class="col-12 col-12-md col-6-lg">
            {% _image "seasons_2.jpg", "book layout" %}
            <figcaption>Issue one using Akzidenz Grotesk</figcaption>
        </div>
    </div>
	<div class="row">
		<div class="col">
            {% _image "seasons_03.jpg", "book layout" %}
        </br></br>
            {% _image "seasons_3.jpg", "book layout" %}
        </br></br>
            {% _image "seasons_4.jpg", "book layout" %}
        </br></br>
            {% _image "seasons_5.jpg", "book layout" %}
        </br></br>
            {% _image "seasons_6.jpg", "book layout" %}
        </div>
    </div>
</div>