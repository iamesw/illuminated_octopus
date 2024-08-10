---
layout: layouts/base.njk
title: Collectors Circle Dinner Invitation
description: invitation to a support group dinner
date: 2001-08-15
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2007 cc invitation
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2007 cc invitation") %}
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
			<figcaption>2007 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>DIN</figcaption>
            <hr>
			<p>The 2007 Collectors Circle Dinner would celebrate the acquisition of a piece of video art by Bill Viola. In the two channel video a man and woman slowly emerge out of rippling water. To reference this effect, I designed the elements necessary for the invitation, then scanned them, moving the paper and distorting the text.</p>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "cc_2007_1.jpg", "event invitation" %}
			</br>
			{% _image "cc_2007_2.jpg", "event invitation" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>