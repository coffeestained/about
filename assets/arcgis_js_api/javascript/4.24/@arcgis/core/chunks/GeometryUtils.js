/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const n=Number.POSITIVE_INFINITY,t=Math.PI,a=2*t,r=128/t,s=t/180,u=1/Math.LN2;function o(n,t){return(n%=t)>=0?n:n+t}function c(n){return o(n*r,256)}function e(n){return Math.log(n)*u}function I(n,t,a){return n*(1-a)+t*a}export{s as C,t as a,n as b,a as c,I as i,e as l,o as p,c as r};
