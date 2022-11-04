/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as e}from"./maybe.js";import{c as r}from"./screenUtils.js";import{c as n}from"./vec2.js";import{d as t,a as o,s}from"./mathUtils.js";import{s as c}from"./vectorStacks.js";function i(e,n,t){return a(e,e.screenToRender(n,r(c.get())),t)}function a(o,s,i){const a=r(n(c.get(),s));if(a[2]=0,!o.unprojectFromRenderScreen(a,i.origin))return null;const m=r(n(c.get(),s));m[2]=1;const u=o.unprojectFromRenderScreen(m,c.get());return e(u)?null:(t(i.direction,u,i.origin),i)}function m(e,n,t){return u(e,e.screenToRender(n,r(c.get())),t)}function u(r,n,i){o(i.origin,r.eye);const a=s(c.get(),n[0],n[1],1),m=r.unprojectFromRenderScreen(a,c.get());return e(m)?null:(t(i.direction,m,i.origin),i)}export{i as a,m as b,u as c,a as f};
