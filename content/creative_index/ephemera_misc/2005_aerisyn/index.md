---
layout: layouts/base.njk
title: Aerisyn Open House
description: invitation to a corporate open house
date: 2001-08-15
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: aerisyn
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("aerisyn") %}
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
			<figcaption>2005 | Aerisyn</figcaption>
			<figcaption>Invitation</figcaption>
            <hr>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "aerisyn_1.jpg", "event invitation" %}
			</br>
			{% _image "aerisyn_2.jpg", "event invitation" %}			
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>