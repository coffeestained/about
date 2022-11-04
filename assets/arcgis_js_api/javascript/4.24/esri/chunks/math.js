// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.clamp=(a,c,d)=>Math.max(c,Math.min(a,d));b.decimalPlaces=a=>(a=(""+a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/))?Math.max(0,(a[1]?a[1].length:0)-(a[2]?+a[2]:0)):0});