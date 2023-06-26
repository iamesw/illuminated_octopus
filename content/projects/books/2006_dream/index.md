---
layout: layouts/base.njk
title: Dream
description: Catalog for contemporary Asian works on paper exhibition
date: 2007-03-19
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: Dream
  parent: Books, Editorial, etc
---

<div class="container">
	<div class="row">
		<div class="col">
			{% set navPages = collections.all | eleventyNavigationBreadcrumb("Dream") %}
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
            <h3>Contemporary Asian Works on Paper</h3>
			<time>2007</time>
			<hr>
		    	<p>Small catalog for a group gallery show. The catalog was designed to work being read from front to back or back to front, including page numbering for both directions.</p>
			<hr>
            <ul class="post-metadata">
                <li>16 pages / softcover</li>
                <li>Typeset in Univers</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/dream_1.jpg", "book cover" %}
		</div>
        <div class="col-12 col-1-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-9-lg">
            {%image "./images/dream_2.jpg", "book cover" %}
        </br>
            {%image "./images/dream_3.jpg", "book layout" %}
        </br>
            {%image "./images/dream_4.jpg", "book layout" %}
        </br>
            {%image "./images/dream_5.jpg", "book layout" %}
        </br>
            {%image "./images/dream_6.jpg", "book layout" %}
        </br>
            {%image "./images/dream_7.jpg", "book layout" %}
        </br>
            {%image "./images/dream_8.jpg", "book layout" %}
        </br>
            {%image "./images/dream_9.jpg", "book layout" %}
        </br>
            {%image "./images/dream_10.jpg", "book layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
    <div class="row">
		<div class="col-12 col-12-md col-6-lg"></div>
		<div class="col-12 col-12-md col-5-lg">
            {%image "./images/dream_11.jpg", "book layout" %}
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>