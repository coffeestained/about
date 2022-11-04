// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./has ./jsonMap ./maybe ../geometry/projectionEllipsoid ../geometry/SpatialReference ../geometry/support/Ellipsoid ../geometry/support/spatialReferenceUtils ../geometry/support/WKIDUnitConversion".split(" "),function(d,r,l,g,P,Q,t,u,n){function p(a){a=R[a];if(!a)throw Error("unknown type");return a}function y(a){return m[a].baseUnit}function v(a,b=null){b=b||p(a);return m[b].baseUnit===a}function h(a,b,c){if(b===c)return a;const e=p(b);if(e!==p(c))throw Error("incompatible units");
a=v(b,e)?a:a*m[e].units[b].inBaseUnits;return v(c,e)?a:a/m[e].units[c].inBaseUnits}function z(a,b){a=h(a,b,"meters");return 3E3>Math.abs(a)?"meters":"kilometers"}function A(a,b){a=h(a,b,"meters");return 1E5>Math.abs(a)?"meters":"kilometers"}function B(a,b){a=h(a,b,"feet");return 1E3>Math.abs(a)?"feet":"miles"}function C(a,b){a=h(a,b,"feet");return 1E5>Math.abs(a)?"feet":"miles"}function D(a,b){a=h(a,b,"square-meters");return 3E6>Math.abs(a)?"square-meters":"square-kilometers"}function E(a,b){a=h(a,
b,"square-feet");return 1E6>Math.abs(a)?"square-feet":"square-miles"}function F(a){return G.fromJSON(a.toLowerCase())||null}function H(a){const b=w(a),c=a instanceof Q?P.getReferenceEllipsoid(a).metersPerDegree:1E5;return b>=c?"meters":q(a)}function w(a,b=t.earth.metersPerDegree){return g.unwrapOr(I(a,!0),b)}function I(a,b=!1){let c,e,f=null;null!=a&&("object"===typeof a?(c=a.wkid,e=a.wkt):"number"===typeof a?c=a:"string"===typeof a&&(e=a));if(c){if(u.isWKIDFromMars(c))return t.mars.metersPerDegree;
if(u.isWKIDFromMoon(c))return t.moon.metersPerDegree;f=k.values[k[c]];!f&&b&&S.has(c)&&(f=T)}else e&&(/^PROJCS/i.test(e)?f=J(K.exec(e),f):/^GEOCCS/i.test(e)&&(f=J(L.exec(e),f)));return f}function J(a,b){return a&&a[1]?parseFloat(a[1].split(",")[1]):b}function q(a){var b=null;if(null!=a)if("object"===typeof a){var c=a.wkid;var e=a.wkt}else"number"===typeof a?c=a:"string"===typeof a&&(e=a);if(c)b=k.units[k[c]];else if(e&&(a=/^PROJCS/i.test(e)?K:/^GEOCCS/i.test(e)?L:null)&&(e=a.exec(e))&&e[1]&&(e=e[1],
b=(b=/[\\"\\']{1}([^\\"\\']+)/.exec(e))&&b[1],!b||!k.units.includes(b)))for(e=parseFloat(e.split(",")[1]),b=null,a=k.values,c=0;c<a.length;++c)if(1E-7>Math.abs(e-a[c])){b=k.units[c];break}return g.isSome(b)?F(b):null}function M(a){a=q(a);if(g.isNone(a))return null;switch(a){case "feet":case "us-feet":case "clarke-feet":case "clarke-yards":case "clarke-links":case "sears-yards":case "sears-feet":case "sears-chains":case "benoit-1895-b-chains":case "indian-yards":case "indian-1937-yards":case "gold-coast-feet":case "sears-1922-truncated-chains":return"imperial";
case "50-kilometers":case "150-kilometers":case "meters":return"metric"}return null}const T=t.earth.radius*Math.PI/200,K=/UNIT\[([^\]]+)\]\]$/i,k=n,L=/UNIT\[([^\]]+)\]/i,S=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),G=l.strict()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",
yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"});r={millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1E3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},
"us-feet":{inBaseUnits:1200/3937}};n={"square-millimeters":{inBaseUnits:1E-6},"square-centimeters":{inBaseUnits:1E-4},"square-decimeters":{inBaseUnits:.1*.1},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:1E6},"square-inches":{inBaseUnits:6.4516E-4},"square-feet":{inBaseUnits:.09290304},"square-yards":{inBaseUnits:.83612736},"square-miles":{inBaseUnits:2589988.110336},"square-us-feet":{inBaseUnits:(a=>a*a)(1200/3937)},acres:{inBaseUnits:4046.8564224},ares:{inBaseUnits:100},hectares:{inBaseUnits:1E4}};
const m={length:{baseUnit:"meters",units:r},area:{baseUnit:"square-meters",units:n},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1E3*1E-9},"cubic-centimeters":{inBaseUnits:.001},"cubic-decimeters":{inBaseUnits:1},"cubic-meters":{inBaseUnits:1E3},"cubic-kilometers":{inBaseUnits:1E12},"cubic-inches":{inBaseUnits:.016387064},"cubic-feet":{inBaseUnits:.09290304*304.8},"cubic-yards":{inBaseUnits:764.554857984},"cubic-miles":{inBaseUnits:4.16818182544058E12}}},
angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},R=(()=>{const a={};for(const b in m)for(const c in m[b].units)a[c]=b;return a})(),x="metric imperial inches feet yards miles nautical-miles us-feet meters kilometers".split(" "),U=new Map([["meters","square-meters"],["feet","square-feet"],["us-feet","square-us-feet"]]),N={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",
esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},O={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",
esriYards:"yards"};r=l.strict()(N);n=l.strict()(O);l=l.strict()({...N,...O});d.areaUnitFromSpatialReference=function(a){a=q(a);return g.isNone(a)?null:U.get(a)};d.areaUnitsJSONMap=r;d.baseUnitForUnit=function(a){return y(p(a))};d.baseUnitForUnitType=y;d.convertUnit=h;d.getDefaultUnitForView=function(a){var b;if(g.isNone(a))return"metric";var c=a.map;if(c=c&&"portalItem"in c?null==(b=c.portalItem)?void 0:b.portal:null){var e,f;switch(null!=(e=null==c?void 0:null==(f=c.user)?void 0:f.units)?e:c.units){case "metric":return"metric";
case "english":return"imperial"}}return g.unwrapOr(M(a.spatialReference),"metric")};d.getDefaultUnitSystem=M;d.getMetersPerUnit=I;d.getMetersPerUnitForSR=w;d.getMetersPerVerticalUnitForSR=function(a){if(a&&"object"===typeof a&&!u.isEarth(a))return 1;a=w(a);return 1E5<a?1:a};d.getUnitString=q;d.getVerticalUnitStringForSR=H;d.inchesPerMeter=39.37;d.isBaseUnit=v;d.isMeasurementSystem=function(a){return"imperial"===a||"metric"===a};d.lengthToDegrees=function(a,b,c){return h(a,b,"meters")/(c*Math.PI/180)};
d.lengthUnitFromSpatialReference=function(a){a=q(a);return g.isNone(a)||!x.includes(a)?null:a};d.lengthUnitsJSONMap=n;d.measurementAreaUnits="metric imperial square-inches square-feet square-yards square-miles square-us-feet square-meters square-kilometers acres ares hectares".split(" ");d.measurementLengthUnits=x;d.preferredAreaUnit=function(a,b,c){switch(c){case "metric":return D(a,b);case "imperial":return E(a,b);default:return c}};d.preferredImperialAreaUnit=E;d.preferredImperialLengthUnit=B;
d.preferredImperialVerticalLengthUnit=C;d.preferredLengthUnit=function(a,b,c){switch(c){case "metric":return z(a,b);case "imperial":return B(a,b);default:return c}};d.preferredMetricAreaUnit=D;d.preferredMetricLengthUnit=z;d.preferredMetricVerticalLengthUnit=A;d.preferredVerticalLengthUnit=function(a,b,c){switch(c){case "metric":return A(a,b);case "imperial":return C(a,b);default:return c}};d.unitFromRESTJSON=F;d.unitToRESTJSON=function(a){return G.toJSON(a)||null};d.unitType=p;d.unitsJSONMap=l;d.verticalLengthUnitFromSpatialReference=
function(a){a=H(a);return g.isNone(a)||!x.includes(a)?null:a};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});