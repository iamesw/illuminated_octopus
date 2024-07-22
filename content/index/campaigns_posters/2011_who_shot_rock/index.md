---
layout: layouts/base.njk
title: Who Shot Rock & Roll
description: Marketing materials for photography exhibition
date: 2011-08-15
tags:
  - graphic design
  - marketing
  - exhibition
eleventyNavigation:
  key: WSR Campaign
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("WSR Campaign") %}
<div class="breadcrumb">
    <h3 class="visually-hidden">Breadcrumb</h3>
	<ul class="nav">
            {%- for entry in navPages %}
		<li class="nav-item"{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}> » <a href="{{ entry.url }}">{{ entry.title }}</a></li>
  	    	{%- endfor %}
	    <li class="nav-item"><active-breadcrumb>» {{ title }}</active-breadcrumb></li>
	</ul>
</div><div class="container">
	<div class="row"></div>
    <div class="row">
		<div class="col">
			<h1>{{ title }}</h1>
			<figcaption>2011 | Birmingham Museum of Art</figcaption>
            <figcaption>Campaign</figcaption>
            <figcaption>Fonts in use:</br>Akzidenz Grotesk and Eames Century Modern</figcaption>
            <hr>
			<p>The summer of 2011 saw the arrival of <em>Who Shot Rock & Roll</em> at the Birmingham Museum of Art. An exhibition featuring photos of pop culture icons, the focus was less on the performers and more on the photographers who took the iconic photos. As such the thrust of the marketing materials was framing each photograph through the perspective of the photographer. The aesthetic was built in support of "rock n roll" with distressed text and grimy texture.</p>
            <p>The poster campaign won local and regional Silver Addy Awards.</P>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
			{% _image "wsr_1.jpg", "Poster depicting a punk rock band playing with exhibition text" %}
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
    </br>
    <div class="row">
        <div class="col-1 col-1-md col-1-lg"></div>
        <div class="col">
            {% _image "wsr_2.jpg", "Poster depicting a punk rock band playing with exhibition text" %}
        </br>
        </br>               
            {% _image "wsr_3.jpg", "Poster depicting a punk rock band playing with exhibition text" %}
        </div>
        <div class="col">
            {% _image "wsr_6.jpg", "Poster depicting a punk rock band playing with exhibition text" %} 
        </br>
        </br>
            {% _image "wsr_5.jpg", "Poster depicting a punk rock band playing with exhibition text" %}
        </div>
        <div class="col">
            {% _image "wsr_4.jpg", "Poster depicting a punk rock band playing with exhibition text" %}
        </br>
        </br>
            {% _image "wsr_7.jpg", "Poster depicting a punk rock band playing with exhibition text" %} 
        </br>
        </br>
            {% _image "wsr_8.jpg", "Poster depicting a punk rock band playing with exhibition text" %} 
        </div>
        <div class="col-1 col-1-md col-1-lg"></div>
    </div>
</div>