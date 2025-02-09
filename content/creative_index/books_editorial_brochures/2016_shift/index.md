---
layout: layouts/base.njk
title: shift_ a temporary platform for social exchange
description: Zine format for contemporary art satellite space
date: 2016-01-29
tags:
  - graphic design
  - exhibition
  - gallery guide
eleventyNavigation:
  key: Shift Zine
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Afterlife Gallery Guide") %}
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
			<figcaption>2016 | Birmingham Museum of Art</figcaption>
        	<figcaption>Zine</br>8 pages / selfcover</figcaption>
			<figcaption>Fonts in use:</br>Akzidenz Grotesk</figcaption>
			<hr>
		    	<p>For five months shift occupied a ground floor storefront in Birmingham’s Theatre and Arts District. A Birmingham Museum of Art initiative, shift was a satellite space that will functioned as a platform for conversations around contemporary art. The project aimed to push the Museum's contemporary programming beyond the walls of the Museum–to engage new people and expand the community and to work with Birmingham artists in more non-traditional ways.</p>
				<p>shift invited two people from the Birmingham community each month, for the course of five months, as hosts to occupy and activate the space. Hosts included Birmingham-based artists and creatives who worked together to present a project to the public on the last Friday of each month. shift’s collaborative nature encouraged hosts to push outside their creative comfort zone, creating opportunities to consider new ideas and concepts. shift also invited the community to come work, read, meet friends, hold meetings, write, and hang out.</P>
				<p>shift also included a zine makerspace. The makerspace was stocked with supplies for visitors to create their own zines as well as a small display of zines belonging to the Birmingham Zine Library.</p>
		</div>
        <div class="col"></div>
		<div class="col-6 col-6-md col-6-lg">
			{% _image "shift_3.jpg", "cover with illustrated cover" %}
		</div>
	</div>
	<div class="row">
	    <div class="col-2 col-2-md col-2-lg"></div>
		<div class="col">
            {% _image "shift_2.jpg", "book layout" %}
			<figcaption>The promotional zine served as a template for the zine each pair of hosts would produce during their month long residency at shift.</figcaption>
		</div>
	</div>
	<div class="row">
        <div class="col">
		    {% _image "shift_4.jpg", "book layout" %}
        </div>
		<div class="col">
            {% _image "shift_5.jpg", "book layout" %}
        </div>
		<div class="col">
            {% _image "shift_6.jpg", "book layout" %}
        </div>
  	</div>
	<div class="row">
		<div class="col"></div>
		<div class="col-6 col-6-md col-6-lg">
			{% _image "shift_1.jpg", "poster" %}
			<figcaption>The inside of the 11 x 17 inch template featured a poster describing the program.</figcaption>
		</div>
	</div>
</div>