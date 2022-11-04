// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Color ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./support/lineMarkers".split(" "),function(m,c,q,b,r,f,x,t,u,v,n,w){var h;b=h=function(p){function g(a){a=p.call(this,a)||this;a.placement="begin-end";
a.type="line-marker";a.style="arrow";return a}m._inheritsLoose(g,p);var d=g.prototype;d.writeStyle=function(a,k,l,e){k[l]="web-map"===(null==e?void 0:e.origin)?"arrow":a};d.readColor=function(a){return a&&null!=a[0]?[a[0],a[1],a[2],a[3]/255]:a};d.writeColor=function(a,k,l,e){"web-map"!==(null==e?void 0:e.origin)&&(k[l]=a)};d.clone=function(){return new h({color:r.clone(this.color),placement:this.placement,style:this.style})};d.hash=function(){var a;return`${this.placement}.${null==(a=this.color)?
void 0:a.hash()}.${this.style}`};m._createClass(g,[{key:"color",set:function(a){this._set("color",a)}}]);return g}(b.JSONSupport);c.__decorate([f.property({type:["begin","end","begin-end"],json:{write:!0}})],b.prototype,"placement",void 0);c.__decorate([t.enumeration({"line-marker":"line-marker"},{readOnly:!0}),f.property({json:{origins:{"web-map":{write:!1}}}})],b.prototype,"type",void 0);c.__decorate([f.property({type:w.lineMarkerStyles})],b.prototype,"style",void 0);c.__decorate([n.writer("style")],
b.prototype,"writeStyle",null);c.__decorate([f.property({type:q,value:null,json:{write:{allowNull:!0}}})],b.prototype,"color",null);c.__decorate([u.reader("color")],b.prototype,"readColor",null);c.__decorate([n.writer("color")],b.prototype,"writeColor",null);return b=h=c.__decorate([v.subclass("esri.symbols.LineSymbolMarker")],b)});