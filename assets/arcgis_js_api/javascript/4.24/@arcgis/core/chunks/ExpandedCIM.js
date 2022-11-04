/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as e,b as a}from"./enums4.js";import{d as t}from"./MaterialKey.js";const s={marker:e.MARKER,fill:e.FILL,line:e.LINE,text:e.TEXT};class l{constructor(e,l,n,i){const r={minScale:l?.minScale,maxScale:l?.maxScale},c=function(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}(r);this.layers=e,this.data=l,this.hash=this._createHash()+c,this.rendererKey=n;const m={isOutline:!1,placement:null,symbologyType:a.DEFAULT,vvFlags:n};for(const a of e){const e=s[a.type];m.isOutline="line"===a.type&&a.isOutline,a.materialKey=t(e,m),a.maxVVSize=i,a.scaleInfo=r,a.templateHash+=c}}get type(){return"expanded-cim"}_createHash(){let e="";for(const a of this.layers)e+=a.templateHash;return e}}export{l as E};
