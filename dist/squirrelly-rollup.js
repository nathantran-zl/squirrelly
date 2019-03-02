!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).Sqrl={})}(this,function(e){"use strict";var r=Object.freeze({get H(){return t},get Compile(){return x},get defineFilter(){return w},get defineHelper(){return y},get defineNativeHelper(){return m},get definePartial(){return F},get Render(){return $},get renderFile(){return _},get load(){return C},get __express(){return N},get F(){return c},get setDefaultFilters(){return g},get autoEscaping(){return h},get defaultTags(){return i}}),t={},S=/{{ *?(?:(?:(?:(?:([\w$]+ *?(?:[^\s\w($][^\n]*?)*?))|(?:@(?:([\w$]+:|(?:\.\.\/)+))? *(.+?) *))(?: *?(\| *?[\w$]+? *?)+?)?)|(?:([\w$]+) *?\(([^\n]*?)\) *?([\w$]*))|(?:\/ *?([\w$]+))|(?:# *?([\w$]+))|(?:([\w$]+) *?\(([^\n]*?)\) *?\/)|(?:!--[^]+?--)) *?}}\n?/g,k={s:"{{",e:"}}"},n=/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|[\\]@(?:[\w$]*:)?[\w$]+|@(?:([\w$]*):)?([\w$]+)/g,E=S,O=k;function i(e){l(e[0],e[1]),S=E,k=O}function l(e,n){var r=e+E.source.slice(O.s.length,0-(O.e.length+3))+n+"\\n?",t=E.lastIndex;O={s:e,e:n},(E=RegExp(r,"g")).lastIndex=t}function b(e){return e=e.replace(n,function(e,n,r){return void 0===r?e:(void 0===n&&(n=""),"hvals"+n+"."+r)})}var a={if:{helperStart:function(e){return"if("+e+"){"},helperEnd:function(){return"}"},blocks:{else:function(){return"}else{"}}},each:{helperStart:function(e,n){return"for(var i=0;i<"+e+".length; i++){tR+=(function(hvals){var tR='';var hvals"+n+"=hvals;"},helperEnd:function(e){return"return tR})({this:"+e+"[i],index:i})};"}},foreach:{helperStart:function(e,n){return"for(var key in "+e+"){if(!"+e+".hasOwnProperty(key)) continue;tR+=(function(hvals){var tR='';var hvals"+n+"=hvals;"},helperEnd:function(e){return"return tR})({this:"+e+"[key], key: key})};"}},log:{selfClosing:function(e){return"console.log("+e+");"}},tags:{selfClosing:function(e){return l(e.slice(0,e.indexOf(",")).trim(),e.slice(e.indexOf(",")+1).trim()),""}},js:{selfClosing:function(e){return e+";"}}};RUNTIME&&(a={});var q=a,s={"&":"&amp;","<":"&lt;",'"':"&quot;","'":"&#39;"};function o(e){return s[e]}var u=/[&<"']/g,f=/[&<"']/,c={e:function(e){var n=String(e);return f.test(n)?n.replace(u,o):n}},v={},d={start:"",end:""};function g(e){if("clear"===e)v={};else for(var n in e)e.hasOwnProperty(n)&&(v[n]=e[n]);!function(){for(var e in d={start:"",end:""},v)v.hasOwnProperty(e)&&v[e]&&(d.start+="Sqrl.F."+e+"(",d.end+=")")}()}var p=!0;function h(e){return p=e}function H(e,n){var r,t=!1,i="",l="";if(n&&""!==n){r=n.split("|");for(var a=0;a<r.length;a++)r[a]=r[a].trim(),""!==r[a]&&("safe"!==r[a]?(i="Sqrl.F."+r[a]+"("+i,l+=")"):t=!0)}return i+=d.start,l+=d.end,!t&&p&&(i+="Sqrl.F.e(",l+=")"),i+e+l}var I={};function R(e){var n,r,t,i,l,a,s=0,o="",u=[],f=-1,c=0,v={};for(O=k,(E=S).lastIndex=0;null!==(n=E.exec(e));)if(""===o?o+="var tR='"+e.slice(s,n.index).replace(/'/g,"\\'")+"';":s!==n.index&&(o+="tR+='"+e.slice(s,n.index).replace(/'/g,"\\'")+"';"),s=n[0].length+n.index,n[1])o+="tR+="+(l=n[1],a=n[4],H("options."+l,a))+";";else if(n[3])o+="tR+="+(r=n[3],t=n[2],i=n[4],H(void 0!==t?"hvals"+(/(?:\.\.\/)+/g.test(t)?u[f-t.length/3-1].id:t.slice(0,-1))+"."+r:"hvals."+r,i))+";";else if(n[5]){var d=n[7];""!==d&&null!==d||(d=c,c++);var g=q.hasOwnProperty(n[5]);f+=1;var p=n[6]||"";p=b(p),g||(p="["+p+"]");var h={name:n[5],id:d,params:p,native:g};u[f]=h,g?(o+=q[n[5]].helperStart(p,d),s=E.lastIndex):o+="tR+=Sqrl.H."+n[5]+"("+p+",function(hvals){var hvals"+d+"=hvals;var tR='';"}else if(n[8]){var R=u[f];R&&R.name===n[8]?(f-=1,!0===R.native?o+=q[R.name].helperEnd(R.params,R.id):v[R.id]?o+="return tR}});":o+="return tR});"):console.error("Helper beginning & end don't match.")}else if(n[9]){var x=u[f];if(x.native){var w=q[x.name];w.blocks&&w.blocks[n[9]]?(o+=w.blocks[n[9]](x.id),s=E.lastIndex):console.warn("Native helper '%s' doesn't accept that block.",x.name)}else v[x.id]?o+="return tR},"+n[9]+":function(hvals){var hvals"+x.id+"=hvals;var tR='';":(o+="return tR},{"+n[9]+":function(hvals){var hvals"+x.id+"=hvals;var tR='';",v[x.id]=!0)}else if(n[10]){var y=n[11]||"";if(y=b(y),"include"===n[10]){var m=e.slice(0,n.index),$=e.slice(n.index+n[0].length),F=y.replace(/'|"/g,"");e=m+I[F]+$,s=E.lastIndex=n.index}else q.hasOwnProperty(n[10])&&q[n[10]].hasOwnProperty("selfClosing")?(o+=q[n[10]].selfClosing(y),s=E.lastIndex):o+="tR+=Sqrl.H."+n[10]+"("+y+");"}return""===o?o+="var tR='"+e.slice(s,e.length).replace(/'/g,"\\'")+"';":s!==e.length&&(o+="tR+='"+e.slice(s,e.length).replace(/'/g,"\\'")+"';"),o+="return tR",new Function("options","Sqrl",o.replace(/\n/g,"\\n").replace(/\r/g,"\\r"))}RUNTIME&&(R={});var x=R;function w(e,n){c[e]=n}function y(e,n){t[e]=n}function m(e,n){q[e]=n}function $(e,n){return"function"==typeof e?e(n,r):"string"==typeof e?C(n,e)(n,r):void 0}function F(e,n){I[e]=n}var P={};function C(e,n){var r=e.$file,t=e.$name,i=e.$cache;if(!1===i)return x(n);if(r){if(P[r])return P[r];var l=require("fs").readFileSync(r,"utf8");return P[r]=x(l),P[r]}return t?P[t]?P[t]:n?(P[t]=x(n),P[t]):void 0:n?!0===i?(P[n]||(P[n]=x(n)),P[n]):x(n):"Error"}function _(e,n){return n.$file=e,C(n)(n,r)}function N(e,n,r){return r(null,_(e,n))}e.H=t,e.Compile=x,e.defineFilter=w,e.defineHelper=y,e.defineNativeHelper=m,e.definePartial=F,e.Render=$,e.renderFile=_,e.load=C,e.__express=N,e.F=c,e.setDefaultFilters=g,e.autoEscaping=h,e.defaultTags=i,Object.defineProperty(e,"__esModule",{value:!0})});
