---
layout: layouts/base.njk
title: Interactive + Exhibitions
eleventyNavigation:
  key: Interactive + Exhibitions
  parent: Index
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Interactive + Exhibitions") %}
<div class="breadcrumb">
    <h3 class="visually-hidden">Breadcrumb</h3>
	<ul class="nav">{%- for entry in navPages %}
		<li class="nav-item"{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}> » <a href="{{ entry.url }}">{{ entry.title }}</a></li>
  	    	{%- endfor %}
	    <li class="nav-item"><active-breadcrumb>» {{ title }}</active-breadcrumb></li>
	</ul>
</div>
<div class="container">
  {% include "partials/interactive_exhibitions.njk" %}
</div>
