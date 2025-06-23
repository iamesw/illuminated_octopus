---
layout: layouts/base.njk
title: Etched in Collective History
description: Catalog for exhibition of contemporary art
date: 2013-08-18
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: Etched Case
  parent: Case Studies
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Etched Case") %}
<div class="breadcrumb">
    <h3 class="visually-hidden">Breadcrumb</h3>
	<ul class="nav">
            {%- for entry in navPages %}
		<li class="nav-item"{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}> » <a href="{{ entry.url }}">{{ entry.title }}</a></li>
  	    	{%- endfor %}
	    <li class="nav-item"><active-breadcrumb>» 03 | {{ title }}</active-breadcrumb></li>
	</ul>
</div>
<div class="container">
  <div class="row"></div>
      <div class="full-width">{% res_image "case/etched_group_4x5.jpg", "case/etched_group_header.jpg", "grid of open books" %}</div>
    <div class="row"><div class="spacer"></div></div>
	<div class="row">
		<div class="col-4 col-4-md col-4-lg">
			<figcaption>Case Study 03</figcaption>
			<h1>{{ title }}</h1>
            <figcaption>2013 | Birmingham Museum of Art</figcaption>
            <figcaption>Exhibition Catalog</br>96 pages / softcover / perfect bound</figcaption>
            <figcaption>Fonts in use:</br>Trade Gothic and Mercury</br>Title hand-lettered</figcaption>
            <figcaption>Related Projects:</br>Marketing Materials</br>Logotype</figcaption>
			<hr>
		    <p><em>Etched in Collective History</em> presents the work of artists who interrogate, depict, and memorialize the Civil Rights Movement. The Movement inspired a number of artists to participate physically, in marches and sit-ins, as well as creatively, through the act of making art. This exhibition presented the work of these artists and the artists who followed, telling a multi-generational story of the Civil Rights Movement. These various perspectives and works form a powerful synthesis of art, relating dynamic responses to our collective history.</p>
            <hr>
            <figcaption>DESIGN NOTES</figcaption> 
            <hr>
            <figcaption>Hand painted cover motif in reference to the signs of the Movement.</br></br>A sturdy and direct approach the text to create an unflinching look at the subject matter.</figcaption>
            </br>
            {% _image "etched_2.jpg", "book cover with hand-lettered title" %}
            <figcaption>Chosen book cover.  A site-specific installation was suggested for the cover, but did not work well in layout. The hand-lettered titling was kept, but paired with a compromise image selection.</figcaption>
		</div>
		<div class="col"></div>
		<div class="col-6 col-6-md col-6-lg">{% _image "etched_1.jpg", "book cover with hand-lettered title" %}
            <figcaption>Proposed book cover, hand-lettered, in reference to protest signs seen in photographs from the exhibition.</figcaption>
		</div>
    </div>
	<div class="row">
        <div class="col">{% _image "etched_3.jpg", "book layout" %}</div>
        <div class="col">{% _image "etched_4.jpg", "book layout" %}</div>
        <div class="col">{% _image "etched_5.jpg", "book layout" %}</div>
    </div>
	<div class="row">
        <div class="col">{% _image "etched_6.jpg", "book layout" %}</div>
        <div class="col">{% _image "etched_7.jpg", "book layout" %}</div>
    </div>
	<div class="row">
        <div class="col">{% _image "etched_8.jpg", "book layout" %}</div>
        <div class="col">{% _image "etched_9.jpg", "book layout" %}</div>
        <div class="col">{% _image "etched_10.jpg", "book layout" %}</div>
    </div>
	<div class="row">
        <div class="col">{% _image "etched_11.jpg", "book layout" %}</div>
        <div class="col">{% _image "etched_12.jpg", "book layout" %}</div>
    </div>
	<div class="row">
        <div class="col">{% _image "etched_13.jpg", "book layout" %}</div>
        <div class="col">{% _image "etched_14.jpg", "book layout" %}</div>
        <div class="col">{% _image "etched_15.jpg", "book layout" %}</div>
  	</div>
</div>