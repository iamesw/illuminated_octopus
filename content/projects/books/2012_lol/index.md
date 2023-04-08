---
layout: layouts/base.njk
title: The Look of Love
description: Catalog for an exhibition of lovers' eye jewelry
date: 2012-02-07
tags:
  - graphic design
  - catalog
  - exhibition
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
            <h3>Eye Miniatures from the Skier Collection</h3>
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
		    	<p>This exhibition explored the little-known subject of “lover’s eyes,” hand-painted miniatures of single human eyes set in jewelry and given as tokens of affection or remembrance. In 1785, when the Prince of Wales secretly proposed to Mrs. Maria Fitzherbert with a miniature of his own eye, he inspired an aristocratic fad for exchanging eye portraits mounted in a wide variety of settings including brooches, rings, lockets, and toothpick cases.</p>
                <p>With over 100 examples, the collection of Dr. and Mrs. David A. Skier of Birmingham is the largest in the world. This exhibition offered an unprecedented look at these unusual and intriguing works of art.</p>
			<hr>
            <ul class="post-metadata">
                <li>208 pages / hardcover</li>
                <li>Typeset in Didot and Archer</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/lol_1.jpg", "book cover with image of lover's eye jewelry" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-3-lg"></div>
		<div class="col-12 col-12-md col-8-lg">
            {%image "./images/lol_2.jpg", "book layout" %}
        </br>
            {%image "./images/lol_3.jpg", "book layout" %}
        </br>
            {%image "./images/lol_4.jpg", "book layout" %}
        </br>
            {%image "./images/lol_5.jpg", "book layout" %}
        </br>
            {%image "./images/lol_6.jpg", "book layout" %}
        </br>
            {%image "./images/lol_7.jpg", "book layout" %}
        </br>
            {%image "./images/lol_8.jpg", "book layout" %}
        </br>
            {%image "./images/lol_9.jpg", "book layout" %}
        </br>
            {%image "./images/lol_10.jpg", "book layout" %}
        </br>
            {%image "./images/lol_11.jpg", "book layout" %}
        </br>
            {%image "./images/lol_12.jpg", "book layout" %}
        </br>
            {%image "./images/lol_13.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>