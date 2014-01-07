/*! kcharts - v1.2 - 2014-01-07 2:19:46 PM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/scatterchart/theme",function(){var t="{COLOR}",l={"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:t},hoverAttr:{stroke:"#fff",r:5,fill:t,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:t},hoverAttr:{stroke:"#fff",r:5,fill:t,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:t},hoverAttr:{stroke:"#fff",r:5,fill:t,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}}};return l}),KISSY.add("gallery/kcharts/1.2/scatterchart/index",function(t,l,e,r,i,n,s,a,o,h,c,x){var y,f=t.all,u=t.Event,d="ks-chart-",p=d+"default",v=d+"evtlayout",g=v+"-rects",m="{COLOR}",_=function(t){var l=this;l._cfg=t,l._cfg.zoomType="xy",l.init()};return t.extend(_,r,{init:function(){var l=this;if(r.prototype.init.call(l,l._cfg),l.chartType="scatterchart",l._$ctnNode[0]){var e={themeCls:p,autoRender:!0,title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},colors:[],subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:m,opacity:.6},hoverAttr:{stroke:"#fff",r:5,fill:m,"stroke-width":0,opacity:1}},legend:{isShow:!1},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{zIndex:10}},yAxis:{isShow:!0,css:{zIndex:10},num:5},xGrids:{isShow:!1,css:{}},yGrids:{isShow:!0,css:{}},tip:{isShow:!0,clsName:"",template:"",css:{},offset:{x:0,y:0},boundryDetect:!0}};l._finished=[],p=l._cfg.themeCls||e.themeCls,l._cfg=t.mix(t.mix(e,o[p],x,x,!0),l._cfg,x,x,!0),l.color=y=new n({themeCls:p}),l._cfg.colors.length>0&&y.removeAllColors();for(var i in l._cfg.colors)y.setColor(l._cfg.colors[i]);l._cfg.autoRender&&l.render(!0)}},drawTitle:function(){var l=this,e=l.htmlPaper,r=p+"-title",i=l._cfg,n=l._innerContainer,s=.6*n.y;i.title.isShow&&""!=i.title.content&&(l._title=e.rect(0,0,l._$ctnNode.width(),s).addClass(r).css(t.mix({"line-height":s+"px"},i.title.css)).html(i.title.content))},drawSubTitle:function(){var l=this,e=l.htmlPaper,r=p+"-subtitle",i=l._cfg,n=l._innerContainer,s=.4*n.y;i.subTitle.isShow&&""!=i.subTitle.content&&(l._subTitle=e.rect(0,.6*n.y,l._$ctnNode.width(),s).addClass(r).css(t.mix({"line-height":s+"px"},i.subTitle.css)).html(i.subTitle.content))},processAttr:function(l,e){var r=t.clone(l);for(var i in r)r[i]&&"string"==typeof r[i]&&(r[i]=r[i].replace(m,e));return r},diffStocksSize:function(){var t=this,l=t._cfg.points.attr.r,e=t._datas.total,i=[];for(var n in e)i=i.concat(r.prototype.getArrayByKey.call(null,e[n].data,2));if(i.length)for(var n in t._points){var s=r.prototype.getArrayByKey.call(null,e[n].data,2);for(var a in t._points[n])s.length>0&&(t._points[n][a].r=s[a]*l)}else for(var n in t._points)for(var a in t._points[n])t._points[n][a].r=l},drawAllStocks:function(){var t=this;t._stocks={_stocks:[]};for(var l in t._points)t._stocks[l]={stocks:t.drawStocks(l)}},drawStocks:function(t){var l=this,e=[],r=l.color.getColor(t).DEFAULT;for(var i in l._points[t]){var n=l._points[t][i];e[i]=l.drawStock(n.x,n.y,n.r,{stroke:r,fill:r,r:n.r})}return e},drawStock:function(t,l,e,r){var i=this,n=i.paper,s=i._cfg.points.attr;return n.circle(t,l,e,r).attr(s).attr(r)},drawGridsX:function(){if(this._cfg.xGrids.isShow){for(var t=this,l=t._pointsX,e=0,r=l.length;r>e;e++){var i=t.drawGridX(l[e]);t._gridsX.push(i)}return t._gridsX}},drawGridX:function(t,l){var e=this,r=e._innerContainer.tl.y,i=e._innerContainer.height,l=l||e._cfg.xGrids.css,n=e.htmlPaper,s=e._cfg.themeCls+"-gridsx";return n.lineY(t.x,r,i).addClass(s).css(e._cfg.xGrids.css)},drawGridY:function(t,l){var e=this,r=e._innerContainer.width,l=l||e._cfg.yGrids.css,i=e.htmlPaper,n=e._cfg.themeCls+"-gridsy";return i.lineX(t.x,t.y,r).addClass(n).css(l)},drawGridsY:function(){if(this._cfg.yGrids.isShow)for(var t=this,l=t._innerContainer.tl.x,e=t._pointsY,r=0,i=e.length;i>r;r++)t._gridsY[r]={0:t.drawGridY({x:l,y:e[r].y}),num:t.coordNum[r]}},drawAxisX:function(){if(this._cfg.xAxis.isShow){var t=this,l=t._innerContainer,e=l.bl,r=l.width,i=t.htmlPaper,n=t._cfg.themeCls+"-axisx";return t._axisX=i.lineX(e.x,e.y,r).addClass(n).css(t._cfg.xAxis.css||{}),t._axisX}},drawAxisY:function(){if(this._cfg.yAxis.isShow){var t=this,l=t._innerContainer,e=l.tl,r=l.height,i=t.htmlPaper,n=t._cfg.themeCls+"-axisy";return t._axisY=i.lineY(e.x,e.y,r).addClass(n).css(t._cfg.yAxis.css||{}),t._axisY}},drawLabelsX:function(){if(this._cfg.xLabels.isShow){var t=this;for(var l in t._pointsX)t._labelX[l]=t.drawLabelX(l,t._pointsX[l].number)}},drawLabelsY:function(){if(this._cfg.yLabels.isShow){var t=this;for(var l in t._pointsY)t._labelY[l]={0:t.drawLabelY(l,t._pointsY[l].number),num:t._pointsY[l].number};return t._labelY}},drawLabelX:function(l,r){var i,n=this,s=n.htmlPaper,a=n._pointsX,o=a.length||0,h=n._cfg.themeCls+"-xlabels",c="{{data}}",y="";return o>l?(c=n._cfg.xLabels.template||c,y=t.isFunction(c)?c(l,r):e(c).render({data:r}),i=a[l],i[0]=s.text(i.x,i.y,"<span class="+h+">"+y+"</span>","center").children().css(n._cfg.xLabels.css),i[0]):x},drawLabelY:function(l,r){var i=this,n=i.htmlPaper,s=i._cfg.themeCls+"-ylabels";return tpl="{{data}}",content="",tpl=i._cfg.yLabels.template||tpl,content=t.isFunction(tpl)?tpl(l,r):e(tpl).render({data:r}),content&&n.text(i._pointsY[l].x,i._pointsY[l].y,"<span class="+s+">"+content+"</span>","right","middle").children().css(i._cfg.yLabels.css)},renderTip:function(){if(this._cfg.tip.isShow){var l=this,e=l._cfg,r=l._innerContainer,i=e.tip.boundryDetect?{x:r.tl.x,y:r.tl.y,width:r.width,height:r.height}:{},n=t.mix(e.tip,{rootNode:l._$ctnNode,clsName:e.themeCls,boundry:i});return l.tip=new c(n),l.tip}},renderEvtLayout:function(){var t,l=this,e=l._cfg,r=l._innerContainer,i=(r.tl.y,r.height),n=l._evtEls._rects=[];t=l._evtEls.paper?l._evtEls.paper:l._evtEls.paper=new s(l._$ctnNode,{clsName:v,prependTo:!1,width:r.width,height:i,left:r.tl.x,top:r.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":.01,"-khtml-opacity":.01,opacity:.01}});for(var a in l._points){var n=[];for(var o in l._points[a]){var h=2*(l._points[a][o].r||e.points.attr.r);n[o]=t.rect(l._points[a][o].x-h/2,l._points[a][o].y-h/2,h,h).attr({line_index:a,index:o}).addClass(g)}l._evtEls._rects[a]=n}},fix2Resize:function(){var l=this;l._$ctnNode,l._cfg.anim="";var e=t.buffer(function(){l.init()},200);!l.__isFix2Resize&&l.on("resize",function(){l.__isFix2Resize=1,e()})},clearEvtLayout:function(){var t=this;if(t._evtEls._rects)for(var l in t._evtEls._rects)for(var e in t._evtEls._rects[l])t._evtEls._rects[l][e].remove()},renderLegend:function(){if(this._cfg.legend.isShow){var l=this,e=l._cfg.legend,r=e.container&&f(e.container)[0]?f(e.container):l._$ctnNode,i=l._innerContainer,n=l.color._colors,s=n.length,o=l._cfg,h=l._cfg.series,c=t.map(h,function(t,l){l%=s;var e={},r=n[l];return e.text=t.text,e.DEFAULT=r.DEFAULT,e.HOVER=r.HOVER,e}),x=t.merge({interval:20,iconright:5,showicon:!0},o.legend.globalConfig);return l.legend=new a({container:r,paper:l.paper,bbox:{width:i.width,height:i.height,left:i.x,top:i.y},align:o.legend.align||"bc",offset:o.legend.offset||[0,30],globalConfig:x,config:c}),l.legend.on("click",function(t){var l=t.index,e=(t.text,t.icon,t.el);1!=e.hide?(this.hidePoints(l),e.hide=1,e.disable()):(this.showPoints(l),e.hide=0,e.enable())},this),l.legend}},showPoints:function(l){var e=this;r.prototype.recoveryData.call(e,l),e._clonePoints[l]=e._points[l],e.animateGridsAndLabels(),e.animateSiblingsPoints(l),e.diffStocksSize(),e._stocks[l]={stocks:e.drawStocks(l)},e.clearEvtLayout(),e.renderEvtLayout(),e.bindEvt(),t.log(e)},hidePoints:function(t){var l=this;r.prototype.removeData.call(l,t),delete l._clonePoints[t],l.animateGridsAndLabels();for(var e in l._stocks[t].stocks)l._stocks[t].stocks[e].remove();l.animateSiblingsPoints(t),l.clearEvtLayout(),l.renderEvtLayout(),l.bindEvt()},animateSiblingsPoints:function(t){var l=this;for(var e in l._stocks)if(t!=e)for(var r in l._stocks[e].stocks)l._points[e]&&l._stocks[e].stocks[r].animate({cx:l._points[e][r].x,cy:l._points[e][r].y},400)},animateGridsAndLabels:function(){var t=this;t._cfg.zoomType;for(var l in t._labelY)t._labelY[l]&&t._labelY[l][0]&&t._labelY[l][0].remove();for(var l in t._gridsY)t._gridsY[l]&&t._gridsY[l][0]&&t._gridsY[l][0].remove();for(var l in t._labelX)t._labelX[l]&&t._labelX[l][0]&&f(t._labelX[l][0]).remove();for(var l in t._gridsX)t._gridsX[l]&&t._gridsX[l][0]&&f(t._gridsX[l][0]).remove();t.drawGridsY(),t.drawLabelsY(),t.drawGridsX(),t.drawLabelsX()},render:function(l){var e=this,r=e._cfg,n=r.themeCls;l&&e._$ctnNode.html(""),e.paper=i(e._$ctnNode[0],r.width,r.height,{position:"absolute"}),e.htmlPaper=new s(e._$ctnNode,{clsName:n}),e._clonePoints=e._points,e.drawTitle(),e.drawSubTitle(),e.renderTip(),e.drawGridsX(),e.drawGridsY(),e.drawAxisX(),e.drawAxisY(),e.drawLabelsX(),e.drawLabelsY(),e.diffStocksSize(),e.drawAllStocks(),e.renderLegend(),e.renderEvtLayout(),e.afterRender(),e.fix2Resize(),e.bindEvt(),t.log(e)},bindEvt:function(){var l=this,e=l._evtEls;t.clone(l._cfg.points.hoverAttr),u.detach(f("."+g,f("."+v,l._$ctnNode)),"mouseenter"),u.on(f("."+g,f("."+v,l._$ctnNode)),"mouseenter",function(t){var e=f(t.currentTarget),r=e.attr("index"),i=e.attr("line_index");l._points[i][r].dataInfo&&(l.stockChange(i,r),l._cfg.tip.isShow&&l.tipHandler(i,r))}),u.detach(e.paper.$paper,"mouseleave"),u.on(e.paper.$paper,"mouseleave",function(){l.tip&&l.tip.hide(),l.paperLeave()})},stockChange:function(t,l){var e=this,r=e._stocks[t],i={target:r.stocks[l],currentTarget:r.stocks[l],lineIndex:Math.round(t),stockIndex:Math.round(l)};e.fire("stockChange",i)},tipHandler:function(l,e){var r,i,n=this,s=n.color.getColor(l).DEFAULT,a=n.tip,o=n._cfg,h=o.tip.template,c=a.getInstance();h&&(r=n._points[l][e].dataInfo,t.isFunction(h)?a.setContent(h(r)):a.renderTemplate(h,r),i=n._points[l][e],a.isVisable()?a.animateTo(i.x,i.y):a.moveTo(i.x,i.y),c.css(n.processAttr(o.tip.css,s)))},paperLeave:function(){var t=this;t.fire("paperLeave",t)},afterRender:function(){var t=this;t.fire("afterRender",t)},getPaper:function(){return this.htmlPaper},getHtmlPaper:function(){return this.htmlPaper},getRaphaelPaper:function(){return this.paper},clear:function(){this._$ctnNode.html("")}}),_},{requires:["base","gallery/template/1.0/index","gallery/kcharts/1.2/basechart/index","gallery/kcharts/1.2/raphael/index","gallery/kcharts/1.2/tools/color/index","gallery/kcharts/1.2/tools/htmlpaper/index","gallery/kcharts/1.2/legend/index","./theme","gallery/kcharts/1.2/tools/touch/index","gallery/kcharts/1.2/tip/index"]});