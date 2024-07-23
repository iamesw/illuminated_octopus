---
layout: layouts/base.njk
title: An Epic of Earth and Water
description: Catalog for Clare Leighton Exhibition
date: 2021-01-01
tags:
  - graphic design
  - catalog
  - exhibition
eleventyNavigation:
  key: Leighton Catalog
  parent: Books + Editorial + Brochures
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Leighton Catalog") %}
<div class="breadcrumb"><h3 class="visually-hidden">Breadcrumb</h3>
	<ul class="nav">{%- for entry in navPages %}
		<li class="nav-item"{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}> » <a href="{{ entry.url }}">{{ entry.title }}</a></li>
      {%- endfor %}
	  <li class="nav-item"><active-breadcrumb>» {{ title }}</active-breadcrumb></li>
	</ul>
</div>
<div class="container">
  <div class="row"></div>
  <div class="row">
      <div class="col">
        <h1>{{ title }}</h1>
        <figcaption>2021 | Birmingham Museum of Art</figcaption>
        <figcaption>Exhibition Catalog</br>56 pages / softcover / perfect bound</figcaption>
        <figcaption>Fonts in Use:</br>Bely and Franklin Gothic</figcaption>
  			<ul class="nav"><li class="nav-item">Related Projects:</li></br>
  				<li class="nav-item">Exhibition Design</li></br>
	  		</ul>
        <hr>
		    <p>In 1948, the Wedgwood company asked British-American artist Clare Leighton (1898–1989) to create a series of twelve designs to be printed on a limited edition set of creamware plates. The artist spent the next three years of her life exploring New England’s countryside and seaside villages in an effort to better understand the place and the people. Typical of Leighton’s work, each design—from the figures included to the vignettes of tools and assorted equipment associated with the industry—is created with respect and dignity through the use of powerful lines and rich tones of black and white. <em>An Epic of Earth and Water: Clare Leighton and the New England Industries Series</em> explored Leighton as artist, her process, and Wedgwood commission.</p>
		</div>
    <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
            {% _image "cl_00.jpg", "book cover " %}
		</div>
    <div class="col-12 col-1-md col-1-lg"></div>
	</div>
    <div class="row">
    <div class="col-1 col-1-md col-1-lg"></div>
  	<div class="col">
            {% _image "cl_1.png", "book cover" %}
            </br></br>
            {% _image "cl_2.jpg", "book title page spread" %}
            </br></br>
            {% _image "cl_3.jpg", "book spread" %}
            </br></br>
            {% _image "cl_4.jpg", "book spread" %}
            </br></br>
            {% _image "cl_5.jpg", "book spread" %}
            </br></br>
            {% _image "cl_6.jpg", "book spread" %}
            </br></br>
            {% _image "cl_7.jpg", "book spread" %}
            </br></br>
            {% _image "cl_8.jpg", "book spread" %}
            </br></br>
            {% _image "cl_9.jpg", "book spread" %}
            </br></br>
            {% _image "cl_10.jpg", "book spread" %}
            </br></br>
            {% _image "cl_11.jpg", "book spread" %}
            </br></br>
            {% _image "cl_12.jpg", "book spread" %}
            </br></br>
            {% _image "cl_13.jpg", "book spread" %}
        </div>
    <div class="col-1 col-1-md col-1-lg"></div>
    </div>
</div>