!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.emojiConvert=t():e.emojiConvert=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&(e+"").trim()},o=/\[(.*?)\]/g,u=function(e,t,r){return['<img class="',e,'" src="',t,'" alt="[',r,']">'].join("")},c=[],i={},f={extend:function(e){Array.isArray(e)&&(e.forEach(function(e){var t=e.code;if(null!=t){if("string"!=typeof t)throw e.code=null,new Error(JSON.stringify(e)+": code muse be String");e.reg=new RegExp(t,"g"),i[e.text]=e}}),c=c.concat(e))},toUnicode:function(e){return(e=n(e))?e.replace(o,function(e,t){var r=i[t];return r&&r.code||e}):e},toText:function(e){return(e=n(e))?(c.forEach(function(t){t.code&&(e=e.replace(t.reg,"["+t.text+"]"))}),e):e},toHtml:function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((e=n(e))&&(e=e.replace(o,function(e,r){return(t=i[r])?u(t.class,t.url,t.text):e}),!r))return c.forEach(function(t){t.code&&(e=e.replace(t.reg,function(){return u(t.class,t.url,t.text)}))}),e}};t.default=f,e.exports=t.default}])});