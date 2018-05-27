/** @license MIT License (c) copyright 2011-2013 original author or authors */

!function(n){n(["require","./when"],function(n){var e,r;return e=n("./when"),r=Array.prototype.slice,function(n){return e.all(r.call(arguments,1)).then(function(r){return e.map(n,function(n){return n.apply(null,r)})})}})}("function"==typeof define&&define.amd?define:function(n){module.exports=n(require)});