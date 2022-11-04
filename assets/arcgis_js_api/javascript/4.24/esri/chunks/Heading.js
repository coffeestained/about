// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils"],function(b,c){b.Heading=(a,d)=>{const e=`h${a.level}`;delete a.level;return c.h(e,Object.assign({},a),d)};b.constrainHeadingLevel=function(a){return Math.min(Math.max(Math.ceil(a),1),6)}});