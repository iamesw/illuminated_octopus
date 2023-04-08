---
layout: layouts/base.njk
title: The Original Makers
description: Catalog for contemporary folk art exhibition
date: 2018-04-18
tags:
  - graphic design
  - catalog
  - exhibition
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
            <h3>Folk Art from the Cargo Collection</h3>
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
		    	<p>In commemoration of Alabama’s Bicentennial, the Birmingham Museum of Art presented <em>The Original Makers: Folk Art from the Cargo Collection</em>, an exhibition featuring more than 160 works of folk art.</p>
                <p>As a new generation of Southern makers explores the joy of creating, this exhibition celebrated the artists who have lived in our midst, inspired by their life experiences, their faith, their communities, and the landscape around them. Documenting many Southern ways of life, in all their variety, <em>The Original Makers</em> explored themes that have inspired self-taught and craft artists over many decades, including scenes of daily life and work, nature, faith and religion, patriotism, and music.</p>
			<hr>
            <ul class="post-metadata">
                <li>192 pages / softcover</li>
                <li>Typeset in Bureau Grotesque and Akzidenz Grotesk</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/cc_1.jpg", "book cover with folk art as background image" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/cc_cover.png", "book cover with folk art as background image" %}
        </br>
            {%image "./images/cc_2.jpg", "book layout" %}
        </br>
            {%image "./images/cc_3.jpg", "book layout" %}
        </br>
            {%image "./images/cc_4.jpg", "book layout" %}
        </br>
            {%image "./images/cc_5.jpg", "book layout" %}
        </br>
            {%image "./images/cc_6.jpg", "book layout" %}
        </br>
            {%image "./images/cc_7.jpg", "book layout" %}
        </br>
            {%image "./images/cc_8.jpg", "book layout" %}
        </br>
            {%image "./images/cc_9.jpg", "book layout" %}
        </br>
            {%image "./images/cc_10.jpg", "book layout" %}
        </br>
            {%image "./images/cc_11.jpg", "book layout" %}
        </br>
            {%image "./images/cc_12.jpg", "book layout" %}
        </br>
            {%image "./images/cc_13.jpg", "book layout" %}
        </br>
            {%image "./images/cc_14.jpg", "book layout" %}
        </br>
            {%image "./images/cc_15.jpg", "book layout" %}
        </br>
            {%image "./images/cc_16.jpg", "book layout" %}
        </br>
            {%image "./images/cc_17.jpg", "book layout" %}
        </br>
            {%image "./images/cc_18.jpg", "book layout" %}
        </br>
            {%image "./images/cc_19.jpg", "book layout" %}
        </br>
            {%image "./images/cc_20.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>