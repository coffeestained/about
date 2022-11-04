// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/queryAttachments","../support/AttachmentQuery"],function(b,h,k,c,l){function a(){a=h._asyncToGenerator(function*(d,e,f){const g=k.parseUrl(d);return c.executeAttachmentQuery(g,l.from(e),{...f}).then(m=>c.processAttachmentQueryResult(m.data.attachmentGroups,g.path))});return a.apply(this,arguments)}b.executeAttachmentQuery=function(d,e,f){return a.apply(this,arguments)};Object.defineProperties(b,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});