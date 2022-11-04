/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{r}from"../../chunks/reader.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Accessor.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";var i;let c=i=class extends t{constructor(s){super(s),this.respectsDaylightSaving=!1,this.timezone=null}readRespectsDaylightSaving(s,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving}clone(){const{respectsDaylightSaving:s,timezone:t}=this;return new i({respectsDaylightSaving:s,timezone:t})}};s([e({type:Boolean,json:{write:!0}})],c.prototype,"respectsDaylightSaving",void 0),s([r("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],c.prototype,"readRespectsDaylightSaving",null),s([e({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],c.prototype,"timezone",void 0),c=i=s([o("esri.layers.support.TimeReference")],c);const p=c;export{p as default};
