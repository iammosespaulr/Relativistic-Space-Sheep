define(["jquery","json!site-config"],function(e,t){"use strict";function r(r,a,n,s){var p,i,u;if(a&&"string"==typeof a||(s=n,n=a,a=r,r="GET"),s=s||{},a=a.split("."),a.length<2)throw'Malformed api rule parameter "'+a.join(".")+'". Must be of form "<scope>.<service>"';for(p=t[a[0]],i=p.services[a[1]],"string"==typeof i&&(i={path:i,params:{}}),s.type=r,s.dataType=s.dataType||p.dataType||"json",u=o(i.path,n).replace(f,""),s.url=(p.base||"")+u,s.data=e.extend({},i.params,n);u=c.exec(i.path)&&RegExp.$2;)(i.params&&void 0===i.params[u]||null===s.data[u])&&delete s.data[u];return s}function a(e,t){var r,a=typeof t;return("string"===a||arguments.length>2)&&(t=Array.prototype.slice.call(arguments),t.shift()),r="object"===a,e.replace(i,function(e,a,o,n){var s="("===e.charAt(0),p=r?t[a]:t[~~a];if(void 0===p&&!s)throw"Non-optional path parameter "+e+" not specified.";return p||0===p?encodeURIComponent(p):""})}function o(e,t){return("string"==typeof t||arguments.length>2)&&(t=Array.prototype.slice.call(arguments),t.shift()),e.replace(c,function(e,r,a,o,n){var s=t[a];switch(r){case"+":s=s.replace(/\s/g,"%20");break;default:s=encodeURIComponent(s)}return s||0===s?s:""})}function n(t){return"object"==typeof t||e.isArray(t)?JSON.stringify(t):t.toString()}function s(t,r){var a,o=r&&n(r);return o&&(a=u[o])?a:(a=e.Deferred(t),a.always(function(){delete u[o]}),u[o]=a.promise())}function p(t,r,a){var o;if("parsererror"!==r)try{o=e.parseJSON(t.responseText).meta.error}catch(e){o={}}else o={code:0,message:"Parse error"};return{code:o.code||t.status,message:o.message,type:o.type,httpStatus:a,httpCode:t.status}}t=t.api;var i=/\(?:([\w]+)\)?/g,c=/\{([+]?)([\w]+)\}/g,f=/\/$/,u={};return{prepare:r,pathParams:a,uriTemplate:o,publicDfd:s,formatError:p}});