---
layout: layouts/base.njk
title: Sharon Louden – Taking Turns
description: Catalog for contemporary art exhibition
date: 2008-09-28
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: louden-catalog
  parent: Books + Editorial + Ephemera
---

<div class="container">
  <div class="row">
    <div class="col">
  		{% set navPages = collections.all | eleventyNavigationBreadcrumb("louden-catalog") %}
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
            <figcaption>Exhibition Catalog</br>48 pages / softcover / perfect bound</br>Typeset in Trade Gothic and Linotype Aroma</figcaption>
			<hr>
	    	<p>This exhibition presented new work by New York-based artist Sharon Louden that visually connected the Museum’s galleries and the Sculpture Garden. Louden’s work primarily focuses on gesture, line, and materials. She used three mediums in this project: fiber optic sculpture in the Sculpture Garden, along with projected video animations and paintings inside the galleries.</p>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
			{%_image "louden_1.jpg", "book cover abstract illustration" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
            {%_image "louden_2.png", "book cover abstract illustration" %}
        </br></br>
            {%_image "louden_3.png", "book layout" %}
        </br></br>
            {%_image "louden_4.jpg", "book layout" %}
        </br></br>
            {%_image "louden_5.jpg", "book layout" %}
        </br></br>
            {%_image "louden_6.jpg", "book layout" %}
        </br></br>
            {%_image "louden_7.jpg", "book layout" %}
        </br></br>
            {%_image "louden_8.jpg", "book layout" %}
        </br></br>
            {%_image "louden_9.jpg", "book layout" %}
        </br></br>
            {%_image "louden_10.jpg", "book layout" %}
        </br></br>
            {%_image "louden_11.jpg", "book layout" %}
        </br></br>
            {%_image "louden_12.jpg", "book layout" %}
        </br></br>
            {%_image "louden_13.jpg", "book layout" %}
        </br></br>
            {%_image "louden_14.jpg", "book layout" %}
        </br></br>
            {%_image "louden_15.jpg", "book layout" %}
        </div>
  	</div>
</div>