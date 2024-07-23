---
layout: layouts/base.njk
title: Frank Fleming
description: General materials for contemporary art exhibition 
date: 2015-02-27
tags:
  - graphic design
  - exhibition
eleventyNavigation:
  key: Fleming Exhibition
  parent: Interactive + Exhibitions
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Fleming Exhibition") %}
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
			<h1>{{ title }}</br>Between Fantasy and Reality</h1>
			<figcaption>2015 | Birmingham Museum of Art</figcaption>
			<figcaption>Poster</figcaption>
			<figcaption>Fonts in Use:</br>Akzidenz Grotesk and Mercury</figcaption>
			<hr>
		    	<p><em>Between Fantasy and Reality</em> took a focused approach in exploring the early period of Alabama artist Frank Fleming. Fleming worked as an artist in Alabama for over forty years and is best known for his large-scale bronze sculptures, many of which can be found across the city of Birmingham. <em>Between Fantasy and Reality</em> highlighted Fleming’s sculptures produced between 1970-1985, a period when he worked primarily with clay, stoneware, and ceramics. Taking on forms inspired by imagination but referencing reality, Fleming’s sculptures often depict animals and invoke humor, curiosity, and can sometimes be melancholy. Eighteen sculptures were featured in the exhibition and although many are small in size, Fleming’s impeccable attention to detail highlights his workmanship and mastery of the medium at a very early phase in his career.</p>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
				{% _image "fleming_ex0.jpg", "" %}
				<figcaption>The presentation of the exhibition in the main lobby of the museum presented the problem of no convenient space for an introduction or title wall. The solution became hanging banners on the interior columns, using a sculpture, assumed to include a self-portrait and an archival photo of the artist.</figcaption>
				{% _image "fleming_ex00.jpg", "" %}
				<figcaption>Exhibition title and introductory text.</figcaption>
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<hr>
		<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-2-lg">
			{% _image "fleming_ex4.jpg", "" %}
			<figcaption>Exhibition Banner - Left</figcaption>
		</div>
		<div class="col-12 col-12-md col-5-lg">
			{% _image "fleming_ex000.png", "" %}
			<figcaption>Exhibition title and introductory text.</figcaption>
			</div>
		<div class="col-12 col-12-md col-2-lg">
			{% _image "fleming_ex3.jpg", "" %}
			<figcaption>Exhibition Banner - Right</figcaption>
			</div>
		<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
	<hr>
	<div class="row">
		<div class="col-12 col-12-md col-3-lg"></div>
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
			{% _image "fleming_ex1.jpg", "" %}
			<figcaption>Opening Reception Invitation Postcard  - Front</figcaption>
		</div>
    	<div class="col">
			{% _image "fleming_ex2.jpg", "" %}
			<figcaption>Opening Reception Invitation Postcard - Back</figcaption>
			</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<hr>
	<div class="row">
    	<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-3-lg">
			{% _image "fleming_1.jpg", "brochure layout" %}
			<figcaption>Gallery Guide - 6 panel tri-fold</figcaption>
		</div>
		<div class="col-12 col-12-md col-7-lg">
            {% _image "fleming_2.jpg", "brochure layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-10-lg">
		    {% _image "fleming_3.jpg", "brochure layout" %}
		</div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>