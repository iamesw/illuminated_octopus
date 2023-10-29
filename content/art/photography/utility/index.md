---
layout: layouts/base.njk
title: Utility Covers
eleventyNavigation:
  key: Utility Covers
  parent: Photography
---

<div class="container">
    <div class="row">
      <div class="col">
        <h1 class="visually-hidden">{{ title }}</h1>
			{% set navPages = collections.all | eleventyNavigationBreadcrumb("Utility Covers") %}
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
    {%include "partials/photo_utility.njk" %}
</div>