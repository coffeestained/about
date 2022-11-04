/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{L as e}from"./Logger.js";import t from"../layers/support/Field.js";import i from"../layers/support/FieldsIndex.js";import{fixFields as s}from"../layers/support/fieldUtils.js";const r=e.getLogger("esri.layers.support.fieldProperties");function l(){return{fields:{type:[t],value:null},fieldsIndex:{readOnly:!0,get(){return new i(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const t of e)this.fieldsIndex.has(t)||r.error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:e});return s(this.fieldsIndex,e)}}}}export{l as d};
