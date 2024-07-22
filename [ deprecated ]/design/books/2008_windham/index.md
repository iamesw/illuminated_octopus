---
layout: layouts/base.njk
title: Kathryn Tucker Windham – My Land, My People
description: Gallery Guide for exhibition of photography by Kathryn Tucker Windham
date: 2008-02-24
tags:
  - graphic design
  - exhibition
  - gallery guide
eleventyNavigation:
  key: windham-gg
  parent: Books + Editorial + Ephemera
---

<div class="container">
  <div class="row">
    <div class="col">
  		{% set navPages = collections.all | eleventyNavigationBreadcrumb("windham-gg") %}
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
			<figcaption>2008 | Birmingham Museum of Art</figcaption>
			<figcaption>Gallery Guide</br>8 pages / selfcover</br>Typeset in American Typewriter and Weiss</figcaption>
			<hr>
		    	<p>This exhibition showcased the photographs of Kathryn Tucker Windham, renowned storyteller, folklorist, author, and journalist. Her photography was like a photo diary, an extended family album of significant moments and memories from her journeys through Alabama’s towns and countryside. Windham has said, “I love the people who live here. I couldn’t take these pictures in any other part of the country. These people and I, we’ve grown up under nearly the same circumstances, we have a shared understanding...we can laugh together.”</p>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
			{%_image "windham_1.jpg", "exhibition gallery guide cover" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
            {%_image "windham_2.jpg", "book layout" %}
        </br></br>
            {%_image "windham_3.jpg", "book layout" %}
        </br></br>
            {%_image "windham_4.jpg", "book layout" %}
        </div>
	</div>
	<div class="row">
		<div class="col"></div>
		<div class="col-12 col-12-md col-6-lg">
            {%_image "windham_5.jpg", "book layout" %}
  	</div>
</div>