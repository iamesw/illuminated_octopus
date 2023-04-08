---
layout: layouts/base.njk
title: David Puxley
description: Gallery Guide for exhibition of Wedgwood studio pottery
date: 2014-04-18
tags:
  - graphic design
  - exhibition
  - gallery guide
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
            <h3>Wedgwood's First Studio Potter</h3>
			<hr>
			<time>2014</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p>From the late eighteenth century when Josiah Wedgwood utilized the designs of artists like John Flaxman and Lady Elizabeth Templetown for many of his jasperware designs, the Wedgwood company has established a firm tradition of employing the best and the brightest. In 1964, the firm continued this tradition by inviting a young potter named David Puxley to serve as its first studio potter in residence. David was given a spot at the factory and access to all materials and personnel—and then he was just told to create! While many of his designs went into production, others were sold at special exhibitions and through private channels.</p>
                <p>The exhibition explored the notion of “studio pottery” during the second half of the twentieth century and highlighted Puxley’s creative work and his role in establishing a studio pottery tradition at Wedgwood.</p>
			<hr>
            <ul class="post-metadata">
                <li>12 pages / selfcover</li>
                <li>Typeset in Akzidenz Grotesk and Mercury</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/puxley_1.jpg", "cover with illustrated cover" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/puxley_2.jpg", "book layout" %}
        </br>
            {%image "./images/puxley_3.jpg", "book layout" %}
        </br>
            {%image "./images/puxley_4.jpg", "book layout" %}
        </br>
            {%image "./images/puxley_5.jpg", "book layout" %}
        </br>
            {%image "./images/puxley_6.jpg", "book layout" %}
        </br>
            {%image "./images/puxley_7.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>