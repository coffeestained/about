// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./support/AssociationGeometriesResult"],function(k,l,m,e,n){function f(){f=l._asyncToGenerator(function*(c,g,a){c=e.parseUrl(c);var h={...g.toJSON(),f:"json"};h=e.encode({...c.query,...h});a?a.method="post":a={method:"post"};a=e.asValidOptions(h,a);return m(`${c.path}/synthesizeAssociationGeometries`,a).then(b=>{var d=g.outSpatialReference;({data:b}=b);if(b){b=n.fromJSON(b);if(d)for(const p of b.associations)p.geometry.spatialReference=
d.clone();d=b}else d=null;return d})});return f.apply(this,arguments)}k.synthesizeAssociationGeometries=function(c,g,a){return f.apply(this,arguments)};Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});