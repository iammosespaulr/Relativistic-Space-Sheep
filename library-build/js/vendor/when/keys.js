/** @license MIT License (c) copyright 2011-2013 original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author Brian Cavalier
 * @author John Hann
 */

!function(n){"use strict";n(["require","./when"],function(n){function e(n){return t(n,r)}function t(n,e){return u(n,function(n){function t(t,r,i){var o,c;o={},c=0,f(n,function(n,f){++c,u(n,e).then(function(n){o[f]=n,--c||t(o)},r,i)}),c||t(o)}return i(t)})}function r(n){return n}var u,i,o,f,c;return u=n("./when"),i=u.promise,o={all:e,map:t},c={}.hasOwnProperty,f=Object.keys?function(n,e){Object.keys(n).forEach(function(t){e(n[t],t)})}:function(n,e){for(var t in n)c.call(n,t)&&e(n[t],t)},o})}("function"==typeof define&&define.amd?define:function(n){module.exports=n(require)});