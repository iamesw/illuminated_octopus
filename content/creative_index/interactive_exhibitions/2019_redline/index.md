---
layout: layouts/base.njk
title: Celestia Morgan—Redline
description: Exhibition design for a photography exhibition exploring the history of residential redlining
date: 2019-10-05
tags:
  - graphic design
  - exhibition
  - exhibition design
eleventyNavigation:
  key: Redline Exhibition
  parent: Interactive + Exhibitions
---
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Redline Exhibition") %}
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
		<div class="col-4 col-4-md col-4-lg">
			<h1>{{ title }}</h1>
			<figcaption>2019 | Birmingham Museum of Art</figcaption>
			<figcaption>Exhibition Design</figcaption>
			<figcaption>Fonts in Use:</br>Bayard and Akzidenz Grotesk</figcaption>
			<figcaption>Related Projects:
				</br>» <a href=/creative_index/campaigns_posters/2019_redline>Exhibition Poster</a>
				</br>» <a href=/creative_index/campaigns_posters/2019_redlining>Panel Discussion Poster</a>
			</figcaption>
			<hr>
		    	<p>Exhibition layout and didactic design for a photography exhibition exploring the history of residential redlining in Birmingham.</p>
				<p><em>Celestia Morgan: REDLINE</em> presented a series of photographs and small sculptures by artist Celestia Morgan that explore redlining in Birmingham, Alabama. Beginning in the 1930s, the Federal Housing Administration systematically denied mortgages to prospective homeowners in order to prevent residents from building wealth on the basis of race, religion, and immigration status. This practice of housing discrimination was called redlining. These red lines designated African American or Latino neighborhoods and singled them out as “undesirable” for investment. <p>In her sky photographs, Morgan places the silhouettes of Birmingham neighborhoods redlined in the 1933 Home Owners’ Loan Corporation map against photographs of idyllic blue skies. Using the familiar idiom “the sky’s the limit,” Morgan critically examines the role of redlining in stifling the economic and social aspirations of those communities.</p>
				<p>Though redlining officially came to an end in 1968 with the passage of the Fair Housing Act, its impact continues to perpetuate the racial income gap in the United States. Homeownership is a primary way to build wealth, yet discriminatory lending practices still exist in the US today and still fewer resources continue to be directed toward low-income neighborhoods.</P>
			<hr>
		</div>
        <div class="col"></div>
		<div class="col-6 col-6-md col-6-lg">{% _image "redline_ex_1.png", "" %}</div>
	</div>
	<div class="row"></div>
	<div class="row">
		<div class="col"></div>
		<div class="col-8 col-8-md col-8-lg">{% _image "redline_ex_2.jpg", "" %}</div>
	</div>
	<div class="row">
		<div class="col-5 col-5-md col-5-lg"><div class="spacer"></div>{% _image "redline_ex_30.jpg", "" %}</div>
		<div class="col-5 col-5-md col-5-lg"><div class="spacer-sm"></div>{% _image "redline_ex_31.jpg", "" %}<div class="spacer"></div></div>
		<div class="col-2 col-2-md col-2-lg"></div>
  	</div>
	<div class="row">
		<div class="col"></div>
		<div class="col-8 col-8-md col-8-lg">{% _image "redline_ex_3.jpg", "" %}</div>
	</div>
	<div class="row">
		<div class="col"><div class="spacer"></div>{% _image "redline_ex_20.jpg", "" %}</div>
		<div class="col"><div class="spacer-sm"></div>{% _image "redline_ex_26.jpg", "" %}<div class="spacer"></div></div>
  	</div>
	<div class="row">
		<div class="col-8 col-8-md col-8-lg">{% _image "redline_ex_4.jpg", "" %}</div>
		<div class="col"></div>
	</div>
	<div class="row">
		<div class="col"></div>
		<div class="col-8 col-8-md col-8-lg">{% _image "redline_ex_29.jpg", "" %}</div>
	</div>
	<div class="row">
		<div class="col-8 col-8-md col-8-lg">{% _image "redline_ex_5.jpg", "" %}</div>
		<div class="col"></div>
	</div>
	<div class="row">
		<div class="col-2 col-2-md col-2-lg"></div>
		<div class="col-5 col-5-md col-5-lg"><div class="spacer"></div>{% _image "redline_ex_32.jpg", "" %}</div>
		<div class="col-5 col-5-md col-5-lg"><div class="spacer-sm"></div>{% _image "redline_ex_21.jpg", "" %}<div class="spacer"></div></div>
  	</div>
</div>