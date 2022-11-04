// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/reactiveUtils ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./Attribution/AttributionViewModel ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/jsxFactory ./support/widgetUtils".split(" "),function(n,d,r,t,c,z,A,f,u,v,p,w,x,k,B){c=function(q){function l(a,
e){var b=q.call(this,a,e)||this;b._isOpen=!1;b._attributionTextOverflowed=!1;b._prevSourceNodeHeight=0;b._resizeObserver=new ResizeObserver(h=>h.forEach(({target:m})=>b._checkSourceTextOverflow(m)));b.iconClass="esri-icon-description";b.itemDelimiter=" | ";b.label=void 0;b.messages=null;b.view=null;b.viewModel=new p;return b}n._inheritsLoose(l,q);var g=l.prototype;g.initialize=function(){this.own(r.on(()=>{var a;return null==(a=this.viewModel)?void 0:a.items},"change",()=>this.scheduleRender()))};
g.destroy=function(){var a;null==(a=this._resizeObserver)?void 0:a.disconnect()};g.render=function(){return k.tsx("div",{bind:this,class:this.classes("esri-attribution esri-widget",{["esri-attribution--open"]:this._isOpen}),dir:"ltr",onclick:this._toggleState,onkeydown:this._toggleState},this.renderSourcesNode(),this.renderPoweredBy())};g.renderPoweredBy=function(){return k.tsx("div",{class:"esri-attribution__powered-by"},"Powered by"," ",k.tsx("a",{class:"esri-attribution__link",href:"http://www.esri.com/",
target:"_blank",rel:"noreferrer"},"Esri"))};g.renderSourcesNode=function(){const a=this._isOpen,e=this._isInteractive,b=e?"0":"",{attributionText:h}=this;return k.tsx("div",{afterCreate:this._afterSourcesNodeCreate,bind:this,class:this.classes("esri-attribution__sources",{["esri-attribution__sources--open"]:a,["esri-interactive"]:e}),innerHTML:h,tabindex:b})};g._afterSourcesNodeCreate=function(a){this._prevSourceNodeHeight=a.clientWidth;this._resizeObserver.observe(a)};g._checkSourceTextOverflow=
function(a){let e=!1;const {clientHeight:b,clientWidth:h,scrollWidth:m}=a;a=m>h;const y=this._attributionTextOverflowed!==a;this._attributionTextOverflowed=a;y&&(e=!0);this._isOpen&&(a=b<this._prevSourceNodeHeight,this._prevSourceNodeHeight=b,a&&(this._isOpen=!1,e=!0));e&&this.scheduleRender()};g._toggleState=function(){this._isInteractive&&(this._isOpen=!this._isOpen)};n._createClass(l,[{key:"_isInteractive",get:function(){return this._isOpen||this._attributionTextOverflowed}},{key:"attributionText",
get:function(){return this.viewModel.items.reduce((a,e)=>{a.includes(e.text)||a.push(e.text);return a},[]).join(this.itemDelimiter)}}]);return l}(v);d.__decorate([f.property()],c.prototype,"_isOpen",void 0);d.__decorate([f.property()],c.prototype,"_isInteractive",null);d.__decorate([f.property()],c.prototype,"_attributionTextOverflowed",void 0);d.__decorate([f.property()],c.prototype,"_prevSourceNodeHeight",void 0);d.__decorate([f.property({readOnly:!0,dependsOn:["viewModel.items.length","itemDelimiter"]})],
c.prototype,"attributionText",null);d.__decorate([f.property()],c.prototype,"iconClass",void 0);d.__decorate([f.property()],c.prototype,"itemDelimiter",void 0);d.__decorate([f.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],c.prototype,"label",void 0);d.__decorate([f.property(),x.messageBundle("esri/widgets/Attribution/t9n/Attribution")],c.prototype,"messages",void 0);d.__decorate([t.aliasOf("viewModel.view")],c.prototype,"view",void 0);d.__decorate([f.property({type:p})],c.prototype,
"viewModel",void 0);d.__decorate([w.accessibleHandler()],c.prototype,"_toggleState",null);return c=d.__decorate([u.subclass("esri.widgets.Attribution")],c)});