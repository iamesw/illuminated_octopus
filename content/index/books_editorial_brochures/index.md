---
layout: layouts/base.njk
title: Books + Editorial + Brochures
eleventyNavigation:
  key: Books + Editorial + Brochures
  parent: Index
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Books + Editorial + Brochures") %}
<div class="breadcrumb">
    <h3 class="visually-hidden">Breadcrumb</h3>
	<ul class="nav">{%- for entry in navPages %}
		<li class="nav-item"{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}> » <a href="{{ entry.url }}">{{ entry.title }}</a></li>
  	    	{%- endfor %}
	    <li class="nav-item"><active-breadcrumb>» {{ title }}</active-breadcrumb></li>
	</ul>
</div>
<div class="container">
  {%include "partials/books_editorial_brochures.njk" %}
</div>