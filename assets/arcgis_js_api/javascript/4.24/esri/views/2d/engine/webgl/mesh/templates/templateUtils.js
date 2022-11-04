// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/maybe ../../../../../../chunks/earcut ../../../../../../geometry/libtess ../../../../../../layers/graphics/OptimizedGeometry ../../definitions ../../Geometry ../../TileClipper ../bufcut".split(" "),function(n,z,A,B,C,t,w,x,D){function u(b,a,c){let k=0;for(let d=1;d<c;d++)k+=(b[2*(a+d)]-b[2*(a+d-1)])*(b[2*(a+d)+1]+b[2*(a+d-1)+1]);return k}function y(b,a,c,k,d){let h=0;for(;c<k;c+=3){const e=2*(b[c]-d),f=2*(b[c+1]-d),g=2*(b[c+2]-d);h+=Math.abs((a[e]-a[g])*(a[f+
1]-a[e+1])-(a[e]-a[f])*(a[g+1]-a[e+1]))}return h}const p=new x.TileClipper(0,0,0,1,0),q=new x.TileClipper(0,0,0,1,0);p.setExtent(t.TILE_SIZE);q.setExtent(t.TILE_SIZE);n.area=u;n.clipLinesMarshall=function(b,a){q.setPixelMargin(a);const c=-a;a=t.TILE_SIZE+a;let k=[];var d=!1;let h=0;for(;h<b.length;){const e=[],f=b[h];if(!f)return null;q.reset(w.GeometryType.LineString);let [g,l]=f[0];if(d)q.moveTo(g,l);else{if(g<c||g>a||l<c||l>a){d=!0;continue}e.push({x:g,y:l})}let m=!1;const v=f.length;for(let r=
1;r<v;++r)if(g+=f[r][0],l+=f[r][1],d)q.lineTo(g,l);else{if(g<c||g>a||l<c||l>a){m=!0;break}e.push({x:g,y:l})}if(m)d=!0;else{if(d){if(d=q.resultWithStarts())for(const r of d)k.push(r)}else k.push({line:e,start:0});h++;d=!1}}k=k.filter(e=>1<e.line.length);return 0===k.length?null:k};n.clipMarshall=function(b,a){if(z.isNone(b))return null;a:{var c=t.TILE_SIZE+128;var k=0;for(var d=0;d<b.lengths.length;d++){var h=b.lengths[d];for(var e=0;e<h;e++){const f=b.coords[2*(e+k)],g=b.coords[2*(e+k)+1];if(-128>
f||f>c||-128>g||g>c){c=!0;break a}}k+=h}c=!1}if(!c)return b;p.setPixelMargin(a);p.reset(w.GeometryType.Polygon);a=0;for(c=0;c<b.lengths.length;c++){k=b.lengths[c];d=b.coords[2*(0+a)];h=b.coords[2*(0+a)+1];p.moveTo(d,h);for(e=1;e<k;e++)d=b.coords[2*(e+a)],h=b.coords[2*(e+a)+1],p.lineTo(d,h);p.close();a+=k}c=p.result(!1);if(!c)return null;b=[];a=[];for(const f of c){c=0;for(const g of f)a.push(g.x),a.push(g.y),c++;b.push(c)}return new C(b,a)};n.triangleArea=function(b,a,c,k,d){let h=0;for(;c<k;c+=3){const e=
2*(b.getValue(c)-d),f=2*(b.getValue(c+1)-d),g=2*(b.getValue(c+2)-d);h+=Math.abs((a[e]-a[g])*(a[f+1]-a[e+1])-(a[e]-a[f])*(a[g+1]-a[e+1]))}return h};n.triangleAreaArray=y;n.triangulate=function(b,a){const {coords:c,lengths:k,hasIndeterminateRingOrder:d}=a;if(d)return!1;a=0;for(var h=0;h<k.length;){let g=h,l=k[h];h=u(c,a,l);for(var e=[];++g<k.length;){var f=k[g];const m=u(c,a+l,f);if(!(0<m))break;h+=m;e.push(a+l);l+=f}f=b.length;D.bufcut(b,c,a,a+l,e,2,0);e=y(b,c,f,b.length,0);h=Math.abs(h);if(1E-5<Math.abs((e-
h)/Math.max(1E-7,h)))return b.length=0,!1;h=g;a+=l}return!0};n.triangulateEarcut=function(b,a,c){const {coords:k,lengths:d,hasIndeterminateRingOrder:h}=a;if(h)return!1;let e=0;for(var f=0;f<d.length;){let l=f,m=d[f];for(f=[];++l<d.length;){var g=d[l];if(!(0<u(k,e+m,g)))break;f.push(e+m-e);m+=g}g=a.coords.slice(2*e,2*(e+m));f=A.earcut(g,f,2);for(const v of f)b.push(v+c+e);f=l;e+=m}return!0};n.triangulateLibtess=function(b){const {coords:a,lengths:c}=b;({buffer:b}=B.triangulate(a,c));return b};Object.defineProperties(n,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});