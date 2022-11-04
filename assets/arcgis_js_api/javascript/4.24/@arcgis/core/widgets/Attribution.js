/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{on as e}from"../core/reactiveUtils.js";import{aliasOf as s}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import"../chunks/ensureType.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import o from"./Widget.js";import n from"./Attribution/AttributionViewModel.js";import{a as p}from"../chunks/accessibleHandler.js";import{m as c}from"../chunks/messageBundle.js";import{t as m}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/maybe.js";import"../chunks/string.js";import"../chunks/handleUtils.js";import"../chunks/watch.js";import"../chunks/ArrayPool.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/tracking.js";import"../chunks/metadata.js";import"../intl.js";import"../chunks/number2.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/asyncUtils.js";import"../core/HandleOwner.js";let l=class extends o{constructor(t,e){super(t,e),this._isOpen=!1,this._attributionTextOverflowed=!1,this._prevSourceNodeHeight=0,this._resizeObserver=new ResizeObserver((t=>t.forEach((({target:t})=>this._checkSourceTextOverflow(t))))),this.iconClass="esri-icon-description",this.itemDelimiter=" | ",this.label=void 0,this.messages=null,this.view=null,this.viewModel=new n}initialize(){this.own(e((()=>this.viewModel?.items),"change",(()=>this.scheduleRender())))}destroy(){this._resizeObserver?.disconnect()}get _isInteractive(){return this._isOpen||this._attributionTextOverflowed}get attributionText(){return this.viewModel.items.reduce(((t,e)=>(t.includes(e.text)||t.push(e.text),t)),[]).join(this.itemDelimiter)}render(){const t={"esri-attribution--open":this._isOpen};return m("div",{bind:this,class:this.classes("esri-attribution esri-widget",t),dir:"ltr",onclick:this._toggleState,onkeydown:this._toggleState},this.renderSourcesNode(),this.renderPoweredBy())}renderPoweredBy(){return m("div",{class:"esri-attribution__powered-by"},"Powered by"," ",m("a",{class:"esri-attribution__link",href:"http://www.esri.com/",target:"_blank",rel:"noreferrer"},"Esri"))}renderSourcesNode(){const t=this._isOpen,e=this._isInteractive,s=e?"0":"",{attributionText:r}=this,i={"esri-attribution__sources--open":t,"esri-interactive":e};return m("div",{afterCreate:this._afterSourcesNodeCreate,bind:this,class:this.classes("esri-attribution__sources",i),innerHTML:r,tabindex:s})}_afterSourcesNodeCreate(t){this._prevSourceNodeHeight=t.clientWidth,this._resizeObserver.observe(t)}_checkSourceTextOverflow(t){let e=!1;const{clientHeight:s,clientWidth:r,scrollWidth:i}=t,o=i>r,n=this._attributionTextOverflowed!==o;if(this._attributionTextOverflowed=o,n&&(e=!0),this._isOpen){const t=s<this._prevSourceNodeHeight;this._prevSourceNodeHeight=s,t&&(this._isOpen=!1,e=!0)}e&&this.scheduleRender()}_toggleState(){this._isInteractive&&(this._isOpen=!this._isOpen)}};t([r()],l.prototype,"_isOpen",void 0),t([r()],l.prototype,"_isInteractive",null),t([r()],l.prototype,"_attributionTextOverflowed",void 0),t([r()],l.prototype,"_prevSourceNodeHeight",void 0),t([r({readOnly:!0,dependsOn:["viewModel.items.length","itemDelimiter"]})],l.prototype,"attributionText",null),t([r()],l.prototype,"iconClass",void 0),t([r()],l.prototype,"itemDelimiter",void 0),t([r({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],l.prototype,"label",void 0),t([r(),c("esri/widgets/Attribution/t9n/Attribution")],l.prototype,"messages",void 0),t([s("viewModel.view")],l.prototype,"view",void 0),t([r({type:n})],l.prototype,"viewModel",void 0),t([p()],l.prototype,"_toggleState",null),l=t([i("esri.widgets.Attribution")],l);const u=l;export{u as default};
