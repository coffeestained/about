// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/has","../../../../core/floatRGBA","../../webgl-engine/lib/Texture","../../../webgl/enums"],function(h,E,C,D,n){function p(b,a=128,c=.5*a,d=0){switch(b){case "circle":return m(a,c);case "square":return q(a,c);case "cross":return r(a,c,d);case "x":return t(a,c,d);case "kite":return u(a,c);case "triangle":return v(a,c);case "arrow":return w(a,c);default:return m(a,c)}}function m(b,a){const c=b/2-.5;return k(b,x(c,c,a/2))}function q(b,a){return y(b,a,!1)}function u(b,
a){return y(b,a,!0)}function r(b,a,c=0){return z(b,a,!1,c)}function t(b,a,c=0){return z(b,a,!0,c)}function v(b,a){return k(b,A(b/2,a,a/2))}function w(b,a){const c=a/2,d=b/2,e=.8*a,f=x(d,(b-a)/2-e,Math.sqrt(e*e+c*c)),g=A(d,a,c);return k(b,(l,B)=>Math.max(g(l,B),-f(l,B)))}function y(b,a,c){c&&(a/=Math.SQRT2);return k(b,(d,e)=>{d=d-.5*b+.25;e=-e+.5*b-.75;if(c){const f=(d+e)/Math.SQRT2;e=(e-d)/Math.SQRT2;d=f}return Math.max(Math.abs(d),Math.abs(e))-.5*a})}function z(b,a,c,d=0){a-=d;c&&(a*=Math.SQRT2);
const e=.5*a;return k(b,(f,g)=>{f-=.5*b;g=-g+.5*b-1;if(c){const l=(f+g)/Math.SQRT2;g=(g-f)/Math.SQRT2;f=l}f=Math.abs(f);g=Math.abs(g);f=f>g?f>e?Math.sqrt((f-e)*(f-e)+g*g):g:g>e?Math.sqrt(f*f+(g-e)*(g-e)):f;return f-=d/2})}function x(b,a,c){return(d,e)=>{d-=b;e-=a;return Math.sqrt(d*d+e*e)-c}}function A(b,a,c){const d=Math.sqrt(a*a+c*c);return(e,f)=>{f=f-b+a/2+.75;return Math.max((a*(Math.abs(e-b)-c)+c*f)/d,-f)}}function k(b,a){const c=new Uint8Array(4*b*b);for(let d=0;d<b;d++)for(let e=0;e<b;e++){const f=
e+b*d;let g=a(e,d);g=g/b+.5;C.packFloatRGBA(g,c,4*f)}return c}h.DEFAULT_SYMBOL_SIZE_RATIO=.5;h.DEFAULT_TEX_SIZE=128;h.createArrow=w;h.createCircle=m;h.createCross=r;h.createKite=u;h.createPrimitive=p;h.createSquare=q;h.createTexture=function(b,a=128,c=.5*a,d=0){b=p(b,a,c,d);return new D.Texture(b,{mipmap:!1,wrap:{s:n.TextureWrapMode.CLAMP_TO_EDGE,t:n.TextureWrapMode.CLAMP_TO_EDGE},width:a,height:a,components:4,noUnpackFlip:!0})};h.createTriangle=v;h.createX=t;Object.defineProperties(h,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});