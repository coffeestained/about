// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.windowPerformanceProjectorLogger=void 0;if(window.performance&&window.performance.measure){let a=window.performance,d;b.windowPerformanceProjectorLogger=(c,e)=>{a.mark(c);switch(c){case "domEventProcessed":a.measure("eventHandler","domEvent","domEventProcessed");break;case "renderDone":a.measure("renderCycle","renderStart","renderDone");break;case "rendered":a.measure("render",d,"rendered");break;case "patched":a.measure("diff+patch","rendered","patched")}d=c}}else b.windowPerformanceProjectorLogger=
()=>{};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});