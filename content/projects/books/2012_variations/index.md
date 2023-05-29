---
layout: layouts/base.njk
title: Variations
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
            <h3>Matt Wycoff</h3>
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
		    	<p>Exhibition and career retrospective catalog for contemporary artist Matt Wycoff.</p>
			<hr>
            <ul class="post-metadata">
                <li>153 pages / hardcover</li>
                <li>Typeset in News Gothic and Verlag</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/variations_1.jpg", "book cover" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/variations_2.jpg", "book cover" %}
        </br>
            {%image "./images/variations_3.jpg", "book layout" %}
        </br>
            {%image "./images/variations_4.jpg", "book layout" %}
        </br>
            {%image "./images/variations_5.jpg", "book layout" %}
        </br>
            {%image "./images/variations_6.jpg", "book layout" %}
        </br>
            {%image "./images/variations_7.jpg", "book layout" %}
        </br>
            {%image "./images/variations_8.jpg", "book layout" %}
        </br>
            {%image "./images/variations_9.jpg", "book layout" %}
        </br>
            {%image "./images/variations_10.jpg", "book layout" %}
        </br>
            {%image "./images/variations_11.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>