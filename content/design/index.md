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
        <li><a href="#branding">Logos + Branding</a></li> / 
        <li><a href="/williams_highlights.pdf" target="_blank">Highlights PDF</a></li></ul>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <h2 id="books"><a href=/design/books>Books + Editorial + Ephemera</a> »</h2>
    </div>
  </div> 
  <hr>
  <div class="row"></div>
    {%include "partials/design_catalogs.njk" %}
  <hr>
  <div class="row"></div>
    {%include "partials/design_editorial.njk" %}
  <hr>
  <div class="row"></div>
    {%include "partials/design_brochures.njk" %}
  <hr>
  <div class="row"></div>
    {%include "partials/design_invitations.njk" %}
  <hr>
  <div class="row"></div>
  <div class="row"><div class="col">{% include "partials/design_anchors.njk" %}</div></div>
  <div class="row" id="posters">
    <div class="col">
      <h2><a href=/design/posters>Advertising + Marketing</a> »</h2>
      <p>Poster and ad campaigns. One sheets. Outdoor. Social media and web assets. Various things of a marketing nature.</P>
    </div> 
  </div>
  <hr><div class="row"></div>
    {%include "partials/design_campaigns.njk" %}
  <hr><div class="row"></div>
    {%include "partials/design_singles.njk" %}
  <hr><div class="row"></div>
  <div class="row"><div class="col">{% include "partials/design_anchors.njk" %}</div></div>
  <div class="row">
    <div class="col">
      <h2 id="exhibit"><a href=/design/exhibitions>Exhibitions + Interactive</a> »</h2>
      <p>Exhibition Design. Interactive projects. Experiential things that don't fit elsewhere.</P>
    </div> 
  </div>
  <hr><div class="row"></div>
      {%include "partials/design_exhibit.njk" %}
  <hr><div class="row"></div>
      {%include "partials/design_interactives.njk" %} 
  <hr>
  <div class="row"><div class="col">{% include "partials/design_anchors.njk" %}</div></div>
  <div class="row">
    <div class="col">
      <h2 id="branding"><a href=/design/branding>Logos + Branding</a> »</h2>
      <p>Logos for work. Logos for fun. Title treatments. Branding type things, often further executed in other projects.</P>
    </div> 
  </div>
  <hr><div class="row"></div>
    {%include "partials/design_logos.njk" %}
  <hr><div class="row"></div>
    {%include "partials/design_titles.njk" %}
</div>