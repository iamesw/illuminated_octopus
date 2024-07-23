---
layout: layouts/base.njk
title: Montevideo, Uruguay
description: travel photography in Montevideo, Uruguay
date: 2023-11
tags:
  - photography
  - travel
eleventyNavigation:
  key: Montevideo, Uruguay
  parent: Photography
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Montevideo, Uruguay") %}
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
		<div class="col">
			<h1>{{ title }}</h1>
			<figcaption>November 24-26, 2023</br>Fujifilm X-Pro 2 | iPhone 15 Pro</figcaption>
			</ul>
			<hr>
			<p>Stop one in an overly ambitious South American itinerary. Montevideo was a slow start to a trip. Memories grew fonder on later reflections.</p>
			<hr>
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
		   <div class="col">
			{% _image "mvd_1.jpg", "palacio salvo in Montevideo at an angle with a palm tree in foreground in black and white" %}
			<figcaption>Palacio Salvo</br>Fujifilm X-Pro 2</figcaption>
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mvd_26.jpg", "" %}
			<figcaption>View from Smart Hotel balcony</br>Fujifilm X-Pro 2</figcaption>						
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mvd_8.jpg", "" %}
			<figcaption>Proximo Remate</br>Fujifilm X-Pro 2</figcaption>						
		</div>
		<div class="col">
			{% _image "mvd_21.jpg", "" %}
			<figcaption>917 Colonia</br>iPhone 15 Pro</figcaption>						
		</div>
		<div class="col">
			{% _image "mvd_20.jpg", "" %}
			<figcaption>683</br>iPhone 15 Pro</figcaption>						
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mvd_19.jpg", "" %}
			<figcaption>1466 | 1460</br>iPhone 15 Pro</figcaption>						
		</div>
		<div class="col">
			{% _image "mvd_3.jpg", "" %}
			<figcaption>Farmacia</br> Fujifilm X-Pro 2</figcaption>						
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mvd_2.jpg", "" %}
			<figcaption>Palacio Salvo</br>Fujifilm X-Pro 2</figcaption>						
		</div>
		<div class="col">
			{% _image "mvd_4.jpg", "" %}
			<figcaption>1327</br>Fujifilm X-Pro 2</figcaption>						
		</div>
		<div class="col">
			{% _image "mvd_5.jpg", "" %}
			<figcaption>Asleep on the Rambla</br>Fujifilm X-Pro 2</figcaption>						
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mvd_7.jpg", "" %}
			<figcaption>Espacio de Arte Contemporaneo</br>Fujifilm X-Pro 2</figcaption>						
		</div>
		<div class="col">
			{% _image "mvd_17.jpg", "" %}
			<figcaption>Red and Green</br>Fujifilm X-Pro 2</figcaption>						
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mvd_10.jpg", "" %}
			<figcaption>Espacio de Arte Contemporaneo</br>Fujifilm X-Pro 2</figcaption>			
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mvd_11.jpg", "" %}
			<figcaption>Espacio de Arte Contemporaneo</br>Fujifilm X-Pro 2</figcaption>
		</div>
		<div class="col">
			{% _image "mvd_13.jpg", "" %}
			<figcaption>Espacio de Arte Contemporaneo</br>Fujifilm X-Pro 2</figcaption>			
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mvd_15.jpg", "" %}
			<figcaption>Catedral de Montevideo</br>Fujifilm X-Pro 2</figcaption>			
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mvd_14.jpg", "" %}
			<figcaption>Espacio de Arte Contemporaneo</br>Fujifilm X-Pro 2</figcaption>
		</div>
		<div class="col">
			{% _image "mvd_12.jpg", "" %}
			<figcaption>Espacio de Arte Contemporaneo</br>Fujifilm X-Pro 2</figcaption>			
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mvd_9.jpg", "" %}
			<figcaption>Rambla</br> Fujifilm X-Pro 2</figcaption>			
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mvd_6.jpg", "" %}
			<figcaption>Catedral de Montevideo</br>Fujifilm X-Pro 2</figcaption>			
		</div>
		<div class="col">
			{% _image "mvd_16.jpg", "" %}
			<figcaption>Catedral de Montevideo</br>Fujifilm X-Pro 2</figcaption>						
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "mvd_24.jpg", "" %}
			<figcaption>Protest Posters</br>iPhone 15 Pro</figcaption>			
		</div>
		<div class="col">
			{% _image "mvd_22.jpg", "" %}
			<figcaption>Hay Hambre y Sed</br>iPhone 15 Pro</figcaption>	
		</div>
		<div class="col">
			{% _image "mvd_25.jpg", "" %}
			<figcaption>Talleres 467</br>iPhone 15 Pro</figcaption>						
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
</div>