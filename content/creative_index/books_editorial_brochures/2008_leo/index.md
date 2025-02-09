---
layout: layouts/base.njk
title: Leonardo da Vinci – Drawings from the Biblioteca Reale in Turin
description: Catalog for exhibition of Leonardo da Vinci drawings
date: 2008-09-28
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: Leonardo Catalog
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Leonardo Catalog") %}
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
			<figcaption>2008 | Birmingham Museum of Art</figcaption>
			<figcaption>Exhibition Catalog</br>132 pages / hardcover and softcover editions</figcaption>
            <figcaption>Fonts in use:</br>Adobe Jenson, Cloister Open Face, and Legacy Sans</figcaption>
            <figcaption>Related Projects:</br>» <a href=/creative_index/ephemera_misc/2008_leo>Invitation</a></figcaption>  
            <hr>
		    	<p>The Birmingham Museum of Art hosted one of the most significant groups of drawings by Leonardo da Vinci to be loaned to a U.S. museum by the Biblioteca Reale (Royal Library) in Turin, Italy. The exhibition <em>Leonardo da Vinci: Drawings from the Biblioteca Reale in Turin</em> encompassed one of Leonardo’s most celebrated notebooks, the Codex on the Flight of Birds, and 11 important drawings, including one described by Bernard Berenson as the “most beautiful drawing in the world.” The drawings have never before traveled as a group nor in their entirety been made available outside of Italy. The catalog presented all 11 drawings and the codex at original scale.</p>
		</div>
    	<div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">{%_image "leo_1.jpg", "book cover with leonardo da vinci illustration" %}</div>
    </div>
	<div class="row">
    	<div class="col">{%_image "leo_2.jpg", "book layout" %}</div>
        <div class="col">{%_image "leo_3.jpg", "book layout" %}</div>
    </div>
	<div class="row">
        <div class="col">{%_image "leo_4.jpg", "book layout" %}</div>
        <div class="col">{%_image "leo_5.jpg", "book layout" %}</div>
        <div class="col">{%_image "leo_6.jpg", "book layout" %}</div>
    </div>
	<div class="row">
        <div class="col">{%_image "leo_7.jpg", "book layout" %}</div>
        <div class="col">{%_image "leo_8.jpg", "book layout" %}</div>
    </div>
	<div class="row">
        <div class="col">{%_image "leo_9.jpg", "book layout" %}</div>
    </div>
	<div class="row">
        <div class="col">{%_image "leo_10.jpg", "book layout" %}</div>
        <div class="col">{%_image "leo_11.jpg", "book layout" %}</div>
        <div class="col">{%_image "leo_12.jpg", "book layout" %}</div>
    </div>
	<div class="row">
        <div class="col">{%_image "leo_13.jpg", "book layout" %}</div>
        <div class="col">{%_image "leo_14.jpg", "book layout" %}</div>
    </div>
	<div class="row">
        <div class="col">{%_image "leo_15.jpg", "book layout" %}</div>
        <div class="col">{%_image "leo_16.jpg", "book layout" %}</div>
        <div class="col">{%_image "leo_17.jpg", "book layout" %}</div>
    </div>        
</div>