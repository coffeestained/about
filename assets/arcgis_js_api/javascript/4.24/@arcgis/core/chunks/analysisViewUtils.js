/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as t,r as o}from"./maybe.js";import{createTask as i,onAbort as a}from"../core/promiseUtils.js";import{watch as e,syncAndInitial as n,whenOnce as s}from"../core/reactiveUtils.js";function r(t,e,n){const r=v(t,e);t.view.activeTool=r;let c=a(n,(()=>l(t,e)));return i((async i=>{await s((()=>!r.active),i),c=o(c),l(t,e)}),n)}function c(t,o){return e((()=>t.interactive),(()=>l(t,o)),n)}function l(t,o){t.interactive?v(t,o):m(t)}function v(t,o){m(t);const{view:i,analysis:a}=t,e=new o({view:i,analysis:a,analysisViewData:t});return t.tool=e,i.tools.add(e),e}function m(o){const{view:i,tool:a}=o;t(a)||(i.tools.remove(a),o.tool=null)}export{r as a,c,m as r};
