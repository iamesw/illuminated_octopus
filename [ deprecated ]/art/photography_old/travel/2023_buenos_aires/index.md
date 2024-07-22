---
layout: layouts/base.njk
title: Buenos Aires
description: travel photography in Buenos Aires, Argentina
date: 2023-11
tags:
  - photography
  - travel
eleventyNavigation:
  key: Buenos Aires
  parent: Travel
---

<div class="container">
	<div class="row">
		<div class="col">
			{% set navPages = collections.all | eleventyNavigationBreadcrumb("Buenos Aires") %}
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
			<figcaption>November 26–29, 2023</br>Fujifilm X-Pro 2 | iPhone 15 Pro</figcaption>
			</ul>
			<hr>
			<p>I have a hard time describing Buenos Aires. Overwhelming is a starting point. Trying to navigate on foot, it was a bit much. But time in Cementatrio de la Recolata was a highlight. And a tour of the Espacio Memoria y Derechos Humanos was incredibly moving.</p>
			<hr>
		</div>
		<div class="col-12 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "bae_1.jpg", "" %}
			<figcaption>Espacio Memoria y Derechos Humanos | ESMA</br>Fujifilm X-Pro 2</figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "bae_16.jpg", "" %}
			<figcaption>Espacio Memoria y Derechos Humanos | ESMA</br>Fujifilm X-Pro 2</figcaption>			
		</div>
		<div class="col">
			{% _image "bae_17.jpg", "" %}
			<figcaption>Espacio Memoria y Derechos Humanos | ESMA</br>Fujifilm X-Pro 2</figcaption>			
		</div>
		<div class="col">
			{% _image "bae_18.jpg", "" %}
			<figcaption>Espacio Memoria y Derechos Humanos | ESMA</br>Fujifilm X-Pro 2</figcaption>			
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "bae_15.jpg", "" %}
			<figcaption>Espacio Memoria y Derechos Humanos | ESMA</br>Fujifilm X-Pro 2</figcaption>
		</div>
		<div class="col">
			{% _image "bae_19.jpg", "" %}
			<figcaption>Espacio Memoria y Derechos Humanos | ESMA</br>Fujifilm X-Pro 2</figcaption>			
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "bae_13.jpg", "" %}
			<figcaption>Plaza de Mayo</br> Fujifilm X-Pro 2</figcaption>			
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "bae_25.jpg", "" %}
			<figcaption>34° 32' 11.73" S · 58° 27' 58.368" W</br>iPhone 15 Pro</figcaption>			
		</div>
		<div class="col">
			{% _image "bae_24.jpg", "" %}
			<figcaption>34° 37' 13.962" S · 58° 22' 17.49" W</br>iPhone 15 Pro</figcaption>			
		</div>
		<div class="col">
			{% _image "bae_26.jpg", "" %}
			<figcaption>34° 36' 29.52" S · 58° 22' 23.22" W</br>iPhone 15 Pro</figcaption>			
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "bae_9.jpg", "" %}
			<figcaption>Cementatrio de la Recolata</br>Fujifilm X-Pro 2</figcaption>			
		</div>
		<div class="col">
			{% _image "bae_10.jpg", "" %}
			<figcaption>Cementatrio de la Recolata</br>Fujifilm X-Pro 2</figcaption>			
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "bae_3.jpg", "" %}
			<figcaption>Cementatrio de la Recolata</br>Fujifilm X-Pro 2</figcaption>			
		</div>
		<div class="col">
			{% _image "bae_11.jpg", "" %}
			<figcaption>Cementatrio de la Recolata</br>Fujifilm X-Pro 2</figcaption>			
		</div>
		<div class="col">
			{% _image "bae_5.jpg", "" %}
			<figcaption>Cementatrio de la Recolata</br>Fujifilm X-Pro 2</figcaption>			
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "bae_4.jpg", "" %}
			<figcaption>Cementatrio de la Recolata</br>Fujifilm X-Pro 2</figcaption>			
		</div>
		<div class="col">
			{% _image "bae_6.jpg", "" %}
			<figcaption>Cementatrio de la Recolata</br>Fujifilm X-Pro 2</figcaption>			
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "bae_2.jpg", "" %}
			<figcaption>Cementatrio de la Recolata</br>Fujifilm X-Pro 2</figcaption>			
		</div>
		<div class="col">
			{% _image "bae_21.jpg", "" %}
			<figcaption>Cementatrio de la Recolata</br>Fujifilm X-Pro 2</figcaption>			
		</div>
		<div class="col">
			{% _image "bae_7.jpg", "" %}
			<figcaption>Cementatrio de la Recolata</br>Fujifilm X-Pro 2</figcaption>			
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "bae_8.jpg", "" %}
			<figcaption>Cementatrio de la Recolata</br>Fujifilm X-Pro 2</figcaption>			
		</div>
		<div class="col">
			{% _image "bae_14.jpg", "" %}
			<figcaption>Catedral Metropolitano</br>Fujifilm X-Pro 2</figcaption>
		</div>
	</div>
	<div class="row">
		<div class="col">
			{% _image "bae_12.jpg", "" %}
			<figcaption>Plaza de Mayo</br>Fujifilm X-Pro 2</figcaption>
		</div>
		<div class="col">
			{% _image "bae_22.jpg", "" %}
			<figcaption>Peligro</br>iPhone Pro 15</figcaption>
		</div>
		<div class="col">
			{% _image "bae_23.jpg", "" %}
			<figcaption>Biblioteca Nacional</br>iPhone Pro 15</figcaption>
		</div>
	</div>
</div>