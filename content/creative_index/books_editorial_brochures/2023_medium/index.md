---
layout: layouts/base.njk
title: Medium
description: Quarterly magazine of the Birmingham Museum of Art
date: 2023-10-01
tags:
  - graphic design
  - editorial
eleventyNavigation:
  key: medium_2023
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("medium_2023") %}
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
			<figcaption>2023 | Birmingham Museum of Art</figcaption>
            <figcaption>Magazine</figcaption>
            <figcaption>Fonts in use:</br></br>Oswald and Public Sans</figcaption>
			<hr>
		    <p>After a printing hiatus caused in part by the pandemic, the Museum's magazine was relaunched in fall of 2023. A bolder masthead was introduced set in Oswald. Subsequently a customized version was developed, squaring off the Ms on each end and creating a more solid, geometric wordmark. The interior followed a 12 column grid, with headings shifting from Public Sans to Oswald as the layout and template were refined.</p>
			<hr>
		</div>
		<div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">{% _image "medium_25.jpg", "magazine cover" %}</div>
	</div>
    <div class="row">
        <div class="col">{% _image "medium_26.jpg", "magazine spread" %}</div>
        <div class="col">{% _image "medium_27.jpg", "magazine spread" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "medium_28.jpg", "magazine spread" %}</div>
        <div class="col">{% _image "medium_29.jpg", "magazine spread" %}</div>
        <div class="col">{% _image "medium_30.jpg", "magazine spread" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "medium_31.jpg", "magazine spread" %}</div>
        <div class="col">{% _image "medium_32.jpg", "magazine spread" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "medium_107.jpg", "magazine spread" %}</div>
        <div class="col">{% _image "medium_108.jpg", "magazine spread" %}</div>
        <div class="col">{% _image "medium_110.jpg", "magazine spread" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "medium_33.jpg", "magazine cover" %}<figcaption>Relaunch issue featuring first iteration of the Oswald masthead.</figcaption></div>
        <div class="col">{% _image "medium_67.jpg", "magazine cover" %}</div>
        <div class="col">{% _image "medium_57.jpg", "magazine cover" %}<figcaption>First issue featuring refined masthead with customized Oswald.</figcaption></div>
        <div class="col">{% _image "medium_101.jpg", "magazine cover" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "medium_36.jpg", "magazine spread" %}</div>
        <div class="col">{% _image "medium_37.jpg", "magazine spread" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "medium_38.jpg", "magazine spread" %}</div>
        <div class="col">{% _image "medium_39.jpg", "magazine spread" %}</div>
        <div class="col">{% _image "medium_40.jpg", "magazine spread" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "medium_41.jpg", "magazine spread" %}</div>
        <div class="col">{% _image "medium_50.jpg", "magazine spread" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "medium_51.jpg", "magazine spread" %}</div>
        <div class="col">{% _image "medium_52.jpg", "magazine spread" %}</div>
        <div class="col">{% _image "medium_53.jpg", "magazine spread" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "medium_54.jpg", "magazine spread" %}</div>
        <div class="col">{% _image "medium_55.jpg", "magazine spread" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "medium_60.jpg", "magazine spread" %}</div>
        <div class="col">{% _image "medium_62.jpg", "magazine spread" %}</div>
        <div class="col">{% _image "medium_63.jpg", "magazine spread" %}</div>
    </div>
</div>