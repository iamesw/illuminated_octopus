---
layout: layouts/base.njk
title: Guide to the Collection
description: Handbook of the Birmingham Museum of Art collection
date: 2018-04-18
tags:
  - graphic design
  - catalog
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
            <h3>Birmingham Museum of Art</h3>
            <h1>{{ title }}</h1>
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
		    	<p>Published in anticipation of the Birmingham Museum of Art’s 60th anniversary. The guide featured highlights of the museum’s collection.</p>
			<hr>
            <ul class="post-metadata">
                <li>286 pages / softcover</li>
                <li>Typeset in Akzidenz Grotesk and Mercury</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/handbook_1.jpg", "book cover with abstract art as background image" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-3-lg"></div>
		<div class="col-12 col-12-md col-8-lg">
            {%image "./images/handbook_2.png", "book cover with abstract art as background image" %}
        </br>
            {%image "./images/handbook_3.jpg", "book layout" %}
        </br>
            {%image "./images/handbook_4.jpg", "book layout" %}
        </br>
            {%image "./images/handbook_5.jpg", "book layout" %}
        </br>
            {%image "./images/handbook_6.jpg", "book layout" %}
        </br>
            {%image "./images/handbook_7.jpg", "book layout" %}
        </br>
            {%image "./images/handbook_8.jpg", "book layout" %}
        </br>
            {%image "./images/handbook_9.jpg", "book layout" %}
        </br>
            {%image "./images/handbook_10.jpg", "book layout" %}
        </br>
            {%image "./images/handbook_11.jpg", "book layout" %}
        </br>
            {%image "./images/handbook_12.jpg", "book layout" %}
        </br>
            {%image "./images/handbook_13.jpg", "book layout" %}
        </br>
            {%image "./images/handbook_14.jpg", "book layout" %}
        </br>
            {%image "./images/handbook_15.jpg", "book layout" %}
        </br>
            {%image "./images/handbook_16.jpg", "book layout" %}
        </br>
            {%image "./images/handbook_17.jpg", "book layout" %}
        </br>
            {%image "./images/handbook_18.jpg", "book layout" %}
        </br>
            {%image "./images/handbook_19.jpg", "book layout" %}
        </br>
            {%image "./images/handbook_20.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>