/*! kcharts - v1.2 - 2014-01-07 2:19:46 PM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/piechart/util",function(l,e,t,i){function r(l){function e(l){for(var n=0,s=l.length;s>n;n++)i.call(l[n])==r?e(l[n]):t.push(l[n])}var t=[],i=Object.prototype.toString,r=i.call(l);return e(l),t}function n(e,t){function i(e,n){for(var s=0,x=e.length;x>s;s++)l.isArray(e[s])?i(e[s],n++):t(e[s])&&(r[n]||(r[n]=[]),r[n].push(e[s]))}var r=[];return i(e,0),r}function s(e,t){function i(e,r){for(var x=0,a=e.length;a>x;x++)if(l.isArray(e[x].data)){var y=r.push(l.mix({},e[x],!0,["label"]));r[y].data=[],i(e[x].data,r[y].data)}else{var o=e[x].data,c=o/s;t(o,c)?r.push(e[x]):n+=e[x].data}}var r=[],n=0,s=o(e);return i(e,r),r.push({label:"其它",data:n}),r}function x(l){function e(l){for(var t,i=[],r=0,n=l.length;n>r;r++)"object"==typeof l[r].data&&i.push(1+e(l[r].data));return t=i.length?Math.max.apply(null,i):0}var t=e(l);return t+1}function a(l,e){for(var t=0,i=0,r=l.length;r>i;i++){var n=e(l[i]);n&&(t+=n)}return t}function y(e){return a(e,function(e){return e.value&&l.isNumber(e.value)?e.value:0})}function o(e){for(var t=0,i=0,r=e.length;r>i;i++)t+=l.isArray(e[i].data)?o(e[i].data):e[i].data;return t}function c(l){function e(l,n,s){for(var x=0,a=l.length;a>x;x++){var y;if(y=s?s:x+1,w(l[x].data)){var c=o(l[x].data);l[x].value=c,i[n]||(i[n]=[]),i[n].push(l[x]),r[y-1]||(r[y-1]=[]),r[y-1].push(l[x]),e(l[x].data,n+1,y)}else{if(l[x].value=l[x].data,i[n]||(i[n]=[]),i[n].push(l[x]),t-1>n){var h=n+1;for(l[x].crossdepth=n;t>h;)i[h]||(i[h]=[]),i[h].push(l[x]),h++}r[y-1]||(r[y-1]=[]),r[y-1].push(l[x])}}}var t,i=[],r=[],n={};return t=x(l),e(l,0),n.groups=i,n.set=r,n}function h(l,e){var t,i=this.el.get("start"),r=this.prev,n=this.el.get("donutIndex");n&&(i=r.el.get("end")),t=i-e,this.el.set("start",i),this.el.set("end",t)}function v(l,t){var i=t.get("rs"),r=[],n=t.get("interval")||2,s=t.get("paper"),x=t.get("cx"),a=t.get("cy"),o=t.get("pathcfg"),c=!!t.get("donut"),v=t.get("initdeg");void 0==v&&(v=90);for(var f=0,d=l.length;d>f;f++)for(var p=s.set(),g=y(l[f]),u=0,_=0,m=l[f].length;m>_;_++){var b,w,k=l[f],L=k[_],C="number"==typeof L.crossdepth;if(!(C&&d-1>f)){b=f?C?0==L.crossdepth?[i[f]]:[i[L.crossdepth-1]+n,i[f]]:[i[f-1]+n,i[f]]:i[f],c&&1==d&&(b=[i[0],i[1]]),L.el=new e({paper:s,cx:x,cy:a,r:b,start:v,end:v-1,pathcfg:o,framedata:L}),w=L.el.get("$path"),p.push(w),L.el.set("group",p),L.el.set("groupLength",d),L.el.set("framedata",L);var S=[];if(C)for(var A=L.crossdepth;d>A;)S.push(A),A++;else S.push(f);L.el.set("groupIndex",S),L.el.set("donutIndex",_),L.el.set("label",L.label||""),r.push(L.el),function(l){L.el.on("mouseout",function(){t.fire("mouseout",{sector:l})}),L.el.on("mouseover",function(){t.fire("mouseover",{sector:l})}),L.el.on("click",function(){t.fire("click",{sector:l})})}(L.el),L.frame=h,L.from||(L.from={}),L.to||(L.to={}),L.percent=L.value/g,L.from.deg=0,L.to.deg=_==m-1?360-u:360*L.percent,u+=360*L.percent,L.prev=_>0?k[_-1]:k[m-1],L.next=m-1>_?k[_+1]:k[0]}}return r}function f(l,e){for(var t=e.get("paper"),i=0,r=l.length;r>i;i++)for(var n=t.set(),s=0,x=l[i].length;x>s;s++){var a=l[i][s],y=a.el,o=y.get("$path");n.push(o),y.set("set",n)}}function d(l){var e;return(!l||0>l||l>1)&&(e=.1),e}function p(l,e,t){if(t||(t=0),l){this.color=l;var r,n,s,x,a,y=i.getRGB(l);r=i.rgb2hsb(y),n=r.h,s=r.s,x=r.b,a=(s-t)/e,this.step=a,this.h=n,this.s=s,this.b=x}}function g(l,e,r){for(var n=e.get("paper"),s=e.get("color"),x=new t,a=s&&s.initial,y=a&&i.getRGB(a),o=s&&d(s.min),c=new p(y,r,o),h=0,v=y,f=e.get("gradient"),g=0,u=l.length;u>g;g++)for(var _=(n.set(),l[g][0].color),m=l[g].length,b=new p(_,m),w=0,k=l[g].length;k>w;w++){var L,C=l[g][w],S=C.el,A=S.get("framedata"),M=S.get("$path");if(C.color)L=C.color;else{var T;if(T=b.getColor())L=T;else{var E=c.getColor();L=E?E:x.getColor(g+w).DEFAULT}}M.attr("fill",L);var P=A.gradientcolor||v;f&&M.attr("gradient",h+A.to.deg/2+"-"+P+"-"+L),h+=A.to.deg,v=L}}function u(e){e=n(e,function(l){var e=l.el.get("$path");return l.hide?(e.hide(),!1):(e.show(),!0)});for(var t=0,i=e.length;i>t;t++)for(var r=e[t],s=a(r,function(e){return e.value&&!e.hide&&l.isNumber(e.value)?e.value:0}),x=0,y=0,o=r.length;o>y;y++){var c=r[y];c.el.get("$path"),c.percent=c.value/s,c.to.deg=y==o-1?360-x:360*c.percent,x+=360*c.percent,c.prev=y>0?r[y-1]:r[o-1],c.next=o-1>y?r[y+1]:r[0]}}function _(l){for(l%=360;0>l;)l+=360;return l>=0&&90>=l||l>270&&360>=l?!0:!1}function m(l){var e=c(l.get("data")),t=v(e.groups,l);l.get("color"),l.get("hsb");var i=r(e.groups);return f(e.set,l),g(e.set,l,i.length),{$sectors:t,groups:e.groups,set:e.set,framedata:i}}function b(l,e,t){return t||(t=5),t>Math.abs(l-e)}var w=l.isArray;p.prototype.getColor=function(){var l;return this.color&&(l="hsb("+[this.h,this.s-=this.step,this.b].join(",")+")"),l};var k={initPath:m,fillColor:g,adjustFrameData:u,isRightAngel:_,filterdata:s,closeto:b};return k},{requires:["gallery/kcharts/1.2/piechart/sector","gallery/kcharts/1.1/tools/color/index","gallery/kcharts/1.1/raphael/index"]}),KISSY.add("gallery/kcharts/1.2/piechart/sector",function(l,e){function t(l,e,t,i,r){Math.abs(i-r)>=360&&(r+=.01),i==r&&(r-=.1);var n,s=Math.PI/180,x=(i+r)/2,a=l+t*Math.cos(-x*s),y=l+.5*t*Math.cos(-x*s),o=l+t*Math.cos(-i*s),c=l+t*Math.cos(-r*s),h=e+t*Math.sin(-x*s),v=e+.5*t*Math.sin(-x*s),f=e+t*Math.sin(-i*s),d=e+t*Math.sin(-r*s),p=+(Math.abs(i-r)>180),g=1;return n=["M",l,e,"L",o,f,"A",t,t,0,p,g,c,d,"z"],n.middleangle=x,n.middlex=a,n.middley=h,n.cx=y,n.cy=v,n.A=[o,f],n.B=[c,d],n}function i(l,e,t,i,r,n){Math.abs(r-n)>=360&&(n+=.01),r==n&&(n-=.1);var s=Math.PI/180,x=(r+n)/2,a=l+i*Math.cos(-x*s),y=l+(t+.5*(i-t))*Math.cos(-x*s),o=(l+t*Math.cos(-x*s),l+t*Math.cos(-r*s)),c=l+t*Math.cos(-n*s),h=l+i*Math.cos(-r*s),v=l+i*Math.cos(-n*s),f=e+i*Math.sin(-x*s),d=e+(t+.5*(i-t))*Math.sin(-x*s),p=(e+t*Math.sin(-x*s),e+t*Math.sin(-r*s)),g=e+t*Math.sin(-n*s),u=e+i*Math.sin(-r*s),_=e+i*Math.sin(-n*s),m=["M",h,u,"L",o,p,"A",t,t,0,+(Math.abs(n-r)>180),1,c,g,"L",v,_,"A",i,i,0,+(Math.abs(n-r)>180),0,h,u];return m.middleangle=x,m.middlex=a,m.middley=f,m.cx=y,m.cy=d,m.A=[o,p],m.B=[h,u],m.C=[c,g],m.D=[v,_],m}var r,n={initializer:function(){return this.draw(),this.bindEvent(),this},bindEvent:function(){this.on("afterCxChange",function(){this.draw()}),this.on("afterCyChange",function(){this.draw()}),this.on("afterStartChange",function(){this.draw()}),this.on("afterEndChange",function(){this.draw()}),this.on("afterRChange",function(){this.draw()});var l=this.get("$path"),e=this;l.click(function(){e.fire("click")}),l.mouseout(function(){e.fire("mouseout")}),l.mouseover(function(){e.fire("mouseover")})},unbindEvent:function(){this.detach();var l=this.get("$path");l.unclick(),l.unmouseover(),l.unmouseout()},_syncAttrFromPath:function(l){this.set({middleangle:l.middleangle,sectorcx:l.cx,sectorcy:l.cy,middlex:l.middlex,middley:l.middley,centerpoint:l.cc,A:l.A,B:l.B})},draw:function(){var e=this.get("r"),t=this.get("paper"),i=this.get("pathcfg"),r=this.get("framedata"),n=r&&r.sectorcfg||{},s=t.path();i=l.merge({stroke:"#fff"},i),n&&(i=l.merge(i,{stroke:n.stroke,"stroke-width":n.strokeWidth})),s.attr(i),this.set("$path",s),l.isArray(e)&&2==e.length?this._drawDonut():this._drawSector()},_drawSector:function(){var l,e=this.get("cx"),i=this.get("cy"),r=this.get("r"),n=this.get("start"),s=this.get("end"),x=t(e,i,r,n,s),a=x.join(",");return this.get("paper"),l=this.get("$path"),l.attr("path",a),this._syncAttrFromPath(x),this.draw=this._drawSector,this},_drawDonut:function(){var l,e=this.get("cx"),t=this.get("cy"),r=this.get("r"),n=this.get("start"),s=this.get("end");r=r.sort(function(l,e){return e>l?-1:l==e?0:1});var x=i(e,t,r[0],r[1],n,s),a=x.join(",");return this.get("paper"),l=this.get("$path"),l.attr("path",a),this._syncAttrFromPath(x),this.draw=this._drawDonut,this},destroy:function(){this.unbindEvent(),this.get("$path").remove()}};return e.extend?r=e.extend(n):(r=function(l){this.set(l),this.userConfig=l,this.initializer()},l.extend(r,e,n)),r},{requires:["base"]}),KISSY.add("gallery/kcharts/1.2/piechart/label",function(l,e,t,i){function r(l,e){var t,i,r,n;return t=l[0],r=l[1],i=e[0],n=e[1],Math.sqrt(Math.pow(t-i,2)+Math.pow(r-n,2))}function n(l,e,t){function i(l,n,s,x){if(t>=l.length)return{min:s,left:x};if(n>r(e,l[0])){var a=l.slice(1);return i(a,r(e,l[0]),l[0],a)}return i(l.slice(1),n,s,x)}return i(l,1/0,l[0],[])}function s(l,e){function t(l,e,i){if(0==l.length)return i;var r=n(e,l[0],l.length-1);return i.push(r.min),t(l.slice(1),r.left,i)}return t(l,e,[])}function x(l){return a||(a=e("<span/>").css({visibility:"hidden",position:"fixed",left:"-9999em",top:0}).appendTo(document.body)),a.html(l),{width:i.width(a),height:i.height(a)}}var a,y,o={initializer:function(){var l=this.get("label"),e=this.get("x"),t=this.get("y"),i=this.get("size"),r=this.get("pie"),n=(this.get("sector"),r.get("container"));l.css({position:"absolute",left:e+"px",top:t+"px",width:i.width+"px",height:i.height+"px"}).appendTo(n),this.set("el",l)},destroy:function(){this.get("el").remove(),this.get("$path").remove()}};t.extend?y=t.extend(o):(y=function(l){this.set(l),this.userConfig=l,this.initializer()},l.extend(y,t,o));var c,h={initializer:function(){var t,i,r,n,a,o,c,h=this.get("pie"),v=this.get("$sectors"),f=this.get("isleft"),d=h.get("paper"),p=(h.get("container"),v.length,[]),g=[],u=[],_=h.get("cx"),m=h.get("cy"),b=h.get("rs"),w=h.get("padding")||20,k=w+10,L=(Math.cos,Math.sin,Math.asin,Math.PI,Math.PI/180);if(this.labels=[],c=v[0],c&&(t=x(c.get("label")).height)){for(n=Math.max.apply(Math,b),a=n+w,o=n+k,i=m-o,r=m+o,i+=t;r-t>i;i+=t){var C=i,S=Math.asin((C-m)/o),A=_+o*Math.cos(S);A=f?2*_-A:A,p.push([A,C])}v.length>p.length&&(v=v.sort(function(l,e){var t=Math.abs(l.get("start")-l.get("end")),i=Math.abs(e.get("start")-e.get("end"));return t>i?-1:i>t?1:0}),v=v.slice(0,p.length)),v=v.sort(function(l,e){var t=l.get("middley"),i=e.get("middley");return i>t?1:t>i?-1:0}),Math.PI/180,l.each(v,function(l){var e,t,i=l.get("middlex"),r=l.get("middley"),n=l.get("middleangle")*L;e=_+a*Math.cos(-n),t=m+a*Math.sin(-n),u.push([e,t]),g.push([i,r])}),g=g.reverse(),u=u.reverse(),v=v.reverse();for(var M=s(g,p),T=0,E=M.length;E>T;T++){var P,I,z,Y,X=g[T],R=M[T];P=X[0],z=X[1],I=R[0],Y=R[1];var G,N;G=u[T][0],N=u[T][1];var F,Z=Y;F=f?I-10:I+10;var $,D,O,j=d.path(["M",P,z,"Q",G,N,F,Z].join(",")),B=v[T],U=h.get("sizefn"),H=B.get("label"),K=h.get("labelfn"),V=this,q=B.get("$path").attr("fill"),W=h.get("autoLabelPathColor");K&&l.isFunction(K)&&(H=K(H,B,h)),$=x(H),j&&j.toBack&&j.toBack(),"undefined"!=W&&j.attr("stroke",q),U&&l.isFunction(U)&&($=U($,B,h)),f?(D=F-$.width,O=Z-$.height/2):(D=F,O=Z-$.height/2);var Q=e("<span class='kcharts-label'>"+H+"</span>"),J=new y({label:Q,sector:B,$path:j,x:D,y:O,size:$,pie:h}),le=J.get("el"),ee=function(l,e,t){l.on("click",function(l){V.fire("click",{el:l.currentTarget,label:t,sector:e})})};ee(le,B,J),V.labels.push(J)}}},destroy:function(){l.each(this.labels,function(l){l.destroy()})}};return t.extend?c=t.extend(h):(c=function(l){this.set(l),this.userConfig=l,this.initializer()},l.extend(c,t,h)),c.getSizeOf=x,c},{requires:["node","base","dom"]}),KISSY.add("gallery/kcharts/1.2/piechart/index",function(l,e,t,i,r,n,s,x,a,y){function o(){this.destroy();var l=n(this.get("container"),this.get("width"),this.get("height"));this.set("paper",l),this.initPath(),this.fire("beforeRender");var e=this.get("framedata");this.animate(e)}function c(e){var t,i=this.get("width"),r=this.get("height"),n=Math.min(i,r),s=e.rpadding;e.rs||(s||(s=40,this.set("rpadding",s)),t=n>s?n-s:n,e.rs=[t/2]),l.isNumber(e.cx)||(e.cx=i/2),l.isNumber(e.cy)||(e.cy=r/2),l.isNumber(e.repaintRate)||(e.repaintRate=200),e.donut&&2!=e.rs.length&&(e.donutSize||(e.donutSize=30),e.donutSize>e.rs[0]&&(e.donutSize=e.rs[0]/2),e.rs[1]=e.rs[0]-e.donutSize)}function h(){var e=l.get(this.get("renderTo")),t=y.width(e),i=y.height(e),r=n(e),s="static"==y.css(e,"position")?!0:!1;this.set({paper:r,width:t,height:i,container:e});var x=this.userConfig;if(this._setupcfg(x),l.isArray(x.rs)||(x.rs=[x.rs]),s&&y.css(e,"position","relative"),this.set(x),this.adjustCfg(),this.adjustData(),this.drawTitle(),0!=x.autoRender){var a=this;setTimeout(function(){a.render()},0)}}var v,f={initializer:h,bindEvent:function(){this.on("afterCxChange",function(){this.render()}),this.on("afterCyChange",function(){this.render()}),this.on("afterRsChange",function(){this.render()}),this.on("afterDataChange",function(){this.render()}),a.on(this.get("container"),"mouseleave",function(){this.fire("mouseleave")},this),this.on("afterRender",this.onafterrender,this)},_setupcfg:c,onafterrender:function(){function e(){var e,t=s.get("$sectors");return e=l.map(t,function(l){var e=l.get("$path"),t=e.attr("fill"),i=l.get("framedata"),r=i.label;return{color:t,text:r,$path:e}})}if(!this.legendrendered){this.legendrendered=!0;var t,i,r,s=this,x=this.get("legend");if(x){t=this.get("paper"),i=this.get("container");var a=this.get("rs"),y=a[a.length-1],o=this.get("rpadding")||0,c=this.get("padding")||0,h=this.get("cx"),v=this.get("cy"),f=2*(y+o+c),d=h-f/2,p=v-f/2;r={width:f,height:f,left:d,top:p},l.use("gallery/kcharts/1.2/legend/index",function(l,a){var y=e(),o={paper:t,container:i,bbox:r,iconAttrHook:function(l){return{fill:y[l].color}},spanAttrHook:function(l){var e=n.getRGB(y[l].color);return{color:e.hex}},config:y},c=new a(l.merge(o,x));s.set("legend",c),s.fire("afterLegendRender")})}}},adjustCfg:function(){var e=this.get("anim"),t=this,i=l.isFunction(e.endframe)&&e.endframe,r=t.get("label");e||(e={duration:0}),e.endframe=function(){0!=r&&t.drawLabel(r),i&&i.call(t),t.fire("afterRender")}},adjustData:function(){var t=this.get("filterfn");if(t&&l.isFunction(t)){var i,r=this.get("data");i=e.filterdata(r,t),this.set("data",i)}},initPath:function(){var l=e.initPath(this);this.set("$sectors",l.$sectors),this.set("groups",l.groups),this.set("set",l.set),this.set("framedata",l.framedata)},render:function(){this.initPath(),this.fire("beforeRender");var e=this.get("framedata");this.animate(e);var t=l.buffer(o,this.get("repaintRate"),this);this.render=t,this.bindEvent()},adjust:function(){var t=this.get("groups").slice(0),i=this.get("framedata");i=l.filter(i,function(l){return!l.hide}),e.adjustFrameData(t,this);var r=this.get("$labels");l.each(r,function(l){l&&l.destroy()}),this.animate(i)},autoResize:function(){var l,t,i,r=this.get("container"),n=y.width(r),s=y.height(r),x=Math.min(n,s),a=this.get("rpadding"),o=this.get("cx"),c=this.get("cy");t=n/2,i=s/2;var h=this.get("titlebbox");h&&(i+=h.height);var v={width:n,height:s};this.set(v),e.closeto(t,o)||this.set("cx",t),e.closeto(i,c)||this.set("cy",i),l=x>a?x-a:x,h&&(l-=h.height);var f,d,p=this.get("donut"),g=this.get("donutSize");if(p)f=l/2,d=g>f?f/2:f-g,this.set("rs",[f,d]);else{var u=this.get("rs");1==u.length&&this.set("rs",[l/2])}},animate:function(l){var e=this,t=this.get("anim");this.isRunning()&&this.stop(),e.fire("beginRender"),this.animateInstance=i.AnimateObject(l,t)},drawTitle:function(){var e,t,i,n=this.get("title");if(n){e=n.content,t=n.offset||[0,10],i=n.align||"center";var s,x,a=r.getSizeOf(e),o=this.get("container"),c=y.width(o);y.height(o),s="left"==i?0:"right"==i?c-a.width:(c-a.width)/2+t[0],x=t[1];var h=l.Node("<div>"+e+"</div>");h.css({top:x+"px",left:s+"px",position:"absolute"}),this.set("title",h),this.set("titlebbox",{left:s,top:x,width:a.width,height:a.height}),h.appendTo(o)}},drawLabel:function(){var t,i,n=[],s=[],x=this.get("$sectors");l.each(x,function(t){var i=t.get("middleangle"),r=t.get("groupLength"),x=t.get("groupIndex"),a=e.isRightAngel(i),y=t.get("framedata");y.hide||(l.indexOf(r-1,x)>-1?a?s.push(t):(t.set("isleft",!0),n.push(t)):a?t.set("isright",!0):t.set("isleft",!0))}),t=new r({pie:this,$sectors:n,isleft:!0}),i=new r({pie:this,$sectors:s,isleft:!1}),t.on("click",this.onLabelClick,this),i.on("click",this.onLabelClick,this),this.set("$labels",[].concat(t,i))},drawSetLabel:function(){},onLabelClick:function(l){this.fire("labelclick",{el:l.el,label:l.label,sector:l.sector})},isRunning:function(){return this.animateInstance&&this.animateInstance.isRunning()},stop:function(){this.animateInstance&&(this.animateInstance.stop(),delete this.animateInstance)},destroy:function(){var e=this.get("$sectors"),t=this.get("$labels"),i=[].concat(e,t);l.each(i,function(l){l&&l.destroy()}),this.set("$sectors",null),this.set("$labels",null),this.get("paper").remove()}};return x.extend?v=x.extend(f):(v=function(l){this.set(l),this.userConfig=l,this.initializer()},l.extend(v,x,f)),v.getSizeOf=r.getSizeOf,v},{requires:["./util","./sector","gallery/kcharts/1.2/animate/index","./label","gallery/kcharts/1.2/raphael/index","gallery/kcharts/1.2/tools/color/index","base","event","dom"]});