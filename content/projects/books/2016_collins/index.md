---
layout: layouts/base.njk
title: Lobby Projects
description: Gallery Guide for installation by Bethany Collins
date: 2016-04-16
tags:
  - graphic design
  - exhibition
  - gallery guide
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
            <h3>Bethany Collins - The Problem We All Live With</h3>
			<hr>
			<time>2016</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p><em>lobby projects</em> was an initiative by the Birmingham Museum of Art that invited contemporary artists to create site-specific commissions in the Museum’s main entrance. The debut artist was Bethany Collins, whose conceptually-driven work is fueled by critical exploration of how race and language interact.</p>
			<hr>
            <ul class="post-metadata">
                <li>6 panel / trifold</li>
                <li>Typeset in Akzidenz Grotesk</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/collins_1.jpg", "exhibition gallery guide cover" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col">
            {%image "./images/collins_1.jpg", "gallery guide layout" %}
			<figcaption>Collins took archival scans of <em>The Birmingham News</em> from important days during the Civil Rights Movement and created blind embossed prints. The covers, often not mentioning the Civil Rights Movement at all, were embossed on white paper. The internal pages where civil rights stories were often buried deep within the newspaper, were blind embossed on black paper. The gallery guide, featuring an interview with the artist was presented in a somewhat exaggerated reference to a newspaper format.</figcaption>
		</div>
		<div class="col">
            {%image "./images/collins_2.jpg", "gallery guide layout" %}
		</div>
		<div class="col">
            {%image "./images/collins_3.jpg", "gallery guide layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>