---
layout: layouts/base.njk
title: Dawoud Bey
description: Catalog for photography exhibition commemorating victims of the 1963 16th St Baptist Church Bombing
date: 2013-09-15
tags:
  - graphic design
  - catalog
  - exhibition
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h3>{{ title }}</h3>
            <h1>The Birmingham Project</h1>
			<hr>
			<time>2013</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p>Acclaimed photographer Dawoud Bey symbolically commemorates the four young girls and two boys whose lives were lost on September 15, 1963, in the bombing of the Sixteenth Street Baptist Church in Birmingham, Alabama. As some of the youngest victims of the Civil Rights Movement, Addie Mae Collins (14), Denise McNair (11), Carole Robertson (14), and Cynthia Wesley (14) are memorialized along with Virgil Ware (13) and Johnny Robinson (16), two Birmingham boys who lost their lives as a result of the violence that followed the bombing.</p>
                <p>To create the portraits, Bey photographed girls, women, boys, and men who currently reside in Birmingham. The subjects represent the ages of the young victims at the time of their deaths, and the ages they would be were they alive today. Along with the portraits, Bey also created a video shot in locations throughout Birmingham entitled 9.15.63. The video evokes the mood of that day: an ordinary Sunday morning, propelled into tragedy by senseless violence. Without specifically referencing the incidents, the project serves as a memorial to lives lost, a message of hope, and a promise for the future.</p>
			<hr>
            <ul class="post-metadata">
                <li>64 pages / softcover</li>
                <li>Typeset in Sentinel, Trade Gothic, and Mercury</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/bhm_1.jpg", "book cover" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/bhm_2.png", "book cover" %}
        </br>
            {%image "./images/bhm_3.jpg", "book layout" %}
        </br>
            {%image "./images/bhm_4.jpg", "book layout" %}
        </br>
            {%image "./images/bhm_5.jpg", "book layout" %}
        </br>
            {%image "./images/bhm_6.jpg", "book layout" %}
        </br>
            {%image "./images/bhm_7.jpg", "book layout" %}
        </br>
            {%image "./images/bhm_8.jpg", "book layout" %}
        </br>
            {%image "./images/bhm_9.jpg", "book layout" %}
        </br>
            {%image "./images/bhm_10.jpg", "book layout" %}
        </br>
            {%image "./images/bhm_11.jpg", "book layout" %}
        </br>
            {%image "./images/bhm_12.jpg", "book layout" %}
        </br>
            {%image "./images/bhm_13.jpg", "book layout" %}
        </br>
            {%image "./images/bhm_14.jpg", "book layout" %}
        </br>
            {%image "./images/bhm_15.jpg", "book layout" %}
        </br>
            {%image "./images/bhm_16.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>