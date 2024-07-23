---
layout: layouts/base.njk
title: Prints + Paintings
description: Painting of a broken street sign
eleventyNavigation:
  key: Prints + Paintings
  parent: Index
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Prints + Paintings") %}
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
{% include "partials/prints_paintings.njk" %}
</div>