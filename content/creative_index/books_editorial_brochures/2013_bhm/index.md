---
layout: layouts/base.njk
title: The Birmingham Project
description: Catalog for photography exhibition commemorating victims of the 1963 16th St Baptist Church Bombing
date: 2013-09-15
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: Birmingham Project Catalog
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Birmingham Project Catalog") %}
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
			<h3>{{ title }}</h3>
		    <figcaption>2023 | 2013 | Birmingham Museum of Art</figcaption>
            <figcaption>Exhibition Catalog</br>64 pages / softcover / perfect bound with flaps</figcaption>
            <figcaption>Fonts in use:</br>Sentinel, Trade Gothic, and Mercury</figcaption>
            <figcaption>Related Projects:</br>Marketing Materials</br>Exhibition Design</figcaption>
			<hr>
		    	<p>Acclaimed photographer Dawoud Bey symbolically commemorates the four young girls and two boys whose lives were lost on September 15, 1963, in the bombing of the Sixteenth Street Baptist Church in Birmingham, Alabama. As some of the youngest victims of the Civil Rights Movement, Addie Mae Collins (14), Denise McNair (11), Carole Robertson (14), and Cynthia Wesley (14) are memorialized along with Virgil Ware (13) and Johnny Robinson (16), two Birmingham boys who lost their lives as a result of the violence that followed the bombing.</p>
                <p>To create the portraits, Bey photographed girls, women, boys, and men who currently reside in Birmingham. The subjects represent the ages of the young victims at the time of their deaths, and the ages they would be were they alive today. Along with the portraits, Bey also created a video shot in locations throughout Birmingham entitled 9.15.63. The video evokes the mood of that day: an ordinary Sunday morning, propelled into tragedy by senseless violence. Without specifically referencing the incidents, the project serves as a memorial to lives lost, a message of hope, and a promise for the future.</p>
		</div>
        <div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">{% _image "bhm_1.jpg", "book cover" %}</div>
	</div>
    <div class="row">
        <div class="col">{% _image "bhm_3.jpg", "book layout" %}</div>
        <div class="col">{% _image "bhm_4.jpg", "book layout" %}</div>
        <div class="col">{% _image "bhm_5.jpg", "book layout" %}</div>
	</div>
    <div class="row">
        <div class="col">{% _image "bhm_6.jpg", "book layout" %}</div>
        <div class="col">{% _image "bhm_7.jpg", "book layout" %}</div>
	</div>
    <div class="row">
        <div class="col">{% _image "bhm_8.jpg", "book layout" %}</div>
        <div class="col">{% _image "bhm_9.jpg", "book layout" %}</div>
        <div class="col">{% _image "bhm_10.jpg", "book layout" %}</div>
	</div>
    <div class="row">
        <div class="col">{% _image "bhm_11.jpg", "book layout" %}</div>
        <div class="col">{% _image "bhm_12.jpg", "book layout" %}</div>
	</div>
    <div class="row">
        <div class="col">{% _image "bhm_13.jpg", "book layout" %}</div>
        <div class="col">{% _image "bhm_15.jpg", "book layout" %}</div>
        <div class="col">{% _image "bhm_16.jpg", "book layout" %}</div>
    </div>
	<div class="row">
		<div class="col">{% _image "bhm_2.png", "book cover" %}</div>
    </div>
</div>