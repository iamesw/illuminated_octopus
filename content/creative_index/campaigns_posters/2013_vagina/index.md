---
layout: layouts/base.njk
title: The Vagina Monologues
description: Poster for a performance of the vagina monologues
date: 2013-04-26
tags:
  - graphic design
  - marketing
  - poster
eleventyNavigation:
  key: vagina
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("vagina") %}
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
			<figcaption>2013 | The Crisis Center</figcaption>
			<figcaption>Poster</figcaption>
			<figcaption>Fonts in Use:</br>Knockout</figcaption>
			<hr>
            <p>A friend put together a performance of <em>The Vagina Monologues</em> at the local university. She designed a poster featuring a vintage image of nude  or topless women dancing in a circle. I don't recall the specifics of the image, but it was tasteful. Think a classical Greek image. The university, already mildly uncomfortable with the performance, said the poster was not allowed because of the nudity. My friend asked if I could help develop another poster. In a subtle protest of sorts, I took a list of slang terms for vagina and "quoted" them in a sequence. Though arguably more offensive considering some of the terms listed, no issues were raised with the new poster.</p>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "vagina_1.jpg", "poster for performance of the vagina monologues" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>