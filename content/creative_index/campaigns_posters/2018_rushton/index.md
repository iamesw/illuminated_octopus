---
layout: layouts/base.njk
title: Rushton Concert
description: Marketing materials for piano recital
date: 2018-02-08
tags:
  - graphic design
  - marketing
  - events
  - poster
eleventyNavigation:
  key: Rushton Series
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Rushton Series") %}
<div class="breadcrumb">
    <h3 class="visually-hidden">Breadcrumb</h3>
	<ul class="nav">
            {%- for entry in navPages %}
		<li class="nav-item"{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}> » <a href="{{ entry.url }}">{{ entry.title }}</a></li>
  	    	{%- endfor %}
	    <li class="nav-item"><active-breadcrumb>» {{ title }}</active-breadcrumb></li>
	</ul>
</div>
<div class="container">
  <div class="row"></div>
	<div class="row">
		<div class="col-4 col-4-md col-4-lg">
			<h1>{{ title }}</h1>
			<figcaption>2018, 2019, 2022 | Birmingham Museum of Art</figcaption>
            <figcaption>Posters | Social Media Assets</figcaption>
			<figcaption>Typeset in Akzidenz Grotesk</figcaption>
            <hr>
			<p>Each year the Museum presents a piano recital, the Annual Rushton Concert. Noticing a trend in the promotional photography made available, in 2018 I established a design language for the concert using a wash of color over a black and white image of the performer at their piano.</P>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "rushton_2018.jpg", "Poster for a piano recital" %}
			<figcaption>The first design in this approach from 2018 established the language for subsequent events. The general placement of elements and compositional rules.</figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col-2 col-2-md col-2-lg"></div>
        <div class="col">
			{% _image "rushton_2019.jpg", "Poster for a piano recital" %}
			<figcaption>The second design introduced variations on the theme. In this case the lid of the piano did not afford the same amount of space for the text. A more playful angled approach to text layout, paired with a warmer tone, paired well with a friendlier press image.</figcaption>
		</div>
		<div class="col">
			{% _image "rushton_2022.jpg", "Poster for a piano recital" %}
			<figcaption>The next variation. Only the minimal suggestion of a piano, so the color splash was moved to the performer's dress. The overall compositional form remained.</figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col-2 col-2-md col-2-lg"></div>
        <div class="col">
			<figcaption>The layout of the series was also designed to be adaptive, carried across multiple formats, from horizontal and square compositions for online digital assets, through to the vertical posters.</figcaption>		
		</div>
		<div class="col"></div>
	</div>
	<div class="row">
		<div class="col-2 col-2-md col-2-lg"></div>
        <div class="col">
			{% _image "rushton_1.jpg", "Poster for a piano recital" %}
			</br></br>
			{% _image "rushton_2019.jpg", "Poster for a piano recital" %}
			</br></br>
			{% _image "rushton_5.jpg", "Poster for a piano recital" %}
		</div>
		<div class="col">
			{% _image "rushton_2.jpg", "Poster for a piano recital" %}
			</br></br></br></br>
			{% _image "rushton_4.jpg", "Poster for a piano recital" %}
			</br></br>
			{% _image "rushton_6.jpg", "Poster for a piano recital" %}
		</div>
		<div class="col">
			{% _image "rushton_2018.jpg", "Poster for a piano recital" %}
			</br></br>
			{% _image "rushton_3.jpg", "Poster for a piano recital" %}
			</br></br>
			{% _image "rushton_2022.jpg", "Poster for a piano recital" %}
		</div>
	</div>
</div>