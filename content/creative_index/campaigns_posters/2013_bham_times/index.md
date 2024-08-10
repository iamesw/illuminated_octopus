---
layout: layouts/base.njk
title: Birmingham Times Anniversary Ad
description: Ad to celebrate the 50th anniversary of a publication and promote the musem
date: 2013-08-15
tags:
  - graphic design
  - marketing
  - ad
eleventyNavigation:
  key: bham times 2013
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("bham times 2013") %}
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
			<figcaption>2013 | Birmingham Museum of Art</figcaption>
			<figcaption>Print Ad</figcaption>
			<figcaption>Fonts in Use:</br>Akzidenz Grotesk</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "times_50_1.jpg", "Poster commemmorating the 50th anniversary of a newspaper" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>