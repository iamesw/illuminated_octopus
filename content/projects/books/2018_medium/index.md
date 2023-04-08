---
layout: layouts/base.njk
title: Medium
description: The quarterly members magazine of the Birmingham Museum of Art
date: 2018-01-01
tags:
  - graphic design
  - editorial
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
			<hr>
			<time>2018</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p>Published quarterly, <em>Medium</em> was the members magazine of the museum. It featured the exhibitions and programming of the museum, as well as feature articles highlighting scholarly research, museum news, and donor profiles.</p>
                <p>This was the final redesign before the publication went digital only during the pandemic in 2020.</p>
			<hr>
            <ul class="post-metadata">
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/medium_1.jpg", "magazine cover" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
    	<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/medium_19.jpg", "book layout" %}
            </br>
            {%image "./images/medium_23.jpg", "book layout" %}
            </br>
            {%image "./images/medium_24.jpg", "book layout" %}
        </div>
        <div class="col-12 col-12-md col-1-lg"></div>
    </div>
    <div class="row">
		<div class="col-12 col-12-md col-6-lg"></div>
		<div class="col-12 col-12-md col-5-lg">
            {%image "./images/medium_2.jpg", "book layout" %}
        </div>
		<div class="col-12 col-12-md col-1-lg"></div>
    </div>
	<div class="row">
    	<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/medium_3.jpg", "book layout" %}
        </br>
            {%image "./images/medium_4.jpg", "book layout" %}
        </br>
            {%image "./images/medium_5.jpg", "book layout" %}
        </br>
            {%image "./images/medium_6.jpg", "book layout" %}
        </br>
            {%image "./images/medium_7.jpg", "book layout" %}
        </div>
    </div>
    <div class="row">
		<div class="col-12 col-12-md col-6-lg"></div>
		<div class="col-12 col-12-md col-5-lg">
            {%image "./images/medium_8.jpg", "book layout" %}
        </div>
		<div class="col-12 col-12-md col-1-lg"></div>
    </div>
    <div class="row">
    	<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/medium_9.jpg", "book layout" %}
        </br>
            {%image "./images/medium_10.jpg", "book layout" %}
        </br>
            {%image "./images/medium_11.jpg", "book layout" %}
        </div>
		<div class="col-12 col-12-md col-1-lg"></div>
    </div>
    <div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col">
            {%image "./images/medium_12.jpg", "book layout" %}
		</div>
        <div class="col">
            {%image "./images/medium_13.jpg", "book layout" %}
        </div>
        <div class="col">
            {%image "./images/medium_16.jpg", "book layout" %}
            </div>
		<div class="col-12 col-12-md col-1-lg"></div>
    </div>
    <div class="row">
    	<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/medium_14.jpg", "book layout" %}
        </br>
            {%image "./images/medium_15.jpg", "book layout" %}
        </br>
            {%image "./images/medium_17.jpg", "book layout" %}
        </br>
            {%image "./images/medium_18.jpg", "book layout" %}
        </div>
		<div class="col-12 col-12-md col-1-lg"></div>
    </div>
    <div class="row">
		<div class="col-12 col-12-md col-6-lg"></div>
		<div class="col-12 col-12-md col-5-lg">
            {%image "./images/medium_20.jpg", "book layout" %}
        </div>
		<div class="col-12 col-12-md col-1-lg"></div>
    </div>
    <div class="row">
    	<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/medium_21.jpg", "book layout" %}
        </br>
            {%image "./images/medium_22.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>