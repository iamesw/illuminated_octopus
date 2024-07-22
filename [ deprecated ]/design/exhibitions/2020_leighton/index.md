---
layout: layouts/base.njk
title: An Epic of Earth and Water
description: Exhibition Design for Clare Leighton Exhibition
date: 2021-01-01
tags:
  - graphic design
  - exhibition design
eleventyNavigation:
  key: An Epic of Earth and Water Exhibition
  parent: Exhibitions + Interactive
---

<div class="container">
  <div class="row">
      <div class="col">
  		{% set navPages = collections.all | eleventyNavigationBreadcrumb("An Epic of Earth and Water Exhibition") %}
	  		<ul class="post-breadcrumb">
		    	{%- for entry in navPages %}
			  	<li{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}>
    			» <a href="{{ entry.url }}">{{ entry.title }}</a>
  				</li>
  			{%- endfor %}
	    		<li><active-breadcrumb>» {{ title }}</active-breadcrumb></li>
			  </ul>
      <hr>
  <div class="row">
        <div class="col">
            <h1>{{ title }}</h1>
            <figcaption>2021</br>Exhibition Design</figcaption>
            <figcaption>Related Projects:</br><a href=/design/books/2021_clare_leighton>Catalog Design</a></figcaption>
            <hr>
		    <p>In 1948, the Wedgwood company asked British-American artist Clare Leighton (1898–1989) to create a series of twelve designs to be printed on a limited edition set of creamware plates. The artist spent the next three years of her life exploring New England’s countryside and seaside villages in an effort to better understand the place and the people. Typical of Leighton’s work, each design—from the figures included to the vignettes of tools and assorted equipment associated with the industry—is created with respect and dignity through the use of powerful lines and rich tones of black and white. <em>An Epic of Earth and Water: Clare Leighton and the New England Industries Series</em> explored Leighton as artist, her process, and Wedgwood commission.</p>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
            {% _image "test_image_1.jpg", "" %}
		</div>
	</div>
