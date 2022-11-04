/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import s from"../../core/Collection.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{clone as r}from"../../core/lang.js";import{g as o}from"../../chunks/uuid.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import{B as p}from"../../chunks/BuildingFilterBlock.js";import"../../chunks/ArrayPool.js";import"../../core/Evented.js";import"../../core/Accessor.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";let l=class extends e{constructor(){super(...arguments),this.type=null}};t([i({type:String,readOnly:!0,json:{write:!0}})],l.prototype,"type",void 0),l=t([n("esri.layers.support.BuildingFilterAuthoringInfo")],l);const c=l;var u;let m=u=class extends e{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new u({filterType:this.filterType,filterValues:r(this.filterValues)})}};t([i({type:String,json:{write:!0}})],m.prototype,"filterType",void 0),t([i({type:[String],json:{write:!0}})],m.prototype,"filterValues",void 0),m=u=t([n("esri.layers.support.BuildingFilterAuthoringInfoType")],m);const h=m;var a;const y=s.ofType(h);let d=a=class extends e{clone(){return new a({filterTypes:r(this.filterTypes)})}};t([i({type:y,json:{write:!0}})],d.prototype,"filterTypes",void 0),d=a=t([n("esri.layers.support.BuildingFilterAuthoringInfoBlock")],d);const j=d;var k;const f=s.ofType(j);let g=k=class extends c{constructor(){super(...arguments),this.type="checkbox"}clone(){return new k({filterBlocks:r(this.filterBlocks)})}};t([i({type:["checkbox"]})],g.prototype,"type",void 0),t([i({type:f,json:{write:!0}})],g.prototype,"filterBlocks",void 0),g=k=t([n("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],g);const b=g;var v;const B=s.ofType(p);let w=v=class extends e{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=o(),this.name=null}clone(){return new v({description:this.description,filterBlocks:r(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:r(this.filterAuthoringInfo)})}};t([i({type:String,json:{write:!0}})],w.prototype,"description",void 0),t([i({type:B,json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"filterBlocks",void 0),t([i({types:{key:"type",base:c,typeMap:{checkbox:b}},json:{read:t=>"checkbox"===(t&&t.type)?b.fromJSON(t):null,write:!0}})],w.prototype,"filterAuthoringInfo",void 0),t([i({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"id",void 0),t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"name",void 0),w=v=t([n("esri.layers.support.BuildingFilter")],w);const S=w;export{S as default};
