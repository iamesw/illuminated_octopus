---
layout: layouts/base.njk
eleventyNavigation:
  key: Index
  order: 2
---

<div class="breadcrumb">
  <h3 class="visually-hidden">In Page Navigation</h3>
  <ul class="nav">
    <li class="nav-item"><a href="#books_editorial_brochures">Books + Editorial + Brochures</a></li>&nbsp;&nbsp;| 
    <li class="nav-item"><a href="#campaigns_posters">Campaigns + Posters</a></li>&nbsp;&nbsp;| 
    <li class="nav-item"><a href="#ephemera_misc">Ephemera + Misc</a></li>&nbsp;&nbsp;| 
    <li class="nav-item"><a href="#identity_branding">Identity + Branding</a></li>&nbsp;&nbsp;| 
    <li class="nav-item"><a href="#interactive_exhibitions">Interactive + Exhibitions</a></li>&nbsp;&nbsp;| 
    <li class="nav-item"><a href="#photography">Photography + Prints + Paintings</a></li>
  </div>
</div>
<div class="container">
  <div class="full-width" id="books_editorial_brochures">{% _image "ad/homepage_cargo_catalog_mockup.jpg", "black and white image of an open book sitting on a concrete block in harsh light and shadows" %}</div>
  <right><figcaption>The Original Makers | Exhibition Catalog | 2018</figcaption></right>
  <div class="row"><h2 class="visually-hidden""></h2></div>
      {%include "partials/books_editorial_brochures.njk" %}
  <div class="row"><div class="spacer"></div></div>
  <div class="full-width" id="campaigns_posters">{% _image "ad/homepage_third_space_mockup.jpg", "black and white image of poster display in a subway station, train streaking by in motion" %}</div>
  <right><figcaption>Third Space | Campaign | 2017</figcaption></right>
  <div class="row"><h2 class="visually-hidden"></h2></div>
      {%include "partials/campaigns_posters.njk" %}
  <div class="row"><div class="spacer"></div></div>
  <div class="full-width" id="ephemera_misc">{% _image "ad/homepage_fleming_mockup.jpg", "black and white image of postcard sitting on a chair" %}</div>
    <right><figcaption>Frank Fleming: Between Fantasy and Reality | Invitation | 2015</figcaption></right>
  <div class="row"><h2 class="visually-hidden"></h2></div>
      {%include "partials/ephemera_misc.njk" %}
  <div class="row"><div class="spacer"></div></div>
  <div class="full-width" id="identity_branding">{% _image "ad/homepage_cecrops_mockup.jpg", "black and white image of a small square street lamp with logo on side" %}</div>
    <right><figcaption>The Mystical Order of Cecrops | 2011</figcaption></right>
  <div class="row"><h2 class="visually-hidden"></h2></div>
    {%include "partials/identity_branding.njk" %}
  <div class="row"><div class="spacer"></div></div>
  <div class="full-width" id="interactive_exhibitions">{% _image "ad/homepage_small_treasures.jpg", "black and white image of an exhibition" %}</div>
    <right><figcaption>Small Treasures | Exhibition Design | 2015</figcaption></right>
  <div class="row"><h2 class="visually-hidden" ></h2></div>
    {%include "partials/interactive_exhibitions.njk" %}
  <div class="row"><div class="spacer"></div></div>
  <div class="full-width" id="photography">{% _image "ad/homepage-mvd.jpg", "black and white image buildings photographed in montevideo, uruguay" %}</div>
    <right><figcaption>Montevideo, Uruguay | 2023</figcaption></right>
  <div class="row"><h2 class="visually-hidden"></h2></div>
    {%include "partials/photography.njk" %}
    {%include "partials/prints_paintings.njk" %}
</div>