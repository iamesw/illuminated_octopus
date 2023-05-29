---
layout: layouts/base.njk
title: David Puxley
description: General materials for ceramics exhibition 
date: 2014-04-18
tags:
  - graphic design
  - exhibition
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
			<h3>Wedgwood's First Studio Potter</h3>
			<hr>
			<time>Feb - Aug 2015</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p>Description of the Puxley exhibition to go here.</p>
			<hr>
            <ul class="post-metadata">
                <li>Fonts: Akzidenz Grotesk and Mercury</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
				{%image "./images/puxley_ex_1.jpg", "" %}
				<figcaption>Base illustration created for gallery guides and timeline graphics. Color palette for the illustration and other graphics were pulled from the glazes of Puxley's pottery.</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<hr>
		<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
        	{%image "./images/puxley_ex_2.png", "" %}
            </br>
            {%image "./images/puxley_ex_3.png", "" %}
            </br>
            {%image "./images/puxley_ex_4.png", "" %}
            <figcaption>Exhibition graphics featuring a timeline of the Wedgwood studio potter program, David Puxley's influences, and behind the scenes photography of Puxley at work.</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
	<hr>
	<div class="row">
		<div class="col-12 col-12-md col-3-lg"></div>
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
			<figcaption>Opening Reception Invitation Postcard  - Front</figcaption>
		</div>
    	<div class="col">
			<figcaption>Opening Reception Invitation Postcard - Back</figcaption>
			</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<hr>
	<div class="row">
    	<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-3-lg">
			<figcaption>Gallery Guide - 6 panel tri-fold</figcaption>
		</div>
		<div class="col-12 col-12-md col-7-lg">
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-10-lg">
		</div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>

</div>