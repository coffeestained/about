/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as e,i as l}from"./maybe.js";import{getFeatureEditFields as s,fixFields as p}from"../layers/support/fieldUtils.js";async function a(l,a=l.popupTemplate){if(e(a))return[];const t=await a.getRequiredFields(l.fieldsIndex),{lastEditInfoEnabled:d}=a,{objectIdField:i,typeIdField:n,globalIdField:u,relationships:o}=l;if(t.includes("*"))return["*"];const r=d?await s(l):[],f=p(l.fieldsIndex,[...t,...r]);return n&&f.push(n),f&&i&&l.fieldsIndex.has(i)&&!f.includes(i)&&f.push(i),f&&u&&l.fieldsIndex.has(u)&&!f.includes(u)&&f.push(u),o&&o.forEach((e=>{const{keyField:s}=e;f&&s&&l.fieldsIndex.has(s)&&!f.includes(s)&&f.push(s)})),f}function t(e,s){return e.popupTemplate?e.popupTemplate:l(s)&&s.defaultPopupTemplateEnabled&&l(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}export{a,t as g};
