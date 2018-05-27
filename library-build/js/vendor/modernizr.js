window.Modernizr=function(e,t,n){function r(e){h.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&h[o]!==n)return"pfx"!=t||o}return!1}function c(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return!1===r?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+E.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?a(i,t):(i=(e+" "+x.join(r+" ")+r).split(" "),c(i,t,n))}var s,u,d={},f=t.documentElement,m="modernizr",p=t.createElement(m),h=p.style,v=t.createElement("input"),g=":)",y=" -webkit- -moz- -o- -ms- ".split(" "),b="Webkit Moz O ms",E=b.split(" "),x=b.toLowerCase().split(" "),C={},w={},T={},S=[],k=S.slice,N=function(e,n,r,o){var i,a,c,l,s=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:m+(r+1),s.appendChild(c);return i=["&#173;",'<style id="s',m,'">',e,"</style>"].join(""),s.id=m,(u?s:d).innerHTML+=i,d.appendChild(s),u||(d.style.background="",d.style.overflow="hidden",l=f.style.overflow,f.style.overflow="hidden",f.appendChild(d)),a=n(s,e),u?s.parentNode.removeChild(s):(d.parentNode.removeChild(d),f.style.overflow=l),!!a},j=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return N("@media "+t+" { #"+m+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},M=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var a=e in i;return a||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),a=o(i[e],"function"),o(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),F={}.hasOwnProperty;u=o(F,"undefined")||o(F.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return F.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=k.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(k.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(k.call(arguments)))};return r}),C.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:N(["@media (",y.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},C.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(h.backgroundColor,"rgba")},C.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(h.backgroundColor,"rgba")||i(h.backgroundColor,"hsla")},C.boxshadow=function(){return l("boxShadow")},C.csstransforms=function(){return!!l("transform")},C.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in f.style&&N("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},C.csstransitions=function(){return l("transition")};for(var $ in C)u(C,$)&&(s=$.toLowerCase(),d[s]=C[$](),S.push((d[s]?"":"no-")+s));return d.input||function(){d.input=function(n){for(var r=0,o=n.length;r<o;r++)T[n[r]]=n[r]in v;return T.list&&(T.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),T}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),d.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;a<c;a++)v.setAttribute("type",o=e[a]),r="text"!==v.type,r&&(v.value=g,v.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&v.style.WebkitAppearance!==n?(f.appendChild(v),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(v,null).WebkitAppearance&&0!==v.offsetHeight,f.removeChild(v)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?v.checkValidity&&!1===v.checkValidity():v.value!=g)),w[e[a]]=!!r;return w}("search tel url email datetime date month week time datetime-local number range color".split(" "))}(),d.addTest=function(e,t){if("object"==typeof e)for(var r in e)u(e,r)&&d.addTest(r,e[r]);else{if(e=e.toLowerCase(),d[e]!==n)return d;t="function"==typeof t?t():t,f.className+=" "+(t?"":"no-")+e,d[e]=t}return d},r(""),p=v=null,d._version="2.7.0",d._prefixes=y,d._domPrefixes=x,d._cssomPrefixes=E,d.mq=j,d.hasEvent=M,d.testProp=function(e){return a([e])},d.testAllProps=l,d.testStyles=N,d.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+S.join(" "),d}(this,this.document),function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=x[e[b]];return t||(t={},E++,e[b]=E,x[E]=t),t}function i(e,n,r){if(n||(n=t),h)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():y.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||g.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),h)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),l=c.length;a<l;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function l(e){e||(e=t);var r=o(e);return C.shivCSS&&!p&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),h||c(e,r),e}function s(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,i=RegExp("^(?:"+r().join("|")+")$","i"),a=[];o--;)t=n[o],i.test(t.nodeName)&&a.push(t.applyElement(u(t)));return a}function u(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(T+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function d(e){for(var t,n=e.split("{"),o=n.length,i=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+T+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(i,a),n[o]=t.join("}");return n.join("{")}function f(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,i,a=o(e),c=e.namespaces,l=e.parentWindow;return!S||e.printShived?e:(void 0===c[T]&&c.add(T),l.attachEvent("onbeforeprint",function(){t();for(var o,a,c,l=e.styleSheets,u=[],f=l.length,m=Array(f);f--;)m[f]=l[f];for(;c=m.pop();)if(!c.disabled&&w.test(c.media)){try{o=c.imports,a=o.length}catch(e){a=0}for(f=0;f<a;f++)m.push(o[f]);try{u.push(c.cssText)}catch(e){}}u=d(u.reverse().join("")),i=s(e),r=n(e,u)}),l.attachEvent("onafterprint",function(){f(i),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var p,h,v=e.html5||{},g=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,b="_html5shiv",E=0,x={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",p="hidden"in e,h=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){p=!0,h=!0}}();var C={elements:v.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==v.shivCSS,supportsUnknownElements:h,shivMethods:!1!==v.shivMethods,type:"default",shivDocument:l,createElement:i,createDocumentFragment:a};e.html5=C,l(t);var w=/^$|\b(?:all|print)\b/,T="html5shiv",S=!h&&function(){var n=t.documentElement;return void 0!==t.namespaces&&void 0!==t.parentWindow&&void 0!==n.applyElement&&void 0!==n.removeNode&&void 0!==e.attachEvent}();C.type+=" print",C.shivPrint=m,m(t)}(this,document),Modernizr.addTest("placeholder",function(){return"placeholder"in(Modernizr.input||document.createElement("input"))&&"placeholder"in(Modernizr.textarea||document.createElement("textarea"))});