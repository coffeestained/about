// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../core/maybe ../../intl/messages ../../renderers/support/AuthoringInfo ../../renderers/support/AuthoringInfoVisualVariable ../../renderers/support/numberUtils ../../renderers/visualVariables/OpacityVariable ../heuristics/outline ./size ./type ./support/utils ../statistics/predominantCategories ../statistics/summaryStatistics ../statistics/support/predominanceUtils ../support/adapters/support/layerUtils ../symbology/predominance".split(" "),
function(F,m,n,w,x,G,M,N,O,P,Q,R,l,S,T,U,u,H){function V(a){return y.apply(this,arguments)}function y(){y=m._asyncToGenerator(function*(a){if(!(a&&a.layer&&a.view&&a.fields&&a.fields.length))throw new n("predominance-renderer:missing-parameters","'layer', 'view' and 'fields' parameters are required");if(2>a.fields.length)throw new n("predominance-renderer:invalid-parameters","Minimum 2 fields are required");if(10<a.fields.length)throw new n("predominance-renderer:invalid-parameters","Maximum 10 fields are supported");
const b={...a};b.symbolType=b.symbolType||"2d";b.defaultSymbolEnabled=null==b.defaultSymbolEnabled?!0:b.defaultSymbolEnabled;b.includeOpacityVariable=a.includeOpacityVariable||!1;b.includeSizeVariable=a.includeSizeVariable||!1;b.sortBy=null==b.sortBy?"count":b.sortBy;a=u.createLayerAdapter(b.layer,u.featureCapableLayerTypes);b.layer=a;if(!a)throw new n("predominance-renderer:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(u.featureCapableLayerTypes).join(", "));var c=
w.isSome(b.signal)?{signal:b.signal}:null;yield a.load(c);c=a.geometryType;const d=b.symbolType.includes("3d");b.outlineOptimizationEnabled="polygon"===c?b.outlineOptimizationEnabled:!1;b.includeSizeVariable||(b.sizeOptimizationEnabled="point"===c||"multipoint"===c||"polyline"===c?b.sizeOptimizationEnabled:!1);if("mesh"===c)b.symbolType="3d-volumetric",b.colorMixMode=b.colorMixMode||"replace",b.edgesType=b.edgesType||"none",b.sizeOptimizationEnabled=!1;else{if(d&&("polyline"===c||"polygon"===c))throw new n("predominance-renderer:not-supported",
"3d symbols are not supported for polyline and polygon layers");if(b.symbolType.includes("3d-volumetric")&&(!b.view||"3d"!==b.view.type))throw new n("predominance-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");}c=b.fields.map(e=>e.name);if(a=l.verifyBasicFieldValidity(a,c,"predominance-renderer:invalid-parameters"))throw a;return b});return y.apply(this,arguments)}function W(a){return z.apply(this,
arguments)}function z(){z=m._asyncToGenerator(function*(a){let b=a.predominanceScheme,c=null;var d=null;d=yield l.getBasemapInfo(a.basemap,a.view);c=w.isSome(d.basemapId)?d.basemapId:null;d=w.isSome(d.basemapTheme)?d.basemapTheme:null;if(b)return{scheme:H.cloneScheme(b),basemapId:c,basemapTheme:d};if(a=H.getSchemes({basemap:c,basemapTheme:d,geometryType:a.geometryType,numColors:a.numColors,theme:a.theme,worldScale:a.worldScale,view:a.view}))b=a.primaryScheme,c=a.basemapId,d=a.basemapTheme;return{scheme:b,
basemapId:c,basemapTheme:d}});return z.apply(this,arguments)}function X(a,b,c,d){return A.apply(this,arguments)}function A(){A=m._asyncToGenerator(function*(a,b,c,d){var e=yield x.fetchMessageBundle("esri/smartMapping/t9n/smartMapping"),f=a.layer,k={layer:a.layer,view:a.view,signal:a.signal};const [h,p]=yield Promise.all([S({layer:f,fields:d,view:a.view,signal:a.signal}),a.outlineOptimizationEnabled?P(k):null]);(k=h)&&h.predominantCategoryInfos||(k={predominantCategoryInfos:d.map(g=>({value:g,count:0}))});
const I=p&&p.opacity;b=yield R.createRenderer({layer:f,basemap:a.basemap,valueExpression:b.valueExpression,valueExpressionTitle:e.predominantCategory,numTypes:-1,defaultSymbolEnabled:a.defaultSymbolEnabled,sortBy:a.sortBy,typeScheme:c,statistics:{uniqueValueInfos:k.predominantCategoryInfos},legendOptions:a.legendOptions,outlineOptimizationEnabled:!1,sizeOptimizationEnabled:a.includeSizeVariable&&a.sizeOptimizationEnabled?!1:a.sizeOptimizationEnabled,symbolType:a.symbolType,colorMixMode:a.colorMixMode,
edgesType:a.edgesType,view:a.view,signal:a.signal});const {renderer:r,basemapId:Y,basemapTheme:Z,uniqueValueInfos:B,excludedUniqueValueInfos:aa}=b;b=r.uniqueValueInfos;const J={};for(var q of a.fields)e=f.getField(q.name),J[e.name]=q.label||e&&e.alias||q.name;b.forEach((g,t)=>{const v=J[g.value];g.label=v;B[t].label=v});if(a.includeSizeVariable){let g=f.geometryType,t=null;"polygon"===g?(f=c.sizeScheme,q=f.background,r.backgroundFillSymbol=l.createSymbol(g,{type:a.symbolType,color:q.color,outline:l.getSymbolOutlineFromScheme(q,
g,I)}),t=f.marker.size,g="point"):t="polyline"===g?c.width:c.size;const v=l.createColors(c.colors,b.length);b.forEach((ba,K)=>{const L=l.createSymbol(g,{type:a.symbolType,color:v[K],size:t,outline:l.getSymbolOutlineFromScheme(c,g,I),meshInfo:{colorMixMode:a.colorMixMode,edgesType:a.edgesType}});ba.symbol=L;B[K].symbol=L.clone()})}p&&p.visualVariables&&p.visualVariables.length&&(r.visualVariables=p.visualVariables.map(g=>g.clone()));r.authoringInfo=new G({type:"predominance",fields:[...d]});return{renderer:r,
predominantCategoryInfos:B,excludedCategoryInfos:aa,predominanceScheme:c,basemapId:Y,basemapTheme:Z}});return A.apply(this,arguments)}function ca(a,b,c){return C.apply(this,arguments)}function C(){C=m._asyncToGenerator(function*(a,b,c){const d=yield x.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");return Q.createVisualVariables({layer:a.layer,basemap:a.basemap,valueExpression:b.valueExpression,sqlExpression:b.statisticsQuery.sqlExpression,sqlWhere:b.statisticsQuery.sqlWhere,sizeScheme:c,
sizeOptimizationEnabled:a.sizeOptimizationEnabled,worldScale:a.symbolType.includes("3d-volumetric"),legendOptions:{title:d.sumOfCategories},view:a.view,signal:a.signal})});return C.apply(this,arguments)}function da(a,b){return D.apply(this,arguments)}function D(){D=m._asyncToGenerator(function*(a,b){var c=yield x.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");const d=yield T({layer:a.layer,valueExpression:b.valueExpression,sqlExpression:b.statisticsQuery.sqlExpression,sqlWhere:b.statisticsQuery.sqlWhere,
view:a.view,signal:a.signal}),e=null==d.avg||null==d.stddev;a=1/a.fields.length*100;let f=e?100:d.avg+1.285*d.stddev;100<f&&(f=100);a=N.round([a,f],{strictBounds:!0});b=new O({valueExpression:b.valueExpression,stops:[{value:a[0],opacity:.15},{value:a[1],opacity:1}],legendOptions:{title:c.strengthOfPredominance}});c=new M({type:"opacity",minSliderValue:d.min,maxSliderValue:d.max});c=new G({visualVariables:[c]});return{visualVariable:b,statistics:d,defaultValuesUsed:e,authoringInfo:c}});return D.apply(this,
arguments)}function E(){E=m._asyncToGenerator(function*(a){a=yield V(a);var b=a.layer,c=(yield W({basemap:a.basemap,geometryType:b.geometryType,numColors:a.fields.length,predominanceScheme:a.predominanceScheme,worldScale:a.symbolType.includes("3d-volumetric"),view:a.view})).scheme,d=a.fields.map(h=>h.name);b=U.getPredominanceExpressions(b,d);d=X(a,b.predominantCategory,c,d);c=a.includeSizeVariable?ca(a,b.size,c.sizeScheme):null;a=a.includeOpacityVariable?da(a,b.opacity):null;const [e,f,k]=yield Promise.all([d,
c,a]);a=[];c=[];f&&(Array.prototype.push.apply(a,f.visualVariables.map(h=>h.clone())),delete f.sizeScheme,e.size=f,Array.prototype.push.apply(c,f.authoringInfo.visualVariables.map(h=>h.clone())));k&&(a.push(k.visualVariable.clone()),e.opacity=k,Array.prototype.push.apply(c,k.authoringInfo.visualVariables.map(h=>h.clone())));a.length&&(b=e.renderer.visualVariables||[],Array.prototype.push.apply(b,a),e.renderer.visualVariables=b,e.renderer.authoringInfo.visualVariables=c);return e});return E.apply(this,
arguments)}F.createRenderer=function(a){return E.apply(this,arguments)};Object.defineProperties(F,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});