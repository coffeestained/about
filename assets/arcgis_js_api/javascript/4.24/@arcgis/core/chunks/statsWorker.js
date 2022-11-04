/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../geometry.js";import e from"../core/Error.js";import{i as n,u as a}from"./maybe.js";import{a as t}from"./screenUtils.js";import i,{n as o,g as s}from"../geometry/SpatialReference.js";import{q as l}from"./quantizationUtils.js";import{isNumericField as r,numericTypes as u}from"../layers/support/fieldUtils.js";import{c as f,e as m}from"./heatmapUtils.js";import{b as d,i as c,d as p,e as v,p as y,f as h,c as I,h as x,r as z,j as T}from"./utils11.js";import{l as g}from"./arcadeOnDemand.js";import F from"../geometry/Point.js";let j=null;async function $(e,n){if(!n)return[];const a=e.field,t=e.valueExpression,o=e.normalizationType,s=e.normalizationField,l=e.normalizationTotal,r=[],u=e.viewInfoParams;let f=null,m=null;if(t){if(!j){const{arcadeUtils:e}=await g();j=e}f=j.createFunction(t),m=u&&j.getViewInfo({viewingMode:u.viewingMode,scale:u.scale,spatialReference:new i(u.spatialReference)})}const c=e.fieldInfos,p=n[0]&&"declaredClass"in n[0]&&"esri.Graphic"===n[0].declaredClass||!c?null:{fields:c};return n.forEach((e=>{const n=e.attributes;let i;if(t){const n=p?{...e,layer:p}:e,a=j.createExecContext(n,m);i=j.executeFunction(f,a)}else n&&(i=n[a]);if(o&&isFinite(i)){const e=n&&parseFloat(n[s]);i=d(i,o,e,l)}r.push(i)})),r}function b(e){const n=e.field,a=e.normalizationType,t=e.normalizationField;let i;return"field"===a?i="(NOT "+t+" = 0)":"log"!==a&&"natural-log"!==a&&"square-root"!==a||(i=`(${n} > 0)`),i}function w(n,a){return new e(n,a)}function E(e,n,a){const t=null!=n?e+" >= "+n:"",i=null!=a?e+" <= "+a:"";let o="";return o=t&&i?P(t,i):t||i,o?"("+o+")":""}function V(e,n,a,t){let i=null;return n?n.name!==e.objectIdField&&t.includes(n.type)||(i=w(a,"'field' should be one of these types: "+t.join(","))):i=w(a,"'field' is not defined in the layer schema"),i}function M(e,n,a){let t;return n?n.name!==e.objectIdField&&r(n)||(t=w(a,"'field' should be one of these numeric types: "+u.join(","))):t=w(a,"'field' is not defined in the layer schema"),t}function P(e,a){let t=n(e)?e:"";return n(a)&&a&&(t=t?"("+t+") AND ("+a+")":a),t}function N(e,n,a){const t=function(e){const n=e.layer;return e.fields.filter((e=>!n.getField(e)))}({layer:e,fields:n});if(t.length)return w(a,"Unknown fields: "+t.join(", ")+". You can only use fields defined in the layer schema");const i=function(e){const n=e.layer;return e.fields.filter((e=>{const a=n.getFieldUsageInfo(e);return!a||!a.supportsStatistics}))}({layer:e,fields:n});return i.length?w(a,"Unsupported fields: "+i.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true"):void 0}function S(e,n,a){const t=[],i=[],o=[],s=[],l=[];e.forEach(((e,n)=>{const r=e.field?"field":"expression",u=e.field||e.valueExpression;e.field?(l.push(u),i.push(`var ${r}${n} = Number($feature["${u}"]);`)):(t.push(`function getValueForExpr${n}() {\n  ${u} \n}`),i.push(`var ${r}${n} = Number(getValueForExpr${n}());`)),a||o.push(`${r}${n} = IIf(${r}${n} < 0, 0, ${r}${n});`),s.push(`${r}${n}`)}));let r="return sum;";const u=t.length?null:l.reduce(((e,n)=>`${e} + ${n}`));let f=null;return n||a?n?a||(r="return IIf(sum >= 0, sum, null);",u&&(f=`(( ${u} ) >= 0)`)):(r="return IIf(sum != 0, sum, null);",u&&(f=`(( ${u} ) <> 0)`)):(r="return IIf(sum > 0, sum, null);",u&&(f=`(( ${u} ) > 0)`)),{valueExpression:[t.length?t.join("\n"):"",i.join("\n"),o.join("\n"),`var sum = ${s.join(" + ")};`,r].filter(Boolean).join("\n\n"),sqlExpression:u,sqlWhere:f}}async function D(e){const{attribute:n,features:a}=e,{normalizationType:t,normalizationField:i,minValue:o,maxValue:s,fieldType:l}=n,r=await $({field:n.field,valueExpression:n.valueExpression,normalizationType:t,normalizationField:i,normalizationTotal:n.normalizationTotal,viewInfoParams:n.viewInfoParams,fieldInfos:n.fieldInfos},a),u=c({normalizationType:t,normalizationField:i,minValue:o,maxValue:s}),f={value:.5,fieldType:l},m="esriFieldTypeString"===l?p({values:r,supportsNullCount:u,percentileParams:f}):v({values:r,minValue:o,maxValue:s,useSampleStdDev:!t,supportsNullCount:u,percentileParams:f});return y(m,"esriFieldTypeDate"===l)}async function U(e){const{attribute:n,features:a}=e,t=await $({field:n.field,valueExpression:n.valueExpression,viewInfoParams:n.viewInfoParams,fieldInfos:n.fieldInfos},a),i=h(t);return I(i,n.domain,n.returnAllCodedValues)}async function C(e){const{attribute:n,features:a}=e,{field:t,normalizationType:i,normalizationField:o,normalizationTotal:s,classificationMethod:l}=n,r=await $({field:t,valueExpression:n.valueExpression,normalizationType:i,normalizationField:o,normalizationTotal:s,viewInfoParams:n.viewInfoParams,fieldInfos:n.fieldInfos},a),u=x(r,{field:t,normalizationType:i,normalizationField:o,normalizationTotal:s,classificationMethod:l,standardDeviationInterval:n.standardDeviationInterval,numClasses:n.numClasses,minValue:n.minValue,maxValue:n.maxValue});return z(u,l)}async function q(e){const{attribute:n,features:a}=e,{field:t,normalizationType:i,normalizationField:o,normalizationTotal:s,classificationMethod:l}=n,r=await $({field:t,valueExpression:n.valueExpression,normalizationType:i,normalizationField:o,normalizationTotal:s,viewInfoParams:n.viewInfoParams,fieldInfos:n.fieldInfos},a);return T(r,{field:t,normalizationType:i,normalizationField:o,normalizationTotal:s,classificationMethod:l,standardDeviationInterval:n.standardDeviationInterval,numBins:n.numBins,minValue:n.minValue,maxValue:n.maxValue})}async function O(e){const{attribute:n,features:i}=e,{field:r,radius:u,fieldOffset:d,transform:c,spatialReference:p,size:v}=n,y=function(e,n,t,i){const r=o(t)?s(t):null,u=r?Math.round((r.valid[1]-r.valid[0])/n.scale[0]):null;return e.map((e=>{const t=new F(a(e.geometry));return l(n,t,t,t.hasZ,t.hasM),e.geometry=r?function(e,n,a){return e.x<0?e.x+=n:e.x>a&&(e.x-=n),e}(t,u,i[0]):t,e}))}(i,c,p,v),{count:h,min:I,max:x,mean:z,stdDev:T}=function(e,n=18,a,i,o,s){const l=new Float64Array(o*s);n=Math.round(t(n));let r=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,d=0,c=0,p=0,v=0;const y=f(i,a);for(const{geometry:a,attributes:t}of e){const{x:e,y:i}=a,f=Math.max(0,e-n),h=Math.max(0,i-n),I=Math.min(s,i+n),x=Math.min(o,e+n),z=+y(t);for(let a=h;a<I;a++)for(let t=f;t<x;t++){const s=a*o+t,f=m(t-e,a-i,n),y=l[s];d=l[s]+=f*z;const h=d-y;c+=h,p+=h*h,d<r&&(r=d),d>u&&(u=d),v++}}if(!v)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const h=(u-r)/2;return{mean:c/v,stdDev:Math.sqrt((p-c*c/v)/v),min:r,max:u,mid:h,count:v}}(y,u,d,r,v[0],v[1]);return{count:h,min:I,max:x,avg:z,stddev:T}}const _=Object.freeze(Object.defineProperty({__proto__:null,summaryStatistics:D,uniqueValues:U,classBreaks:C,histogram:q,heatmapStatistics:O},Symbol.toStringTag,{value:"Module"}));export{E as a,O as b,C as c,$ as d,M as e,V as f,b as g,q as h,S as i,_ as j,P as m,D as s,U as u,N as v};
