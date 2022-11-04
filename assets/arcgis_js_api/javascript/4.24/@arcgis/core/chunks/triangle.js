/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{O as n}from"./vectorStacks.js";import{o as t,b as s,e as r,k as o,d as a,h as e}from"./mathUtils.js";import{c as i}from"./lineSegment.js";function c(n,r,o){const a=1e-5,{direction:e,origin:i}=r,{p0:c,p1:u,p2:p}=n,f=u[0]-c[0],l=u[1]-c[1],m=u[2]-c[2],b=p[0]-c[0],h=p[1]-c[1],j=p[2]-c[2],d=e[1]*j-h*e[2],g=e[2]*b-j*e[0],k=e[0]*h-b*e[1],w=f*d+l*g+m*k;if(w>-a&&w<a)return!1;const S=1/w,v=i[0]-c[0],x=i[1]-c[1],M=i[2]-c[2],O=S*(v*d+x*g+M*k);if(O<0||O>1)return!1;const U=x*m-l*M,q=M*f-m*v,y=v*l-f*x,z=S*(e[0]*U+e[1]*q+e[2]*y);return!(z<0||O+z>1||(o&&(t(o,e,S*(b*U+h*q+j*y)),s(o,i,o)),0))}function u(n,t,s){const r=t[0]-n[0],o=t[1]-n[1],a=s[0]-n[0],e=s[1]-n[1];return.5*Math.abs(r*e-o*a)}function p(n,t,s){return a(f,t,n),a(l,s,n),r(o(f,f,l))/2}new n(i),new n((()=>({p0:null,p1:null,p2:null})));const f=e(),l=e();export{p as a,u as b,c as i};
