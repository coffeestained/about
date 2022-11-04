/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{aliasOf as s}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import"../chunks/ensureType.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import r from"./Widget.js";import i from"./Home/HomeViewModel.js";import{a as m}from"../chunks/accessibleHandler.js";import{m as n}from"../chunks/messageBundle.js";import{v as p}from"../chunks/vmEvent.js";import{t as c}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/maybe.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/number2.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Accessor.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../Viewpoint.js";import"../Camera.js";import"../core/Clonable.js";import"../chunks/Cyclical.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../core/JSONSupport.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"./support/GoTo.js";let l=class extends r{constructor(o,s){super(o,s),this.goToOverride=null,this.iconClass="esri-icon-home",this.label=void 0,this.messages=null,this.messagesCommon=null,this.view=null,this.viewModel=new i,this.viewpoint=null}get homeTitle(){const o=this.viewModel?.state,{messagesCommon:s,messages:e}=this;return"going-home"===o?s.cancel:e.title}cancelGo(){return null}go(){return null}render(){const o=this.viewModel?.state,{homeTitle:s}=this,e={"esri-disabled":"disabled"===o};return c("div",{bind:this,class:this.classes("esri-home esri-widget--button esri-widget",e),role:"button",tabIndex:0,onclick:this._go,onkeydown:this._go,"aria-label":s,title:s},this.renderIcon(),this.renderText())}renderIcon(){const o=this.viewModel?.state,s={"esri-icon-loading-indicator":"going-home"===o,"esri-rotating":"going-home"===o};return c("span",{"aria-hidden":"true",class:this.classes("esri-icon esri-icon-home",s)})}renderText(){const{messages:o}=this;return c("span",{class:"esri-icon-font-fallback-text"},o.button)}_go(){const{viewModel:o}=this;"going-home"===o.state?o.cancelGo():o.go()}};o([s("viewModel.goToOverride")],l.prototype,"goToOverride",void 0),o([e({readOnly:!0})],l.prototype,"homeTitle",null),o([e()],l.prototype,"iconClass",void 0),o([e({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],l.prototype,"label",void 0),o([e(),n("esri/widgets/Home/t9n/Home")],l.prototype,"messages",void 0),o([e(),n("esri/t9n/common")],l.prototype,"messagesCommon",void 0),o([s("viewModel.view")],l.prototype,"view",void 0),o([e({type:i}),p("go")],l.prototype,"viewModel",void 0),o([s("viewModel.viewpoint")],l.prototype,"viewpoint",void 0),o([s("viewModel.cancelGo")],l.prototype,"cancelGo",null),o([s("viewModel.go")],l.prototype,"go",null),o([m()],l.prototype,"_go",null),l=o([t("esri.widgets.Home")],l);const a=l;export{a as default};
