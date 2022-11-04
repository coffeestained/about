/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{F as e}from"./FeatureReduction.js";import t from"../layers/support/FeatureReductionBinning.js";import s from"../layers/support/FeatureReductionCluster.js";import o from"../layers/support/FeatureReductionSelection.js";const p={key:"type",base:e,typeMap:{selection:s}},r={types:{key:"type",base:e,typeMap:{selection:o,cluster:s,binning:t}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:p},"portal-item":{types:p},"web-scene":{types:{key:"type",base:e,typeMap:{selection:o}}}}}};export{r as f};
