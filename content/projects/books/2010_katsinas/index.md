---
layout: layouts/base.njk
title: Katsinas
description: Gallery Guide for exhibition of Native American Katsina figures
date: 2010-04-18
tags:
  - graphic design
  - exhibition
  - gallery guide
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
            <h3>Wilson Tawaquaptewa - The Dick Jemison Collection</h3>
			<hr>
			<time>2010</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p>Gallery guide for an exhibition of Hopi Katsina figures.</p>
			<hr>
            <ul class="post-metadata">
                <li>8 pages / selfcover</li>
                <li>Typeset in Akzidenz Grotesk and Weiss</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/katsinas_1.jpg", "cover with illustrated cover" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/katsinas_2.jpg", "book layout" %}
        </br>
            {%image "./images/katsinas_3.jpg", "book layout" %}
        </br>
            {%image "./images/katsinas_4.jpg", "book layout" %}
        </br>
            {%image "./images/katsinas_6.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>