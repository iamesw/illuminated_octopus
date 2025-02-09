---
layout: layouts/base.njk
title: Collectors Circle Event Invitation Suite - 2016
description: invitation for an event
date: 2016-10-20
tags:
  - graphic design
  - ephemera
  - invitation
eleventyNavigation:
  key: 2016 cc
  parent: Ephemera + Miscellaneous
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("2016 cc") %}
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
			<figcaption>2016 | Birmingham Museum of Art</figcaption>
			<figcaption>Invitation</figcaption>
			<figcaption>Fonts in Use:</br>Akzidenz Grotesk</figcaption>
            <hr>
			<p>A national election year. A collectors' support group dinner with a vote on what to accession. Naturally, an invitation based on ballots.</p>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "cc_2016_5.jpg", "event invitation" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "cc_2016_3.jpg", "event invitation" %}
			<figcaption>Invitation | Based on the infamous Florida butterfly ballot used in the 2000 U.S. presidential election.</figcaption>
		</div>
        <div class="col">
			{% _image "cc_2016_2.jpg", "event invitation" %}
		</div>
		<div class="col-2 col-2-md col-2-lg"></div>
	</div>
	<div class="row">
		<div class="col-4 col-4-md col-4-lg"></div>
		<div class="col">
			{% _image "cc_2016_5.jpg", "event invitation" %}
			<figcaption>Response Card</figcaption>
		</div>
        <div class="col">
			{% _image "cc_2016_6.jpg", "event invitation" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "cc_2016_1.jpg", "event invitation" %}
			<figcaption>Envelopes</figcaption>
		</div>
        <div class="col">
			{% _image "cc_2016_4.jpg", "event invitation" %}
		</div>
        <div class="col-2 col-2-md col-2-lg"></div>
	</div>
</div>