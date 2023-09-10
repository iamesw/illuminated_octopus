---
layout: layouts/base.njk
title: Exhibitions + Interactive
eleventyNavigation:
  key: Exhibitions + Interactive
  parent: Design
---

<div class="container">
    <div class="row">
      <h1 class="visually-hidden">{{ title }}</h1>
      <div class="col">
			{% set navPages = collections.all | eleventyNavigationBreadcrumb("Exhibitions + Interactive") %}
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
      <h2>{{ title }}</h2>
      <p>Work for exhibitions, including gallery graphics and layout, advertising materials, gallery guides, catalogs, etc.</P>
    </div> 
  </div>
  <hr>
{% include "partials/design_exhibit.njk" %}
  <hr>
{% include "partials/design_interactives.njk" %}
</div>
