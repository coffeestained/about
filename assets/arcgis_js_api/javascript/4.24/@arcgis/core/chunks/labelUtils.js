/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{r as e}from"./string.js";const n=new RegExp("__begin__","ig"),s=new RegExp("__end__","ig"),r=new RegExp("^__begin__","i"),t=new RegExp("__end__$","i");function a(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function i(e){const n={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(n.expression=e.labelExpressionInfo.value,n.type="conventional"):e.labelExpressionInfo.expression&&(n.expression=e.labelExpressionInfo.expression,n.type="arcade"):null!=e.labelExpression&&(n.expression=e.labelExpression.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}"),n.type="conventional"),n}function o(e){const n=i(e);if(!n)return null;switch(n.type){case"conventional":return p(n.expression);case"arcade":return n.expression}return null}function l(e){const n=i(e);if(!n)return null;switch(n.type){case"conventional":return function(e){const n=e.match(c);return n&&n[1].trim()||null}(n.expression);case"arcade":return f(n.expression)}return null}function p(a){let i;return a?(i=e(a,(e=>'__begin__$feature["'+e+'"]__end__')),i=r.test(i)?i.replace(r,""):'"'+i,i=t.test(i)?i.replace(t,""):i+'"',i=i.replace(n,'" + ').replace(s,' + "')):i='""',i}const c=/^\s*\{([^}]+)\}\s*$/i,u=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,x=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,_=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function f(e){if(!e)return null;let n=u.exec(e)||x.exec(e);return n?n[1]||n[3]:(n=_.exec(e),n?n[2]:null)}export{i as a,o as b,p as c,l as d,f as g,a as t};
