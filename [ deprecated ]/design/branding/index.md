---
layout: layouts/base.njk
title: Logos + Branding
eleventyNavigation:
  key: Logos + Branding
  parent: Design
---

<div class="container">
    <div class="row">
      <h1 class="visually-hidden">{{ title }}</h1>
      <div class="col">
			{% set navPages = collections.all | eleventyNavigationBreadcrumb("Logos + Branding") %}
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
      <h2 id="branding">Logos + Branding</h2>
      <p>Logos for work. Logos for fun. Title treatments. Branding type things, often further executed in other projects.</P>
    </div> 
  </div>
  <hr>
  <hr>
</div>
