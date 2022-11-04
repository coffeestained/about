/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";let s=0;const t=t=>{let o=class extends t{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+s++})}};return o=e([r("esri.core.Identifiable")],o),o},o=t=>{let o=class extends t{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:s++})}};return o=e([r("esri.core.NumericIdentifiable")],o),o};let i=class extends(t(class{})){};i=e([r("esri.core.Identifiable")],i);export{t as I,o as N,i as a};
