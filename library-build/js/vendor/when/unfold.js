/** @license MIT License (c) copyright B Cavalier & J Hann */

!function(n){n(["require","./when"],function(n){var e;return e=n("./when"),function n(r,u,t,i){return e(i,function(i){function f(i,f){return e(t(i),function(){return n(r,u,t,f)})}return e(u(i),function(n){return n?i:e.resolve(r(i)).spread(f)})})}})}("function"==typeof define&&define.amd?define:function(n){module.exports=n(require)});