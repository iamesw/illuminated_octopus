---
layout: layouts/base.njk
title: Life, Liberty, and the Pursuit of Happiness
description: invitation to the opening of an american art exhibition
date: 2009-10-03
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: llph invitation
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("llph invitation") %}
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
			<figcaption>2009 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Knockout</figcaption>
            <figcaption>Related Projects:</br>» <a href=/creative_index/campaigns_posters/2009_llph>Campaign</a></br>» Logotype</figcaption>  
			<hr>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
      		{% _image "llph_1.jpg", "event invitation" %}
	  			</br>
      		{% _image "llph_2.jpg", "event invitation" %}
		</div>
	</div>
</div>