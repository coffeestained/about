// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/interfaces","../../../lib/VertexAttribute"],function(a,c,d){a.PositionAttribute=function(b){b.attributes.add(d.VertexAttribute.POSITION,"vec3");b.vertex.code.add(c.glsl`vec3 positionModel() { return position; }`)};Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});