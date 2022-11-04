// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Handles ../../../core/maybe ../../../core/reactiveUtils ./constants ./HoveredPoints ./InputRepresentation3D ./ProfileLines3D".split(" "),function(h,q,d,b,k,r,t,u){let w=function(){function l(e,c){this._handles=new q;this._inputRepresentation=new t.InputRepresentation3D({view:e});this._hoveredPoints=new r.HoveredPoints({view:e});this._profileLines=new u.ProfileLines3D({view:e});this._handles.add([b.watch(()=>c.viewModel.hoveredPoints,a=>this._hoveredPoints.update(a),b.syncAndInitial),
b.watch(()=>{const {state:a,editable:g,highlightEnabled:f,viewModel:v}=c,m=v.input;d.applySome(m,n=>{n.commitProperty("geometry");n.commitProperty("layer")});return{input:m,state:a,editable:g,highlightEnabled:f}},a=>this._updateInputRepresentation(a),b.syncAndInitial),b.watch(()=>c.viewModel.chartData,a=>this._profileLines.update(a),b.syncAndInitial),b.watch(()=>d.applySome(c.viewModel.input,a=>a.geometry),()=>{this._profileLines.remove()},b.syncAndInitial)])}var p=l.prototype;p.destroy=function(){this._handles=
d.destroyMaybe(this._handles);this._inputRepresentation=d.destroyMaybe(this._inputRepresentation);this._hoveredPoints=d.destroyMaybe(this._hoveredPoints);this._profileLines=d.destroyMaybe(this._profileLines)};p._updateInputRepresentation=function({input:e,state:c,editable:a,highlightEnabled:g}){const f=this._inputRepresentation;if(!g)return f.remove();c===k.ElevationProfileState.Selected?f.showHighlight(e):c!==k.ElevationProfileState.Created||a?f.remove():f.showReshaping(e)};return l}();h.ElevationProfileView3D=
w;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});