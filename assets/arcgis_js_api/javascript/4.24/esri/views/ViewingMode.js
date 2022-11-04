// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){a.ViewingMode=void 0;(function(b){b[b.Global=1]="Global";b[b.Local=2]="Local"})(a.ViewingMode||(a.ViewingMode={}));a.stringFromViewingMode=function(b){return b===a.ViewingMode.Global?"global":"local"};a.viewingModeFromString=function(b){return"global"===b?a.ViewingMode.Global:a.ViewingMode.Local};Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});