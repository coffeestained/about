/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{symbolTypesRenderer as s,symbolTypesRenderer3D as e,symbolTypes as r}from"../symbols.js";import{c as o}from"../core/accessorSupport/decorators/subclass.js";import{write as t}from"../symbols/support/jsonUtils.js";import p from"../symbols/Symbol.js";import i from"../symbols/PolygonSymbol3D.js";const l={types:s,json:{write:{writer:t},origins:{"web-scene":{types:e,write:{writer:t},read:{reader:o({types:e})}}}}},y={types:{base:p,key:"type",typeMap:{"simple-fill":r.typeMap["simple-fill"],"picture-fill":r.typeMap["picture-fill"],"polygon-3d":r.typeMap["polygon-3d"]}},json:{write:{writer:t},origins:{"web-scene":{type:i,write:{writer:t}}}}};export{l as a,y as r};
