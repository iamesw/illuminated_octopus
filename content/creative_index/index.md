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
  <div class="full-width">{% res_image "case/cargo_4x5.jpg", "case/cargo_header.jpg", "black and white image of an open book sitting on a concrete block in harsh light and shadows" %}</div>
  <right><figcaption>The Original Makers | Exhibition Catalog | 2018</figcaption></right>
  <div class="row" id="books_editorial_brochures"><h2 class="visually-hidden">Books + Editorial + Brochures</h2></div>
      {%include "partials/books_editorial_brochures.njk" %}
  <div class="row"><div class="spacer"></div></div>
  <div class="full-width">{% res_image "ad/homepage_third_space_mockup_mobile.jpg", "ad/homepage_third_space_header.jpg", "black and white image of poster display in a subway station, train streaking by in motion" %}</div>
    <right><figcaption>Third Space | Campaign | 2017</figcaption></right>
  <div class="row" id="campaigns_posters"><h2 class="visually-hidden">Campaigns Posters</h2></div>
      {%include "partials/campaigns_posters.njk" %}
  <div class="row"><div class="spacer"></div></div>
  <div class="full-width">{% res_image "ad/homepage_fleming_mockup_mobile.jpg", "ad/homepage_fleming_mockup.jpg", "black and white image of postcard sitting on a chair" %}</div>
    <right><figcaption>Frank Fleming: Between Fantasy and Reality | Invitation | 2015</figcaption></right>
  <div class="row" id="ephemera_misc"><h2 class="visually-hidden">Ephemera Miscellaneous</h2></div>
      {%include "partials/ephemera_misc.njk" %}
  <div class="row"><div class="spacer"></div></div>
  <div class="full-width">{% res_image "ad/homepage_cecrops_mockup_mobile.jpg", "ad/homepage_cecrops_header.jpg", "black and white image of a small square street lamp with logo on side" %}</div>
    <right><figcaption>The Mystical Order of Cecrops | 2011</figcaption></right>
  <div class="row" id="identity_branding"><h2 class="visually-hidden">Identity + Branding</h2></div>
    {%include "partials/identity_branding.njk" %}
  <div class="row"><div class="spacer"></div></div>
  <div class="full-width">{% res_image "ad/homepage_small_treasures_mobile.jpg", "ad/homepage_small_treasures_header.jpg", "black and white image of an exhibition" %}</div>
    <right><figcaption>Small Treasures | Exhibition Design | 2015</figcaption></right>
  <div class="row" id="interactive_exhibitions"><h2 class="visually-hidden" >Interactive + Exhibitions</h2></div>
    {%include "partials/interactive_exhibitions.njk" %}
  <div class="row"><div class="spacer"></div></div>
  <div class="full-width">{% res_image "ad/homepage-mvd_mobile.jpg", "ad/homepage-mvd_header.jpg", "black and white image buildings photographed in montevideo, uruguay" %}</div>
    <right><figcaption>Montevideo, Uruguay | 2023</figcaption></right>
  <div class="row" id="photography"><h2 class="visually-hidden">Photography + Prints + Paintings</h2></div>
    {%include "partials/photography.njk" %}
</div>