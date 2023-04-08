---
layout: layouts/base.njk
title: Etched in Collective History
description: Catalog for exhibition of contemporary art
date: 2013-08-18
tags:
  - graphic design
  - catalog
  - exhibition
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
			<hr>
			<time>2013</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p><em>Etched in Collective History</em> presents the work of artists who interrogate, depict, and memorialize the Civil Rights Movement. The Movement inspired a number of artists to participate physically, in marches and sit-ins, as well as creatively, through the act of making art. This exhibition presented the work of these artists and the artists who followed, telling a multi-generational story of the Civil Rights Movement. These various perspectives and works form a powerful synthesis of art, relating dynamic responses to our collective history.</p>
			<hr>
            <ul class="post-metadata">
                <li>96 pages / softcover</li>
                <li>Typeset in Trade Gothic and Mercury</li>
                <li>Title hand-lettered</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/etched_1.jpg", "book cover with hand-lettered title" %}
            <figcaption>Proposed book cover, hand-lettered, in reference to protest signs seen in photographs from the exhibition.</figcaption>
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-5-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/etched_2.jpg", "book cover with hand-lettered title" %}
            <figcaption>Chosen book cover.</figcaption>
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/etched_3.jpg", "book layout" %}
        </br>
            {%image "./images/etched_4.jpg", "book layout" %}
        </br>
            {%image "./images/etched_5.jpg", "book layout" %}
        </br>
            {%image "./images/etched_6.jpg", "book layout" %}
        </br>
            {%image "./images/etched_7.jpg", "book layout" %}
        </br>
            {%image "./images/etched_8.jpg", "book layout" %}
        </br>
            {%image "./images/etched_9.jpg", "book layout" %}
        </br>
            {%image "./images/etched_10.jpg", "book layout" %}
        </br>
            {%image "./images/etched_11.jpg", "book layout" %}
        </br>
            {%image "./images/etched_12.jpg", "book layout" %}
        </br>
            {%image "./images/etched_13.jpg", "book layout" %}
        </br>
            {%image "./images/etched_14.jpg", "book layout" %}
        </br>
            {%image "./images/etched_15.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>