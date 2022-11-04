/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../core/Error.js";import i from"../smartMapping/statistics/summaryStatisticsForAge.js";import{supportedAgeUnits as s}from"../smartMapping/statistics/support/ageUtils.js";import{u as n}from"./utils10.js";async function a(a){const r="days",o={...a,unit:r},u=await i(o);if(null==u.avg)throw new t("age-unit:insufficient-info","'avg' statistics is invalid");const c=function(t){const i=Math.abs(t.avg);let a=null;return s.some((t=>{const s=n[t];return i>2*s&&(a=t),!!a})),a}(u);if(c===r)return{unit:c,statistics:u};o.unit=c;const e=await i(o);if(null==e.avg)throw new t("age-unit:insufficient-info","'avg' statistics is invalid");return{unit:c,statistics:e}}export{a};
