!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).Sqrl={})}(this,function(e){"use strict";var n=Object.freeze({get H(){return r},get defineFilter(){return l},get defineHelper(){return p},get definePartial(){return F},get Render(){return g},get F(){return o},get setDefaultFilters(){return c},get autoEscaping(){return d}}),r={},t={"&":"&amp;","<":"&lt;",'"':"&quot;","'":"&#39;"};function i(e){return t[e]}var u=/[&<"']/g,f=/[&<"']/,o={e:function(e){var t=String(e);return f.test(t)?t.replace(u,i):t}},a={},s={start:"",end:""};function c(e){if("clear"===e)a={};else for(var t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);!function(){for(var e in s={start:"",end:""},a)a.hasOwnProperty(e)&&a[e]&&(s.start+="Sqrl.F."+e+"(",s.end+=")")}()}function d(e){return e}function l(e,t){o[e]=t}function p(e,t){r[e]=t}function g(e,t){return"function"==typeof e?e(t,n):"Err: Function must be 1st arg"}function F(e,t){}e.H=r,e.defineFilter=l,e.defineHelper=p,e.definePartial=F,e.Render=g,e.F=o,e.setDefaultFilters=c,e.autoEscaping=d,Object.defineProperty(e,"__esModule",{value:!0})});
