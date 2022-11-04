// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../intl ../core/Collection ../core/events ../core/Handles ../core/Logger ../core/maybe ../core/reactiveUtils ../core/throttle ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Feature ./Spinner ./Widget ./Feature/support/FeatureContentMixin ./Popup/PopupViewModel ./support/Heading ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/decorators/vmEvent ./support/jsxFactory ./support/widgetUtils ../intl/substitute".split(" "),
function(F,k,h,G,C,N,O,H,r,P,t,Y,Z,Q,p,R,S,T,U,V,I,W,z,J,X,l,B,w){function x(D,A){return void 0===A?`${"esri-popup"}__${D}`:`${"esri-popup"}__${D}-${A}`}const K={buttonEnabled:!0,position:"auto",breakpoint:{width:544}},L=O.getLogger("esri.widgets.Popup"),M={closeButton:!0,featureNavigation:!0};h=function(D){function A(a,c){var b=D.call(this,a,c)||this;b._blurClose=!1;b._blurContainer=!1;b._containerNode=null;b._mainContainerNode=null;b._featureMenuNode=null;b._actionsMenuNode=null;b._focusClose=!1;
b._focusContainer=!1;b._focusDockButton=!1;b._focusFeatureMenuButton=!1;b._focusActionsMenuButton=!1;b._focusFirstFeature=!1;b._focusFirstAction=!1;b._handles=new N;b._pointerOffsetInPx=16;b._spinner=null;b._feature=null;b._featureMenuIntersectionObserverCallback=([d])=>{null!=d&&d.isIntersecting&&b.viewModel.featurePage++};b._featureMenuIntersectionObserver=new IntersectionObserver(b._featureMenuIntersectionObserverCallback,{root:window.document});b._displaySpinnerThrottled=P.throttle(()=>b._displaySpinner(),
0);b.actions=null;b.alignment="auto";b.autoCloseEnabled=null;b.autoOpenEnabled=null;b.defaultPopupTemplateEnabled=null;b.content=null;b.collapsed=!1;b.collapseEnabled=!0;b.dockEnabled=!1;b.featureCount=null;b.featureMenuOpen=!1;b.features=null;b.goToOverride=null;b.headingLevel=2;b.highlightEnabled=null;b.location=null;b.label=void 0;b.maxInlineActions=3;b.messages=null;b.messagesCommon=null;b.promises=null;b.selectedFeature=null;b.selectedFeatureIndex=null;b.spinnerEnabled=!0;b.title=null;b.updateLocationEnabled=
null;b.view=null;b.viewModel=new I;b.visible=null;b.visibleElements={...M};b._addSelectedFeatureIndexHandle();b.own([r.watch(()=>{var d;return null==(d=b.viewModel)?void 0:d.screenLocation},()=>b._positionContainer()),r.watch(()=>{var d;return[null==(d=b.viewModel)?void 0:d.active,b.dockEnabled]},()=>b._toggleScreenLocationEnabled()),r.watch(()=>{var d;return null==(d=b.viewModel)?void 0:d.screenLocation},(d,f)=>{!!d!==!!f&&b.reposition()}),r.watch(()=>{var d,f,g,m,n,q;return[null==(d=b.viewModel)?
void 0:null==(f=d.view)?void 0:f.padding,null==(g=b.viewModel)?void 0:null==(m=g.view)?void 0:m.size,null==(n=b.viewModel)?void 0:n.active,null==(q=b.viewModel)?void 0:q.location,b.alignment]},()=>b.reposition()),r.watch(()=>b.spinnerEnabled,d=>b._spinnerEnabledChange(d)),r.watch(()=>{var d,f;return null==(d=b.viewModel)?void 0:null==(f=d.view)?void 0:f.size},(d,f)=>b._updateDockEnabledForViewSize(d,f)),r.watch(()=>{var d;return null==(d=b.viewModel)?void 0:d.view},(d,f)=>b._viewChange(d,f)),r.watch(()=>
{var d,f;return null==(d=b.viewModel)?void 0:null==(f=d.view)?void 0:f.ready},(d,f)=>b._viewReadyChange(d,f)),r.watch(()=>{var d,f;return[null==(d=b.viewModel)?void 0:d.waitingForResult,null==(f=b.viewModel)?void 0:f.location]},()=>{b._hideSpinner();b._displaySpinnerThrottled()}),r.watch(()=>{var d,f,g,m;return[null==(d=b.selectedFeatureWidget)?void 0:null==(f=d.viewModel)?void 0:f.title,null==(g=b.selectedFeatureWidget)?void 0:null==(m=g.viewModel)?void 0:m.state]},()=>b._setTitleFromFeatureWidget()),
r.watch(()=>{var d,f,g,m;return[null==(d=b.selectedFeatureWidget)?void 0:null==(f=d.viewModel)?void 0:f.content,null==(g=b.selectedFeatureWidget)?void 0:null==(m=g.viewModel)?void 0:m.state]},()=>b._setContentFromFeatureWidget()),r.when(()=>!b.collapsed,()=>{var d,f;"xsmall"===(null==(d=b.viewModel)?void 0:null==(f=d.view)?void 0:f.widthBreakpoint)&&b.viewModel.active&&b.collapseEnabled&&b.viewModel.centerAtLocation()}),r.on(()=>{var d;return null==(d=b.viewModel)?void 0:d.allActions},"change",()=>
b._watchActions()),r.watch(()=>{var d;return null==(d=b.viewModel)?void 0:d.allActions},()=>b._watchActions(),r.initial),r.watch(()=>{var d;return null==(d=b.viewModel)?void 0:d.featureViewModels},()=>b._featureMenuViewportScrollTop())]);return b}F._inheritsLoose(A,D);var e=A.prototype;e.destroy=function(){var a,c;this._destroySelectedFeatureWidget();this._destroySpinner();null==(a=this._handles)?void 0:a.destroy();this._unobserveFeatureMenuObserver();null==(c=this._featureMenuIntersectionObserver)?
void 0:c.disconnect();this._handles=null};e.castVisibleElements=function(a){return{...M,...a}};e.blur=function(){const {active:a}=this.viewModel;a||L.warn("Popup can only be blurred when currently active.");this.visibleElements.closeButton?this._blurClose=!0:this._blurContainer=!0;this.scheduleRender()};e.clear=function(){this.viewModel.clear()};e.close=function(){this.visible=!1};e.fetchFeatures=function(a,c){return this.viewModel.fetchFeatures(a,c)};e.focus=function(){const {active:a}=this.viewModel;
a||L.warn("Popup can only be focused when currently active.");this.visibleElements.closeButton?this._focusClose=!0:this._focusContainer=!0;this.scheduleRender()};e.next=function(){return this.viewModel.next()};e.open=function(a){var c,b;this._handles.remove("selected-index");const d={collapsed:a?!!a.collapsed:!1,actionsMenuOpen:a?!!a.actionsMenuOpen:!1,featureMenuOpen:a?!!a.featureMenuOpen:!1};"xsmall"===(null==(c=this.viewModel)?void 0:null==(b=c.view)?void 0:b.widthBreakpoint)&&(d.collapsed=!0);
this.set(d);this.viewModel.open(a);this._shouldFocus(a);this._addSelectedFeatureIndexHandle()};e.previous=function(){return this.viewModel.previous()};e.reposition=function(){this.renderNow();this._positionContainer();this._setCurrentAlignment()};e.triggerAction=function(a){this.viewModel.triggerAction(a)};e.render=function(){var a,c,b,d;const {actionsMenuOpen:f,dockEnabled:g,featureMenuVisible:m,dividedActions:n,currentAlignment:q,currentDockPosition:v}=this,{active:y}=this.viewModel;var {menuActions:u}=
n;u=y&&1<u.length&&f;const E=null==(a=this.selectedFeature)?void 0:null==(c=a.layer)?void 0:c.title;a=null==(b=this.selectedFeature)?void 0:null==(d=b.layer)?void 0:d.id;return l.tsx("div",{class:this.classes("esri-popup",{["esri-popup--aligned-top-center"]:"top-center"===q,["esri-popup--aligned-bottom-center"]:"bottom-center"===q,["esri-popup--aligned-top-left"]:"top-left"===q,["esri-popup--aligned-bottom-left"]:"bottom-left"===q,["esri-popup--aligned-top-right"]:"top-right"===q,["esri-popup--aligned-bottom-right"]:"bottom-right"===
q,["esri-popup--is-docked"]:y&&g,["esri-popup--shadow"]:y&&!g,["esri-popup--is-docked-top-left"]:"top-left"===v,["esri-popup--is-docked-top-center"]:"top-center"===v,["esri-popup--is-docked-top-right"]:"top-right"===v,["esri-popup--is-docked-bottom-left"]:"bottom-left"===v,["esri-popup--is-docked-bottom-center"]:"bottom-center"===v,["esri-popup--is-docked-bottom-right"]:"bottom-right"===v,["esri-popup--feature-menu-open"]:m,["esri-popup--actions-menu-open"]:u}),role:"presentation","data-layer-title":E,
"data-layer-id":a,bind:this,afterCreate:this._positionContainer,afterUpdate:this._positionContainer},y?[this.renderMainContainer(),this.renderPointer()]:null)};e.renderLoadingIcon=function(){return l.tsx("span",{"aria-hidden":"true",class:this.classes("esri-popup__icon","esri-icon-loading-indicator","esri-rotating")})};e.renderNavigationLoading=function(){const {messagesCommon:a}=this;return this.viewModel.pendingPromisesCount?l.tsx("div",{key:x("loading-container"),role:"presentation",class:"esri-popup__loading-container",
"aria-label":a.loading,title:a.loading},this.renderLoadingIcon()):null};e.renderPreviousIcon=function(){const a=B.isRTL(this.container);return l.tsx("span",{"aria-hidden":"true",class:this.classes("esri-popup__icon",{["esri-icon-right-triangle-arrow"]:a,["esri-popup__pagination-previous-icon--rtl"]:a,["esri-icon-left-triangle-arrow"]:!a,["esri-popup__pagination-previous-icon"]:!a})})};e.renderPreviousButton=function(){const {messages:a}=this;return l.tsx("div",{role:"button",tabIndex:0,bind:this,
onclick:this._previous,onkeydown:this._previous,class:this.classes("esri-popup__button","esri-popup__pagination-previous"),"aria-label":a.previous,title:a.previous},this.renderPreviousIcon())};e.renderNextIcon=function(){const a=B.isRTL(this.container);return l.tsx("span",{"aria-hidden":"true",class:this.classes("esri-popup__icon",{["esri-icon-left-triangle-arrow"]:a,["esri-popup__pagination-next-icon--rtl"]:a,["esri-icon-right-triangle-arrow"]:!a,["esri-popup__pagination-next-icon"]:!a})})};e.renderNextButton=
function(){const {messages:a}=this;return l.tsx("div",{role:"button",tabIndex:0,bind:this,onclick:this._next,onkeydown:this._next,class:this.classes("esri-popup__button","esri-popup__pagination-next"),"aria-label":a.next,title:a.next},this.renderNextIcon())};e.renderFeatureMenuButton=function(){const {featureMenuOpen:a,featureMenuId:c,messagesCommon:b}=this,{featureCount:d,selectedFeatureIndex:f}=this.viewModel;return l.tsx("div",{role:"button",tabIndex:0,bind:this,onclick:this._toggleFeatureMenu,
onkeydown:this._toggleFeatureMenu,afterCreate:this._focusFeatureMenuButtonNode,afterUpdate:this._focusFeatureMenuButtonNode,class:this.classes("esri-popup__button","esri-popup__feature-menu-button"),"aria-haspopup":"true","aria-controls":c,"aria-expanded":a.toString(),"aria-label":b.menu,title:b.menu},this._getPageText(d,f))};e.renderNavigationButtons=function(){return this.featureNavigationVisible?[this.renderPreviousButton(),this.renderNavigationLoading()||this.renderFeatureMenuButton(),this.renderNextButton()]:
null};e.renderDockIcon=function(){const {dockEnabled:a}=this,c=this._wouldDockTo();return l.tsx("span",{"aria-hidden":"true",class:this.classes({["esri-icon-minimize"]:a,["esri-popup__icon--dock-icon"]:!a,["esri-icon-dock-right"]:!a&&("top-right"===c||"bottom-right"===c),["esri-icon-dock-left"]:!a&&("top-left"===c||"bottom-left"===c),["esri-icon-maximize"]:!a&&"top-center"===c,["esri-icon-dock-bottom"]:!a&&"bottom-center"===c},"esri-popup__icon")})};e.renderDockButton=function(){var a,c,b;const {dockEnabled:d,
messages:f}=this,g=null==(a=this.viewModel)?void 0:null==(c=a.view)?void 0:c.widthBreakpoint;a=d?f.undock:f.dock;return"xsmall"!==g&&null!=(b=this.dockOptions)&&b.buttonEnabled?l.tsx("div",{role:"button","aria-label":a,title:a,tabIndex:0,bind:this,onclick:this._toggleDockEnabled,onkeydown:this._toggleDockEnabled,afterCreate:this._focusDockButtonNode,afterUpdate:this._focusDockButtonNode,class:this.classes("esri-popup__button","esri-popup__button--dock")},this.renderDockIcon()):null};e.renderTitle=
function(){const {title:a}=this.viewModel,{titleId:c,collapsible:b,contentCollapsed:d,messagesCommon:f}=this;var g={["esri-popup__header-container--button"]:b};const m=l.tsx(W.Heading,{level:this.headingLevel,class:"esri-popup__header-title",innerHTML:a});g=b?l.tsx("button",{key:`${a}--collapsible`,id:c,title:d?f.expand:f.collapse,bind:this,enterAnimation:this._createFeatureUpdatedAnimation(),class:this.classes("esri-popup__header-container",g),"aria-expanded":d?"false":"true",onclick:this._toggleCollapsed,
type:"button"},m):l.tsx("div",{key:a,id:c,bind:this,enterAnimation:this._createFeatureUpdatedAnimation(),class:this.classes("esri-popup__header-container",g)},m);return a?g:null};e.renderCloseIcon=function(){return l.tsx("span",{"aria-hidden":"true",class:this.classes("esri-popup__icon","esri-icon-close")})};e.renderCloseButton=function(){const {visibleElements:a,messagesCommon:c}=this;return a.closeButton?l.tsx("div",{role:"button",tabIndex:0,bind:this,onclick:this._close,onkeydown:this._close,class:"esri-popup__button",
"aria-label":c.close,title:c.close,afterCreate:this._closeButtonNodeUpdated,afterUpdate:this._closeButtonNodeUpdated},this.renderCloseIcon()):null};e.renderHeader=function(){return l.tsx("header",{class:"esri-popup__header"},this.renderTitle(),l.tsx("div",{class:"esri-popup__header-buttons"},this.renderDockButton(),this.renderCloseButton()))};e.renderContentContainer=function(){const {contentId:a,hasContent:c,contentCollapsed:b}=this,{content:d}=this.viewModel;return c&&!b?l.tsx("article",{key:d,
enterAnimation:this._createFeatureUpdatedAnimation(),id:a,class:"esri-popup__content"},this.renderContent()):null};e.renderActionsMenuButton=function(){const {actionsMenuId:a,actionsMenuButtonId:c,actionsMenuOpen:b,dividedActions:d,messagesCommon:f}=this,g=b?f.close:f.open,{menuActions:m}=d;return m.length?l.tsx("div",{key:x("actions-menu-button"),class:this.classes("esri-popup__button","esri-popup__actions-menu-button"),role:"button",id:c,"aria-haspopup":"true","aria-controls":b?a:null,tabIndex:0,
bind:this,onclick:this._toggleActionsMenu,onkeydown:this._toggleActionsMenu,afterCreate:this._focusActionsMenuButtonNode,afterUpdate:this._focusActionsMenuButtonNode,"aria-label":g,title:g},l.tsx("span",{"aria-hidden":"true",class:"esri-icon-handle-horizontal"})):null};e.renderMenuActions=function(){const {actionsMenuId:a,actionsMenuButtonId:c,actionsMenuOpen:b,dividedActions:d}=this,{menuActions:f}=d;return f.length&&b?l.tsx("ul",{id:a,role:"menu","aria-labelledby":c,key:x("actions"),class:"esri-popup__actions",
bind:this,onkeyup:this._handleActionMenuKeyup,afterCreate:this._actionsMenuNodeUpdated,afterUpdate:this._actionsMenuNodeUpdated},f.toArray().map(g=>this.renderAction({action:g,type:"menu-item"}))):null};e.renderInlineActions=function(){const {inlineActions:a}=this.dividedActions;return!!a.length&&a.toArray().map(c=>this.renderAction({action:c,type:"inline"}))};e.renderInlineActionsContainer=function(){const {inlineActions:a,menuActions:c}=this.dividedActions,b=!!a.length,d=!!c.length;return b||d?
l.tsx("div",{key:"inline-actions-container","data-inline-actions":b.toString(),"data-menu-actions":d.toString(),class:"esri-popup__inline-actions-container"},this.renderInlineActions(),this.renderActionsMenuButton(),this.renderMenuActions()):null};e.renderNavigation=function(){return this.featureNavigationVisible?l.tsx("section",{key:x("navigation"),class:this.classes("esri-popup__navigation")},this.renderNavigationButtons()):null};e.renderFooter=function(){const {featureNavigationVisible:a,dividedActions:c}=
this,{inlineActions:b,menuActions:d}=c,f=!!b.length,g={["esri-popup__footer--has-pagination"]:a,["esri-popup__footer--has-actions"]:f,["esri-popup__footer--has-actions-menu"]:!!d.length};return a||f?l.tsx("div",{key:x("feature-buttons"),class:this.classes("esri-popup__footer",g)},this.renderInlineActionsContainer(),this.renderNavigation()):null};e.renderFeatureMenuContainer=function(){var {messages:a}=this;const {featureViewModels:c,isLoadingFeature:b}=this.viewModel;a=w.substitute(a.selectedFeatures,
{total:c.length});return l.tsx("section",{key:x("menu"),class:"esri-popup__feature-menu"},l.tsx("strong",{class:"esri-popup__feature-menu-header"},a),l.tsx("nav",{bind:this,class:"esri-popup__feature-menu-viewport","data-node-ref":"_featureMenuViewportNode",afterCreate:B.storeNode},this.renderFeatureMenu(),l.tsx("div",{class:"esri-popup__feature-menu-observer",bind:this,afterCreate:this._featureMenuIntersectionObserverCreated}),b?l.tsx("div",{class:"esri-popup__feature-menu-loader"},this.renderLoadingIcon()):
null))};e.renderPointer=function(){return this.dockEnabled?null:l.tsx("div",{key:x("pointer"),class:"esri-popup__pointer",role:"presentation"},l.tsx("div",{class:this.classes("esri-popup__pointer-direction","esri-popup--shadow")}))};e.renderMainContainer=function(){const {dockEnabled:a,currentAlignment:c,currentDockPosition:b,titleId:d,contentId:f,collapsible:g,hasContent:m,contentCollapsed:n,visibleElements:q}=this,{title:v}=this.viewModel,y="bottom-left"===c||"bottom-center"===c||"bottom-right"===
c||"top-left"===b||"top-center"===b||"top-right"===b,u="top-left"===c||"top-center"===c||"top-right"===c||"bottom-left"===b||"bottom-center"===b||"bottom-right"===b;return l.tsx("div",{class:this.classes("esri-popup__main-container","esri-widget",{["esri-popup--shadow"]:a,["esri-popup--is-collapsible"]:g,["esri-popup--is-collapsed"]:n}),tabIndex:q.closeButton?null:-1,role:"dialog","aria-labelledby":v?d:"","aria-describedby":m&&!n?f:"",bind:this,onkeyup:this._handleMainKeyup,afterCreate:this._mainContainerNodeUpdated,
afterUpdate:this._mainContainerNodeUpdated},y?this.renderFooter():null,y?this.renderFeatureMenuContainer():null,this.renderHeader(),this.renderContentContainer(),u?this.renderFooter():null,u?this.renderFeatureMenuContainer():null)};e.renderContent=function(){var a;const c=null==(a=this.viewModel)?void 0:a.content;return c?"string"===typeof c?l.tsx("div",{key:c,innerHTML:c}):this.renderNodeContent(c):null};e.renderActionText=function(a){return l.tsx("span",{key:"text",class:"esri-popup__action-text"},
a)};e.renderActionIcon=function(a){const c=this._getActionClass(a),b=this._getActionImage(a),d={["esri-icon-loading-indicator"]:a.active,["esri-rotating"]:a.active,["esri-popup__icon"]:!!c,["esri-popup__action-image"]:!a.active&&!!b};c&&(d[c]=!a.active);return l.tsx("span",{key:"icon","aria-hidden":"true",class:this.classes("esri-popup__icon",d),styles:this._getIconStyles(b)})};e.renderAction=function(a){const {action:c,type:b}=a;a=this._getActionTitle(c);const d={["esri-popup__action"]:"toggle"!==
c.type,["esri-popup__action-toggle"]:"toggle"===c.type,["esri-popup__action-toggle--on"]:"toggle"===c.type&&c.value,["esri-popup__button--disabled"]:c.disabled},f=[this.renderActionIcon(c),this.renderActionText(a)];a="menu-item"===b?l.tsx("li",{key:c.uid,role:"menuitem",tabIndex:0,title:a,"aria-label":a,class:this.classes("esri-popup__button",d),onkeyup:this._handleActionMenuItemKeyup,bind:this,"data-action-uid":c.uid,onclick:this._triggerAction,onkeydown:this._triggerAction},f):l.tsx("div",{key:c.uid,
role:"button",tabIndex:0,title:a,"aria-label":a,class:this.classes("esri-popup__button",d),onkeyup:this._handleActionMenuItemKeyup,bind:this,"data-action-uid":c.uid,onclick:this._triggerAction,onkeydown:this._triggerAction},f);return c.visible?a:null};e.renderFeatureMenuItem=function(a,c){const {messages:b,messagesCommon:d}=this,{selectedFeatureIndex:f,selectedFeatureViewModel:g}=this.viewModel;var m=a===g;const n={["esri-popup__feature-menu-item--selected"]:m};m=m?l.tsx("span",{key:x(`feature-menu-selected-feature-${f}`),
title:b.selectedFeature,"aria-label":b.selectedFeature,class:"esri-icon-check-mark"}):null;a=l.tsx("span",{innerHTML:a.title||d.untitled});return l.tsx("li",{role:"menuitem",tabIndex:-1,key:x(`feature-menu-feature-${f}`),class:this.classes(n,"esri-popup__feature-menu-item"),bind:this,"data-feature-index":c,onblur:this._removeActiveFeature,onfocus:this._setActiveFeature,onkeyup:this._handleFeatureMenuItemKeyup,onclick:this._selectFeature,onkeydown:this._selectFeature,onmouseover:this._setActiveFeature,
onmouseleave:this._removeActiveFeature},l.tsx("span",{class:"esri-popup__feature-menu-title"},a,m))};e.renderFeatureMenu=function(){const {featureMenuId:a}=this,{featureViewModels:c}=this.viewModel;return 1<c.length?l.tsx("ol",{class:"esri-popup__feature-menu-list",id:a,bind:this,afterCreate:this._featureMenuNodeUpdated,afterUpdate:this._featureMenuNodeUpdated,onkeyup:this._handleFeatureMenuKeyup,role:"menu"},c.filter(b=>!!b.graphic).map((b,d)=>this.renderFeatureMenuItem(b,d))):null};e._getActionTitle=
function(a){const {messages:c,selectedFeature:b,messagesCommon:d}=this,{id:f}=a,g=null==b?void 0:b.attributes;return(a="zoom-to-feature"===f?w.substitute(a.title,{messages:c}):"remove-selected-feature"===f?w.substitute(a.title,{messages:d}):"zoom-to-clustered-features"===f?w.substitute(a.title,{messages:c}):"browse-clustered-features"===f?w.substitute(a.title,{messages:c}):a.title)&&g?w.substitute(a,g):a};e._getActionClass=function(a){var {selectedFeature:c}=this;c=null==c?void 0:c.attributes;const {className:b,
image:d}=a;return(a=d||b?b:"esri-icon-default-action")&&c?w.substitute(a,c):a};e._getActionImage=function(a){var {selectedFeature:c}=this;c=null==c?void 0:c.attributes;({image:a}=a);return a&&c?w.substitute(a,c):a};e._createFeatureUpdatedAnimation=function(){return B.cssTransition("enter","esri-popup--feature-updated")};e._getInlineActionCount=function(){const {maxInlineActions:a,featureNavigationVisible:c}=this;if("number"!==typeof a)return null;const b=Math.round(a);return Math.max(c?b-1:b,0)};
e._watchActions=function(){const {allActions:a}=this.viewModel;this.notifyChange("dividedActions");this._handles.remove("actions");a&&a.forEach(c=>{this._handles.add(r.watch(()=>[c.uid,c.active,c.className,c.disabled,c.id,c.title,c.image,c.visible],()=>this.scheduleRender()),"actions")})};e._divideActions=function(){var {allActions:a}=this.viewModel;a=a.filter(f=>f.visible);const c=this._getInlineActionCount(),b=null===c,d=0===c;return{inlineActions:b?a.slice(0):d?new G:a.slice(0,c),menuActions:b?
new G:d?a.slice(0):a.slice(c)}};e._featureMenuOpenChanged=function(a){a?this._focusFirstFeature=!0:this._focusFeatureMenuButton=!0};e._actionsMenuOpenChanged=function(a){a?this._focusFirstAction=!0:this._focusActionsMenuButton=!0};e._setTitleFromFeatureWidget=function(){const {selectedFeatureWidget:a,messagesCommon:c}=this;if(a){var b,d;this.viewModel.title="error"===(null==(b=a.viewModel)?void 0:b.state)?c.errorMessage:(null==(d=a.viewModel)?void 0:d.title)||""}};e._setContentFromFeatureWidget=function(){const {selectedFeatureWidget:a}=
this;a&&(this.viewModel.content=a)};e._unobserveFeatureMenuObserver=function(){this._featureMenuIntersectionObserverNode&&this._featureMenuIntersectionObserver.unobserve(this._featureMenuIntersectionObserverNode)};e._featureMenuIntersectionObserverCreated=function(a){this._unobserveFeatureMenuObserver();this._featureMenuIntersectionObserver.observe(a);this._featureMenuIntersectionObserverNode=a};e._handleFeatureMenuKeyup=function(a){"Escape"===C.eventKey(a)&&(a.stopPropagation(),this._focusFeatureMenuButton=
!0,this.featureMenuOpen=!1,this.scheduleRender())};e._handleActionMenuKeyup=function(a){"Escape"===C.eventKey(a)&&(a.stopPropagation(),this._focusActionsMenuButton=!0,this.actionsMenuOpen=!1,this.scheduleRender())};e._setActiveFeature=function(a){const {viewModel:c}=this;c.activeFeature=c.features[a.currentTarget["data-feature-index"]]||null};e._removeActiveFeature=function(){this.viewModel.activeFeature=null};e._handleFeatureMenuItemKeyup=function(a){const c=C.eventKey(a);var {_featureMenuNode:b}=
this;const d=a.currentTarget["data-feature-index"];if(b){b=b.querySelectorAll("li");var f=b.length;"ArrowUp"===c?(a.stopPropagation(),b[(d-1+f)%f].focus()):"ArrowDown"===c?(a.stopPropagation(),b[(d+1+f)%f].focus()):"Home"===c?(a.stopPropagation(),b[0].focus()):"End"===c&&(a.stopPropagation(),b[b.length-1].focus())}};e._handleActionMenuItemKeyup=function(a){const c=C.eventKey(a);var {_actionsMenuNode:b}=this;const d=a.currentTarget.dataset.actionUid;var {menuActions:f}=this.dividedActions;f=f.findIndex(m=>
m.uid===d);if(b){b=b.querySelectorAll("li");var g=b.length;"ArrowUp"===c?(a.stopPropagation(),b[(f-1+g)%g].focus()):"ArrowDown"===c?(a.stopPropagation(),b[(f+1+g)%g].focus()):"Home"===c?(a.stopPropagation(),b[0].focus()):"End"===c&&(a.stopPropagation(),b[b.length-1].focus())}};e._handleMainKeyup=function(a){const c=C.eventKey(a);"ArrowLeft"===c&&(a.stopPropagation(),this.previous());"ArrowRight"===c&&(a.stopPropagation(),this.next())};e._spinnerEnabledChange=function(a){this._destroySpinner();a&&
(a=this.get("viewModel.view"),this._createSpinner(a))};e._hideSpinner=function(){const {_spinner:a}=this;a&&(a.location=null,a.hide())};e._displaySpinner=function(){const {_spinner:a}=this;if(a){var {location:c,waitingForResult:b}=this.viewModel;b?a.show({location:c}):a.hide()}};e._getIconStyles=function(a){return{"background-image":a?`url(${a})`:""}};e._shouldFocus=function(){var a=F._asyncToGenerator(function*(c){c.shouldFocus&&(yield r.whenOnce(()=>{var b;return!0===(null==(b=this.viewModel)?void 0:
b.active)}),this.focus())});return function(c){return a.apply(this,arguments)}}();e._addSelectedFeatureIndexHandle=function(){const a=r.watch(()=>{var c;return null==(c=this.viewModel)?void 0:c.selectedFeatureIndex},(c,b)=>this._selectedFeatureIndexUpdated(c,b));this._handles.add(a,"selected-index")};e._selectedFeatureIndexUpdated=function(a,c){const {featureCount:b}=this;b&&a!==c&&-1!==a&&(this.featureMenuOpen=this.actionsMenuOpen=!1)};e._destroySelectedFeatureWidget=function(){const {_feature:a}=
this;a&&(a.viewModel=null,a&&!a.destroyed&&a.destroy());this._feature=null};e._isScreenLocationWithinView=function(a,c){return-1<a.x&&-1<a.y&&a.x<=c.width&&a.y<=c.height};e._isOutsideView=function(a){const {popupHeight:c,popupWidth:b,screenLocation:d,side:f,view:g}=a;if(isNaN(b)||isNaN(c)||!g||!d)return!1;a=g.padding;return"right"===f&&d.x+b/2>g.width-a.right||"left"===f&&d.x-b/2<a.left||"top"===f&&d.y-c<a.top||"bottom"===f&&d.y+c>g.height-a.bottom?!0:!1};e._calculateAutoAlignment=function(a){if("auto"!==
a)return a;const {_pointerOffsetInPx:c,_containerNode:b,_mainContainerNode:d,viewModel:f}=this,{screenLocation:g,view:m}=f;if(H.isNone(g)||!m||!b)return"top-center";if(!this._isScreenLocationWithinView(g,m))return this._get("currentAlignment")||"top-center";var n=(a=d?window.getComputedStyle(d,null):null)?parseInt(a.getPropertyValue("max-height").replace(/[^-\d\.]/g,""),10):0,q=a?parseInt(a.getPropertyValue("height").replace(/[^-\d\.]/g,""),10):0;const {height:v,width:y}=b.getBoundingClientRect();
a=y+c;const u=Math.max(v,n,q)+c;n=this._isOutsideView({popupHeight:u,popupWidth:a,screenLocation:g,side:"right",view:m});q=this._isOutsideView({popupHeight:u,popupWidth:a,screenLocation:g,side:"left",view:m});const E=this._isOutsideView({popupHeight:u,popupWidth:a,screenLocation:g,side:"top",view:m});a=this._isOutsideView({popupHeight:u,popupWidth:a,screenLocation:g,side:"bottom",view:m});return q?E?"bottom-right":"top-right":n?E?"bottom-left":"top-left":E?a?"top-center":"bottom-center":"top-center"};
e._callCurrentAlignment=function(a){return"function"===typeof a?a.call(this):a};e._getCurrentAlignment=function(){const {alignment:a,dockEnabled:c}=this;return c||!this.viewModel.active?null:this._calculatePositionResult(this._calculateAutoAlignment(this._callCurrentAlignment(a)))};e._setCurrentAlignment=function(){this._set("currentAlignment",this._getCurrentAlignment())};e._setCurrentDockPosition=function(){this._set("currentDockPosition",this._getCurrentDockPosition())};e._calculatePositionResult=
function(a){const c=["left","right"];B.isRTL(this.container)&&c.reverse();return a.replace(/leading/gi,c[0]).replace(/trailing/gi,c[1])};e._callDockPosition=function(a){return"function"===typeof a?a.call(this):a};e._getDockPosition=function(){var a;return this._calculatePositionResult(this._calculateAutoDockPosition(this._callDockPosition(null==(a=this.dockOptions)?void 0:a.position)))};e._getCurrentDockPosition=function(){return this.dockEnabled&&this.viewModel.active?this._getDockPosition():null};
e._wouldDockTo=function(){return this.dockEnabled?null:this._getDockPosition()};e._calculateAutoDockPosition=function(a){var c;if("auto"!==a)return a;a=null==(c=this.viewModel)?void 0:c.view;c=B.isRTL(this.container)?"top-left":"top-right";if(!a)return c;var b=a.padding||{left:0,right:0,top:0,bottom:0};b=a.width-b.left-b.right;({breakpoints:a}=a);return a&&b<=a.xsmall?"bottom-center":c};e._positionContainer=function(a=this._containerNode){a&&(this._containerNode=a);if(a){var {screenLocation:c}=this.viewModel,
{width:b}=a.getBoundingClientRect();if(c=this._calculatePositionStyle(c,b))a.style.top=c.top,a.style.left=c.left,a.style.bottom=c.bottom,a.style.right=c.right}};e._calculateFullWidth=function(a){const {currentAlignment:c,_pointerOffsetInPx:b}=this;return"top-left"===c||"bottom-left"===c||"top-right"===c||"bottom-right"===c?a+b:a};e._calculateAlignmentPosition=function(a,c,b,d){const {currentAlignment:f,_pointerOffsetInPx:g}=this;d/=2;const m=b.height-c;b=b.width-a;const {padding:n}=this.view;if("bottom-center"===
f)return{top:c+g-n.top,left:a-d-n.left};if("top-left"===f)return{bottom:m+g-n.bottom,right:b+g-n.right};if("bottom-left"===f)return{top:c+g-n.top,right:b+g-n.right};if("top-right"===f)return{bottom:m+g-n.bottom,left:a+g-n.left};if("bottom-right"===f)return{top:c+g-n.top,left:a+g-n.left};if("top-center"===f)return{bottom:m+g-n.bottom,left:a-d-n.left}};e._calculatePositionStyle=function(a,c){const {dockEnabled:b,view:d}=this;if(d){if(b)return{left:"",top:"",right:"",bottom:""};if(!H.isNone(a)&&c&&(c=
this._calculateFullWidth(c),a=this._calculateAlignmentPosition(a.x,a.y,d,c)))return{top:void 0!==a.top?`${a.top}px`:"auto",left:void 0!==a.left?`${a.left}px`:"auto",bottom:void 0!==a.bottom?`${a.bottom}px`:"auto",right:void 0!==a.right?`${a.right}px`:"auto"}}};e._viewChange=function(a,c){a&&c&&(this.close(),this.clear())};e._viewReadyChange=function(a,c){a?(a=this.get("viewModel.view"),this._wireUpView(a)):c&&(this.close(),this.clear())};e._wireUpView=function(a){this._destroySpinner();if(a){var {spinnerEnabled:c}=
this;c&&this._createSpinner(a);this._setDockEnabledForViewSize(this.dockOptions)}};e._dockingThresholdCrossed=function(a,c,b){const [d,f]=a,[g,m]=c,{width:n,height:q}=b;return d<=n&&g>n||d>n&&g<=n||f<=q&&m>q||f>q&&m<=q};e._updateDockEnabledForViewSize=function(a,c){if(a&&c){var b=this.get("viewModel.view.padding")||{left:0,right:0,top:0,bottom:0},d=b.left+b.right,f=b.top+b.bottom;b=[];var g=[];b[0]=a[0]-d;b[1]=a[1]-f;g[0]=c[0]-d;g[1]=c[1]-f;({dockOptions:a}=this);this._dockingThresholdCrossed(b,g,
a.breakpoint)&&this._setDockEnabledForViewSize(a);this._setCurrentDockPosition()}};e._focusDockButtonNode=function(a){this._focusDockButton&&(this._focusDockButton=!1,a.focus())};e._closeButtonNodeUpdated=function(a){this._focusClose?(this._focusClose=!1,a.focus()):this._blurClose&&(this._blurClose=!1,a.blur())};e._mainContainerNodeUpdated=function(a){this._mainContainerNode=a;this._focusContainer?(this._focusContainer=!1,a.focus()):this._blurContainer&&(this._blurContainer=!1,a.blur())};e._featureMenuNodeUpdated=
function(a){(this._featureMenuNode=a)&&this._focusFirstFeature&&(this._focusFirstFeature=!1,a=a.querySelectorAll("li"),a.length&&a[0].focus())};e._actionsMenuNodeUpdated=function(a){(this._actionsMenuNode=a)&&this._focusFirstAction&&(this._focusFirstAction=!1,a=a.querySelectorAll("li"),a.length&&a[0].focus())};e._focusFeatureMenuButtonNode=function(a){this._focusFeatureMenuButton&&(this._focusFeatureMenuButton=!1,a.focus())};e._focusActionsMenuButtonNode=function(a){this._focusActionsMenuButton&&
(this._focusActionsMenuButton=!1,a.focus())};e._featureMenuViewportScrollTop=function(){this._featureMenuViewportNode&&(this._featureMenuViewportNode.scrollTop=0)};e._toggleScreenLocationEnabled=function(){const {dockEnabled:a,viewModel:c}=this;c&&(c.screenLocationEnabled=c.active&&!a)};e._shouldDockAtCurrentViewSize=function(a){var c,b;a=a.breakpoint;const d=null==(c=this.viewModel)?void 0:null==(b=c.view)?void 0:b.ui;if(!d)return!1;const {width:f,height:g}=d;if(isNaN(f)||isNaN(g))return!1;c=a.hasOwnProperty("width")&&
f<=a.width;b=a.hasOwnProperty("height")&&g<=a.height;return c||b};e._setDockEnabledForViewSize=function(a){a.breakpoint&&(this.dockEnabled=this._shouldDockAtCurrentViewSize(a))};e._getPageText=function(a,c){return this.featureNavigationVisible?w.substitute(this.messages.pageText,{index:c+1,total:a}):null};e._destroySpinner=function(){const {_spinner:a,view:c}=this;a&&(c&&c.ui&&c.ui.remove(this._spinner,"popup-spinner"),a.destroy(),this._spinner=null)};e._createSpinner=function(a){a&&(this._spinner=
new T({view:a}),a.ui.add(this._spinner,{key:"popup-spinner",position:"manual"}))};e._toggleCollapsed=function(){this.collapsed=!this.collapsed};e._close=function(){this.close();this.view&&this.view.focus()};e._toggleDockEnabled=function(){this.dockEnabled=!this.dockEnabled;this._focusDockButton=!0;this.scheduleRender()};e._toggleFeatureMenu=function(){const a=!this.featureMenuOpen;this._featureMenuOpenChanged(a);this.actionsMenuOpen=!1;this.featureMenuOpen=a};e._toggleActionsMenu=function(){const a=
!this.actionsMenuOpen;this._actionsMenuOpenChanged(a);this.featureMenuOpen=!1;this.actionsMenuOpen=a};e._triggerAction=function(a){const c=a.currentTarget.dataset.actionUid;var {allActions:b}=this.viewModel;a=b.findIndex(d=>d.uid===c);(b=b.getItemAt(a))&&"toggle"===b.type&&(b.value=!b.value);this.actionsMenuOpen=!1;this.viewModel.triggerAction(a)};e._selectFeature=function(a){a=a.currentTarget["data-feature-index"];isNaN(a)||(this.viewModel.selectedFeatureIndex=a);this.featureMenuOpen=!1;this._focusFeatureMenuButton=
!0;this.scheduleRender()};e._next=function(){this.next()};e._previous=function(){this.previous()};F._createClass(A,[{key:"actionsMenuId",get:function(){return`${this.id}-actions-menu`}},{key:"actionsMenuButtonId",get:function(){return`${this.id}-actions-menu-button`}},{key:"featureMenuId",get:function(){return`${this.id}-feature-menu`}},{key:"titleId",get:function(){return`${this.id}-popup-title`}},{key:"contentId",get:function(){return`${this.id}-popup-content`}},{key:"hasContent",get:function(){var a,
c,b,d,f,g,m;return!!(this.selectedFeatureWidget?(null==(a=this.selectedFeatureWidget)?0:null==(c=a.viewModel)?0:c.waitingForContent)||"error"===(null==(b=this.selectedFeatureWidget)?void 0:null==(d=b.viewModel)?void 0:d.state)||(null==(f=this.selectedFeatureWidget)?0:null==(g=f.viewModel)?0:g.content):null==(m=this.viewModel)?0:m.content)}},{key:"featureNavigationVisible",get:function(){return this.viewModel.active&&1<this.viewModel.featureCount&&this.visibleElements.featureNavigation}},{key:"collapsible",
get:function(){return!!(this.collapseEnabled&&this.viewModel.title&&this.hasContent)}},{key:"featureMenuVisible",get:function(){return this.featureNavigationVisible&&this.featureMenuOpen}},{key:"contentCollapsed",get:function(){return this.collapsible&&!this.featureMenuVisible&&this.collapsed}},{key:"dividedActions",get:function(){return this._divideActions()}},{key:"actionsMenuOpen",get:function(){return this.viewModel.active?this._get("actionsMenuOpen"):!1},set:function(a){this._set("actionsMenuOpen",
!!a)}},{key:"currentAlignment",get:function(){return this._getCurrentAlignment()}},{key:"currentDockPosition",get:function(){return this._getCurrentDockPosition()}},{key:"dockOptions",get:function(){return this._get("dockOptions")||K},set:function(a){var c={...K};const b=this.get("viewModel.view.breakpoints");var d={};b&&(d.width=b.xsmall,d.height=b.xsmall);a={...c,...a};c={...c.breakpoint,...d};({breakpoint:d}=a);!0===d?a.breakpoint=c:"object"===typeof d&&(a.breakpoint={...c,...d});this._set("dockOptions",
a);this._setCurrentDockPosition();this.reposition()}},{key:"selectedFeatureWidget",get:function(){const {_feature:a,visibleElements:c,headingLevel:b}=this,{selectedFeatureViewModel:d}=this.viewModel,f={...c,title:!1};if(!d)return null;a?(a.viewModel=d,a.visibleElements=f):this._feature=new S({headingLevel:b+1,viewModel:d,visibleElements:f});return this._feature}}]);return A}(V.FeatureContentMixin(U));k.__decorate([p.property({readOnly:!0})],h.prototype,"actionsMenuId",null);k.__decorate([p.property({readOnly:!0})],
h.prototype,"actionsMenuButtonId",null);k.__decorate([p.property({readOnly:!0})],h.prototype,"featureMenuId",null);k.__decorate([p.property({readOnly:!0})],h.prototype,"titleId",null);k.__decorate([p.property({readOnly:!0})],h.prototype,"contentId",null);k.__decorate([p.property({readOnly:!0})],h.prototype,"hasContent",null);k.__decorate([p.property({readOnly:!0})],h.prototype,"featureNavigationVisible",null);k.__decorate([p.property({readOnly:!0})],h.prototype,"collapsible",null);k.__decorate([p.property({readOnly:!0})],
h.prototype,"featureMenuVisible",null);k.__decorate([p.property({readOnly:!0})],h.prototype,"contentCollapsed",null);k.__decorate([p.property({readOnly:!0})],h.prototype,"dividedActions",null);k.__decorate([t.aliasOf("viewModel.actions")],h.prototype,"actions",void 0);k.__decorate([p.property()],h.prototype,"actionsMenuOpen",null);k.__decorate([p.property()],h.prototype,"alignment",void 0);k.__decorate([t.aliasOf("viewModel.autoCloseEnabled")],h.prototype,"autoCloseEnabled",void 0);k.__decorate([t.aliasOf("viewModel.autoOpenEnabled")],
h.prototype,"autoOpenEnabled",void 0);k.__decorate([t.aliasOf("viewModel.defaultPopupTemplateEnabled")],h.prototype,"defaultPopupTemplateEnabled",void 0);k.__decorate([t.aliasOf("viewModel.content")],h.prototype,"content",void 0);k.__decorate([p.property()],h.prototype,"collapsed",void 0);k.__decorate([p.property()],h.prototype,"collapseEnabled",void 0);k.__decorate([p.property({readOnly:!0})],h.prototype,"currentAlignment",null);k.__decorate([p.property({readOnly:!0})],h.prototype,"currentDockPosition",
null);k.__decorate([p.property()],h.prototype,"dockOptions",null);k.__decorate([p.property()],h.prototype,"dockEnabled",void 0);k.__decorate([t.aliasOf("viewModel.featureCount")],h.prototype,"featureCount",void 0);k.__decorate([p.property()],h.prototype,"featureMenuOpen",void 0);k.__decorate([t.aliasOf("viewModel.features")],h.prototype,"features",void 0);k.__decorate([t.aliasOf("viewModel.goToOverride")],h.prototype,"goToOverride",void 0);k.__decorate([p.property()],h.prototype,"headingLevel",void 0);
k.__decorate([t.aliasOf("viewModel.highlightEnabled")],h.prototype,"highlightEnabled",void 0);k.__decorate([t.aliasOf("viewModel.location")],h.prototype,"location",void 0);k.__decorate([p.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],h.prototype,"label",void 0);k.__decorate([p.property()],h.prototype,"maxInlineActions",void 0);k.__decorate([p.property(),J.messageBundle("esri/widgets/Popup/t9n/Popup")],h.prototype,"messages",void 0);k.__decorate([p.property(),J.messageBundle("esri/t9n/common")],
h.prototype,"messagesCommon",void 0);k.__decorate([t.aliasOf("viewModel.promises")],h.prototype,"promises",void 0);k.__decorate([t.aliasOf("viewModel.selectedFeature")],h.prototype,"selectedFeature",void 0);k.__decorate([t.aliasOf("viewModel.selectedFeatureIndex")],h.prototype,"selectedFeatureIndex",void 0);k.__decorate([p.property({readOnly:!0})],h.prototype,"selectedFeatureWidget",null);k.__decorate([p.property()],h.prototype,"spinnerEnabled",void 0);k.__decorate([t.aliasOf("viewModel.title")],
h.prototype,"title",void 0);k.__decorate([t.aliasOf("viewModel.updateLocationEnabled")],h.prototype,"updateLocationEnabled",void 0);k.__decorate([t.aliasOf("viewModel.view")],h.prototype,"view",void 0);k.__decorate([p.property({type:I}),X.vmEvent(["triggerAction","trigger-action"])],h.prototype,"viewModel",void 0);k.__decorate([t.aliasOf("viewModel.visible")],h.prototype,"visible",void 0);k.__decorate([p.property()],h.prototype,"visibleElements",void 0);k.__decorate([Q.cast("visibleElements")],h.prototype,
"castVisibleElements",null);k.__decorate([z.accessibleHandler()],h.prototype,"_close",null);k.__decorate([z.accessibleHandler()],h.prototype,"_toggleDockEnabled",null);k.__decorate([z.accessibleHandler()],h.prototype,"_toggleFeatureMenu",null);k.__decorate([z.accessibleHandler()],h.prototype,"_toggleActionsMenu",null);k.__decorate([z.accessibleHandler()],h.prototype,"_triggerAction",null);k.__decorate([z.accessibleHandler()],h.prototype,"_selectFeature",null);k.__decorate([z.accessibleHandler()],
h.prototype,"_next",null);k.__decorate([z.accessibleHandler()],h.prototype,"_previous",null);return h=k.__decorate([R.subclass("esri.widgets.Popup")],h)});