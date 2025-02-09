---
layout: layouts/base.njk
title: Haitian Vodou Flags From the Cargo Collection
description: Gallery Guide for exhibition of Haitian Vodou flags
date: 2015-12-19
tags:
  - graphic design
  - exhibition
  - gallery guide
eleventyNavigation:
  key: Haitian Flags Gallery Guide
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Haitian Flags Gallery Guide") %}
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
			<figcaption>2015 | Birmingham Museum of Art</figcaption>
            <figcaption>Gallery Guide</br>12 pages / selfcover</figcaption>
			<figcaption>Fonts in use:</br>Akzidenz Grotesk and Mercury</figcaption>
			<hr>
		    	<p>Beaded and sequined flags, called <em>drapo</em>, are an important component of Vodoun, a religion that was established on the island of Haiti beginning in the 1500s. The Spanish, followed by the French, enslaved hundreds of thousands of West and Central Africans who were brought to labor on Haitian sugarcane plantations. The faith system that emerged, under extremely brutal conditions, combined various African beliefs and practices that connected people to divine sources of strength – spirits called <em>loa</em> – who serve as intermediaries between God and human beings.</p>
				<p>Because <em>Vodoun</em> was outlawed, and conversion to Catholicism was forced, practitioners often identified symbols and Saints from the Catholic religion to represent spirits from their hidden faith. Other European traditions in Haiti also became sources of symbolism in <em>Vodoun</em>, including imagery from the Society of Freemasons.</P>
				<p>In both African and European traditions, flags and banners are symbols of identity, power, and authority. When used in <em>Vodoun</em> ceremonies, flags represent the loa spirits and are carried into sacred spaces of worship, and even worn over the shoulders. The shimmering banners evoke the great mystery of the <em>loas</em>, who helped Haitians survive unimaginable oppression and obstacles.</p>
		</div>
	    <div class="col"></div>
	    <div class="col-6 col-6-md col-6-lg">
			{% _image "haitian_1.jpg", "cover with illustrated cover" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
            {% _image "haitian_2.jpg", "book layout" %}
		</div>
		<div class="col">
            {% _image "haitian_3.jpg", "book layout" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
            {% _image "haitian_4.jpg", "book layout" %}
		</div>
		<div class="col">
            {% _image "haitian_5.jpg", "book layout" %}
		</div>
		<div class="col">
            {% _image "haitian_6.jpg", "book layout" %}
        </div>
  	</div>
</div>