---
layout: layouts/base.njk
title: Frank Fleming – Between Fantasy and Reality
description: Gallery Guide for exhibition of sculpture by Frank Fleming
date: 2015-02-27
tags:
  - graphic design
  - exhibition
  - gallery guide
eleventyNavigation:
  key: Frank Fleming Gallery Guide
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Frank Fleming Gallery Guide") %}
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
			<figcaption>2015 | Birmingham Museum of Art</figcaption>
            <figcaption>Gallery Guide</br>6 panel / tri-fold</figcaption>
			<figcaption>Fonts in use:</br>Akzidenz Grotesk and Mercury</figcaption>
			<ul class="nav"><li class="nav-item">Related Projects:</li></br>
				<li class="nav-item"><a href="/index/interactive_exhibitions/2015_ex_fleming/"> » Exhibition Design</a></li></br>
				<li class="nav-item">Invitation<li>
			</ul>
			<hr>
		    	<p><em>Between Fantasy and Reality</em> took a focused approach in exploring the early period of Alabama artist Frank Fleming. Fleming worked as an artist in Alabama for over forty years and is best known for his large-scale bronze sculptures, many of which can be found across the city of Birmingham. <em>Between Fantasy and Reality</em> highlighted Fleming’s sculptures produced between 1970-1985, a period when he worked primarily with clay, stoneware, and ceramics. Taking on forms inspired by imagination but referencing reality, Fleming’s sculptures often depict animals and invoke humor, curiosity, and can sometimes be melancholy. Eighteen sculptures were featured in the exhibition and although many are small in size, Fleming’s impeccable attention to detail highlights his workmanship and mastery of the medium at a very early phase in his career.</p>
		</div>
        <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
			{% _image "fleming_1.jpg", "cover with sculpture" %}
		</div>
	    <div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col"></div>
		<div class="col-12 col-9-md col-6-lg">
            {% _image "fleming_2.jpg", "brochure layout" %}
        </div>
		<div class="col-1 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
	    <div class="col-1 col-1-md col-1-lg"></div>
		<div class="col">
		    {% _image "fleming_3.jpg", "brochure layout" %}
		</div>
		<div class="col-1 col-1-md col-1-lg"></div>
  	</div>
</div>