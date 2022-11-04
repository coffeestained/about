/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{r,a as t,g as a}from"./mathUtils.js";import{g as n,s,m as o}from"./quat.js";import{d as u}from"./quatf64.js";function f(r=j){return[r[0],r[1],r[2],r[3]]}function i(r,a,n=f()){return t(n,r),n[3]=a,n}function c(t,a,u=f()){return s(d,t,p(t)),s(g,a,p(a)),o(d,g,d),i=u,c=r(n(u,d)),i[3]=c,i;var i,c}function e(r){return r}function m(r){return r[3]}function p(r){return a(r[3])}const j=[0,0,1,0],d=u(),g=u();f();export{c as a,e as b,f as c,p as d,m as e,i as f};
