// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/lang ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../form/ExpressionInfo".split(" "),function(k,c,a,f,g,n,l,m){var d;a=d=function(h){function e(b){b=h.call(this,b)||this;b.columnTemplates=[];b.expressionInfos=null;return b}k._inheritsLoose(e,h);e.prototype.clone=function(){return new d({columnTemplates:f.clone(this.columnTemplates),
expressionInfos:f.clone(this.expressionInfos)})};return e}(a.JSONSupport);c.__decorate([g.property()],a.prototype,"columnTemplates",void 0);c.__decorate([g.property({type:[m],json:{write:!0}})],a.prototype,"expressionInfos",void 0);return a=d=c.__decorate([l.subclass("esri.widgets.FeatureTable.support.TableTemplate")],a)});