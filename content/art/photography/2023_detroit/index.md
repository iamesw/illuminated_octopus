---
layout: layouts/base.njk
title: Detroit
description: travel photography in Detroit
date: 2023-05
tags:
  - photography
  - travel
eleventyNavigation:
  key: Detroit
  parent: Photography
---

<div class="container">
	<div class="row">
		<div class="col">
			{% set navPages = collections.all | eleventyNavigationBreadcrumb("Detroit") %}
			<ul class="post-metadata">
			{%- for entry in navPages %}
				<li{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}>
    			» <a href="{{ entry.url }}">{{ entry.title }}</a>
  				</li>
			{%- endfor %}
				<li><active-breadcrumb>» {{ title }}</active-breadcrumb></li>
			</ul>
		<div class="col">
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
			<ul class="post-metadata">
				<li>May 2023</li>
				<li>— Fujifilm X-Pro 2</li>
			</ul>
			<hr>
			<p>Scenes from my first time in Detroit, split between downtown and the Detroit Institute of Arts. Fascinating place in general. Mix of shots using a Kodak Tri-X 400 recipe as well as the standard Fujifilm Acros film simulation.</p>
			<hr>
		</div>
		<div class="col-12 col-1-md col-1-lg"></div>
		   <div class="col">
			{% _image "detroit_5.jpg", "" %}
		<figcaption>DIA Grand Hall</br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 400 - ƒ4 - 1/300 s</figcaption>
		</div>
	</div>
	<div class="row">
		   <div class="col">
			{% _image "detroit_4.jpg", "" %}
		<figcaption>The Broadway</br> Fujifilm X-Pro 2 - XF 18mm F2 R </br> ISO 400 - ƒ8 - 1/800 s</figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col">
		{% _image "detroit_1.jpg", "" %}
		<figcaption>Wayne County Building</br> Fujifilm X-Pro 2 - XF 18mm F2 R </br> ISO 400 - ƒ4 - 1/2200 s</figcaption>
		</div>
		<div class="col">
		{% _image "detroit_12.jpg", "" %}
		<figcaption>Tunnel to Canada</br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 400 - ƒ5.6 - 1/640 s</figcaption>
		</div>
		<div class="col">
		{% _image "detroit_16.jpg", "" %}
		<figcaption>Near Third Man Records</br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 400 - ƒ4 - 1/800 s</figcaption>
		</div>
	</div>
	<div class="row">
		   <div class="col">
			{% _image "detroit_6.jpg", "" %}
		<figcaption>RenCen 31st Floor View</br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 6400 - ƒ1.4 - 1/85 s</figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col">
		{% _image "detroit_3.jpg", "" %}
		<figcaption>DIA</br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 400 - ƒ5.6 - 1/640 s</figcaption>
		</div>
		<div class="col">
		{% _image "detroit_7.jpg", "" %}
		<figcaption>DIA</br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 400 - ƒ4 - 1/800 s</figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col">
		{% _image "detroit_9.jpg", "" %}
		<figcaption>Simmons and Clark Jewelers</br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 400 - ƒ5.6 - 1/1600 s</figcaption>
		</div>
		<div class="col">
		{% _image "detroit_11.jpg", "" %}
		<figcaption>Near Hart Plaza</br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 400 - ƒ5.6 - 1/1800 s</figcaption>
		</div>
		<div class="col">
		{% _image "detroit_10.jpg", "" %}
		<figcaption>Midtown</br> Fujifilm X-Pro 2 - XF 18mm F2 R </br> ISO 400 - ƒ4 - 1/300 s</figcaption>
		</div>
	</div>
	<div class="row">
		   <div class="col">
			{% _image "detroit_2.jpg", "" %}
		<figcaption>School Group – Rivera Mural – DIA</br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 400 - ƒ2.8 - 1/600 s</figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col">
		{% _image "detroit_8.jpg", "" %}
		<figcaption>RenCen Brutalism</br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 1600 - ƒ4 - 1/125 s</figcaption>
		</div>
		<div class="col">
		{% _image "detroit_13.jpg", "" %}
		<figcaption>You Must Turn Left</br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 400 - ƒ5.6 - 1/550 s</figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col">
		{% _image "detroit_14.jpg", "" %}
		<figcaption>Downtown</br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 400 - ƒ8 - 1/220 s</figcaption>
		</div>
	</div>
</div>