---
layout: layouts/base.njk
title: REDLINE
description: Marketing materials for photography exhibition
date: 2019-10-05
tags:
  - graphic design
  - marketing
  - exhibition
  - poster
eleventyNavigation:
  key: REDLINE
  parent: Posters, ads, etc
---

<div class="container">
	<div class="row">
		<div class="col">
			{% set navPages = collections.all | eleventyNavigationBreadcrumb("REDLINE") %}
			<ul class="post-metadata">
			{%- for entry in navPages %}
				<li{% if entry.url == page.url %} class="active-breadcrumb"{% endif %}>
    			 » <a href="{{ entry.url }}">{{ entry.title }}</a>
  				</li>
			{%- endfor %}
			</ul>
		</div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<hr>
			<h3>Celestia Morgan</h3>
			<h1>{{ title }}</h1>
			<time>October 2019</time>
            <hr>
			<p><em>Celestia Morgan: REDLINE</em> presented a series of photographs and small sculptures by artist Celestia Morgan that explore redlining in Birmingham, Alabama. Beginning in the 1930s, the Federal Housing Administration systematically denied mortgages to prospective homeowners in order to prevent residents from building wealth on the basis of race, religion, and immigration status. This practice of housing discrimination was called redlining. These red lines designated African American or Latino neighborhoods and singled them out as “undesirable” for investment. <p>In her sky photographs, Morgan places the silhouettes of Birmingham neighborhoods redlined in the 1933 Home Owners’ Loan Corporation map against photographs of idyllic blue skies. Using the familiar idiom “the sky’s the limit,” Morgan critically examines the role of redlining in stifling the economic and social aspirations of those communities.</p>
			<p>Though redlining officially came to an end in 1968 with the passage of the Fair Housing Act, its impact continues to perpetuate the racial income gap in the United States. Homeownership is a primary way to build wealth, yet discriminatory lending practices still exist in the US today and still fewer resources continue to be directed toward low-income neighborhoods.</P>
            <hr>
            <ul class="post-metadata">
                <li>Fonts: <a href="https://www.vocaltype.co/history-of/bayard">Bayard</a>, Akzidenz Grotesk</li>
            </ul>
		</div>
        <div class="col-12 col-12-md col-1-lg"></div>
        <div class="col">
			{%image "./images/redline_1.jpg", "Poster with an image of the sky with a geometric shape overlaid" %}
			<figcaption>The exhibition poster featured one of Morgan's sky photographs in an elegant layout using Vocal Type Co.'s Bayard for the exhibition title and information. Based on protest signs from the 1963 March on Washington for Jobs and Freedom, Bayard was a logical choice for an exhibition focused on policies that created structural discrimination.</figcaption>
			</br></br>
			{%image "./images/redline_2.jpg", "Poster with an layout entirely driven by typography" %}
			<figcaption>The poster for a panel discussion focused on the legacy of redlining in the city of Birmingham was type driven, again useing Vocal Type Co.'s Bayard.</figcaption>
		</div>
	</div>
</div>