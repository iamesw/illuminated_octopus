---
layout: layouts/base.njk
title: Photography
eleventyNavigation:
  key: Photography
  parent: Art + Photography
---

<div class="container">
    <div class="row">
      <div class="col">
        <h1 class="visually-hidden">{{ title }}</h1>
			{% set navPages = collections.all | eleventyNavigationBreadcrumb("Photography") %}
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
    {% include "partials/photo_travel.njk" %}
<hr>
  {% include "partials/photo_utility.njk" %}
<hr>
  {% include "partials/photo_industry.njk" %}
</div>

