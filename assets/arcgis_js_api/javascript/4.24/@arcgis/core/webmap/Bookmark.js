/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import o from"../TimeExtent.js";import e from"../Viewpoint.js";import r from"../core/Error.js";import{I as s}from"../chunks/Identifiable.js";import{JSONSupport as i}from"../core/JSONSupport.js";import{clone as n}from"../core/lang.js";import{L as p}from"../chunks/Logger.js";import{i as m,a}from"../chunks/maybe.js";import{property as c}from"../core/accessorSupport/decorators/property.js";import{cast as u}from"../core/accessorSupport/decorators/cast.js";import{r as l}from"../chunks/reader.js";import{subclass as j}from"../core/accessorSupport/decorators/subclass.js";import{w as h}from"../chunks/writer.js";import{j as y}from"../chunks/ensureType.js";import{S as k}from"../chunks/SlideThumbnail.js";import"../chunks/timeUtils.js";import"../core/Accessor.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../Camera.js";import"../core/Clonable.js";import"../chunks/Cyclical.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../geometry/Point.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";var w;const g=p.getLogger("esri.webmap.Bookmark");let f=w=class extends(s(i)){constructor(t){super(t),this.name=null,this.thumbnail=new k,this.timeExtent=null}castThumbnail(t){return"string"==typeof t?new k({url:t}):y(k,t)}set viewpoint(t){const{targetGeometry:o,scale:e}=t;m(o)&&"point"===o.type&&a(e)&&g.warn("Bookmark.viewpoint should include 'scale' when its targetGeometry is a point.",t),this._set("viewpoint",t)}readViewpoint(t,o){const{extent:r,viewpoint:s}=o;return e.fromJSON(s||{targetGeometry:r})}writeViewpoint(t,o,e,s){if(!t)return;const{targetGeometry:i}=t;if(m(i)&&"extent"!==i.type){const t="Bookmark.viewpoint cannot be written to JSON when the viewpoint's targetGeometry is not an extent.";s?.messages?s.messages.push(new r("property:unsupported",t)):g.error(t)}else m(i)&&(o.extent=i.toJSON()),o[e]=t.toJSON()}clone(){return new w(n({name:this.name,thumbnail:this.thumbnail,timeExtent:this.timeExtent,viewpoint:this.viewpoint}))}};t([c({type:String,nonNullable:!0,json:{write:{isRequired:!0}}})],f.prototype,"name",void 0),t([c({type:k,json:{write:{overridePolicy:t=>({enabled:!(!t||!t.url)})}}})],f.prototype,"thumbnail",void 0),t([u("thumbnail")],f.prototype,"castThumbnail",null),t([c({type:o,json:{write:!0}})],f.prototype,"timeExtent",void 0),t([c({type:e,nonNullable:!0,json:{write:!0}})],f.prototype,"viewpoint",null),t([l("viewpoint",["extent","viewpoint"])],f.prototype,"readViewpoint",null),t([h("viewpoint")],f.prototype,"writeViewpoint",null),f=w=t([j("esri.webmap.Bookmark")],f);const d=f;export{d as default};
