---
layout: layouts/base.njk
title: Utility Covers
description: Photography of utility covers
date: 2008-08
tags:
  - photography
  - utility covers
  - series
eleventyNavigation:
  key: Utility Covers
  parent: Photography
---

{% set navPages = collections.all | eleventyNavigationBreadcrumb("Utility Covers") %}
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
        <div class="col-12 col-8-md col-4-lg">
            <h1>{{ title }}</h1>
            <figcaption>Ongoing Series</br>iPhone</figcaption>
            <figcaption><a href=#PDX>PDX</a>  |  <a href=#BOM>BOM</a>  |  <a href=#VAP>VAP</a>  |  <a href=#SCL>SCL</a>  |  <a href=#SLA>SLA</a>  |  <a href=#MDZ>MDZ</a>  |  <a href=#BAE>BAE</a>  |  <a href=#MVD>MVD</a>  |  <a href=#DET>DET</a>  |  <a href=#TLL>TLL</a>  |  <a href=#KUO>KUO</a>  |  <a href=#SVL>SVL</a>  |  <a href=#HEL>HEL</a>  |  <a href=#GVA>GVA</a>  |  <a href=#AVN>AVN - LYS</a>  |  <a href=#NCE>NCE</a>  |  <a href=#BER>BER</a>  |  <a href=#MUC>MUC</a>  |  <a href=#DRS>DRS</a>  |  <a href=#CGN>CGN</a>  |  <a href=#FRA>FRA</a>  |  <a href=#MAD>MAD</a>  |  <a href=#ZAZ>ZAZ</a>  |  <a href=#BCA>BCA</a>  |  <a href=#MEX>MEX</a>  |  <a href=#PRG>PRG</a>  |  <a href=#ORD>ORD</a>  |  <a href=#SDF>SDF</a>  |  <a href=#BHM>BHM</a></figcaption>
            <p>Ongoing series. Taken while walking new places, old places. A meditation on man-made objects and their location.</p>
        </div>
        <div class="col"></div>
        <div class="col-6 col-2-md col-6-lg">
        </div>
        <div class="col-1 col-1-md col-1-lg"></div>
    </div>
    <hr>
    <div class="row" id="PDX"><div class="spacer"></div></div>
    {% include "partials/utility/pdx.njk" %}
    <div class="row" id="BOM"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/bom.njk" %}
    <div class="row" id="VAP"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/valpo.njk" %}
    <div class="row" id="SCL"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/scl.njk" %}
    <div class="row" id="SLA"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/sla.njk" %}
    <div class="row" id="MDZ"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/mdz.njk" %}
    <div class="row" id="BAE"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/bae.njk" %}
    <div class="row" id="MVD"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/mvd.njk" %}
    <div class="row" id="DET"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/det.njk" %}
    <div class="row" id="TLL"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/tll.njk" %}
    <div class="row" id="KUO"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/kuo.njk" %}
    <div class="row" id="SVL"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/svl.njk" %}
    <div class="row" id="HEL"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/hel.njk" %}
    <div class="row" id="GVA"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/gva.njk" %}
    <div class="row" id="AVN"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/avn.njk" %}
    <div class="row" id="NCE"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/nce.njk" %}
    <div class="row" id="BER"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/ber.njk" %}
    <div class="row" id="MUC"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/muc.njk" %}
    <div class="row" id="DRS"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/drs.njk" %}
    <div class="row" id="CGN"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/cgn.njk" %}
    <div class="row" id="FRA"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/fra.njk" %}
    <div class="row" id="MAD"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/mad.njk" %}
    <div class="row" id="ZAZ"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/zgz.njk" %}
    <div class="row" id="BCA"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/bca.njk" %}
    <div class="row" id="MEX"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/cdmx.njk" %}
    <div class="row" id="PRG"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/prg.njk" %}
    <div class="row" id="ORD"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/ord.njk" %}
    <div class="row" id="SDF"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/sdf.njk" %}
    <div class="row" id="BHM"><div class="spacer"></div></div>
    <hr>
    {% include "partials/utility/bhm.njk" %}
</div>