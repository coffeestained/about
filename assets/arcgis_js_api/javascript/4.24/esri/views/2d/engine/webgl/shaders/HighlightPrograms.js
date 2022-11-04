// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./sources/resolver"],function(b,a){const c={shaders:{vertexShader:a.resolveIncludes("highlight/textured.vert"),fragmentShader:a.resolveIncludes("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])};a={shaders:{vertexShader:a.resolveIncludes("highlight/textured.vert"),fragmentShader:a.resolveIncludes("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])};b.blur=a;b.highlight=c;Object.defineProperties(b,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});