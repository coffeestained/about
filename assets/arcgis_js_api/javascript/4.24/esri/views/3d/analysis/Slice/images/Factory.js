// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./heading-rotate-png","./tilt-rotate-png","../../../webgl-engine/lib/Texture"],function(a,c,d,e){const f={mipmap:!0,preMultiplyAlpha:!0,width:64,height:64};a.getRotateHeadingTexture=function(b){return b.fromData(c,()=>new e.Texture(c,f))};a.getTiltRotateTexture=function(b){return b.fromData(d,()=>new e.Texture(d,f))};Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});