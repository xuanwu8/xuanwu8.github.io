$(document).ready(function(){
	
		if ($("#banner").length>0)
		{
				$("#banner").Xslider({
					speed: 1200, 
					space: 3000,
					auto: true, //自动滚动
					affect:'fade',
					ctag: 'div'
				});
		}	
	$.fn.scroll_({arrows:false,mouseWheelSpeed: 30,verticalGutter:15});
	setTimeout(function(){
		$('#News .Tab').Tab({lilab:"li",labselect:".change",Tabname:".Tab_nr",labaction:"click",animatename:"scroll_x",animateTime:400,mode:"none"})
		$('#Recharge .Tab').Tab({lilab:"li",labselect:".change",Tabname:".Tab_nr",labaction:"click",animatename:"scroll_x",animateTime:400,mode:"none"})
		$('#ZhiYe .Tab').Tab({lilab:"li",labselect:".change",Tabname:".pics",labaction:"click",animatename:"scroll_x",animateTime:600,mode:"none"})
		
		
		
	},100)
	$("#PicShowGundong").jcarousellite_gundong({btn:1,list:".PicList li","visible":3,"auto":2500,"speed":300})

		$(".PicList li").bind('mouseenter',function(){
					var self=$(this)
					time_delay=setTimeout(function(){
								if(!self.is(":animated"))
								{
									self.addClass("star_animate");
									var img=self.find("img")
									
									img.stop(true,false).animate({"opacity":0.6}, 500);
									self.stop(true,false).animate({"margin-top":"-8px"}, 500);
								}
						
					},100)
				
			}).bind('mouseleave',function(){
				    clearTimeout(time_delay)	
							var self=$(this)
							if (self.is(".star_animate"))
							{		
									self.removeClass("star_animate");
									var img=self.find("img")
									img.stop(true,false).animate({"opacity":1}, 500);
									self.stop(true,false).animate({"margin-top":"0"}, 500);
							}
			})			
			
		
			$("#Video").bind('mouseenter',function(){
					var self=$(this).find("img");
					time_delay=setTimeout(function(){
								if(!self.is(":animated"))
								{
									self.addClass("star_animate");
									self.stop(true,false).animate({"opacity":0.6}, 500);
								}
						
					},100)
				
			}).bind('mouseleave',function(){
				    clearTimeout(time_delay)	
							var self=$(this).find("img")
							if (self.is(".star_animate"))
							{		
									self.removeClass("star_animate");
									self.stop(true,false).animate({"opacity":1}, 500);
							}
			})		
		
	
	
	
		if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
				var wow = new WOW({
					boxClass: 'wow',
					animateClass: 'animated',
					offset: 30,
					mobile: true,
					live: true
				});
				wow.init();

		};	
		
		
		$.fn.css3_allnth()
		
		
})
$.fn.css3_allnth=function(){
	if (BrowseVer=="ie7" || BrowseVer=="ie6" || BrowseVer=="ie8")
	{
			$.fn.css3_nthchild2(
					"#quicklink .btns a:nth-child(odd)",
					[
						{
							"set_width":"/",
							"set_style":'"border-right","1px solid #3e454d"'
						}
					]						
			)
			
			$.fn.css3_nthchild2(
					"#Download ul li:nth-child(odd)",
					[
						{
							"set_width":"/",
							"set_style":'"border-right","1px solid #3c434b"'
						}
					]						
			)
			
			$.fn.css3_nthchild2(
					"#Kefu .kefulist li:nth-child(even)",
					[
						{
							"set_width":"/",
							"set_style":'"border-right","0"'
						}
					]						
			)
			
	
			
	}
	
}

//ie8和IE8以下运行CSS3 nth-child（xn) 兼容
$.fn.css3_nthchild2=function(obj,objlist){
	var obj=$(obj)
	if (obj.length==0) return false;
	var window_w=$(window).width();
	$.each(objlist,function(index,value){
		var objs=objlist[index];
			if (typeof (objs.set_class)!="undefined" &&  typeof (objs.set_obj)=="undefined")
			{obj.removeClass(objs.set_class)}
			else if (typeof (objs.set_class)!="undefined")
			{obj.find(objs.set_obj).removeClass(objs.set_class)	}
	})
	
	$.each(objlist,function(index,value){
		var objs=objlist[index]
		if (objs.set_width=="/")
		{
			if (typeof (objs.set_class)!="undefined" &&  typeof (objs.set_obj)=="undefined")
			{
				
				obj.addClass(objs.set_class)
			}
			else if (typeof (objs.set_class)!="undefined")
			{
				obj.find(objs.set_obj).addClass(objs.set_class)
			}

			if (typeof (objs.set_style)!="undefined" &&  typeof (objs.set_obj)=="undefined")
			{
				eval("obj.css("+objs.set_style+")")
			}
			else if (typeof (objs.set_style)!="undefined")
			{
				eval("obj.find("+objs.set_obj+").css("+objs.set_style+")") 
			}
			
			return false 
		}
		else
		{
				var max_width=parseInt(objs.set_width.split("/")[0]),
				 min_width=parseInt(objs.set_width.split("/")[1])
				if (window_w<=max_width && window_w>=min_width)
				{
					obj.find(objs.set_obj).addClass(objs.set_class)
					return false  
				}
				 
				 
		}
	})
}
//滚动
		$.fn.jcarousellite_gundong=function(options ){
			var self=$(this);
			if (self.length==0) return false;
			var items=options.list,config;
			if (self.find(items).length<=options.visible) 
			{
				var width=self.find(options.list).parent().outerWidth()
				self.css({"margin":"0 auto","width":width})
			return false;	
			}
			else
			{
				var liobj=self.find(options.list)
				var width=liobj.outerWidth()
				var margin=parseInt(liobj.css("margin-left"))+parseInt(liobj.css("margin-right"));
				width+=margin
				self.css({"margin":"0 auto","width":width*options.visible})
			}
			self.css("overflow","visible");
			
			if (self.find(items).is("div"))
			{
				self.find(items).wrap("<li></li>");
				self.find(items).parent().wrapAll("<ul class='templist'></ul>");		
				items=".templist li"
			}
			self.find(items).parent().wrapAll('<div class="jCarouselLite"></div>').parent().wrapAll('<div class="gundong"></div>');
			
			
			if (options.btn!=0)
			{
				self.find(".gundong").append('<span class="clear"></span><a href="javascript:;"  class="move_right"><span></span></a><a href="javascript:;" class="move_left disabled" ><span></span></a>')
			}
			
			self.find(".gundong").each(function(index){
				
				config={
							btnPrev: $(this).find(".move_left:eq("+index+")"),
							btnNext: $(this).find(".move_right:eq("+index+")"),
							visible:1,
							auto: 2500 ,
							speed: 300
						}	
				if (options.btn==0)		
				{
					$.extend(config, {btnPrev:null,btnNext:null});							
				}
				$.extend(config, options);
				$(this).find(".jCarouselLite:eq("+index+")").jCarouselLite(config);	
			})
		}
		
//加载滚动条
$.fn.scroll_=function(config){
	var scrollobj=$("[data-scroll]")
	if (scrollobj.length==0) return false;
	scrollobj.each(function(index, element) {
			var self=$(this)
			if (self.length==0)  return false;
			
			var h=parseInt(self.attr("data-scroll-height")),
				w=parseInt(self.attr("data-scroll-width")),
				color=self.attr("data-scroll-color");
				self.css({"width":"100%"});
				self.wrap('<div class="container1" style="width:'+w+'px"></div>').wrap('<div class="div_scroll"></div>');
				self.parents('.div_scroll').css({height:h}).scroll_absolute(config)	
				self.find("img").load(function(){self.parents('.div_scroll').scroll_absolute(config);})
			
			if (typeof(color)!="undefined")
			{setTimeout(function(){self.parents(".container1").find(".scroll_drag").css({"background":color})},500);}
	});
}		
		
		
		//选项卡切换
		$.fn.Tab=function(config){
			var self=$(this);
			var select_=0;
			var classname=config.labselect.replace(".","")
			if (self.length==0) return false;
			if (self.find(config.lilab).length==0) return false;
			
			
			self.each(function(index, element) {
							
				self=$(this);
						
						if (self.find(config.labselect).length==0) 
						{self.find(config.lilab+":eq(0)").addClass(classname);}
						self.find(config.lilab).each(function(index, element) {
							if (!$(this).is(config.labselect))
							{
								self.siblings(config.Tabname+":eq("+index+")").hide();
							}
						});
						
						self.find(config.lilab).bind(config.labaction+".action",function(){
							
							var index=$(this).index();
							if(self.siblings(config.Tabname+":visible").is(":animated")){ 
							return false;
							
							}

							
							if ($(this).is(config.labselect)) return false;
							var index2=$(this).siblings(config.labselect).index()
							$(this).addClass(classname).siblings().removeClass(classname);
							
							config.animate(index,index2,config.animatename)
							return config.labaction=="click"?   false :  true;
						})
						
						config.animate=function(index,index2,active){
							
							switch (active)
							{
								case "fade":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").fadeIn(config.animateTime);
								break;
								case "scroll_x":
									self.parent().css({"position":"relative","overflow":"hidden"});
									var selfs=self.siblings(config.Tabname+":visible")
									var dr="100%",dr2="100%"
									if (index2>index)
									{
										dr="100%";
										dr2="-100%"
									}
									else
									{
										dr="-100%";
										dr2="100%"
									}
									var top=selfs.position().top
									
									
									if (config.mode=="delay")		
									{
									//当前渐隐
									selfs
									.css({"position":"relative","width":"100%"})
									.stop(true,false)
									.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"static","left":"auto","opacity":1,"display":"none"}
												)}
											)
									setTimeout(function(){
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"static"})	
														
												})
									},config.animateTime)		
								
									}
									
									else
									{
										
											selfs
											.css({"position":"absolute","width":"100%","left":selfs.position().left,"top":selfs.position().top})
											.stop(true,false)
											.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"relative","top":"auto","left":"auto","opacity":1,"display":"none"}
												)}
											)
									
									
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"relative"})	
														
												})
									}
								break;
								
								
								case "none":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").show();
								break;	
								
							}
							
							
						}


            });

		}

//弹窗口
function show(file,width,height)
{	
	$("#window").empty().remove();
	$("body").append('<div id="window"><div id="float_window"><iframe src="'+file+'" style="width:'+width+';height:'+height+';background-color:transparent;overflow:hidden;" scrolling="no" frameborder="0" allowtransparency="true" id="popupFrame" name="popupFrame" width="100%" height="100%"></iframe><span class="closewindow"></span></div></div>')
	$("#window").css("height",$(window).height()).show()
	$("#float_window").css({"width":width,"height":height,"margin-left":"-"+parseInt(width/2)+"px","margin-top":"-"+parseInt(height/2)+"px"})
	$(".closewindow").unbind("click");
	$(".closewindow").bind("click",function(){$("#window").empty().remove();})
}

//关闭窗口
function closewindow(){$("#window").empty().remove();}					
					
		
		
//返回浏览器类型 
$.fn.Browser_ver=function(){
		var navmsg=navigator.userAgent
		var ver='1';
		if(navmsg.indexOf("MSIE")>0){   
			  ver="";
			  if(navmsg.indexOf("MSIE 6.0")>0){ver='ie6'}   
			  if(navmsg.indexOf("MSIE 7.0")>0){ver='ie7'}   
			  if(navmsg.indexOf("MSIE 8.0")>0 && !window.innerWidth){ver='ie8'}   
			  if(navmsg.indexOf("MSIE 9.0")>0){ver='ie9'}   
			  if(navmsg.indexOf("MSIE 10.0")>0){ver='ie10' }   
			  if(navmsg.indexOf("MSIE 11.0")>0){ver='ie11'}   
		} 
		else if(ver=="1" && navmsg.indexOf("Safari")>0){ 
			ver="Saifari"
		}
		else if(ver=="1" && navmsg.indexOf("Firefox")>0){ 
			ver="Firefox"
		}
		else if(ver=="1" && navmsg.indexOf("Opera")>0){ 
			ver="Opera"
		}
		return ver	
}
var BrowseVer=$.fn.Browser_ver()		
