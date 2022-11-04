/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{F as t,P as n}from"./SnappingManager.js";import{P as e}from"./PointSnappingHint.js";class r extends t{constructor(t){super({...t,constraint:new n(t.coordinateHelper,t.targetPoint)})}get hints(){return[new e(this.targetPoint,this.elevationInfo)]}}export{r as V};
