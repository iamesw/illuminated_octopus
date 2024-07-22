---
layout: layouts/base.njk
title: Frank Fleming
description: General materials for contemporary art exhibition 
date: 2015-02-27
tags:
  - graphic design
  - exhibition
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h3>{{ title }}</h3>
			<h1>Between Fantasy and Reality</h1>
			<hr>
			<time>Feb - Aug 2015</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p><em>Between Fantasy and Reality</em> took a focused approach in exploring the early period of Alabama artist Frank Fleming. Fleming worked as an artist in Alabama for over forty years and is best known for his large-scale bronze sculptures, many of which can be found across the city of Birmingham. <em>Between Fantasy and Reality</em> highlighted Fleming’s sculptures produced between 1970-1985, a period when he worked primarily with clay, stoneware, and ceramics. Taking on forms inspired by imagination but referencing reality, Fleming’s sculptures often depict animals and invoke humor, curiosity, and can sometimes be melancholy. Eighteen sculptures were featured in the exhibition and although many are small in size, Fleming’s impeccable attention to detail highlights his workmanship and mastery of the medium at a very early phase in his career.</p>
			<hr>
            <ul class="post-metadata">
                <li>Fonts: Akzidenz Grotesk and Mercury</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
				{% _image "fleming_ex0.jpg", "" %}
				<figcaption>The presentation of the exhibition in the main lobby of the museum presented the problem of no convenient space for an introduction or title wall. The solution became hanging banners on the interior columns, using a sculpture, assumed to include a self-portrait and an archival photo of the artist.</figcaption>
				{% _image "fleming_ex00.jpg", "" %}
				<figcaption>Exhibition title and introductory text.</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<hr>
		<div class="row">
		<div class="col-12 col-12-md col-2-lg"></div>
		<div class="col-12 col-12-md col-2-lg">
			{% _image "fleming_ex4.jpg", "" %}
			<figcaption>Exhibition Banner - Left</figcaption>
		</div>
		<div class="col-12 col-12-md col-5-lg">
			{% _image "fleming_ex000.png", "" %}
			<figcaption>Exhibition title and introductory text.</figcaption>
			</div>
		<div class="col-12 col-12-md col-2-lg">
			{% _image "fleming_ex3.jpg", "" %}
			<figcaption>Exhibition Banner - Right</figcaption>
			</div>
		<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
	<hr>
	<div class="row">
		<div class="col-12 col-12-md col-3-lg"></div>
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
			{% _image "fleming_ex1.jpg", "" %}
			<figcaption>Opening Reception Invitation Postcard  - Front</figcaption>
		</div>
    	<div class="col">
			{% _image "fleming_ex2.jpg", "" %}
			<figcaption>Opening Reception Invitation Postcard - Back</figcaption>
			</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<hr>
	<div class="row">
    	<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-3-lg">
			{% _image "fleming_1.jpg", "brochure layout" %}
			<figcaption>Gallery Guide - 6 panel tri-fold</figcaption>
		</div>
		<div class="col-12 col-12-md col-7-lg">
            {% _image "fleming_2.jpg", "brochure layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-10-lg">
		    {% _image "fleming_3.jpg", "brochure layout" %}
		</div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>

</div>