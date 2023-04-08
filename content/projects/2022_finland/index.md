---
layout: layouts/base.njk
title: Finland
description: travel photography of Finland
date: 2022-04
tags:
  - photography
  - travel

---

<div class="container">
	<div class="row">
		<div class="col-12 col-12-md col-4-lg">
			<h1>{{ title }}</h1>
			<hr>
			<time>August 2022</time>
			</br></br>
			<ul class="post-metadata">
				{%- for tag in tags | filterTagList %}
				{%- set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
				<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a>{%- if not loop.last %}, {% endif %}</li>
				{%- endfor %}
			</ul>
			<hr>
			<p>Finland in August. I don't think there's a real theme with these photos. Some abstract views, some documentarian, more tourist oriented. This batch might need revisiting for sorting.</p>
			<hr>
			<ul class="post-metadata">
				<li>Camera: Fujifilm X-Pro 2, iPhone 12 Mini</li>
				<li>Note: Page is work in progress<li>
			<ul>
		</div>
		<div class="col-12 col-1-md col-1-lg"></div>
		   <div class="col-12 col-12-md col-6-lg">
			{% image "./images/finland_2022_12.jpg", "" %}
		<figcaption>National Memorial to the Winter War - Helsinki </br> Fujifilm X-Pro 2 - XF 18mm F2 R </br> ISO 200 - ƒ4 - 1/8000 s</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_2.jpg", "" %}
		<figcaption>Helsinki Airport </br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 400 - ƒ3.6 - 1/150 s</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_3.jpg", "" %}
		<figcaption>Suomenlinnan Panimo - Helsinki </br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 200 - ƒ5.6 - 1/300 s</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_6.jpg", "" %}
		<figcaption>Suomenlinna - Helsinki </br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 200 - ƒ8 - 1/200 s</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_4.jpg", "" %}
		<figcaption>Suomenlinna - Helsinki </br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 200 - ƒ8 - 1/350 s</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_5.jpg", "" %}
		<figcaption>Suomenlinna - Helsinki </br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 200 - ƒ5.6 - 1/680 s</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_7.jpg", "" %}
		<figcaption>Suomenlinna - Helsinki </br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 200 - ƒ5.6 - 1/1400 s</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_23.jpg", "" %}
		<figcaption>Gargoyles on the Pohjola Insurance Building - Helsinki </br> Fujifilm X-Pro 2 - XF 18mm F2 R </br> ISO 200 - ƒ2 - 1/300 s</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_8.jpg", "" %}
		<figcaption>Door - Helsinki </br> Fujifilm X-Pro 2 - XF 35mm F1.4 R </br> ISO 1250 - ƒ8 - 1/60 s</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_10.jpg", "" %}
		<figcaption>National Library of Finland - Helsinki </br> Fujifilm X-Pro 2 - XF 18mm F2 R </br> ISO 200 - ƒ2.8 - 1/450 s</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_19.jpg", "" %}
		<figcaption>Oodi Cental Library - Helsinki </br> Fujifilm X-Pro 2 - XF 18mm F2 R </br> ISO 200 - ƒ4 - 1/1800 s</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_16.jpg", "" %}
		<figcaption>Kamppi Chapel of Silence - Helsinki </br> Fujifilm X-Pro 2 - XF 18mm F2 R </br> ISO 200 - ƒ4 - 1/1400 s</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_9.jpg", "" %}
		<figcaption>Helsinki Cathedral - X-Pro 2</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_11.jpg", "" %}
		<figcaption>National Library of Finland, Helsinki - X-Pro 2</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_48.jpg", "" %}
		<figcaption>Amos Rex Museum, Helsinki - X-Pro 2</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_17.jpg", "" %}
		<figcaption>Amos Rex Museum, Helsinki - X-Pro 2</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_49.jpg", "" %}
		<figcaption>Amos Rex Museum, Helsinki - X-Pro 2</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_13.jpg", "" %}
		<figcaption>Design District Helsinki - X-Pro 2</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_14.jpg", "" %}
		<figcaption>Design District Helsinki - X-Pro 2</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_18.jpg", "" %}
		<figcaption>National Post Office, Helsinki - X-Pro 2</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_21.jpg", "" %}
		<figcaption>Helsinki Art Museum - X-Pro 2</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_32.jpg", "" %}
		<figcaption>Otava, Helsinki - X-Pro 2</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_31.jpg", "" %}
		<figcaption>Sibelius Monument, Helsinki - X-Pro 2</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_15.jpg", "" %}
		<figcaption>Design District Helsinki - X-Pro 2</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_22.jpg", "" %}
		<figcaption>Central Railway Station - X-Pro 2</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_20.jpg", "" %}
		<figcaption>Temppeliaukio Church - X-Pro 2</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_25.jpg", "" %}
		<figcaption>Porvoon Tuomiokirkko - X-Pro 2</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
		</div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_26.jpg", "" %}
		<figcaption>Porvoon Tuomiokirkko - X-Pro 2</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_27.jpg", "" %}
		<figcaption>Porvoon Tuomiokirkko - X-Pro 2</figcaption>
		</div>
		<div class="col">
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">	
		{% image "./images/finland_2022_28.jpg", "" %}
		<figcaption>Regatta Cafe, Helsinki - X-Pro 2</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_29.jpg", "" %}
		<figcaption>Regatta Cafe, Helsinki - X-Pro 2</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_30.jpg", "" %}
		<figcaption>Regatta Cafe, Helsinki - X-Pro 2</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_33.jpg", "" %}
		<figcaption>Imatra - X-Pro 2</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_36.jpg", "" %}
		<figcaption>Citroen - Porvoo - X-Pro 2</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_35.jpg", "" %}
		<figcaption>Imatran Valtionhotelli - X-Pro 2</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_34.jpg", "" %}
		<figcaption>Imatran Valtionhotelli - X-Pro 2</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_37.jpg", "" %}
		<figcaption>Rauha - Savonlinna - X-Pro 2</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_41.jpg", "" %}
		<figcaption>Kerimaki - X-Pro 2</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_42.jpg", "" %}
		<figcaption>Olavinlinna, Savonlinna - X-Pro 2</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_39.jpg", "" %}
		<figcaption>Olavinlinna, Savonlinna - X-Pro 2</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_44.jpg", "" %}
		<figcaption>Savonlinna - X-Pro 2</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_40.jpg", "" %}
		<figcaption>Rowboats - Savonlinna - X-pro 2</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_46.jpg", "" %}
		<figcaption>Savonlinna - X-Pro 2</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_47.jpg", "" %}
		<figcaption>Savonlinna</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_45.jpg", "" %}
		<figcaption>Savonlinna</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_50.jpg", "" %}
		<figcaption>Tallinn</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_51.jpg", "" %}
		<figcaption>Tallinn</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_52.jpg", "" %}
		<figcaption>Savonlinna - iPhone 12 Mini</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_53.jpg", "" %}
		<figcaption>Savonlinna - iPhone 12 Mini</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_54.jpg", "" %}
		<figcaption>Kumpuranta, South Savo - iPhone 12 Mini</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_55.jpg", "" %}
		<figcaption>11:15pm, Kumpuranta, South Savo - iPhone 12 Mini</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_56.jpg", "" %}
		<figcaption>Kumpuranta, South Savo - iPhone 12 Mini</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_57.jpg", "" %}
		<figcaption>Kauppa-Halli, Kuopio - iPhone 12 Mini</figcaption>
		</div>
		<div class="col">
		{% image "./images/finland_2022_43.jpg", "" %}
		<figcaption>Kuopio Cathedral - X-Pro 2</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
	<div class="row">
		<div class="col-12 col-12-md col-1-lg"></div>
		<div class="col">
		{% image "./images/finland_2022_59.jpg", "" %}
		<figcaption>Kolkonjärvi, Härkälä, South Savo - iPhone 12 Mini</figcaption>
		</div>
		<div class="col-12 col-12-md col-1-lg"></div>
	</div>
</div>