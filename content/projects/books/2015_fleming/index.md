---
layout: layouts/base.njk
title: Frank Fleming
description: Gallery Guide for exhibition of sculpture by Frank Fleming
date: 2015-02-27
tags:
  - graphic design
  - exhibition
  - gallery guide
---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h3>{{ title }}</h3>
            <h1>Between Fantasy and Reality</h1>
			<hr>
			<time>2015</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
		    	<p><em>Between Fantasy and Reality</em> took a focused approach in exploring the early period of Alabama artist Frank Fleming. Fleming worked as an artist in Alabama for over forty years and is best known for his large-scale bronze sculptures, many of which can be found across the city of Birmingham. <em>Between Fantasy and Reality</em> highlighted Fleming’s sculptures produced between 1970-1985, a period when he worked primarily with clay, stoneware, and ceramics. Taking on forms inspired by imagination but referencing reality, Fleming’s sculptures often depict animals and invoke humor, curiosity, and can sometimes be melancholy. Eighteen sculptures were featured in the exhibition and although many are small in size, Fleming’s impeccable attention to detail highlights his workmanship and mastery of the medium at a very early phase in his career.</p>
				<figcaption><a href="/projects/exhibitions/2015_ex_fleming/">More exhibition materials »</a></figcaption>
			<hr>
            <ul class="post-metadata">
                <li>6 panel / tri-fold</li>
                <li>Typeset in Akzidenz Grotesk and Mercury</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-6-lg">
			{%image "./images/fleming_1.jpg", "cover with sculpture" %}
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-4-lg"></div>
		<div class="col-12 col-12-md col-7-lg">
            {%image "./images/fleming_2.jpg", "brochure layout" %}
        </div>
    	<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col-12 col-12-md col-10-lg">
		    {%image "./images/fleming_3.jpg", "brochure layout" %}
		</div>
    	<div class="col-12 col-12-md col-1-lg"></div>
  	</div>
</div>