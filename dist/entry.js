!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define("sign",["vue"],t):"object"==typeof exports?exports.sign=t(require("vue")):e.sign=t(e.Vue)}("undefined"!=typeof self?self:this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={name:"sign",data:function(){return{dataBase:""}},props:{width:{type:Number,default:300},height:{type:Number,default:200},lineWidth:{type:Number,default:2},strokeColor:{type:String,default:"red"},background:{type:String,default:"transparent"},showBtn:{type:Boolean,default:!0}},mounted:function(){var e=this;this.$refs.cav.addEventListener("touchmove",function(e){e.preventDefault(),e.stopPropagation()});var t=window.orientation||0===window.orientation?window.orientation:screen.orientation.angle;console.log("angel",t),this.canvasInit(t),window.addEventListener("orientationchange",function(n){console.log(n),console.log(n.orientation||t),e.$nextTick(function(){e.canvasInit(n.orientation||t)})})},methods:{canvasInit:function(e){var t=this,n=this.$refs.cav;if(!n)return!1;n.height=n.clientHeight,n.width=n.clientWidth;var o=n.offsetTop,r=n.offsetLeft,i=n.getContext("2d");i.lineWidth=this.lineWidth,i.strokeStyle=this.strokeColor;var a={};n.ontouchstart=function(e){a.x=e.touches[0].clientX-r,a.y=e.touches[0].clientY-o},n.ontouchmove=function(e){t.hasWrite=!0;var n=0,s=0;n=e.touches[0].clientX-r,s=e.touches[0].clientY-o,i.beginPath(),i.moveTo(a.x,a.y),i.lineTo(n,s),i.stroke(),i.closePath(),a.x=n,a.y=s},n.ontouchup=function(e){console.log("up")},n.ontouchend=function(e){console.log("uend"),t.showBtn||t.compelete()}},clear:function(){var e=this.$refs.cav;e.getContext("2d").clearRect(0,0,e.width,e.height),this.hasWrite=!1},compelete:function(){var e=this.$refs.cav;this.dataBase=e.toDataURL("image/png"),console.log("this.dataBase",this.dataBase),this.$emit("complete",this.dataBase)}}},document.addEventListener("touchmove",function(e){e.preventDefault()},{passive:!1})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=n(10),i=n.n(r);"undefined"!=typeof window&&window.Vue&&window.Vue.component("sign",o.a),o.a.install=function(e){e||(window.Vue=e=i.a),e.component(o.a.name,o.a)},t.default=o.a},function(e,t,n){"use strict";function o(e){n(3)}var r=n(0),i=n(9),a=n(8),s=o,c=a(r.a,i.a,!1,s,null,null);t.a=c.exports},function(e,t,n){var o=n(4);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(6)("a79412b8",o,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,".sign-main{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.sign-main,.sign-main .btnGroup{display:-webkit-box;display:-ms-flexbox;display:flex}.sign-main .btnGroup{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:10px}.btnGroup span{margin-right:15px;padding:5px 13px;background:#409eff;color:#fff;border-radius:4px}",""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=f[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(i(n.parts[r]));f[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function i(e){var t,n,o=document.querySelector("style["+m+'~="'+e.id+'"]');if(o){if(h)return v;o.parentNode.removeChild(o)}if(b){var i=p++;o=d||(d=r()),t=a.bind(null,o,i,!1),n=a.bind(null,o,i,!0)}else o=r(),t=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function a(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),g.ssrId&&e.setAttribute(m,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(7),f={},l=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,v=function(){},g=null,m="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,r){h=n,g=r||{};var i=u(e,t);return o(i),function(t){for(var n=[],r=0;r<i.length;r++){var a=i[r],s=f[a.id];s.refs--,n.push(s)}t?(i=u(e,t),o(i)):i=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete f[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=i[0],s=i[1],c=i[2],u=i[3],f={id:e+":"+r,css:s,media:c,sourceMap:u};o[a]?o[a].parts.push(f):n.push(o[a]={id:a,parts:[f]})}return n}},function(e,t){e.exports=function(e,t,n,o,r,i){var a,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(a=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId=r);var f;if(i?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=f):o&&(f=o),f){var l=u.functional,d=l?u.render:u.beforeCreate;l?(u._injectStyles=f,u.render=function(e,t){return f.call(t),d(e,t)}):u.beforeCreate=d?[].concat(d,f):[f]}return{esModule:a,exports:s,options:u}}},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sign-main"},[n("canvas",{ref:"cav",style:"width: "+e.width+"px;height: "+e.height+"px;background:"+e.background}),e._v(" "),e.showBtn?n("div",{staticClass:"btnGroup",style:"justify-content: flex-start"},[n("span",{on:{click:e.clear}},[e._v("清除")]),e._v(" "),n("span",{on:{click:e.compelete}},[e._v("保存")])]):e._e()])},r=[],i={render:o,staticRenderFns:r};t.a=i},function(t,n){t.exports=e}])});