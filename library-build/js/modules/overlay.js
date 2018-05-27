/*! Copyright (c) 2008 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
         * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
         * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
         */

define(["jquery","stapes","require","tpl!templates/overlay.tpl"],function(t,e,n,i){"use strict";function o(){if(!1===p)if(t("html.lt-ie9").length){var e=t('<textarea cols="10" rows="2"></textarea>').css({position:"absolute",top:-1e3,left:-1e3}).appendTo(f),n=t('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>').css({position:"absolute",top:-1e3,left:-1e3}).appendTo(f);p=e.width()-n.width(),e.add(n).remove()}else{var i=t("<div />").css({width:100,height:100,overflow:"auto",position:"absolute",top:-1e3,left:-1e3}).prependTo(f).append("<div />").find("div").css({width:"100%",height:200});p=100-i.width(),i.parent().remove()}return p}function s(e){var n=t(e),i=n.first(),o=i.scrollTop();return n.length?(i.scrollTop(o-(0!==o?2:-2)),i.scrollTop()!==o?(i.scrollTop(o),i):s(n.not(i))):n}function r(e,i){var o;return h?h.compile(e).render(i):(o=t.Deferred(),n(["dot"],function(t){h=t,o.resolve(r(e,i))}),o.promise())}function c(t){this.isOpen=!1,this.attached=!1,this.setOptions(t),this.init()}var h,f,a=null,d={},l=!0;t(function(){f=t("body"),"function"==typeof l&&l(),l=!1});var p=!1;return c.prototype={setOptions:function(e){this.config=t.extend(this.config||{content:!1,dataType:"html",type:"GET",wrapClassName:"",template:i,duration:500,detachOnClose:!1,filter:null},e)},init:function(){this.dfds={}},getDfd:function(e){var n=this.dfds[e],i=void 0===n||"pending"!==n.state();return i&&(n=this.dfds[e]=t.Deferred()),{dfd:n,init:i}},render:function(){if(this.el)return!0;var e=this,n=this.getDfd("render");return n.init&&t.when(this.makeModel()).then(function(){"string"==typeof e.config.template?t.when(r(e.config.template,e.model)).then(function(i){e.el=t(i),n.dfd.resolve(this)}):(e.el=t(e.config.template.render(e.model)),n.dfd.resolve(this))}),n.dfd.promise()},makeModel:function(){if(this.model)return!0;var e=this,n=this.getDfd("makeModel");return n.init&&t.when(this.getContent(!0)).then(function(){e.model={content:e.content,wrapClassName:"overlay-wrap "+e.config.wrapClassName},n.dfd.resolve()}),n.dfd.promise()},getContent:function(e){var n=this;if(!this.content||!e)if("object"==typeof this.config.content)this.content=this.config.content;else if(this.config.content.match(" "))this.content=this.config.content;else{if(!this.config.content.match(/^#/))return t.ajax({url:this.config.content,type:this.config.type,data:this.config.dataString,dataType:this.config.dataType}).then(function(e){t.isFunction(n.config.filter)?n.content=n.config.filter(e):n.content=e});this.content=t(this.config.content).html()}return this.content},attach:function(e){var n,i=this;return this.attached?(e&&e(this),this):(n=this.getDfd("attach"),n.init&&t.when(this.render()).then(function(){i.attached||(i.attached=!0,i.el.hide().appendTo(f),i.el=i.el.filter(function(){return 1===this.nodeType})),n.dfd.resolve(),e&&e(this)}),n.dfd.promise())},detach:function(e){var n,i=this;return this.attached?(n=this.getDfd("detach"),n.init&&t.when(this.close()).then(function(){i.attached&&(i.attached=!1,i.el.detach()),n.dfd.resolve(),e&&e(this)}),n.dfd.promise()):(e&&e(this),this)},on:function(){var e=this,n=arguments;t.when(this.attach()).then(function(){t.fn.on.apply(e.el,n)})},open:function(e){var n,i=this;return this.isOpen?(e&&e(this),this):(n=this.getDfd("open"),n.init&&t.when(this.attach()).then(function(){i.isOpen?e&&e(this):(i.isOpen=!0,i.el.css("top",s("html, body").scrollTop()||0).fadeIn(i.config.duration,function(){n.dfd.resolve(),e&&e(this)}))}),n.dfd.promise())},close:function(t){var e,n=this;return this.isOpen?(e=this.getDfd("close"),e.init&&this.el.fadeOut(this.config.duration,function(){n.config.detachOnClose&&n.detach(),t&&t(this),n.isOpen=!1,e.dfd.resolve()}),e.dfd.promise()):(t&&t(this),this)}},new(e.subclass({open:function(e,n){var i,r,h=this,p="string"==typeof e.content?e.content:JSON.stringify(e.content);if(!e.content)throw"You need to set options.content";return l?(l=function(){h.open(e,n)},this):(i=t.Deferred(),r=d[p],a&&a!==r?a.detach(i.resolve):i.resolve(),t.when(i.promise()).then(function(){!e.refresh&&r?a=r:(p in d&&(r.detach(),d[p]=!1),e=t.extend({closeButtons:".close, .inner",scrollfix:!0},e),a=d[p]=new c(e),a.on({click:function(n){t(n.target).is(e.closeButtons)&&(n.preventDefault(),h.close())}},e.closeButtons),h.on("open",function(t,n){h.off(n.type,n.handler),h.emit("create",e)}));var i=s("html, body");if(a.config.scrollfix&&i.length){i.css({paddingRight:"+="+o()+"px"}),f.css("overflow","hidden"),t(".sticky").css("width",function(){var e=t(this);return e.width()<parseInt(e.css("maxWidth"),10)?"-="+o()+"px":""});var l;h.on("close",l=function(){i.css({paddingRight:""}),f.css("overflow",""),h.off("close",l)})}f.addClass("overlay-on"),a.open(function(){n&&n(),h.emit("open",h)})}),this)},close:function(e){var n=this;return l?(l=!0,this):(f.removeClass("overlay-on"),t(".sticky").css("width",""),a.close(function(){e&&e(),n.emit("close",n)}),this)},getElement:function(){return a?a.el:null}}))});