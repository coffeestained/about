// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","./BrushFlow","../webgl/enums","../webgl/WGLContainer"],function(d,f,g,h){return function(b){function c(){var a=b.apply(this,arguments)||this;a.flowStyle=null;return a}d._inheritsLoose(c,b);var e=c.prototype;e.doRender=function(a){b.prototype.doRender.call(this,a)};e.prepareRenderPasses=function(a){const k=a.registerRenderPass({name:"flow",brushes:[f],target:()=>this.children,drawPhase:g.WGLDrawPhase.MAP});return[...b.prototype.prepareRenderPasses.call(this,
a),k]};d._createClass(c,[{key:"requiresDedicatedFBO",get:function(){return!1}}]);return c}(h)});