/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{d as t,m as s}from"./mat3.js";import{D as i}from"./DisplayObject.js";import{T as e}from"./TileKey.js";class r extends i{constructor(t,s,i,r,h,o=r,a=h){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new e(t),this.x=s,this.y=i,this.width=r,this.height=h,this.rangeX=o,this.rangeY=a}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(i,e){const r=e/(i.resolution*i.pixelRatio),h=this.transforms.tileMat3,[o,a]=i.toScreenNoRotation([0,0],[this.x,this.y]),n=this.width/this.rangeX*r,l=this.height/this.rangeY*r;t(h,n,0,0,0,l,0,o,a,1),s(this.transforms.dvs,i.displayViewMat3,h)}}export{r as T};
