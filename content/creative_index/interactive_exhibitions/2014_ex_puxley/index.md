---
layout: layouts/base.njk
title: David Puxley – Wedgwood's First Studio Potter
description: General materials for ceramics exhibition 
date: 2014-04-18
tags:
  - graphic design
  - exhibition
eleventyNavigation:
  key: Puxley Exhibition
  parent: Interactive + Exhibitions
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Puxley Exhibition") %}
<div class="breadcrumb">
    <h3 class="visually-hidden">Breadcrumb</h3>
	<ul class="nav">
            {%- for entry in navPages %}
		<li class="nav-item"{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}> » <a href="{{ entry.url }}">{{ entry.title }}</a></li>
  	    	{%- endfor %}
	    <li class="nav-item"><active-breadcrumb>» {{ title }}</active-breadcrumb></li>
	</ul>
</div>
<div class="container">
	<div class="row"></div>
	<div class="row">
		<div class="col">
			<h1>{{ title }}</h1>
			<figcaption>2015 | Birmingham Museum of Art</figcaption>
			<figcaption>Environmental Graphics | Exhibition</figcaption>
			<figcaption>Fonts in Use:</br>Akzidenz Grotesk and Mercury</figcaption>
			<figcaption>Related Projects:</br>» <a href=/creative_index/books_editorial_brochures/2014_puxley>Gallery Guide</a></figcaption>
			<hr>
		    	<p>Gallery graphics for an exhibition of David Puxley ceramics made during his tenure as Wedgwood's first studio potter. The graphics featured a timeline of the Wedgwood studio potter program, Puxley's influences, and behind the scenes photography of Puxley at work.</p>
			<hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
				{% _image "puxley_ex_1.jpg", "" %}
				<figcaption>Base illustration created for gallery guides and timeline graphics. Color palette for the illustration and other graphics were pulled from the glazes of Puxley's pottery.</figcaption>
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<hr>
	<div class="row"></div>
	<div class="row"><div class="col">{% _image "puxley_ex_2.png", "" %}</div></div>
	<div class="row">
		<div class="col-2 col-2-md col-2-lg"></div>
		<div class="col-5 col-5-md col-5-lg"><div class="spacer"></div>{% _image "puxley_ex_5.jpg", "" %}</div>
		<div class="col-5 col-5-md col-5-lg"><div class="spacer-sm"></div>{% _image "puxley_ex_8.jpg", "" %}<div class="spacer"></div></div>
  	</div>
	<div class="row"><div class="col">{% _image "puxley_ex_3.png", "" %}</div></div>
	<div class="row">
		<div class="col-5 col-5-md col-5-lg"><div class="spacer"></div>{% _image "puxley_ex_10.jpg", "" %}</div>
		<div class="col-5 col-5-md col-5-lg"><div class="spacer-sm"></div>{% _image "puxley_ex_11.jpg", "" %}<div class="spacer"></div></div>
		<div class="col-2 col-2-md col-2-lg"></div>
  	</div>
	<div class="row"><div class="col">{% _image "puxley_ex_4.png", "" %}</div></div>
</div>