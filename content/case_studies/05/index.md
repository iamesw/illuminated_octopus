---
layout: layouts/base.njk
title: Dragons and Lotus Blossoms
description: Catalog for exhibition of Vietnamese ceramics
date: 2012-22-01
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: Dragons and Lotus Blossoms Case
  parent: Case Studies
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Dragons and Lotus Blossoms Case") %}
<div class="breadcrumb">
    <h3 class="visually-hidden">Breadcrumb</h3>
	<ul class="nav">
            {%- for entry in navPages %}
		<li class="nav-item"{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}> » <a href="{{ entry.url }}">{{ entry.title }}</a></li>
  	    	{%- endfor %}
	    <li class="nav-item"><active-breadcrumb>» 05 | {{ title }}</active-breadcrumb></li>
	</ul>
</div>
<div class="container">
  <div class="row"></div>
      <div class="full-width">{% res_image "case/vietnam_group.jpg", "case/vietnam_group_header.jpg", "grid of open books" %}</div>
    <div class="row"><div class="spacer"></div></div>
	<div class="row">
		<div class="col-4 col-4-md col-4-lg">
			<figcaption>Case Study 05</figcaption>
                        <hr>
			<h1>{{ title }}</h1>
			<figcaption>2012 | Birmingham Museum of Art</figcaption>
            <figcaption>Exhibition Catalog</br>264 pages / softcover / perfect bound</figcaption>
            <figcaption>Fonts in use:</br>Verlag and Mercury</figcaption>
			<hr>
            <P>Vietnam created the most sophisticated ceramics in Southeast Asia. Though they borrowed from China, Vietnamese potters explored their own indigenous tastes and developed their own production techniques. <em>Dragons and Lotus Blossoms: Vietnamese Ceramics from the Birmingham Museum of Art</em> was the largest exhibition in the United States to date devoted solely to Vietnamese ceramics. TheThe entire Birmingham Museum of Art collection of over two hundred pieces were displayed and illustrated in the catalog.</P>
                  <figcaption>DESIGN NOTES</figcaption> 
                <hr>
                <figcaption>Color palette to complement the earthen ware harmoniously.</br></br>Photography backgrounds reduced to black to forergound the objects and bring consistency throughout.</figcaption>
	</div>
	<div class="col"></div>
        <div class="col-6 col-6-md col-6-lg">{% _image "vietnam_1.jpg", "book cover with vietnamese ewer" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "vietnam_4.jpg", "book layout" %}</div>
        <div class="col">{% _image "vietnam_5.jpg", "book layout" %}</div>
        <div class="col">{% _image "vietnam_6.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "vietnam_7.jpg", "book layout" %}</div>
        <div class="col">{% _image "vietnam_8.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "vietnam_9.jpg", "book layout" %}</div>
        <div class="col">{% _image "vietnam_10.jpg", "book layout" %}</div>
        <div class="col">{% _image "vietnam_11.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "vietnam_12.jpg", "book layout" %}</div>
        <div class="col">{% _image "vietnam_13.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "vietnam_14.jpg", "book layout" %}</div>
        <div class="col">{% _image "vietnam_15.jpg", "book layout" %}</div>
        <div class="col">{% _image "vietnam_16.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "vietnam_17.jpg", "book layout" %}</div>
        <div class="col">{% _image "vietnam_18.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "vietnam_19.jpg", "book layout" %}</div>
        <div class="col">{% _image "vietnam_20.jpg", "book layout" %}</div>
        <div class="col">{% _image "vietnam_21.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "vietnam_22.jpg", "book layout" %}</div>
        <div class="col">{% _image "vietnam_23.jpg", "book layout" %}</div>
	</div>
	<div class="row">
        <div class="col">{% _image "vietnam_24.jpg", "book layout" %}</div>
        <div class="col">{% _image "vietnam_25.jpg", "book layout" %}</div>
        <div class="col">{% _image "vietnam_26.jpg", "book layout" %}</div>
  	</div>
    	<div class="row">
		<div class="col">{% _image "vietnam_2.png", "book cover with vietnamese ewer" %}</div>
	</div>
</div>