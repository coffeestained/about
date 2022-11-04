/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import"../geometry.js";import r from"../request.js";import e from"../core/Error.js";import o from"../core/Evented.js";import{I as s}from"../chunks/Identifiable.js";import i from"../core/Loadable.js";import{L as a}from"../chunks/Logger.js";import{isAbortError as n}from"../core/promiseUtils.js";import{urlToObject as p}from"../core/urlUtils.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import c from"../config.js";import u from"../geometry/Extent.js";import y from"../geometry/SpatialReference.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../kernel.js";import"../core/Promise.js";const d=a.getLogger("esri.layers.support.fromPortalItem");let h=0,j=class extends(o.EventedMixin(s(i))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new u(-180,-90,180,90,y.WGS84),this.id=Date.now().toString(16)+"-layer-"+h++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=y.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(t){const r="string"==typeof t?{url:t}:t;return(await import("../chunks/arcgisLayers.js")).fromUrl(r)}static fromPortalItem(t){return async function(t){const r="portalItem"in t?t:{portalItem:t},e=await import("../chunks/portalLayers.js");try{return await e.fromItem(r)}catch(t){const e=r&&r.portalItem,o=e&&e.id||"unset",s=e&&e.portal&&e.portal.url||c.portalUrl;throw d.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+s+"', id: '"+o+"')",t),t}}(t)}initialize(){this.when().catch((t=>{n(t)||a.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:t})}))}destroy(){if(this.parent){const t=this,r=this.parent;"layers"in r&&r.layers.includes(t)?r.layers.remove(t):"tables"in r&&r.tables.includes(t)?r.tables.remove(t):"baseLayers"in r&&r.baseLayers.includes(t)?r.baseLayers.remove(t):"baseLayers"in r&&r.referenceLayers.includes(t)&&r.referenceLayers.remove(t)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const t=this.url;return t?p(t):null}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await r(t,{query:{f:"json"},responseType:"json"})).data;throw new e("layer:no-attribution-data","Layer does not have attribution data")}};t([l({type:String})],j.prototype,"attributionDataUrl",void 0),t([l({type:u})],j.prototype,"fullExtent",void 0),t([l({readOnly:!0})],j.prototype,"hasAttributionData",null),t([l({type:String,clonable:!1})],j.prototype,"id",void 0),t([l({type:Boolean,nonNullable:!0})],j.prototype,"legendEnabled",void 0),t([l({type:["show","hide","hide-children"]})],j.prototype,"listMode",void 0),t([l({type:Number,range:{min:0,max:1},nonNullable:!0})],j.prototype,"opacity",void 0),t([l({clonable:!1})],j.prototype,"parent",void 0),t([l({readOnly:!0})],j.prototype,"parsedUrl",null),t([l({type:Boolean})],j.prototype,"popupEnabled",void 0),t([l({type:Boolean})],j.prototype,"attributionVisible",void 0),t([l({type:y})],j.prototype,"spatialReference",void 0),t([l({type:String})],j.prototype,"title",void 0),t([l({readOnly:!0,json:{read:!1}})],j.prototype,"type",void 0),t([l()],j.prototype,"url",void 0),t([l({type:Boolean,nonNullable:!0})],j.prototype,"visible",void 0),j=t([m("esri.layers.Layer")],j);const b=j;export{b as default};
