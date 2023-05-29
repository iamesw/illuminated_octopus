---
layout: layouts/base.njk
title: Spiral
description: Gallery Guide for exhibition of African American art from the Spiral Collective.
date: 2010-12-10
tags:
  - graphic design
  - exhibition
  - gallery guide
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
            <h3>Perspectives on an African American Art Collective</h3>
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
		    	<p>In the early 1960s in New York, the artist Romare Bearden invited a group of African-American artists to meet and discuss their roles as black artists during the charged years of the Civil Rights movement. On July 5th, 1963, the group decided to form a collective and called themselves Spiral. The name was inspired by the Archimedean spiral, which moves outward embracing all directions, yet constantly upward.</P>
				<p>This exhibition, <em>Spiral: Perspectives on an African-American Art Collective</em>, featured work by Romare Bearden, Norman Lewis, Charles Alston, Hale Woodruff, Reginald Gammon, Richard Mayhew, and Emma Amos.</p>
			<hr>
            <ul class="post-metadata">
                <li>8 pages / selfcover</li>
                <li>Typeset in Sentinel and Mercury</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/spiral_1.jpg", "cover with illustrated cover" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/spiral_2.jpg", "book layout" %}
        </br>
            {%image "./images/spiral_3.jpg", "book layout" %}
        </br>
            {%image "./images/spiral_4.jpg", "book layout" %}
		</div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
	<div class="row">
		<div class="col-12 col-12-md col-6-lg"></div>
		<div class="col-12 col-12-md col-5-lg">
            {%image "./images/spiral_5.jpg", "book layout" %}
		</div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>