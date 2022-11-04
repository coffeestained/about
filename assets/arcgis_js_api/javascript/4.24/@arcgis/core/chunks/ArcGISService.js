/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{L as r}from"./Logger.js";import{i as e}from"./maybe.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{p as o,a as l}from"./arcgisLayerUrl.js";const p=p=>{let a=class extends p{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=o(this.url);if(e(t)&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",l(t,r.getLogger(this.declaredClass)))}};return t([s()],a.prototype,"title",null),t([s({type:String})],a.prototype,"url",null),a=t([i("esri.layers.mixins.ArcGISService")],a),a};export{p as A};
