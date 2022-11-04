/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{i as s}from"../../chunks/maybe.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import e from"../Slider/SliderViewModel.js";import{formatDateLabel as r,formatNumberLabel as n,getStopChanges as m}from"./support/utils.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/Accessor.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../chunks/number2.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/utils13.js";import"../../chunks/numberUtils.js";import"../../intl.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../core/JSONSupport.js";import"../../chunks/writer.js";import"../../chunks/utils6.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/asyncUtils.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser2.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/ItemCache.js";import"../../chunks/MemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";let p=class extends e{constructor(t){super(t),this._initialStopValues=[],this._max=null,this._min=null,this.hasTimeData=!1,this.inputFormatFunction=(t,s)=>"max"===s?this.getUnzoomedMax().toString():"min"===s?this.getUnzoomedMin().toString():t.toString(),this.inputParseFunction=null,this.labelFormatFunction=t=>{if(this.hasTimeData)return r(t);const{max:s,min:o,precision:i}=this,e=s-o>10?2:i;return n(parseFloat(t.toFixed(e)))},this.thumbsConstrained=!1,this.zoomingEnabled=!0}set breaks(t){this._set("breaks",t),this.notifyChange("max"),this.notifyChange("min")}set stops(t){if(t?.length){const{max:o,min:i}=this,e=this.getValuesFromStops(t),r={};s(i)&&e.some((t=>t<i))&&(r.min=Math.min(...e)),s(o)&&e.some((t=>t>o))&&(r.max=Math.max(...e)),this.set({...r}),this._initialStopValues=e}else this._initialStopValues=null;this._set("stops",t||null),this.notifyChange("values")}get labels(){const{values:t}=this,s=t&&t.length?t.map(((t,s)=>this.getLabelForValue(t,"value",s))):[],o=this.getUnzoomedMax(),i=this.getUnzoomedMin();return{max:this.getLabelForValue(o,"max"),min:this.getLabelForValue(i,"min"),values:s}}get max(){const{breaks:t}=this;return t?.length?t[t.length-1].max:this.max}set max(t){const{zoomOptions:o}=this;if(o&&s(o.max)){const s=this.values;let i=o.max;if(t<i&&(i=t,o.max=t),s&&s.length)for(let o=0;o<s.length;o++)t<s[o]&&this.setValue(o,t);this._storeZoomMax(i,t)}else this.updateBreakMax(t),this.setMax(t);this.notifyChange("labels")}get min(){const{breaks:t}=this;return t?.length?t[0].min:this.min}set min(t){const{zoomOptions:o}=this;if(o&&s(o.min)){const s=this.values;let i=o.min;if(t>i&&(i=t,o.min=t),s&&s.length)for(let o=0;o<s.length;o++)t>s[o]&&this.setValue(o,t);this._storeZoomMin(i,t)}else this.updateBreakMin(t),this.setMin(t);this.notifyChange("labels")}get state(){const{max:t,min:o,values:i}=this;return s(t)&&s(o)&&i.length>0?"ready":"disabled"}get values(){const{breaks:t,stops:s}=this;if(!t&&!s)return[];if(t?.length){const s=t.map((t=>t.max));return s.pop(),s}if(s?.length<2)return[];const o=this.getValuesFromStops();return[o[0],o[o.length-1]]}set zoomOptions(t){const{zoomingEnabled:o,zoomOptions:i}=this;if(o){if(i){const o=s(this._max)?this._max:this.max,i=s(this._min)?this._min:this.min;if(t){const{max:e,min:r}=t,n=s(e),m=s(r),p=m?t.min:i,l=m?i:null,a=n?t.max:o,u=n?o:null;this._storeZoomMin(p,l),this._storeZoomMax(a,u)}else this.setMax(o),this.setMin(i),this._min=null,this._max=null}else if(t){const{max:o,min:i}=t;s(i)&&this._storeZoomMin(t.min,this.min),s(o)&&this._storeZoomMax(t.max,this.max)}this._set("zoomOptions",t),this.notifyChange("max"),this.notifyChange("min")}}getStopIndexFromValueIndex(t){const{stops:s}=this,o=this.values[t];return 0===t?o<=this.values[1]?0:s.length-1:1===t?this.values[0]>=o?0:s.length-1:null}getStopChanges(t,s){const o=this.stops,i=this.getStopIndexFromValueIndex(t),e=this.getValuesFromStops();e[i]=s;const[r,n]=[e[0],e[e.length-1]].sort(((t,s)=>t>s?1:-1)),m=n-r,p=o.length-1;return e.map(((t,s)=>({index:s,value:this.toPrecision(r+s*m/p)})))}setValue(t,s){const{max:o,min:i,values:e}=this,r=e[t];if(isNaN(s)||r===s||s>o||s<i)return;e[t]=this.toPrecision(s),this._set("values",[...e]);const n=e.slice().sort(((t,s)=>t>s?1:-1)),p=n[0],l=n[n.length-1],a=m(p,l,this._initialStopValues);this.updateStops(a),this.updateBreaks(),this.notifyChange("labels")}getValuesFromStops(t){return(t||this.stops)?.map((t=>t.hasOwnProperty("ratio")?t.ratio:t.value))}updateBreaks(){const{breaks:t,values:o}=this;t?.length&&o.slice().sort(((t,s)=>t>s?1:-1)).forEach(((o,i)=>{t[i].max=o,s(t[i+1])&&(t[i+1].min=o)}))}updateBreakMax(t){const{breaks:o,max:i,min:e}=this;!isNaN(t)&&i!==t&&s(e)&&t>e&&o?.length&&(o[o.length-1].max=t)}updateBreakMin(t){const{breaks:o,max:i,min:e}=this;!isNaN(t)&&e!==t&&s(i)&&t<i&&o?.length&&(o[0].min=t)}updateStops(t){const{stops:s}=this,o=this.getValuesFromStops();if(o?.length){for(const s of t)o[s.index]=s.value;s.forEach(((t,s)=>{t.hasOwnProperty("ratio")?t.ratio=o[s]:t.value=o[s]}))}}getUnzoomedMax(){return this.zoomOptions&&s(this._max)?this._max:this.max}getUnzoomedMin(){return this.zoomOptions&&s(this._min)?this._min:this.min}_storeZoomMax(t,s){this._max=s,this.setMax(t)}_storeZoomMin(t,s){this._min=s,this.setMin(t)}};t([o()],p.prototype,"breaks",null),t([o()],p.prototype,"stops",null),t([o()],p.prototype,"hasTimeData",void 0),t([o()],p.prototype,"inputFormatFunction",void 0),t([o()],p.prototype,"inputParseFunction",void 0),t([o()],p.prototype,"labelFormatFunction",void 0),t([o({readOnly:!0})],p.prototype,"labels",null),t([o()],p.prototype,"max",null),t([o()],p.prototype,"min",null),t([o({readOnly:!0})],p.prototype,"state",null),t([o()],p.prototype,"thumbsConstrained",void 0),t([o({readOnly:!0})],p.prototype,"values",null),t([o()],p.prototype,"zoomingEnabled",void 0),t([o()],p.prototype,"zoomOptions",null),p=t([i("esri.widgets.smartMapping.SmartMappingSliderViewModel")],p);const l=p;export{l as default};
