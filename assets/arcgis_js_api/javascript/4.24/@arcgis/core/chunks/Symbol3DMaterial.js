/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"./tslib.es6.js";import{JSONSupport as r}from"../core/JSONSupport.js";import{i as s}from"./maybe.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import{c}from"./materialUtils.js";var p;let l=p=class extends r{constructor(o){super(o),this.color=null}clone(){const o={color:s(this.color)?this.color.clone():null};return new p(o)}};o([t(c)],l.prototype,"color",void 0),l=p=o([e("esri.symbols.support.Symbol3DMaterial")],l);export{l as S};
