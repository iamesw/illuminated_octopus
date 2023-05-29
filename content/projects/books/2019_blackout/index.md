---
layout: layouts/base.njk
title: Black Out
description: Gallery guide for an exhibition of silhouettes
date: 2019-09-28
tags:
  - graphic design
  - exhibition
  - gallery guide
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
            <h3>Silhouettes Then and Now</h3>
			<hr>
			<time>2019</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p><em>Black Out</em> presented historic silhouettes from the collection of the Smithsonian’s National Portrait Gallery and other institutions alongside works by contemporary artists who reimagine silhouettes in bold and unforgettable ways.</p>
			<hr>
            <ul class="post-metadata">
                <li>12 pages / selfcover</li>
                <li>Typeset in modified DIN, Aritus, and Akzidenz Grotesk</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/blackout_1.jpg", "cover with illustrated cover" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/blackout_2.jpg", "book layout" %}
        </br>
            {%image "./images/blackout_3.jpg", "book layout" %}
        </br>
            {%image "./images/blackout_4.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>