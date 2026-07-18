---
layout: layouts/base.njk
title: Photography + Prints + Paintings
eleventyNavigation:
  key: Photography + Prints + Paintings
  parent: Index
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Photography + Prints + Paintings") %}
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
    {% include "partials/photo_print_paint.njk" %}
</div>