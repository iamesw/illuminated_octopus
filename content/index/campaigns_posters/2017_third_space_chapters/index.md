---
layout: layouts/base.njk
title: Third Space
description: Marketing materials for contemporary art exhibition programs
date: 2017-04-18
tags:
  - graphic design
  - marketing
  - exhibition
eleventyNavigation:
  key: Third Space Campaign
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Third Space Campaign") %}
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
		<div class="col">
			<h1>{{ title }}</h1>
			<figcaption>2017–2018 | Birmingham Museum of Art</figcaption>
            <figcaption>Posters | Marketing Materials</figcaption>
			<figcaption>Fonts in use:</br>Akzidenz Grotesk and <a href="https://www.behance.net/gallery/18864355/AGM" target="_blank">AGM</a></figcaption>
			<hr>
			<p>The Birmingham Museum of Art launched its largest exhibition of contemporary art in 2017 with <em>Third Space</em>. Drawing from the permanent collection, the exhibition focused on the connections between Birmingham, Alabama, the American South, and the Global South. A series of programs was a vital component of the exhibition, featuring artist lectures and performances. These are marketing materials for those programs.</p>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
				{% _image "third_space_chapters_1.jpg", "Poster featuring a standing figure with raised first" %}
				<figcaption>Chapter One featured Tommie Smith, famous for his protest at the 1968 Olympics in conversation with artist Glenn Kaino, who created a sculpture composed of 200 bronze casts of Smith's raised arm. The poster features the iconic form of Smith raising his fist in protest, a gold tone image of Kaino's sculpture behind him.</figcaption>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		    {% _image "third_space_chapters_2.jpg", "Poster featuring a person's face covered in teeth whitening strips, hand held against 
			the side of his face" %}
			<figcaption>Conceptual Wilmer Wilson IV gave a lecture for the third Chapter. The arresting image of Wilson with teeth-whitening strips pasted to his face does the heavy lifting, the text arranged in an off kilter, though heavily gridded, fashion to compliment the unease of the image.</figcaption>
		</div>
    	<div class="col">
    		{% _image "third_space_chapters_3.jpg", "Poster featuring a seated man smiling" %}
			<figcaption>An improvisational performance by Lonnie Holley ended the series of Chapters. Holley is something of a local celebrity, hence highlighting his name prominently, along with the friendly and inviting image of him.</figcaption>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
  	</div>
</div>