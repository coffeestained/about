// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Collection ../../../core/events ../../../core/HandleOwner ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/aliasOf ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/cast ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/subclass ../../Widget ./GridViewModel ../../support/widgetUtils ../../support/decorators/messageBundle ../../support/jsxFactory".split(" "),
function(gb,y,be,hb,ce,bc,ib,I,pg,qg,de,O,ee,fe,ge,he,ie,Z){function cc(b){requestAnimationFrame(function(){dc?dc(b):(jb||(jb=new Promise(a=>{kb=a}),"complete"===document.readyState?kb():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&kb()})),jb.then(function(){b&&b()}))})}function lb(b,a){for(let c in a)null===c?b.style.removeProperty(c):b.style.setProperty(c,a[c])}function ec(b,a){return(b=window.getComputedStyle(b).getPropertyValue(a))?b.trim():""}function fc(b){mb=
b&&b.shimcssproperties?!1:Ja||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"))}function la(b,a){if(b&&je.test(b)||"//"===b)return b;if(void 0===Ka){Ka=!1;try{const c=new URL("b","http://a");c.pathname="c%20d";Ka="http://a/c%20d"===c.href}catch(c){}}a||(a=document.baseURI||window.location.href);if(Ka)try{return(new URL(b,a)).href}catch(c){return b}D||(D=document.implementation.createHTMLDocument("temp"),D.base=D.createElement("base"),
D.head.appendChild(D.base),D.anchor=D.createElement("a"),D.body.appendChild(D.anchor));D.base.href=a;D.anchor.href=b;return D.anchor.href||b}function nb(b,a){return b.replace(ke,function(c,d,e,f){return d+"'"+la(e.replace(/["']/g,""),a)+"'"+f})}function ob(b){return b.substring(0,b.lastIndexOf("/")+1)}function gc(b){b=nb((b.body?b.body:b).textContent,b.baseURI);const a=document.createElement("style");a.textContent=b;return a}function le(b){b=b.trim().split(/\s+/);const a=[];for(let c=0;c<b.length;c++)a.push(...me(b[c]));
return a}function me(b){const a=P.import(b);if(!a)return console.warn("Could not find style data in module named",b),[];if(void 0===a._styles){b=[];b.push(...pb(a));const c=a.querySelector("template");c&&b.push(...qb(c,a.assetpath));a._styles=b}return a._styles}function qb(b,a){if(!b._styles){const c=[],d=b.content.querySelectorAll("style");for(let e=0;e<d.length;e++){let f=d[e],g=f.getAttribute("include");g&&c.push(...le(g).filter(function(h,k,l){return l.indexOf(h)===k}));a&&(f.textContent=nb(f.textContent,
a));c.push(f)}b._styles=c}return b._styles}function ne(b){return(b=P.import(b))?pb(b):[]}function pb(b){const a=[];b=b.querySelectorAll("link[rel\x3dimport][type~\x3dcss]");for(let d=0;d<b.length;d++){var c=b[d];if(c.import){const e=c.import;if((c=c.hasAttribute("shady-unscoped"))&&!e._unscopedStyle){const f=gc(e);f.setAttribute("shady-unscoped","");e._unscopedStyle=f}else e._style||(e._style=gc(e));a.push(c?e._unscopedStyle:e._style)}}return a}function J(b){let a=b.indexOf(".");return-1===a?b:b.slice(0,
a)}function ma(b){if(Array.isArray(b)){let a=[];for(let c=0;c<b.length;c++){let d=b[c].toString().split(".");for(let e=0;e<d.length;e++)a.push(d[e])}return a.join(".")}return b}function hc(b){return Array.isArray(b)?ma(b).split("."):b.toString().split(".")}function B(b,a,c){a=hc(a);for(let d=0;d<a.length;d++){if(!b)return;b=b[a[d]]}c&&(c.path=a.join("."));return b}function ic(b,a,c){let d=hc(a),e=d[d.length-1];if(1<d.length){for(a=0;a<d.length-1;a++)if(b=b[d[a]],!b)return;b[e]=c}else b[a]=c;return d.join(".")}
function jc(b){return La[b]||(La[b]=0>b.indexOf("-")?b:b.replace(oe,a=>a[1].toUpperCase()))}function Ma(b){return La[b]||(La[b]=b.replace(pe,"-$1").toLowerCase())}function kc(b,a){let c=a.parentInfo&&kc(b,a.parentInfo);if(c)for(let d=c.firstChild,e=0;d;d=d.nextSibling){if(a.parentIndex===e++)return d}else return b}function qe(b,a,c){b=b._methodHost||b;return function(d){if(b[c])b[c](d,d.detail);else console.warn("listener method `"+c+"` not defined")}}function rb(b,a,c){let d=b[a];if(!d)d=b[a]={};
else if(!b.hasOwnProperty(a)&&(d=b[a]=Object.create(b[a]),c))for(let e in d)for(b=d[e],a=d[e]=Array(b.length),c=0;c<b.length;c++)a[c]=b[c];return d}function na(b,a,c,d,e,f){if(a){let h=!1;const k=oa++;for(let l in c){var g=e?J(l):l;if(g=a[g])for(let m=0,n=g.length,p;m<n&&(p=g[m]);m++)p.info&&p.info.lastRun===k||e&&!sb(l,p.trigger)||(p.info&&(p.info.lastRun=k),p.fn(b,l,c,d,p.info,e,f),h=!0)}return h}return!1}function sb(b,a){if(a){let c=a.name;return c==b||!(!a.structured||0!==c.indexOf(b+"."))||!(!a.wildcard||
0!==b.indexOf(c+"."))}return!0}function lc(b,a,c,d,e){a="string"===typeof e.method?b[e.method]:e.method;c=e.property;a?a.call(b,b.__data[c],d[c]):e.dynamicFn||console.warn("observer method `"+e.method+"` not defined")}function mc(b,a,c,d){c={value:c,queueProperty:!0};d&&(c.path=d);q(b).dispatchEvent(new CustomEvent(a,{detail:c}))}function re(b,a,c,d,e,f){f=(d=(f?J(a):a)!=a?a:null)?B(b,d):b.__data[a];d&&void 0===f&&(f=c[a]);mc(b,e.eventName,f,d)}function se(b,a,c,d,e){c=b.__data[a];Na&&(c=Na(c,e.attrName,
"attribute",b));b._propertyToAttribute(a,e.attrName,c)}function te(b){let a=b.constructor.__orderedComputedDeps;if(!a){a=new Map;const d=b[t.COMPUTE];let {counts:e,ready:f,total:g}=ue(b);for(var c;c=f.shift();)a.set(c,a.size),(c=d[c])&&c.forEach(h=>{h=h.info.methodInfo;--g;0===--e[h]&&f.push(h)});0!==g&&console.warn(`Computed graph for ${b.localName} incomplete; circular?`);b.constructor.__orderedComputedDeps=a}return a}function ue(b){const a=b.__computeInfo,c={};b=b[t.COMPUTE];const d=[];let e=0;
for(let f in a){const g=a[f];e+=c[f]=g.args.filter(h=>!h.literal).length+(g.dynamicFn?1:0)}for(let f in b)a[f]||d.push(f);return{counts:c,ready:d,total:e}}function nc(b,a,c,d,e){a=tb(b,a,c,d,e);if(a===pa)return!1;e=e.methodInfo;if(b.__dataHasAccessor&&b.__dataHasAccessor[e])return b._setPendingProperty(e,a,!0);b[e]=a;return!1}function ub(b,a,c,d,e,f,g){c.bindings=c.bindings||[];d={kind:d,target:e,parts:f,literal:g,isCompound:1!==f.length};c.bindings.push(d);if(d.target&&"attribute"!=d.kind&&"text"!=
d.kind&&!d.isCompound&&"{"===d.parts[0].mode){let {event:n,negate:p}=d.parts[0];d.listenerEvent=n||Ma(e)+"-changed";d.listenerNegate=p}c=a.nodeInfoList.length;for(g=0;g<d.parts.length;g++){var h=d.parts[g];h.compoundIndex=g;e=b;f=a;var k=d,l=h,m=c;if(!l.literal)if("attribute"===k.kind&&"-"===k.target[0])console.warn("Cannot set attribute "+k.target+' because "-" is not a valid attribute starting character');else for(h=l.dependencies,k={index:m,binding:k,part:l,evaluator:e},l=0;l<h.length;l++)m=h[l],
"string"==typeof m&&(m=oc(m),m.wildcard=!0),e._addTemplatePropertyEffect(f,m.rootProperty,{fn:ve,info:k,trigger:m})}}function ve(b,a,c,d,e,f,g){g=g[e.index];var h=e.binding;let k=e.part;f&&k.source&&a.length>k.source.length&&"property"==h.kind&&!h.isCompound&&g.__isPropertyEffectsClient&&g.__dataHasAccessor&&g.__dataHasAccessor[h.target]?(c=c[a],a=h.target+a.slice(k.source.length),g._setPendingPropertyOrPath(a,c,!1,!0)&&b._enqueueClient(g)):(a=e.evaluator._evaluateBinding(b,k,a,c,d,f),a!==pa&&(h.isCompound&&
(c=g.__dataCompoundStorage[h.target],c[k.compoundIndex]=a,a=c.join("")),"attribute"===h.kind||"textContent"!==h.target&&("value"!==h.target||"input"!==g.localName&&"textarea"!==g.localName)||(a=void 0==a?"":a),Na&&(a=Na(a,h.target,h.kind,g)),"attribute"==h.kind?b._valueToNodeAttribute(g,a,h.target):(h=h.target,g.__isPropertyEffectsClient&&g.__dataHasAccessor&&g.__dataHasAccessor[h]?g[t.READ_ONLY]&&g[t.READ_ONLY][h]||g._setPendingProperty(h,a)&&b._enqueueClient(g):b._setUnmanagedPropertyToNode(g,h,
a))))}function we(b,a,c){if(c.listenerEvent){let d=c.parts[0];b.addEventListener(c.listenerEvent,function(e){{var f=c.target,g=d.source,h=d.negate;let k=e.detail,l=k&&k.path;l?(g+=l.slice(f.length),e=k&&k.value):e=e.currentTarget[f];a[t.READ_ONLY]&&a[t.READ_ONLY][g]||!a._setPendingPropertyOrPath(g,h?!e:e,!0,!!l)||k&&k.queueProperty||a._invalidateProperties()}})}}function pc(b,a,c,d,e,f){f=a.static||f&&("object"!==typeof f||f[a.methodName]);e={methodName:a.methodName,args:a.args,methodInfo:e,dynamicFn:f};
for(let g=0,h;g<a.args.length&&(h=a.args[g]);g++)h.literal||b._addPropertyEffect(h.rootProperty,c,{fn:d,info:e,trigger:h});f&&b._addPropertyEffect(a.methodName,c,{fn:d,info:e});return e}function tb(b,a,c,d,e){d=b._methodHost||b;let f=d[e.methodName];if(f)return b=b._marshalArgs(e.args,a,c),b===pa?pa:f.apply(d,b);e.dynamicFn||console.warn("method `"+e.methodName+"` not defined")}function qc(b){let a="";for(let c=0;c<b.length;c++)a+=b[c].literal||"";return a}function vb(b){var a=b.match(/([^\s]+?)\(([\s\S]*)\)/);
return a?(b={methodName:a[1],static:!0,args:xe},a[2].trim()?(a=a[2].replace(/\\,/g,"\x26comma;").split(","),ye(a,b)):b):null}function ye(b,a){a.args=b.map(function(c){c=oc(c);c.literal||(a.static=!1);return c},this);return a}function oc(b){b=b.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1");let a={name:b,value:"",literal:!1},c=b[0];"-"===c&&(c=b[1]);"0"<=c&&"9">=c&&(c="#");switch(c){case "'":case '"':a.value=b.slice(1,-1);a.literal=!0;break;case "#":a.value=Number(b),a.literal=!0}a.literal||
(a.rootProperty=J(b),a.structured=0<=b.indexOf("."),a.structured&&(a.wildcard=".*"==b.slice(-2),a.wildcard&&(a.name=b.slice(0,-2))));return a}function rc(b,a,c){b=B(b,c);void 0===b&&(b=a[c]);return b}function sc(b,a,c,d){d={indexSplices:d};wb&&!b._overrideLegacyUndefined&&(a.splices=d);b.notifyPath(c+".splices",d);b.notifyPath(c+".length",a.length);wb&&!b._overrideLegacyUndefined&&(d.indexSplices=[])}function qa(b,a,c,d,e,f){sc(b,a,c,[{index:d,addedCount:e,removed:f,object:a,type:"splice"}])}function ze(b){return b[0].toUpperCase()+
b.substring(1)}function tc(b){if(!(-1<Oa.indexOf(b))&&"touchend"!==b&&xb&&yb&&Ae)return{passive:!0}}function uc(b){let a=vc?["click"]:Oa;for(let c=0,d;c<a.length;c++)d=a[c],b?(zb.length=0,document.addEventListener(d,wc,!0)):document.removeEventListener(d,wc,!0)}function aa(b){var a=b.type;return-1<Oa.indexOf(a)?"mousemove"===a?(a=void 0===b.buttons?1:b.buttons,b instanceof window.MouseEvent&&!Be&&(a=Ce[b.which]||0),!!(a&1)):0===(void 0===b.button?0:b.button):!1}function De(b){if("click"===b.type){if(0===
b.detail)return!0;var a=Q(b);if(!a.nodeType||a.nodeType!==Node.ELEMENT_NODE)return!0;a=a.getBoundingClientRect();let c=b.pageX;b=b.pageY;return!(c>=a.left&&c<=a.right&&b>=a.top&&b<=a.bottom)}return!1}function xc(b,a,c){b.movefn=a;b.upfn=c;document.addEventListener("mousemove",a);document.addEventListener("mouseup",c)}function ca(b){document.removeEventListener("mousemove",b.movefn);document.removeEventListener("mouseup",b.upfn);b.movefn=null;b.upfn=null}function Q(b){const a=Pa(b);return 0<a.length?
a[0]:b.target}function yc(b){let a=b.type;var c=b.currentTarget.__polymerGestures;if(c&&(c=c[a])){if(!b.__polymerGesturesHandled&&(b.__polymerGesturesHandled={},"touch"===a.slice(0,5))){var d=b.changedTouches[0];"touchstart"===a&&1===b.touches.length&&(z.touch.id=d.identifier);if(z.touch.id!==d.identifier)return;if(!xb&&("touchstart"===a||"touchmove"===a)){d=b.changedTouches[0];var e=b.type;if("touchstart"===e)z.touch.x=d.clientX,z.touch.y=d.clientY,z.touch.scrollDecided=!1;else if("touchmove"===
e&&!z.touch.scrollDecided){z.touch.scrollDecided=!0;e="auto";var f=Pa(b);for(let h=0,k;h<f.length;h++)if(k=f[h],k.__polymerGesturesTouchAction){e=k.__polymerGesturesTouchAction;break}f=!1;var g=Math.abs(z.touch.x-d.clientX);d=Math.abs(z.touch.y-d.clientY);b.cancelable&&("none"===e?f=!0:"pan-x"===e?f=d>g:"pan-y"===e&&(f=g>d));f?b.preventDefault():Qa("track")}}}d=b.__polymerGesturesHandled;if(!d.skip){for(let h=0,k;h<ba.length;h++)k=ba[h],c[k.name]&&!d[k.name]&&k.flow&&-1<k.flow.start.indexOf(b.type)&&
k.reset&&k.reset();for(let h=0,k;h<ba.length;h++)k=ba[h],c[k.name]&&!d[k.name]&&(d[k.name]=!0,k[a](b))}}}function Ab(b,a,c){if(ra[a]){{let d=ra[a],e=d.deps,f=d.name,g=b.__polymerGestures;g||(b.__polymerGestures=g={});for(let h=0,k,l;h<e.length;h++)k=e[h],vc&&-1<Oa.indexOf(k)&&"click"!==k||((l=g[k])||(g[k]=l={_count:0}),0===l._count&&b.addEventListener(k,yc,tc(k)),l[f]=(l[f]||0)+1,l._count=(l._count||0)+1);b.addEventListener(a,c);d.touchAction&&zc(b,d.touchAction)}return!0}return!1}function Bb(b){ba.push(b);
for(let a=0;a<b.emits.length;a++)ra[b.emits[a]]=b}function zc(b,a){xb&&b instanceof HTMLElement&&F.run(()=>{b.style.touchAction=a});b.__polymerGesturesTouchAction=a}function Cb(b,a,c){a=new Event(a,{bubbles:!0,cancelable:!0,composed:!0});a.detail=c;q(b).dispatchEvent(a);a.defaultPrevented&&(b=c.preventer||c.sourceEvent)&&b.preventDefault&&b.preventDefault()}function Qa(b){a:{for(let a=0,c;a<ba.length;a++){c=ba[a];for(let d=0,e;d<c.emits.length;d++)if(e=c.emits[d],e===b){b=c;break a}}b=null}b.info&&
(b.info.prevent=!0)}function sa(b,a,c,d){a&&Cb(a,b,{x:c.clientX,y:c.clientY,sourceEvent:c,preventer:d,prevent:function(e){return Qa(e)}})}function Ac(b,a,c){if(b.prevent)return!1;if(b.started)return!0;c=Math.abs(b.y-c);return 5<=Math.abs(b.x-a)||5<=c}function Db(b,a,c){if(a){var d=b.moves[b.moves.length-2],e=b.moves[b.moves.length-1],f=e.x-b.x,g=e.y-b.y,h=0;if(d){var k=e.x-d.x;h=e.y-d.y}Cb(a,"track",{state:b.state,x:c.clientX,y:c.clientY,dx:f,dy:g,ddx:k,ddy:h,sourceEvent:c,hover:function(){{var l=
c.clientX;var m=c.clientY;let n=document.elementFromPoint(l,m),p=n;for(;p&&p.shadowRoot&&!window.ShadyDOM;){let r=p;p=p.shadowRoot.elementFromPoint(l,m);if(r===p)break;p&&(n=p)}l=n}return l}})}}function Bc(b,a,c){let d=Math.abs(a.clientX-b.x),e=Math.abs(a.clientY-b.y),f=Q(c||a);!f||Ee[f.localName]&&f.hasAttribute("disabled")||!(isNaN(d)||isNaN(e)||25>=d&&25>=e||De(a))||b.prevent||Cb(f,"tap",{x:a.clientX,y:a.clientY,sourceEvent:a,preventer:c})}function Fe(){return Cc(function(){return!0})}function Ge(){return Ra&&
0<Object.keys(Ra).map(b=>Ra[b]).filter(b=>b.productionMode).length?!0:!1}function Cc(b,a){if("function"===typeof b){var c=He.exec(b.toString());if(c)try{b=new Function(c[1])}catch(d){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",d)}return b(a)}}function Ie(){}function Dc(){Sa=!0;requestAnimationFrame(function(){Sa=!1;Je(Ec);setTimeout(function(){var b=Fc;for(let a=0,c=b.length;a<c;a++)Gc(b.shift())})})}function Je(b){for(;b.length;)Gc(b.shift())}function Gc(b){const a=b[0],
c=b[1];b=b[2];try{c.apply(a,b)}catch(d){setTimeout(()=>{throw d;})}}function Ke(b,a,c){Sa||Dc();Ec.push([b,a,c])}function Le(b,a,c){Sa||Dc();Fc.push([b,a,c])}function Hc(b){b=b.replace(K.comments,"").replace(K.port,"");{var a=b;let c=new Ic;c.start=0;c.end=a.length;let d=c;for(let e=0,f=a.length;e<f;e++)if("{"===a[e]){d.rules||(d.rules=[]);let g=d,h=g.rules[g.rules.length-1]||null;d=new Ic;d.start=e+1;d.parent=g;d.previous=h;g.rules.push(d)}else"}"===a[e]&&(d.end=e+1,d=d.parent||c);a=c}return Jc(a,
b)}function Jc(b,a){var c=a.substring(b.start,b.end-1);b.parsedCssText=b.cssText=c.trim();b.parent&&(c=a.substring(b.previous?b.previous.end:b.parent.start,b.start-1),c=Me(c),c=c.replace(K.multipleSpaces," "),c=c.substring(c.lastIndexOf(";")+1),c=b.parsedSelector=b.selector=c.trim(),b.atRule=0===c.indexOf("@"),b.atRule?0===c.indexOf("@media")?b.type=R.MEDIA_RULE:c.match(K.keyframesRule)&&(b.type=R.KEYFRAMES_RULE,b.keyframesName=b.selector.split(K.multipleSpaces).pop()):0===c.indexOf("--")?b.type=
R.MIXIN_RULE:b.type=R.STYLE_RULE);if(c=b.rules)for(let d=0,e=c.length,f;d<e&&(f=c[d]);d++)Jc(f,a);return b}function Me(b){return b.replace(/\\([0-9a-f]{1,6})\s/gi,function(a,c){a=c;for(c=6-a.length;c--;)a="0"+a;return"\\"+a})}function Kc(b,a,c=""){let d="";if(b.cssText||b.rules){let f=b.rules;var e;if(e=f)e=f[0],e=!!e&&!!e.selector&&0===e.selector.indexOf("--"),e=!e;if(e)for(let g=0,h=f.length,k;g<h&&(k=f[g]);g++)d=Kc(k,a,d);else a?a=b.cssText:(a=b.cssText,a=a.replace(K.customProp,"").replace(K.mixinProp,
""),a=a.replace(K.mixinApply,"").replace(K.varApply,"")),(d=a.trim())&&(d="  "+d+"\n")}d&&(b.selector&&(c+=b.selector+" {\n"),c+=d,b.selector&&(c+="}\n\n"));return c}function Eb(b,a){if(!b)return"";"string"===typeof b&&(b=Hc(b));a&&ta(b,a);return Kc(b,Fb)}function Lc(b){!b.__cssRules&&b.textContent&&(b.__cssRules=Hc(b.textContent));return b.__cssRules||null}function ta(b,a,c,d){if(b){var e=!1,f=b.type;if(d&&f===R.MEDIA_RULE){let g=b.selector.match(Ne);g&&(window.matchMedia(g[1]).matches||(e=!0))}f===
R.STYLE_RULE?a(b):c&&f===R.KEYFRAMES_RULE?c(b):f===R.MIXIN_RULE&&(e=!0);if((b=b.rules)&&!e)for(let g=0,h=b.length,k;g<h&&(k=b[g]);g++)ta(k,a,c,d)}}function Mc(b,a){var c=b.indexOf("var(");if(-1===c)return a(b,"","","");a:{var d=0;for(let g=c+3,h=b.length;g<h;g++)if("("===b[g])d++;else if(")"===b[g]&&0===--d){d=g;break a}d=-1}var e=d;d=b.substring(c+4,e);c=b.substring(0,c);b=Mc(b.substring(e+1),a);let f=d.indexOf(",");if(-1===f)return a(c,d.trim(),"",b);e=d.substring(0,f).trim();d=d.substring(f+1).trim();
return a(c,e,d,b)}function Nc(b){if(void 0!==ua)return ua;if(void 0===b.__cssBuild){var a=b.getAttribute("css-build");if(a)b.__cssBuild=a;else{a:{a="template"===b.localName?b.content.firstChild:b.firstChild;if(a instanceof Comment&&(a=a.textContent.trim().split(":"),"css-build"===a[0])){a=a[1];break a}a=""}if(""!==a){{const c="template"===b.localName?b.content.firstChild:b.firstChild;c.parentNode.removeChild(c)}}b.__cssBuild=a}}return b.__cssBuild||""}function Oe(b){if(b=Gb[b])b._applyShimCurrentVersion=
b._applyShimCurrentVersion||0,b._applyShimValidatingVersion=b._applyShimValidatingVersion||0,b._applyShimNextVersion=(b._applyShimNextVersion||0)+1}function Oc(b){return b._applyShimCurrentVersion===b._applyShimNextVersion}function Pe(b){b._applyShimValidatingVersion=b._applyShimNextVersion;b._validating||(b._validating=!0,Qe.then(function(){b._applyShimCurrentVersion=b._applyShimNextVersion;b._validating=!1}))}function Pc(){va=document.documentElement.getAttribute("dir");va=document.documentElement.getAttribute("dir");
for(let a=0;a<wa.length;a++){var b=wa[a];b.__autoDirOptOut||b.setAttribute("dir",va)}}function Qc(){document.body.removeAttribute("unresolved")}function xa(b,a,c){return{index:b,removed:a,addedCount:c}}function Rc(b,a,c,d,e,f){var g=0,h=0,k=Math.min(c-a,f-e);if(0==a&&0==e)a:{for(g=0;g<k;g++)if(b[g]!==d[g])break a;g=k}if(c==b.length&&f==d.length){h=k-g;k=b.length;for(var l=d.length,m=0;m<h&&Re(b[--k],d[--l]);)m++;h=m}a+=g;e+=g;c-=h;f-=h;if(0==c-a&&0==f-e)return[];if(a==c){for(b=xa(a,[],0);e<f;)b.removed.push(d[e++]);
return[b]}if(e==f)return[xa(a,[],c-a)];g=a;h=e;f=f-h+1;c=c-g+1;k=Array(f);for(l=0;l<f;l++)k[l]=Array(c),k[l][0]=l;for(l=0;l<c;l++)k[0][l]=l;for(l=1;l<f;l++)for(m=1;m<c;m++)if(b[g+m-1]===d[h+l-1])k[l][m]=k[l-1][m-1];else{var n=k[l-1][m]+1;let p=k[l][m-1]+1;k[l][m]=n<p?n:p}b=k;c=b.length-1;f=b[0].length-1;g=b[c][f];for(h=[];0<c||0<f;)0==c?(h.push(2),f--):0==f?(h.push(3),c--):(k=b[c-1][f-1],l=b[c-1][f],m=b[c][f-1],n=l<m?l<k?l:k:m<k?m:k,n==k?(k==g?h.push(0):(h.push(1),g=k),c--,f--):n==l?(h.push(3),c--,
g=l):(h.push(2),f--,g=m));h.reverse();c=h;b=void 0;f=[];for(g=0;g<c.length;g++)switch(c[g]){case 0:b&&(f.push(b),b=void 0);a++;e++;break;case 1:b||(b=xa(a,[],0));b.addedCount++;a++;b.removed.push(d[e]);e++;break;case 2:b||(b=xa(a,[],0));b.addedCount++;a++;break;case 3:b||(b=xa(a,[],0)),b.removed.push(d[e]),e++}b&&f.push(b);return f}function Re(b,a){return b===a}function da(b){return"slot"===b.localName}function Se(b,a){for(let c=0;c<a.length;c++){let d=a[c];b[d]=function(){return this.node[d].apply(this.node,
arguments)}}}function Sc(b,a){for(let c=0;c<a.length;c++){let d=a[c];Object.defineProperty(b,d,{get:function(){return this.node[d]},configurable:!0})}}function Te(b,a){for(let c=0;c<a.length;c++){let d=a[c];Object.defineProperty(b,d,{get:function(){return this.node[d]},set:function(e){this.node[d]=e},configurable:!0})}}function Ue(b,a=!1){if(!Hb||!Tc||!Hb.handlesDynamicScoping)return null;const c=Tc.ScopingShim;if(!c)return null;const d=c.scopeForNode(b),e=q(b).getRootNode(),f=g=>{if(q(g).getRootNode()===
e){var h=Array.from(Hb.nativeMethods.querySelectorAll.call(g,"*"));h.push(g);for(g=0;g<h.length;g++){const l=h[g];var k=e;q(l).getRootNode()===k&&(k=c.currentScopeForNode(l),k!==d&&(""!==k&&c.unscopeNode(l,k),c.scopeNode(l,d)))}}};f(b);return a?(a=new MutationObserver(g=>{for(let h=0;h<g.length;h++){const k=g[h];for(let l=0;l<k.addedNodes.length;l++){const m=k.addedNodes[l];m.nodeType===Node.ELEMENT_NODE&&f(m)}}}),a.observe(b,{childList:!0,subtree:!0}),a):null}function Uc(b,a,c,d){{const e=a._noAccessors,
f=Object.getOwnPropertyNames(a);for(let g=0;g<f.length;g++){let h=f[g];if(!(h in d))if(e)b[h]=a[h];else{let k=Object.getOwnPropertyDescriptor(a,h);k&&(k.configurable=!0,Object.defineProperty(b,h,k))}}}for(let e in Ve)a[e]&&(c[e]=c[e]||[],c[e].push(a[e]))}function Vc(b,a,c){a=a||[];for(let d=b.length-1;0<=d;d--){let e=b[d];e?Array.isArray(e)?Vc(e,a):0>a.indexOf(e)&&(!c||0>c.indexOf(e))&&a.unshift(e):console.warn("behavior is null, check for missing or 404 import")}return a}function Wc(b,a){for(const c in a){const d=
b[c],e=a[c];b[c]=!("value"in e)&&d&&"value"in d?Object.assign({value:d.value},e):e}}function We(b,a,c){let d;const e={};class f extends a{static _finalizeClass(){if(this.hasOwnProperty("generatedFrom")){if(d)for(let h=0,k;h<d.length;h++)k=d[h],k.properties&&this.createProperties(k.properties),k.observers&&this.createObservers(k.observers,k.properties);b.properties&&this.createProperties(b.properties);b.observers&&this.createObservers(b.observers,b.properties);this._prepareTemplate()}else a._finalizeClass.call(this)}static get properties(){const h=
{};if(d)for(let k=0;k<d.length;k++)Wc(h,d[k].properties);Wc(h,b.properties);return h}static get observers(){let h=[];if(d)for(let k=0,l;k<d.length;k++)l=d[k],l.observers&&(h=h.concat(l.observers));b.observers&&(h=h.concat(b.observers));return h}created(){super.created();const h=e.created;if(h)for(let k=0;k<h.length;k++)h[k].call(this)}_registered(){var h=f.prototype;if(!h.hasOwnProperty("__hasRegisterFinished")){h.__hasRegisterFinished=!0;super._registered();ya&&g(h);h=Object.getPrototypeOf(this);
let l=e.beforeRegister;if(l)for(var k=0;k<l.length;k++)l[k].call(h);if(l=e.registered)for(k=0;k<l.length;k++)l[k].call(h)}}_applyListeners(){super._applyListeners();const h=e.listeners;if(h)for(let k=0;k<h.length;k++){const l=h[k];if(l)for(let m in l)this._addMethodEventListenerToNode(this,m,l[m])}}_ensureAttributes(){const h=e.hostAttributes;if(h)for(let k=h.length-1;0<=k;k--){const l=h[k];for(let m in l)this._ensureAttribute(m,l[m])}super._ensureAttributes()}ready(){super.ready();let h=e.ready;
if(h)for(let k=0;k<h.length;k++)h[k].call(this)}attached(){super.attached();let h=e.attached;if(h)for(let k=0;k<h.length;k++)h[k].call(this)}detached(){super.detached();let h=e.detached;if(h)for(let k=0;k<h.length;k++)h[k].call(this)}attributeChanged(h,k,l){super.attributeChanged();let m=e.attributeChanged;if(m)for(let n=0;n<m.length;n++)m[n].call(this,h,k,l)}}if(c){Array.isArray(c)||(c=[c]);let h=a.prototype.behaviors;d=Vc(c,null,h);f.prototype.behaviors=h?h.concat(c):d}const g=h=>{if(d){var k=d;
for(let l=0;l<k.length;l++)Uc(h,k[l],e,Xe)}Uc(h,b,e,Xc)};ya||g(f.prototype);f.generatedFrom=b;return f}function Ib(b,a,c,d,e){let f;e&&(f="object"===typeof c&&null!==c)&&(d=b.__dataTemp[a]);d=d!==c&&(d===d||c===c);f&&d&&(b.__dataTemp[a]=c);return d}function Jb(){return Kb}function Yc(b,a){for(let c=0;c<a.length;c++){let d=a[c];if(!!b!=!!d.__hideTemplateChildren__)if(d.nodeType===Node.TEXT_NODE)b?(d.__polymerTextContent__=d.textContent,d.textContent=""):d.textContent=d.__polymerTextContent__;else if("slot"===
d.localName)if(b)d.__polymerReplaced__=document.createComment("hidden-slot"),q(q(d).parentNode).replaceChild(d.__polymerReplaced__,d);else{const e=d.__polymerReplaced__;e&&q(q(e).parentNode).replaceChild(d,e)}else d.style&&(b?(d.__polymerDisplay__=d.style.display,d.style.display="none"):d.style.display=d.__polymerDisplay__);d.__hideTemplateChildren__=b;d._showHideChildren&&d._showHideChildren(b)}}function Zc(b){return(b=b.__dataHost)&&b._methodHost||b}function Ye(b,a){return function(c,d,e){a.call(c.__templatizeOwner,
d.substring(6),e[d])}}function Ze(b,a){return function(c,d,e){a.call(c.__templatizeOwner,c,d,e[d])}}function $e(){return function(b,a,c){b.__dataHost._setPendingPropertyOrPath("_host_"+a,c[a],!0,!0)}}function za(b,a,c){if(ea&&!Zc(b))throw Error("strictTemplatePolicy: template owner not trusted");c=c||{};if(b.__templatizeOwner)throw Error("A \x3ctemplate\x3e can only be templatized once");b.__templatizeOwner=a;let d=(a?a.constructor:S)._parseTemplate(b);var e=d.templatizeInstanceClass;if(!e){e=c;var f=
e.mutableData?af:S;za.mixin&&(f=za.mixin(f));var g=class extends f{};g.prototype.__templatizeOptions=e;g.prototype._bindTemplate(b);f=g;var h=d.hostProps||{};for(var k in e.instanceProps){delete h[k];var l=e.notifyInstanceProp;l&&f.prototype._addPropertyEffect(k,f.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Ze(k,l)})}if(e.forwardHostProp&&b.__dataHost)for(var m in h)d.hasHostProps||(d.hasHostProps=!0),f.prototype._addPropertyEffect(m,f.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:$e()});e=g;d.templatizeInstanceClass=
e}k=Zc(b);f=c;if((g=f.forwardHostProp)&&d.hasHostProps){c="template"==b.localName;m=d.templatizeTemplateClass;if(!m){if(c){m=f.mutableData?bf:$c;class v extends m{}m=d.templatizeTemplateClass=v}else{m=b.constructor;class v extends m{}m=d.templatizeTemplateClass=v}h=d.hostProps;for(var n in h)m.prototype._addPropertyEffect("_host_"+n,m.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Ye(n,g)}),m.prototype._createNotifyingProperty("_host_"+n);if(ad&&k){n=k.constructor._properties;({propertyEffects:g}=
d);({instanceProps:f}=f);for(var p in g)if(!(n[p]||f&&f[p]))for(h=g[p],l=0;l<h.length;l++){const {part:v}=h[l].info;if(!v.signature||!v.signature.static){console.warn(`Property '${p}' used in template but not `+"declared in 'properties'; attribute will not be observed.");break}}}}b.__dataProto&&Object.assign(b.__data,b.__dataProto);if(c){var r=m;Kb=b;Object.setPrototypeOf(b,r.prototype);new r;Kb=null;b.__dataTemp={};b.__dataPending=null;b.__dataOld=null;b._enableProperties()}else for(r in Object.setPrototypeOf(b,
m.prototype),p=d.hostProps,p)r="_host_"+r,r in b&&(p=b[r],delete b[r],b.__data[r]=p)}r=class extends e{};r.prototype._methodHost=k;r.prototype.__dataHost=b;r.prototype.__templatizeOwner=a;r.prototype.__hostProps=d.hostProps;return r}function Lb(){if(ya&&!Mb){if(!bd){bd=!0;const b=document.createElement("style");b.textContent="dom-bind,dom-if,dom-repeat{display:none;}";document.head.appendChild(b)}return!0}return!1}class cf extends HTMLElement{static get version(){return"1.6.1"}}customElements.define("vaadin-lumo-styles",
cf);let jb=null,dc=window.HTMLImports&&window.HTMLImports.whenReady||null,kb,Ta=null,Aa=null;class T{constructor(){this.customStyles=[];this.enqueued=!1;cc(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&Aa&&(this.enqueued=!0,cc(Aa))}addCustomStyle(b){b.__seenByShadyCSS||(b.__seenByShadyCSS=!0,this.customStyles.push(b),this.enqueueDocumentValidation())}getStyleForCustomStyle(b){return b.__shadyCSSCachedStyle?b.__shadyCSSCachedStyle:
b.getStyle?b.getStyle():b}processStyles(){const b=this.customStyles;for(let c=0;c<b.length;c++){const d=b[c];if(!d.__shadyCSSCachedStyle){var a=this.getStyleForCustomStyle(d);a&&(a=a.__appliedElement||a,Ta&&Ta(a),d.__shadyCSSCachedStyle=a)}}return b}}T.prototype.addCustomStyle=T.prototype.addCustomStyle;T.prototype.getStyleForCustomStyle=T.prototype.getStyleForCustomStyle;T.prototype.processStyles=T.prototype.processStyles;Object.defineProperties(T.prototype,{transformCallback:{get(){return Ta},set(b){Ta=
b}},validateCallback:{get(){return Aa},set(b){let a=!1;Aa||(a=!0);Aa=b;a&&this.enqueueDocumentValidation()}}});const Nb=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Ua=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Ne=/@media\s(.*)/,Ja=!(window.ShadyDOM&&window.ShadyDOM.inUse);let mb,ua;window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(ua=window.ShadyCSS.cssBuild);const cd=!(!window.ShadyCSS||!window.ShadyCSS.disableRuntime);
window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?mb=window.ShadyCSS.nativeCss:window.ShadyCSS?(fc(window.ShadyCSS),window.ShadyCSS=void 0):fc(window.WebComponents&&window.WebComponents.flags);const Fb=mb,Va=new T;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(b,a,c){},prepareTemplateDom(b,a){},prepareTemplateStyles(b,a,c){},styleSubtree(b,a){Va.processStyles();lb(b,a)},styleElement(b){Va.processStyles()},styleDocument(b){Va.processStyles();lb(document.body,b)},getComputedStyleValue(b,a){return ec(b,
a)},flushCustomStyles(){},nativeCss:Fb,nativeShadow:Ja,cssBuild:ua,disableRuntime:cd});window.ShadyCSS.CustomStyleInterface=Va;window.JSCompiler_renameProperty=function(b,a){return b};let ke=/(url\()([^)]*)(\))/g,je=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Ka,D;const Mb=!window.ShadyDOM||!window.ShadyDOM.inUse;!(window.ShadyCSS&&!window.ShadyCSS.nativeCss);const df=Mb&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const b=new CSSStyleSheet;b.replaceSync("");const a=
document.createElement("div");a.attachShadow({mode:"open"});a.shadowRoot.adoptedStyleSheets=[b];return a.shadowRoot.adoptedStyleSheets[0]===b}catch(b){return!1}})();let ef=window.Polymer&&window.Polymer.rootPath||ob(document.baseURI||window.location.href),Na=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Ae=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,ea=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,ff=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,
ya=window.Polymer&&window.Polymer.legacyOptimizations||!1,ad=window.Polymer&&window.Polymer.legacyWarnings||!1,gf=window.Polymer&&window.Polymer.syncInitialRender||!1,wb=window.Polymer&&window.Polymer.legacyUndefined||!1,hf=window.Polymer&&window.Polymer.orderedComputed||!1,dd=window.Polymer&&window.Polymer.removeNestedTemplates||!1,ed=window.Polymer&&window.Polymer.fastDomIf||!1,Ob=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Wa=window.Polymer&&window.Polymer.legacyNoObservedAttributes||
!1,jf=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,Ba={},Xa={};class P extends HTMLElement{static get observedAttributes(){return["id"]}static import(b,a){return b?(b=Ba[b]||Xa[b.toLowerCase()])&&a?b.querySelector(a):b:null}attributeChangedCallback(b,a,c,d){a!==c&&this.register()}get assetpath(){if(!this.__assetpath){var b=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument;b=la(this.getAttribute("assetpath")||"",
b.baseURI);this.__assetpath=ob(b)}return this.__assetpath}register(b){if(b=b||this.id){if(ea&&void 0!==(Ba[b]||Xa[b.toLowerCase()]))throw Ba[b]=Xa[b.toLowerCase()]=null,Error(`strictTemplatePolicy: dom-module ${b} re-registered`);this.id=b;Ba[b]=Xa[b.toLowerCase()]=this;this.querySelector("style")&&console.warn("dom-module %s has style outside template",this.id)}}}P.prototype.modules=Ba;customElements.define("dom-module",P);const kf=window.ShadyCSS.CustomStyleInterface;class lf extends HTMLElement{constructor(){super();
this._style=null;kf.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const b=this.querySelector("style");if(!b)return null;this._style=b;var a=b.getAttribute("include");if(a){b.removeAttribute("include");a=a.trim().split(/\s+/);var c="";for(let h=0;h<a.length;h++){{var d=void 0,e=void 0;var f=a[h];let k=P.import(f);if(k&&void 0===k._cssText){e="";d=pb(k);for(var g=0;g<d.length;g++)e+=d[g].textContent;if(g=k.querySelector("template")){d="";g=qb(g,k.assetpath);for(let l=0;l<g.length;l++){let m=
g[l];m.parentNode&&m.parentNode.removeChild(m);d+=m.textContent}e+=d}k._cssText=e||null}k||console.warn("Could not find style data in module named",f);f=k&&k._cssText||""}c+=f}a=c;b.textContent=a+b.textContent}this.ownerDocument!==window.document&&window.document.head.appendChild(this);return this._style}}window.customElements.define("custom-style",lf);const fd=document.createElement("template");fd.innerHTML='\x3ccustom-style\x3e\n  \x3cstyle\x3e\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  \x3c/style\x3e\n\x3c/custom-style\x3e\x3cdom-module id\x3d"lumo-color"\x3e\n  \x3ctemplate\x3e\n    \x3cstyle\x3e\n      [theme~\x3d"dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~\x3d"dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    \x3c/style\x3e\n  \x3c/template\x3e\n\x3c/dom-module\x3e\x3cdom-module id\x3d"lumo-color-legacy"\x3e\n  \x3ctemplate\x3e\n    \x3cstyle include\x3d"lumo-color"\x3e\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    \x3c/style\x3e\n  \x3c/template\x3e\n\x3c/dom-module\x3e';
document.head.appendChild(fd.content);const gd=document.createElement("template");gd.innerHTML='\x3ccustom-style\x3e\n  \x3cstyle\x3e\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset\x3dutf-8;base64,d09GRgABAAAAABEcAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMAAAADZa/6SsaGhlYQAADhQAAAAdAAAAJAbpA35obXR4AAAONAAAABAAAACspBAAAGxvY2EAAA5EAAAAWAAAAFh55IAsbWF4cAAADpwAAAAfAAAAIAFKAXBuYW1lAAAOvAAAATEAAAIuUUJZCHBvc3QAAA/wAAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAA4pmJ6QHx/DZfGbiZXwBFGGpUNzQi6P+vmacy3QJyORiYQKIANoULVXicY2BkYGAO+p8FJF8wAAHzVAZGBlSgDQBW9gNvAAAAeJxjYGBgYH4xNDAAzwQmjwAAAAAATgCaAOgBCgEsAU4BcAGaAcQB7gIaApwC6ASaBLwE1gTyBQ4FKgV6BdAF/gZEBmYGtgcYB5AIGAhSCGoI/glGCb4J2goECjwKggq4CvALUAuWC7x4nGNgZGBg0GZMYRBlAAEmIOYCQgaG/2A+AwAYlAG8AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjtlugzAQRbkJUEJIuu/7vqR8lGNPAcWx0YAb5e/LklR96EgenSufGY038PqKvf9rhgGG8BEgxA4ijBBjjAQTTLGLPezjAIc4wjFOcIoznOMCl7jCNW5wizvc4wGPeMIzXvCKN7zjAzN8eonQRWZSSaYmjvug6ase98hFltexMJmmVNmV2WBvdNgZUc+ujAWzXW3UDnu1w43asStHc8GpzAXX/py0jqTQZJTgkcxJLpaCF0lD32xNt+43tAsn29Dft02uDKS2cjGUNgsk26qK2lFthYoU27INPqmiDqg5goe0pqR5qSoqMdek/CUZFywL46rEsiImleqiqoMyt4baXlu/1GLdNFf5zbcNmdr1YUWCZe47o+zUmb/DoStbw3cVsef9ALjjiPQA) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  \x3c/style\x3e\n\x3c/custom-style\x3e';
document.head.appendChild(gd.content);const hd=document.createElement("template");hd.innerHTML="\x3ccustom-style\x3e\n  \x3cstyle\x3e\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  \x3c/style\x3e\n\x3c/custom-style\x3e";
document.head.appendChild(hd.content);const id=document.createElement("template");id.innerHTML="\x3ccustom-style\x3e\n  \x3cstyle\x3e\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  \x3c/style\x3e\n\x3c/custom-style\x3e";
document.head.appendChild(id.content);const jd=document.createElement("template");jd.innerHTML="\x3ccustom-style\x3e\n  \x3cstyle\x3e\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  \x3c/style\x3e\n\x3c/custom-style\x3e";
document.head.appendChild(jd.content);const kd=document.createElement("template");kd.innerHTML='\x3ccustom-style\x3e\n  \x3cstyle\x3e\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  \x3c/style\x3e\n\x3c/custom-style\x3e\x3cdom-module id\x3d"lumo-typography"\x3e\n  \x3ctemplate\x3e\n    \x3cstyle\x3e\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can\u2019t combine with the above selector because that doesn\u2019t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~\x3d"font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~\x3d"font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir\x3d"rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    \x3c/style\x3e\n  \x3c/template\x3e\n\x3c/dom-module\x3e';
document.head.appendChild(kd.content);String(Math.random()).slice(2);new WeakMap;window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:b=>b});(()=>{try{const b={get capture(){return!1}};window.addEventListener("test",b,b);window.removeEventListener("test",b,b)}catch(b){}})();new Map;new WeakMap;"undefined"!==typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");"undefined"!==typeof window.ShadyCSS&&"undefined"===typeof window.ShadyCSS.prepareTemplateDom&&
console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1.");new Set;window.JSCompiler_renameProperty=(b,a)=>b;const mf=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ld=Symbol();class Pb{constructor(b,a){if(a!==ld)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=
b}get styleSheet(){void 0===this._styleSheet&&(mf?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null);return this._styleSheet}toString(){return this.cssText}}const Ca=(b,...a)=>{a=a.reduce((c,d,e)=>{if(d instanceof Pb)d=d.cssText;else if("number"!==typeof d)throw Error(`Value passed to 'css' function must be a 'css' function result: ${d}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`);return c+d+
b[e+1]},b[0]);return new Pb(a,ld)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");let md=0;const Qb={},Da=(b,a,c)=>{const d=c&&c.moduleId||`custom-style-module-${md++}`;Array.isArray(a)||(a=a?[a]:[]);a.forEach(f=>{if(!(f instanceof Pb))throw Error("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.");if(!Qb[f]){const g=document.createElement("dom-module");g.innerHTML=`\n        <template>\n          <style>${f.toString()}</style>\n        </template>\n      `;
const h=`custom-style-module-${md++}`;g.register(h);Qb[f]=h}});const e=document.createElement("dom-module");if(b){const f=window.customElements&&window.customElements.get(b);f&&f.hasOwnProperty("__finalized")&&console.warn(`The custom element definition for "${b}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`);e.setAttribute("theme-for",b)}e.innerHTML=`\n    <template>\n      ${(c&&
c.include||[]).map(f=>`<style include=${f}></style>`)}\n      ${a.map(f=>`<style include=${Qb[f]}></style>`)}\n    </template>\n  `;e.register(d)};Da("vaadin-checkbox",Ca`
    :host {
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    [part='label']:not([empty]) {
      margin: 0.1875em 0.875em 0.1875em 0.375em;
    }

    [part='checkbox'] {
      width: calc(1em + 2px);
      height: calc(1em + 2px);
      margin: 0.1875em;
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      pointer-events: none;
      line-height: 1.2;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Needed to align the checkbox nicely on the baseline */
    [part='checkbox']::before {
      content: '\\2003';
    }

    /* Checkmark */
    [part='checkbox']::after {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border: 0 solid var(--lumo-primary-contrast-color);
      border-width: 0.1875em 0 0 0.1875em;
      box-sizing: border-box;
      transform-origin: 0 0;
      position: absolute;
      top: 0.8125em;
      left: 0.5em;
      transform: scale(0.55) rotate(-135deg);
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
      width: 0.625em;
      height: 1.0625em;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      transform: none;
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
      transition: opacity 0.25s;
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) [part='label'] ::slotted(*) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part='label']:not([empty]) {
      margin: 0.1875em 0.375em 0.1875em 0.875em;
    }

    /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
    :host(:hover) [part='checkbox']::after {
      transition: width 0.1s, height 0.25s;
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      color: transparent;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});let nf=0;const E=function(b){let a=b.__mixinApplications;a||(a=new WeakMap,b.__mixinApplications=a);let c=nf++;return function(d){let e=d.__mixinSet;if(e&&e[c])return d;let f=a,g=f.get(d);g||(g=b(d),f.set(d,g),d=Object.create(g.__mixinSet||e||null),d[c]=!0,g.__mixinSet=d);return g}},q=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?b=>ShadyDOM.patch(b):b=>b,La={},oe=/-[a-z]/g,pe=/([A-Z])/g;let of=0,nd=0,fa=[],pf=0,
Rb=!1,od=document.createTextNode("");(new window.MutationObserver(function(){Rb=!1;const b=fa.length;for(let a=0;a<b;a++){let c=fa[a];if(c)try{c()}catch(d){setTimeout(()=>{throw d;})}}fa.splice(0,b);nd+=b})).observe(od,{characterData:!0});const H={after(b){return{run(a){return window.setTimeout(a,b)},cancel(a){window.clearTimeout(a)}}},run(b,a){return window.setTimeout(b,a)},cancel(b){window.clearTimeout(b)}},L={run(b){return window.requestAnimationFrame(b)},cancel(b){window.cancelAnimationFrame(b)}},
pd={run(b){return window.requestIdleCallback?window.requestIdleCallback(b):window.setTimeout(b,16)},cancel(b){window.cancelIdleCallback?window.cancelIdleCallback(b):window.clearTimeout(b)}},F={run(b){Rb||(Rb=!0,od.textContent=pf++);fa.push(b);return of++},cancel(b){const a=b-nd;if(0<=a){if(!fa[a])throw Error("invalid async handle: "+b);fa[a]=null}}},qf=F,qd=E(b=>{class a extends b{static createProperties(c){const d=this.prototype;for(let e in c)e in d||d._createPropertyAccessor(e)}static attributeNameForProperty(c){return c.toLowerCase()}static typeForProperty(c){}_createPropertyAccessor(c,
d){this._addPropertyToAttributeMap(c);this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor));this.__dataHasAccessor[c]||(this.__dataHasAccessor[c]=!0,this._definePropertyAccessor(c,d))}_addPropertyToAttributeMap(c){this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let d=this.__dataAttributes[c];d||(d=this.constructor.attributeNameForProperty(c),this.__dataAttributes[d]=c);return d}_definePropertyAccessor(c,
d){Object.defineProperty(this,c,{get(){return this.__data[c]},set:d?function(){}:function(e){this._setPendingProperty(c,e,!0)&&this._invalidateProperties()}})}constructor(){super();this.__dataInvalid=this.__dataReady=this.__dataEnabled=!1;this.__data={};this.__dataInstanceProps=this.__dataOld=this.__dataPending=null;this.__dataCounter=0;this.__serializing=!1;this._initializeProperties()}ready(){this.__dataReady=!0;this._flushProperties()}_initializeProperties(){for(let c in this.__dataHasAccessor)this.hasOwnProperty(c)&&
(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[c]=this[c],delete this[c])}_initializeInstanceProperties(c){Object.assign(this,c)}_setProperty(c,d){this._setPendingProperty(c,d)&&this._invalidateProperties()}_getProperty(c){return this.__data[c]}_setPendingProperty(c,d,e){e=this.__data[c];let f=this._shouldPropertyChange(c,d,e);f&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||c in this.__dataOld||(this.__dataOld[c]=e),this.__data[c]=
d,this.__dataPending[c]=d);return f}_isPropertyPending(c){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(c))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,qf.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;
const c=this.__data,d=this.__dataPending,e=this.__dataOld;this._shouldPropertiesChange(c,d,e)&&(this.__dataOld=this.__dataPending=null,this._propertiesChanged(c,d,e));this.__dataCounter--}_shouldPropertiesChange(c,d,e){return!!d}_propertiesChanged(c,d,e){}_shouldPropertyChange(c,d,e){return e!==d&&(e===e||d===d)}attributeChangedCallback(c,d,e,f){d!==e&&this._attributeToProperty(c,e);super.attributeChangedCallback&&super.attributeChangedCallback(c,d,e,f)}_attributeToProperty(c,d,e){if(!this.__serializing){const f=
this.__dataAttributes;c=f&&f[c]||c;this[c]=this._deserializeValue(d,e||this.constructor.typeForProperty(c))}}_propertyToAttribute(c,d,e){this.__serializing=!0;e=3>arguments.length?this[c]:e;this._valueToNodeAttribute(this,e,d||this.constructor.attributeNameForProperty(c));this.__serializing=!1}_valueToNodeAttribute(c,d,e){d=this._serializeValue(d);if("class"===e||"name"===e||"slot"===e)c=q(c);void 0===d?c.removeAttribute(e):c.setAttribute(e,d)}_serializeValue(c){switch(typeof c){case "boolean":return c?
"":void 0;default:return null!=c?c.toString():void 0}}_deserializeValue(c,d){switch(d){case Boolean:return null!==c;case Number:return Number(c);default:return c}}}return a}),rd={};let Ya=HTMLElement.prototype;for(;Ya;){let b=Object.getOwnPropertyNames(Ya);for(let a=0;a<b.length;a++)rd[b[a]]=!0;Ya=Object.getPrototypeOf(Ya)}const sd=E(b=>{b=qd(b);class a extends b{static createPropertiesForAttributes(){let c=this.observedAttributes;for(let d=0;d<c.length;d++)this.prototype._createPropertyAccessor(jc(c[d]))}static attributeNameForProperty(c){return Ma(c)}_initializeProperties(){this.__dataProto&&
(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null);super._initializeProperties()}_initializeProtoProperties(c){for(let d in c)this._setProperty(d,c[d])}_ensureAttribute(c,d){this.hasAttribute(c)||this._valueToNodeAttribute(this,d,c)}_serializeValue(c){switch(typeof c){case "object":if(c instanceof Date)return c.toString();if(c)try{return JSON.stringify(c)}catch(d){return""}default:return super._serializeValue(c)}}_deserializeValue(c,d){let e;switch(d){case Object:try{e=JSON.parse(c)}catch(f){e=
c}break;case Array:try{e=JSON.parse(c)}catch(f){e=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${c}`)}break;case Date:e=isNaN(c)?String(c):Number(c);e=new Date(e);break;default:e=super._deserializeValue(c,d)}return e}_definePropertyAccessor(c,d){if(!rd[c]){let e=this[c];void 0!==e&&(this.__data?this._setPendingProperty(c,e):(this.__dataProto?this.hasOwnProperty("__dataProto")||(this.__dataProto=Object.create(this.__dataProto)):this.__dataProto={},this.__dataProto[c]=e))}super._definePropertyAccessor(c,
d)}_hasAccessor(c){return this.__dataHasAccessor&&this.__dataHasAccessor[c]}_isPropertyPending(c){return!!(this.__dataPending&&c in this.__dataPending)}}return a}),rf={"dom-if":!0,"dom-repeat":!0};let td=!1,ud=!1;const sf=E(b=>{class a extends b{static _parseTemplate(c,d){if(!c._templateInfo){let e=c._templateInfo={};e.nodeInfoList=[];e.nestedTemplate=!!d;e.stripWhiteSpace=d&&d.stripWhiteSpace||c.hasAttribute("strip-whitespace");this._parseTemplateContent(c,e,{parent:null})}return c._templateInfo}static _parseTemplateContent(c,
d,e){return this._parseTemplateNode(c.content,d,e)}static _parseTemplateNode(c,d,e){let f=!1;"template"!=c.localName||c.hasAttribute("preserve-content")?"slot"===c.localName&&(d.hasInsertionPoint=!0):f=this._parseTemplateNestedTemplate(c,d,e)||f;if(!td){td=!0;const g=document.createElement("textarea");g.placeholder="a";ud=g.placeholder===g.textContent}ud&&"textarea"===c.localName&&c.placeholder&&c.placeholder===c.textContent&&(c.textContent=null);c.firstChild&&this._parseTemplateChildNodes(c,d,e);
c.hasAttributes&&c.hasAttributes()&&(f=this._parseTemplateNodeAttributes(c,d,e)||f);return f||e.noted}static _parseTemplateChildNodes(c,d,e){if("script"!==c.localName&&"style"!==c.localName)for(let g=c.firstChild,h=0,k;g;g=k){if("template"==g.localName){{var f=g;let l=f.getAttribute("is");if(l&&rf[l]){let m=f;m.removeAttribute("is");f=m.ownerDocument.createElement(l);m.parentNode.replaceChild(f,m);for(f.appendChild(m);m.attributes.length;)f.setAttribute(m.attributes[0].name,m.attributes[0].value),
m.removeAttribute(m.attributes[0].name)}g=f}}k=g.nextSibling;if(g.nodeType===Node.TEXT_NODE){for(f=k;f&&f.nodeType===Node.TEXT_NODE;)g.textContent+=f.textContent,k=f.nextSibling,c.removeChild(f),f=k;if(d.stripWhiteSpace&&!g.textContent.trim()){c.removeChild(g);continue}}f={parentIndex:h,parentInfo:e};this._parseTemplateNode(g,d,f)&&(f.infoIndex=d.nodeInfoList.push(f)-1);g.parentNode&&h++}}static _parseTemplateNestedTemplate(c,d,e){d=this._parseTemplate(c,d);(d.content=c.content.ownerDocument.createDocumentFragment()).appendChild(c.content);
e.templateInfo=d;return!0}static _parseTemplateNodeAttributes(c,d,e){let f=!1,g=Array.from(c.attributes);for(let h=g.length-1,k;k=g[h];h--)f=this._parseTemplateNodeAttribute(c,d,e,k.name,k.value)||f;return f}static _parseTemplateNodeAttribute(c,d,e,f,g){return"on-"===f.slice(0,3)?(c.removeAttribute(f),e.events=e.events||[],e.events.push({name:f.slice(3),value:g}),!0):"id"===f?(e.id=g,!0):!1}static _contentForTemplate(c){let d=c._templateInfo;return d&&d.content||c.content}_stampTemplate(c,d){c&&!c.content&&
window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(c);d=d||this.constructor._parseTemplate(c);let e=d.nodeInfoList;c=document.importNode(d.content||c.content,!0);c.__noInsertionPoint=!d.hasInsertionPoint;let f=c.nodeList=Array(e.length);c.$={};for(let k=0,l=e.length,m;k<l&&(m=e[k]);k++){let n=f[k]=kc(c,m);m.id&&(c.$[m.id]=n);var g=n,h=d;m.templateInfo&&(g._templateInfo=m.templateInfo,g._parentTemplateInfo=h);g=n;h=m;if(h.events&&h.events.length)for(let p=0,r=h.events,
v;p<r.length&&(v=r[p]);p++)this._addMethodEventListenerToNode(g,v.name,v.value,this)}return c}_addMethodEventListenerToNode(c,d,e,f){e=qe(f||c,d,e);this._addEventListenerToNode(c,d,e);return e}_addEventListenerToNode(c,d,e){c.addEventListener(d,e)}_removeEventListenerFromNode(c,d,e){c.removeEventListener(d,e)}}return a});let oa=0;const pa=[],t={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},
tf=/[A-Z]/,vd=(b,a,c,d,e)=>{var f=e?J(b):b;if(a=a[f])for(f=0;f<a.length;f++){var g=a[f];if(g.info.lastRun!==oa&&(!e||sb(b,g.trigger))){g.info.lastRun=oa;{g=g.info;var h=c,k=d;let l=0,m=h.length-1,n=-1;for(;l<=m;){const p=l+m>>1,r=k.get(h[p].methodInfo)-k.get(g.methodInfo);if(0>r)l=p+1;else if(0<r)m=p-1;else{n=p;break}}0>n&&(n=m+1);h.splice(n,0,g)}}}},xe=[],wd=/(\[\[|{{)\s*(?:(!)\s*)?((?:[a-zA-Z_$][\w.:$\-*]*)\s*(?:\(\s*(?:(?:(?:((?:[a-zA-Z_$][\w.:$\-*]*)|(?:[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\]|\\.)*')|(?:"(?:[^"\\]|\\.)*")))\s*)(?:,\s*(?:((?:[a-zA-Z_$][\w.:$\-*]*)|(?:[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\]|\\.)*')|(?:"(?:[^"\\]|\\.)*")))\s*))*)?)\)\s*)?)(?:]]|}})/g,
Za=E(b=>{const a=sf(sd(b));class c extends a{constructor(){super();this.__isPropertyEffectsClient=!0;this.__dataClientsReady;this.__dataPendingClients;this.__dataToNotify;this.__dataLinkedPaths;this.__dataHasPaths;this.__dataCompoundStorage;this.__dataHost;this.__dataTemp;this.__dataClientsInitialized;this.__data;this.__dataPending;this.__dataOld;this.__computeEffects;this.__computeInfo;this.__reflectEffects;this.__notifyEffects;this.__propagateEffects;this.__observeEffects;this.__readOnly;this.__templateInfo;
this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return t}_initializeProperties(){super._initializeProperties();this._registerHost();this.__dataClientsReady=!1;this.__dataLinkedPaths=this.__dataToNotify=this.__dataPendingClients=null;this.__dataHasPaths=!1;this.__dataCompoundStorage=this.__dataCompoundStorage||null;this.__dataHost=this.__dataHost||null;this.__dataTemp={};this.__dataClientsInitialized=!1}_registerHost(){if(Ea.length){let d=Ea[Ea.length-1];d._enqueueClient(this);this.__dataHost=
d}}_initializeProtoProperties(d){this.__data=Object.create(d);this.__dataPending=Object.create(d);this.__dataOld={}}_initializeInstanceProperties(d){let e=this[t.READ_ONLY];for(let f in d)e&&e[f]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[f]=this.__dataPending[f]=d[f])}_addPropertyEffect(d,e,f){this._createPropertyAccessor(d,e==t.READ_ONLY);let g=rb(this,e,!0)[d];g||(g=this[e][d]=[]);g.push(f)}_removePropertyEffect(d,e,f){d=rb(this,e,!0)[d];f=d.indexOf(f);
0<=f&&d.splice(f,1)}_hasPropertyEffect(d,e){e=this[e];return!(!e||!e[d])}_hasReadOnlyEffect(d){return this._hasPropertyEffect(d,t.READ_ONLY)}_hasNotifyEffect(d){return this._hasPropertyEffect(d,t.NOTIFY)}_hasReflectEffect(d){return this._hasPropertyEffect(d,t.REFLECT)}_hasComputedEffect(d){return this._hasPropertyEffect(d,t.COMPUTE)}_setPendingPropertyOrPath(d,e,f,g){if(g||J(Array.isArray(d)?d[0]:d)!==d){if(!g&&(g=B(this,d),d=ic(this,d,e),!d||!super._shouldPropertyChange(d,e,g)))return!1;this.__dataHasPaths=
!0;if(this._setPendingProperty(d,e,f)){if(f=this.__dataLinkedPaths)for(let h in f)g=f[h],0===d.indexOf(h+".")?(g+=d.slice(h.length),this._setPendingPropertyOrPath(g,e,!0,!0)):0===d.indexOf(g+".")&&(g=h+d.slice(g.length),this._setPendingPropertyOrPath(g,e,!0,!0));return!0}}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[d])return this._setPendingProperty(d,e,f);this[d]=e}return!1}_setUnmanagedPropertyToNode(d,e,f){if(f!==d[e]||"object"==typeof f)"className"===e&&(d=q(d)),d[e]=f}_setPendingProperty(d,
e,f){let g=this.__dataHasPaths&&0<=d.indexOf(".");if(this._shouldPropertyChange(d,e,(g?this.__dataTemp:this.__data)[d])){this.__dataPending||(this.__dataPending={},this.__dataOld={});d in this.__dataOld||(this.__dataOld[d]=this.__data[d]);g?this.__dataTemp[d]=e:this.__data[d]=e;this.__dataPending[d]=e;if(g||this[t.NOTIFY]&&this[t.NOTIFY][d])this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[d]=f;return!0}return!1}_setProperty(d,e){this._setPendingProperty(d,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&
this._flushProperties()}_enqueueClient(d){this.__dataPendingClients=this.__dataPendingClients||[];d!==this&&this.__dataPendingClients.push(d)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let d=this.__dataPendingClients;if(d){this.__dataPendingClients=null;for(let e=0;e<d.length;e++){let f=d[e];f.__dataEnabled?f.__dataPending&&f._flushProperties():f._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(d,
e){for(let f in d)!e&&this[t.READ_ONLY]&&this[t.READ_ONLY][f]||this._setPendingPropertyOrPath(f,d[f],!0);this._invalidateProperties()}ready(){this._flushProperties();this.__dataClientsReady||this._flushClients();this.__dataPending&&this._flushProperties()}_propertiesChanged(d,e,f){d=this.__dataHasPaths;this.__dataHasPaths=!1;var g;if(g=this[t.COMPUTE])if(hf){oa++;var h=te(this),k=[];for(var l in e)vd(l,g,k,h,d);for(;l=k.shift();)nc(this,"",e,f,l)&&vd(l.methodInfo,g,k,h,d);Object.assign(f,this.__dataOld);
Object.assign(e,this.__dataPending);this.__dataPending=null}else for(h=e;na(this,g,h,f,d);)Object.assign(f,this.__dataOld),Object.assign(e,this.__dataPending),h=this.__dataPending,this.__dataPending=null;g=this.__dataToNotify;this.__dataToNotify=null;this._propagatePropertyChanges(e,f,d);this._flushClients();na(this,this[t.REFLECT],e,f,d);na(this,this[t.OBSERVE],e,f,d);if(g){{h=this[t.NOTIFY];let A;k=oa++;for(let U in g)if(g[U]){if(l=h){{var m=h;l=k;var n=U,p=e,r=f,v=d;let xd=!1,uf=v?J(n):n;if(m=
m[uf])for(let Sb=0,vf=m.length,V;Sb<vf&&(V=m[Sb]);Sb++)V.info&&V.info.lastRun===l||v&&!sb(n,V.trigger)||(V.info&&(V.info.lastRun=l),V.fn(this,n,p,r,V.info,v,void 0),xd=!0);l=xd}}if(l)A=!0;else{if(l=d)l=U,n=e,p=J(l),p!==l?(p=Ma(p)+"-changed",mc(this,p,n[l],l),l=!0):l=!1;l&&(A=!0)}}let G;A&&(G=this.__dataHost)&&G._invalidateProperties&&G._invalidateProperties()}}1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(d,e,f){this[t.PROPAGATE]&&na(this,this[t.PROPAGATE],d,e,f);this.__templateInfo&&
this._runEffectsForTemplate(this.__templateInfo,d,e,f)}_runEffectsForTemplate(d,e,f,g){const h=(k,l)=>{na(this,d.propertyEffects,k,f,l,d.nodeList);for(let m=d.firstChild;m;m=m.nextSibling)this._runEffectsForTemplate(m,k,f,l)};d.runEffects?d.runEffects(h,e,g):h(e,g)}linkPaths(d,e){d=ma(d);e=ma(e);this.__dataLinkedPaths=this.__dataLinkedPaths||{};this.__dataLinkedPaths[d]=e}unlinkPaths(d){d=ma(d);this.__dataLinkedPaths&&delete this.__dataLinkedPaths[d]}notifySplices(d,e){let f={path:""};d=B(this,d,
f);sc(this,d,f.path,e)}get(d,e){return B(e||this,d)}set(d,e,f){f?ic(f,d,e):this[t.READ_ONLY]&&this[t.READ_ONLY][d]||this._setPendingPropertyOrPath(d,e,!0)&&this._invalidateProperties()}push(d,...e){let f={path:""};d=B(this,d,f);let g=d.length,h=d.push(...e);e.length&&qa(this,d,f.path,g,e.length,[]);return h}pop(d){let e={path:""};d=B(this,d,e);let f=!!d.length,g=d.pop();f&&qa(this,d,e.path,d.length,0,[g]);return g}splice(d,e,f,...g){let h={path:""},k=B(this,d,h);0>e?e=k.length-Math.floor(-e):e&&(e=
Math.floor(e));let l;l=2===arguments.length?k.splice(e):k.splice(e,f,...g);(g.length||l.length)&&qa(this,k,h.path,e,g.length,l);return l}shift(d){let e={path:""};d=B(this,d,e);let f=!!d.length,g=d.shift();f&&qa(this,d,e.path,0,0,[g]);return g}unshift(d,...e){let f={path:""};d=B(this,d,f);let g=d.unshift(...e);e.length&&qa(this,d,f.path,0,e.length,[]);return g}notifyPath(d,e){if(1==arguments.length){var f={path:""};e=B(this,d,f);f=f.path}else f=Array.isArray(d)?ma(d):d;this._setPendingPropertyOrPath(f,
e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(d,e){this._addPropertyEffect(d,t.READ_ONLY);e&&(this["_set"+ze(d)]=function(f){this._setProperty(d,f)})}_createPropertyObserver(d,e,f){let g={property:d,method:e,dynamicFn:!!f};this._addPropertyEffect(d,t.OBSERVE,{fn:lc,info:g,trigger:{name:d}});f&&this._addPropertyEffect(e,t.OBSERVE,{fn:lc,info:g,trigger:{name:e}})}_createMethodObserver(d,e){let f=vb(d);if(!f)throw Error("Malformed observer expression '"+d+"'");pc(this,f,t.OBSERVE,tb,
null,e)}_createNotifyingProperty(d){this._addPropertyEffect(d,t.NOTIFY,{fn:re,info:{eventName:Ma(d)+"-changed",property:d}})}_createReflectedProperty(d){let e=this.constructor.attributeNameForProperty(d);"-"===e[0]?console.warn("Property "+d+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(d,t.REFLECT,{fn:se,info:{attrName:e}})}_createComputedProperty(d,e,f){let g=vb(e);if(!g)throw Error("Malformed computed expression '"+
e+"'");e=pc(this,g,t.COMPUTE,nc,d,f);rb(this,"__computeInfo")[d]=e}_marshalArgs(d,e,f){const g=this.__data,h=[];for(let k=0,l=d.length;k<l;k++){let {name:m,structured:n,wildcard:p,value:r,literal:v}=d[k];if(!v)if(p){const A=0===e.indexOf(m+"."),G=rc(g,f,A?e:m);r={path:A?e:m,value:G,base:A?B(g,m):G}}else r=n?rc(g,f,m):g[m];if(wb&&!this._overrideLegacyUndefined&&void 0===r&&1<d.length)return pa;h[k]=r}return h}static addPropertyEffect(d,e,f){this.prototype._addPropertyEffect(d,e,f)}static createPropertyObserver(d,
e,f){this.prototype._createPropertyObserver(d,e,f)}static createMethodObserver(d,e){this.prototype._createMethodObserver(d,e)}static createNotifyingProperty(d){this.prototype._createNotifyingProperty(d)}static createReadOnlyProperty(d,e){this.prototype._createReadOnlyProperty(d,e)}static createReflectedProperty(d){this.prototype._createReflectedProperty(d)}static createComputedProperty(d,e,f){this.prototype._createComputedProperty(d,e,f)}static bindTemplate(d){return this.prototype._bindTemplate(d)}_bindTemplate(d,
e){let f=this.constructor._parseTemplate(d),g=this.__preBoundTemplateInfo==f;if(!g)for(let h in f.propertyEffects)this._createPropertyAccessor(h);e?(f=Object.create(f),f.wasPreBound=g,this.__templateInfo?(d=d._parentTemplateInfo||this.__templateInfo,e=d.lastChild,f.parent=d,d.lastChild=f,(f.previousSibling=e)?e.nextSibling=f:d.firstChild=f):this.__templateInfo=f):this.__preBoundTemplateInfo=f;return f}static _addTemplatePropertyEffect(d,e,f){(d.hostProps=d.hostProps||{})[e]=!0;d=d.propertyEffects=
d.propertyEffects||{};(d[e]=d[e]||[]).push(f)}_stampTemplate(d,e){e=e||this._bindTemplate(d,!0);Ea.push(this);d=super._stampTemplate(d,e);Ea.pop();e.nodeList=d.nodeList;if(!e.wasPreBound){var f=e.childNodes=[];for(var g=d.firstChild;g;g=g.nextSibling)f.push(g)}d.templateInfo=e;{let {nodeList:k,nodeInfoList:l}=e;if(l.length)for(let m=0;m<l.length;m++){let n=k[m],p=l[m].bindings;if(p)for(let r=0;r<p.length;r++){let v=p[r];f=n;g=v;if(g.isCompound){let A=f.__dataCompoundStorage||(f.__dataCompoundStorage=
{});var h=g.parts;let G=Array(h.length);for(let U=0;U<h.length;U++)G[U]=h[U].literal;h=g.target;A[h]=G;g.literal&&"property"==g.kind&&("className"===h&&(f=q(f)),f[h]=g.literal)}we(n,this,v)}n.__dataHost=this}}this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients());return d}_removeBoundDom(d){d=d.templateInfo;const {previousSibling:e,nextSibling:f,parent:g}=d;e?e.nextSibling=f:g&&(g.firstChild=f);f?f.previousSibling=e:g&&(g.lastChild=e);d.nextSibling=d.previousSibling=
null;d=d.childNodes;for(let h=0;h<d.length;h++){let k=d[h];q(q(k).parentNode).removeChild(k)}}static _parseTemplateNode(d,e,f){let g=a._parseTemplateNode.call(this,d,e,f);if(d.nodeType===Node.TEXT_NODE){let h=this._parseBindings(d.textContent,e);h&&(d.textContent=qc(h)||" ",ub(this,e,f,"text","textContent",h),g=!0)}return g}static _parseTemplateNodeAttribute(d,e,f,g,h){let k=this._parseBindings(h,e);if(k){h=g;let l="property";tf.test(g)?l="attribute":"$"==g[g.length-1]&&(g=g.slice(0,-1),l="attribute");
let m=qc(k);m&&"attribute"==l&&("class"==g&&d.hasAttribute("class")&&(m+=" "+d.getAttribute(g)),d.setAttribute(g,m));"attribute"==l&&"disable-upgrade$"==h&&d.setAttribute(g,"");"input"===d.localName&&"value"===h&&d.setAttribute(h,"");d.removeAttribute(h);"property"===l&&(g=jc(g));ub(this,e,f,l,g,k,m);return!0}return a._parseTemplateNodeAttribute.call(this,d,e,f,g,h)}static _parseTemplateNestedTemplate(d,e,f){let g=a._parseTemplateNestedTemplate.call(this,d,e,f);const h=d.parentNode,k=f.templateInfo,
l="dom-if"===h.localName,m="dom-repeat"===h.localName;dd&&(l||m)&&(h.removeChild(d),f=f.parentInfo,f.templateInfo=k,f.noted=!0,g=!1);d=k.hostProps;if(ed&&l)d&&(e.hostProps=Object.assign(e.hostProps||{},d),dd||(f.parentInfo.noted=!0));else for(let n in d)ub(this,e,f,"property","_host_"+n,[{mode:"{",source:n,dependencies:[n],hostProp:!0}]);return g}static _parseBindings(d,e){let f=[];for(var g=0,h;null!==(h=wd.exec(d));){h.index>g&&f.push({literal:d.slice(g,h.index)});g=h[1][0];let m=!!h[2];h=h[3].trim();
let n=!1,p="";var k=-1;"{"==g&&0<(k=h.indexOf("::"))&&(p=h.substring(k+2),h=h.substring(0,k),n=!0);k=vb(h);let r=[];if(k){let {args:v,methodName:A}=k;for(var l=0;l<v.length;l++){let G=v[l];G.literal||r.push(G)}if((l=e.dynamicFns)&&l[A]||k.static)r.push(A),k.dynamicFn=!0}else r.push(h);f.push({source:h,mode:g,negate:m,customEvent:n,signature:k,dependencies:r,event:p});g=wd.lastIndex}g&&g<d.length&&(d=d.substring(g))&&f.push({literal:d});return f.length?f:null}static _evaluateBinding(d,e,f,g,h,k){d=
e.signature?tb(d,f,g,h,e.signature):f!=e.source?B(d,e.source):k&&0<=f.indexOf(".")?B(d,f):d.__data[f];e.negate&&(d=!d);return d}}return c}),Ea=[],wf=E(b=>{function a(e){e=Object.getPrototypeOf(e);return e.prototype instanceof d?e:null}function c(e){if(!e.hasOwnProperty("__ownProperties")){var f=null;if(e.hasOwnProperty("properties")){var g=e.properties;if(g){f=g;g={};for(let h in f){const k=f[h];g[h]="function"===typeof k?{type:k}:k}f=g}}e.__ownProperties=f}return e.__ownProperties}b=qd(b);class d extends b{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){const e=
this._properties;this.__observedAttributes=e?Object.keys(e).map(f=>this.prototype._addPropertyToAttributeMap(f)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty("__finalized")){const e=a(this);e&&e.finalize();this.__finalized=!0;this._finalizeClass()}}static _finalizeClass(){const e=c(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty("__properties")){const e=a(this);this.__properties=Object.assign({},e&&e._properties,c(this))}return this.__properties}static typeForProperty(e){return(e=
this._properties[e])&&e.type}_initializeProperties(){this.constructor.finalize();super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback();this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return d}),Tb=window.ShadyCSS&&window.ShadyCSS.cssBuild,$a=E(b=>{function a(e,f,g,h){if(!Tb){const p=f.content.querySelectorAll("style"),r=qb(f);var k=ne(g),l=f.content.firstElementChild;for(var m=0;m<k.length;m++){var n=
k[m];n.textContent=e._processStyleText(n.textContent,h);f.content.insertBefore(n,l)}k=0;for(l=0;l<r.length;l++)m=r[l],n=p[k],n!==m?(m=m.cloneNode(!0),n.parentNode.insertBefore(m,n)):k++,m.textContent=e._processStyleText(m.textContent,h)}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(f,g);if(jf&&Tb&&df&&(f=f.content.querySelectorAll("style"))){let p="";Array.from(f).forEach(r=>{p+=r.textContent;r.parentNode.removeChild(r)});e._styleSheet=new CSSStyleSheet;e._styleSheet.replaceSync(p)}}const c=wf(Za(b));
class d extends c{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){c._finalizeClass.call(this);var e;this.hasOwnProperty("__ownObservers")||(this.__ownObservers=this.hasOwnProperty("observers")?this.observers:null);(e=this.__ownObservers)&&this.createObservers(e,this._properties);this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"===typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):ya||(e=e.cloneNode(!0)));this.prototype._template=
e}static createProperties(e){for(let l in e){var f=this.prototype,g=l,h=e[l],k=e;h.computed&&(h.readOnly=!0);h.computed&&(f._hasReadOnlyEffect(g)?console.warn(`Cannot redefine computed property '${g}'.`):f._createComputedProperty(g,h.computed,k));h.readOnly&&!f._hasReadOnlyEffect(g)?f._createReadOnlyProperty(g,!h.computed):!1===h.readOnly&&f._hasReadOnlyEffect(g)&&console.warn(`Cannot make readOnly property '${g}' non-readOnly.`);h.reflectToAttribute&&!f._hasReflectEffect(g)?f._createReflectedProperty(g):
!1===h.reflectToAttribute&&f._hasReflectEffect(g)&&console.warn(`Cannot make reflected property '${g}' non-reflected.`);h.notify&&!f._hasNotifyEffect(g)?f._createNotifyingProperty(g):!1===h.notify&&f._hasNotifyEffect(g)&&console.warn(`Cannot make notify property '${g}' non-notify.`);h.observer&&f._createPropertyObserver(g,h.observer,k[h.observer]);f._addPropertyToAttributeMap(g)}}static createObservers(e,f){const g=this.prototype;for(let h=0;h<e.length;h++)g._createMethodObserver(e[h],f)}static get template(){if(!this.hasOwnProperty("_template")){var e=
this.prototype.hasOwnProperty("_template")?this.prototype._template:void 0;if(void 0===e){if(e=this.hasOwnProperty("is")){{e=this.is;let f=null;if(e&&(!ea||ff)&&(f=P.import(e,"template"),ea&&!f))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);e=f}}e=e||Object.getPrototypeOf(this.prototype).constructor.template}this._template=e}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty("_importPath")){var e=this.importMeta;
this._importPath=e?ob(e.url):(e=P.import(this.is))&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}return this._importPath}constructor(){super();this._template;this._importPath;this.rootPath;this.importPath;this.root;this.$}_initializeProperties(){this.constructor.finalize();this.constructor._finalizeTemplate(this.localName);super._initializeProperties();this.rootPath=ef;this.importPath=this.constructor.importPath;var e=this.constructor;if(!e.hasOwnProperty("__propertyDefaults")){e.__propertyDefaults=
null;var f=e._properties;for(let g in f){let h=f[g];"value"in h&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[g]=h)}}if(e=e.__propertyDefaults)for(let g in e)f=e[g],this._canApplyPropertyDefault(g)&&(f="function"==typeof f.value?f.value.call(this):f.value,this._hasAccessor(g)?this._setPendingProperty(g,f,!0):this[g]=f)}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,f){return nb(e,f)}static _finalizeTemplate(e){const f=this.prototype._template;
if(f&&!f.__polymerFinalized){f.__polymerFinalized=!0;var g=this.importPath;g=g?la(g):"";a(this,f,e,g);this.prototype._bindTemplate(f)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this);super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$);super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root));super._readyClients()}_attachDom(e){const f=q(this);if(f.attachShadow)return e?
(f.shadowRoot||(f.attachShadow({mode:"open",shadyUpgradeFragment:e}),f.shadowRoot.appendChild(e),this.constructor._styleSheet&&(f.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),gf&&window.ShadyDOM&&window.ShadyDOM.flushInitial(f.shadowRoot),f.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root \x3d this;` before `ready`.");}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,
f){!f&&this.importPath&&(f=la(this.importPath));return la(e,f)}static _parseTemplateContent(e,f,g){f.dynamicFns=f.dynamicFns||this._properties;return c._parseTemplateContent.call(this,e,f,g)}static _addTemplatePropertyEffect(e,f,g){!ad||f in this._properties||g.info.part.signature&&g.info.part.signature.static||g.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${f}' used in template but not declared in 'properties'; `+"attribute will not be observed.");return c._addTemplatePropertyEffect.call(this,
e,f,g)}}return d}),Fa=function(b,...a){const c=document.createElement("template");c.innerHTML=a.reduce((d,e,f)=>{if(e instanceof HTMLTemplateElement)e=e.innerHTML;else throw Error(`non-template value passed to Polymer's html function: ${e}`);return d+e+b[f+1]},b[0]);return c},M=$a(HTMLElement);class w{constructor(){this._timer=this._callback=this._asyncModule=null}setConfig(b,a){this._asyncModule=b;this._callback=a;this._timer=this._asyncModule.run(()=>{this._timer=null;W.delete(this);this._callback()})}cancel(){this.isActive()&&
(this._cancelAsync(),W.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(b,a,c){b instanceof w?b._cancelAsync():b=new w;b.setConfig(a,c);return b}}let W=new Set;const xf=function(){const b=!!W.size;W.forEach(a=>{try{a.flush()}catch(c){setTimeout(()=>{throw c;})}});return b};let xb="string"===typeof document.head.style.touchAction,Oa=["mousedown",
"mousemove","mouseup","click"],Ce=[0,1,4,2];try{var yd=1===(new MouseEvent("test",{buttons:1})).buttons}catch(b){yd=!1}let Be=yd,yb=!1;(function(){try{let b=Object.defineProperty({},"passive",{get(){yb=!0}});window.addEventListener("test",null,b);window.removeEventListener("test",null,b)}catch(b){}})();let vc=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const zb=[],yf={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Ee={button:!0,command:!0,fieldset:!0,
input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};let wc=function(b){var a=b.sourceCapabilities;if(!a||a.firesTouchEvents)if(b.__polymerGesturesHandled={skip:!0},"click"===b.type){a=!1;let f=Pa(b);for(let g=0;g<f.length;g++){if(f[g].nodeType===Node.ELEMENT_NODE)if("label"===f[g].localName)zb.push(f[g]);else if(yf[f[g].localName]){var c=f[g];var d=Array.prototype.slice.call(c.labels||[]);if(!d.length){d=[];var e=c.getRootNode();if(c.id)for(c=e.querySelectorAll(`label[for = ${c.id}]`),
e=0;e<c.length;e++)d.push(c[e])}for(c=0;c<d.length;c++)a=a||-1<zb.indexOf(d[c])}if(f[g]===z.mouse.target)return}a||(b.preventDefault(),b.stopPropagation())}},z={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};document.addEventListener("touchend",function(b){z.mouse.mouseIgnoreJob||uc(!0);z.mouse.target=Pa(b)[0];z.mouse.mouseIgnoreJob=w.debounce(z.mouse.mouseIgnoreJob,H.after(2500),function(){uc();z.mouse.target=null;z.mouse.mouseIgnoreJob=null})},yb?{passive:!0}:!1);
const Pa=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:b=>b.composedPath&&b.composedPath()||[],ra={},ba=[];Bb({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){ca(this.info)},mousedown:function(b){if(aa(b)){var a=Q(b),c=this;xc(this.info,function(d){aa(d)||(sa("up",a,d),ca(c.info))},function(d){aa(d)&&sa("up",a,d);ca(c.info)});sa("down",
a,b)}},touchstart:function(b){sa("down",Q(b),b.changedTouches[0],b)},touchend:function(b){sa("up",Q(b),b.changedTouches[0],b)}});Bb({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(b){2<this.moves.length&&this.moves.shift();this.moves.push(b)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start";
this.info.started=!1;this.info.moves=[];this.info.x=0;this.info.y=0;this.info.prevent=!1;ca(this.info)},mousedown:function(b){if(aa(b)){var a=Q(b),c=this,d=function(e){let f=e.clientX,g=e.clientY;Ac(c.info,f,g)&&(c.info.state=c.info.started?"mouseup"===e.type?"end":"track":"start","start"===c.info.state&&Qa("tap"),c.info.addMove({x:f,y:g}),aa(e)||(c.info.state="end",ca(c.info)),a&&Db(c.info,a,e),c.info.started=!0)};xc(this.info,d,function(e){c.info.started&&d(e);ca(c.info)});this.info.x=b.clientX;
this.info.y=b.clientY}},touchstart:function(b){b=b.changedTouches[0];this.info.x=b.clientX;this.info.y=b.clientY},touchmove:function(b){let a=Q(b);b=b.changedTouches[0];let c=b.clientX,d=b.clientY;Ac(this.info,c,d)&&("start"===this.info.state&&Qa("tap"),this.info.addMove({x:c,y:d}),Db(this.info,a,b),this.info.state="track",this.info.started=!0)},touchend:function(b){let a=Q(b);b=b.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:b.clientX,y:b.clientY}),Db(this.info,
a,b))}});Bb({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN;this.info.y=NaN;this.info.prevent=!1},mousedown:function(b){aa(b)&&(this.info.x=b.clientX,this.info.y=b.clientY)},click:function(b){aa(b)&&Bc(this.info,b)},touchstart:function(b){b=b.changedTouches[0];this.info.x=b.clientX;this.info.y=b.clientY},touchend:function(b){Bc(this.info,b.changedTouches[0],
b)}});const Ga=E(b=>{class a extends b{_addEventListenerToNode(c,d,e){Ab(c,d,e)||super._addEventListenerToNode(c,d,e)}_removeEventListenerFromNode(c,d,e){if(ra[d]){{var f=ra[d];var g=f.deps;f=f.name;let h=c.__polymerGestures;if(h)for(let k=0,l,m;k<g.length;k++)l=g[k],(m=h[l])&&m[f]&&(m[f]=(m[f]||1)-1,m._count=(m._count||1)-1,0===m._count&&c.removeEventListener(l,yc,tc(l)));c.removeEventListener(d,e)}g=!0}else g=!1;g||super._removeEventListenerFromNode(c,d,e)}}return a}),zf=b=>class extends b{static get properties(){return{theme:{type:String,
readOnly:!0}}}attributeChangedCallback(a,c,d){super.attributeChangedCallback(a,c,d);"theme"===a&&this._setTheme(d)}},Ub=b=>class extends zf(b){static finalize(){super.finalize();const a=this.prototype._template,c=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,d=Object.getPrototypeOf(this.prototype)._template;d&&!c&&Array.from(d.content.querySelectorAll("style[include]")).forEach(e=>{this._includeStyle(e.getAttribute("include"),a)});this._includeMatchingThemes(a)}static _includeMatchingThemes(a){const c=
P.prototype.modules;let d=!1;const e=this.is+"-default-theme";Object.keys(c).sort((f,g)=>{const h=0===f.indexOf("vaadin-"),k=0===g.indexOf("vaadin-");var l=["lumo-","material-"];const m=0<l.filter(n=>0===f.indexOf(n)).length;l=0<l.filter(n=>0===g.indexOf(n)).length;return h!==k?h?-1:1:m!==l?m?-1:1:0}).forEach(f=>{if(f!==e){const g=c[f].getAttribute("theme-for");g&&g.split(" ").forEach(h=>{(new RegExp("^"+h.split("*").join(".*")+"$")).test(this.is)&&(d=!0,this._includeStyle(f,a))})}});!d&&c[e]&&this._includeStyle(e,
a)}static _includeStyle(a,c){if(c&&!c.content.querySelector(`style[include="${a}"]`)){const d=document.createElement("style");d.setAttribute("include",a);c.content.appendChild(d)}}};let ab=!1;window.addEventListener("keydown",()=>{ab=!0},{capture:!0});window.addEventListener("mousedown",()=>{ab=!1},{capture:!0});const Af=b=>class extends b{static get properties(){var a={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};window.ShadyDOM&&(a.tabIndex=a.tabindex);return a}},
Bf=b=>class extends Af(b){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}get _keyboardActive(){return ab}ready(){this.addEventListener("focusin",c=>{c.composedPath()[0]===this?this.contains(c.relatedTarget)||this._focus():-1===c.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)});this.addEventListener("focusout",c=>this._setFocused(!1));
super.ready();const a=c=>{c.composed||c.target.dispatchEvent(new CustomEvent(c.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",a);this.shadowRoot.addEventListener("focusout",a);this.addEventListener("keydown",c=>{if(!c.defaultPrevented&&9===c.keyCode)if(c.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else if((c=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/))&&
63<=parseFloat(c[1])&&66>parseFloat(c[1])&&this.parentNode&&this.nextSibling){const d=document.createElement("input");d.style.position="absolute";d.style.opacity="0";d.tabIndex=this.tabIndex;this.parentNode.insertBefore(d,this.nextSibling);d.focus();d.addEventListener("focusout",()=>this.parentNode.removeChild(d))}});this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>{this._focus();this._setFocused(!0);this.setAttribute("focus-ring","")})}disconnectedCallback(){super.disconnectedCallback();
this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(a){a?this.setAttribute("focused",""):this.removeAttribute("focused");a&&ab?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}get focusElement(){window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`);return this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&
(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(a){(this.focusElement.disabled=a)?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):("undefined"!==typeof this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(a){void 0!==a&&(this.focusElement.tabIndex=a);this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=a=
void 0);window.ShadyDOM&&this.setProperties({tabIndex:a,tabindex:a})}click(){this.disabled||super.click()}},ha=function(){let b,a;do b=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),a=xf();while(b||a)};class Vb{static detectScrollType(){const b=document.createElement("div");b.textContent="ABCD";b.dir="rtl";b.style.fontSize="14px";b.style.width="4px";b.style.height="1px";b.style.position="absolute";b.style.top="-1000px";b.style.overflow=
"scroll";document.body.appendChild(b);let a="reverse";0<b.scrollLeft?a="default":(b.scrollLeft=2,2>b.scrollLeft&&(a="negative"));document.body.removeChild(b);return a}static getNormalizedScrollLeft(b,a,c){const {scrollLeft:d}=c;if("rtl"!==a||!b)return d;switch(b){case "negative":return c.scrollWidth-c.clientWidth+d;case "reverse":return c.scrollWidth-c.clientWidth-d}return d}static setNormalizedScrollLeft(b,a,c,d){if("rtl"===a&&b)switch(b){case "negative":c.scrollLeft=c.clientWidth-c.scrollWidth+
d;break;case "reverse":c.scrollLeft=c.scrollWidth-c.clientWidth-d;break;default:c.scrollLeft=d}else c.scrollLeft=d}}const X=[];let bb;(new MutationObserver(function(){const b=ia();X.forEach(a=>{Wb(a,b)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Wb=function(b,a){a?b.setAttribute("dir",a):b.removeAttribute("dir")},ia=function(){return document.documentElement.getAttribute("dir")},Xb=b=>class extends b{static get properties(){return{dir:{type:String,readOnly:!0}}}static finalize(){super.finalize();
bb||(bb=Vb.detectScrollType())}connectedCallback(){super.connectedCallback();this.hasAttribute("dir")||(this.__subscribe(),Wb(this,ia()))}attributeChangedCallback(a,c,d){super.attributeChangedCallback(a,c,d);if("dir"===a){a=d===ia()&&-1===X.indexOf(this);var e=!d&&c&&-1===X.indexOf(this);c=d!==ia()&&c===ia();a||e?(this.__subscribe(),Wb(this,ia())):c&&this.__subscribe(!1)}}disconnectedCallback(){super.disconnectedCallback();this.__subscribe(!1);this.removeAttribute("dir")}__subscribe(a=!0){a?-1===
X.indexOf(this)&&X.push(this):-1<X.indexOf(this)&&X.splice(X.indexOf(this),1)}__getNormalizedScrollLeft(a){return Vb.getNormalizedScrollLeft(bb,this.getAttribute("dir")||"ltr",a)}__setNormalizedScrollLeft(a,c){return Vb.setNormalizedScrollLeft(bb,this.getAttribute("dir")||"ltr",a,c)}},He=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Ra=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;window.Vaadin=window.Vaadin||{};const zd=function(b,a){if(window.Vaadin.developmentMode)return Cc(b,
a)};if(void 0===window.Vaadin.developmentMode){var Cf=window.Vaadin;try{var Ad=localStorage.getItem("vaadin.developmentmode.force")?!0:0<=["localhost","127.0.0.1"].indexOf(window.location.hostname)?Ra?!Ge():!Fe():!1}catch(b){Ad=!1}Cf.developmentMode=Ad}const Bd=function(){if("function"===typeof zd)return zd(Ie)};window.Vaadin||(window.Vaadin={});window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=
function(){Bd&&Bd()};let Yb;const Cd=new Set,Dd=b=>class extends Xb(b){static finalize(){super.finalize();const {is:a}=this;a&&!Cd.has(a)&&(window.Vaadin.registrations.push(this),Cd.add(a),window.Vaadin.developmentModeCallback&&(Yb=w.debounce(Yb,pd,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),W.add(Yb)))}constructor(){super();null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add \x3c!DOCTYPE html\x3e to the HTML document.')}};
class Ed extends Dd(Bf(Ub(Ga(M)))){static get template(){return Fa`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        label {
          display: inline-flex;
          align-items: baseline;
          outline: none;
        }

        [part='checkbox'] {
          position: relative;
          display: inline-block;
          flex: none;
        }

        input[type='checkbox'] {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
          margin: 0;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }
      </style>

      <label>
        <span part="checkbox">
          <input
            type="checkbox"
            checked="{{checked::change}}"
            disabled$="[[disabled]]"
            indeterminate="{{indeterminate::change}}"
            role="presentation"
            tabindex="-1"
          />
        </span>

        <span part="label">
          <slot></slot>
        </span>
      </label>
    `}static get is(){return"vaadin-checkbox"}static get version(){return"3.0.0"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super();this.name}get name(){return this.checked?this._storedName:""}set name(b){this._storedName=b}ready(){super.ready();
this.setAttribute("role","checkbox");this._nativeCheckbox=this.shadowRoot.querySelector('input[type\x3d"checkbox"]');this.addEventListener("click",this._handleClick.bind(this));this._addActiveListeners();const b=this.getAttribute("name");b&&(this.name=b);this.shadowRoot.querySelector('[part~\x3d"label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this));this._updateLabelAttribute()}_updateLabelAttribute(){const b=this.shadowRoot.querySelector('[part~\x3d"label"]'),
a=b.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(a)?b.setAttribute("empty",""):b.removeAttribute("empty")}_isAssignedNodesEmpty(b){return 0===b.length||1==b.length&&b[0].nodeType==Node.TEXT_NODE&&""===b[0].textContent.trim()}_checkedChanged(b){this.indeterminate?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",!!b)}_indeterminateChanged(b){b?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",this.checked)}_addActiveListeners(){this._addEventListenerToNode(this,
"down",b=>{this.__interactionsAllowed(b)&&this.setAttribute("active","")});this._addEventListenerToNode(this,"up",()=>this.removeAttribute("active"));this.addEventListener("keydown",b=>{this.__interactionsAllowed(b)&&32===b.keyCode&&(b.preventDefault(),this.setAttribute("active",""))});this.addEventListener("keyup",b=>{this.__interactionsAllowed(b)&&32===b.keyCode&&(b.preventDefault(),this._toggleChecked(),this.removeAttribute("active"),this.indeterminate&&(this.indeterminate=!1))})}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(b){return this.disabled||
"a"===b.target.localName?!1:!0}_handleClick(b){this.__interactionsAllowed(b)&&(this.indeterminate?(this.indeterminate=!1,b.preventDefault(),this._toggleChecked()):b.composedPath()[0]!==this._nativeCheckbox&&(b.preventDefault(),this._toggleChecked()))}_toggleChecked(){this.checked=!this.checked;this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}))}}customElements.define(Ed.is,Ed);Da("vaadin-grid",Ca`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='cell']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
    }

    [part~='row'][dragstart] {
      /* Add bottom-space to the row so the drag number doesn't get clipped. Needed for IE/Edge */
      border-bottom: 100px solid transparent;
      z-index: 100 !important;
      opacity: 0.9;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    [ios] [part~='row'][dragstart] [part~='cell'] {
      background: var(--lumo-primary-color-50pct);
    }

    #scroller:not([ios]) [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='left']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='right']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});Da("vaadin-checkbox",Ca`
    :host(.vaadin-grid-select-all-checkbox) {
      font-size: var(--lumo-font-size-m);
    }
  `,{moduleId:"vaadin-grid-select-all-checkbox-lumo"});let Sa=!1,Ec=[],Fc=[];class Ic{constructor(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName=""}}const R={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1E3},K={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Fd=new Set;window.ShadyDOM&&window.ShadyDOM.wrap||(b=>b);const Df=/;\s*/m,Ef=/^\s*(initial)|(inherit)\s*$/,Gd=/\s*!important/;class Ff{constructor(){this._map={}}set(b,a){b=b.trim();this._map[b]={properties:a,dependants:{}}}get(b){b=b.trim();return this._map[b]||null}}let cb=null;class C{constructor(){this._measureElement=this._currentElement=
null;this._map=new Ff}detectMixin(b){b=Ua.test(b)||Nb.test(b);Ua.lastIndex=0;Nb.lastIndex=0;return b}gatherStyles(b){var a=[];var c=b.content.querySelectorAll("style");for(let d=0;d<c.length;d++){const e=c[d];if(e.hasAttribute("shady-unscoped")){if(!Ja){{const f=e.textContent;if(!Fd.has(f)){Fd.add(f);const g=document.createElement("style");g.setAttribute("shady-unscoped","");g.textContent=f;document.head.appendChild(g)}}e.parentNode.removeChild(e)}}else a.push(e.textContent),e.parentNode.removeChild(e)}return(a=
a.join("").trim())?(c=document.createElement("style"),c.textContent=a,b.content.insertBefore(c,b.content.firstChild),c):null}transformTemplate(b,a){void 0===b._gatheredStyle&&(b._gatheredStyle=this.gatherStyles(b));return(b=b._gatheredStyle)?this.transformStyle(b,a):null}transformStyle(b,a=""){let c=Lc(b);this.transformRules(c,a);b.textContent=Eb(c);return c}transformCustomStyle(b){let a=Lc(b);ta(a,c=>{":root"===c.selector&&(c.selector="html");this.transformRule(c)});b.textContent=Eb(a);return a}transformRules(b,
a){this._currentElement=a;ta(b,c=>{this.transformRule(c)});this._currentElement=null}transformRule(b){b.cssText=this.transformCssText(b.parsedCssText,b);":root"===b.selector&&(b.selector=":host \x3e *")}transformCssText(b,a){b=b.replace(Nb,(c,d,e,f)=>this._produceCssProperties(c,d,e,f,a));return this._consumeCssProperties(b,a)}_getInitialValueForProperty(b){this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all=
"initial",document.head.appendChild(this._measureElement));return window.getComputedStyle(this._measureElement).getPropertyValue(b)}_fallbacksFromPreviousRules(b){let a=b;for(;a.parent;)a=a.parent;const c={};let d=!1;ta(a,e=>{(d=d||e===b)||e.selector===b.selector&&Object.assign(c,this._cssTextToMap(e.parsedCssText))});return c}_consumeCssProperties(b,a){for(var c=null;c=Ua.exec(b);){var d=c[0],e=c[1];c=c.index;var f=c+d.indexOf("@apply");let g=c+d.length;d=b.slice(0,f);b=b.slice(g);f=a?this._fallbacksFromPreviousRules(a):
{};Object.assign(f,this._cssTextToMap(d));e=this._atApplyToCssProperties(e,f);b=`${d}${e}${b}`;Ua.lastIndex=c+e.length}return b}_atApplyToCssProperties(b,a){b=b.replace(Df,"");let c=[];var d=this._map.get(b);d||(this._map.set(b,{}),d=this._map.get(b));if(d){this._currentElement&&(d.dependants[this._currentElement]=!0);let e,f;const g=d.properties;for(e in g)f=a&&a[e],d=[e,": var(",b,"_-_",e],f&&d.push(",",f.replace(Gd,"")),d.push(")"),Gd.test(g[e])&&d.push(" !important"),c.push(d.join(""))}return c.join("; ")}_replaceInitialOrInherit(b,
a){let c=Ef.exec(a);c&&(a=c[1]?this._getInitialValueForProperty(b):"apply-shim-inherit");return a}_cssTextToMap(b,a=!1){b=b.split(";");let c,d,e={};for(let f=0,g,h;f<b.length;f++)if(g=b[f])h=g.split(":"),1<h.length&&(c=h[0].trim(),d=h.slice(1).join(":"),a&&(d=this._replaceInitialOrInherit(c,d)),e[c]=d);return e}_invalidateMixinEntry(b){if(cb)for(let a in b.dependants)a!==this._currentElement&&cb(a)}_produceCssProperties(b,a,c,d,e){c&&Mc(c,(r,v)=>{v&&this._map.get(v)&&(d=`@apply ${v};`)});if(!d)return b;
var f=this._consumeCssProperties(""+d,e);e=b.slice(0,b.indexOf("--"));let g=f=this._cssTextToMap(f,!0),h=this._map.get(a),k=h&&h.properties;k?g=Object.assign(Object.create(k),f):this._map.set(a,g);let l=[],m,n,p=!1;for(m in g)n=f[m],void 0===n&&(n="initial"),!k||m in k||(p=!0),l.push(`${a}${"_-_"}${m}: ${n}`);p&&this._invalidateMixinEntry(h);h&&(h.properties=g);c&&(e=`${b};${e}`);return`${e}${l.join("; ")};`}}C.prototype.detectMixin=C.prototype.detectMixin;C.prototype.transformStyle=C.prototype.transformStyle;
C.prototype.transformCustomStyle=C.prototype.transformCustomStyle;C.prototype.transformRules=C.prototype.transformRules;C.prototype.transformRule=C.prototype.transformRule;C.prototype.transformTemplate=C.prototype.transformTemplate;C.prototype._separator="_-_";Object.defineProperty(C.prototype,"invalidCallback",{get(){return cb},set(b){cb=b}});const Gb={},Qe=Promise.resolve(),Ha=new C;class Gf{constructor(){this.customStyleInterface=null;Ha.invalidCallback=Oe}ensure(){!this.customStyleInterface&&
window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=b=>{Ha.transformCustomStyle(b)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(b,a){this.ensure();""===Nc(b)&&(Gb[a]=b,a=Ha.transformTemplate(b,a),b._styleAst=a)}flushCustomStyles(){this.ensure();if(this.customStyleInterface){var b=this.customStyleInterface.processStyles();
if(this.customStyleInterface.enqueued){for(let a=0;a<b.length;a++){let c=this.customStyleInterface.getStyleForCustomStyle(b[a]);c&&Ha.transformCustomStyle(c)}this.customStyleInterface.enqueued=!1}}}styleSubtree(b,a){this.ensure();a&&lb(b,a);if(b.shadowRoot)for(this.styleElement(b),b=b.shadowRoot.children||b.shadowRoot.childNodes,a=0;a<b.length;a++)this.styleSubtree(b[a]);else for(b=b.children||b.childNodes,a=0;a<b.length;a++)this.styleSubtree(b[a])}styleElement(b){this.ensure();{var a=b.localName;
var c="";let d="";a?-1<a.indexOf("-")?c=a:(d=a,c=b.getAttribute&&b.getAttribute("is")||""):(c=b.is,d=b.extends);a={is:c,typeExtension:d}}({is:c}=a);a=Gb[c];if((!a||""===Nc(a))&&a&&!Oc(a)){if(Oc(a)||a._applyShimValidatingVersion!==a._applyShimNextVersion)this.prepareTemplate(a,c),Pe(a);if(b=b.shadowRoot)if(b=b.querySelector("style"))b.__cssRules=a._styleAst,b.textContent=Eb(a._styleAst)}}styleDocument(b){this.ensure();this.styleSubtree(document.body,b)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const b=
new Gf;let a=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(c,d,e){b.flushCustomStyles();b.prepareTemplate(c,d)},prepareTemplateStyles(c,d,e){window.ShadyCSS.prepareTemplate(c,d,e)},prepareTemplateDom(c,d){},styleSubtree(c,d){b.flushCustomStyles();b.styleSubtree(c,d)},styleElement(c){b.flushCustomStyles();b.styleElement(c)},styleDocument(c){b.flushCustomStyles();b.styleDocument(c)},getComputedStyleValue(c,d){return ec(c,d)},flushCustomStyles(){b.flushCustomStyles()},
nativeCss:Fb,nativeShadow:Ja,cssBuild:ua,disableRuntime:cd};a&&(window.ShadyCSS.CustomStyleInterface=a)}window.ShadyCSS.ApplyShim=Ha;const Hf=/:host\(:dir\((ltr|rtl)\)\)/g,If=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Jf=/:dir\((?:ltr|rtl)\)/,Hd=!(!window.ShadyDOM||!window.ShadyDOM.inUse),wa=[];let Ia=null,va="";const Kf=E(b=>{Hd||Ia||(va=document.documentElement.getAttribute("dir"),Ia=new MutationObserver(Pc),Ia.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const a=sd(b);
class c extends a{static _processStyleText(d,e){d=a._processStyleText.call(this,d,e);!Hd&&Jf.test(d)&&(d=this._replaceDirInCssText(d),this.__activateDir=!0);return d}static _replaceDirInCssText(d){d=d.replace(Hf,':host([dir\x3d"$1"])');return d=d.replace(If,':host([dir\x3d"$2"]) $1')}constructor(){super();this.__autoDirOptOut=!1}ready(){super.ready();this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){a.prototype.connectedCallback&&super.connectedCallback();this.constructor.__activateDir&&
(Ia&&Ia.takeRecords().length&&Pc(),wa.push(this),this.__autoDirOptOut||this.setAttribute("dir",va))}disconnectedCallback(){a.prototype.disconnectedCallback&&super.disconnectedCallback();if(this.constructor.__activateDir){const d=wa.indexOf(this);-1<d&&wa.splice(d,1)}}}c.__activateDir=!1;return c});"interactive"===document.readyState||"complete"===document.readyState?Qc():window.addEventListener("DOMContentLoaded",Qc);let N=class{static getFlattenedNodes(b){const a=q(b);return da(b)?a.assignedNodes({flatten:!0}):
Array.from(a.childNodes).map(c=>da(c)?q(c).assignedNodes({flatten:!0}):[c]).reduce((c,d)=>c.concat(d),[])}constructor(b,a){this._nativeChildrenObserver=this._shadyChildrenObserver=null;this._connected=!1;this._target=b;this.callback=a;this._effectiveNodes=[];this._observer=null;this._scheduled=!1;this._boundSchedule=()=>{this._schedule()};this.connect();this._schedule()}connect(){da(this._target)?this._listenSlots([this._target]):q(this._target).children&&(this._listenSlots(q(this._target).children),
window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,b=>{this._processMutations(b)}):(this._nativeChildrenObserver=new MutationObserver(b=>{this._processMutations(b)}),this._nativeChildrenObserver.observe(this._target,{childList:!0})));this._connected=!0}disconnect(){da(this._target)?this._unlistenSlots([this._target]):q(this._target).children&&(this._unlistenSlots(q(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),
this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null));this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,F.run(()=>this.flush()))}_processMutations(b){this._processSlotMutations(b);this.flush()}_processSlotMutations(b){if(b)for(let a=0;a<b.length;a++){let c=b[a];c.addedNodes&&this._listenSlots(c.addedNodes);c.removedNodes&&this._unlistenSlots(c.removedNodes)}}flush(){if(!this._connected)return!1;
window.ShadyDOM&&ShadyDOM.flush();this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords());this._scheduled=!1;let b={target:this._target,addedNodes:[],removedNodes:[]};var a=this.constructor.getFlattenedNodes(this._target);var c=this._effectiveNodes;c=Rc(a,0,a.length,c,0,c.length);for(let d=0,e;d<c.length&&(e=c[d]);d++)for(let f=0,g;f<e.removed.length&&(g=e.removed[f]);f++)b.removedNodes.push(g);
for(let d=0,e;d<c.length&&(e=c[d]);d++)for(let f=e.index;f<e.index+e.addedCount;f++)b.addedNodes.push(a[f]);this._effectiveNodes=a;a=!1;if(b.addedNodes.length||b.removedNodes.length)a=!0,this.callback.call(this._target,b);return a}_listenSlots(b){for(let a=0;a<b.length;a++){let c=b[a];da(c)&&c.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(b){for(let a=0;a<b.length;a++){let c=b[a];da(c)&&c.removeEventListener("slotchange",this._boundSchedule)}}};const ja=Element.prototype,Id=ja.matches||
ja.matchesSelector||ja.mozMatchesSelector||ja.msMatchesSelector||ja.oMatchesSelector||ja.webkitMatchesSelector;class u{constructor(b){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(b);this.node=b}observeNodes(b){return new N(this.node,b)}unobserveNodes(b){b.disconnect()}notifyObserver(){}deepContains(b){if(q(this.node).contains(b))return!0;let a=b;for(b=b.ownerDocument;a&&a!==b&&a!==this.node;)a=q(a).parentNode||q(a).host;return a===this.node}getOwnerRoot(){return q(this.node).getRootNode()}getDistributedNodes(){return"slot"===
this.node.localName?q(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let b=[],a=q(this.node).assignedSlot;for(;a;)b.push(a),a=q(a).assignedSlot;return b}importNode(b,a){return q(this.node instanceof Document?this.node:this.node.ownerDocument).importNode(b,a)}getEffectiveChildNodes(){return N.getFlattenedNodes(this.node)}queryDistributedElements(b){let a=this.getEffectiveChildNodes(),c=[];for(let d=0,e=a.length,f;d<e&&(f=a[d]);d++)f.nodeType===Node.ELEMENT_NODE&&Id.call(f,
b)&&c.push(f);return c}get activeElement(){let b=this.node;return void 0!==b._activeElement?b._activeElement:b.activeElement}}class Zb{constructor(b){this.event=b}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}u.prototype.cloneNode;u.prototype.appendChild;u.prototype.insertBefore;u.prototype.removeChild;u.prototype.replaceChild;u.prototype.setAttribute;u.prototype.removeAttribute;u.prototype.querySelector;u.prototype.querySelectorAll;
u.prototype.parentNode;u.prototype.firstChild;u.prototype.lastChild;u.prototype.nextSibling;u.prototype.previousSibling;u.prototype.firstElementChild;u.prototype.lastElementChild;u.prototype.nextElementSibling;u.prototype.previousElementSibling;u.prototype.childNodes;u.prototype.children;u.prototype.classList;u.prototype.textContent;u.prototype.innerHTML;let $b=u;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class b extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(u.prototype).forEach(a=>
{"activeElement"!=a&&(b.prototype[a]=u.prototype[a])});Sc(b.prototype,["classList"]);$b=b;Object.defineProperties(Zb.prototype,{localTarget:{get(){var a=this.event.currentTarget;a=a&&Y(a).getOwnerRoot();const c=this.path;for(let d=0;d<c.length;d++){const e=c[d];if(Y(e).getOwnerRoot()===a)return e}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else Se(u.prototype,"cloneNode appendChild insertBefore removeChild replaceChild setAttribute removeAttribute querySelector querySelectorAll".split(" ")),
Sc(u.prototype,"parentNode firstChild lastChild nextSibling previousSibling firstElementChild lastElementChild nextElementSibling previousElementSibling childNodes children classList".split(" ")),Te(u.prototype,["textContent","innerHTML","className"]);const Y=function(b){b=b||document;if(b instanceof $b||b instanceof Zb)return b;let a=b.__domApi;a||(a=b instanceof Event?new Zb(b):new $b(b),b.__domApi=a);return a},Hb=window.ShadyDOM,Tc=window.ShadyCSS,Jd=b=>{for(;b;){const a=Object.getOwnPropertyDescriptor(b,
"observedAttributes");if(a)return a.get;b=Object.getPrototypeOf(b.prototype).constructor}return()=>[]};E(b=>{b=$a(b);let a=Jd(b);class c extends b{constructor(){super();this.__isUpgradeDisabled}static get observedAttributes(){return a.call(this).concat("disable-upgrade")}_initializeProperties(){this.hasAttribute("disable-upgrade")?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(d){return super._canApplyPropertyDefault(d)&&
!(this.__isUpgradeDisabled&&this._isPropertyPending(d))}attributeChangedCallback(d,e,f,g){"disable-upgrade"==d?this.__isUpgradeDisabled&&null==f&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,q(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(d,e,f,g)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return c});let Lf=window.ShadyCSS;const Kd=E(b=>{b=Ga($a(b));
b=Tb?b:Kf(b);const a=Jd(b),c={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class d extends b{constructor(){super();this.isAttached;this.__boundListeners;this._debouncers;this.__isUpgradeDisabled;this.__needsAttributesAtConnected;this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,f,g){(this.__dataAttributes&&this.__dataAttributes[e]||"disable-upgrade"===e)&&this.attributeChangedCallback(e,f,g,null)}setAttribute(e,f){if(Wa&&!this._legacyForceObservedAttributes){const g=
this.getAttribute(e);super.setAttribute(e,f);this.__attributeReaction(e,g,String(f))}else super.setAttribute(e,f)}removeAttribute(e){if(Wa&&!this._legacyForceObservedAttributes){const f=this.getAttribute(e);super.removeAttribute(e);this.__attributeReaction(e,f,null)}else super.removeAttribute(e)}static get observedAttributes(){return Wa&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty("__observedAttributes")||(this.__observedAttributes=[]),this.__observedAttributes):a.call(this).concat("disable-upgrade")}_enableProperties(){this.__isUpgradeDisabled||
super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes();this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(e,f,g,h){f!==g&&("disable-upgrade"==
e?this.__isUpgradeDisabled&&null==g&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,q(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,f,g,h),this.attributeChanged(e,f,g)))}attributeChanged(e,f,g){}_initializeProperties(){if(ya&&this.hasAttribute("disable-upgrade"))this.__isUpgradeDisabled=!0;else{let e=Object.getPrototypeOf(this);e.hasOwnProperty("__hasRegisterFinished")||(this._registered(),e.__hasRegisterFinished=!0);super._initializeProperties();this.root=
this;this.created();Wa&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0));this._applyListeners()}}_takeAttributes(){const e=this.attributes;for(let f=0,g=e.length;f<g;f++){const h=e[f];this.__attributeReaction(h.name,null,h.value)}}_registered(){}ready(){this._ensureAttributes();super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,f){return this._deserializeValue(e,
f)}reflectPropertyToAttribute(e,f,g){this._propertyToAttribute(e,f,g)}serializeValueToAttribute(e,f,g){this._valueToNodeAttribute(g||this,e,f)}extend(e,f){if(!e||!f)return e||f;let g=Object.getOwnPropertyNames(f);for(let h=0,k;h<g.length&&(k=g[h]);h++){let l=Object.getOwnPropertyDescriptor(f,k);l&&Object.defineProperty(e,k,l)}return e}mixin(e,f){for(let g in f)e[g]=f[g];return e}chainObject(e,f){e&&f&&e!==f&&(e.__proto__=f);return e}instanceTemplate(e){e=this.constructor._contentForTemplate(e);return document.importNode(e,
!0)}fire(e,f,g){g=g||{};f=null===f||void 0===f?{}:f;e=new Event(e,{bubbles:void 0===g.bubbles?!0:g.bubbles,cancelable:!!g.cancelable,composed:void 0===g.composed?!0:g.composed});e.detail=f;q(g.node||this).dispatchEvent(e);return e}listen(e,f,g){e=e||this;var h=this.__boundListeners||(this.__boundListeners=new WeakMap);let k=h.get(e);k||(k={},h.set(e,k));h=f+g;k[h]||(k[h]=this._addMethodEventListenerToNode(e,f,g,this))}unlisten(e,f,g){e=e||this;let h=this.__boundListeners&&this.__boundListeners.get(e);
g=f+g;let k=h&&h[g];k&&(this._removeEventListenerFromNode(e,f,k),h[g]=null)}setScrollDirection(e,f){zc(f||this,c[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=q(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=Y(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Y(this).getEffectiveChildNodes()}queryDistributedElements(e){return Y(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(e){return e.nodeType===
Node.ELEMENT_NODE})}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),f=[];for(let g=0,h;h=e[g];g++)h.nodeType!==Node.COMMENT_NODE&&f.push(h.textContent);return f.join("")}queryEffectiveChildren(e){return(e=this.queryDistributedElements(e))&&e[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){return(e=this.root.querySelector(e||"slot"))?Y(e).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter(function(f){return f.nodeType===
Node.ELEMENT_NODE})}isLightDescendant(e){return this!==e&&q(this).contains(e)&&q(this).getRootNode()===q(e).getRootNode()}isLocalDescendant(e){return this.root===q(e).getRootNode()}scopeSubtree(e,f=!1){return Ue(e,f)}getComputedStyleValue(e){return Lf.getComputedStyleValue(this,e)}debounce(e,f,g){this._debouncers=this._debouncers||{};return this._debouncers[e]=w.debounce(this._debouncers[e],0<g?H.after(g):F,f.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};e=this._debouncers[e];
return!(!e||!e.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};(e=this._debouncers[e])&&e.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};(e=this._debouncers[e])&&e.cancel()}async(e,f){return 0<f?H.run(e.bind(this),f):~F.run(e.bind(this))}cancelAsync(e){0>e?F.cancel(~e):H.cancel(e)}create(e,f){e=document.createElement(e);if(f)if(e.setProperties)e.setProperties(f);else for(let g in f)e[g]=f[g];return e}elementMatches(e,f){return Id.call(f||this,e)}toggleAttribute(e,
f){let g=this;3===arguments.length&&(g=arguments[2]);1==arguments.length&&(f=!g.hasAttribute(e));if(f)return q(g).setAttribute(e,""),!0;q(g).removeAttribute(e);return!1}toggleClass(e,f,g){g=g||this;1==arguments.length&&(f=!g.classList.contains(e));f?g.classList.add(e):g.classList.remove(e)}transform(e,f){f=f||this;f.style.webkitTransform=e;f.style.transform=e}translate3d(e,f,g,h){this.transform("translate3d("+e+","+f+","+g+")",h||this)}arrayDelete(e,f){if(Array.isArray(e)){if(f=e.indexOf(f),0<=f)return e.splice(f,
1)}else if(f=B(this,e).indexOf(f),0<=f)return this.splice(e,f,1);return null}_logger(e,f){Array.isArray(f)&&1===f.length&&Array.isArray(f[0])&&(f=f[0]);switch(e){case "log":case "warn":case "error":console[e](...f)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...f){return["[%s::%s]",this.is,e,...f]}}d.prototype.is="";return d}),Ve={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,
hostAttributes:!0},Xc={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Xe=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Xc),Ld=Kd(HTMLElement),ac=E(b=>{class a extends b{_shouldPropertyChange(c,d,e){return Ib(this,c,d,e,!0)}}return a}),Md=E(b=>{class a extends b{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(c,d,e){return Ib(this,c,d,e,this.mutableData)}}return a});
ac._mutablePropertyChange=Ib;let Kb=null;Jb.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Jb,writable:!0}});const $c=Za(Jb),bf=ac($c),Mf=Za(class{});class S extends Mf{constructor(b){super();this._configureProperties(b);this.root=this._stampTemplate(this.__dataHost);var a=[];this.children=a;for(let c=this.root.firstChild;c;c=c.nextSibling)a.push(c),c.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);
a=this.__templatizeOptions;(b&&a.instanceProps||!a.instanceProps)&&this._enableProperties()}_configureProperties(b){if(this.__templatizeOptions.forwardHostProp)for(let a in this.__hostProps)this._setPendingProperty(a,this.__dataHost["_host_"+a]);for(let a in b)this._setPendingProperty(a,b[a])}forwardHostProp(b,a){this._setPendingPropertyOrPath(b,a,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(b,a,c){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(b,
a,d=>{d.model=this;c(d)});else{let d=this.__dataHost.__dataHost;d&&d._addEventListenerToNode(b,a,c)}}_showHideChildren(b){Yc(b,this.children)}_setUnmanagedPropertyToNode(b,a,c){b.__hideTemplateChildren__&&b.nodeType==Node.TEXT_NODE&&"textContent"==a?b.__polymerTextContent__=c:super._setUnmanagedPropertyToNode(b,a,c)}get parentModel(){let b=this.__parentModel;if(!b){let a;b=this;do b=b.__dataHost.__dataHost;while((a=b.__templatizeOptions)&&!a.parentModel);this.__parentModel=b}return b}dispatchEvent(b){return!0}}
S.prototype.__dataHost;S.prototype.__templatizeOptions;S.prototype._methodHost;S.prototype.__templatizeOwner;S.prototype.__hostProps;const af=ac(S);let bd=!1;const Nf=Ga(Md(Za(HTMLElement)));class Of extends Nf{static get observedAttributes(){return["mutable-data"]}constructor(){super();if(ea)throw Error("strictTemplatePolicy: dom-bind not allowed");this.__children=this.$=this.root=null}attributeChangedCallback(b,a,c,d){this.mutableData=!0}connectedCallback(){Lb()||(this.style.display="none");this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){q(q(this).parentNode).insertBefore(this.root,
this)}__removeChildren(){if(this.__children)for(let b=0;b<this.__children.length;b++)this.root.appendChild(this.__children[b])}render(){let b;if(!this.__children){b=b||this.querySelector("template");if(!b){let a=new MutationObserver(()=>{if(b=this.querySelector("template"))a.disconnect(),this.render();else throw Error("dom-bind requires a \x3ctemplate\x3e child");});a.observe(this,{childList:!0});return}this.root=this._stampTemplate(b);this.$=this.root.$;this.__children=[];for(let a=this.root.firstChild;a;a=
a.nextSibling)this.__children[this.__children.length]=a;this._enableProperties()}this.__insertChildren();this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",Of);const Pf=Md(M);class Nd extends Pf{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,
observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Ob,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super();this.__instances=
[];this.__renderDebouncer=null;this.__itemsIdxToInstIdx={};this.__renderStartTime=this.__chunkCount=null;this.__shouldContinueChunking=this.__shouldMeasureChunk=this.__itemsArrayChanged=!1;this.__chunkingId=0;this.__ctor=this.__observePaths=this.__filterFn=this.__sortFn=null;this.__isDetached=!0;this.template=null;this._templateInfo}disconnectedCallback(){super.disconnectedCallback();this.__isDetached=!0;for(let b=0;b<this.__instances.length;b++)this.__detachInstance(b)}connectedCallback(){super.connectedCallback();
Lb()||(this.style.display="none");if(this.__isDetached){this.__isDetached=!1;let b=q(q(this).parentNode);for(let a=0;a<this.__instances.length;a++)this.__attachInstance(a,b)}}__ensureTemplatized(){if(!this.__ctor){let b=this.template=this._templateInfo?this:this.querySelector("template");if(!b){let c=new MutationObserver(()=>{if(this.querySelector("template"))c.disconnect(),this.__render();else throw Error("dom-repeat requires a \x3ctemplate\x3e child");});c.observe(this,{childList:!0});return!1}let a=
{};a[this.as]=!0;a[this.indexAs]=!0;a[this.itemsIndexAs]=!0;this.__ctor=za(b,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:a,forwardHostProp:function(c,d){let e=this.__instances;for(let f=0,g;f<e.length&&(g=e[f]);f++)g.forwardHostProp(c,d)},notifyInstanceProp:function(c,d,e){var f=this.as;if(f===d||0===f.indexOf(d+".")||0===d.indexOf(f+"."))c=c[this.itemsIndexAs],d==this.as&&(this.items[c]=e),d=`${"items"}.${c}`+d.slice(this.as.length),this.notifyPath(d,e)}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||
this.__dataHost}__functionFromPropertyValue(b){if("string"===typeof b){let a=this.__getMethodHost();return function(){return a[b].apply(a,arguments)}}return b}__sortChanged(b){this.__sortFn=this.__functionFromPropertyValue(b);this.items&&this.__debounceRender(this.__render)}__filterChanged(b){this.__filterFn=this.__functionFromPropertyValue(b);this.items&&this.__debounceRender(this.__render)}__computeFrameTime(b){return Math.ceil(1E3/b)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",
".").split(" ")}__handleObservedPaths(b){if(this.__sortFn||this.__filterFn)if(!b)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let a=this.__observePaths;for(let c=0;c<a.length;c++)0===b.indexOf(a[c])&&this.__debounceRender(this.__render,this.delay)}}__itemsChanged(b){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items);this.__handleItemPath(b.path,b.value)||("items"===b.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(b,
a=0){this.__renderDebouncer=w.debounce(this.__renderDebouncer,0<a?H.after(a):F,b.bind(this));W.add(this.__renderDebouncer)}render(){this.__debounceRender(this.__render);ha()}__render(){if(this.__ensureTemplatized()){var b=this.items||[],a=this.__sortAndFilterItems(b),c=this.__calculateLimit(a.length);this.__updateInstances(b,c,a);this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>this.__continueChunking()));
this._setRenderedItemCount(this.__instances.length);Ob&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}__sortAndFilterItems(b){let a=Array(b.length);for(let c=0;c<b.length;c++)a[c]=c;this.__filterFn&&(a=a.filter((c,d,e)=>this.__filterFn(b[c],d,e)));this.__sortFn&&a.sort((c,d)=>this.__sortFn(b[c],b[d]));return a}__calculateLimit(b){let a=b;const c=this.__instances.length;if(this.initialCount){let d;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?
(a=Math.min(b,this.initialCount),this.__chunkCount=(d=Math.max(a-c,0))||1):(d=Math.min(Math.max(b-c,0),this.__chunkCount),a=Math.min(c+d,b));this.__shouldMeasureChunk=d===this.__chunkCount;this.__shouldContinueChunking=a<b;this.__renderStartTime=performance.now()}this.__itemsArrayChanged=!1;return a}__continueChunking(){if(this.__shouldMeasureChunk){const b=performance.now()-this.__renderStartTime;this.__chunkCount=Math.round(this._targetFrameTime/b*this.__chunkCount)||1}this.__shouldContinueChunking&&
this.__debounceRender(this.__render)}__updateInstances(b,a,c){const d=this.__itemsIdxToInstIdx={};let e;for(e=0;e<a;e++){let f=this.__instances[e],g=c[e],h=b[g];d[g]=e;f?(f._setPendingProperty(this.as,h),f._setPendingProperty(this.indexAs,e),f._setPendingProperty(this.itemsIndexAs,g),f._flushProperties()):this.__insertInstance(h,e,g)}for(b=this.__instances.length-1;b>=e;b--)this.__detachAndRemoveInstance(b)}__detachInstance(b){b=this.__instances[b];const a=q(b.root);for(let c=0;c<b.children.length;c++)a.appendChild(b.children[c]);
return b}__attachInstance(b,a){a.insertBefore(this.__instances[b].root,this)}__detachAndRemoveInstance(b){this.__detachInstance(b);this.__instances.splice(b,1)}__stampInstance(b,a,c){let d={};d[this.as]=b;d[this.indexAs]=a;d[this.itemsIndexAs]=c;return new this.__ctor(d)}__insertInstance(b,a,c){b=this.__stampInstance(b,a,c);c=(c=this.__instances[a+1])?c.children[0]:this;q(q(this).parentNode).insertBefore(b.root,c);return this.__instances[a]=b}_showHideChildren(b){for(let a=0;a<this.__instances.length;a++)this.__instances[a]._showHideChildren(b)}__handleItemPath(b,
a){var c=b.slice(6);let d=c.indexOf(".");b=0>d?c:c.substring(0,d);if(b==parseInt(b,10)){c=0>d?"":c.substring(d+1);this.__handleObservedPaths(c);if(b=this.__instances[this.__itemsIdxToInstIdx[b]])b._setPendingPropertyOrPath(this.as+(c?"."+c:""),a,!1,!0),b._flushProperties();return!0}}itemForElement(b){return(b=this.modelForElement(b))&&b[this.as]}indexForElement(b){return(b=this.modelForElement(b))&&b[this.indexAs]}modelForElement(b){a:{var a=this.template;let c;for(;b;)if(c=b.__dataHost?b:b.__templatizeInstance)if(c.__dataHost!=
a)b=c.__dataHost;else{a=c;break a}else b=q(b).parentNode;a=null}return a}}customElements.define(Nd.is,Nd);class Od extends M{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super();this.__renderDebouncer=null;this.__hideTemplateChildren__=this._lastIf=!1;this.__template;this._templateInfo}__debounceRender(){this.__renderDebouncer=
w.debounce(this.__renderDebouncer,F,()=>this.__render());W.add(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const b=q(this).parentNode;b&&(b.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||q(b).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback();Lb()||(this.style.display="none");this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){let b=this._templateInfo?this:q(this).querySelector("template");if(!b){let a=new MutationObserver(()=>
{if(q(this).querySelector("template"))a.disconnect(),this.__render();else throw Error("dom-if requires a \x3ctemplate\x3e child");});a.observe(this,{childList:!0});return!1}this.__template=b}return!0}__ensureInstance(){let b=q(this).parentNode;if(this.__hasInstance()){let a=this.__getInstanceNodes();if(a&&a.length&&q(this).previousSibling!==a[a.length-1])for(let c=0,d;c<a.length&&(d=a[c]);c++)q(b).insertBefore(d,this)}else{if(!b||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(b)}return!0}render(){ha()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&
this.__teardownInstance();this._showHideChildren();Ob&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(b){}__teardownInstance(){}_showHideChildren(){}}class Qf extends Od{constructor(){super();this.__syncInfo=this.__instance=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(b){const a=
this.__dataHost||this;if(ea&&!this.__dataHost)throw Error("strictTemplatePolicy: template owner not trusted");const c=a._bindTemplate(this.__template,!0);c.runEffects=(d,e,f)=>{let g=this.__syncInfo;if(this.if)g&&(this.__syncInfo=null,this._showHideChildren(),e=Object.assign(g.changedProps,e)),d(e,f);else if(this.__instance)if(g||(g=this.__syncInfo={runEffects:d,changedProps:{}}),f)for(const h in e)d=J(h),g.changedProps[d]=this.__dataHost[d];else Object.assign(g.changedProps,e)};this.__instance=a._stampTemplate(this.__template,
c);q(b).insertBefore(this.__instance,this)}__syncHostProperties(){const b=this.__syncInfo;b&&(this.__syncInfo=null,b.runEffects(b.changedProps,!1))}__teardownInstance(){const b=this.__dataHost||this;this.__instance&&(b._removeBoundDom(this.__instance),this.__syncInfo=this.__instance=null)}_showHideChildren(){const b=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==b&&(this.__instance.__hidden=b,Yc(b,this.__instance.templateInfo.childNodes));b||this.__syncHostProperties()}}
class Rf extends Od{constructor(){super();this.__invalidProps=this.__instance=this.__ctor=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(b){this.__ctor||(this.__ctor=za(this.__template,this,{mutableData:!0,forwardHostProp:function(a,c){this.__instance&&(this.if?this.__instance.forwardHostProp(a,c):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[J(a)]=!0))}}));this.__instance=new this.__ctor;
q(b).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let b=this.__instance.children;if(b&&b.length){let a=q(b[0]).parentNode;if(a){a=q(a);for(let c=0,d;c<b.length&&(d=b[c]);c++)a.removeChild(d)}}this.__instance=this.__invalidProps=null}}__syncHostProperties(){let b=this.__invalidProps;if(b){this.__invalidProps=null;for(let a in b)this.__instance._setPendingProperty(a,this.__dataHost[a]);this.__instance._flushProperties()}}_showHideChildren(){const b=this.__hideTemplateChildren__||
!this.if;this.__instance&&!!this.__instance.__hidden!==b&&(this.__instance.__hidden=b,this.__instance._showHideChildren(b));b||this.__syncHostProperties()}}const Pd=ed?Qf:Rf;customElements.define(Pd.is,Pd);let Sf=E(b=>{b=$a(b);class a extends b{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super();
this.__selectedMap=this.__lastMulti=this.__lastItems=null}__updateSelection(c,d){var e=d.path;"items"==e?(d=d.base||[],e=this.__lastItems,c!==this.__lastMulti&&this.clearSelection(),e&&(e=Rc(d,0,d.length,e,0,e.length),this.__applySplices(e)),this.__lastItems=d,this.__lastMulti=c):"items.splices"==d.path?this.__applySplices(d.value.indexSplices):(c=e.slice(6),d=parseInt(c,10),0>c.indexOf(".")&&c==d&&this.__deselectChangedIdx(d))}__applySplices(c){let d=this.__selectedMap;for(let f=0;f<c.length;f++){let g=
c[f];d.forEach((h,k)=>{h<g.index||(h>=g.index+g.removed.length?d.set(k,h+g.addedCount-g.removed.length):d.set(k,-1))});for(let h=0;h<g.addedCount;h++){let k=g.index+h;d.has(this.items[k])&&d.set(this.items[k],k)}}this.__updateLinks();let e=0;d.forEach((f,g)=>{0>f?(this.multi?this.splice("selected",e,1):this.selected=this.selectedItem=null,d.delete(g)):e++})}__updateLinks(){this.__dataLinkedPaths={};if(this.multi){let c=0;this.__selectedMap.forEach(d=>{0<=d&&this.linkPaths(`${"items"}.${d}`,`${"selected"}.${c++}`)})}else this.__selectedMap.forEach(c=>
{this.linkPaths("selected",`${"items"}.${c}`);this.linkPaths("selectedItem",`${"items"}.${c}`)})}clearSelection(){this.__dataLinkedPaths={};this.__selectedMap=new Map;this.selected=this.multi?[]:null;this.selectedItem=null}isSelected(c){return this.__selectedMap.has(c)}isIndexSelected(c){return this.isSelected(this.items[c])}__deselectChangedIdx(c){let d=this.__selectedIndexForItemIndex(c);if(0<=d){let e=0;this.__selectedMap.forEach((f,g)=>{d==e++&&this.deselect(g)})}}__selectedIndexForItemIndex(c){if(c=
this.__dataLinkedPaths[`${"items"}.${c}`])return parseInt(c.slice(9),10)}deselect(c){let d=this.__selectedMap.get(c);if(0<=d){this.__selectedMap.delete(c);let e;this.multi&&(e=this.__selectedIndexForItemIndex(d));this.__updateLinks();this.multi?this.splice("selected",e,1):this.selected=this.selectedItem=null}}deselectIndex(c){this.deselect(this.items[c])}select(c){this.selectIndex(this.items.indexOf(c))}selectIndex(c){let d=this.items[c];this.isSelected(d)?this.toggle&&this.deselectIndex(c):(this.multi||
this.__selectedMap.clear(),this.__selectedMap.set(d,c),this.__updateLinks(),this.multi?this.push("selected",d):this.selected=this.selectedItem=d)}}return a})(M);class Qd extends Sf{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Qd.is,Qd);const ka=Kd(HTMLElement).prototype;var db=new Set;const Tf={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},
created:function(){this._interestedResizables=[];this._boundNotifyResize=this.notifyResize.bind(this);this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(db.delete(this),window.removeEventListener("resize",this._boundNotifyResize));this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(b){this.resizerShouldNotify(b)&&
this._notifyDescendant(b)},this),this._fireResize())},assignParentResizable:function(b){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this);(this._parentResizable=b)&&-1===b._interestedResizables.indexOf(this)&&(b._interestedResizables.push(this),b._subscribeIronResize(this))},stopResizeNotificationsFor:function(b){var a=this._interestedResizables.indexOf(b);-1<a&&(this._interestedResizables.splice(a,1),this._unsubscribeIronResize(b))},_subscribeIronResize:function(b){b.addEventListener("iron-resize",
this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(b){b.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(b){return!0},_onDescendantIronResize:function(b){this._notifyingDescendant?b.stopPropagation():Mb||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(b){var a=Y(b).rootTarget;a!==this&&(a.assignParentResizable(this),this._notifyDescendant(a),
b.stopPropagation())},_parentResizableChanged:function(b){b&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(b){this.isAttached&&(this._notifyingDescendant=!0,b.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var b=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function c(){document.removeEventListener("readystatechange",c);
b()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(a){a!==this&&a._findParent()},this):(db.forEach(function(a){a!==this&&a._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null);this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0});this._parentResizable?db.delete(this):db.add(this)}},Uf={properties:{scrollTarget:{type:HTMLElement,
value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(b,a){this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null);a&&("document"===b?this.scrollTarget=this._doc:"string"===typeof b?this.scrollTarget=(a=this.domHost)&&a.$?a.$[b]:Y(this.ownerDocument).querySelector("#"+b):this._isValidScrollTarget()&&(this._oldScrollTarget=b,this._toggleScrollListener(this._shouldHaveListener,
b)))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(b){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,b):this._isValidScrollTarget()&&
(this.scrollTarget.scrollTop=b)},set _scrollLeft(b){this.scrollTarget===this._doc?window.scrollTo(b,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=b)},scroll:function(b,a){if("object"===typeof b){var c=b.left;a=b.top}else c=b;c=c||0;a=a||0;this.scrollTarget===this._doc?window.scrollTo(c,a):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=c,this.scrollTarget.scrollTop=a)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?
window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(b,a){a=a===this._doc?window:a;b?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),a.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&
(a.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(b){this._shouldHaveListener=b;this._toggleScrollListener(b,this.scrollTarget)}},Rd=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),Vf=Rd&&8<=Rd[1],Wf=function(b,a){b||console.warn("Polymer.Class requires `info` argument");a=a?a(Ld):Ld;a=We(b,a,b.behaviors);a.is=a.prototype.is=b.is;return a}({behaviors:[Tf,Uf],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,
_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedVirtualIndex:-1,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-
this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){return Math.max(0,this._virtualCount-this._physicalCount)},set _virtualStart(b){this._virtualStartVal=b=this._clamp(b,0,this._maxVirtualStart)},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(b){b%=this._physicalCount;0>b&&(b=this._physicalCount+b);this._physicalStartVal=b},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+
this._physicalCount-1)%this._physicalCount},set _physicalCount(b){this._physicalCountVal=b},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?Infinity:this._viewportHeight*this._maxPages},get _isVisible(){return!(!this.offsetWidth&&!this.offsetHeight)},get firstVisibleIndex(){let b=this._firstVisibleIndexVal;if(null==b){let a=this._physicalTop+this._scrollOffset;this._firstVisibleIndexVal=b=this._iterateItems(function(c,d){a+=this._physicalSizes[c];
if(a>this._scrollPosition)return d})||0}return b},get lastVisibleIndex(){let b=this._lastVisibleIndexVal;if(null==b){let a=this._physicalTop+this._scrollOffset;this._iterateItems(function(c,d){a<this._scrollBottom&&(b=d);a+=this._physicalSizes[c]});this._lastVisibleIndexVal=b}return b},get _scrollOffset(){return this._scrollerPaddingTop},attached:function(){this._debounce("_render",this._render,L);this.listen(this,"iron-resize","_resizeHandler")},detached:function(){this.unlisten(this,"iron-resize",
"_resizeHandler")},updateViewportBoundaries:function(){const b=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(b["padding-top"],10);this._isRTL="rtl"===b.direction;this._viewportWidth=this.$.items.offsetWidth;this._viewportHeight=this._scrollTargetHeight},_scrollHandler:function(){var b=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let a=b-this._scrollPosition;const c=0<=a;this._scrollPosition=b;this._lastVisibleIndexVal=this._firstVisibleIndexVal=
null;if(Math.abs(a)>this._physicalSize&&0<this._physicalSize)a-=this._scrollOffset,b=Math.round(a/this._physicalAverage),this._virtualStart+=b,this._physicalStart+=b,this._physicalTop=Math.floor(this._virtualStart)*this._physicalAverage,this._update();else if(0<this._physicalCount){const {physicalTop:d,indexes:e}=this._getReusables(c);c?(this._physicalTop=d,this._virtualStart+=e.length,this._physicalStart+=e.length):(this._virtualStart-=e.length,this._physicalStart-=e.length);this._update(e,c?null:
e);this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),F)}},_getReusables:function(b){let a;let c;const d=[],e=this._hiddenContentSize*this._ratio,f=this._virtualStart,g=this._virtualEnd,h=this._physicalCount;let k=this._physicalTop+this._scrollOffset;var l=this._physicalBottom+this._scrollOffset;const m=this._scrollTop,n=this._scrollBottom;b?(a=this._physicalStart,l=m-k):(a=this._physicalEnd,l-=n);for(;;){c=this._physicalSizes[a];l-=c;if(d.length>=h||l<=e)break;if(b){if(g+
d.length+1>=this._virtualCount)break;if(k+c>=m-this._scrollOffset)break;d.push(a);k+=c;a=(a+1)%h}else{if(0>=f-d.length)break;if(k+this._physicalSize-c<=n)break;d.push(a);k-=c;a=0===a?h-1:a-1}}return{indexes:d,physicalTop:k-this._scrollOffset}},_update:function(b,a){if(!(b&&0===b.length||0===this._physicalCount)){this._assignModels(b);this._updateMetrics(b);if(a)for(;a.length;)b=a.pop(),this._physicalTop-=this._physicalSizes[b];this._positionItems();this._updateScrollerSize()}},_isClientFull:function(){return 0!=
this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(b){b=this._clamp(this._physicalCount+b,3,this._virtualCount-this._virtualStart)-this._physicalCount;var a=Math.round(.5*this._physicalCount);if(!(0>b)){if(0<b){a=window.performance.now();[].push.apply(this._physicalItems,this._createPool(b));for(let c=0;c<b;c++)this._physicalSizes.push(0);this._physicalCount+=b;this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&
this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=b);this._update();this._templateCost=(window.performance.now()-a)/b;a=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===a||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,a)),pd):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,
a),F))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){const {physicalTop:b,indexes:a}=this._getReusables(!0);this._physicalTop=b;this._virtualStart+=a.length;this._physicalStart+=a.length;this._update(a);this._update();this._increasePoolIfNeeded(0)}else 0<this._virtualCount&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_itemsChanged:function(b){"items"===b.path&&(this._physicalTop=this._virtualStart=0,this._virtualCount=this.items?this.items.length:
0,this._physicalIndexForKey={},this._lastVisibleIndexVal=this._firstVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,L))},_iterateItems:function(b,a){let c,d,e,f;if(2===arguments.length&&a)for(f=0;f<a.length;f++){if(c=a[f],d=this._computeVidx(c),null!=(e=b.call(this,c,d)))return e}else{c=
this._physicalStart;for(d=this._virtualStart;c<this._physicalCount;c++,d++)if(null!=(e=b.call(this,c,d)))return e;for(c=0;c<this._physicalStart;c++,d++)if(null!=(e=b.call(this,c,d)))return e}},_computeVidx:function(b){return b>=this._physicalStart?this._virtualStart+(b-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+b},_updateMetrics:function(b){ha();let a=0,c=0;const d=this._physicalAverageCount,e=this._physicalAverage;this._iterateItems(function(f){c+=this._physicalSizes[f];
this._physicalSizes[f]=this._physicalItems[f].offsetHeight;a+=this._physicalSizes[f];this._physicalAverageCount+=this._physicalSizes[f]?1:0},b);this._physicalSize=this._physicalSize+a-c;this._physicalAverageCount!==d&&(this._physicalAverage=Math.round((e*d+a)/this._physicalAverageCount))},_positionItems:function(){this._adjustScrollPosition();let b=this._physicalTop;this._iterateItems(function(a){this.translate3d(0,b+"px",0,this._physicalItems[a]);b+=this._physicalSizes[a]})},_adjustScrollPosition:function(){const b=
0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==b){this._physicalTop-=b;const a=this._scrollTop;!Vf&&0<a&&this._resetScrollPosition(a-b)}},_resetScrollPosition:function(b){this.scrollTarget&&0<=b&&(this._scrollPosition=this._scrollTop=b)},_updateScrollerSize:function(b){this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;if((b=(b=b||0===this._scrollHeight)||this._scrollPosition>=
this._estScrollHeight-this._physicalSize)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight},scrollToIndex:function(b){if(!("number"!==typeof b||0>b||b>this.items.length-1)&&(ha(),0!==this._physicalCount)){b=this._clamp(b,0,this._virtualCount-1);if(!this._isIndexRendered(b)||b>=this._maxVirtualStart)this._virtualStart=b-1;this._assignModels();this._updateMetrics();this._physicalTop=
Math.floor(this._virtualStart)*this._physicalAverage;for(var a=this._physicalStart,c=this._virtualStart,d=0,e=this._hiddenContentSize;c<b&&d<=e;)d+=this._physicalSizes[a],a=(a+1)%this._physicalCount,c++;this._updateScrollerSize(!0);this._positionItems();this._resetScrollPosition(this._physicalTop+this._scrollOffset+d);this._increasePoolIfNeeded(0);this._lastVisibleIndexVal=this._firstVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverageCount=this._physicalAverage=0},_resizeHandler:function(){this._debounce("_render",
function(){this._lastVisibleIndexVal=this._firstVisibleIndexVal=null;this.updateViewportBoundaries();this._isVisible?(this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},L)},_isIndexRendered:function(b){return b>=this._virtualStart&&b<=this._virtualEnd},_getPhysicalIndex:function(b){return(this._physicalStart+(b-this._virtualStart))%this._physicalCount},_clamp:function(b,a,c){return Math.min(c,Math.max(a,b))},_debounce:function(b,a,c){this._debouncers=
this._debouncers||{};this._debouncers[b]=w.debounce(this._debouncers[b],c,a.bind(this));W.add(this._debouncers[b])}});class Xf extends Wf{static get properties(){return{size:{type:Number,notify:!0},_vidxOffset:{type:Number,value:0}}}static get observers(){return["_effectiveSizeChanged(_effectiveSize)"]}connectedCallback(){super.connectedCallback();this._scrollHandler()}_updateScrollerItem(){}_afterScroll(){}_getRowTarget(){}_createScrollerRows(){}_canPopulate(){}scrollToIndex(b){this._warnPrivateAPIAccess("scrollToIndex");
this._scrollingToIndex=!0;b=Math.min(Math.max(b,0),this._effectiveSize-1);this.$.table.scrollTop=b/this._effectiveSize*(this.$.table.scrollHeight-this.$.table.offsetHeight);this._scrollHandler();this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize&&this._adjustVirtualIndexOffset(1E6);this._accessIronListAPI(()=>super.scrollToIndex(b-this._vidxOffset));this._scrollHandler();var a=Array.from(this.$.items.children).filter(c=>c.index===b)[0];a&&(a=a.getBoundingClientRect().top-
this.$.header.getBoundingClientRect().bottom,1<Math.abs(a)&&(this.$.table.scrollTop+=a,this._scrollHandler()));this._scrollingToIndex=!1}_effectiveSizeChanged(b){let a,c=0;this._iterateItems((d,e)=>{e===this._firstVisibleIndex&&(d=this._physicalItems[d],a=d.index,c=d.getBoundingClientRect().top)});this.items&&b<this.items.length&&(this._scrollTop=0);Array.isArray(this.items)||(this.items={length:Math.min(b,1E5)});this._accessIronListAPI(()=>super._itemsChanged({path:"items"}));this._virtualCount=
Math.min(this.items.length,b)||0;0===this._scrollTop&&(this._accessIronListAPI(()=>this._scrollToIndex(Math.min(b-1,a))),this._iterateItems(d=>{d=this._physicalItems[d];d.index===a&&(this.$.table.scrollTop+=Math.round(d.getBoundingClientRect().top-c));if(d.index===this._focusedItemIndex&&this._itemsFocusable&&this.$.items.contains(this.shadowRoot.activeElement)){const e=Array.from(this._itemsFocusable.parentElement.children).indexOf(this._itemsFocusable);d.children[e].focus()}}));this._assignModels();
requestAnimationFrame(()=>this._update());this.__updateFooterPositioning()}_positionItems(){this._adjustScrollPosition();let b;isNaN(this._physicalTop)&&(b=!0,this._physicalTop=0);let a=this._physicalTop;this._iterateItems(c=>{this._physicalItems[c].style.transform=`translateY(${a}px)`;a+=this._physicalSizes[c]});b&&this._scrollToIndex(0)}_increasePoolIfNeeded(b){0===b&&this._scrollingToIndex||!this._canPopulate()||!this._effectiveSize||(this._initialPoolCreated?Infinity!==this._optPhysicalSize&&
(this._debounceIncreasePool=w.debounce(this._debounceIncreasePool,L,()=>{this._updateMetrics();let a=Math.ceil((this._optPhysicalSize-this._physicalSize)/this._physicalAverage);this._physicalCount+a>this._effectiveSize&&(a=Math.max(0,this._effectiveSize-this._physicalCount));this._physicalSize&&0<a&&Infinity!==this._optPhysicalSize&&(super._increasePoolIfNeeded(a),this.__reorderChildNodes())})):(this._initialPoolCreated=!0,super._increasePoolIfNeeded(25)))}__reorderChildNodes(){const b=Array.from(this.$.items.childNodes);
b.reduce((a,c,d,e)=>{if(0===d||e[d-1].index===c.index-1)return a},!0)||b.sort((a,c)=>a.index-c.index).forEach(a=>this.$.items.appendChild(a))}_createPool(b){const a=document.createDocumentFragment();b=this._createScrollerRows(b);b.forEach(d=>a.appendChild(d));this._getRowTarget().appendChild(a);const c=this.querySelector("[slot]");if(c){const d=c.getAttribute("slot");c.setAttribute("slot","foo-bar");c.setAttribute("slot",d)}Le(this,()=>this.notifyResize());return b}_assignModels(b){this._iterateItems((a,
c)=>{a=this._physicalItems[a];this._toggleAttribute("hidden",c>=this._effectiveSize,a);this._updateScrollerItem(a,c+(this._vidxOffset||0))},b)}_scrollHandler(){const b=this.$.table.scrollTop-this._scrollPosition;this._accessIronListAPI(super._scrollHandler);const a=this._vidxOffset;this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize?this._adjustVirtualIndexOffset(b):this._vidxOffset=0;this._vidxOffset!==a&&this._update();this._afterScroll()}_adjustVirtualIndexOffset(b){if(1E4<
Math.abs(b))this._noScale?this._noScale=!1:(b=this.$.table.scrollTop/(this.$.table.scrollHeight-this.$.table.offsetHeight),this._vidxOffset=Math.round(b*this._effectiveSize-b*this._virtualCount));else{b=this._vidxOffset||0;0===this._scrollTop?(this._vidxOffset=0,b!==this._vidxOffset&&super.scrollToIndex(0)):1E3>this.firstVisibleIndex&&0<this._vidxOffset&&(this._vidxOffset-=Math.min(this._vidxOffset,100),b!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex+(b-this._vidxOffset)),this._noScale=
!0);const a=this._effectiveSize-this._virtualCount;this._scrollTop>=this._maxScrollTop&&0<this._maxScrollTop?(this._vidxOffset=a,b!==this._vidxOffset&&super.scrollToIndex(this._virtualCount)):this.firstVisibleIndex>this._virtualCount-1E3&&this._vidxOffset<a&&(this._vidxOffset+=Math.min(a-this._vidxOffset,100),b!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-b)),this._noScale=!0)}}_accessIronListAPI(b){this._warnPrivateAPIAccessAsyncEnabled=!1;b=b.apply(this);this._debouncerWarnPrivateAPIAccess=
w.debounce(this._debouncerWarnPrivateAPIAccess,L,()=>this._warnPrivateAPIAccessAsyncEnabled=!0);return b}_debounceRender(b,a){super._debounceRender(()=>this._accessIronListAPI(b),a)}_warnPrivateAPIAccess(b){this._warnPrivateAPIAccessAsyncEnabled&&console.warn(`Accessing private API (${b})!`)}_render(){this._accessIronListAPI(super._render)}_itemsChanged(){}get _firstVisibleIndex(){return this._accessIronListAPI(()=>super.firstVisibleIndex)}get _lastVisibleIndex(){return this._accessIronListAPI(()=>
super.lastVisibleIndex)}_scrollToIndex(b){this._accessIronListAPI(()=>this.scrollToIndex(b))}get firstVisibleIndex(){this._warnPrivateAPIAccess("firstVisibleIndex");return super.firstVisibleIndex}set firstVisibleIndex(b){this._warnPrivateAPIAccess("firstVisibleIndex");super.firstVisibleIndex=b}get lastVisibleIndex(){this._warnPrivateAPIAccess("lastVisibleIndex");return super.lastVisibleIndex}set lastVisibleIndex(b){this._warnPrivateAPIAccess("lastVisibleIndex");super.lastVisibleIndex=b}updateViewportBoundaries(){this._warnPrivateAPIAccess("updateViewportBoundaries");
super.updateViewportBoundaries.apply(this,arguments)}_resizeHandler(){super._resizeHandler();ha()}}const Yf=b=>class extends b{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(a){return a.filter(c=>c.some(d=>d._headerTemplate||d.headerRenderer||d.path||d.header)).length}_a11yGetFooterRowCount(a){return a.filter(c=>c.some(d=>d._headerTemplate||d.headerRenderer)).length}_a11yUpdateGridSize(a,c){if(void 0!==a&&void 0!==c){var d=c[c.length-
1];this.$.table.setAttribute("aria-rowcount",a+this._a11yGetHeaderRowCount(c)+this._a11yGetFooterRowCount(c));this.$.table.setAttribute("aria-colcount",d&&d.length||0);this._a11yUpdateHeaderRows();this._a11yUpdateFooterRows()}}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach((a,c)=>a.setAttribute("aria-rowindex",c+1))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach((a,c)=>a.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+c+
1))}_a11yUpdateRowRowindex(a,c){a.setAttribute("aria-rowindex",c+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(a,c){a.setAttribute("aria-selected",!!c);Array.from(a.children).forEach(d=>d.setAttribute("aria-selected",!!c))}_a11yUpdateRowLevel(a,c){a.setAttribute("aria-level",c+1)}_a11yUpdateRowDetailsOpened(a,c){Array.from(a.children).forEach(d=>{"boolean"===typeof c?d.setAttribute("aria-expanded",c):d.hasAttribute("aria-expanded")&&d.removeAttribute("aria-expanded")})}_a11ySetRowDetailsCell(a,
c){Array.from(a.children).forEach(d=>{d!==c&&d.setAttribute("aria-controls",c.id)})}_a11yUpdateCellColspan(a,c){a.setAttribute("aria-colspan",Number(c))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(a=>{let c=a.parentNode;for(;c&&"vaadin-grid-cell-content"!==c.localName;)c=c.parentNode;c&&c.assignedSlot&&c.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(a.direction)]||"none")})}},$f=b=>class extends b{static get properties(){return{activeItem:{type:Object,
notify:!0,value:null}}}ready(){super.ready();this.$.scroller.addEventListener("click",this._onClick.bind(this));this.addEventListener("cell-activate",this._activateItem.bind(this))}_activateItem(a){if(a=(a=a.detail.model)?a.item:null)this.activeItem=this._itemsEqual(this.activeItem,a)?null:a}_onClick(a){if(!a.defaultPrevented){var c=a.composedPath();if((c=c[c.indexOf(this.$.table)-3])&&!(-1<c.getAttribute("part").indexOf("details-cell"))){var d=c._content,e=this.getRootNode().activeElement;d.contains(e)||
this._isFocusable(a.target)||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(c.parentElement)}}))}}}_isFocusable(a){return Zf(a)}},Zf=b=>{if(!b.parentNode)return!1;const a=-1!==Array.from(b.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter(c=>"cell body-cell"!==c.getAttribute("part")).indexOf(b);return!b.disabled&&a},ag=b=>class extends b{static get properties(){return{items:Array}}static get observers(){return["_itemsChanged(items, items.*, isAttached)"]}_itemsChanged(a,
c,d){if(d)if(Array.isArray(a))this.size=a.length,this.dataProvider=this.dataProvider||this._arrayDataProvider,this.clearCache(),this._ensureFirstPageLoaded();else{if(void 0===a||null===a)this.size=0;this.dataProvider===this._arrayDataProvider&&(this.dataProvider=void 0)}}_arrayDataProvider(a,c){let d=(Array.isArray(this.items)?this.items:[]).slice(0);this._filters&&this._checkPaths(this._filters,"filtering",d)&&(d=this._filter(d));this.size=d.length;a.sortOrders.length&&this._checkPaths(this._sorters,
"sorting",d)&&(d=d.sort(this._multiSort.bind(this)));const e=a.page*a.pageSize;a=d.slice(e,e+a.pageSize);c(a,d.length)}_checkPaths(a,c,d){if(!d.length)return!1;let e=!0;for(let f in a){const g=a[f].path;if(!g||-1===g.indexOf("."))continue;const h=g.replace(/\.[^.]*$/,"");void 0===ka.get(h,d[0])&&(console.warn(`Path "${g}" used for ${c} does not exist in all of the items, ${c} is disabled.`),e=!1)}return e}_multiSort(a,c){return this._sorters.map(d=>"asc"===d.direction?this._compare(ka.get(d.path,
a),ka.get(d.path,c)):"desc"===d.direction?this._compare(ka.get(d.path,c),ka.get(d.path,a)):0).reduce((d,e)=>d?d:e,0)}_normalizeEmptyValue(a){return 0<=[void 0,null].indexOf(a)?"":isNaN(a)?a.toString():a}_compare(a,c){a=this._normalizeEmptyValue(a);c=this._normalizeEmptyValue(c);return a<c?-1:a>c?1:0}_filter(a){return a.filter(c=>0===this._filters.filter(d=>{const e=this._normalizeEmptyValue(ka.get(d.path,c));d=this._normalizeEmptyValue(d.value).toString().toLowerCase();return-1===e.toString().toLowerCase().indexOf(d)}).length)}},
bg=b=>class extends Ga(b){ready(){super.ready();const a=this.$.scroller;Ab(a,"track",this._onHeaderTrack.bind(this));a.addEventListener("touchmove",c=>a.hasAttribute("column-resizing")&&c.preventDefault());a.addEventListener("contextmenu",c=>"resize-handle"==c.target.getAttribute("part")&&c.preventDefault());a.addEventListener("mousedown",c=>"resize-handle"===c.target.getAttribute("part")&&c.preventDefault())}_onHeaderTrack(a){var c=a.target;if("resize-handle"===c.getAttribute("part")){let e=c.parentElement._column;
for(this._toggleAttribute("column-resizing",!0,this.$.scroller);"vaadin-grid-column-group"===e.localName;)e=Array.prototype.slice.call(e._childColumns,0).sort(function(g,h){return g._order-h._order}).filter(function(g){return!g.hidden}).pop();c=Array.from(this.$.header.querySelectorAll('[part~\x3d"row"]:last-child [part~\x3d"cell"]'));const f=c.filter(g=>g._column===e)[0];if(f.offsetWidth){var d=window.getComputedStyle(f);d=10+parseInt(d.paddingLeft)+parseInt(d.paddingRight)+parseInt(d.borderLeftWidth)+
parseInt(d.borderRightWidth)+parseInt(d.marginLeft)+parseInt(d.marginRight);const g=f.offsetWidth+(this.__isRTL?f.getBoundingClientRect().left-a.detail.x:a.detail.x-f.getBoundingClientRect().right);e.width=Math.max(d,g)+"px";e.flexGrow=0}c.sort(function(g,h){return g._column._order-h._column._order}).forEach(function(g,h,k){h<k.indexOf(f)&&(g._column.width=g.offsetWidth+"px",g._column.flexGrow=0)});"end"===a.detail.state&&(this._toggleAttribute("column-resizing",!1,this.$.scroller),this.dispatchEvent(new CustomEvent("column-resize",
{detail:{resizedColumn:e}})));this._resizeHandler()}}},Sd=class b{constructor(a,c,d){this.grid=a;this.parentCache=c;this.parentItem=d;this.itemCaches={};this.items={};this.size=this.effectiveSize=0;this.pendingRequests={}}isLoading(){return!(!Object.keys(this.pendingRequests).length&&!Object.keys(this.itemCaches).filter(a=>this.itemCaches[a].isLoading())[0])}getItemForIndex(a){const {cache:c,scaledIndex:d}=this.getCacheAndIndex(a);return c.items[d]}updateSize(){this.effectiveSize=!this.parentItem||
this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((a,c)=>{c=this.itemCaches[c];c.updateSize();return a+c.effectiveSize},0):0}ensureSubCacheForScaledIndex(a){if(!this.itemCaches[a]){const c=new b(this.grid,this,this.items[a]);this.itemCaches[a]=c;this.grid._loadPage(0,c)}}getCacheAndIndex(a){const c=Object.keys(this.itemCaches);for(let d=0;d<c.length;d++){const e=Number(c[d]),f=this.itemCaches[e];if(a<=e)break;else if(a<=e+f.effectiveSize)return f.getCacheAndIndex(a-
e-1);a-=f.effectiveSize}return{cache:this,scaledIndex:a}}},cg=b=>class extends b{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value:function(){return new Sd(this)}},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_sizeChanged(size)",
"_itemIdPathChanged(itemIdPath)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(a){a-=this._cache.size;this._cache.size+=a;this._cache.effectiveSize+=a;this._effectiveSize=this._cache.effectiveSize;this._increasePoolIfNeeded(0);this._debounceIncreasePool&&this._debounceIncreasePool.flush()}_getItem(a,c){if(!(a>=this._effectiveSize)){c.index=a;var {cache:d,scaledIndex:e}=this._cache.getCacheAndIndex(a);(a=d.items[e])?(this._toggleAttribute("loading",!1,c),this._updateItem(c,a),this._isExpanded(a)&&
d.ensureSubCacheForScaledIndex(e)):(this._toggleAttribute("loading",!0,c),this._loadPage(this._getPageForIndex(e),d))}}_expandedInstanceChangedCallback(a,c){void 0!==a.item&&(c?this.expandItem(a.item):this.collapseItem(a.item))}getItemId(a){return this.itemIdPath?this.get(this.itemIdPath,a):a}_isExpanded(a){return this.__expandedKeys.has(this.getItemId(a))}_expandedItemsChanged(){this.__cacheExpandedKeys();this._cache.updateSize();this._effectiveSize=this._cache.effectiveSize;this._assignModels()}_itemIdPathChanged(){this.__cacheExpandedKeys()}__cacheExpandedKeys(){this.expandedItems&&
(this.__expandedKeys=new Set,this.expandedItems.forEach(a=>{this.__expandedKeys.add(this.getItemId(a))}))}expandItem(a){this._isExpanded(a)||this.push("expandedItems",a)}collapseItem(a){this._isExpanded(a)&&this.splice("expandedItems",this._getItemIndexInArray(a,this.expandedItems),1)}_getIndexLevel(a){({cache:a}=this._cache.getCacheAndIndex(a));let c=0;for(;a.parentCache;)a=a.parentCache,c++;return c}_canPopulate(){return!(!this._hasData||!this._columnTree)}_loadPage(a,c){if(!c.pendingRequests[a]&&
this.dataProvider){this._setLoading(!0);c.pendingRequests[a]=!0;const d={page:a,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:c.parentItem};this._debounceIncreasePool&&this._debounceIncreasePool.flush();this.dataProvider(d,(e,f)=>{void 0!==f?c.size=f:d.parentItem&&(c.size=e.length);const g=Array.from(this.$.items.children).map(h=>h._item);e.forEach((h,k)=>{k=a*this.pageSize+k;c.items[k]=h;this._isExpanded(h)&&-1<g.indexOf(h)&&c.ensureSubCacheForScaledIndex(k)});
this._hasData=!0;delete c.pendingRequests[a];this._debouncerApplyCachedData=w.debounce(this._debouncerApplyCachedData,H.after(0),()=>{this._setLoading(!1);this._cache.updateSize();this._effectiveSize=this._cache.effectiveSize;Array.from(this.$.items.children).filter(h=>!h.hidden).forEach(h=>{this._cache.getItemForIndex(h.index)&&this._getItem(h.index,h)});this._increasePoolIfNeeded(0);this.__scrollToPendingIndex()});this._cache.isLoading()||this._debouncerApplyCachedData.flush();this.__itemsReceived()})}}_getPageForIndex(a){return Math.floor(a/
this.pageSize)}clearCache(){this._cache=new Sd(this);Array.from(this.$.items.children).forEach(a=>{Array.from(a.children).forEach(c=>{c._instance&&c._instance._setPendingProperty("item",{},!1)})});this._cache.size=this.size||0;this._cache.updateSize();this._hasData=!1;this._assignModels();this._effectiveSize&&this._initialPoolCreated||this._loadPage(0,this._cache)}_pageSizeChanged(a,c){void 0!==c&&a!==c&&this.clearCache()}_checkSize(){void 0===this.size&&0===this._effectiveSize&&console.warn("The \x3cvaadin-grid\x3e needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`\u2019s `callback` call.")}_dataProviderChanged(a,
c){void 0!==c&&this.clearCache();a&&this.items&&this.items.length&&this._scrollToIndex(this._firstVisibleIndex);this._ensureFirstPageLoaded();this._debouncerCheckSize=w.debounce(this._debouncerCheckSize,H.after(2E3),this._checkSize.bind(this));this._scrollHandler()}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(a,c){return this.getItemId(a)===this.getItemId(c)}_getItemIndexInArray(a,c){let d=-1;c.forEach((e,f)=>{this._itemsEqual(e,a)&&(d=f)});return d}scrollToIndex(a){super.scrollToIndex(a);
isNaN(a)||!this._cache.isLoading()&&this.clientHeight||(this.__pendingScrollToIndex=a)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){const a=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex;this._debounceIncreasePool&&this._debounceIncreasePool.flush();this.scrollToIndex(a)}}},dg=b=>class extends b{ready(){super.ready();this._addNodeObserver()}_hasColumnGroups(a){for(let c=0;c<a.length;c++)if("vaadin-grid-column-group"===a[c].localName)return!0;
return!1}_getChildColumns(a){return N.getFlattenedNodes(a).filter(this._isColumnElement)}_flattenColumnGroups(a){return a.map(c=>"vaadin-grid-column-group"===c.localName?this._getChildColumns(c):[c]).reduce((c,d)=>c.concat(d),[])}_getColumnTree(){var a=N.getFlattenedNodes(this).filter(this._isColumnElement);const c=[];for(;;){c.push(a);if(!this._hasColumnGroups(a))break;a=this._flattenColumnGroups(a)}return c}_updateColumnTree(){const a=this._getColumnTree();this._arrayEquals(a,this._columnTree)||
(this._columnTree=a)}_addNodeObserver(){this._observer=new N(this,a=>{var c=a.addedNodes.filter(d=>"template"===d.localName&&d.classList.contains("row-details"))[0];c&&this._rowDetailsTemplate!==c&&(this._rowDetailsTemplate=c);c=d=>0<d.filter(this._isColumnElement).length;if(c(a.addedNodes)||c(a.removedNodes)){const d=a.removedNodes.flatMap(e=>e._allCells);a=e=>d.filter(f=>f._content.contains(e)).length;this.__removeSorters(this._sorters.filter(a));this.__removeFilters(this._filters.filter(a));this._updateColumnTree()}this._debouncerCheckImports=
w.debounce(this._debouncerCheckImports,H.after(2E3),this._checkImports.bind(this));this._ensureFirstPageLoaded()})}_arrayEquals(a,c){if(!a||!c||a.length!=c.length)return!1;for(let d=0,e=a.length;d<e;d++)if(a[d]instanceof Array&&c[d]instanceof Array){if(!this._arrayEquals(a[d],c[d]))return!1}else if(a[d]!=c[d])return!1;return!0}_checkImports(){"vaadin-grid-column-group vaadin-grid-filter vaadin-grid-filter-column vaadin-grid-tree-toggle vaadin-grid-selection-column vaadin-grid-sort-column vaadin-grid-sorter".split(" ").forEach(a=>
{const c=this.querySelector(a);!c||c instanceof M||console.warn(`Make sure you have imported the required module for <${a}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(a=>this._updateFirstAndLastColumnForRow(a))}_updateFirstAndLastColumnForRow(a){Array.from(a.querySelectorAll('[part~\x3d"cell"]:not([part~\x3d"details-cell"])')).sort((c,d)=>c._column._order-d._column._order).forEach((c,d,e)=>{this._toggleAttribute("first-column",0===d,c);this._toggleAttribute("last-column",
d===e.length-1,c)})}_isColumnElement(a){return a.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(a.localName)}},eg=b=>class extends b{getEventContext(a){const c={};a=a.composedPath();const d=a[a.indexOf(this.$.table)-3];if(!d)return c;c.section=["body","header","footer","details"].filter(e=>-1<d.getAttribute("part").indexOf(e))[0];d._column&&(c.column=d._column);"body"!==c.section&&"details"!==c.section||Object.assign(c,this.__getRowModel(d.parentElement));return c}},fg=b=>class extends b{static get properties(){return{_filters:{type:Array,
value:function(){return[]}}}}ready(){super.ready();this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(a){a.stopPropagation();this.__addFilter(a.target);this.__applyFilters()}__removeFilters(a){0!=a.length&&(this._filters=this._filters.filter(c=>0>a.indexOf(c)),this.__applyFilters())}__addFilter(a){-1===this._filters.indexOf(a)&&this._filters.push(a)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(a=>({path:a.path,
value:a.value}))}};class eb extends M{static get is(){return"vaadin-grid-templatizer"}static get properties(){return{dataHost:Object,template:Object,_templateInstances:{type:Array,value:function(){return[]}},_parentPathValues:{value:function(){return{}}},_grid:Object}}static get observers(){return["_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)"]}constructor(){super();this._instanceProps={detailsOpened:!0,index:!0,item:!0,selected:!0,expanded:!0,level:!0}}createInstance(){this._ensureTemplatized();
const b=new this._TemplateClass({});this.addInstance(b);return b}addInstance(b){-1===this._templateInstances.indexOf(b)&&(this._templateInstances.push(b),requestAnimationFrame(()=>this.notifyPath("_templateInstances.*",this._templateInstances)))}removeInstance(b){b=this._templateInstances.indexOf(b);this.splice("_templateInstances",b,1)}_ensureTemplatized(){this._TemplateClass||(this._TemplateClass=za(this.template,this,{instanceProps:this._instanceProps,parentModel:!0,forwardHostProp:function(b,
a){this._forwardParentProp(b,a);this._templateInstances&&this._templateInstances.forEach(c=>c.notifyPath(b,a))},notifyInstanceProp:function(b,a,c){if("index"!==a&&"item"!==a){var d=`__${a}__`;if(b[d]!==c){b[d]=c;var e=Array.from(this._grid.$.items.children).filter(f=>this._grid._itemsEqual(f._item,b.item))[0];e&&Array.from(e.children).forEach(f=>{f._instance&&(f._instance[d]=c,f._instance.notifyPath(a,c))});if(Array.isArray(this._grid.items)&&0===a.indexOf("item.")){e=this._grid.items.indexOf(b.item);
const f=a.slice(5);this._grid.notifyPath(`items.${e}.${f}`,c)}e=`_${a}InstanceChangedCallback`;if(this._grid&&this._grid[e])this._grid[e](b,c)}}}}))}_forwardParentProp(b,a){this._parentPathValues[b]=a;this._templateInstances.forEach(c=>c.notifyPath(b,a))}_templateInstancesChanged(b){let a,c;if("_templateInstances"===b.path)a=0,c=this._templateInstances.length;else if("_templateInstances.splices"===b.path)a=b.value.index,c=b.value.addedCount;else return;Object.keys(this._parentPathValues||{}).forEach(d=>
{for(let e=a;e<a+c;e++)this._templateInstances[e].set(d,this._parentPathValues[d])})}}customElements.define(eb.is,eb);const gg=b=>class extends b{static get properties(){return{detailsOpenedItems:{type:Array,value:function(){return[]}},_rowDetailsTemplate:Object,rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)","_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)"]}_rowDetailsTemplateOrRendererChanged(a,
c){if(a&&c)throw Error("You should only use either a renderer or a template for row details");if(a||c)a&&!a.templatizer&&(c=new eb,c._grid=this,c.dataHost=this.dataHost,c.template=a,a.templatizer=c),this._columnTree&&Array.from(this.$.items.children).forEach(d=>{d.querySelector("[part~\x3ddetails-cell]")||(this._updateRow(d,this._columnTree[this._columnTree.length-1]),this._a11yUpdateRowDetailsOpened(d,!1));delete d.querySelector("[part~\x3ddetails-cell]")._instance}),this.detailsOpenedItems.length&&
(Array.from(this.$.items.children).forEach(this._toggleDetailsCell,this),this._update())}_detailsOpenedItemsChanged(a){"detailsOpenedItems.length"!==a.path&&a.value&&Array.from(this.$.items.children).forEach(c=>{this._toggleDetailsCell(c,c._item);this._a11yUpdateRowDetailsOpened(c,this._isDetailsOpened(c._item));this._toggleAttribute("details-opened",this._isDetailsOpened(c._item),c)})}_configureDetailsCell(a){a.setAttribute("part","cell details-cell");this._toggleAttribute("frozen",!0,a)}_toggleDetailsCell(a,
c){const d=a.querySelector('[part~\x3d"details-cell"]');if(d){var e=!this._isDetailsOpened(c),f=!!d.hidden!==e;if(!d._instance&&!d._renderer||d.hidden!==e)(d.hidden=e)?a.style.removeProperty("padding-bottom"):(this.rowDetailsRenderer?(d._renderer=this.rowDetailsRenderer,d._renderer.call(this,d._content,this,{index:a.index,item:c})):this._rowDetailsTemplate&&!d._instance&&(d._instance=this._rowDetailsTemplate.templatizer.createInstance(),d._content.innerHTML="",d._content.appendChild(d._instance.root),
this._updateItem(a,c)),ha(),a.style.setProperty("padding-bottom",`${d.offsetHeight}px`),requestAnimationFrame(()=>this.notifyResize()));f&&(this._updateMetrics(),this._positionItems())}}_updateDetailsCellHeights(){Array.from(this.$.items.querySelectorAll('[part~\x3d"details-cell"]:not([hidden])')).forEach(a=>{a.parentElement.style.setProperty("padding-bottom",`${a.offsetHeight}px`)})}_isDetailsOpened(a){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(a,this.detailsOpenedItems)}openItemDetails(a){this._isDetailsOpened(a)||
this.push("detailsOpenedItems",a)}closeItemDetails(a){this._isDetailsOpened(a)&&this.splice("detailsOpenedItems",this._getItemIndexInArray(a,this.detailsOpenedItems),1)}_detailsOpenedInstanceChangedCallback(a,c){c?this.openItemDetails(a.item):this.closeItemDetails(a.item)}},hg=b=>class extends b{static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element,_deltaYAcc:{type:Number,value:0},_useSticky:{type:Boolean,value:window.CSS&&window.CSS.supports&&(window.CSS.supports("position",
"sticky")||window.CSS.supports("position","-webkit-sticky"))}}}static get observers(){return["_scrollViewportHeightUpdated(_viewportHeight)"]}set _scrollTop(a){this.$.table.scrollTop=a}get _scrollTop(){return this.$.table.scrollTop}constructor(){super();this._scrollLineHeight=this._getScrollLineHeight()}_getScrollLineHeight(){const a=document.createElement("div");a.style.fontSize="initial";a.style.display="none";document.body.appendChild(a);const c=window.getComputedStyle(a).fontSize;document.body.removeChild(a);
return c?window.parseInt(c):void 0}_scrollViewportHeightUpdated(a){this._scrollPageHeight=a-this.$.header.clientHeight-this.$.footer.clientHeight-this._scrollLineHeight}ready(){super.ready();this.$.outerscroller=document.createElement("div");this.scrollTarget=this.$.table;this.addEventListener("wheel",this._onWheel);this.$.items.addEventListener("focusin",a=>{const c=a.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=a.composedPath()[c-1]});this.$.items.addEventListener("focusout",
()=>this._rowWithFocusedElement=void 0);this.scrollTarget.addEventListener("mousedown",()=>this.__mouseDown=!0);this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1;this.__pendingReorder&&(this.__pendingReorder=!1,setTimeout(()=>this._reorderRows(),500))})}scrollToIndex(a){this._accessIronListAPI(()=>super.scrollToIndex(a))}_onWheel(a){if(!a.ctrlKey&&!this._hasScrolledAncestor(a.target,a.deltaX,a.deltaY)){var c=this.$.table,d=a.deltaY;a.deltaMode===WheelEvent.DOM_DELTA_LINE?d*=this._scrollLineHeight:
a.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(d*=this._scrollPageHeight);if(this._wheelAnimationFrame)this._deltaYAcc+=d,a.preventDefault();else{d+=this._deltaYAcc;this._deltaYAcc=0;this._wheelAnimationFrame=!0;this._debouncerWheelAnimationFrame=w.debounce(this._debouncerWheelAnimationFrame,L,()=>this._wheelAnimationFrame=!1);var e=Math.abs(a.deltaX)+Math.abs(d);this._canScroll(c,a.deltaX,d)?(a.preventDefault(),c.scrollTop+=d,c.scrollLeft+=a.deltaX,this._scrollHandler(),this._ignoreNewWheel=this._hasResidualMomentum=
!0,this._debouncerIgnoreNewWheel=w.debounce(this._debouncerIgnoreNewWheel,H.after(500),()=>this._ignoreNewWheel=!1)):this._hasResidualMomentum&&e<=this._previousMomentum||this._ignoreNewWheel?a.preventDefault():e>this._previousMomentum&&(this._hasResidualMomentum=!1);this._previousMomentum=e}}}_hasScrolledAncestor(a,c,d){if("vaadin-grid-cell-content"===a.localName)return!1;if(this._canScroll(a,c,d)&&-1!==["auto","scroll"].indexOf(getComputedStyle(a).overflow))return!0;if(a!==this&&a.parentElement)return this._hasScrolledAncestor(a.parentElement,
c,d)}_canScroll(a,c,d){return 0<d&&a.scrollTop<a.scrollHeight-a.offsetHeight||0>d&&0<a.scrollTop||0<c&&a.scrollLeft<a.scrollWidth-a.offsetWidth||0>c&&0<a.scrollLeft}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this._toggleAttribute("scrolling",!0,this.$.scroller)));this._debounceScrolling=w.debounce(this._debounceScrolling,H.after(500),()=>{cancelAnimationFrame(this._scrollingFrame);delete this._scrollingFrame;this._toggleAttribute("scrolling",!1,this.$.scroller);
this._reorderRows()})}_afterScroll(){this._translateStationaryElements();this.hasAttribute("reordering")||this._scheduleScrolling();this._updateOverflow()}_updateOverflow(){let a="";const c=this.$.table;c.scrollTop<c.scrollHeight-c.clientHeight&&(a+=" bottom");0<c.scrollTop&&(a+=" top");c.scrollLeft<c.scrollWidth-c.clientWidth&&(a+=" right");0<c.scrollLeft&&(a+=" left");this._debounceOverflow=w.debounce(this._debounceOverflow,L,()=>{const d=a.trim();0<d.length&&this.getAttribute("overflow")!==d?this.setAttribute("overflow",
d):0==d.length&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")})}_reorderRows(){if(this.__mouseDown)this.__pendingReorder=!0;else{var a=this.$.items,c=a.querySelectorAll("tr");if(c.length){var d=this._virtualStart+this._vidxOffset,e=this._rowWithFocusedElement||Array.from(c).filter(f=>!f.hidden)[0];if(e){d=e.index-d;e=Array.from(c).indexOf(e)-d;if(0<e)for(d=0;d<e;d++)a.appendChild(c[d]);else if(0>e)for(e=c.length+e;e<c.length;e++)a.insertBefore(c[e],c[0]);if(this._safari){const {transform:f}=
this.$.header.style;this.$.header.style.transform="";setTimeout(()=>this.$.header.style.transform=f)}}}}}_frozenCellsChanged(){this._debouncerCacheElements=w.debounce(this._debouncerCacheElements,F,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~\x3d"cell"]')).forEach(function(a){a.style.transform=""});this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]"));this._updateScrollerMeasurements();this._translateStationaryElements()});this._updateLastFrozen()}_updateScrollerMeasurements(){0<
this._frozenCells.length&&this.__isRTL&&(this.__scrollerMetrics={scrollWidth:this.$.table.scrollWidth,clientWidth:this.$.table.clientWidth})}_updateLastFrozen(){if(this._columnTree){var a=this._columnTree[this._columnTree.length-1].slice(0);a.sort((d,e)=>d._order-e._order);var c=a.reduce((d,e,f)=>{e._lastFrozen=!1;return e.frozen&&!e.hidden?f:d},void 0);void 0!==c&&(a[c]._lastFrozen=!0)}}_translateStationaryElements(){var a=Math.max(0,this._scrollLeft),c=Math.max(0,this._scrollTop);let d=0,e=0,f=
0;this._useSticky||(d=a,e=c,f=this.$.table.clientHeight-this.$.footer.offsetHeight-this.$.footer.offsetTop);this.$.header.style.transform=this._getTranslate(-a+d,e);this.$.footer.style.transform=this._getTranslate(-a+d,e+f);this.$.items.style.transform=this._getTranslate(-a+d,0);if(0<this._frozenCells.length)for(a=this.__isRTL?this.__getNormalizedScrollLeft(this.$.table)+this.__scrollerMetrics.clientWidth-this.__scrollerMetrics.scrollWidth:this._scrollLeft,a=this._getTranslate(a,0),c=0;c<this._frozenCells.length;c++)this._frozenCells[c].style.transform=
a}_getTranslate(a,c){return`translate(${a}px, ${c}px)`}},ig=b=>class extends b{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_selectedItemsChanged(selectedItems.*)"]}_isSelected(a){return this.selectedItems&&-1<this._getItemIndexInArray(a,this.selectedItems)}selectItem(a){this._isSelected(a)||this.push("selectedItems",a)}deselectItem(a){a=this._getItemIndexInArray(a,this.selectedItems);-1<a&&this.splice("selectedItems",a,1)}_toggleItem(a){-1===
this._getItemIndexInArray(a,this.selectedItems)?this.selectItem(a):this.deselectItem(a)}_selectedItemsChanged(a){!this.$.items.children.length||"selectedItems"!==a.path&&"selectedItems.splices"!==a.path||Array.from(this.$.items.children).forEach(c=>{this._updateItem(c,c._item)})}_selectedInstanceChangedCallback(a,c){c?this.selectItem(a.item):this.deselectItem(a.item)}},jg=b=>class extends b{static get properties(){return{multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:function(){return[]}},
_previousSorters:{type:Array,value:function(){return[]}}}}ready(){super.ready();this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(a){const c=a.target;a.stopPropagation();this.__updateSorter(c);this.__applySorters()}__removeSorters(a){0!=a.length&&(this._sorters=this._sorters.filter(c=>0>a.indexOf(c)),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((a,c)=>a._order=1<this._sorters.length?c:null,this)}__updateSorter(a){if(a.direction||
-1!==this._sorters.indexOf(a))if(a._order=null,this.multiSort)this._removeArrayItem(this._sorters,a),a.direction&&this._sorters.unshift(a),this.__updateSortOrders();else if(a.direction){const c=this._sorters.filter(d=>d!=a);this._sorters=[a];c.forEach(d=>{d._order=null;d.direction=null})}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache();this._a11yUpdateSorters();this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(a=>
({path:a.path,direction:a.direction}))}_removeArrayItem(a,c){c=a.indexOf(c);-1<c&&a.splice(c,1)}},kg=b=>class extends b{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter(a=>!a.hidden).forEach(a=>this._generateCellClassNames(a,this.__getRowModel(a)))}_generateCellClassNames(a,
c){Array.from(a.children).forEach(d=>{d.__generatedClasses&&d.__generatedClasses.forEach(e=>d.classList.remove(e));if(this.cellClassNameGenerator){const e=this.cellClassNameGenerator(d._column,c);d.__generatedClasses=e&&e.split(" ").filter(f=>0<f.length);d.__generatedClasses&&d.__generatedClasses.forEach(f=>d.classList.add(f))}})}},lg=b=>class extends b{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)"]}ready(){super.ready();
this.$.table.addEventListener("dragstart",this._onDragStart.bind(this));this.$.table.addEventListener("dragend",this._onDragEnd.bind(this));this.$.table.addEventListener("dragover",this._onDragOver.bind(this));this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this));this.$.table.addEventListener("drop",this._onDrop.bind(this));this.$.table.addEventListener("dragenter",a=>{this.dropMode&&(a.preventDefault(),a.stopPropagation())})}_onDragStart(a){if(this.rowsDraggable){let e=a.target;
"vaadin-grid-cell-content"===e.localName&&(e=e.assignedSlot.parentNode.parentNode);if(e.parentNode===this.$.items){a.stopPropagation();this._toggleAttribute("dragging-rows",!0,this);if(this._safari){const f=e.style.transform;e.style.top=/translateY\((.*)\)/.exec(f)[1];e.style.transform="none";requestAnimationFrame(()=>{e.style.top="";e.style.transform=f})}var c=e.getBoundingClientRect();this._ios?a.dataTransfer.setDragImage(e):a.dataTransfer.setDragImage(e,a.clientX-c.left,a.clientY-c.top);var d=
[e];this._isSelected(e._item)&&(d=this.__getViewportRows().filter(f=>this._isSelected(f._item)).filter(f=>!this.dragFilter||this.dragFilter(this.__getRowModel(f))));a.dataTransfer.setData("text",this.__formatDefaultTransferData(d));e.setAttribute("dragstart",1<d.length?d.length:"");this.updateStyles({"--_grid-drag-start-x":`${a.clientX-c.left+20}px`,"--_grid-drag-start-y":`${a.clientY-c.top+10}px`});requestAnimationFrame(()=>{e.removeAttribute("dragstart");this.updateStyles({"--_grid-drag-start-x":"",
"--_grid-drag-start-y":""})});c=new CustomEvent("grid-dragstart",{detail:{draggedItems:d.map(f=>f._item),setDragData:(f,g)=>a.dataTransfer.setData(f,g),setDraggedItemsCount:f=>e.setAttribute("dragstart",f)}});c.originalEvent=a;this.dispatchEvent(c)}}}_onDragEnd(a){this._toggleAttribute("dragging-rows",!1,this);a.stopPropagation();const c=new CustomEvent("grid-dragend");c.originalEvent=a;this.dispatchEvent(c)}_onDragLeave(a){a.stopPropagation();this._clearDragStyles()}_onDragOver(a){if(this.dropMode)if(this._dragOverItem=
this._dropLocation=void 0,this.__dndAutoScroll(a.clientY))this._clearDragStyles();else{var c=a.composedPath().filter(d=>"tr"===d.localName)[0];if(this._effectiveSize&&"on-grid"!==this.dropMode)if(c&&c.parentNode===this.$.items){const d=c.getBoundingClientRect();this._dropLocation="on-top";"between"===this.dropMode?this._dropLocation=a.clientY-d.top<d.bottom-a.clientY?"above":"below":"on-top-or-between"===this.dropMode&&(a.clientY-d.top<d.height/3?this._dropLocation="above":a.clientY-d.top>d.height/
3*2&&(this._dropLocation="below"))}else{if(c||"between"!==this.dropMode&&"on-top-or-between"!==this.dropMode)return;c=Array.from(this.$.items.children).filter(d=>!d.hidden).pop();this._dropLocation="below"}else this._dropLocation="empty";c&&c.hasAttribute("drop-disabled")?this._dropLocation=void 0:(a.stopPropagation(),a.preventDefault(),"empty"===this._dropLocation?this._toggleAttribute("dragover",!0,this):c?(this._dragOverItem=c._item,c.getAttribute("dragover")!==this._dropLocation&&c.setAttribute("dragover",
this._dropLocation)):this._clearDragStyles())}}__dndAutoScroll(a){if(this.__dndAutoScrolling)return!0;var c=this.$.header.getBoundingClientRect().bottom,d=this.$.footer.getBoundingClientRect().top;c=c-a+this.__dndAutoScrollThreshold;d=a-d+this.__dndAutoScrollThreshold;a=0;0<d?a=2*d:0<c&&(a=2*-c);if(a&&(c=this.$.table.scrollTop,this.$.table.scrollTop+=a,c!==this.$.table.scrollTop))return this.__dndAutoScrolling=!0,setTimeout(()=>this.__dndAutoScrolling=!1,20),this._scrollHandler(),!0}__getViewportRows(){const a=
this.$.header.getBoundingClientRect().bottom,c=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(d=>{d=d.getBoundingClientRect();return d.bottom>a&&d.top<c})}_clearDragStyles(){this.removeAttribute("dragover");Array.from(this.$.items.children).forEach(a=>a.removeAttribute("dragover"))}_onDrop(a){if(this.dropMode){a.stopPropagation();a.preventDefault();var c=a.dataTransfer.types&&Array.from(a.dataTransfer.types).map(d=>({type:d,data:a.dataTransfer.getData(d)}));
this._clearDragStyles();c=new CustomEvent("grid-drop",{bubbles:a.bubbles,cancelable:a.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:c}});c.originalEvent=a;this.dispatchEvent(c)}}__formatDefaultTransferData(a){return a.map(c=>Array.from(c.children).filter(d=>!d.hidden&&-1===d.getAttribute("part").indexOf("details-cell")).sort((d,e)=>d._column._order>e._column._order?1:-1).map(d=>d._content.textContent.trim()).filter(d=>d).join("\t")).join("\n")}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter(a=>
!a.hidden).forEach(a=>{this._filterDragAndDrop(a,this.__getRowModel(a))})}_filterDragAndDrop(a,c){const d=!this.rowsDraggable||this.dragFilter&&!this.dragFilter(c);c=!this.dropMode||this.dropFilter&&!this.dropFilter(c);Array.from(a.children).map(e=>e._content).forEach(e=>{d?e.removeAttribute("draggable"):e.setAttribute("draggable",!0)});this._toggleAttribute("drag-disabled",d,a);this._toggleAttribute("drop-disabled",c,a)}},mg=b=>class extends b{static get properties(){return{_headerFocusable:{type:Object,
observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number}}ready(){super.ready();this._ios||this._android||(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",
this._onCellFocusIn.bind(this)),this.$.table.addEventListener("focusout",this._onCellFocusOut.bind(this)),this.addEventListener("mousedown",()=>{this._toggleAttribute("navigating",!1,this);this._isMousedown=!0}),this.addEventListener("mouseup",()=>this._isMousedown=!1))}_focusableChanged(a,c){c&&c.setAttribute("tabindex","-1");a&&a.setAttribute("tabindex","0")}_onKeyDown(a){const c=a.key;let d;switch(c){case "ArrowUp":case "ArrowDown":case "ArrowLeft":case "ArrowRight":case "PageUp":case "PageDown":case "Home":case "End":d=
"Navigation";break;case "Enter":case "Escape":case "F2":d="Interaction";break;case "Tab":d="Tab";break;case " ":d="Space"}this._detectInteracting(a);this.hasAttribute("interacting")&&"Interaction"!==d&&(d=void 0);if(d)this[`_on${d}KeyDown`](a,c)}_ensureScrolledToIndex(a){Array.from(this.$.items.children).filter(c=>c.index===a)[0]||this._scrollToIndex(a)}_onNavigationKeyDown(a,c){this._scrollHandler();a.preventDefault();var d=this._lastVisibleIndex-this._firstVisibleIndex-1,e=0,f=0;switch(c){case "ArrowRight":e=
this.__isRTL?-1:1;break;case "ArrowLeft":e=this.__isRTL?1:-1;break;case "Home":e=-Infinity;a.ctrlKey&&(f=-Infinity);break;case "End":e=Infinity;a.ctrlKey&&(f=Infinity);break;case "ArrowDown":f=1;break;case "ArrowUp":f=-1;break;case "PageDown":f=d;break;case "PageUp":f=-d}a=a.composedPath()[0];var g=Array.prototype.indexOf.call(a.parentNode.children,a);c=this._elementMatches(a,'[part~\x3d"details-cell"]');var h=a.parentNode;a=h.parentNode;var k=(a===this.$.items?this._effectiveSize:a.children.length)-
1,l=a===this.$.items?void 0!==this._focusedItemIndex?this._focusedItemIndex:h.index:Array.prototype.indexOf.call(h.parentNode.children,h);let m=Math.max(0,Math.min(l+f,k));d=!1;a===this.$.items&&(d=h._item,h=this._cache.getItemForIndex(m),d=c?0===f:1===f&&this._isDetailsOpened(d)||-1===f&&m!==l&&this._isDetailsOpened(h),d!==c&&(1===f&&d||-1===f&&!d)&&(m=l));if(a!==this.$.items)if(m>l)for(;m<k&&a.children[m].hidden;)m++;else if(m<l)for(;0<m&&a.children[m].hidden;)m--;void 0===this._focusedColumnOrder&&
(this._focusedColumnOrder=c?0:this._getColumns(a,l).filter(n=>!n.hidden)[g]._order);g=this._getColumns(a,m).filter(n=>!n.hidden);k=g.map(n=>n._order).sort((n,p)=>n-p);h=k.length-1;l=k.indexOf(k.slice(0).sort((n,p)=>Math.abs(n-this._focusedColumnOrder)-Math.abs(p-this._focusedColumnOrder))[0]);e=0===f&&c?l:Math.max(0,Math.min(l+e,h));e!==l&&(this._focusedColumnOrder=void 0);a===this.$.items&&this._ensureScrolledToIndex(m);this._toggleAttribute("navigating",!0,this);e=g.reduce((n,p,r)=>(n[p._order]=
r,n),{})[k[e]];if(f=a===this.$.items?Array.from(a.children).filter(n=>n.index===m)[0]:a.children[m])e=d?Array.from(f.children).filter(n=>this._elementMatches(n,'[part~\x3d"details-cell"]'))[0]:f.children[e],this._scrollHorizontallyToCell(e),a===this.$.items&&(this._focusedItemIndex=m),a===this.$.items&&(f=e.getBoundingClientRect(),a=this.$.footer.getBoundingClientRect().top,c=this.$.header.getBoundingClientRect().bottom,f.bottom>a?(this.$.table.scrollTop+=f.bottom-a,this._scrollHandler()):f.top<c&&
(this.$.table.scrollTop-=c-f.top,this._scrollHandler())),e.focus()}_parseEventPath(a){const c=a.indexOf(this.$.table);return{rowGroup:a[c-1],row:a[c-2],cell:a[c-3]}}_onInteractionKeyDown(a,c){var d=a.composedPath()[0];d="input"===d.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(d.type);switch(c){case "Enter":var e=this.hasAttribute("interacting")?!d:!0;break;case "Escape":e=!1;break;case "F2":e=!this.hasAttribute("interacting")}({cell:c}=this._parseEventPath(a.composedPath()));
if(this.hasAttribute("interacting")!==e)if(e){if(e=c._content.querySelector("[focus-target]")||c._content.firstElementChild)a.preventDefault(),e.focus(),this._toggleAttribute("interacting",!0,this),this._toggleAttribute("navigating",!1,this)}else a.preventDefault(),this._focusedColumnOrder=void 0,c.focus(),this._toggleAttribute("interacting",!1,this),this._toggleAttribute("navigating",!0,this)}_predictFocusStepTarget(a,c){const d=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,
this.$.focusexit];a=d.indexOf(a);for(a+=c;0<=a&&a<=d.length-1&&(!d[a]||d[a].parentNode.hidden);)a+=c;return d[a]}_onTabKeyDown(a){var c=this._predictFocusStepTarget(a.composedPath()[0],a.shiftKey?-1:1);if(c===this.$.table)this.$.table.focus();else if(c===this.$.focusexit)this.$.focusexit.focus();else if(c===this._itemsFocusable){var d=this._itemsFocusable.parentNode;this._ensureScrolledToIndex(this._focusedItemIndex);if(d.index!==this._focusedItemIndex){d=Array.from(d.children).indexOf(this._itemsFocusable);
const e=Array.from(this.$.items.children).filter(f=>f.index===this._focusedItemIndex)[0];e&&(c=e.children[d])}a.preventDefault();c.focus()}else a.preventDefault(),c.focus();this._toggleAttribute("navigating",!0,this)}_onSpaceKeyDown(a){a.preventDefault();a=a.composedPath()[0];a._content&&a._content.firstElementChild||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(a.parentElement)}}))}_onKeyUp(a){if(/^( |SpaceBar)$/.test(a.key)&&(a.preventDefault(),a=a.composedPath()[0],
a._content&&a._content.firstElementChild)){const c=this.hasAttribute("navigating");a._content.firstElementChild.click();this._toggleAttribute("navigating",c,this)}}_onFocusIn(a){this._isMousedown||this._toggleAttribute("navigating",!0,this);const c=a.composedPath()[0];c===this.$.table||c===this.$.focusexit?(this._predictFocusStepTarget(c,c===this.$.table?1:-1).focus(),this._toggleAttribute("interacting",!1,this)):this._detectInteracting(a)}_onFocusOut(a){this._toggleAttribute("navigating",!1,this);
this._detectInteracting(a)}_onCellFocusIn(a){this._detectInteracting(a);if(3===a.composedPath().indexOf(this.$.table)){const c=a.composedPath()[0];this._activeRowGroup=c.parentNode.parentNode;this._activeRowGroup===this.$.header?this._headerFocusable=c:this._activeRowGroup===this.$.items?this._itemsFocusable=c:this._activeRowGroup===this.$.footer&&(this._footerFocusable=c);c._content.dispatchEvent(new CustomEvent("cell-focusin",{bubbles:!1}))}this._detectFocusedItemIndex(a)}_onCellFocusOut(a){3===
a.composedPath().indexOf(this.$.table)&&a.composedPath()[0]._content.dispatchEvent(new CustomEvent("cell-focusout",{bubbles:!1}))}_detectInteracting(a){this._toggleAttribute("interacting",a.composedPath().some(c=>"vaadin-grid-cell-content"===c.localName),this)}_detectFocusedItemIndex(a){const {rowGroup:c,row:d}=this._parseEventPath(a.composedPath());c===this.$.items&&(this._focusedItemIndex=d.index)}_preventScrollerRotatingCellFocus(a,c){a.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&
this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this._toggleAttribute("navigating",!1,this));c===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this._toggleAttribute("navigating",!0,this))}_getColumns(a,c){let d=this._columnTree.length-1;a===this.$.header?d=c:a===this.$.footer&&(d=this._columnTree.length-1-c);return this._columnTree[d]}_resetKeyboardNavigation(){this.$.header.firstElementChild&&(this._headerFocusable=Array.from(this.$.header.firstElementChild.children).filter(a=>
!a.hidden)[0]);if(this.$.items.firstElementChild){const a=this._iterateItems((c,d)=>{if(this._firstVisibleIndex===d)return this.$.items.children[c]});a&&(this._itemsFocusable=Array.from(a.children).filter(c=>!c.hidden)[0])}this.$.footer.firstElementChild&&(this._footerFocusable=Array.from(this.$.footer.firstElementChild.children).filter(a=>!a.hidden)[0])}_scrollHorizontallyToCell(a){if(!a.hasAttribute("frozen")&&!this._elementMatches(a,'[part~\x3d"details-cell"]')){var c=a.getBoundingClientRect(),
d=a.parentNode,e=Array.from(d.children).indexOf(a),f=this.$.table.getBoundingClientRect();a=f.left;f=f.right;for(var g=e-1;0<=g;g--){const h=d.children[g];if(!h.hasAttribute("hidden")&&!this._elementMatches(h,'[part~\x3d"details-cell"]')&&h.hasAttribute("frozen")){a=h.getBoundingClientRect().right;break}}for(e+=1;e<d.children.length;e++)if(g=d.children[e],!g.hasAttribute("hidden")&&!this._elementMatches(g,'[part~\x3d"details-cell"]')&&g.hasAttribute("frozen")){f=g.getBoundingClientRect().left;break}c.left<
a&&(this.$.table.scrollLeft+=Math.round(c.left-a));c.right>f&&(this.$.table.scrollLeft+=Math.round(c.right-f))}}_elementMatches(a,c){return a.matches?a.matches(c):-1!==Array.from(a.parentNode.querySelectorAll(c)).indexOf(a)}},ng=b=>class extends Ga(b){static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1E7}}}static get observers(){return["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready();Ab(this,"track",this._onTrackEvent);
this._reorderGhost=this.shadowRoot.querySelector('[part\x3d"reorder-ghost"]');this.addEventListener("touchstart",this._onTouchStart.bind(this));this.addEventListener("touchmove",this._onTouchMove.bind(this));this.addEventListener("touchend",this._onTouchEnd.bind(this));this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(a){this.hasAttribute("reordering")&&a.preventDefault()}_onTouchStart(a){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:a.touches[0].clientX,
y:a.touches[0].clientY}})},100)}_onTouchMove(a){this._draggedColumn&&a.preventDefault();clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout);this._onTrackEnd()}_onTrackEvent(a){if("start"===a.detail.state){var c=a.composedPath();(c=c[c.indexOf(this.$.header)-2])&&c._content&&!c._content.contains(this.getRootNode().activeElement)&&!this.$.scroller.hasAttribute("column-resizing")&&(this._touchDevice||this._onTrackStart(a))}else"track"===a.detail.state?
this._onTrack(a):"end"===a.detail.state&&this._onTrackEnd(a)}_onTrackStart(a){if(this.columnReorderingAllowed){var c=a.composedPath&&a.composedPath();if((!c||!c.filter(d=>d.hasAttribute&&d.hasAttribute("draggable"))[0])&&(c=this._cellFromPoint(a.detail.x,a.detail.y))&&-1!==c.getAttribute("part").indexOf("header-cell")){this._toggleAttribute("reordering",!0,this);for(this._draggedColumn=c._column;1===this._draggedColumn.parentElement.childElementCount;)this._draggedColumn=this._draggedColumn.parentElement;
this._setSiblingsReorderStatus(this._draggedColumn,"allowed");this._draggedColumn._reorderStatus="dragging";this._updateGhost(c);this._reorderGhost.style.visibility="visible";this._updateGhostPosition(a.detail.x,this._touchDevice?a.detail.y-50:a.detail.y);this._autoScroller()}}}_onTrack(a){if(this._draggedColumn){var c=this._cellFromPoint(a.detail.x,a.detail.y);c&&(c=this._getTargetColumn(c,this._draggedColumn),this._isSwapAllowed(this._draggedColumn,c)&&this._isSwappableByPosition(c,a.detail.x)&&
this._swapColumnOrders(this._draggedColumn,c),this._updateGhostPosition(a.detail.x,this._touchDevice?a.detail.y-50:a.detail.y),this._lastDragClientX=a.detail.x)}}_onTrackEnd(){this._draggedColumn&&(this._toggleAttribute("reordering",!1,this),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._lastDragClientX=this._draggedColumn=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(){return this._columnTree.slice(0).pop().filter(a=>
!a.hidden).sort((a,c)=>a._order-c._order)}_cellFromPoint(a,c){a=a||0;c=c||0;this._draggedColumn||this._toggleAttribute("no-content-pointer-events",!0,this.$.scroller);a=this.shadowRoot.elementFromPoint(a,c);this._toggleAttribute("no-content-pointer-events",!1,this.$.scroller);if(a&&a._column)return a}_updateGhostPosition(a,c){const d=this._reorderGhost.getBoundingClientRect();a-=d.width/2;c-=d.height/2;const e=parseInt(this._reorderGhost._left||0),f=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=
e-(d.left-a);this._reorderGhost._top=f-(d.top-c);this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(a){const c=this._reorderGhost;c.textContent=a._content.innerText;const d=window.getComputedStyle(a);"boxSizing display width height background alignItems padding border flex-direction overflow".split(" ").forEach(e=>c.style[e]=d[e]);return c}_updateOrders(a,c){void 0!==a&&void 0!==c&&(a[0].forEach(d=>d._order=0),a[0].forEach((d,e)=>
d._order=(e+1)*this._orderBaseScope))}_setSiblingsReorderStatus(a,c){Array.from(a.parentNode.children).filter(d=>/column/.test(d.localName)&&this._isSwapAllowed(d,a)).forEach(d=>d._reorderStatus=c)}_autoScroller(){if(this._lastDragClientX){const a=this._lastDragClientX-this.getBoundingClientRect().right+50,c=this.getBoundingClientRect().left-this._lastDragClientX+50;0<a?this.$.table.scrollLeft+=a/10:0<c&&(this.$.table.scrollLeft-=c/10);this._scrollHandler()}this._draggedColumn&&this.async(this._autoScroller,
10)}_isSwapAllowed(a,c){if(a&&c){const d=a.parentElement===c.parentElement,e=a.frozen===c.frozen;return a!==c&&d&&e}}_isSwappableByPosition(a,c){var d=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~\x3d"cell"]')).filter(f=>a.contains(f._column))[0];const e=this.$.header.querySelector("tr:not([hidden]) [reorder-status\x3ddragging]").getBoundingClientRect();d=d.getBoundingClientRect();return d.left>e.left?c>d.right-e.width:c<d.left+e.width}_swapColumnOrders(a,c){const d=a._order;
a._order=c._order;c._order=d;this._updateLastFrozen();this._updateFirstAndLastColumn()}_getTargetColumn(a,c){if(a&&c){let d=a._column;for(;d.parentElement!==c.parentElement&&d!==this;)d=d.parentElement;return d.parentElement===c.parentElement?d:a._column}}},Td=b=>class extends b{static get properties(){return{resizable:{type:Boolean,value:function(){if("vaadin-grid-column-group"!==this.localName){var a=this.parentNode;return a&&"vaadin-grid-column-group"===a.localName?a.resizable||!1:!1}}},_headerTemplate:{type:Object},
_footerTemplate:{type:Object},frozen:{type:Boolean,value:!1},hidden:{type:Boolean},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,headerRenderer:Function,footerRenderer:Function}}static get observers(){return"_widthChanged(width, _headerCell, _footerCell, _cells.*);_frozenChanged(frozen, _headerCell, _footerCell, _cells.*);_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*);_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate);_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell);_orderChanged(_order, _headerCell, _footerCell, _cells.*);_lastFrozenChanged(_lastFrozen);_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*);_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell);_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell);_resizableChanged(resizable, _headerCell);_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*);_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)".split(";")}connectedCallback(){super.connectedCallback();
this._bodyTemplate&&(this._bodyTemplate.templatizer._grid=this._grid);this._headerTemplate&&(this._headerTemplate.templatizer._grid=this._grid);this._footerTemplate&&(this._footerTemplate.templatizer._grid=this._grid);this._templateObserver.flush();this._bodyTemplate||this._templateObserver.callback();requestAnimationFrame(()=>{this._allCells.forEach(a=>{a._content.parentNode||this._grid&&this._grid.appendChild(a._content)})})}disconnectedCallback(){super.disconnectedCallback();requestAnimationFrame(()=>
{this._findHostGrid()||this._allCells.forEach(a=>{a._content.parentNode&&a._content.parentNode.removeChild(a._content)})});this._gridValue=void 0}_findHostGrid(){let a=this;for(;a&&!/^vaadin.*grid(-pro)?$/.test(a.localName);)a=a.assignedSlot?a.assignedSlot.parentNode:a.parentNode;return a||void 0}get _grid(){this._gridValue||(this._gridValue=this._findHostGrid());return this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(a=>
a)}constructor(){super();this._templateObserver=new N(this,()=>{this._headerTemplate=this._prepareHeaderTemplate();this._footerTemplate=this._prepareFooterTemplate();this._bodyTemplate=this._prepareBodyTemplate()})}_prepareHeaderTemplate(){return this._prepareTemplatizer(this._findTemplate(!0)||null,{})}_prepareFooterTemplate(){return this._prepareTemplatizer(this._findTemplate(!1,!0)||null,{})}_prepareBodyTemplate(){return this._prepareTemplatizer(this._findTemplate()||null)}_prepareTemplatizer(a,
c){if(a&&!a.templatizer){const d=new eb;d._grid=this._grid;d.dataHost=this.dataHost;d._instanceProps=c||d._instanceProps;d.template=a;a.templatizer=d}return a}_renderHeaderAndFooter(){this.headerRenderer&&this._headerCell&&this.__runRenderer(this.headerRenderer,this._headerCell);this.footerRenderer&&this._footerCell&&this.__runRenderer(this.footerRenderer,this._footerCell)}__runRenderer(a,c,d){c=[c._content,this];d&&d.item&&c.push(d);a.apply(this,c)}__setColumnTemplateOrRenderer(a,c,d){if(!this.hidden){if(a&&
c)throw Error("You should only use either a renderer or a template");d.forEach(e=>{const f=this._grid.__getRowModel(e.parentElement);if(c)e._renderer=c,(f.item||c===this.headerRenderer||c===this.footerRenderer)&&this.__runRenderer(c,e,f);else if(e._template!==a){e._template=a;e._content.innerHTML="";a.templatizer._grid=a.templatizer._grid||this._grid;const g=a.templatizer.createInstance();e._content.appendChild(g.root);e._instance=g;f.item&&e._instance.setProperties(f)}})}}_setBodyTemplateOrRenderer(a,
c,d){(a||c)&&d&&this.__setColumnTemplateOrRenderer(a,c,d)}_setHeaderTemplateOrRenderer(a,c,d){(a||c)&&d&&this.__setColumnTemplateOrRenderer(a,c,[d])}_setFooterTemplateOrRenderer(a,c,d){(a||c)&&d&&(this.__setColumnTemplateOrRenderer(a,c,[d]),this._grid.__updateHeaderFooterRowVisibility(d.parentElement))}_selectFirstTemplate(a=!1,c=!1){return N.getFlattenedNodes(this).filter(d=>"template"===d.localName&&d.classList.contains("header")===a&&d.classList.contains("footer")===c)[0]}_findTemplate(a,c){(a=
this._selectFirstTemplate(a,c))&&this.dataHost&&(a._rootDataHost=this.dataHost._rootDataHost||this.dataHost);return a}_flexGrowChanged(a){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow");this._allCells.forEach(c=>c.style.flexGrow=a)}_orderChanged(a){this._allCells.forEach(c=>c.style.order=a)}_widthChanged(a){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width");this._allCells.forEach(c=>
c.style.width=a);this._grid&&this._grid.__forceReflow&&this._grid.__forceReflow()}_frozenChanged(a){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",a);this._allCells.forEach(c=>this._toggleAttribute("frozen",a,c));this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(a){this._allCells.forEach(c=>this._toggleAttribute("last-frozen",a,c));this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=
a)}_pathOrHeaderChanged(a,c,d,e,f,g,h,k,l){e=void 0!==c;!h&&!l&&e&&d&&this.__setTextContent(d._content,c);a&&f.value&&(g||k||this.__setColumnTemplateOrRenderer(void 0,(m,n,{item:p})=>this.__setTextContent(m,this.get(a,p)),f.value),h||l||e||!d||null===c||this.__setTextContent(d._content,this._generateHeader(a)));d&&this._grid.__updateHeaderFooterRowVisibility(d.parentElement)}__setTextContent(a,c){a.textContent!==c&&(a.textContent=c)}_generateHeader(a){return a.substr(a.lastIndexOf(".")+1).replace(/([A-Z])/g,
"-$1").toLowerCase().replace(/-/g," ").replace(/^./,c=>c.toUpperCase())}_toggleAttribute(a,c,d){d.hasAttribute(a)===!c&&(c?d.setAttribute(a,""):d.removeAttribute(a))}_reorderStatusChanged(a){this._allCells.forEach(c=>c.setAttribute("reorder-status",a))}_resizableChanged(a,c){void 0!==a&&void 0!==c&&c&&[c].concat(this._emptyCells).forEach(d=>{if(d){var e=d.querySelector('[part~\x3d"resize-handle"]');e&&d.removeChild(e);a&&(e=document.createElement("div"),e.setAttribute("part","resize-handle"),d.appendChild(e))}})}_textAlignChanged(a){if(void 0!==
a)if(-1===["start","end","center"].indexOf(a))console.warn('textAlign can only be set as "start", "end" or "center"');else{var c;"ltr"===getComputedStyle(this._grid).direction?"start"===a?c="left":"end"===a&&(c="right"):"start"===a?c="right":"end"===a&&(c="left");this._allCells.forEach(d=>{d._content.style.textAlign=a;getComputedStyle(d._content).textAlign!==a&&(d._content.style.textAlign=c)})}}_hiddenChanged(a){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",
a);!!a!==!!this._previousHidden&&this._grid&&(!0===a&&this._allCells.forEach(c=>{c._content.parentNode&&c._content.parentNode.removeChild(c._content)}),this._grid._debouncerHiddenChanged=w.debounce(this._grid._debouncerHiddenChanged,L,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._updateLastFrozen&&this._grid._updateLastFrozen(),this._grid.notifyResize&&this._grid.notifyResize(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation());
this._previousHidden=a}};class fb extends Td(Xb(M)){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,path:{type:String},autoWidth:{type:Boolean,value:!1},_bodyTemplate:{type:Object},_cells:Array}}}customElements.define(fb.is,fb);Da("vaadin-grid",Ca`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([height-by-rows]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([height-by-rows]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 1em;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }
  `,{moduleId:"vaadin-grid-styles"});try{document.createEvent("TouchEvent");var Ud=!0}catch(b){Ud=!1}const og=Ud;class Vd extends Dd(Ub(cg(ag(dg($f(hg(ig(jg(gg(mg(Yf(fg(ng(bg(eg(lg(kg(Xf)))))))))))))))))){static get template(){return Fa`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}static get version(){return"6.0.2"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)"]}static get properties(){return{_safari:{type:Boolean,value:/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},_ios:{type:Boolean,value:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints},_firefox:{type:Boolean,value:-1<navigator.userAgent.toLowerCase().indexOf("firefox")},
_android:{type:Boolean,value:/android/i.test(navigator.userAgent)},_touchDevice:{type:Boolean,value:og},heightByRows:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_heightByRowsChanged"},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0}}}constructor(){super();this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback();this.recalculateColumnWidths()}attributeChangedCallback(b,a,c){super.attributeChangedCallback(b,a,c);"dir"===b&&
(this.__isRTL="rtl"===c,this._updateScrollerMeasurements())}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(b=>b.clientHeight).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}_recalculateColumnWidths(b){b.forEach(a=>{a.width="auto";a._origFlexGrow=a.flexGrow;a.flexGrow=0});b.forEach(a=>{a._currentWidth=
0;a._allCells.forEach(c=>{a._currentWidth=Math.max(a._currentWidth,c.offsetWidth+1)})});b.forEach(a=>{a.width=`${a._currentWidth}px`;a.flexGrow=a._origFlexGrow;a._currentWidth=void 0;a._origFlexGrow=void 0})}recalculateColumnWidths(){if(this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{const b=this._getColumns().filter(a=>!a.hidden&&a.autoWidth);this._recalculateColumnWidths(b)}}_createScrollerRows(b){const a=[];for(let c=0;c<b;c++){const d=document.createElement("tr");
d.setAttribute("part","row");d.setAttribute("role","row");this._columnTree&&this._updateRow(d,this._columnTree[this._columnTree.length-1],"body",!1,!0);a.push(d)}this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(c=>c.isConnected&&c.notifyPath&&c.notifyPath("_cells.*",c._cells));Ke(this,()=>{this._updateFirstAndLastColumn();this._resetKeyboardNavigation()});return a}_getRowTarget(){return this.$.items}_createCell(b){const a="vaadin-grid-cell-content-"+(this._contentIndex=this._contentIndex+
1||0),c=document.createElement("vaadin-grid-cell-content");c.setAttribute("slot",a);const d=document.createElement(b);d.id=a.replace("-content-","-");d.setAttribute("tabindex","-1");d.setAttribute("role","td"===b?"gridcell":"columnheader");b=document.createElement("slot");b.setAttribute("name",a);d.appendChild(b);d._content=c;c.addEventListener("mousedown",()=>{if(window.chrome){const e=()=>{c.contains(this.getRootNode().activeElement)||d.focus();document.removeEventListener("mouseup",e,!0)};document.addEventListener("mouseup",
e,!0)}else setTimeout(()=>{c.contains(this.getRootNode().activeElement)||d.focus()})});return d}_updateRow(b,a,c,d,e){c=c||"body";const f=document.createDocumentFragment();Array.from(b.children).forEach(g=>g._vacant=!0);b.innerHTML="";"sizer"!==b.id&&(b.hidden=!0);a.filter(g=>!g.hidden).forEach((g,h,k)=>{if("body"===c){g._cells=g._cells||[];var l=g._cells.filter(m=>m._vacant)[0];l||(l=this._createCell("td"),g._cells.push(l));l.setAttribute("part","cell body-cell");b.appendChild(l);h===k.length-1&&
(this._rowDetailsTemplate||this.rowDetailsRenderer)&&(this._detailsCells=this._detailsCells||[],h=this._detailsCells.filter(m=>m._vacant)[0]||this._createCell("td"),-1===this._detailsCells.indexOf(h)&&this._detailsCells.push(h),h._content.parentElement||f.appendChild(h._content),this._configureDetailsCell(h),b.appendChild(h),this._a11ySetRowDetailsCell(b,h),h._vacant=!1);g.notifyPath&&!e&&g.notifyPath("_cells.*",g._cells)}else l="header"===c?"th":"td",d||"vaadin-grid-column-group"===g.localName?(l=
g[`_${c}Cell`]||this._createCell(l),l._column=g,b.appendChild(l),g[`_${c}Cell`]=l):(g._emptyCells=g._emptyCells||[],l=g._emptyCells.filter(m=>m._vacant)[0]||this._createCell(l),l._column=g,b.appendChild(l),-1===g._emptyCells.indexOf(l)&&g._emptyCells.push(l)),l.setAttribute("part",`cell ${c}-cell`),this.__updateHeaderFooterRowVisibility(b);l._content.parentElement||f.appendChild(l._content);l._vacant=!1;l._column=g});this.appendChild(f);this._frozenCellsChanged();this._updateFirstAndLastColumnForRow(b)}__updateHeaderFooterRowVisibility(b){if(b){var a=
Array.from(b.children).filter(c=>{const d=c._column;if(d._emptyCells&&-1<d._emptyCells.indexOf(c))return!1;if(b.parentElement===this.$.header){if(d.headerRenderer||d._headerTemplate)return!0;if(null===d.header)return!1;if(d.path||void 0!==d.header)return!0}else if(d.footerRenderer||d._footerTemplate)return!0});b.hidden!==!a.length&&(b.hidden=!a.length,this.notifyResize())}}_updateScrollerItem(b,a){this._preventScrollerRotatingCellFocus(b,a);this._columnTree&&(this._toggleAttribute("first",0===a,b),
this._toggleAttribute("odd",a%2,b),this._a11yUpdateRowRowindex(b,a),this._getItem(a,b))}_columnTreeChanged(b){this._renderColumnTree(b);this.recalculateColumnWidths()}_renderColumnTree(b){for(Array.from(this.$.items.children).forEach(c=>this._updateRow(c,b[b.length-1],null,!1,!0));this.$.header.children.length<b.length;){var a=document.createElement("tr");a.setAttribute("part","row");a.setAttribute("role","row");this.$.header.appendChild(a);a=document.createElement("tr");a.setAttribute("part","row");
a.setAttribute("role","row");this.$.footer.appendChild(a)}for(;this.$.header.children.length>b.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach((c,d)=>this._updateRow(c,b[d],"header",d===b.length-1));Array.from(this.$.footer.children).forEach((c,d)=>this._updateRow(c,b[b.length-1-d],"footer",0===d));this._updateRow(this.$.sizer,b[b.length-1]);this._resizeHandler();this._frozenCellsChanged();
this._updateFirstAndLastColumn();this._resetKeyboardNavigation();this._a11yUpdateHeaderRows();this._a11yUpdateFooterRows();this.__updateFooterPositioning()}__updateFooterPositioning(){this._firefox&&(this.$.items.style.paddingBottom=0,this.heightByRows||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`));this._ios&&!window.CSS.supports("position","sticky")&&(this.$.table.style.height="",this.$.table.style.minHeight="100%",this.$.table.style.maxHeight="100%",setTimeout(()=>this.$.table.style.height=
`${this.$.scroller.offsetHeight}px`))}_updateItem(b,a){b._item=a;const c=this.__getRowModel(b);this._toggleAttribute("selected",c.selected,b);this._a11yUpdateRowSelected(b,c.selected);this._a11yUpdateRowLevel(b,c.level);this._toggleAttribute("expanded",c.expanded,b);this._toggleAttribute("details-opened",this._isDetailsOpened(a),b);(this._rowDetailsTemplate||this.rowDetailsRenderer)&&this._toggleDetailsCell(b,a);this._generateCellClassNames(b,c);this._filterDragAndDrop(b,c);Array.from(b.children).forEach(d=>
{if(d._renderer){const e=d._column||this;d._renderer.call(e,d._content,e,c)}else d._instance&&(d._instance.__detailsOpened__=c.detailsOpened,d._instance.__selected__=c.selected,d._instance.__level__=c.level,d._instance.__expanded__=c.expanded,d._instance.setProperties(c))});this._debouncerUpdateHeights=w.debounce(this._debouncerUpdateHeights,H.after(1),()=>{this._updateMetrics();this._positionItems();this._updateScrollerSize()})}_resizeHandler(){this._updateDetailsCellHeights();this._accessIronListAPI(super._resizeHandler,
!0);this._updateScrollerMeasurements();this.__updateFooterPositioning()}_onAnimationEnd(b){0===b.animationName.indexOf("vaadin-grid-appear")&&(this._render(),b.stopPropagation(),this.notifyResize(),this.__itemsReceived(),requestAnimationFrame(()=>{this.__scrollToPendingIndex();this.$.table.style.webkitOverflowScrolling="touch"}))}_toggleAttribute(b,a,c){c.hasAttribute(b)===!a&&(a?c.setAttribute(b,""):c.removeAttribute(b))}__getRowModel(b){return{index:b.index,item:b._item,level:this._getIndexLevel(b.index),
expanded:this._isExpanded(b._item),selected:this._isSelected(b._item),detailsOpened:!(!this._rowDetailsTemplate&&!this.rowDetailsRenderer)&&this._isDetailsOpened(b._item)}}render(){this._columnTree&&(this._columnTree.forEach(b=>{b.forEach(a=>a._renderHeaderAndFooter())}),this._update())}notifyResize(){super.notifyResize()}_heightByRowsChanged(b,a){(b||a)&&this.notifyResize()}__forceReflow(){this._debouncerForceReflow=w.debounce(this._debouncerForceReflow,L,()=>{this.$.scroller.style.overflow="hidden";
setTimeout(()=>this.$.scroller.style.overflow="")})}}customElements.define(Vd.is,Vd);class Wd extends Td(M){static get is(){return"vaadin-grid-column-group"}static get properties(){return{_childColumns:{value:function(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return"_updateVisibleChildColumns(_childColumns);_childColumnsChanged(_childColumns);_groupFrozenChanged(frozen, _rootColumns);_groupHiddenChanged(hidden, _rootColumns);_visibleChildColumnsChanged(_visibleChildColumns);_colSpanChanged(_colSpan, _headerCell, _footerCell);_groupOrderChanged(_order, _rootColumns);_groupReorderStatusChanged(_reorderStatus, _rootColumns);_groupResizableChanged(resizable, _rootColumns)".split(";")}connectedCallback(){super.connectedCallback();
this._addNodeObserver();this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback();this._observer&&this._observer.disconnect()}_columnPropChanged(b,a){"hidden"===b&&(this._preventHiddenCascade=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenCascade=!1);/flexGrow|width|hidden|_childColumns/.test(b)&&this._updateFlexAndWidth();"frozen"===b&&(this.frozen=this.frozen||a);"lastFrozen"===b&&(this._lastFrozen=this._lastFrozen||a)}_groupOrderChanged(b,a){if(a){const e=
a.slice(0);if(b){var c=/(0+)$/.exec(b).pop().length,d=Math.pow(10,c-(~~(Math.log(a.length)/Math.log(Math.LN10))+1));e[0]&&e[0]._order&&e.sort((f,g)=>f._order-g._order);e.forEach((f,g)=>f._order=b+(g+1)*d)}else e.forEach(f=>f._order=0)}}_groupReorderStatusChanged(b,a){void 0!==b&&void 0!==a&&a.forEach(c=>c._reorderStatus=b)}_groupResizableChanged(b,a){void 0!==b&&void 0!==a&&a.forEach(c=>c.resizable=b)}_updateVisibleChildColumns(b){this._visibleChildColumns=Array.prototype.filter.call(b,a=>!a.hidden)}_childColumnsChanged(b){!this._autoHidden&&
this.hidden&&(Array.prototype.forEach.call(b,a=>a.hidden=!0),this._updateVisibleChildColumns(b))}_updateFlexAndWidth(){this._visibleChildColumns&&(this._visibleChildColumns.length?this._setWidth("calc("+Array.prototype.reduce.call(this._visibleChildColumns,(b,a)=>b+=" + "+(a.width||"0px").replace("calc",""),"").substring(3)+")"):this._setWidth("0px"),this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(b,a)=>b+a.flexGrow,0)))}_groupFrozenChanged(b,a){void 0!==a&&void 0!==b&&!1!==
b&&Array.from(a).forEach(c=>c.frozen=b)}_groupHiddenChanged(b,a){a&&!this._preventHiddenCascade&&(this._ignoreVisibleChildColumns=!0,a.forEach(c=>c.hidden=b),this._ignoreVisibleChildColumns=!1);this._columnPropChanged("hidden")}_visibleChildColumnsChanged(b){this._colSpan=b.length;this._ignoreVisibleChildColumns||(0===b.length?this._autoHidden=this.hidden=!0:this.hidden&&this._autoHidden&&(this._autoHidden=this.hidden=!1))}_colSpanChanged(b,a,c){a&&(a.setAttribute("colspan",b),this._grid&&this._grid._a11yUpdateCellColspan(a,
b));c&&(c.setAttribute("colspan",b),this._grid&&this._grid._a11yUpdateCellColspan(c,b))}_getChildColumns(b){return N.getFlattenedNodes(b).filter(this._isColumnElement)}_addNodeObserver(){this._observer=new N(this,b=>{if(0<b.addedNodes.filter(this._isColumnElement).length||0<b.removedNodes.filter(this._isColumnElement).length)this._preventHiddenCascade=!0,this._childColumns=this._rootColumns=this._getChildColumns(this),this._preventHiddenCascade=!1,F.run(()=>{this._grid&&this._grid._updateColumnTree&&
this._grid._updateColumnTree()})});this._observer.flush()}_isColumnElement(b){return b.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(b.localName)}}customElements.define(Wd.is,Wd);class Xd extends fb{static get template(){return Fa`
      <template class="header" id="defaultHeaderTemplate">
        <vaadin-checkbox
          class="vaadin-grid-select-all-checkbox"
          aria-label="Select All"
          hidden$="[[_selectAllHidden]]"
          on-checked-changed="_onSelectAllCheckedChanged"
          checked="[[_isChecked(selectAll, _indeterminate)]]"
          indeterminate="[[_indeterminate]]"
        ></vaadin-checkbox>
      </template>
      <template id="defaultBodyTemplate">
        <vaadin-checkbox aria-label="Select Row" checked="{{selected}}"></vaadin-checkbox>
      </template>
    `}static get is(){return"vaadin-grid-selection-column"}static get properties(){return{width:{type:String,value:"58px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},autoSelect:{type:Boolean,value:!1},_indeterminate:Boolean,_previousActiveItem:Object,_selectAllHidden:Boolean}}static get observers(){return["_onSelectAllChanged(selectAll)"]}_pathOrHeaderChanged(b,a,c,d,e,f,g,h,k){!e.value||void 0===b&&void 0===f||(this._bodyTemplate=h=void 0,this.__cleanCellsOfTemplateProperties(e.value));
!c||void 0===a&&void 0===g||(this._headerTemplate=k=void 0,this.__cleanCellsOfTemplateProperties([c]));super._pathOrHeaderChanged(b,a,c,d,e,f,g,h,k)}__cleanCellsOfTemplateProperties(b){b.forEach(a=>{a._content.innerHTML="";delete a._instance;delete a._template})}_prepareHeaderTemplate(){const b=this._prepareTemplatizer(this._findTemplate(!0)||this.$.defaultHeaderTemplate);b.templatizer.dataHost=b===this.$.defaultHeaderTemplate?this:this.dataHost;return b}_prepareBodyTemplate(){const b=this._prepareTemplatizer(this._findTemplate()||
this.$.defaultBodyTemplate);b.templatizer.dataHost=b===this.$.defaultBodyTemplate?this:this.dataHost;return b}constructor(){super();this._boundOnActiveItemChanged=this._onActiveItemChanged.bind(this);this._boundOnDataProviderChanged=this._onDataProviderChanged.bind(this);this._boundOnSelectedItemsChanged=this._onSelectedItemsChanged.bind(this)}disconnectedCallback(){this._grid.removeEventListener("active-item-changed",this._boundOnActiveItemChanged);this._grid.removeEventListener("data-provider-changed",
this._boundOnDataProviderChanged);this._grid.removeEventListener("filter-changed",this._boundOnSelectedItemsChanged);this._grid.removeEventListener("selected-items-changed",this._boundOnSelectedItemsChanged);super.disconnectedCallback()}connectedCallback(){super.connectedCallback();this._grid&&(this._grid.addEventListener("active-item-changed",this._boundOnActiveItemChanged),this._grid.addEventListener("data-provider-changed",this._boundOnDataProviderChanged),this._grid.addEventListener("filter-changed",
this._boundOnSelectedItemsChanged),this._grid.addEventListener("selected-items-changed",this._boundOnSelectedItemsChanged))}_onSelectAllChanged(b){void 0!==b&&this._grid&&!this._selectAllChangeLock&&(this._grid.selectedItems=b&&Array.isArray(this._grid.items)?this._grid._filter(this._grid.items):[])}_arrayContains(b,a){for(var c=0;b&&a&&a[c]&&0<=b.indexOf(a[c]);c++);return c==a.length}_onSelectAllCheckedChanged(b){this.selectAll=this._indeterminate||b.target.checked}_isChecked(b,a){return a||b}_onActiveItemChanged(b){b=
b.detail.value;if(this.autoSelect){const a=b||this._previousActiveItem;a&&this._grid._toggleItem(a)}this._previousActiveItem=b}_onSelectedItemsChanged(){this._selectAllChangeLock=!0;Array.isArray(this._grid.items)&&(this._grid.selectedItems.length?this._arrayContains(this._grid.selectedItems,this._grid._filter(this._grid.items))?(this.selectAll=!0,this._indeterminate=!1):(this.selectAll=!1,this._indeterminate=!0):this._indeterminate=this.selectAll=!1);this._selectAllChangeLock=!1}_onDataProviderChanged(){this._selectAllHidden=
!Array.isArray(this._grid.items)}}customElements.define(Xd.is,Xd);Da("vaadin-grid-sorter",Ca`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    :host(:not([direction])) [part='indicators']::before {
      opacity: 0.2;
    }

    :host([direction]) {
      color: var(--lumo-primary-text-color);
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});const Yd=document.createElement("template");Yd.innerHTML="\n  \x3cstyle\x3e\n    @font-face {\n      font-family: 'vaadin-grid-sorter-icons';\n      src: url(data:application/font-woff;charset\x3dutf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA\x3d\x3d) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  \x3c/style\x3e\n";
document.head.appendChild(Yd.content);class Zd extends Ub(Xb(M)){static get template(){return Fa`
      <style>
        :host {
          display: inline-flex;
          cursor: pointer;
          max-width: 100%;
        }

        [part='content'] {
          flex: 1 1 auto;
        }

        [part='indicators'] {
          position: relative;
          align-self: center;
          flex: none;
        }

        [part='order'] {
          display: inline;
          vertical-align: super;
        }

        [part='indicators']::before {
          font-family: 'vaadin-grid-sorter-icons';
          display: inline-block;
        }

        :host(:not([direction])) [part='indicators']::before {
          content: '\\e901';
        }

        :host([direction='asc']) [part='indicators']::before {
          content: '\\e900';
        }

        :host([direction='desc']) [part='indicators']::before {
          content: '\\e902';
        }
      </style>

      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready();this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback();this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback();
this._isConnected=!1}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(b,a){!1!==a&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){void 0!==this.path&&void 0!==this.direction&&this._isConnected&&this.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))}_getDisplayOrder(b){return null===b?"":b+1}_onClick(b){const a=this.getRootNode().activeElement;this!==a&&this.contains(a)||(b.preventDefault(),this.direction=
"asc"===this.direction?"desc":"desc"===this.direction?null:"asc")}}customElements.define(Zd.is,Zd);class $d extends fb{static get template(){return Fa`
      <template class="header" id="headerTemplate">
        <vaadin-grid-sorter path="[[path]]" direction="{{direction}}">[[_getHeader(header, path)]]</vaadin-grid-sorter>
      </template>
    `}static get is(){return"vaadin-grid-sort-column"}static get properties(){return{path:String,direction:{type:String,notify:!0}}}_prepareHeaderTemplate(){const b=this._prepareTemplatizer(this.$.headerTemplate);b.templatizer.dataHost=this;return b}_getHeader(b,a){return b||this._generateHeader(a)}}customElements.define($d.is,$d);const ae={selectionColumn:!0,columnMenus:!0};let x=function(b){function a(d,e){d=b.call(this,d,e)||this;d._grid=null;d._headerStyles="display: flex; font-weight: 400;";
d._hostStyles='font-family: "Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 1em; background-color: inherit; color: inherit;';d._rowHoverStyles="background-color: var(--lumo-row-background-hover);";d._columnElements=[];d.cellClassNameGenerator=null;d.columns=null;d.columnReorderingEnabled=null;d.dataProvider=null;d.itemIdPath=null;d.label=void 0;d.messages=null;d.multiSortEnabled=null;d.pageSize=null;d.rowDetailsRenderer=null;d.selectedItems=new be;d.size=null;d.store=null;
d.viewModel=new ge;d.visibleElements={...ae};return d}gb._inheritsLoose(a,b);var c=a.prototype;c.initialize=function(){this.handles.add([this.columns.on("change",()=>this._syncColumnRenderers()),ib.watch(()=>{var d;return null==(d=this.viewModel)?void 0:d.size},()=>this._updateGridSize()),ib.watch(()=>{var d;return null==(d=this.store)?void 0:d.state},(d,e)=>{"ready"!==d||"loaded"!==e&&"error"!==e||this.refreshPageCache()}),ib.on(()=>{var d,e;return null==(d=this._grid)?void 0:null==(e=d.$)?void 0:
e.table},"scroll",()=>{var d;return null==(d=this.viewModel)?void 0:d.closeColumnMenus()})])};c.destroy=function(){var d;this.handles.removeAll();this.resetColumns();null==(d=this.columns)?void 0:d.destroy()};c.resetColumns=function(){this.columns.items.forEach(d=>d.destroy());this.columns.removeAll()};c.castVisibleElements=function(d){return{...ae,...d}};c.render=function(){const {columnMenus:d}=this.visibleElements;return Z.tsx("div",{bind:this,class:this.classes("esri-grid","esri-widget",{["esri-grid--no-column-menu"]:!d})},
Z.tsx("div",{bind:this,class:"esri-grid__content"},this.renderGrid()))};c.renderGrid=function(){return Z.tsx("vaadin-grid",{...this.getGridProps()},this.renderAllColumns())};c.renderAllColumns=function(){if("disabled"!==this.viewModel.state&&this.columns&&this.columns.length)return[this.renderSelectionColumn(),this.renderColumns()]};c.renderSelectionColumn=function(){return Z.tsx("vaadin-grid-selection-column",{_selectAllHidden:!0,selectAll:!1,bind:this,hidden:!this.visibleElements.selectionColumn,
sortable:!1,frozen:!he.isRTL(this.container)})};c.renderColumns=function(){return this.columns.items.map((d,e)=>"columns"in d?this.renderGroupColumn(d,e):Z.tsx("vaadin-grid-column",{...this.getColumnProps(d,e)}))};c.renderGroupColumn=function(d,e){var f;const g=this.getColumnProps(d,e);if(!g.hidden)return Z.tsx("vaadin-grid-column-group",{...g},null==(f=d.columns)?void 0:f.map(h=>Z.tsx("vaadin-grid-column",{...this.getColumnProps(h,e)})))};c.getGridProps=function(){const {columnReorderingEnabled:d,
id:e,multiSortEnabled:f,pageSize:g,size:h}=this;return{_safari:!1,class:"esri-grid__grid",id:`${e}_grid`,theme:"compact column-borders",ref:"grid",bind:this,afterCreate:this._afterGridCreate,afterUpdate:this._afterGridUpdate,columnReorderingAllowed:d,pageSize:g,size:h,multiSort:f}};c.getColumnProps=function(d,e){const {id:f}=this,{autoWidth:g,direction:h,flexGrow:k,frozen:l,header:m,hidden:n,path:p,resizable:r,textAlign:v,width:A}=d;d=`${f}_${m}_${bc.isSome(e)?e:p}`;return{autoWidth:g,direction:h,
flexGrow:k,frozen:l,header:m,hidden:n,key:d,path:p,resizable:r,"text-align":v,width:"number"===typeof A?`${A}px`:A,bind:this,afterCreate:this._afterColumnCreate,afterRemoved:this._afterColumnRemoved}};c.clearSelection=function(){this._clearSelection();this.scheduleRender()};c.clearSort=function(){var d,e;let f=!1;this._grid&&(null!=(d=this._grid._sorters)&&d.length&&(this._grid._sorters.forEach(g=>{g._order=null;g.direction=null}),f=!0),null!=(e=this.columns)&&e.length&&this.columns.some(g=>!!g.direction)&&
(this.columns.forEach(g=>g.direction=null),f=!0),f&&(this.notifyChange("sortOrders"),this.scheduleRender()))};c.deselectItem=function(d){this._deselectRowByItem(d)};c.deselectRow=function(d){(d=this.viewModel.getRowItemAt(d))&&this._deselectRowByItem(d)};c.findColumn=function(){};c.generateCellClassNames=function(){var d;null==(d=this._grid)?void 0:d.generateCellClassNames()};c.getSlotElementByName=function(d){var e,f;return null==(e=this._grid)?void 0:null==(f=e.shadowRoot)?void 0:f.querySelector(`slot[name='${d}']`)};
c.hideColumn=function(d){var e;null==(e=this.viewModel)?void 0:e.hideColumn(d);this.scheduleRender()};c.notifyResize=function(){var d;null==(d=this._grid)?void 0:d.notifyResize()};c.recalculateColumnWidths=function(){var d;null==(d=this._grid)?void 0:d.recalculateColumnWidths()};c.reset=function(){var d=gb._asyncToGenerator(function*(){var e;this._clearSelection();yield null==(e=this.store)?void 0:e.reset();this.scrollToTop()});return function(){return d.apply(this,arguments)}}();c.refreshPageCache=
function(){var d;null==(d=this._grid)?void 0:d.clearCache()};c.selectRows=function(d){const e=this._grid.selectedItems.slice();d.forEach(f=>{0>e.findIndex(g=>g.objectId===f.objectId)&&this._grid.selectedItems.push(f)});this._updateSelectionProps();this._grid.render()};c.deselectRows=function(d){const e=this._grid.selectedItems.slice();d.forEach(f=>{const g=e.findIndex(h=>h.objectId===f.objectId);-1<g&&e.splice(g,1)});this._grid.selectedItems=e;this._updateSelectionProps();this._grid.render()};c.selectItem=
function(d){this._selectRowByItem(d)};c.selectRow=function(d){(d=this.viewModel.getRowItemAt(d))&&this._selectRowByItem(d)};c.showColumn=function(d){var e;null==(e=this.viewModel)?void 0:e.showColumn(d);this.scheduleRender()};c.sort=function({path:d,direction:e}){var f;null==(f=this.viewModel)?void 0:f.sortColumn(d,e);this.notifyChange("sortOrders")};c.scrollToIndex=function(d){var e;null==(e=this._grid)?void 0:e.scrollToIndex(d)};c.scrollToTop=function(){var d;null==(d=this._grid)?void 0:d.scrollToIndex(0)};
c.isEditingActive=function(){return!!this._getActiveEditInfo().length};c.getSelectedRowIds=function(){return this.selectedItems.map(d=>d.objectId).toArray()};c._afterGridCreate=function(d){const {cellClassNameGenerator:e,dataProvider:f,itemIdPath:g,rowDetailsRenderer:h}=this;d.cellClassNameGenerator=e;d.dataProvider=f;d.rowDetailsRenderer=h;d.itemIdPath=g;this._grid=d;customElements.whenDefined("vaadin-grid").then(()=>{this._appendStyles();this._addGridEventListeners()});this._grid.__updateSorter=
k=>{const l=this._grid;var m=l._sorters;const n=!m.includes(k);if(k.direction||!n)k._order=null,l.multiSort?(l._removeArrayItem(m,k),k.direction&&(bc.isSome(k._initialOrder)?(n?m[k._initialOrder]=k:m.splice(k._initialOrder,0,k),k._initialOrder=null):m.unshift(k)),l.__updateSortOrders()):k.direction&&(m=m.filter(p=>p!==k),l._sorters=[k],m.forEach(p=>{p._order=null;p.direction=null}))}};c._afterGridUpdate=function(d){this._grid||(this._grid=d)};c._afterColumnCreate=function(d){this._applyRenderersToColumnElement(d);
this._columnElements.push(d)};c._afterColumnRemoved=function(d){d=this._columnElements.indexOf(d,0);-1<d&&this._columnElements.splice(d,1)};c._syncColumnRenderers=function(){this._columnElements.forEach(d=>{this._applyRenderersToColumnElement(d)})};c._appendStyles=function(){var d;const e=null==(d=this._grid)?void 0:d.shadowRoot;d=document.createElement("style");d.textContent=`\n      :host { ${this._hostStyles} }\n      [part~="header-cell"] ::slotted(vaadin-grid-cell-content) { ${this._headerStyles} }\n      [part~="row"]:hover [part~="body-cell"] { ${this._rowHoverStyles} }\n    `;
null==e?void 0:e.appendChild(d)};c._updateGridSize=function(){this._grid&&(this._grid.size=this.size||0,this.scheduleRender())};c._getActiveEditInfo=function(){return!this.columns||this.columns.length?[]:this.columns.filter(d=>"activeEditInfo"in d).map(d=>d.activeEditInfo).items};c._addGridEventListeners=function(){const {_grid:d}=this;this.handles.add([hb.on(d,"click",e=>this._onRowClick(e)),hb.on(d,"selected-items-changed",e=>this._onSelectionChange(e)),hb.on(d,"sorter-changed",()=>this.notifyChange("sortOrders"))])};
c._onRowClick=function(d){var {_grid:e}=this;e=e.getEventContext(d);const {item:f,section:g}=e;f&&g&&"details"!==g&&"header"!==g&&this.emit("row-click",{context:e,native:d})};c._selectRowByItem=function(d){var e;null==(e=this._grid)?void 0:e.selectItem(d)};c._deselectRowByItem=function(d){var e;null==(e=this._grid)?void 0:e.deselectItem(d)};c._clearSelection=function(){this._grid.selectedItems=[];this._updateSelectionProps();this._grid.render()};c._onSelectionChange=function(d){if("selectedItems.splices"===
d.detail.path){const {removed:e,index:f,object:g}=d.detail.value.indexSplices[0];this._updateSelectionProps();this.emit("selection-change",{index:f,added:g,removed:e})}};c._updateSelectionProps=function(){this.selectedItems.length&&this.selectedItems.removeAll();this._grid&&this.selectedItems.addMany(this._grid.selectedItems)};c._applyRenderersToColumnElement=function(d){const e=d.getAttribute("path"),f=this.viewModel.findColumn(e);if(f)try{f.renderFunction&&"renderer"in d&&(d.renderer=(g,h,k)=>f.renderFunction({root:g,
column:h,rowData:k})),f.footerRenderFunction&&(d.footerRenderer=(g,h)=>f.footerRenderFunction({root:g,column:h})),f.headerRenderFunction&&(d.headerRenderer=(g,h)=>f.headerRenderFunction({root:g,column:h}))}catch(g){}};gb._createClass(a,[{key:"sortOrders",get:function(){return this._grid._sorters.filter(d=>!!d).map(({direction:d,path:e})=>({direction:d,path:e}))}}]);return a}(ce.HandleOwnerMixin(fe));y.__decorate([O.property()],x.prototype,"_grid",void 0);y.__decorate([I.aliasOf("viewModel.cellClassNameGenerator")],
x.prototype,"cellClassNameGenerator",void 0);y.__decorate([I.aliasOf("viewModel.columns")],x.prototype,"columns",void 0);y.__decorate([I.aliasOf("viewModel.columnReorderingEnabled")],x.prototype,"columnReorderingEnabled",void 0);y.__decorate([I.aliasOf("viewModel.dataProvider")],x.prototype,"dataProvider",void 0);y.__decorate([O.property()],x.prototype,"itemIdPath",void 0);y.__decorate([O.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],x.prototype,"label",void 0);y.__decorate([O.property(),
ie.messageBundle("esri/widgets/FeatureTable/t9n/FeatureTable")],x.prototype,"messages",void 0);y.__decorate([I.aliasOf("viewModel.multiSortEnabled")],x.prototype,"multiSortEnabled",void 0);y.__decorate([I.aliasOf("viewModel.pageSize")],x.prototype,"pageSize",void 0);y.__decorate([I.aliasOf("viewModel.rowDetailsRenderer")],x.prototype,"rowDetailsRenderer",void 0);y.__decorate([O.property({readOnly:!0})],x.prototype,"selectedItems",void 0);y.__decorate([I.aliasOf("viewModel.size")],x.prototype,"size",
void 0);y.__decorate([O.property({readOnly:!0})],x.prototype,"sortOrders",null);y.__decorate([I.aliasOf("viewModel.store")],x.prototype,"store",void 0);y.__decorate([O.property()],x.prototype,"viewModel",void 0);y.__decorate([O.property()],x.prototype,"visibleElements",void 0);y.__decorate([de.cast("visibleElements")],x.prototype,"castVisibleElements",null);y.__decorate([I.aliasOf("viewModel.findColumn")],x.prototype,"findColumn",null);return x=y.__decorate([ee.subclass("esri.widgets.FeatureTable.Grid.Grid")],
x)});