---
layout: layouts/base.njk
eleventyNavigation:
  key: Art + Photography
  order: 2
---

<div class="container">
<div class="row"></div>
  <div class="row">  
    <div class="col">
      <h1 class="visually-hidden">Art + Photography</h1>
      <ul class="post-metadata">
        <li><active-breadcrumb>» Art + Photography /</active-breadcrumb></li>
        <li><a href="#photography">Photography</a></li> / 
        <li><a href="#paintings">Paintings</a></li> / 
        <li><a href="#prints">Prints</a></li>
        </ul>
    </div>
  </div>
<hr>
  <div class="row">
    <div class="col">
      <a href=/art/photography><h2 id="photography">Photography</h2></a>
      <p>Travel and otherwise. Daily snaps. Mostly black and white. Many with various models of iPhone. Some with Fujifilm X100. More recently shooting with a Fujifilm X-Pro 2.</P>
    </div> 
  </div>
  <hr>
{% include "partials/photo_travel.njk" %}
  <hr>
{% include "partials/photo_utility.njk" %}
  <hr>
{% include "partials/photo_industry.njk" %}
  <hr>
  <div class="row"><div class="col">{% include "partials/art_anchors.njk" %}<hr></div></div>
  <div class="row">
    <div class="col">
      <h2 id="paintings">Painting</h2>
      <p>Acrylic on canvas, or board. Typically based off of my photography, sometimes processed through a print-making process first.</P>
    </div> 
  </div>
  <hr>
{% include "partials/painting_signs.njk" %}
  <hr>
{% include "partials/painting_sloss.njk" %}
  <hr>
{% include "partials/painting_faces.njk" %}
  <hr>
  <div class="row"><div class="col">{% include "partials/art_anchors.njk" %}<hr></div></div>
  <div class="row">
    <div class="col">
      <h2 id="prints">Prints</h2>
      <p>Linoleum and woodblock prints. Typically based on personal photography, but some otherwise.</P>
    </div> 
  </div>
  {% include "partials/prints.njk" %}