---
layout: layouts/base.njk
title: Photography Guild Invitation
description: Opening invitation for a photography collection support group
date: 2008-09-13
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2008 photoguild
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2008 photoguild") %}
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
			<figcaption>2007 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Clarendon and Trade Gothic</figcaption>
            <hr>
		</div>
        <div class="col-8 col-8-md col-8-lg">
		      {% _image "photoguild_1.jpg", "event invitation" %}
			  </br>
			  {% _image "photoguild_2.jpg", "event invitation" %}
		</div>
	</div>
</div>