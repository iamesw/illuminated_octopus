---
layout: layouts/base.njk
title: Kathryn Tucker Windham
description: Gallery Guide for exhibition of photography by Kathryn Tucker Windham
date: 2008-02-24
tags:
  - graphic design
  - exhibition
  - gallery guide
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
            <h3>My Land, My People</h3>
			<hr>
			<time>2008</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p>This exhibition showcased the photographs of Kathryn Tucker Windham, renowned storyteller, folklorist, author, and journalist. Her photography was like a photo diary, an extended family album of significant moments and memories from her journeys through Alabama’s towns and countryside. Windham has said, “I love the people who live here. I couldn’t take these pictures in any other part of the country. These people and I, we’ve grown up under nearly the same circumstances, we have a shared understanding...we can laugh together.”</p>
			<hr>
            <ul class="post-metadata">
                <li>8 pages / selfcover</li>
                <li>Typeset in American Typewriter and Weiss</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/windham_1.jpg", "exhibition gallery guide cover" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/windham_2.jpg", "book layout" %}
        </br>
            {%image "./images/windham_3.jpg", "book layout" %}
        </br>
            {%image "./images/windham_4.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-6-lg"></div>
		<div class="col-12 col-12-md col-5-lg">
            {%image "./images/windham_5.jpg", "book layout" %}
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>