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
  parent: Posters, ads, etc
---

<div class="container">
	<div class="row">
		<div class="col">
			{% set navPages = collections.all | eleventyNavigationBreadcrumb("Organ Donation PSA") %}
			<ul class="post-metadata">
			{%- for entry in navPages %}
				<li{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}>
    			 » <a href="{{ entry.url }}">{{ entry.title }}</a>
  				</li>
			{%- endfor %}
			</ul>
		</div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<hr>
			<h1>{{ title }}</h1>
			<time>Summer 2001</time>
            <hr>
			<p>Visual Design II. Summer of 2001, Auburn University. The assignment was design a public service announcement for any cause of our choosing. Growing up with a nurse as my mother, medical issues were always a consideration, and so organ donation made sense.</p>
            <p>During crit a classmate was surprised, and having seen the poster said they had never considered being an organ donor before, but now they would likely check the box the next time they renewed their license.</P>
            <hr>
            <ul class="post-metadata">
                <li>Fonts: DIN</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
        <div class="col">
			{%image "./images/organ_donor_psa.jpg", "Poster with a diagram depicting a grid of tiny humans being helped by the organ donation of one large human" %}
		</div>
	</div>
</div>