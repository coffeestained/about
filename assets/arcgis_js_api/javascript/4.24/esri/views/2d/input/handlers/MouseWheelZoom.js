// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/InputHandler"],function(g,k,d){d=function(h){function e(a,c){var b=h.call(this,!0)||this;b.view=a;b._canZoom=!0;b.registerIncoming("mouse-wheel",c,f=>b._handleMouseWheel(f));return b}k._inheritsLoose(e,h);e.prototype._handleMouseWheel=function(a){if(this.view.navigation.mouseWheelZoomEnabled&&(a.preventDefault(),a.stopPropagation(),this._canZoom)){var c=this.view.mapViewNavigation,{x:b,y:f,deltaY:l}=a.data;if(a=c.zoom(1/
.6**(1/60*l),[b,f]))this._canZoom=!1,a.catch(()=>{}).then(()=>{this._canZoom=!0;c.end()})}};return e}(d.InputHandler);g.MouseWheelZoom=d;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});