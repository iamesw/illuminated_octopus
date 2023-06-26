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
  key: Who Shot Rock & Roll
  parent: Posters, ads, etc
---

<div class="container">
	<div class="row">
		<div class="col">
			{% set navPages = collections.all | eleventyNavigationBreadcrumb("Who Shot Rock & Roll") %}
			<ul class="post-metadata">
			{%- for entry in navPages %}
				<li{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}>
    			 » <a href="{{ entry.url }}">{{ entry.title }}</a>
  				</li>
			{%- endfor %}
			</ul>
		</div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
            <hr>
			<h1>{{ title }}</h1>
			<time>Summer 2011</time>
            <hr>
			<p>The summer of 2011 saw the arrival of <em>Who Shot Rock & Roll</em> at the Birmingham Museum of Art. An exhibition featuring photos of pop culture icons, the focus was less on the performers and more on the photographers who took the iconic photos. As such the thrust of the marketing materials was framing each photograph through the perspective of the photographer. The aesthetic was built in support of "rock n roll" with distressed text and grimy texture.</p>
            <p>The poster campaign won local and regional Silver Addy Awards.</P>
            <hr>
            <ul class="post-metadata">
                <li>Fonts: Akzidenz Grotesk, Eames Century Modern</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
        <div class="col">
			{%image "./images/wsr_1.jpg", "Poster depicting a punk rock band playing with exhibition text" %}
		</div>
	</div>
    </br>
    <div class="row">
        <div class="col">
            {%image "./images/wsr_2.jpg", "Poster depicting a punk rock band playing with exhibition text" %}
        </br>
        </br>               
            {%image "./images/wsr_3.jpg", "Poster depicting a punk rock band playing with exhibition text" %}
        </div>
        <div class="col">
            {%image "./images/wsr_6.jpg", "Poster depicting a punk rock band playing with exhibition text" %} 
        </br>
        </br>
            {%image "./images/wsr_5.jpg", "Poster depicting a punk rock band playing with exhibition text" %}
        </div>
        <div class="col">
            {%image "./images/wsr_4.jpg", "Poster depicting a punk rock band playing with exhibition text" %}
        </br>
        </br>
            {%image "./images/wsr_7.jpg", "Poster depicting a punk rock band playing with exhibition text" %} 
        </br>
        </br>
            {%image "./images/wsr_8.jpg", "Poster depicting a punk rock band playing with exhibition text" %} 
        </div>
    </div>
</div>