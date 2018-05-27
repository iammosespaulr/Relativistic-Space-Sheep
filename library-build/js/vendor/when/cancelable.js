/** @license MIT License (c) copyright B Cavalier & J Hann */

!function(e){e(["require","./when"],function(e){var n=e("./when");return function(e,r){var i=n.defer();return e.cancel=function(){return e.reject(r(e))},e.promise.then(i.resolve,i.reject,i.notify),e.promise=i.promise,e}})}("function"==typeof define&&define.amd?define:function(e){module.exports=e(require)});