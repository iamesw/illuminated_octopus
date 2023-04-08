---
layout: layouts/base.njk
title: The Collectors Circle for Contemporary Art at Twenty
description: Catalog for support group anniversary
date: 2018-04-18
tags:
  - graphic design
  - catalog
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
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
		    	<p>Founded in 1991 to support the Museum’s contemporary art collection and related exhibitions, the Collectors Circle organizes a variety of social events, trips, and educational programs for its members. This catalog was published to celebrate 20 years of acquisitions by the Collectors Circle.</p>
			<hr>
            <ul class="post-metadata">
                <li>48 pages / softcover</li>
                <li>Typeset in Akzidenz Grotesk</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/cc20_1.jpg", "book cover with folk art as background image" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-3-lg"></div>
		<div class="col-12 col-12-md col-8-lg">
            {%image "./images/cc20_2.jpg", "book layout" %}
        </br>
            {%image "./images/cc20_3.jpg", "book layout" %}
        </br>
            {%image "./images/cc20_4.jpg", "book layout" %}
        </br>
            {%image "./images/cc20_5.jpg", "book layout" %}
        </br>
            {%image "./images/cc20_6.jpg", "book layout" %}
        </br>
            {%image "./images/cc20_7.jpg", "book layout" %}
        </br>
            {%image "./images/cc20_8.jpg", "book layout" %}
        </br>
            {%image "./images/cc20_9.jpg", "book layout" %}
        </br>
            {%image "./images/cc20_10.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>