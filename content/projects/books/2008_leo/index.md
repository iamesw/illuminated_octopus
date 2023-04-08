---
layout: layouts/base.njk
title: Leonardo da Vinci
description: Catalog for exhibition of Leonardo da Vinci drawings
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
            <h3>Drawings from the Biblioteca Reale in Turin</h3>
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
		    	<p>The Birmingham Museum of Art hosted one of the most significant groups of drawings by Leonardo da Vinci to be loaned to a U.S. museum by the Biblioteca Reale (Royal Library) in Turin, Italy. The exhibition <em>Leonardo da Vinci: Drawings from the Biblioteca Reale in Turin</em> encompassed one of Leonardo’s most celebrated notebooks, the Codex on the Flight of Birds, and 11 important drawings, including one described by Bernard Berenson as the “most beautiful drawing in the world.” The drawings have never before traveled as a group nor in their entirety been made available outside of Italy. The catalog presented all 11 drawings and the codex at original scale.</p>
			<hr>
            <ul class="post-metadata">
                <li>132 pages / hardcover and softcover editions</li>
                <li>Adobe Jenson, Cloister Open Face, and Legacy Sans</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/leo_1.jpg", "book cover with leonardo da vinci illustration" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-3-lg"></div>
		<div class="col-12 col-12-md col-8-lg">
            {%image "./images/leo_2.jpg", "book layout" %}
        </br>
            {%image "./images/leo_3.jpg", "book layout" %}
        </br>
            {%image "./images/leo_4.jpg", "book layout" %}
        </br>
            {%image "./images/leo_5.jpg", "book layout" %}
        </br>
            {%image "./images/leo_6.jpg", "book layout" %}
        </br>
            {%image "./images/leo_7.jpg", "book layout" %}
        </br>
            {%image "./images/leo_8.jpg", "book layout" %}
        </br>
            {%image "./images/leo_9.jpg", "book layout" %}
        </br>
            {%image "./images/leo_10.jpg", "book layout" %}
        </br>
            {%image "./images/leo_11.jpg", "book layout" %}
        </br>
            {%image "./images/leo_12.jpg", "book layout" %}
        </br>
            {%image "./images/leo_13.jpg", "book layout" %}
        </br>
            {%image "./images/leo_14.jpg", "book layout" %}
        </br>
            {%image "./images/leo_15.jpg", "book layout" %}
        </br>
            {%image "./images/leo_16.jpg", "book layout" %}
        </br>
            {%image "./images/leo_17.jpg", "book layout" %}
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>