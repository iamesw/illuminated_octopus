---
layout: layouts/base.njk
title: Organ Donation PSA
description: Marketing materials for photography exhibition
date: 2001-08-15
tags:
  - graphic design
  - marketing
  - exhibition
  - student work
eleventyNavigation:
  key: Organ Donation PSA
  parent: Campaigns + Posters
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Organ Donation PSA") %}
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
			<figcaption>2001 | Student Work</figcaption>
			<figcaption>Poster</figcaption>
			<figcaption>Fonts in Use: DIN</figcaption>
            <hr>
			<p>Visual Design II. Summer of 2001, Auburn University. The assignment was design a public service announcement for any cause of our choosing. Growing up with a nurse as my mother, medical issues were always a consideration, and so organ donation made sense.</p>
            <p>During crit a classmate was surprised, and having seen the poster said they had never considered being an organ donor before, but now they would likely check the box the next time they renewed their license.</P>
		</div>
		<div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">
			{% _image "organ_donor_psa.jpg", "Poster with a diagram depicting a grid of tiny humans being helped by the organ donation of one large human" %}
		</div>
	</div>
</div>