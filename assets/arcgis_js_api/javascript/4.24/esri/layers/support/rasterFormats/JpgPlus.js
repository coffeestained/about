// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["../../../chunks/Jpg","../../../chunks/Zlib"],function(q,r){return function(){function n(){}n.decode=function(a,e=!1){const k=new Uint8Array(a);a=new q.JpegImage;a.parse(k);const {width:f,height:g,numComponents:t,eof:p}=a;a=a.getData(f,g,!0);let l;const m=f*g;let b=0,h=0,d=0;if(!e&&p<k.length-1)try{var c=(new r.Zlib(k.subarray(p))).getBytes();l=new Uint8Array(m);for(b=e=0;b<c.length;b++)for(d=7;0<=d;d--)l[e++]=c[b]>>d&1}catch{}c=null;if(1===t&&a.length===f*g)c=[a,a,a];else{c=[];for(b=0;3>
b;b++)e=new Uint8Array(m),c.push(e);for(h=d=0;h<m;h++)for(b=0;3>b;b++)c[b][h]=a[d++]}return{width:f,height:g,pixels:c,mask:l}};return n}()});