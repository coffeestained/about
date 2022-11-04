// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ./Projection.glsl ../terrain/TileComposite.glsl ../../shaderModules/BooleanPassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform".split(" "),function(d,g,h,e,f,k,l){e=function(b){function a(m,n,p){var c=b.call(this)||this;c.common=m;c.u_image=n;c.u_transformGrid=p;return c}g._inheritsLoose(a,b);return a}(e.TileCompositePassParameters);d.Common=function(b){b.include(h.Projection);b.fragment.uniforms.add([new l.Texture2DPassUniform("u_image",
a=>a.u_image),new f.BooleanPassUniform("u_flipY",a=>a.common.u_flipY),new f.BooleanPassUniform("u_applyTransform",a=>a.common.u_applyTransform)]);b.fragment.code.add(k.glsl`vec2 getPixelLocation(vec2 coords) {
vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
if (!u_applyTransform) {
return targetLocation;
}
return projectPixelLocation(targetLocation);
}
bool isOutside(vec2 coords){
if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
return true;
} else {
return false;
}
}
vec4 getPixel(vec2 pixelLocation) {
return texture2D(u_image, pixelLocation);
}`)};d.CommonPassParameters=e;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});