---
layout: layouts/base.njk
title: Small Treasures
description: exhibition graphics for an exhibition of dutch paintings
date: 2015-01-31
tags:
  - graphic design
  - exhibition
  - environmental graphics
eleventyNavigation:
  key: ST Exhibition
  parent: Interactive + Exhibitions
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("ST Exhibition") %}
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
		<div class="col-4 col-4-md col-4-lg">
			<h1>{{ title }}</h1>
			<figcaption>2015 | Birmingham Museum of Art</figcaption>
			<figcaption>Environmental Graphics | Exhibition</figcaption>
			<figcaption>Fonts in Use:</br>DIN</figcaption>
			<figcaption>Related Projects:</br>» <a href=/creative_index/campaigns_posters/2015_small_treasures>Marketing Campaign</a></figcaption>
			<hr>
		    	<p>Introductory gallery for an exhibition of Dutch miniature paintings. The space gave visitors the context of the Dutch Golden Age and the artists in the exhibition through a large scale timeline, maps, and banners featuring details of Dutch paintings from the Rjiksmuseum's collection.</p>
			<hr>
		</div>
        <div class="col"></div>
		<div class="col-6 col-6-md col-6-lg">
				{% _image "small_treasures_ex_3.jpg", "" %}
				<figcaption>Introductory text and title graphics. The framing device for each artist's name was based on the period frames paintings from each artist were framed in. These frames were reproduced at 100% scale of the originals.</figcaption>
		</div>
	</div>
	<hr>
	<div class="row"></div>
	<div class="row">
		<div class="col-8 col-8-md col-8-lg">{% _image "small_treasures_ex_13.jpg", "" %}</div>
		<div class="col-4 col-4-md col-4-lg"><div class="spacer-sm"></div>{% _image "small_treasures_ex_5.jpg", "" %}<div class="spacer"></div></div>
	</div>
	<div class="row">
		<div class="col-4 col-4-md col-4-lg"><div class="spacer-sm"></div>{% _image "small_treasures_ex_1.jpg", "" %}</div>
		<div class="col-8 col-8-md col-8-lg">{% _image "small_treasures_ex_12.jpg", "" %}</div>
	</div>
	<div class="row">
		<div class="col-8 col-8-md col-8-lg">{% _image "small_treasures_ex_11.jpg", "" %}</div>
		<div class="col-4 col-4-md col-4-lg"><div class="spacer-sm"></div>{% _image "small_treasures_ex_2.jpg", "" %}<div class="spacer"></div></div>
	</div>
	<div class="row">
		<div class="col-4 col-4-md col-4-lg"><div class="spacer-sm"></div>{% _image "small_treasures_ex_15.jpg", "" %}</div>
  		<div class="col-8 col-8-md col-8-lg">{% _image "small_treasures_ex_14.jpg", "" %}</div>
	</div>
</div>