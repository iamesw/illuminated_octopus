---
layout: layouts/base.njk
title: Sloss Furnaces
description: photography of former blast furnace located in Birmingham, Alabama
date: 2002-05
tags:
  - photography
eleventyNavigation:
  key: Sloss Photography
  parent: Photography
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Sloss Photography") %}
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
			<figcaption>1998–2002 | 35mm</figcaption>
			<figcaption>Nikon FM-10 / F100</br>Kodak Tri-X 400 / TMax 3200</br>Scanned from 4 x 6 prints</figcaption>
			<hr>
			<p>Sloss Furnaces is an industrial museum in Birmingham, Alabama. The site operated as a blast furnace for decades, eventually shuttering in the late 1970s. During my time in college I visited on multiple occasions, becoming quite fascinated by the site, eventually using it as inspiration for my senior project.</p>
			<p>Revisiting the site over the course of many years was a useful exercise in my development as a photographer. Seeing the same subject in different ways, realizing the effectiveness of different compositions. Moving away from Dutch angles on everything, learning a more staid approach.</p>
			<p>I would use many of these photos as a starting point for linocut prints and later paintings.</p>
			<hr>
		</div>
		<div class="col"></div>
		<div class="col-6 col-6-md col-6-lg">
			{% _image "sloss_photo_7.jpg", "" %}
		</div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		{% _image "sloss_photo_39.jpg", "" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		{% _image "sloss_photo_5.jpg", "" %}
		</div>
		<div class="col">
		{% _image "sloss_photo_13.jpg", "" %}
		</div>
		<div class="col">
		{% _image "sloss_photo_15.jpg", "" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		{% _image "sloss_photo_8.jpg", "" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		{% _image "sloss_photo_30.jpg", "" %}
		</div>
		<div class="col">
		{% _image "sloss_photo_34.jpg", "" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		{% _image "sloss_photo_17.jpg", "" %}
		</div>
		<div class="col">
		{% _image "sloss_photo_19.jpg", "" %}
		</div>
		<div class="col">
		{% _image "sloss_photo_21.jpg", "" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		{% _image "sloss_photo_26.jpg", "" %}
		</div>
		<div class="col">
		{% _image "sloss_photo_27.jpg", "" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>	
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		{% _image "sloss_photo_20.jpg", "" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		{% _image "sloss_photo_16.jpg", "" %}
		</div>
		<div class="col">
		{% _image "sloss_photo_32.jpg", "" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		{% _image "sloss_photo_3.jpg", "" %}
		</div>
		<div class="col">
		{% _image "sloss_photo_2.jpg", "" %}
		</div>
		<div class="col">
		{% _image "sloss_photo_4.jpg", "" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		{% _image "sloss_photo_36.jpg", "" %}
		</div>
		<div class="col">
		{% _image "sloss_photo_24.jpg", "" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		{% _image "sloss_photo_37.jpg", "" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		{% _image "sloss_photo_23.jpg", "" %}
		</div>
		<div class="col">
		{% _image "sloss_photo_22.jpg", "" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		{% _image "sloss_photo_9.jpg", "" %}
		</div>
		<div class="col">
		{% _image "sloss_photo_10.jpg", "" %}
		</div>
		<div class="col">
		{% _image "sloss_photo_12.jpg", "" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>	
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		{% _image "sloss_photo_31.jpg", "" %}
		</div>
		<div class="col">
		{% _image "sloss_photo_29.jpg", "" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>	
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		{% _image "sloss_photo_6.jpg", "" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>	
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		{% _image "sloss_photo_33.jpg", "" %}
		</div>
		<div class="col">
		{% _image "sloss_photo_14.jpg", "" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>	
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		{% _image "sloss_photo_42.jpg", "" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>