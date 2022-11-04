/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"./ArrayPool.js";import"../geometry/Extent.js";import"../core/lang.js";import"./mathUtils.js";import"../rest/support/Query.js";import"./TileKey.js";function o(o,r,t,e){const l=o.clone(),s=1<<l.level,i=l.col+r,p=l.row+t;return e&&i<0?(l.col=i+s,l.world-=1):i>=s?(l.col=i-s,l.world+=1):l.col=i,l.row=p,l}export{o as g};
