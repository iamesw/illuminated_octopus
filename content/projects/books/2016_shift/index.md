---
layout: layouts/base.njk
title: shift_
description: Zine format for contemporary art satellite space
date: 2016-01-29
tags:
  - graphic design
  - exhibition
  - gallery guide
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
            <h3>A Temporary Platform for Social Exchange</h3>
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
		    	<p>For five months shift occupied a ground floor storefront in Birmingham’s Theatre and Arts District. A Birmingham Museum of Art initiative, shift was a satellite space that will functioned as a platform for conversations around contemporary art. The project aimed to push the Museum's contemporary programming beyond the walls of the Museum–to engage new people and expand the community and to work with Birmingham artists in more non-traditional ways.</p>
				<p>shift invited two people from the Birmingham community each month, for the course of five months, as hosts to occupy and activate the space. Hosts included Birmingham-based artists and creatives who worked together to present a project to the public on the last Friday of each month. shift’s collaborative nature encouraged hosts to push outside their creative comfort zone, creating opportunities to consider new ideas and concepts. shift also invited the community to come work, read, meet friends, hold meetings, write, and hang out.</P>
				<p>shift also included a zine makerspace. The makerspace was stocked with supplies for visitors to create their own zines as well as a small display of zines belonging to the Birmingham Zine Library.</p>
			<hr>
            <ul class="post-metadata">
                <li>8 pages / selfcover</li>
                <li>Typeset in Akzidenz Grotesk</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/shift_3.jpg", "cover with illustrated cover" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/shift_2.jpg", "book layout" %}
			<figcaption>The promotional zine served as a template for the zine each pair of hosts would produce during their month long residency at shift.</figcaption>
        </br>
            {%image "./images/shift_4.jpg", "book layout" %}
        </br>
            {%image "./images/shift_5.jpg", "book layout" %}
        </br>
            {%image "./images/shift_6.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
	<div class="row">
		<div class="col-12 col-12-md col-4-lg"></div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/shift_1.jpg", "poster" %}
			<figcaption>The inside of the 11 x 17 inch template featured a poster describing the program.</figcaption>
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>

</div>