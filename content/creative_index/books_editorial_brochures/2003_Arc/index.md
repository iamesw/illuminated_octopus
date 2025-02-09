---
layout: layouts/base.njk
title: Arc Annual Report
description: Annual Report for a non-profit
date: 2003-07-01
tags:
  - graphic design
  - annual report
  - exhibition
eleventyNavigation:
  key: Arc Annual Report
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Arc Annual Report") %}
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
			<figcaption>2003 | The Arc of Jefferson County</figcaption>
            <figcaption>Annual Report</br>16 pages / softcover / saddlestich</figcaption>
            <figcaption>Fonts in Use:</br>Priori Sans</figcaption>
            </ul>
			<hr>
		    	<p>Annual report for the local branch of a non-profit that advocates for and with individuals with intellectual and developmental disabilities.</p>
		</div>
        <div class="col"></div>
		<div class="col-6 col-6-md col-6-lg">{%_image "arc_1.jpg", "book cover" %}</div>
	</div>
	<div class="row">
		<div class="col">{%_image "arc_3.jpg", "book layout" %}</div>
        <div class="col">{%_image "arc_4.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{%_image "arc_5.jpg", "book layout" %}</div>
        <div class="col">{%_image "arc_6.jpg", "book layout" %}</div>
        <div class="col">{%_image "arc_7.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{%_image "arc_8.jpg", "book layout" %}</div>
        <div class="col">{%_image "arc_9.jpg", "book layout" %}</div>
  	</div>
</div>