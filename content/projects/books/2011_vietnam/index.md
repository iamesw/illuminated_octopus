---
layout: layouts/base.njk
title: Dragons and Lotus Blossoms
description: Catalog for exhibition of Vietnamese ceramics
date: 2012-22-01
tags:
  - graphic design
  - catalog
  - exhibition
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
            <h3>Vietnamese Ceramics from the Birmingham Museum of Art</h3>
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
            <P>Vietnam created the most sophisticated ceramics in Southeast Asia. Though they borrowed from China, Vietnamese potters explored their own indigenous tastes and developed their own production techniques. <em>Dragons and Lotus Blossoms: Vietnamese Ceramics from the Birmingham Museum of Art</em> was the largest exhibition in the United States to date devoted solely to Vietnamese ceramics. TheThe entire Birmingham Museum of Art collection of over two hundred pieces were displayed and illustrated in the catalog.</P>
			<hr>
            <ul class="post-metadata">
                <li>264 pages / softcover</li>
                <li>Typeset in Verlag and Mercury</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/vietnam_1.jpg", "book cover with vietnamese ewer" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-3-lg"></div>
		<div class="col-12 col-12-md col-8-lg">
            {%image "./images/vietnam_2.png", "book cover with vietnamese ewer" %}
        </br>
            {%image "./images/vietnam_3.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_4.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_5.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_6.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_7.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_8.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_9.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_10.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_11.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_12.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_13.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_14.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_15.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_16.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_17.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_18.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_19.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_20.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_21.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_22.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_23.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_24.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_25.jpg", "book layout" %}
        </br>
            {%image "./images/vietnam_26.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>