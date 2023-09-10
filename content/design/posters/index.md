---
layout: layouts/base.njk
title: Advertising + Marketing
eleventyNavigation:
  key: Advertising + Marketing
  parent: Design
---

<div class="container">
    <div class="row">
      <h1 class="visually-hidden">{{ title }}</h1>
      <div class="col">
			{% set navPages = collections.all | eleventyNavigationBreadcrumb("Advertising + Marketing") %}
			<ul class="post-breadcrumb">
		  	{%- for entry in navPages %}
				<li{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}>
    			» <a href="{{ entry.url }}">{{ entry.title }}</a>
  				</li>
  			{%- endfor %}
	  		<li><active-breadcrumb>» {{ title }}</active-breadcrumb></li>
			</ul>
      </div>
    </div>
    <hr>
  <div class="row">
    <div class="col">
      <h2 id="posters">Advertising + Marketing</h2>
      <p>Poster and ad campaigns. One sheets. Outdoor. Social media and web assets. Various things of a marketing nature.</P>
    </div> 
  </div>
  <hr>
 {% include "partials/design_campaigns.njk" %}
  <hr>
 {% include "partials/design_singles.njk" %}
</div>