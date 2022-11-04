// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Error ../../../core/maybe ../../../intl/number ../../../renderers/support/rasterRendererHelper ../support/utils".split(" "),function(k,l,e,d,m,n,q){function r(a){return g.apply(this,arguments)}function g(){g=l._asyncToGenerator(function*(a){a=yield q.processRasterRendererParameters(a);const f=a.layer,{rasterInfo:b}=f;if(1<b.bandCount)throw new e("raster-class-breaks-renderer:not-supported","Multiband raster is not supported");
a.field||(a.field=d.isSome(b.attributeTable)?n.getField(b.attributeTable,"value").name:"value");if(!(d.isSome(b.attributeTable)&&b.attributeTable.fields.find(t=>t.name.toLowerCase()===a.field.toLowerCase())||d.isSome(b.histograms))&&(yield f.updateRasterInfoWithEstimatedStats({renderingRule:a.renderingRule,signal:a.signal}),d.isNone(b.histograms)))throw new e("raster-class-breaks-renderer:not-supported","Histograms or raster attribute table is required on the source raster. Unable to estimate histograms");
const {colors:c,numClasses:p}=a;if(c&&p&&c.length!==p)throw new e("raster-class-breaks-renderer:not-supported","The size of the `colors` parameter does not match 'numClasses'");a.classificationMethod||(a.classificationMethod="natural-breaks");return a});return g.apply(this,arguments)}function h(){h=l._asyncToGenerator(function*(a){a=yield r(a);a=n.createClassBreaksRenderer(a.layer.rasterInfo,a);if(d.isNone(a))throw new e("raster-class-breaks-renderer:not-supported","Class breaks renderer is not supported on this data");
const f={minValue:a.minValue,maxValue:a.classBreakInfos[a.classBreakInfos.length-1].maxValue,normalizationTotal:null,classBreakInfos:a.classBreakInfos.map(b=>{var c=b.maxValue;c=m.formatNumber(b.minValue,{maximumFractionDigits:3})+" - "+m.formatNumber(c,{maximumFractionDigits:3});b.label=c;return{minValue:b.minValue,maxValue:b.maxValue,label:c}})};return{renderer:a,classBreaksResult:f}});return h.apply(this,arguments)}k.createRenderer=function(a){return h.apply(this,arguments)};Object.defineProperties(k,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});