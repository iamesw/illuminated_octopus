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
  key: Case Clare
  parent: Case Studies
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Case Clare") %}
<div class="breadcrumb"><h3 class="visually-hidden">Breadcrumb</h3>
	<ul class="nav">{%- for entry in navPages %}
		<li class="nav-item"{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}> » <a href="{{ entry.url }}">{{ entry.title }}</a></li>
      {%- endfor %}
	  <li class="nav-item"><active-breadcrumb>» 02 | {{ title }}</active-breadcrumb></li>
	</ul>
</div>
<div class="container">
  <div class="row"></div>
        <div class="full-width">{% res_image "case/clare_group_4x5.jpg", "case/clare_group_header.jpg", "grid of open books" %}</div>
  <div class="row"><div class="spacer"></div></div>
  <div class="row">
      <div class="col-4 col-4-md col-4-lg">
  			<figcaption>Case Study 02</figcaption>
        <hr>
        <h1>{{ title }}</h1>
        <figcaption>2021 | Birmingham Museum of Art</figcaption>
        <figcaption>Exhibition Catalog</br>56 pages / softcover / perfect bound</figcaption>
        <figcaption>Fonts in Use:</br>Bely and Franklin Gothic</figcaption>
  			<ul class="nav"><li class="nav-item">Related Projects:</li></br>
  				<li class="nav-item">Exhibition Design</li></br>
	  		</ul>
        <hr>
		    <p>In 1948, the Wedgwood company asked British-American artist Clare Leighton (1898–1989) to create a series of twelve designs to be printed on a limited edition set of creamware plates. The artist spent the next three years of her life exploring New England’s countryside and seaside villages in an effort to better understand the place and the people. Typical of Leighton’s work, each design—from the figures included to the vignettes of tools and assorted equipment associated with the industry—is created with respect and dignity through the use of powerful lines and rich tones of black and white. <em>An Epic of Earth and Water: Clare Leighton and the New England Industries Series</em> explored Leighton as artist, her process, and Wedgwood commission.</p>
        <hr>
        <figcaption>DESIGN NOTES</figcaption> 
        <hr>
        <figcaption>A bold, assertive and industrial American typeface, Franklin Gothic was chosen for the cover and article titles. The cover image was chosen to focus on a quintessential New England industry, focusing on the workers, casting them in a heroic framing, to live up the artist’s framing of this work as “an epic of earth and water.”
        </figcaption>
		</div>
    <div class="col"></div>
    <div class="col-6 col-6-md col-6-lg">{% _image "cl_00.jpg", "book cover " %}</div>
	</div>
    <div class="row">
        <div class="col">{% _image "cl_2.jpg", "book spread" %}</div>
        <div class="col">{% _image "cl_3.jpg", "book spread" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "cl_4.jpg", "book spread" %}</div>
        <div class="col">{% _image "cl_5.jpg", "book spread" %}</div>
        <div class="col">{% _image "cl_6.jpg", "book spread" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "cl_7.jpg", "book spread" %}</div>
        <div class="col">{% _image "cl_8.jpg", "book spread" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "cl_9.jpg", "book spread" %}</div>
        <div class="col">{% _image "cl_10.jpg", "book spread" %}</div>
        <div class="col">{% _image "cl_11.jpg", "book spread" %}</div>
    </div>
    <div class="row">
        <div class="col">{% _image "cl_12.jpg", "book spread" %}</div>
        <div class="col">{% _image "cl_13.jpg", "book spread" %}</div>
    </div>
    <div class="row">
  	    <div class="col">{% _image "cl_1.png", "book cover" %}</div>
    </div>
    <div class="row">
      <div class="col-4 col-4-md col-4-lg">
      <figcaption>Two of Clare Leighton's block prints were carefully blended to create an image that could wrap around the cover. One showing an industry of the land, the other showing an industry of the sea. The artist's quote used for the title of the exhibition was called out on the back cover.</figcaption>
      </div>
    </div>
</div>
