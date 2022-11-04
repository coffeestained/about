/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{ignoreAbortErrors as t}from"../core/promiseUtils.js";import{w as e}from"../chunks/unitUtils.js";import{aliasOf as r}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import"../chunks/ensureType.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import p from"./Widget.js";import n from"./DistanceMeasurement2D/DistanceMeasurement2DViewModel.js";import{a as m}from"../chunks/accessibleHandler.js";import{m as a}from"../chunks/messageBundle.js";import{t as l}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import"../core/Error.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/maybe.js";import"../chunks/string.js";import"../chunks/jsonMap.js";import"../chunks/projectionEllipsoid.js";import"../geometry/SpatialReference.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/writer.js";import"../chunks/Ellipsoid.js";import"../intl.js";import"../chunks/number2.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../geometry/projection.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../chunks/mat4.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../chunks/pe.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/defaultUnit.js";import"../geometry.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/unitFormatUtils.js";import"../chunks/byteSizeEstimations.js";import"../chunks/Cyclical.js";import"../geometry/geometryEngine.js";import"../chunks/geometryEngineBase.js";import"../chunks/hydrated.js";import"../geometry/support/geodesicUtils.js";import"../layers/GraphicsLayer.js";import"../chunks/GraphicsCollection.js";import"../core/HandleOwner.js";import"../layers/Layer.js";import"../layers/mixins/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser2.js";import"../chunks/mat4f32.js";import"../chunks/_commonjsHelpers.js";import"../layers/mixins/ScaleRangeLayer.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/ViewingMode.js";import"../views/draw/Draw.js";import"../views/draw/MultipointDrawAction.js";import"../views/draw/DrawAction.js";import"../chunks/dehydratedFeatures.js";import"../chunks/quantizationUtils.js";import"../layers/support/Field.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/SnappingVisualizer2D.js";import"../chunks/vec2.js";import"../chunks/vec2f64.js";import"../chunks/enums2.js";import"../chunks/settings.js";import"../chunks/Settings2.js";import"../chunks/SnappingContext.js";import"../chunks/RightAngleSnappingHint.js";import"../chunks/PointSnappingHint.js";import"../chunks/EditGeometryOperations.js";import"../chunks/vec4f64.js";import"../chunks/plane.js";import"../chunks/sphere.js";import"../chunks/ray.js";import"../chunks/vectorStacks.js";import"../chunks/quatf64.js";import"../chunks/mat4f64.js";import"../chunks/mathUtils2.js";import"../chunks/geometry2dUtils.js";import"../chunks/SnappingOperation.js";import"../chunks/Scheduler.js";import"../chunks/debugFlags.js";import"../chunks/DrawEvents.js";import"../chunks/InputManager.js";import"../chunks/Queue.js";import"../chunks/keybindings.js";import"../chunks/screenUtils2.js";import"../views/draw/PointDrawAction.js";import"../chunks/DrawTool.js";import"../chunks/drawSurfaces.js";import"../chunks/quantityUtils.js";import"../chunks/dehydratedFeatureComparison.js";import"../chunks/elevationInfoUtils.js";import"../chunks/dragEventPipeline.js";import"../views/DOMContainer.js";import"./Popup.js";import"../chunks/throttle.js";import"./Feature.js";import"./Attachments.js";import"./Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./Feature/FeatureViewModel.js";import"../chunks/languageUtils.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../chunks/DataLayerSource.js";import"../chunks/executeQueryJSON.js";import"../chunks/utils5.js";import"../chunks/query.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/pbfQueryUtils.js";import"../chunks/pbf.js";import"../chunks/OptimizedGeometry.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/queryZScale.js";import"../rest/support/FeatureSet.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../rest/support/StatisticDefinition.js";import"../chunks/featureConversionUtils.js";import"../rest/support/RelationshipQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/compilerUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils2.js";import"../renderers/support/jsonUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../geometry/HeightModelInfo.js";import"../chunks/FeatureIndex.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"../layers/mixins/APIKeyMixin.js";import"../chunks/ArcGISService.js";import"../chunks/arcgisLayerUrl.js";import"../layers/mixins/CustomParametersMixin.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../chunks/OperationalLayer.js";import"../chunks/commonProperties.js";import"../support/timeUtils.js";import"../layers/mixins/OrderedLayer.js";import"../layers/mixins/PortalLayer.js";import"../chunks/asyncUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/TimeReference.js";import"../chunks/featureReductionUtils.js";import"../chunks/FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/AggregateField.js";import"../layers/support/OutStatistic.js";import"../layers/support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaultsJSON.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"../chunks/labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils.js";import"../support/popupUtils.js";import"../chunks/Heading.js";import"./support/widget.js";import"../chunks/vmEvent.js";import"../chunks/themeUtils.js";import"../chunks/utils13.js";import"../chunks/numberUtils.js";import"../chunks/utils6.js";import"../chunks/ItemCache.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils7.js";import"./Spinner/SpinnerViewModel.js";import"../chunks/AnchorElementViewModel.js";import"./Popup/PopupViewModel.js";import"../symbols/support/symbolUtils.js";import"../chunks/colorUtils2.js";import"../chunks/mat2df32.js";import"../chunks/layerViewUtils.js";import"../chunks/actions.js";import"./support/GoTo.js";import"../chunks/interfaces.js";import"../chunks/drawUtils.js";import"../views/interactive/sketch/SketchLabelOptions.js";import"../views/interactive/sketch/SketchTooltipOptions.js";import"../chunks/euclideanLengthMeasurementUtils.js";import"../chunks/measurementUtils2.js";import"../chunks/quantityFormatUtils.js";import"../chunks/euclideanAreaMeasurementUtils.js";import"../chunks/earcut.js";import"../chunks/triangle.js";import"../chunks/lineSegment.js";import"../views/draw/PolygonDrawAction.js";import"../views/draw/PolylineDrawAction.js";import"../views/draw/SegmentDrawAction.js";import"../chunks/surfaceCoordinateSystems.js";import"../chunks/mat2df64.js";import"../chunks/quat.js";import"../chunks/GraphicManipulator.js";import"../chunks/drapedUtils.js";import"../chunks/InteractiveToolViewModel.js";const u="esri-distance-measurement-2d",c={buttonDisabled:"esri-button--disabled",widgetIcon:"esri-icon-measure-line",base:`${u} esri-widget esri-widget--panel`,container:`${u}__container`,hint:`${u}__hint`,hintText:`${u}__hint-text`,panelError:`${u}__panel--error`,measurement:`${u}__measurement`,measurementItem:`${u}__measurement-item`,measurementItemDisabled:`${u}__measurement-item--disabled`,measurementItemTitle:`${u}__measurement-item-title`,measurementItemValue:`${u}__measurement-item-value`,settings:`${u}__settings`,units:`${u}__units`,unitsLabel:`${u}__units-label`,unitsSelect:`${u}__units-select esri-select`,unitsSelectWrapper:`${u}__units-select-wrapper`,actionSection:`${u}__actions`,newMeasurementButton:`${u}__clear-button esri-button esri-button--primary`};let j=class extends p{constructor(s,t){super(s,t),this.iconClass=c.widgetIcon,this.label=void 0,this.messages=null,this.messagesUnits=null,this.unit=null,this.unitOptions=null,this.view=null,this.viewModel=new n}render(){const{id:s,messages:t,messagesUnits:r,viewModel:o,visible:i}=this,{active:p,supported:n,measurementLabel:m,state:a,unit:u,unitOptions:j}=o,h="disabled"===a,d="measuring"===a||"measured"===a,y=p&&"ready"===a?l("section",{key:"hint",class:c.hint},l("p",{class:c.hintText},t.hint)):null,k=n?null:l("section",{key:"unsupported",class:c.panelError},l("p",null,t.unsupported)),b=d?l("section",{key:"measurement",class:c.measurement},((s,t,e)=>t?l("div",{key:`${e}-enabled`,class:c.measurementItem},l("span",{class:c.measurementItemTitle},s),l("span",{class:c.measurementItemValue},t)):l("div",{key:`${e}-disabled`,class:this.classes(c.measurementItem,c.measurementItemDisabled),"aria-disabled":"true"},l("span",{class:c.measurementItemTitle},s)))(t.distance,m,"distance")):null,g=`${s}-units`,S=d?l("section",{key:"units",class:c.units},l("label",{class:c.unitsLabel,for:g},t.unit),l("div",{class:c.unitsSelectWrapper},l("select",{class:c.unitsSelect,id:g,onchange:this._changeUnit,bind:this,value:u},j.map((s=>l("option",{key:s,value:s},e(s)?r.systems[s]:r.units[s]?.pluralCapitalized)))))):null,f=d?l("div",{key:"settings",class:c.settings},S):null,v=!n||p&&!d?null:l("div",{class:c.actionSection},l("button",{disabled:h,class:this.classes(c.newMeasurementButton,h&&c.buttonDisabled),bind:this,onclick:this._newMeasurement,title:t.newMeasurement,"aria-label":t.newMeasurement,type:"button"},t.newMeasurement)),U=i?l("div",{class:c.container},k,y,f,b,v):null;return l("div",{class:c.base},U)}_newMeasurement(){t(this.viewModel.start())}_changeUnit(s){const t=s.target,e=t.options[t.selectedIndex];e&&(this.viewModel.unit=e.value)}};s([r("viewModel.active")],j.prototype,"active",void 0),s([o()],j.prototype,"iconClass",void 0),s([o({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],j.prototype,"label",void 0),s([o()],j.prototype,"uiStrings",void 0),s([o(),a("esri/widgets/DistanceMeasurement2D/t9n/DistanceMeasurement2D")],j.prototype,"messages",void 0),s([o(),a("esri/core/t9n/Units")],j.prototype,"messagesUnits",void 0),s([r("viewModel.unit")],j.prototype,"unit",void 0),s([r("viewModel.unitOptions")],j.prototype,"unitOptions",void 0),s([r("viewModel.view")],j.prototype,"view",void 0),s([o({type:n})],j.prototype,"viewModel",void 0),s([r("viewModel.visible")],j.prototype,"visible",void 0),s([m()],j.prototype,"_newMeasurement",null),s([m()],j.prototype,"_changeUnit",null),j=s([i("esri.widgets.DistanceMeasurement2D")],j);const h=j;export{h as default};
