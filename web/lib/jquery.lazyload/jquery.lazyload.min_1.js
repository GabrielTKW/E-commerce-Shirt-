!function(t,e,o,i){"use strict";var n=t(e);t.fn.lazyload=function(i){function r(){var e=0;f.each(function(){var o=t(this);if(!l.skip_invisible||o.is(":visible"))if(t.abovethetop(this,l)||t.leftofbegin(this,l));else if(t.belowthefold(this,l)||!o.closest(".owl-carousel").length&&t.rightoffold(this,l)){if(++e>l.failure_limit)return!1}else o.trigger("appear"),e=0})}var a,f=this,l={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:e,data_attribute:"original",data_srcset:"srcset",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return i&&(void 0!==i.failurelimit&&(i.failure_limit=i.failurelimit,delete i.failurelimit),void 0!==i.effectspeed&&(i.effect_speed=i.effectspeed,delete i.effectspeed),t.extend(l,i)),a=void 0===l.container||l.container===e?n:t(l.container),0===l.event.indexOf("scroll")&&a.bind(l.event,function(){return r()}),this.each(function(){var e=this,o=t(e);e.loaded=!1,void 0!==o.attr("src")&&!1!==o.attr("src")||o.is("img")&&o.attr("src",l.placeholder),o.one("appear",function(i){if(!this.loaded){if(l.appear){var n=f.length;l.appear.call(e,n,l)}var r=o.attr("data-oi")?"data-oi":"data-"+l.data_attribute;t("<img />").bind("load",function(){var i=o.attr(r),n=o.attr("data-"+l.data_srcset);o.is("img")?(o.hide().addClass("no-transition"),o.attr("src",i),n&&o.attr("srcset",n),o[l.effect](l.effect_speed,function(){o.removeClass("no-transition")})):o.css("background-image","url('"+i+"')").removeAttr(r),e.loaded=!0;var a=t.grep(f,function(t){return!t.loaded});if(f=t(a),l.load){var d=f.length;l.load.call(e,d,l)}}).attr("src",o.attr(r))}}),0!==l.event.indexOf("scroll")&&o.bind(l.event,function(){e.loaded||o.trigger("appear")}),o.is(":hidden")&&!e.loaded&&o.trigger("appear")}),n.bind("resize",function(){r()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&n.bind("pageshow",function(e){e.originalEvent&&e.originalEvent.persisted&&f.each(function(){t(this).trigger("appear")})}),t(o).ready(function(){r()}),this},t.belowthefold=function(o,i){return(void 0===i.container||i.container===e?(e.innerHeight?e.innerHeight:n.height())+n.scrollTop():t(i.container).offset().top+t(i.container).height())<=t(o).offset().top-i.threshold},t.rightoffold=function(o,i){return(void 0===i.container||i.container===e?n.width()+n.scrollLeft():t(i.container).offset().left+t(i.container).width())<=t(o).offset().left-i.threshold},t.abovethetop=function(o,i){return(void 0===i.container||i.container===e?n.scrollTop():t(i.container).offset().top)>=t(o).offset().top+i.threshold+t(o).height()},t.leftofbegin=function(o,i){return(void 0===i.container||i.container===e?n.scrollLeft():t(i.container).offset().left)>=t(o).offset().left+i.threshold+t(o).width()},t.inviewport=function(e,o){return!(t.rightoffold(e,o)||t.leftofbegin(e,o)||t.belowthefold(e,o)||t.abovethetop(e,o))},t.extend(t.expr[":"],{"below-the-fold":function(e){return t.belowthefold(e,{threshold:0})},"above-the-top":function(e){return!t.belowthefold(e,{threshold:0})},"right-of-screen":function(e){return t.rightoffold(e,{threshold:0})},"left-of-screen":function(e){return!t.rightoffold(e,{threshold:0})},"in-viewport":function(e){return t.inviewport(e,{threshold:0})},"above-the-fold":function(e){return!t.belowthefold(e,{threshold:0})},"right-of-fold":function(e){return t.rightoffold(e,{threshold:0})},"left-of-fold":function(e){return!t.rightoffold(e,{threshold:0})}})}(jQuery,window,document);