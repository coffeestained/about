/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{i as s}from"./maybe.js";import{N as t}from"./NestedMap.js";import{P as r}from"./Program.js";class e{constructor(s){this._rctx=s,this._store=new t}dispose(){this._store.forEach((s=>s.forEach((s=>s.dispose())))),this._store.clear()}acquire(t,e,o,a){const c=this._store.get(t,e);if(s(c))return c.ref(),c;const i=new r(this._rctx,t,e,o,a);return i.ref(),this._store.set(t,e,i),i}get test(){let s=0;return this._store.forEach((t=>t.forEach((t=>s+=t.hasGLName?2:1)))),{cachedWebGLObjects:s}}}export{e as P};
