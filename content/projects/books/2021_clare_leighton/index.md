---
layout: layouts/base.njk
title: An Epic of Earth and Water
description: Catalog for Clare Leighton Exhibition
date: 2021-01-01
tags:
  - graphic design
  - catalog
  - exhibition
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
            <h3>Clare Leighton and the New England Industries Series</h3>
			<hr>
			<time>2021</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p>In 1948, the Wedgwood company asked British-American artist Clare Leighton (1898–1989) to create a series of twelve designs to be printed on a limited edition set of creamware plates. The artist spent the next three years of her life exploring New England’s countryside and seaside villages in an effort to better understand the place and the people. Typical of Leighton’s work, each design—from the figures included to the vignettes of tools and assorted equipment associated with the industry—is created with respect and dignity through the use of powerful lines and rich tones of black and white. <em>An Epic of Earth and Water: Clare Leighton and the New England Industries Series</em> explored Leighton as artist, her process, and Wedgwood commission.</p>
			<hr>
            <ul class="post-metadata">
                <li>56 pages / softcover</li>
                <li>Typeset in Bely and Franklin Gothic</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
            {%image "./images/cl_00.jpg", "book cover " %}
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
	</div>
    <div class="row">
    	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/cl_1.png", "book cover" %}
        </br>
            {%image "./images/cl_2.jpg", "book title page spread" %}
        </br>
            {%image "./images/cl_3.jpg", "book spread" %}
        </br>
            {%image "./images/cl_4.jpg", "book spread" %}
        </br>
            {%image "./images/cl_5.jpg", "book spread" %}
        </br>
            {%image "./images/cl_6.jpg", "book spread" %}
        </br>
            {%image "./images/cl_7.jpg", "book spread" %}
        </br>
            {%image "./images/cl_8.jpg", "book spread" %}
        </br>
            {%image "./images/cl_9.jpg", "book spread" %}
        </br>
            {%image "./images/cl_10.jpg", "book spread" %}
        </br>
            {%image "./images/cl_11.jpg", "book spread" %}
        </br>
            {%image "./images/cl_12.jpg", "book spread" %}
        </br>
            {%image "./images/cl_13.jpg", "book spread" %}
        </br>
    	<div class="col-12 col-12-md col-1-lg"></div>
    </div>
</div>