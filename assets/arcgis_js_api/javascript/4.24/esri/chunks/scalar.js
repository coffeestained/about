// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){function f(c,b,a){const d=c.typedBuffer;c=c.typedBufferStride;const m=b.typedBuffer,g=b.typedBufferStride;b=a?a.count:b.count;let h=(a&&a.dstIndex?a.dstIndex:0)*c;a=(a&&a.srcIndex?a.srcIndex:0)*g;for(let k=0;k<b;++k)d[h]=m[a],h+=c,a+=g}function l(c,b){const a=c.count;b||(b=new c.TypedArrayConstructor(a));for(let d=0;d<a;d++)b[d]=c.get(d);return b}const n=Object.freeze(Object.defineProperty({__proto__:null,copy:f,makeDense:l},Symbol.toStringTag,{value:"Module"}));e.copy=
f;e.makeDense=l;e.scalar=n});