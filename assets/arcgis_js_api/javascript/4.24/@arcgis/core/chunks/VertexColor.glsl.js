/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{g as o}from"./Material.js";import{V as r}from"./VertexAttribute.js";function e(e,d){d.hasVertexColors?(e.attributes.add(r.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(o`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(o`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(o`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}export{e as V};
