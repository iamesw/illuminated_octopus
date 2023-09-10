---
layout: layouts/base.njk
title: Delacroix and the Matter of Finish
description: Marketing materials for piano recital
date: 2014-02-22
tags:
  - graphic design
  - marketing
  - exhibition
  - poster
eleventyNavigation:
  key: delacroix-marketing
  parent: Advertising + Marketing
---

<div class="container">
	<div class="row">
		<div class="col">
			{% set navPages = collections.all | eleventyNavigationBreadcrumb("delacroix-marketing") %}
			<ul class="post-metadata">
			{%- for entry in navPages %}
				<li{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}>
    			 » <a href="{{ entry.url }}">{{ entry.title }}</a>
  				</li>
			{%- endfor %}
	    	<li><active-breadcrumb>» {{ title }}</active-breadcrumb></li>
			</ul>
		</div>
	</div>
	<hr>
<div class="row"></div>
	<div class="row">
		<div class="col">
			<h1>{{ title }}</h1>
			<figcaption>2014 | Birmingham Museum of Art</figcaption>
            <figcaption>Marketing Campaign</br>Typeset in Akzidenz Grotesk and Acropolis</figcaption>
            <hr>
			<p><em>Delacroix and the Matter of Finish</em> featured the dramatic work of the leader of the French Romantic Movement, who was often heralded as “the father of impressionism.” The exhibition highlighted Delacroix’s unparalleled coloristic surface effects, his famously troubled collaboration with his studio assistants, and his preoccupation with the fate of civilizations. Filled with high drama, a fiery color palette, and expressive brushstrokes, Delacroix’s style set the precedent for later artists like Renoir, Seurat, and Cézanne.</P>
			<p>The curator for this exhibition of Delacroix work didn't want a staid, formal, or "classical" approach typical to marketing "a French painting show." As Delacroix was considered somewhat radical in his day, a vibrant CMYK color palette and bold type was chosen. Though many of his works are easily recognizable by the public, Delacroix is not necessarily a household name. The campaign then revolved around answering the idea of "Who is Delacroix?" in a call and response featuring aspects of his work in an attempt to introduce him to the local market.</p>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
        <div class="col">
			{% _image "delacroix_0.jpg", "poster for a delacroix exhibition" %}
			<figcaption>The initial design concept expressed in a full page ad, featuring the exhibition title.</figcaption>
		</div>
	</div>
	<div class="row">
        <div class="col">
			{% _image "delacroix_3.jpg", "poster for a delacroix exhibition" %}
			</br></br>
			{% _image "delacroix_4.jpg", "poster for a delacroix exhibition" %}
		</div>
		<div class="col">
			{% _image "delacroix_6.jpg", "poster for a delacroix exhibition" %}
			</br></br>
			{% _image "delacroix_5.jpg", "poster for a delacroix exhibition" %}
		</div>
		<div class="col">
			{% _image "delacroix_7.jpg", "poster for a delacroix exhibition" %}
			</br></br>
			{% _image "delacroix_8.jpg", "poster for a delacroix exhibition" %}
		</div>
	</div>
		<div class="row">
        	<div class="col">
				<figcaption>The introduction of the call and response, front and back on coasters, featured at local bars and restaurant partners.</figcaption> 
			</div>
		</div>
	<div class="row">
        <div class="col">
			{% _image "delacroix_1.jpg", "poster for a delacroix exhibition" %}
		</div>
		<div class="col">
			{% _image "delacroix_2.jpg", "poster for a delacroix exhibition" %}
		</div>
	</div>
	<div class="row">
        <div class="col">
		<figcaption>Further variations of the main design expressed in display posters.</figcaption>
		</div>
	</div>
		<div class="row">
        	<div class="col">
				{% _image "delacroix_19.jpg", "poster for a delacroix exhibition" %}
				</br></br>
				{% _image "delacroix_20.jpg", "poster for a delacroix exhibition" %}
				</br></br>
				{% _image "delacroix_12.jpg", "poster for a delacroix exhibition" %}
			</div>
			<div class="col">
				{% _image "delacroix_21.jpg", "poster for a delacroix exhibition" %}
				</br></br>
				{% _image "delacroix_15.jpg", "poster for a delacroix exhibition" %}
				</br></br>
				{% _image "delacroix_16.jpg", "poster for a delacroix exhibition" %}
			</div>
			<div class="col">
				{% _image "delacroix_14.jpg", "poster for a delacroix exhibition" %}
				</br></br>
				{% _image "delacroix_13.jpg", "poster for a delacroix exhibition" %}
				</br></br>
				{% _image "delacroix_18.jpg", "poster for a delacroix exhibition" %}
			</div>
		</div>
		<div class="row">
        	<div class="col">
			<figcaption>Further variations in poster format.</figcaption> 
			</div>
		</div>
	</div>
</div>