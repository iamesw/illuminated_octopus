---
layout: layouts/base.njk
title: WALLCEILINGFLOOR
description: Gallery Guide for exhibition of minimal and conceptual art
date: 2007-01-28
tags:
  - graphic design
  - exhibition
  - gallery guide
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
            <h3>Works by William Anastazi, Donald Judd, and Fred Sandback</h3>
			<hr>
			<time>2007</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p><em>WALLCEILINGFLOOR</em> presented work by three important figures in minimal and conceptual art.</p>
			<hr>
            <ul class="post-metadata">
                <li>6 panel / tri-fold</li>
                <li>Typeset in Univers</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/wallceilingfloor_1.jpg", "cover with sculpture" %}
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-4-lg"></div>
		<div class="col-12 col-12-md col-7-lg">
            {%image "./images/wallceilingfloor_2.jpg", "brochure layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-10-lg">
		    {%image "./images/wallceilingfloor_3.jpg", "brochure layout" %}
		</div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>