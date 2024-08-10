---
layout: layouts/base.njk
title: Chenoweth Lecture Invitation
description: invitation to a lecture about wedgwood
date: 2009-08-15
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2009 chenoweth
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2009 chenoweth") %}
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
			<figcaption>2009 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Akzidenz Grotesk</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "chenoweth_2009_1.jpg", "event invitation" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>