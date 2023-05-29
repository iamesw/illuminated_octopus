---
layout: layouts/base.njk
title: Afterlife
description: Gallery Guide for exhibition of Asian art
date: 2017-11-04
tags:
  - graphic design
  - exhibition
  - gallery guide
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
            <h3>Asian Art from the Weldon Collection</h3>
			<hr>
			<time>2017</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p><em>Afterlife: Asian Art from the Weldon Collection</em> journeyed across Asia to explore the fascinating role of art in this life and the next. Inspired by the bequest of Henry and June (“Jimmy”) Weldon, the exhibition included a wide variety of sculpture, ceramics, and tomb wares that reflect ancient fashion trends, entertainments, status symbols and religions, throughout the ages. Over 60 works spanned thousands of years of history from China, Japan, India, the Himalayas and Southeast Asia.</p>
			<hr>
            <ul class="post-metadata">
                <li>12 pages / selfcover</li>
                <li>Typeset in Akzidenz Grotesk</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/afterlife_1.jpg", "cover with illustrated cover" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/afterlife_2.jpg", "book layout" %}
        </br>
            {%image "./images/afterlife_3.jpg", "book layout" %}
        </br>
            {%image "./images/afterlife_4.jpg", "book layout" %}
        </br>
            {%image "./images/afterlife_6.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>