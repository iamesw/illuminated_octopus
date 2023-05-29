---
layout: layouts/base.njk
title: Space Mountain
description: Catalog for contemporary exhibition
date: 2012-11-01
tags:
  - graphic design
  - catalog
  - exhibition
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
            <h3>Clayton Colvin</h3>
			<h1>{{ title }}</h1>
            <hr>
			<time>2012</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p>Exhibition and career retrospective catalog for contemporary artist Clayton Colvin.</p>
			<hr>
            <ul class="post-metadata">
                <li>72 pages / hardcover</li>
                <li>Typeset in Bourgeois and Chino</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/space_1.jpg", "book cover" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/space_2.jpg", "book cover" %}
        </br>
            {%image "./images/space_3.jpg", "book layout" %}
        </br>
            {%image "./images/space_4.jpg", "book layout" %}
        </br>
            {%image "./images/space_5.jpg", "book layout" %}
        </br>
            {%image "./images/space_6.jpg", "book layout" %}
        </br>
            {%image "./images/space_7.jpg", "book layout" %}
        </br>
            {%image "./images/space_8.jpg", "book layout" %}
        </br>
            {%image "./images/space_9.jpg", "book layout" %}
        </br>
            {%image "./images/space_10.jpg", "book layout" %}
        </br>
            {%image "./images/space_11.jpg", "book layout" %}
        </br>
            {%image "./images/space_12.jpg", "book layout" %}
        </br>
            {%image "./images/space_13.jpg", "book layout" %}
        </br>
            {%image "./images/space_14.jpg", "book layout" %}
        </br>
            {%image "./images/space_15.jpg", "book layout" %}
        </br>
            {%image "./images/space_16.jpg", "book layout" %}
        </br>
            {%image "./images/space_17.jpg", "book layout" %}
        </br>
            {%image "./images/space_18.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>