---
layout: layouts/base.njk
title: Pie Eating Contest
description: Poster for a pie eating contest
date: 2015-02-27
tags:
  - graphic design
  - marketing
  - poster
eleventyNavigation:
  key: pie 2014
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("pie 2014") %}
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
			<figcaption>2014 | United Way</figcaption>
			<figcaption>Poster</figcaption>
			<figcaption>Fonts in Use:</br>Scanned and handset Anzeigen Grotesk, Clarendon Bold,</br>Alternate Gothic No. 1, and Stymie Bold Condensed</figcaption>
            <hr>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
	      {% _image "pie_1.jpg", "Poster for a pie eating contest" %}
		</div>
	</div>
</div>