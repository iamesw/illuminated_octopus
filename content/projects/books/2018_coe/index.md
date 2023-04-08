---
layout: layouts/base.njk
title: Magic City Realism
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
            <h3>Richard Coe's Birmingham</h3>
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
                <p>In the wake of the Great Depression, Birmingham experienced a remarkable transformation that helped shape the city as we know it today. Artist Richard Coe, an Alabama native, documented the city’s rapidly changing urban fabric in his prints and paintings. Magic City Realism: Richard Coe’s Birmingham brought together over 60 of Coe’s images of the city from this decade for the first time.</p>
                <p>In 1929, the stock market crashed and the United States economy plummeted into the Great Depression. By 1933, President Franklin Roosevelt had implemented a series of New Deal programs designed to speed economic growth and recovery. Coe arrived in Birmingham in 1934. Working in his Five Points South studio, he illustrated the local impact of these initiatives with his etching needle and paint brush.</p>
                <p>In Coe’s images, billowing smoke stacks signify Birmingham’s burgeoning industrial economy. Shown side-by-side with the city’s gleaming downtown, these images capture a flourishing metropolis. Coe also pictured developing residential neighborhoods—both elite and humble—and scenes of daily life that relate a city reshaped by industrial growth and New Deal housing initiatives.</p>
			<hr>
            <ul class="post-metadata">
                <li>48 pages / softcover</li>
                <li>Typeset in DDC Hardware, Akzidenz Grotesk, and Mercury</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/coe_1.jpg", "book cover with an engraving of an industrial image" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/coe_2.png", "book cover with an engraving of an industrial image" %}
        </br>
            {%image "./images/coe_3.jpg", "book layout" %}
        </br>
            {%image "./images/coe_4.jpg", "book layout" %}
        </br>
            {%image "./images/coe_5.jpg", "book layout" %}
        </br>
            {%image "./images/coe_6.jpg", "book layout" %}
        </br>
            {%image "./images/coe_7.jpg", "book layout" %}
        </br>
            {%image "./images/coe_8.jpg", "book layout" %}
        </br>
            {%image "./images/coe_9.jpg", "book layout" %}
        </br>
            {%image "./images/coe_10.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>