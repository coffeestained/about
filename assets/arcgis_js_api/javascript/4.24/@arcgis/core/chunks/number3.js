/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const n=new Float32Array(1);function r(n){return[255&n,(65280&n)>>>8,(16711680&n)>>>16,(4278190080&n)>>>24]}function t(n,r){return 65535&n|r<<16}function u(n,r,t,u){return 255&n|(255&r)<<8|(255&t)<<16|u<<24}new Uint32Array(n.buffer);export{u as a,t as i,r as u};
