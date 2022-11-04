// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../intl ../../../../core/maybe ../../../../core/quantityFormatUtils ../../../../core/unitUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../widgets/Widget ../../../../widgets/support/widgetUtils ../../../../widgets/support/decorators/messageBundle ../../../../intl/number".split(" "),
function(b,k,d,v,n,e,p,f,w,x,y,q,r,z,l,h){b.TooltipContent=function(m){function g(){var a=m.apply(this,arguments)||this;a._messagesUnits=null;a._messagesTooltip=null;return a}k._inheritsLoose(g,m);var c=g.prototype;c._formatScale=function(a){return h.formatNumber(a,{style:"percent",maximumFractionDigits:0})};c._formatRelativeOrientation=function(a){return h.formatNumber(a,{maximumFractionDigits:2,minimumFractionDigits:2,signDisplay:"exceptZero"})};c._formatLength=function(a,t,u){return e.formatLength(this._messagesUnits,
a,n.unwrapOr(t,this._units.length),u)};c._formatRelativeLength=function(a){return e.formatRelativeLength(this._messagesUnits,a,this._units.length)};c._formatVerticalLength=function(a){return e.formatVerticalLength(this._messagesUnits,a,this._units.verticalLength)};c._formatRelativeVerticalLength=function(a){return e.formatRelativeVerticalLength(this._messagesUnits,a,this._units.verticalLength)};c._formatTotalLength=function(a){return e.formatLength(this._messagesUnits,a,this._units.length)};c._formatArea=
function(a){return e.formatArea(this._messagesUnits,a,this._units.area)};c._formatPercentage=function(a){return h.formatNumber(a.value,{style:"percent"})};k._createClass(g,[{key:"_units",get:function(){const a=p.getDefaultUnitForView(this.tooltip.view);return{length:a,verticalLength:a,area:a}}}]);return g}(r);d.__decorate([f.property()],b.TooltipContent.prototype,"info",void 0);d.__decorate([f.property()],b.TooltipContent.prototype,"tooltip",void 0);d.__decorate([f.property()],b.TooltipContent.prototype,
"_units",null);d.__decorate([l.messageBundle("esri/core/t9n/Units"),f.property()],b.TooltipContent.prototype,"_messagesUnits",void 0);d.__decorate([l.messageBundle("esri/views/interactive/tooltip/t9n/Tooltip"),f.property()],b.TooltipContent.prototype,"_messagesTooltip",void 0);b.TooltipContent=d.__decorate([q.subclass("esri.views.interactive.tooltip.content.TooltipContent")],b.TooltipContent);Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});