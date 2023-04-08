---
layout: layouts/base.njk
title: Sharon Louden
description: Catalog for contemporary art exhibition
date: 2008-09-28
tags:
  - graphic design
  - catalog
  - exhibition
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
            <h3>Taking Turns</h3>
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
		    	<p>This exhibition presented new work by New York-based artist Sharon Louden that visually connected the Museum’s galleries and the Sculpture Garden. Louden’s work primarily focuses on gesture, line, and materials. She used three mediums in this project: fiber optic sculpture in the Sculpture Garden, along with projected video animations and paintings inside the galleries.</p>
			<hr>
            <ul class="post-metadata">
                <li>48 pages / softcover</li>
                <li>Typeset in [ ]</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/louden_1.jpg", "book cover abstract illustration" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-3-lg"></div>
		<div class="col-12 col-12-md col-8-lg">
            {%image "./images/louden_2.png", "book cover abstract illustration" %}
        </br>
            {%image "./images/louden_3.png", "book layout" %}
        </br>
            {%image "./images/louden_4.jpg", "book layout" %}
        </br>
            {%image "./images/louden_5.jpg", "book layout" %}
        </br>
            {%image "./images/louden_6.jpg", "book layout" %}
        </br>
            {%image "./images/louden_7.jpg", "book layout" %}
        </br>
            {%image "./images/louden_8.jpg", "book layout" %}
        </br>
            {%image "./images/louden_9.jpg", "book layout" %}
        </br>
            {%image "./images/louden_10.jpg", "book layout" %}
        </br>
            {%image "./images/louden_11.jpg", "book layout" %}
        </br>
            {%image "./images/louden_12.jpg", "book layout" %}
        </br>
            {%image "./images/louden_13.jpg", "book layout" %}
        </br>
            {%image "./images/louden_14.jpg", "book layout" %}
        </br>
            {%image "./images/louden_15.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>