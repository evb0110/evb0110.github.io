(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MaalulaCorpus~TuroyoCorpusSearch~TuroyoDictionaries~UrmiCorpusSearch"],{"169a":function(t,e,n){"use strict";n("7db0"),n("caad"),n("45fc"),n("a9e3"),n("2532"),n("498a");var i=n("5530"),o=n("2909"),a=n("ade3"),r=(n("368e"),n("480e")),s=n("4ad4"),c=n("b848"),u=n("75eb"),l=n("e707"),h=n("e4d3"),d=n("21be"),f=n("f2e7"),v=n("a293"),p=n("58df"),m=n("d9bd"),g=n("80d2"),b=Object(p["a"])(s["a"],c["a"],u["a"],l["a"],h["a"],d["a"],f["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:v["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(a["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(a["a"])(t,"v-dialog--active",this.isActive),Object(a["a"])(t,"v-dialog--persistent",this.persistent),Object(a["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(a["a"])(t,"v-dialog--scrollable",this.scrollable),Object(a["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(m["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):l["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===g["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(o["a"])(n).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(r["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(i["a"])(Object(i["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(g["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(g["f"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"16b7":function(t,e,n){"use strict";n("a9e3");var i=n("2b0e");e["a"]=i["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var i=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},i)}}})},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("d3b7");function i(t,e,n,i,o,a,r){try{var s=t[a](r),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(i,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var r=t.apply(e,n);function s(t){i(r,o,a,s,c,"next",t)}function c(t){i(r,o,a,s,c,"throw",t)}s(void 0)}))}}},"21be":function(t,e,n){"use strict";n("99af"),n("caad"),n("2532");var i=n("2909"),o=n("2b0e"),a=n("80d2");e["a"]=o["a"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(a["p"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,n=[this.stackMinZIndex,Object(a["p"])(e)],o=[].concat(Object(i["a"])(document.getElementsByClassName("v-menu__content--active")),Object(i["a"])(document.getElementsByClassName("v-dialog__content--active"))),r=0;r<o.length;r++)t.includes(o[r])||n.push(Object(a["p"])(o[r]));return Math.max.apply(Math,n)}}})},"368e":function(t,e,n){},"480e":function(t,e,n){"use strict";n("7db0");var i=n("7560");e["a"]=i["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:i["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},"4ad4":function(t,e,n){"use strict";n("caad"),n("45fc"),n("b0c0"),n("b64b");var i=n("53ca"),o=n("16b7"),a=n("f2e7"),r=n("58df"),s=n("80d2"),c=n("d9bd"),u=Object(r["a"])(o["a"],a["a"]);e["a"]=u.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(i["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(s["o"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(c["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,n=t;e<n.length;e++){var i=n[e];this.getActivator().addEventListener(i,this.listeners[i])}}},genActivator:function(){var t=Object(s["n"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var n=t.getActivator(e);n&&n.focus(),e.stopPropagation(),t.isActive=!t.isActive},this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var n=this.internalActivator?this.$el:document;e="string"===typeof this.activator?n.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var i=this.activatorNode[0].componentInstance;e=i&&i.$options.mixins&&i.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?i.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot:function(){return Object(s["n"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,n=t;e<n.length;e++){var i=n[e];this.activatorElement.removeEventListener(i,this.listeners[i])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"75eb":function(t,e,n){"use strict";n("4160"),n("159b");var i=n("ade3"),o=n("53ca"),a=n("9d65"),r=n("80d2"),s=n("58df"),c=n("d9bd");function u(t){var e=Object(o["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}e["a"]=Object(s["a"])(a["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:u},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var n=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,n)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=Object(r["l"])(this.$vnode,"context.$options._scopeId");return t&&Object(i["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(c["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},"82a9":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{on:{click:t.onClick}},[n("v-tooltip",{attrs:{disabled:!t.tooltip,bottom:"","open-delay":"1000"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("label",t._g({},i),[n("svg",{staticClass:"keyboard-icon-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#AAAAAA",width:"50px",height:"50px"}},[n("path",{attrs:{d:"M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"}})])])]}}])},[n("span",[t._v(t._s(t.tooltip))])])],1)},o=[],a={name:"KeyboardIcon",props:{tooltip:{default:"Click to open a virtual keyboard"}},methods:{onClick:function(){this.$emit("click")}}},r=a,s=(n("c76d"),n("2877")),c=n("6544"),u=n.n(c),l=(n("a9e3"),n("ade3")),h=(n("9734"),n("4ad4")),d=n("a9ad"),f=n("16b7"),v=n("b848"),p=n("75eb"),m=n("f573"),g=n("f2e7"),b=n("80d2"),y=n("d9bd"),w=n("58df"),x=Object(w["a"])(d["a"],f["a"],v["a"],p["a"],m["a"],g["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,n=t.content,i=!this.bottom&&!this.left&&!this.top&&!this.right,o=!1!==this.attach?e.offsetLeft:e.left,a=0;return this.top||this.bottom||i?a=o+e.width/2-n.width/2:(this.left||this.right)&&(a=o+(this.right?e.width:-n.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(a,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,n=t.content,i=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=i+(this.bottom?e.height:-n.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=i+e.height/2-n.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(o+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(b["f"])(this.maxWidth),minWidth:Object(b["f"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(b["o"])(this,"activator",!0)&&Object(y["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=h["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===b["r"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(l["a"])(t,this.contentClass,!0),Object(l["a"])(t,"menuable__content__active",this.isActive),Object(l["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),O=Object(s["a"])(r,i,o,!1,null,"00e61302",null);e["a"]=O.exports;u()(O,{VTooltip:x})},"841c":function(t,e,n){"use strict";var i=n("d784"),o=n("825a"),a=n("1d80"),r=n("129f"),s=n("14c3");i("search",1,(function(t,e,n){return[function(e){var n=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var a=o(t),c=String(this),u=a.lastIndex;r(u,0)||(a.lastIndex=0);var l=s(a,c);return r(a.lastIndex,u)||(a.lastIndex=u),null===l?-1:l.index}]}))},8508:function(t,e,n){"use strict";n("fd00")},8529:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.stringArray,(function(e,i){return n("span",{key:i,style:t.style(i)},[t._v(t._s(e))])})),0)},o=[],a=(n("4d63"),n("ac1f"),n("25f0"),n("1276"),{name:"GrepLine",props:{str:{default:""},searcher:{default:""},mainColor:{default:"black"},highlightColor:{default:"red"}},data:function(){return{normalStyle:{color:this.mainColor},selectionStyle:{color:this.highlightColor,"font-weight":"bold"}}},computed:{stringArray:function(){if(!this.searcher)return[this.str];var t="(".concat(this.searcher,")"),e=new RegExp(t,"gi");return this.str.split(e)}},methods:{style:function(t){return t%2?this.selectionStyle:this.normalStyle}}}),r=a,s=n("2877"),c=Object(s["a"])(r,i,o,!1,null,"2722dc84",null);e["a"]=c.exports},"96cf":function(t,e,n){var i=function(t){"use strict";var e,n=Object.prototype,i=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",r=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch($){c=function(t,e,n){return t[e]=n}}function u(t,e,n,i){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),r=new j(i||[]);return a._invoke=E(t,n,r),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch($){return{type:"throw",arg:$}}}t.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",v="completed",p={};function m(){}function g(){}function b(){}var y={};y[a]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(L([])));x&&x!==n&&i.call(x,a)&&(y=x);var O=b.prototype=m.prototype=Object.create(y);function A(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,a,r,s){var c=l(t[o],t,a);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,r,s)}),(function(t){n("throw",t,r,s)})):e.resolve(h).then((function(t){u.value=t,r(u)}),(function(t){return n("throw",t,r,s)}))}s(c.arg)}var o;function a(t,i){function a(){return new e((function(e,o){n(t,i,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function E(t,e,n){var i=h;return function(o,a){if(i===f)throw new Error("Generator is already running");if(i===v){if("throw"===o)throw a;return T()}n.method=o,n.arg=a;while(1){var r=n.delegate;if(r){var s=C(r,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=f;var c=l(t,e,n);if("normal"===c.type){if(i=n.done?v:d,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=v,n.method="throw",n.arg=c.arg)}}}function C(t,n){var i=t.iterator[n.method];if(i===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,C(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(i,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function L(t){if(t){var n=t[a];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,r=function n(){while(++o<t.length)if(i.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return r.next=r}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=O.constructor=b,b.constructor=g,g.displayName=c(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c(t,s,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},A(k.prototype),k.prototype[r]=function(){return this},t.AsyncIterator=k,t.async=function(e,n,i,o,a){void 0===a&&(a=Promise);var r=new k(u(e,n,i,o),a);return t.isGeneratorFunction(n)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},A(O),c(O,s,"Generator"),O[a]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=L,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(i,o){return s.type="throw",s.arg=t,n.next=i,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a],s=r.completion;if("root"===r.tryLoc)return o("end");if(r.tryLoc<=this.prev){var c=i.call(r,"catchLoc"),u=i.call(r,"finallyLoc");if(c&&u){if(this.prev<r.catchLoc)return o(r.catchLoc,!0);if(this.prev<r.finallyLoc)return o(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return o(r.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return o(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&i.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var r=a?a.completion:{};return r.type=t,r.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(r)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var o=i.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:L(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=i}catch(o){Function("r","regeneratorRuntime = r")(i)}},9734:function(t,e,n){},9885:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"keyboard-wrapper"},[n("div",{staticClass:"close-button"},[n("span",{staticClass:"closer",on:{click:t.close}},[t._v("×")])]),n("div",{staticClass:"working-block"},[n("v-text-field",{staticClass:"input",attrs:{value:t.valueInternal,label:t.inputName,outlined:"",dense:"",clearable:""},on:{input:t.onInput},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit(e)}}}),n("div",{staticClass:"keyboard specific-keys"},t._l(t.buttons,(function(e){return t.buttons?n("v-btn",{key:e,attrs:{depressed:"",rounded:""},on:{click:function(n){return t.handleKeyboard(e)}}},[t._v(t._s(e))]):t._e()})),1),n("div",{staticClass:"keyboard common-keys"},t._l(t.commonButtons,(function(e){return t.commonButtons?n("v-btn",{key:e,attrs:{depressed:"",rounded:"",large:"",dark:"",color:"teal"},on:{click:function(n){return t.handleKeyboard(e)}}},[t._v(t._s(e))]):t._e()})),1),n("div",{staticClass:"submit-wrapper"},[n("v-btn",{staticClass:"mr-5",attrs:{depressed:"",text:""},on:{click:t.close}},[t._v("Cancel")]),n("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:t.onSubmit}},[t._v("Submit")])],1)],1)])},o=[],a=(n("dca8"),n("96cf"),n("1da1"));n("fb6a");function r(t){var e,n,i,o=t.buttonValue,a=t.selectionStart,r=t.selectionEnd,s=t.existingValue;return"backspace"===o?(a>0&&a===r&&(n=a-1),e=""):"del"===o?(a<s.length&&a===r&&(i=r+1),e=""):"space"===o?e=" ":"⬅"===o?(a<r?i=a:(n=Math.max(0,a-1),i=n),e=""):"➡"===o?(a<r?n=r:(n=Math.min(s.length,a+1),i=n),e=""):(e=o,n=a,i=r),{buttonValueMod:e,selectionStartMod:n,selectionEndMod:i}}var s={methods:{handleKeyboard:function(t){if(this.inputElement){var e=this.inputElement,n=e.selectionStart,i=e.selectionEnd,o=this.valueInternal,a=r({buttonValue:t,selectionStart:n,selectionEnd:i,existingValue:o}),s=a.buttonValueMod,c=a.selectionStartMod,u=a.selectionEndMod;e.value=o.slice(0,c)+s+o.slice(u,o.length),this.valueInternal=e.value,e.focus(),e.selectionStart=c+s.length,e.selectionEnd=c+s.length}}}},c={name:"Keyboard",props:["buttons","value","inputName"],mixins:[s],data:function(){return{inputElement:null,valueInternal:"",commonButtons:Object.freeze(["⬅","space","del","backspace","➡"])}},methods:{close:function(){this.$emit("close")},onInput:function(t){this.valueInternal=t},onSubmit:function(){this.$emit("submit",this.valueInternal),this.close()}},watch:{value:{immediate:!0,handler:function(t){this.valueInternal=t}}},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.inputElement=document.querySelector(".keyboard-wrapper .v-text-field input"),t.inputElement.focus();case 4:case"end":return e.stop()}}),e)})))()}},u=c,l=(n("8508"),n("2877")),h=n("6544"),d=n.n(h),f=n("8336"),v=n("8654"),p=Object(l["a"])(u,i,o,!1,null,"0d01649b",null);e["a"]=p.exports;d()(p,{VBtn:f["a"],VTextField:v["a"]})},"9b5e":function(t,e,n){},aaf8:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.disable?n("div",t._l(t.chunks,(function(e,i){return n("div",{key:"chunk"+i},[t._t("default",null,{items:e})],2)})),0):n("div",[t._t("default",null,{items:t.chunks[0]}),t._l(t.chunks.slice(1),(function(e,i){return n("v-lazy",{key:"chunk"+i,attrs:{options:{threshold:t.threshold},"min-height":t.minHeight},model:{value:t.scrollModel[i],callback:function(e){t.$set(t.scrollModel,i,e)},expression:"scrollModel[i]"}},[n("div",[t._t("default",null,{items:e})],2)])}))],2)])},o=[],a=n("2ef0"),r=n.n(a),s={name:"InfiniteScroll",props:{items:{default:function(){return[]}},chunkSize:{default:20},threshold:{default:.3},minHeight:{default:200},disable:{type:Boolean,default:!1}},data:function(){return{scrollModel:[]}},computed:{chunks:function(){return r.a.chunk(this.items,this.chunkSize)}}},c=s,u=n("2877"),l=n("6544"),h=n.n(l),d=n("5530"),f=n("24b2"),v=n("f2e7"),p=n("90a2"),m=n("58df"),g=n("80d2"),b=Object(m["a"])(f["a"],v["a"]).extend({name:"VLazy",directives:{intersect:p["a"]},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return Object(d["a"])({},this.measurableStyles)}},methods:{genContent:function(){var t=Object(g["n"])(this);if(!this.transition)return t;var e=[];return this.isActive&&e.push(t),this.$createElement("transition",{props:{name:this.transition}},e)},onObserve:function(t,e,n){this.isActive||(this.isActive=n)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}}),y=Object(u["a"])(c,i,o,!1,null,null,null);e["a"]=y.exports;h()(y,{VLazy:b})},c76d:function(t,e,n){"use strict";n("9b5e")},e4d3:function(t,e,n){"use strict";var i=n("2b0e");e["a"]=i["a"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},f573:function(t,e,n){"use strict";n("a9e3"),n("d3b7");var i=n("5530"),o=n("fe6c"),a=n("21be"),r=n("4ad4"),s=n("58df"),c=n("80d2"),u=Object(s["a"])(a["a"],o["a"],r["a"]);e["a"]=u.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,n=(!1!==this.attach?t.offsetLeft:t.left)||0,i=Math.max(t.width,e.width),o=0;if(o+=this.left?n-(i-t.width):n,this.offsetX){var a=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));o+=this.left?-a:t.width}return this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),o},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,n=0;return this.top&&(n+=t.height-e.height),!1!==this.attach?n+=t.offsetTop:n+=t.top+this.pageYOffset,this.offsetY&&(n+=this.top?-t.height:t.height),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),n},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(c["f"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(c["f"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var n=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&n>0?Math.max(t-n,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),n=this.pageYOffset+e,i=this.dimensions.activator,o=this.dimensions.content.height,a=t+o,r=n<a;return r&&this.offsetOverflow&&i.top>o?t=this.pageYOffset+(i.top-o):r&&!this.allowOverflow?t=n-o-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=r["a"].options.methods.genActivatorListeners.call(this),n=e.click;return e.click=function(e){t.openOnClick&&n&&n(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var n=window.getComputedStyle(t);e.left=parseInt(n.marginLeft),e.top=parseInt(n.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var n=e.$refs.content;n&&"none"===n.style.display?(n.style.display="inline-block",t(),n.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(i["a"])({},this.dimensions.activator),content:Object(i["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var n=this.getActivator();if(!n)return;e.activator=this.measure(n),e.activator.offsetLeft=n.offsetLeft,!1!==this.attach?e.activator.offsetTop=n.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){t.$refs.content&&(e.content=t.measure(t.$refs.content)),t.dimensions=e}))}}})},fd00:function(t,e,n){}}]);
//# sourceMappingURL=MaalulaCorpus~TuroyoCorpusSearch~TuroyoDictionaries~UrmiCorpusSearch.bb3bb68c.js.map