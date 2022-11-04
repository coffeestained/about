// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){let b=function(){this.elevation=0;this.normal=[0,0,1];this.cornerTiles=[null,null,null,null]},c=function(){this.edgeNeighbours=[null,null,null,null];this.cornerNeighborData=[new b,new b,new b,new b];this.edgeResolutions=[1,1,1,1];this.modifiedEdgeResolutions=[!1,!1,!1,!1]};a.CornerNeighborData=b;a.EdgeNeighborData=function(){};a.GeometryState=function(){this.numVerticesPerSide=0;this.clippingArea=this.samplerData=null;this.wireframe=!1;this.samplerDataVersion=0;this.neighborData=
new c};a.NeighborhoodData=c;Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});