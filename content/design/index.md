---
layout: layouts/base.njk
eleventyNavigation:
  key: Design
  order: 1
---

<div class="container">
<div class="row"></div>
  <div class="row">  
    <h1 class="visually-hidden">Design</h1>
    <div class="col">
      <ul class="post-metadata">
        <li><active-breadcrumb>» Design /</active-breadcrumb></li>
        <li><a href="#books">Books + Editorial + Ephemera</a></li> / 
        <li><a href="#posters">Advertising + Marketing</a></li> / 
        <li><a href="#exhibit">Exhibition + Interactive</a></li> / 
        <li><a href="#branding">Logos + Branding</a></li>
        </ul>
    </div>
  </div>
  <hr>
  <div class="row"></div>
  <div class="row">
    <div class="col">
      <a href=/design/books><h2 id="books">Books + Editorial + Ephemera</h2></a>
      <p>Exhibition catalogs. Magazines. Brochures and other multi-page designed things. Invitations and printed knick-knacks otherwise not advertising per se.</P>
    </div>
  </div> 
  <hr>
    {%include "partials/design_catalogs.njk" %}
  <hr>
    {%include "partials/design_editorial.njk" %}
  <hr>
    {%include "partials/design_brochures.njk" %}
  <hr>
    {%include "partials/design_invitations.njk" %}
  <hr>
  <div class="row"><div class="col">{% include "partials/design_anchors.njk" %}<hr></div></div>
  <div class="row">
    <div class="col">
      <a href=/design/posters><h2 id="posters">Advertising + Marketing</h2></a>
      <p>Poster and ad campaigns. One sheets. Outdoor. Social media and web assets. Various things of a marketing nature.</P>
    </div> 
  </div>
  <hr>
    {%include "partials/design_campaigns.njk" %}
  <hr>
    {%include "partials/design_singles.njk" %}
  <hr>
  <div class="row"><div class="col">{% include "partials/design_anchors.njk" %}<hr></div></div>
  <div class="row">
    <div class="col">
      <a href=/design/exhibitions><h2 id="exhibit">Exhibitions + Interactive</h2></a>
      <p>Exhibition Design. Interactive projects. Experiential things that don't fit elsewhere.</P>
    </div> 
  </div>
  <hr>
      {%include "partials/design_exhibit.njk" %}
  <hr>
      {%include "partials/design_interactives.njk" %} 
  <hr>
  <div class="row"><div class="col">{% include "partials/design_anchors.njk" %}<hr></div></div>
  <div class="row">
    <div class="col">
      <a href=/design/branding><h2 id="branding">Logos + Branding</h2></a>
      <p>Logos for work. Logos for fun. Title treatments. Branding type things, often further executed in other projects.</P>
    </div> 
  </div>
  <hr>
    {%include "partials/design_logos.njk" %}
  <hr>
    {%include "partials/design_titles.njk" %}
  <hr>
  <div class="row"><div class="col"><ul class="post-metadata"><li><a href="#top">Return to Top</a></li></ul></div></div>
</div>