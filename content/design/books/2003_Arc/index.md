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
  key: arc-ar
  parent: Books + Editorial + Ephemera
---

<div class="container">
  <div class="row">
    <div class="col">
  		{% set navPages = collections.all | eleventyNavigationBreadcrumb("arc-ar") %}
	  	<ul class="post-breadcrumb">
		      {%- for entry in navPages %}
			  <li{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}> » <a href="{{ entry.url }}">{{ entry.title }}</a></li>
  			  {%- endfor %}
	    	<li><active-breadcrumb>» {{ title }}</active-breadcrumb></li>
			</ul>
    </div>
  </div>
  <hr>
  <div class="row"></div>
	<div class="row">
		<div class="col">
			<h1>{{ title }}</h1>
			<figcaption>2003 | The Arc of Jefferson County</figcaption>
            <figcaption>Annual Report</br>16 pages / softcover / saddlestich</br>Typeset in Priori Sans</figcaption>
            </ul>
			<hr>
		    	<p>Annual report for the local branch of a non-profit that advocates for and with individuals with intellectual and developmental disabilities.</p>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
			{%_image "arc_1.jpg", "book cover" %}
		</div>
	</div>
	<div class="row">
		<div class="col">
            {%_image "arc_3.jpg", "book cover" %}
        </br></br>
            {%_image "arc_4.jpg", "book layout" %}
        </br></br>
            {%_image "arc_5.jpg", "book layout" %}
        </br></br>
            {%_image "arc_6.jpg", "book layout" %}
        </br></br>
            {%_image "arc_7.jpg", "book layout" %}
        </br></br>
            {%_image "arc_8.jpg", "book layout" %}
        </br></br>
            {%_image "arc_9.jpg", "book layout" %}
        </div>
  	</div>
</div>