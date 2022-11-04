/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{D as t}from"./enums.js";import{V as e}from"./VertexElementDescriptor.js";function o(t,o=0){const n=t.stride;return t.fieldNames.filter((e=>{const o=t.fields.get(e).optional;return!(o&&o.glPadding)})).map((i=>{const s=t.fields.get(i),u=s.constructor.ElementCount,f=function(t){const e=r[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}(s.constructor.ElementType),l=s.offset,c=!(!s.optional||!s.optional.glNormalized);return new e(i,u,f,l,n,c,o)}))}const r={u8:t.UNSIGNED_BYTE,u16:t.UNSIGNED_SHORT,u32:t.UNSIGNED_INT,i8:t.BYTE,i16:t.SHORT,i32:t.INT,f32:t.FLOAT};export{o as g};
