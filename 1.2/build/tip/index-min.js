/*! kcharts - v1.2 - 2013-11-21 5:59:26 PM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/tip/index",function(t,l,e,r,i,n){function s(l){if(l){var e=this,r={clsName:"ks-chart-default",autoRender:!0,isVisable:!1,boundry:{x:0,y:0,width:0,height:0},rootNode:a("body"),tpl:"",corner:{isShow:!1,tpl:"corner",css:{position:"absolute",marginLeft:0,marginTop:0}},anim:{easing:"easeOut",duration:.25},offset:{x:0,y:0},alignX:"left",alignY:"top"};e._events={MOVE:"move",SETCONT:"setcontent",HIDE:"hide"},e._cfg=t.mix(r,l,n,n,!0),e._cfg.rootNode=a(e._cfg.rootNode),e.init()}}var a=t.all;return t.Event,t.augment(s,l,{init:function(){var t=this,l=t._cfg;t._data={},t._tpl=l.tpl,t.$tip,t.bindEvent(),l.autoRender&&t.render()},bindEvent:function(){var l=this,e=l._cfg.template,r=l._events;l.on(r.MOVE,function(t){var e=t.x,r=t.y,i=t.style;l.isVisable()&&l._cfg.anim?l.animateTo(e,r):l.moveTo(e,r),i&&l.$tip.css(i)}),l.on(r.SETCONT,function(r){t.isFunction(e)?l.setContent(e(r.data)):l.renderTemplate(e,r.data)}),l.on(r.HIDE,function(){l.hide()})},getInstance:function(){return this.$tip},isVisable:function(){return"none"==this.$tip.css("display")?!1:!0},show:function(){var t=this;return t.$tip&&t.$tip.show(),t},hide:function(){var t=this;return t.$tip&&t.$tip.stop()&&t.$tip.hide(),t},moveTo:function(t,l){var e=this;e._prevtime=(new Date).getTime(),e.show();var r=e.getInstance(),i=e._cfg,n=(e._cfg.anim,e.getPos(t,l)),s=(i.corner.css["margin-top"]||i.corner.css.marginTop||0,i.corner.css["margin-left"]||i.corner.css.marginLeft||0),a=e.$corner;a&&a.css({"margin-left":s+t-n.x}),r.css({"margin-top":n.y,"margin-left":n.x})},animateTo:function(t,l,e){var r=this,i=r._cfg,n=i.anim,s=(new Date).getTime();r._prevtime&&100>s-r._prevtime&&r.animateFast(t,l,e),r.show(),r._prevtime=(new Date).getTime();var a=r.getInstance(),o=r.getPos(t,l),h=(i.corner.css["margin-top"]||i.corner.css.marginTop||0,i.corner.css["margin-left"]||i.corner.css.marginLeft||0),c=r.$corner;c&&c.css({"margin-left":h+t-o.x}),a.stop().animate({"margin-top":o.y,"margin-left":o.x},n.duration,n.easing,function(){e&&e()})},animateFast:function(t,l,e){var r,i,s=this,a=s.get("x"),o=s.get("y"),h=.2;s._prevtime=(new Date).getTime(),s.show(),a!==n&&(r=a/1+(t-a)*h,i=o/1+(l-o)*h);var c=s.getInstance(),x=s._cfg,y=s._cfg.anim,f=s.getPos(r,i),u=(x.corner.css["margin-top"]||x.corner.css.marginTop||0,x.corner.css["margin-left"]||x.corner.css.marginLeft||0),d=s.$corner;d&&d.css({"margin-left":u+t-f.x}),c.css({"margin-top":f.y,"margin-left":f.x});var p=s.getPos(t,l);c.stop().animate({"margin-top":p.y,"margin-left":p.x},y.duration,y.easing,function(){e&&e()})},renderTemplate:function(t,l){return this.setContent(i(t).render(l))},setContent:function(t){return a("."+this._cfg.clsName+"-tip-content",this.$tip).html(t)},getPos:function(t,l){var e=this,r=e._cfg,i=r.offset,n=l+i.y,s=t+i.x,a=r.alignX,o=r.alignY,h=e.getInstance(),c=h.outerWidth(),x=h.outerHeight(),y=r.boundry;switch(e.set("x",t||0),e.set("y",l||0),a){case"center":s=Math.round(t)+i.x-c/2;break;case"right":s=Math.round(t)+i.x-c}switch(o){case"middle":n=Math.round(l)+i.y-x/2;break;case"bottom":n=Math.round(l)+i.y-x}if(y.width&&y.height){var f=y.x||0,u=y.y||0,d=y.width,p=y.height;u>n?n=l- -Math.abs(i.y):n>u+p-x&&(n=l-x-Math.abs(i.y)),f>s?s=t- -Math.abs(i.x):s>f+d-c&&(s=t-c-Math.abs(i.x))}return{x:s,y:n}},_isExist:function(){return this.$tip&&this.$tip[0]},render:function(){var t=this,l=t._cfg,e=t._tpl,r=t._data,i=l.isVisable?"inline-block":"none",s=l.rootNode.offset();if(l.rootNode.offset())return t.$tip=!t._isExist()&&a('<span class="'+l.clsName+'-tip" style="*zoom:1;"><span class="'+l.clsName+'-tip-content"></span></span>').css({display:i}).appendTo(l.rootNode),t.$corner=l.corner.isShow&&l.corner.tpl?a("<div class='"+l.clsName+"-corner'>"+l.corner.tpl+"</div>").css(l.corner.css).appendTo(t.$tip):n,t.$tip.css({"margin-top":s.top+l.offset.y,"margin-left":s.left+l.offset.x,position:"absolute"}),t.renderTemplate(e,r),t.$tip}}),t.KCharts&&t.KCharts.Tip||t.namespace("KISSY.KCharts"),t.KCharts.Tip=s,s},{requires:["base","node","anim","gallery/template/1.0/index","./assets/tip.css"]});