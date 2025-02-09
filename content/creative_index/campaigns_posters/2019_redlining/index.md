---
layout: layouts/base.njk
title: Redlining Birmingham
description: Poster for a panel discussion on redlining practices in Birmingham
date: 2019-10-05
tags:
  - graphic design
  - marketing
  - exhibition
  - poster
eleventyNavigation:
  key: REDLINE Poster
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("REDLINE Poster") %}
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
			<figcaption>2019 | Birmingham Museum of Art</figcaption>
            <figcaption>Fonts in use:</br><a href="https://www.vocaltype.co/history-of/bayard">Bayard</a>, Akzidenz Grotesk</figcaption>
            <figcaption>Related Projects:
				</br>» <a href=/creative_index/campaigns_posters/2019_redline>Exhibition Poster</a>
				</br>» <a href=/creative_index/interactive_exhibitions/2019_redline>Exhibition Design</a>
			</figcaption>
			<hr>
		</div>
		<div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			      {% _image "redline_2.jpg", "poster for a panel discussion" %}
		</div>
	</div>
</div>