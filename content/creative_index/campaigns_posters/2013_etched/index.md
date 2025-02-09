---
layout: layouts/base.njk
title: Etched in Collective History
description: Poster for japanese film festival
date: 2013-08-18
tags:
  - graphic design
  - marketing
  - poster
  - exhibition
eleventyNavigation:
  key: etched poster
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("etched poster") %}
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
			<figcaption>2013 | Birmingham Museum of Art</figcaption>
			<figcaption>Poster | Out of House</figcaption>
			<figcaption>Fonts in Use:</br>Custom hand painted lettering and Trade Gothic</figcaption>
            <hr>
		    <p><em>Etched in Collective History</em> presents the work of artists who interrogate, depict, and memorialize the Civil Rights Movement. The Movement inspired a number of artists to participate physically, in marches and sit-ins, as well as creatively, through the act of making art. This exhibition presented the work of these artists and the artists who followed, telling a multi-generational story of the Civil Rights Movement. These various perspectives and works form a powerful synthesis of art, relating dynamic responses to our collective history.</p>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "etched_ad_1.jpg", "Poster for a contemporary art exhibition focused on the civil rights movement" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
			<figcaption>Billboards + Banners</figcaption>
    	</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "etched_ad_2.jpg", "Poster for a contemporary art exhibition focused on the civil rights movement" %}
			</br></br>
			{% _image "etched_ad_3.jpg", "Poster for a contemporary art exhibition focused on the civil rights movement" %}
		</div>
		<div class="col-4 col-4-md col-4-lg">
			{% _image "etched_ad_4.jpg", "Poster for a contemporary art exhibition focused on the civil rights movement" %}
		</div>
	</div>
</div>