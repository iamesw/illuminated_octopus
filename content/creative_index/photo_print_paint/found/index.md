---
layout: layouts/base.njk
title: Found | F.1XXX - F.1400
eleventyNavigation:
  key: Found
  parent: Photography + Prints + Paintings
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Found") %}
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
	<div class="row"></div>
	<div class="row">
		<div class="col">
			<h1>Found</h1>
			<figcaption>Ongoing Series | 2006 – Present</figcaption>
		</div>
    </div>
</div>
<div class="container">
    <hr>
    {% include "partials/found/found_nav.njk" %}
    {% include "partials/found/1600.njk" %}
    {% include "partials/found/found_nav.njk" %}
</div>