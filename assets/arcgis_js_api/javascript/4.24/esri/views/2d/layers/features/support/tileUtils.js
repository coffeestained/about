// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./Tile"],function(d,g){function f(a,b,c,h){a=a.clone();const e=1<<a.level;b=a.col+b;c=a.row+c;h&&0>b?(a.col=b+e,--a.world):b>=e?(a.col=b-e,a.world+=1):a.col=b;a.row=c;return a}d.getPow2NeighborKey=f;d.getPow2NeighborTile=function(a,b,c){b=f(a.key,b,c,a.tileInfoView.tileInfo.isWrappable);return new g.Tile(a.tileInfoView,b)};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});