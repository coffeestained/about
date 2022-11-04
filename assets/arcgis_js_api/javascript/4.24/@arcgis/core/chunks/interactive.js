/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */
function e(){}function t(t,i=!1){if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=e);t.el.click=HTMLElement.prototype.click,"function"==typeof i?t.el.setAttribute("tabindex",i.call(t)?"0":"-1"):!0===i?t.el.setAttribute("tabindex","0"):!1===i&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}export{t as u};
