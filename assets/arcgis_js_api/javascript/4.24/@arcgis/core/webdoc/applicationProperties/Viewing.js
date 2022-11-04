/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{clone as o}from"../../core/lang.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import i from"./Search.js";import"../../core/Accessor.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"./SearchLayer.js";import"./SearchLayerField.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../chunks/fieldType.js";import"./SearchTable.js";import"./SearchTableField.js";var c;let p=c=class extends s{constructor(r){super(r),this.search=null}clone(){return new c(o({search:this.search}))}};r([e({type:i,json:{write:!0}})],p.prototype,"search",void 0),p=c=r([t("esri.webdoc.applicationProperties.Viewing")],p);const m=p;export{m as default};
