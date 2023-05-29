---
layout: layouts/base.njk
title: Amy Pleasant
description: Gallery Guide for outdoor installation by Amy Pleasant
date: 2009-11-01
tags:
  - graphic design
  - exhibition
  - gallery guide
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h3>{{ title }}</h3>
            <h1>Suspended</h1>
			<hr>
			<time>2009-2010</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p>Birmingham artist Amy Pleasant created a site-specific drawing installation that wrapped the four walls of the Museum’s Lower Sculpture Garden. This was the artist’s first wall drawing created without her signature figurative imagery. The work was a “cloudscape” executed in black exterior paint directly on the walls of this “outdoor gallery.” <em>Suspended</em> evolved from a series of drawings the artist made while viewing the clouds from a plane window.</p>
			<hr>
            <ul class="post-metadata">
                <li>4 pages / selfcover, poster</li>
                <li>Typeset in Akzidenz Grotesk and Weiss</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/pleasant_1.jpg", "exhibition gallery guide cover" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/pleasant_0.jpg", "book layout" %}
        </br>
            {%image "./images/pleasant_3.jpg", "book layout" %}
        </br>
			{%image "./images/pleasant_2.jpg", "book layout" %}
		</div>
    	<div class="col-12 col-12-md col-1-lg"></div>
	</div>
</div>