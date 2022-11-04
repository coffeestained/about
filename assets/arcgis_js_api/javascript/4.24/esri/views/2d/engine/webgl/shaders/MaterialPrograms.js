// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./sources/resolver","../../../../webgl/programUtils"],function(h,k,n){h.createProgramTemplate=(d,e,p,a)=>{d+=d.substring(d.lastIndexOf("/"));e+=e.substring(e.lastIndexOf("/"));{const l={};for(const m in a){{let b=void 0;var c=m;b=""+c[0].toUpperCase();for(let g=1;g<c.length;g++){const f=c[g];f===f.toUpperCase()?(b+="_",b+=f):b+=f.toUpperCase()}c=b}l[c]=a[m]}a=n.glslifyDefineMap(l)}return{attributes:p,shaders:{vertexShader:a+k.resolveIncludes(`${d}.vert`),fragmentShader:a+k.resolveIncludes(`${e}.frag`)}}};
Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});