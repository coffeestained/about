/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as s}from"./tslib.es6.js";import{watch as e,syncAndInitial as t}from"../core/reactiveUtils.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{I as o}from"./dragEventPipeline.js";let a=class extends o{constructor(s){super(s)}initialize(){this.own(e((()=>this.analysisViewData.visible),(s=>this.visible=s),t))}deactivate(){this.onDeactivate(),this.created||this.analysis.clear()}resetCreated(){this._set("created",!1)}};s([r({constructOnly:!0})],a.prototype,"analysis",void 0),s([r()],a.prototype,"analysisViewData",void 0),a=s([i("esri.views.interactive.AnalysisToolBase")],a);export{a as A};
