// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/jsonMap ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/cast ../../../core/accessorSupport/decorators/enumeration ../../../core/accessorSupport/decorators/reader ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/extensions/serializableProperty/reader ../Field ./MapLayerSource ./QueryTableDataSource ./RasterDataSource ./TableDataSource".split(" "),
function(a,w,c,m,x,f,M,N,l,n,y,z,p,D,E,F,G,H,I){function A(){q||(q=D.createTypeReader({types:r()}));return q}function r(){t||(t={key:"type",base:null,typeMap:{"data-layer":a.DataLayerSource,"map-layer":F.MapLayerSource}});return t}var u,v;m=m.strict()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});a.JoinTableDataSource=u=function(h){function e(b){b=h.call(this,b)||this;b.type="join-table";return b}w._inheritsLoose(e,h);var d=e.prototype;d.readLeftTableSource=function(b,
g,k){return A()(b,g,k)};d.castLeftTableSource=function(b){return p.ensureOneOfType(r(),b)};d.readRightTableSource=function(b,g,k){return A()(b,g,k)};d.castRightTableSource=function(b){return p.ensureOneOfType(r(),b)};d.clone=function(){var b,g;const {leftTableKey:k,rightTableKey:J,leftTableSource:B,rightTableSource:C,joinType:K}=this,L={leftTableKey:k,rightTableKey:J,leftTableSource:null!=(b=null==B?void 0:B.clone())?b:void 0,rightTableSource:null!=(g=null==C?void 0:C.clone())?g:void 0,joinType:K};
return new u(L)};return e}(x.JSONSupport);c.__decorate([n.enumeration({joinTable:"join-table"})],a.JoinTableDataSource.prototype,"type",void 0);c.__decorate([f.property({type:String,json:{write:!0}})],a.JoinTableDataSource.prototype,"leftTableKey",void 0);c.__decorate([f.property({type:String,json:{write:!0}})],a.JoinTableDataSource.prototype,"rightTableKey",void 0);c.__decorate([f.property({json:{write:!0}})],a.JoinTableDataSource.prototype,"leftTableSource",void 0);c.__decorate([y.reader("leftTableSource")],
a.JoinTableDataSource.prototype,"readLeftTableSource",null);c.__decorate([l.cast("leftTableSource")],a.JoinTableDataSource.prototype,"castLeftTableSource",null);c.__decorate([f.property({json:{write:!0}})],a.JoinTableDataSource.prototype,"rightTableSource",void 0);c.__decorate([y.reader("rightTableSource")],a.JoinTableDataSource.prototype,"readRightTableSource",null);c.__decorate([l.cast("rightTableSource")],a.JoinTableDataSource.prototype,"castRightTableSource",null);c.__decorate([n.enumeration(m)],
a.JoinTableDataSource.prototype,"joinType",void 0);a.JoinTableDataSource=u=c.__decorate([z.subclass("esri.layers.support.source.JoinTableDataSource")],a.JoinTableDataSource);let q=null,t=null;l={key:"type",base:null,typeMap:{"join-table":a.JoinTableDataSource,"query-table":G.QueryTableDataSource,raster:H.RasterDataSource,table:I.TableDataSource}};a.DataLayerSource=v=function(h){function e(d){d=h.call(this,d)||this;d.type="data-layer";return d}w._inheritsLoose(e,h);e.prototype.clone=function(){const {fields:d,
dataSource:b}=this;return new v({fields:d,dataSource:b})};return e}(x.JSONSupport);c.__decorate([n.enumeration({dataLayer:"data-layer"})],a.DataLayerSource.prototype,"type",void 0);c.__decorate([f.property({type:[E],json:{write:!0}})],a.DataLayerSource.prototype,"fields",void 0);c.__decorate([f.property({types:l,json:{write:!0}})],a.DataLayerSource.prototype,"dataSource",void 0);a.DataLayerSource=v=c.__decorate([z.subclass("esri.layers.support.source.DataLayerSource")],a.DataLayerSource);a.DataLayerSource.from=
p.ensureType(a.DataLayerSource);Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});