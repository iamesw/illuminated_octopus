---
layout: layouts/base.njk
title: Lobby Projects 01
description: Gallery Guide for installation by Bethany Collins
date: 2016-04-16
tags:
  - graphic design
  - exhibition
  - gallery guide
eleventyNavigation:
  key: collins-gg
  parent: Books + Editorial + Ephemera
---

<div class="container">
  <div class="row">
    <div class="col">
  		{% set navPages = collections.all | eleventyNavigationBreadcrumb("collins-gg") %}
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
            <h3>Bethany Collins - The Problem We All Live With</h3>
			<figcaption>2016 | Birmingham Museum of Art</figcaption>
            <figcaption>Gallery Guide</br>6 panel / trifold</br>Typeset in Akzidenz Grotesk</figcaption>
			<hr>
		    	<p><em>lobby projects</em> was an initiative by the Birmingham Museum of Art that invited contemporary artists to create site-specific commissions in the Museum’s main entrance. The debut artist was Bethany Collins, whose conceptually-driven work is fueled by critical exploration of how race and language interact.</p>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
			{% _image "collins_1.jpg", "exhibition gallery guide cover" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
            {% _image "collins_1.jpg", "gallery guide layout" %}
			<figcaption>Collins took archival scans of <em>The Birmingham News</em> from important days during the Civil Rights Movement and created blind embossed prints. The covers, often not mentioning the Civil Rights Movement at all, were embossed on white paper. The internal pages where civil rights stories were often buried deep within the newspaper, were blind embossed on black paper. The gallery guide, featuring an interview with the artist was presented in a somewhat exaggerated reference to a newspaper format.</figcaption>
		</div>
		<div class="col">
            {% _image "collins_2.jpg", "gallery guide layout" %}
		</div>
		<div class="col">
            {% _image "collins_3.jpg", "gallery guide layout" %}
        </div>
  	</div>
</div>