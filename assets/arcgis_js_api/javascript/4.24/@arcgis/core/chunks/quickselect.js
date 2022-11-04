/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var t,o,r={exports:{}};t=r,void 0!==(o=function(){function t(r,n,a,f,e){for(;f>a;){if(f-a>600){var h=f-a+1,i=n-a+1,u=Math.log(h),M=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*M*(h-M)/h)*(i-h/2<0?-1:1);t(r,n,Math.max(a,Math.floor(n-i*M/h+c)),Math.min(f,Math.floor(n+(h-i)*M/h+c)),e)}var s=r[n],x=a,p=f;for(o(r,a,n),e(r[f],s)>0&&o(r,a,f);x<p;){for(o(r,x,p),x++,p--;e(r[x],s)<0;)x++;for(;e(r[p],s)>0;)p--}0===e(r[a],s)?o(r,a,p):o(r,++p,f),p<=n&&(a=p+1),n<=p&&(f=p-1)}}function o(t,o,r){var n=t[o];t[o]=t[r],t[r]=n}function r(t,o){return t<o?-1:t>o?1:0}return function(o,n,a,f,e){t(o,n,a||0,f||o.length-1,e||r)}}())&&(t.exports=o);const n=r.exports;export{n as q};
