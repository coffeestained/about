// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./FeatureReduction","./FeatureReductionBinning","./FeatureReductionCluster","./FeatureReductionSelection"],function(b,a,f,c,d){const e={key:"type",base:a.FeatureReduction,typeMap:{selection:c}};b.featureReductionProperty={types:{key:"type",base:a.FeatureReduction,typeMap:{selection:d,cluster:c,binning:f}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:e},"portal-item":{types:e},"web-scene":{types:{key:"type",base:a.FeatureReduction,
typeMap:{selection:d}}}}}};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});