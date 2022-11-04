/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{i as o}from"../chunks/maybe.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{e}from"../chunks/enumeration.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import i from"./Symbol3DLayer.js";import{s as l}from"../chunks/utils2.js";import n from"./patterns/LineStylePattern3D.js";import p from"./patterns/StylePattern3D.js";import{s as c,a}from"../chunks/utils3.js";import{w as m,t as u}from"../chunks/colors.js";import"../chunks/Logger.js";import{S as h}from"../chunks/Symbol3DMaterial.js";import j from"../Color.js";import{JSONSupport as d}from"../core/JSONSupport.js";import{p as y}from"../chunks/screenUtils.js";import{c as k,s as f}from"../chunks/materialUtils.js";import{l as g}from"../chunks/symbolLayerUtils3D.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/jsonMap.js";import"../chunks/tracking.js";import"../chunks/writer.js";import"./edges/Edges3D.js";import"./edges/SketchEdges3D.js";import"./edges/SolidEdges3D.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../core/Accessor.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../chunks/opacityUtils.js";import"../chunks/aaBoundingBox.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/aaBoundingRect.js";var S;let b=S=class extends h{constructor(t){super(t),this.colorMixMode=null}clone(){const t={color:o(this.color)?this.color.clone():null,colorMixMode:this.colorMixMode};return new S(t)}};var w;t([e({multiply:"multiply",replace:"replace",tint:"tint"})],b.prototype,"colorMixMode",void 0),b=S=t([r("esri.symbols.support.Symbol3DFillMaterial")],b);let v=w=class extends d{constructor(t){super(t),this.color=new j([0,0,0,1]),this.size=y(1),this.pattern=null,this.patternCap="butt"}clone(){const t={color:o(this.color)?this.color.clone():null,size:this.size,pattern:o(this.pattern)?this.pattern.clone():null,patternCap:this.patternCap};return new w(t)}};var M;t([s(k)],v.prototype,"color",void 0),t([s(f)],v.prototype,"size",void 0),t([s(c)],v.prototype,"pattern",void 0),t([s({type:g,json:{default:"butt",write:{overridePolicy(){return{enabled:o(this.pattern)}}}}})],v.prototype,"patternCap",void 0),v=w=t([r("esri.symbols.support.Symbol3DOutline")],v);let x=M=class extends i{constructor(t){super(t),this.type="fill",this.material=null,this.pattern=null,this.castShadows=!0,this.outline=null,this.edges=null}clone(){const t={edges:o(this.edges)?this.edges.clone():null,enabled:this.enabled,material:o(this.material)?this.material.clone():null,pattern:o(this.pattern)?this.pattern.clone():null,castShadows:this.castShadows,outline:o(this.outline)?this.outline.clone():null};return new M(t)}static fromSimpleFillSymbol(t){const o=t.outline&&t.outline.style&&"inside-frame"!==t.outline.style&&"solid"!==t.outline.style?new n({style:t.outline.style}):null,s={size:t.outline?.width??0,color:(t.outline?.color??m).clone(),pattern:o};return o&&t.outline?.cap&&(s.patternCap=t.outline.cap),new M({material:new b({color:(t.color??u).clone()}),pattern:t.style&&"solid"!==t.style?new p({style:t.style}):null,outline:s})}};t([e({Fill:"fill"},{readOnly:!0})],x.prototype,"type",void 0),t([s({type:b,json:{write:!0}})],x.prototype,"material",void 0),t([s(a)],x.prototype,"pattern",void 0),t([s({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],x.prototype,"castShadows",void 0),t([s({type:v,json:{write:!0}})],x.prototype,"outline",void 0),t([s(l)],x.prototype,"edges",void 0),x=M=t([r("esri.symbols.FillSymbol3DLayer")],x);const D=x;export{D as default};
