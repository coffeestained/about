// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(Ta){var Q={exports:{}};(function(R,S){S=function(){var M="undefined"!==typeof document&&document.currentScript?document.currentScript.src:void 0;return function(y){function H(a){return e.locateFile?e.locateFile(a,B):B+a}function I(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&wa)return wa.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|g);else{var h=a[b++]&63;f=224==(f&240)?
(f&15)<<12|g<<6|h:(f&7)<<18|g<<12|h<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function Ua(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var k=a.charCodeAt(++g);h=65536+((h&1023)<<10)|k&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+
3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f}function Va(a,b){var c=a>>1;for(var d=c+b/2;!(c>=d)&&aa[c];)++c;c<<=1;if(32<c-a&&xa)return xa.decode(t.subarray(a,c));c="";for(d=0;!(d>=b/2);++d){var f=N[a+2*d>>1];if(0==f)break;c+=String.fromCharCode(f)}return c}function Wa(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f){var g=a.charCodeAt(f);N[b>>1]=g;b+=2}N[b>>1]=0;return b-d}function Xa(a){return 2*
a.length}function Ya(a,b){for(var c=0,d="";!(c>=b/4);){var f=r[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}function Za(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var h=a.charCodeAt(++f);g=65536+((g&1023)<<10)|h&1023}r[b>>2]=g;b+=4;if(b+4>c)break}r[b>>2]=0;return b-d}function $a(a){for(var b=0,c=0;c<a.length;++c){var d=
a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}function ab(a,b){0<a%b&&(a+=b-a%b);return a}function ya(a){ma=a;e.HEAP8=J=new Int8Array(a);e.HEAP16=N=new Int16Array(a);e.HEAP32=r=new Int32Array(a);e.HEAPU8=t=new Uint8Array(a);e.HEAPU16=aa=new Uint16Array(a);e.HEAPU32=C=new Uint32Array(a);e.HEAPF32=za=new Float32Array(a);e.HEAPF64=Aa=new Float64Array(a)}function ba(a){if(e.onAbort)e.onAbort(a);a="Aborted("+a+")";O(a);Ba=!0;a=new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS\x3d1 for more info.");
na(a);throw a;}function Ca(a){try{if(a==A&&T)return new Uint8Array(T);if(oa)return oa(a);throw"both async and sync fetching of the wasm failed";}catch(b){ba(b)}}function bb(){return T||!Da&&!ca||"function"!==typeof fetch?Promise.resolve().then(function(){return Ca(A)}):fetch(A,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+A+"'";return a.arrayBuffer()}).catch(function(){return Ca(A)})}function pa(a){for(;0<a.length;){var b=a.shift();if("function"==
typeof b)b(e);else{var c=b.func;"number"===typeof c?void 0===b.arg?U(c)():U(c)(b.arg):c(void 0===b.arg?null:b.arg)}}}function U(a){var b=da[a];b||(a>=da.length&&(da.length=a+1),da[a]=b=Ea.get(a));return b}function cb(a){this.excPtr=a;this.ptr=a-16;this.set_type=function(b){r[this.ptr+4>>2]=b};this.get_type=function(){return r[this.ptr+4>>2]};this.set_destructor=function(b){r[this.ptr+8>>2]=b};this.get_destructor=function(){return r[this.ptr+8>>2]};this.set_refcount=function(b){r[this.ptr>>2]=b};this.set_caught=
function(b){J[this.ptr+12>>0]=b?1:0};this.get_caught=function(){return 0!=J[this.ptr+12>>0]};this.set_rethrown=function(b){J[this.ptr+13>>0]=b?1:0};this.get_rethrown=function(){return 0!=J[this.ptr+13>>0]};this.init=function(b,c){this.set_type(b);this.set_destructor(c);this.set_refcount(0);this.set_caught(!1);this.set_rethrown(!1)};this.add_ref=function(){r[this.ptr>>2]+=1};this.release_ref=function(){var b=r[this.ptr>>2];r[this.ptr>>2]=b-1;return 1===b}}function Fa(a){for(;a.length;){var b=a.pop();
a.pop()(b)}}function ea(a){return this.fromWireType(C[a>>2])}function db(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function eb(a,b){a=db(a);return function(){return b.apply(this,arguments)}}function qa(a,b){var c=eb(b,function(d){this.name=b;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(a.prototype);c.prototype.constructor=c;c.prototype.toString=
function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}function Ga(a,b,c){function d(k){k=c(k);if(k.length!==a.length)throw new ra("Mismatched type converter count");for(var l=0;l<a.length;++l)D(a[l],k[l])}a.forEach(function(k){fa[k]=b});var f=Array(b.length),g=[],h=0;b.forEach(function(k,l){K.hasOwnProperty(k)?f[l]=K[k]:(g.push(k),P.hasOwnProperty(k)||(P[k]=[]),P[k].push(function(){f[l]=K[k];++h;h===g.length&&d(f)}))});0===g.length&&d(f)}function sa(a){switch(a){case 1:return 0;
case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}function u(a){for(var b="";t[a];)b+=Ha[t[a++]];return b}function w(a){throw new Ia(a);}function D(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||w('type "'+d+'" must have a positive integer typeid pointer');if(K.hasOwnProperty(a)){if(c.ignoreDuplicateRegistrations)return;w("Cannot register type '"+d+"' twice")}K[a]=
b;delete fa[a];P.hasOwnProperty(a)&&(b=P[a],delete P[a],b.forEach(function(f){f()}))}function Ja(a){4<a&&0===--x[a].refcount&&(x[a]=void 0,ta.push(a))}function ua(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function fb(a,b){switch(b){case 2:return function(c){return this.fromWireType(za[c>>2])};case 3:return function(c){return this.fromWireType(Aa[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function gb(a,b,c,d,f){var g=
b.length;2>g&&w("argTypes array size mismatch! Must at least get return value and 'this' types!");var h=null!==b[1]&&null!==c,k=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].destructorFunction){k=!0;break}var l="void"!==b[0].name,m=g-2,n=Array(m),p=[],q=[];return function(){arguments.length!==m&&w("function "+a+" called with "+arguments.length+" arguments, expected "+m+" args!");q.length=0;p.length=h?2:1;p[0]=f;if(h){var z=b[1].toWireType(q,this);p[1]=z}for(var v=0;v<m;++v)n[v]=b[v+2].toWireType(q,
arguments[v]),p.push(n[v]);v=d.apply(null,p);if(k)Fa(q);else for(var F=h?1:2;F<b.length;F++){var V=1===F?z:n[F-2];null!==b[F].destructorFunction&&b[F].destructorFunction(V)}z=l?b[0].fromWireType(v):void 0;return z}}function hb(a,b,c){if(void 0===a[b].overloadTable){var d=a[b];a[b]=function(){a[b].overloadTable.hasOwnProperty(arguments.length)||w("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].overloadTable+")!");return a[b].overloadTable[arguments.length].apply(this,
arguments)};a[b].overloadTable=[];a[b].overloadTable[d.argCount]=d}}function ib(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].overloadTable&&void 0!==e[a].overloadTable[c])&&w("Cannot register public name '"+a+"' twice"),hb(e,a,a),e.hasOwnProperty(c)&&w("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].overloadTable[c]=b):(e[a]=b,void 0!==c&&(e[a].numArguments=c))}function jb(a,b){for(var c=[],d=0;d<a;d++)c.push(r[(b>>2)+d]);return c}function kb(a,
b){var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];a.includes("j")?(d=e["dynCall_"+a],d=c&&c.length?d.apply(null,[b].concat(c)):d.call(null,b)):d=U(b).apply(null,c);return d}}function W(a,b){a=u(a);var c=a.includes("j")?kb(a,b):U(b);"function"!==typeof c&&w("unknown function pointer with signature "+a+": "+b);return c}function Ka(a){a=La(a);var b=u(a);E(a);return b}function lb(a,b){function c(g){f[g]||K[g]||(fa[g]?fa[g].forEach(c):(d.push(g),
f[g]=!0))}var d=[],f={};b.forEach(c);throw new Ma(a+": "+d.map(Ka).join([", "]));}function mb(a,b,c){switch(b){case 0:return c?function(d){return J[d]}:function(d){return t[d]};case 1:return c?function(d){return N[d>>1]}:function(d){return aa[d>>1]};case 2:return c?function(d){return r[d>>2]}:function(d){return C[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}function nb(a){var b=ob[a];return void 0===b?u(a):b}function va(a){function b(){if(!ha&&(ha=!0,e.calledRun=!0,!Ba)){pa(Na);
Oa(e);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)Pa.unshift(e.postRun.shift());pa(Pa)}}if(!(0<L)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Qa.unshift(e.preRun.shift());pa(Qa);0<L||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}y=y||{};var e="undefined"!==typeof y?y:{},Oa,na;e.ready=new Promise(function(a,
b){Oa=a;na=b});var X={},G;for(G in e)e.hasOwnProperty(G)&&(X[G]=e[G]);var Da="object"===typeof window,ca="function"===typeof importScripts;"object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;var B="",oa;if(Da||ca)ca?B=self.location.href:"undefined"!==typeof document&&document.currentScript&&(B=document.currentScript.src),M&&(B=M),B=0!==B.indexOf("blob:")?B.substr(0,B.replace(/[?#].*/,"").lastIndexOf("/")+1):"",ca&&(oa=function(a){var b=new XMLHttpRequest;
b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var pb=e.print||console.log.bind(console),O=e.printErr||console.warn.bind(console);for(G in X)X.hasOwnProperty(G)&&(e[G]=X[G]);X=null;e.arguments&&e.arguments;e.thisProgram&&e.thisProgram;e.quit&&e.quit;var T;e.wasmBinary&&(T=e.wasmBinary);e.noExitRuntime||!0;"object"!==typeof WebAssembly&&ba("no native wasm support detected");var ia,Ba=!1,wa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0,
xa="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0,ma,J,t,N,aa,r,C,za,Aa;e.INITIAL_MEMORY||16777216;var Ea,Qa=[],Na=[],Pa=[],L=0,Y=null;e.preloadedImages={};e.preloadedAudios={};var A="i3s.wasm";A.startsWith("data:application/octet-stream;base64,")||(A=H(A));var da=[],ja={},P={},K={},fa={},ra=void 0,Ha=void 0,Ia=void 0,ta=[],x=[{},{value:void 0},{value:null},{value:!0},{value:!1}],ka={toValue:function(a){a||w("Cannot use deleted val. handle \x3d "+a);return x[a].value},toHandle:function(a){switch(a){case void 0:return 1;
case null:return 2;case !0:return 3;case !1:return 4;default:var b=ta.length?ta.pop():x.length;x[b]={refcount:1,value:a};return b}}},Ma=void 0,ob={},Z={mappings:{},buffers:[null,[],[]],printChar:function(a,b){var c=Z.buffers[a];0===b||10===b?((1===a?pb:O)(I(c,0)),c.length=0):c.push(b)},varargs:void 0,get:function(){Z.varargs+=4;return r[Z.varargs-4>>2]},getStr:function(a){return a?I(t,a,void 0):""},get64:function(a,b){return a}};ra=e.InternalError=qa(Error,"InternalError");(function(){for(var a=Array(256),
b=0;256>b;++b)a[b]=String.fromCharCode(b);Ha=a})();Ia=e.BindingError=qa(Error,"BindingError");e.count_emval_handles=function(){for(var a=0,b=5;b<x.length;++b)void 0!==x[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<x.length;++a)if(void 0!==x[a])return x[a];return null};Ma=e.UnboundTypeError=qa(Error,"UnboundTypeError");var Sa={__call_sighandler:function(a,b){U(a)(b)},__cxa_allocate_exception:function(a){return la(a+16)+16},__cxa_atexit:function(a,b){},__cxa_throw:function(a,b,c){(new cb(a)).init(b,
c);throw a;},_embind_finalize_value_object:function(a){var b=ja[a];delete ja[a];var c=b.rawConstructor,d=b.rawDestructor,f=b.fields,g=f.map(function(h){return h.getterReturnType}).concat(f.map(function(h){return h.setterArgumentType}));Ga([a],g,function(h){var k={};f.forEach(function(l,m){var n=h[m],p=l.getter,q=l.getterContext,z=h[m+f.length],v=l.setter,F=l.setterContext;k[l.fieldName]={read:function(V){return n.fromWireType(p(q,V))},write:function(V,qb){var Ra=[];v(F,V,z.toWireType(Ra,qb));Fa(Ra)}}});
return[{name:b.name,fromWireType:function(l){var m={},n;for(n in k)m[n]=k[n].read(l);d(l);return m},toWireType:function(l,m){for(var n in k)if(!(n in m))throw new TypeError('Missing field:  "'+n+'"');var p=c();for(n in k)k[n].write(p,m[n]);null!==l&&l.push(d,p);return p},argPackAdvance:8,readValueFromPointer:ea,destructorFunction:d}]})},_embind_register_bigint:function(a,b,c,d,f){},_embind_register_bool:function(a,b,c,d,f){var g=sa(c);b=u(b);D(a,{name:b,fromWireType:function(h){return!!h},toWireType:function(h,
k){return k?d:f},argPackAdvance:8,readValueFromPointer:function(h){if(1===c)var k=J;else if(2===c)k=N;else if(4===c)k=r;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(k[h>>g])},destructorFunction:null})},_embind_register_emval:function(a,b){b=u(b);D(a,{name:b,fromWireType:function(c){var d=ka.toValue(c);Ja(c);return d},toWireType:function(c,d){return ka.toHandle(d)},argPackAdvance:8,readValueFromPointer:ea,destructorFunction:null})},_embind_register_float:function(a,
b,c){c=sa(c);b=u(b);D(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError('Cannot convert "'+ua(f)+'" to '+this.name);return f},argPackAdvance:8,readValueFromPointer:fb(b,c),destructorFunction:null})},_embind_register_function:function(a,b,c,d,f,g){var h=jb(b,c);a=u(a);f=W(d,f);ib(a,function(){lb("Cannot call "+a+" due to unbound types",h)},b-1);Ga([],h,function(k){var l=[k[0],null].concat(k.slice(1));k=a;l=gb(a,l,
null,f,g);var m=b-1;if(!e.hasOwnProperty(k))throw new ra("Replacing nonexistant public symbol");void 0!==e[k].overloadTable&&void 0!==m?e[k].overloadTable[m]=l:(e[k]=l,e[k].argCount=m);return[]})},_embind_register_integer:function(a,b,c,d,f){b=u(b);-1===f&&(f=4294967295);var g=sa(c),h=function(m){return m};if(0===d){var k=32-8*c;h=function(m){return m<<k>>>k}}var l=b.includes("unsigned");D(a,{name:b,fromWireType:h,toWireType:function(m,n){if("number"!==typeof n&&"boolean"!==typeof n)throw new TypeError('Cannot convert "'+
ua(n)+'" to '+this.name);if(n<d||n>f)throw new TypeError('Passing a number "'+ua(n)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return l?n>>>0:n|0},argPackAdvance:8,readValueFromPointer:mb(b,g,0!==d),destructorFunction:null})},_embind_register_memory_view:function(a,b,c){function d(g){g>>=2;var h=C;return new f(ma,h[g+1],h[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];
c=u(c);D(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{ignoreDuplicateRegistrations:!0})},_embind_register_std_string:function(a,b){b=u(b);var c="std::string"===b;D(a,{name:b,fromWireType:function(d){var f=C[d>>2];if(c)for(var g=d+4,h=0;h<=f;++h){var k=d+4+h;if(h==f||0==t[k]){var l=k-g;g=g?I(t,g,l):"";if(void 0===m)var m=g;else m+=String.fromCharCode(0),m+=g;g=k+1}}else{m=Array(f);for(h=0;h<f;++h)m[h]=String.fromCharCode(t[d+4+h]);m=m.join("")}E(d);return m},toWireType:function(d,
f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||w("Cannot pass non-string to std::string");var h=(c&&g?function(){for(var m=f,n=0,p=0;p<m.length;++p){var q=m.charCodeAt(p);55296<=q&&57343>=q&&(q=65536+((q&1023)<<10)|m.charCodeAt(++p)&1023);127>=q?++n:n=2047>=q?n+2:65535>=q?n+3:n+4}return n}:function(){return f.length})(),k=la(4+h+1);C[k>>2]=h;if(c&&g)Ua(f,t,k+4,h+1);else if(g)for(g=0;g<
h;++g){var l=f.charCodeAt(g);255<l&&(E(k),w("String has UTF-16 code units that do not fit in 8 bits"));t[k+4+g]=l}else for(g=0;g<h;++g)t[k+4+g]=f[g];null!==d&&d.push(E,k);return k},argPackAdvance:8,readValueFromPointer:ea,destructorFunction:function(d){E(d)}})},_embind_register_std_wstring:function(a,b,c){c=u(c);if(2===b){var d=Va;var f=Wa;var g=Xa;var h=function(){return aa};var k=1}else 4===b&&(d=Ya,f=Za,g=$a,h=function(){return C},k=2);D(a,{name:c,fromWireType:function(l){for(var m=C[l>>2],n=h(),
p,q=l+4,z=0;z<=m;++z){var v=l+4+z*b;if(z==m||0==n[v>>k])q=d(q,v-q),void 0===p?p=q:(p+=String.fromCharCode(0),p+=q),q=v+b}E(l);return p},toWireType:function(l,m){"string"!==typeof m&&w("Cannot pass non-string to C++ string type "+c);var n=g(m),p=la(4+n+b);C[p>>2]=n>>k;f(m,p+4,n+b);null!==l&&l.push(E,p);return p},argPackAdvance:8,readValueFromPointer:ea,destructorFunction:function(l){E(l)}})},_embind_register_value_object:function(a,b,c,d,f,g){ja[a]={name:u(b),rawConstructor:W(c,d),rawDestructor:W(f,
g),fields:[]}},_embind_register_value_object_field:function(a,b,c,d,f,g,h,k,l,m){ja[a].fields.push({fieldName:u(b),getterReturnType:c,getter:W(d,f),getterContext:g,setterArgumentType:h,setter:W(k,l),setterContext:m})},_embind_register_void:function(a,b){b=u(b);D(a,{isVoid:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(c,d){}})},_emval_decref:Ja,_emval_incref:function(a){4<a&&(x[a].refcount+=1)},_emval_new_cstring:function(a){return ka.toHandle(nb(a))},_emval_take_value:function(a,
b){var c=K[a];void 0===c&&w("_emval_take_value has unknown type "+Ka(a));a=c.readValueFromPointer(b);return ka.toHandle(a)},abort:function(){ba("")},emscripten_memcpy_big:function(a,b,c){t.copyWithin(a,b,b+c)},emscripten_resize_heap:function(a){var b=t.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.min(2147483648,ab(Math.max(a,d),65536));a:{try{ia.grow(d-ma.byteLength+65535>>>16);ya(ia.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},
fd_close:function(a){return 0},fd_seek:function(a,b,c,d,f){},fd_write:function(a,b,c,d){for(var f=0,g=0;g<c;g++){var h=r[b>>2],k=r[b+4>>2];b+=8;for(var l=0;l<k;l++)Z.printChar(a,t[h+l]);f+=k}r[d>>2]=f;return 0},setTempRet0:function(a){}};(function(){function a(f,g){e.asm=f.exports;ia=e.asm.memory;ya(ia.buffer);Ea=e.asm.__indirect_function_table;Na.unshift(e.asm.__wasm_call_ctors);L--;e.monitorRunDependencies&&e.monitorRunDependencies(L);0==L&&Y&&(f=Y,Y=null,f())}function b(f){a(f.instance)}function c(f){return bb().then(function(g){return WebAssembly.instantiate(g,
d)}).then(function(g){return g}).then(f,function(g){O("failed to asynchronously prepare wasm: "+g);ba(g)})}var d={env:Sa,wasi_snapshot_preview1:Sa};L++;e.monitorRunDependencies&&e.monitorRunDependencies(L);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return O("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return T||"function"!==typeof WebAssembly.instantiateStreaming||A.startsWith("data:application/octet-stream;base64,")||"function"!==typeof fetch?c(b):
fetch(A,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){O("wasm streaming compile failed: "+g);O("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(na);return{}})();e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.__wasm_call_ctors).apply(null,arguments)};var la=e._malloc=function(){return(la=e._malloc=e.asm.malloc).apply(null,arguments)},E=e._free=function(){return(E=e._free=e.asm.free).apply(null,
arguments)},La=e.___getTypeName=function(){return(La=e.___getTypeName=e.asm.__getTypeName).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.__embind_register_native_and_builtin_types).apply(null,arguments)};e.___errno_location=function(){return(e.___errno_location=e.asm.__errno_location).apply(null,arguments)};e.stackSave=function(){return(e.stackSave=e.asm.stackSave).apply(null,arguments)};e.stackRestore=function(){return(e.stackRestore=
e.asm.stackRestore).apply(null,arguments)};e.stackAlloc=function(){return(e.stackAlloc=e.asm.stackAlloc).apply(null,arguments)};e.dynCall_vij=function(){return(e.dynCall_vij=e.asm.dynCall_vij).apply(null,arguments)};e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.dynCall_jiji).apply(null,arguments)};var ha;Y=function b(){ha||va();ha||(Y=b)};e.run=va;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();va();return y.ready}}();R.exports=
S})(Q);Q=function(R,S){for(var M=0;M<S.length;M++){const y=S[M];if("string"!==typeof y&&!Array.isArray(y))for(const H in y)if("default"!==H&&!(H in R)){const I=Object.getOwnPropertyDescriptor(y,H);I&&Object.defineProperty(R,H,I.get?I:{enumerable:!0,get:()=>y[H]})}}return Object.freeze(Object.defineProperty(R,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:Q.exports},[Q.exports]);Ta.i3s=Q});