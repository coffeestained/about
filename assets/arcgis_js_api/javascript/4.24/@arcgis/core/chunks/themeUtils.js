/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-theme-name").replace(/\s|'|"/g,"").startsWith("dark")}function e(){return"calcite-theme-"+(t()?"dark":"light")}function a(t){!function(t){Array.from(t.classList).forEach((e=>{e.startsWith("calcite-theme-")&&t.classList.remove(e)}))}(t),t.classList.add(e())}export{e as g,t as i,a as s};
