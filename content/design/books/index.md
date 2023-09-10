---
layout: layouts/base.njk
title: Books + Editorial + Ephemera
eleventyNavigation:
  key: Books + Editorial + Ephemera
  parent: Design
---

<div class="container">
    <div class="row">
      <div class="col">
        <h1 class="visually-hidden">{{ title }}</h1>
			{% set navPages = collections.all | eleventyNavigationBreadcrumb("Books + Editorial + Ephemera") %}
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
    {%include "partials/design_catalogs.njk" %}
    <hr>
    {%include "partials/design_editorial.njk" %}
    <hr>
    {%include "partials/design_brochures.njk" %}
    <hr>
    {%include "partials/design_invitations.njk" %}
</div>
