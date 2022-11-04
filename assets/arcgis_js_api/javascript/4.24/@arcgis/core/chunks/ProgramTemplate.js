/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{P as e}from"./Program.js";class r{constructor(e){this.readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,r=new Map){if(r.has(e))return r.get(e);const t=this._read(e);if(!t)throw new Error(`cannot find shader file ${e}`);const s=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let a=s.exec(t);const n=[];for(;null!=a;)n.push({path:a[1],start:a.index,length:a[0].length}),a=s.exec(t);let h=0,l="";return n.forEach((e=>{l+=t.slice(h,e.start),l+=r.has(e.path)?"":this._resolve(e.path,r),h=e.start+e.length})),l+=t.slice(h),r.set(e,l),l}_read(e){return this.readFile(e)}}function t(r,t,s=""){return new e(r,s+t.shaders.vertexShader,s+t.shaders.fragmentShader,t.attributes)}export{r as S,t as c};
