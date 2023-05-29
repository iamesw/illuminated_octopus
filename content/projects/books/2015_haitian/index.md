---
layout: layouts/base.njk
title: Haitian Vodou Flags
description: Gallery Guide for exhibition of Haitian Vodou flags
date: 2015-12-19
tags:
  - graphic design
  - exhibition
  - gallery guide
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
            <h3>From the Cargo Collection</h3>
			<hr>
			<time>2015</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p>Beaded and sequined flags, called <em>drapo</em>, are an important component of Vodoun, a religion that was established on the island of Haiti beginning in the 1500s. The Spanish, followed by the French, enslaved hundreds of thousands of West and Central Africans who were brought to labor on Haitian sugarcane plantations. The faith system that emerged, under extremely brutal conditions, combined various African beliefs and practices that connected people to divine sources of strength – spirits called <em>loa</em> – who serve as intermediaries between God and human beings.</p>
				<p>Because <em>Vodoun</em> was outlawed, and conversion to Catholicism was forced, practitioners often identified symbols and Saints from the Catholic religion to represent spirits from their hidden faith. Other European traditions in Haiti also became sources of symbolism in <em>Vodoun</em>, including imagery from the Society of Freemasons.</P>
				<p>In both African and European traditions, flags and banners are symbols of identity, power, and authority. When used in <em>Vodoun</em> ceremonies, flags represent the loa spirits and are carried into sacred spaces of worship, and even worn over the shoulders. The shimmering banners evoke the great mystery of the <em>loas</em>, who helped Haitians survive unimaginable oppression and obstacles.</p>
			<hr>
            <ul class="post-metadata">
                <li>12 pages / selfcover</li>
                <li>Typeset in Akzidenz Grotesk and Mercury</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/haitian_1.jpg", "cover with illustrated cover" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/haitian_2.jpg", "book layout" %}
        </br>
            {%image "./images/haitian_3.jpg", "book layout" %}
        </br>
            {%image "./images/haitian_4.jpg", "book layout" %}
        </br>
            {%image "./images/haitian_5.jpg", "book layout" %}
        </br>
            {%image "./images/haitian_6.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>