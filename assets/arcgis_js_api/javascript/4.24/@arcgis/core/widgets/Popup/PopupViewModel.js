/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../geometry.js";import t from"../../Graphic.js";import"../../symbols.js";import s from"../../core/Collection.js";import r from"../../core/Error.js";import o from"../../core/Handles.js";import{L as i}from"../../chunks/Logger.js";import{u as n,a}from"../../chunks/maybe.js";import{watch as l,when as p,sync as u}from"../../core/reactiveUtils.js";import{property as m}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as c}from"../../core/accessorSupport/decorators/subclass.js";import{geographicToWebMercator as h}from"../../geometry/support/webMercatorUtils.js";import d from"../../layers/Layer.js";import j from"../../support/actions/ActionBase.js";import g from"../../support/actions/ActionButton.js";import y from"../../support/actions/ActionToggle.js";import{getDisplayedSymbol as f}from"../../symbols/support/symbolUtils.js";import{V as b}from"../../chunks/InputManager.js";import{h as w}from"../../chunks/layerViewUtils.js";import v from"../Feature/FeatureViewModel.js";import{z as F,a as C,b as k,r as P}from"../../chunks/actions.js";import{throwIfNotAbortError as _}from"../../core/promiseUtils.js";import{A as S}from"../../chunks/AnchorElementViewModel.js";import{GoToMixin as I}from"../support/GoTo.js";import M from"../../symbols/SimpleFillSymbol.js";import E from"../../geometry/Point.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../config.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number2.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/Identifiable.js";import"../../core/Clonable.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/utils6.js";import"../../chunks/asyncUtils.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser2.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/assets.js";import"../../chunks/ItemCache.js";import"../../chunks/MemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../chunks/colorUtils2.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/mat2df32.js";import"../../chunks/jsxFactory.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/Queue.js";import"../../chunks/throttle.js";import"../Attachments/AttachmentsViewModel.js";import"../../rest/query/support/AttachmentInfo.js";import"../../rest/support/AttachmentQuery.js";import"../../intl.js";import"../../chunks/messages.js";import"../../core/HandleOwner.js";import"../../chunks/languageUtils.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/DataLayerSource.js";import"../../chunks/executeQueryJSON.js";import"../../chunks/utils5.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedGeometry.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/FeatureSet.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/featureConversionUtils.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../layers/FeatureLayer.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties2.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../renderers/DictionaryRenderer.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../renderers/DotDensityRenderer.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../chunks/vec4f64.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils2.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/MultiOriginJSONSupport.js";import"../../core/sql.js";import"../../form/FormTemplate.js";import"../../form/ExpressionInfo.js";import"../../form/elements/GroupElement.js";import"../../form/elements/Element.js";import"../../form/support/elements.js";import"../../form/elements/FieldElement.js";import"../../form/elements/support/inputs.js";import"../../form/elements/inputs/BarcodeScannerInput.js";import"../../form/elements/inputs/TextInput.js";import"../../form/elements/inputs/Input.js";import"../../form/elements/inputs/ComboBoxInput.js";import"../../form/elements/inputs/DateTimePickerInput.js";import"../../form/elements/inputs/RadioButtonsInput.js";import"../../form/elements/inputs/SwitchInput.js";import"../../form/elements/inputs/TextAreaInput.js";import"../../form/elements/inputs/TextBoxInput.js";import"../../geometry/HeightModelInfo.js";import"../../chunks/FeatureIndex.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../core/workers/RemoteClient.js";import"../../layers/mixins/APIKeyMixin.js";import"../../chunks/ArcGISService.js";import"../../chunks/arcgisLayerUrl.js";import"../../layers/mixins/BlendLayer.js";import"../../layers/mixins/CustomParametersMixin.js";import"../../layers/mixins/FeatureEffectLayer.js";import"../../layers/support/FeatureEffect.js";import"../../layers/support/FeatureFilter.js";import"../../chunks/OperationalLayer.js";import"../../chunks/commonProperties.js";import"../../support/timeUtils.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../layers/mixins/OrderedLayer.js";import"../../layers/mixins/PortalLayer.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../layers/mixins/RefreshableLayer.js";import"../../layers/mixins/ScaleRangeLayer.js";import"../../layers/mixins/TemporalLayer.js";import"../../TimeInterval.js";import"../../layers/support/TimeInfo.js";import"../../layers/support/TimeReference.js";import"../../chunks/featureReductionUtils.js";import"../../chunks/FeatureReduction.js";import"../../layers/support/FeatureReductionBinning.js";import"../../layers/support/AggregateField.js";import"../../layers/support/OutStatistic.js";import"../../layers/support/LabelClass.js";import"../../chunks/labelUtils.js";import"../../chunks/defaultsJSON.js";import"../../layers/support/FeatureReductionCluster.js";import"../../layers/support/FeatureReductionSelection.js";import"../../layers/support/FeatureTemplate.js";import"../../layers/support/FeatureType.js";import"../../chunks/fieldProperties.js";import"../../layers/support/FieldsIndex.js";import"../../layers/support/GeometryFieldsInfo.js";import"../../chunks/labelingInfo.js";import"../../layers/support/LayerFloorInfo.js";import"../../layers/support/Relationship.js";import"../../chunks/versionUtils.js";import"../../chunks/styleUtils.js";import"../../support/popupUtils.js";const L=i.getLogger("esri.widgets.Popup.PopupViewModel");function V(e){const{selectedFeature:t,location:s,view:r}=e;return r?"3d"===r.type?t||s:e.get("selectedFeature.geometry")||s:null}function x(e){return e?.isAggregate&&"cluster"===e?.sourceLayer?.featureReduction?.type}const U=s.ofType({key:"type",defaultKeyValue:"button",base:j,typeMap:{button:g,toggle:y}}),A=i.getLogger("esri.widgets.Popup.PopupViewModel");let O=class extends(I(S)){constructor(e){super(e),this._handles=new o,this._pendingPromises=new Set,this._fetchFeaturesController=null,this._selectedClusterFeature=null,this.featurePage=null,this.actions=new U,this.activeFeature=null,this.defaultPopupTemplateEnabled=!1,this.autoCloseEnabled=!1,this.autoOpenEnabled=!0,this.browseClusterEnabled=!1,this.content=null,this.featuresPerPage=20,this.featureViewModelAbilities=null,this.featureViewModels=[],this.highlightEnabled=!0,this.includeDefaultActions=!0,this.selectedClusterBoundaryFeature=new t({symbol:new M({outline:{width:1.5,color:"cyan"},style:"none"})}),this.title=null,this.updateLocationEnabled=!1,this.view=null,this.visible=!1,this.zoomFactor=4,this.zoomToLocation=null}get isLoadingFeature(){return this.featureViewModels.some((e=>e.waitingForContent))}initialize(){this._handles.add([l((()=>[this.autoOpenEnabled,this.view]),(()=>this._autoOpenEnabledChange())),this.on("view-change",(()=>this._autoClose())),l((()=>[this.highlightEnabled,this.selectedFeature,this.visible,this.view]),(()=>this._highlightSelectedFeature())),l((()=>[this.highlightEnabled,this.activeFeature,this.visible,this.view]),(()=>this._highlightActiveFeature())),l((()=>this.view?.animation?.state),(e=>this._animationStateChange(e))),l((()=>this.location),(e=>this._locationChange(e))),l((()=>this.selectedFeature),(e=>this._selectedFeatureChange(e))),l((()=>[this.selectedFeatureIndex,this.featureCount,this.featuresPerPage]),(()=>this._selectedFeatureIndexChange())),l((()=>[this.featurePage,this.selectedFeatureIndex,this.featureCount,this.featuresPerPage,this.featureViewModels]),(()=>this._setGraphicOnFeatureViewModels())),l((()=>this.featureViewModels),(()=>this._featureViewModelsChange())),this.on("trigger-action",(e=>(e=>{const{event:t,view:s}=e,{action:o}=t,i=s&&s.popup;if(!o)return Promise.reject(new r("trigger-action:missing-arguments","Event has no action"));if(!i)return Promise.reject(new r("trigger-action:missing-arguments","view.popup is missing"));const{disabled:n,id:a}=o;if(!a)return Promise.reject(new r("trigger-action:invalid-action","action.id is missing"));if(n)return Promise.reject(new r("trigger-action:invalid-action","Action is disabled"));if(a===F.id)return async function(e){const{location:t,selectedFeature:s,view:o,zoomFactor:i}=e,n=V(e);if(!n){const e=new r("zoom-to:invalid-target-or-view","Cannot zoom to location without a target and view.",{target:n,view:o});throw L.error(e),e}const a=o.scale/i,l=e.get("selectedFeature.geometry")||t,p=l&&"point"===l.type&&function(e,t){if("3d"!==t?.type||!e||"esri.Graphic"!==e.declaredClass)return!0;const s=t.getViewForGraphic(e);if(s&&"whenGraphicBounds"in s){let t=!1;return s.whenGraphicBounds(e,{useViewElevation:!0}).then((e=>{t=!e||!e.boundingBox||e.boundingBox[0]===e.boundingBox[3]&&e.boundingBox[1]===e.boundingBox[4]&&e.boundingBox[2]===e.boundingBox[5]})).catch((()=>{const t=new r("zoom-to:invalid-graphic","Could not zoom to the location of the graphic.",{graphic:e});L.error(t)})),t}return!0}(s,o);F.active=!0,F.disabled=!0;try{await e.view.goTo({target:n,scale:p?a:void 0})}finally{F.active=!1,F.disabled=!1,e.zoomToLocation=null,p&&(e.location=l)}}(i.viewModel).catch(_);if(a===C.id)return async function(e){const{selectedFeature:t,view:s}=e;if("2d"!==s?.type){const e=new r("zoomToCluster:invalid-view","View must be 2d MapView.",{view:s});throw L.error(e),e}if(!x(t)){const e=new r("zoomToCluster:invalid-selectedFeature","Selected feature must represent an aggregate/cluster graphic.",{selectedFeature:t});throw L.error(e),e}const o=t.sourceLayer,i=await s.whenLayerView(o),n=i.createQuery();n.aggregateIds=[t.getObjectId()],C.active=!0,C.disabled=!0;const{extent:a}=await i.queryExtent(n);await s.goTo({target:a}),C.active=!1,C.disabled=!1}(i.viewModel);if(a===k.id)return i.featureMenuOpen=!i.featureMenuOpen,i.viewModel.browseClusterEnabled=!i.viewModel.browseClusterEnabled,Promise.resolve();if(i.viewModel.browseClusterEnabled=!1,a===P.id){i.close();const{selectedFeature:e}=i;if(!e)return Promise.reject(new r(`trigger-action:${P.id}`,"selectedFeature is required",{selectedFeature:e}));const{sourceLayer:t}=e;return t?t.remove(e):s.graphics.remove(e),Promise.resolve()}return Promise.resolve()})({event:e,view:this.view}))),p((()=>!this.waitingForResult),(()=>this._waitingForResultChange()),u),l((()=>[this.features,this.view?.map,this.view?.spatialReference]),(()=>this._updateFeatureVMs())),l((()=>this.view?.scale),(()=>this._viewScaleChange())),p((()=>!this.visible),(()=>this.browseClusterEnabled=!1)),l((()=>this.browseClusterEnabled),(e=>e?this.enableClusterBrowsing():this.disableClusterBrowsing()))])}destroy(){this._cancelFetchingFeatures(),this._handles.destroy(),this._handles=null,this._pendingPromises.clear(),this.browseClusterEnabled=!1,this.view=null}get active(){return!(!this.visible||this.waitingForResult)}get allActions(){const e=this._get("allActions")||new U;e.removeAll();const{actions:t,defaultActions:s,defaultPopupTemplateEnabled:r,includeDefaultActions:o,selectedFeature:i}=this,n=o?s.concat(t):t,a=i&&("function"==typeof i.getEffectivePopupTemplate&&i.getEffectivePopupTemplate(r)||i.popupTemplate),l=a&&a.actions,p=a&&a.overwriteActions?l:l?l.concat(n):n;return p&&p.filter(Boolean).forEach((t=>e.add(t))),e}get defaultActions(){const e=this._get("defaultActions")||new U;return e.removeAll(),e.addMany(x(this.selectedFeature)?[C.clone(),k.clone()]:[F.clone()]),e}get featureCount(){return this.features.length}get features(){return this._get("features")||[]}set features(e){const t=e||[];this._set("features",t);const{pendingPromisesCount:s,promiseCount:r,selectedFeatureIndex:o}=this,i=r&&t.length;i&&s&&-1===o?this.selectedFeatureIndex=0:i&&-1!==o||(this.selectedFeatureIndex=t.length?0:-1)}get location(){return this._get("location")||null}set location(e){const t=this.get("view.spatialReference.isWebMercator");e&&e.get("spatialReference.isWGS84")&&t&&(e=h(e)),this._set("location",e)}get pendingPromisesCount(){return this._pendingPromises.size}get waitingForResult(){return!(!(this._fetchFeaturesController||this.pendingPromisesCount>0)||0!==this.featureCount)}get promiseCount(){return this.promises.length}get promises(){return this._get("promises")||[]}set promises(e){if(this._pendingPromises.clear(),this.features=[],!Array.isArray(e)||!e.length)return this._set("promises",[]),void this.notifyChange("pendingPromisesCount");this._set("promises",e),(e=e.slice(0)).forEach((e=>{this._pendingPromises.add(e),e.then((t=>{this._pendingPromises.has(e)&&this._updateFeatures(t),this._updatePendingPromises(e)}),(()=>this._updatePendingPromises(e)))})),this.notifyChange("pendingPromisesCount")}get selectedFeature(){const{features:e,selectedFeatureIndex:t}=this;return-1===t?null:e[t]||null}get selectedFeatureIndex(){const e=this._get("selectedFeatureIndex");return"number"==typeof e?e:-1}set selectedFeatureIndex(e){const{featureCount:t}=this;e=isNaN(e)||e<-1||!t?-1:(e+t)%t,this.activeFeature=null,this._set("selectedFeatureIndex",e)}get selectedFeatureViewModel(){return this.featureViewModels[this.selectedFeatureIndex]||null}get state(){return this.get("view.ready")?"ready":"disabled"}centerAtLocation(){const{view:e}=this,t=V(this);if(!t){const s=new r("center-at-location:invalid-target-or-view","Cannot center at a location without a target and view.",{target:t,view:e});return A.error(s),Promise.reject(s)}return this.callGoTo({target:{target:t,scale:e.scale}})}clear(){this.set({promises:[],features:[],content:null,title:null,location:null,activeFeature:null})}fetchFeatures(e,t){const{view:s}=this;if(!s||!e){const t=new r("fetch-features:invalid-screenpoint-or-view","Cannot fetch features without a screenPoint and view.",{screenPoint:e,view:s});return A.error(t),Promise.reject(t)}return s.fetchPopupFeatures(e,{event:t&&t.event,defaultPopupTemplateEnabled:this.defaultPopupTemplateEnabled,signal:t&&t.signal})}open(e){const t={updateLocationEnabled:!1,promises:[],fetchFeatures:!1,...e,visible:!0},{fetchFeatures:s}=t;delete t.fetchFeatures,s&&this._setFetchFeaturesPromises(t.location);const r=["actionsMenuOpen","collapsed","featureMenuOpen"];for(const e of r)delete t[e];this.set(t)}triggerAction(e){const t=this.allActions.getItemAt(e);t&&!t.disabled&&this.emit("trigger-action",{action:t})}next(){return this.selectedFeatureIndex=this.selectedFeatureIndex+1,this}previous(){return this.selectedFeatureIndex=this.selectedFeatureIndex-1,this}disableClusterBrowsing(){!function(e){const t=e.features.filter((e=>x(e)));t.length&&(e.features=t)}(this),this._clearBrowsedClusterGraphics()}async enableClusterBrowsing(){const{view:e,selectedFeature:t}=this;"2d"===e?.type?x(t)?(await async function(e){const{selectedFeature:t,view:s}=e,r=t.sourceLayer,o=await s.whenLayerView(r),i=o.createQuery();i.aggregateIds=[t.getObjectId()];const{extent:n}=await o.queryExtent(i);e.selectedClusterBoundaryFeature.geometry=n,s.graphics.add(e.selectedClusterBoundaryFeature)}(this),await async function(e){const{selectedFeature:t,view:s}=e,r=t.sourceLayer,o=await s.whenLayerView(r),i=o.createQuery();i.aggregateIds=[t.getObjectId()],k.active=!0,k.disabled=!0;const{features:n}=await o.queryFeatures(i);k.active=!1,k.disabled=!1,s.popup.open({features:[t].concat(n),featureMenuOpen:!0})}(this)):A.warn("enableClusterBrowsing:invalid-selectedFeature: Selected feature must represent an aggregate/cluster graphic.",t):A.warn("enableClusterBrowsing:invalid-view: View must be 2d MapView.",t)}_animationStateChange(e){this.zoomToLocation||(F.disabled="waiting-for-target"===e)}_clearBrowsedClusterGraphics(){const e=this.view?.graphics;e&&(e.remove(this.selectedClusterBoundaryFeature),e.remove(this._selectedClusterFeature)),this._selectedClusterFeature=null,this.selectedClusterBoundaryFeature.geometry=null}_viewScaleChange(){if(x(this.selectedFeature))return this.browseClusterEnabled=!1,this.visible=!1,void this.clear();this.browseClusterEnabled&&(this.features=[this.selectedFeature])}_locationChange(e){const{selectedFeature:t,updateLocationEnabled:s}=this;s&&e&&(!t||t.geometry)&&this.centerAtLocation()}_selectedFeatureIndexChange(){this.featurePage=this.featureCount>1?Math.floor(this.selectedFeatureIndex/this.featuresPerPage)+1:null}_featureViewModelsChange(){this.featurePage=this.featureCount>1?1:null}_setGraphicOnFeatureViewModels(){const{features:e,featureCount:t,featurePage:s,featuresPerPage:r,featureViewModels:o}=this;if(null===s)return;const i=((s-1)*r+t)%t,n=i+r;o.slice(i,n).forEach(((t,s)=>{t&&!t.graphic&&(t.graphic=e[i+s])}))}async _selectedFeatureChange(e){if(!e)return;const{location:t,updateLocationEnabled:s,view:r}=this;if(this.browseClusterEnabled){if(this._selectedClusterFeature&&(r.graphics.remove(this._selectedClusterFeature),this._selectedClusterFeature=null),x(e))return;return e.symbol=await f(e),this._selectedClusterFeature=e,void r.graphics.add(this._selectedClusterFeature)}!s&&t||!e.geometry?s&&!e.geometry&&this.centerAtLocation().then((()=>{this.location=r.center.clone()})):this.location=n(this._getPointFromGeometry(e.geometry))}_waitingForResultChange(){!this.featureCount&&this.promises&&(this.visible=!1)}_setFetchFeaturesPromises(e){return this._fetchFeaturesWithController(this._getScreenPoint(e||this.location)).then((e=>{const{clientOnlyGraphics:t,promisesPerLayerView:s}=e,r=Promise.resolve(t),o=s.map((e=>e.promise));this.promises=[r,...o]}))}_destroyFeatureVMs(){this.featureViewModels.forEach((e=>e&&!e.destroyed&&e.destroy())),this._set("featureViewModels",[])}_updateFeatureVMs(){const{selectedFeature:e,features:t,featureViewModels:s}=this;if(x(e)||(this.browseClusterEnabled=!1),this._destroyFeatureVMs(),!t||!t.length)return;const r=s.slice(0),o=[];t.forEach(((t,s)=>{if(!t)return;let i=null;if(r.some(((e,s)=>(e&&e.graphic===t&&(i=e,r.splice(s,1)),!!i))),i)o[s]=i;else{const r=new v({abilities:this.featureViewModelAbilities,defaultPopupTemplateEnabled:this.defaultPopupTemplateEnabled,spatialReference:this.view?.spatialReference,graphic:t===e?t:null,map:this.view?.map,view:this.view});o[s]=r}})),r.forEach((e=>e&&!e.destroyed&&e.destroy())),this._set("featureViewModels",o)}_getScreenPoint(e){const{view:t}=this;return t&&e&&"function"==typeof t.toScreen?t.toScreen(e):null}_autoOpenEnabledChange(){const e="auto-fetch-features",{_handles:t,autoOpenEnabled:s}=this;if(t.remove(e),s&&this.view){const s=this.view.on("click",(e=>{"mouse"===e.pointerType&&0!==e.button||this._fetchFeaturesAndOpen(e)}),b.WIDGET);t.add(s,e)}}_cancelFetchingFeatures(){const e=this._fetchFeaturesController;e&&e.abort(),this._fetchFeaturesController=null,this.notifyChange("waitingForResult")}_fetchFeaturesWithController(e,t){this._cancelFetchingFeatures();const s=new AbortController,{signal:r}=s;this._fetchFeaturesController=s,this.notifyChange("waitingForResult");const o=this.fetchFeatures(e,{signal:r,event:t});return o.catch((()=>{})).then((()=>{this._fetchFeaturesController=null,this.notifyChange("waitingForResult")})),o}_fetchFeaturesAndOpen(e){const{screenPoint:t,mapPoint:s}=e,{view:r}=this;this._fetchFeaturesWithController(t,e).then((e=>{const{clientOnlyGraphics:t,promisesPerLayerView:o,location:i}=e,n=[Promise.resolve(t),...o.map((e=>e.promise))];return r.popup.open({location:i||s,promises:n}),e}))}_updatePendingPromises(e){e&&this._pendingPromises.has(e)&&(this._pendingPromises.delete(e),this.notifyChange("pendingPromisesCount"))}_autoClose(){this.autoCloseEnabled&&(this.visible=!1)}_getPointFromGeometry(e){return a(e)?null:"point"===e.type?e:"extent"===e.type?e.center:"polygon"===e.type?e.centroid:"multipoint"===e.type||"polyline"===e.type?e.extent.center:null}async _getLayerView(e,t){return await e.when(),e.whenLayerView(t)}_getHighlightLayer(e){const{layer:t,sourceLayer:s}=e;return"map-notes"===s?.type||"subtype-group"===s?.type?s:t}_getHighlightTarget(e,t){const s="imagery"===t.type?void 0:"objectIdField"in t&&t.objectIdField,r=e.attributes;return r&&s&&r[s]||e}async _highlightActiveFeature(){const e="highlight-active-feature";this._handles.remove(e);const{highlightEnabled:t,view:s,activeFeature:r,visible:o}=this;if(!(r&&s&&t&&o))return;const i=this._getHighlightLayer(r);if(!(i&&i instanceof d))return;const n=this._getLayerView(s,i);this._highlightActiveFeaturePromise=n;const a=await n;if(!(a&&w(a)&&this._highlightActiveFeaturePromise===n&&this.activeFeature&&this.highlightEnabled))return;const l=a.highlight(this._getHighlightTarget(r,i));this._handles.add(l,e)}async _highlightSelectedFeature(){const e="highlight-selected-feature";this._handles.remove(e);const{selectedFeature:t,highlightEnabled:s,view:r,visible:o}=this;if(!(t&&r&&s&&o))return;const i=this._getHighlightLayer(t);if(!(i&&i instanceof d))return;const n=this._getLayerView(r,i);this._highlightSelectedFeaturePromise=n;const a=await n;if(!(a&&w(a)&&this._highlightSelectedFeaturePromise===n&&this.selectedFeature&&this.highlightEnabled&&this.visible))return;const l=a.highlight(this._getHighlightTarget(t,i));this._handles.add(l,e)}_updateFeatures(e){const{features:t}=this;if(!e||!e.length)return;if(!t.length)return void(this.features=e);const s=e.filter((e=>!t.includes(e)));this.features=t.concat(s)}};e([m()],O.prototype,"featurePage",void 0),e([m()],O.prototype,"isLoadingFeature",null),e([m({type:U})],O.prototype,"actions",void 0),e([m({readOnly:!0})],O.prototype,"active",null),e([m()],O.prototype,"activeFeature",void 0),e([m({readOnly:!0})],O.prototype,"allActions",null),e([m({type:Boolean})],O.prototype,"defaultPopupTemplateEnabled",void 0),e([m()],O.prototype,"autoCloseEnabled",void 0),e([m()],O.prototype,"autoOpenEnabled",void 0),e([m()],O.prototype,"browseClusterEnabled",void 0),e([m()],O.prototype,"content",void 0),e([m({type:U,readOnly:!0})],O.prototype,"defaultActions",null),e([m({readOnly:!0})],O.prototype,"featureCount",null),e([m()],O.prototype,"features",null),e([m()],O.prototype,"featuresPerPage",void 0),e([m()],O.prototype,"featureViewModelAbilities",void 0),e([m({readOnly:!0})],O.prototype,"featureViewModels",void 0),e([m()],O.prototype,"highlightEnabled",void 0),e([m()],O.prototype,"includeDefaultActions",void 0),e([m({type:E})],O.prototype,"location",null),e([m({readOnly:!0})],O.prototype,"pendingPromisesCount",null),e([m({readOnly:!0})],O.prototype,"selectedClusterBoundaryFeature",void 0),e([m({readOnly:!0})],O.prototype,"waitingForResult",null),e([m({readOnly:!0})],O.prototype,"promiseCount",null),e([m()],O.prototype,"promises",null),e([m({value:null,readOnly:!0})],O.prototype,"selectedFeature",null),e([m({value:-1})],O.prototype,"selectedFeatureIndex",null),e([m({readOnly:!0})],O.prototype,"selectedFeatureViewModel",null),e([m({readOnly:!0})],O.prototype,"state",null),e([m()],O.prototype,"title",void 0),e([m()],O.prototype,"updateLocationEnabled",void 0),e([m()],O.prototype,"view",void 0),e([m()],O.prototype,"visible",void 0),e([m()],O.prototype,"zoomFactor",void 0),e([m()],O.prototype,"zoomToLocation",void 0),e([m()],O.prototype,"centerAtLocation",null),O=e([c("esri.widgets.Popup.PopupViewModel")],O);const R=O;export{R as default};
