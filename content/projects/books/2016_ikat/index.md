---
layout: layouts/base.njk
title: All the Colors of the Rainbow
description: Catalog for exhibition of Ikat robes
date: 2016-03-19
tags:
  - graphic design
  - catalog
  - exhibition
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
            <h3>Uzbekistan Ikats from the Collection of Peggy Slappey</h3>
			<hr>
			<time>2016</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p>For the past decade, ikat patterns have permeated the fashion and design industry, touching everything from clothing and furniture to decorative arts. Despite its recent ubiquity, the ikat tradition has roots that go back centuries and cross many different cultures.</p>
                <p><em>All the Colors of the Rainbow</em> presented a vivid collection of ikat garments created in Uzbekistan in the 19th century, comprising robes, shoes, hats, bags, and even jewelry. Historically, clothing represented rank and status in the oasis communities. The wealthiest residents wore costly, bright silk ikats, while those in lesser positions wore similar robes made of cotton. The ikat robes produced in Uzbekistan in the 19th century came in a wide spectrum of vibrant colors and were used as clothing, decoration, and gifts.</p>
                <P>Though the Birmingham Museum of Art has hosted and originated many exhibitions concerning various aspects of Asian art over the years, this was the first to feature pieces from Central Asia.</p>
			<hr>
            <ul class="post-metadata">
                <li></li>
                <li></li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/ikat_1.jpg", "book cover with folk art as background image" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/ikat_2.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_3.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_4.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_5.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_6.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_7.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_8.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_9.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_10.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_11.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_12.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_13.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_14.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_15.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_16.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_17.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_18.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_19.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_20.jpg", "book layout" %}
        </br>
            {%image "./images/ikat_21.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>