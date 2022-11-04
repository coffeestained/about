// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){a.AGGREGATE_VALID_FILTERS_MASK=254;a.DISPLAY_ID_TEXEL_MASK=8388607;a.DISPLAY_ID_TYPE_AGGREGATE=1;a.DISPLAY_ID_TYPE_FEATURE=0;a.DISPLAY_ID_TYPE_MASK=8388608;a.NONAGGREGATE_VALID_FILTERS_MASK=255;a.createDisplayId=function(b,c){return((c?8388608:0)|b)>>>0};a.getDisplayIdFilterMask=b=>1===(b&8388608)>>>23?254:255;a.getDisplayIdTexel=b=>b&8388607;a.getDisplayIdType=b=>(b&8388608)>>>23;a.isAggregateId=function(b){return 1===(b&8388608)>>>23};Object.defineProperties(a,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});