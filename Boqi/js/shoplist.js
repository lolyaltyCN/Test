$(function(){

	//TOP 左边

	$(".city").hover(function(){
		$(this).addClass("current");
		$(this).find("p").attr("class","up");
		$(this).find(".city_select").css("display","block");
	},function(){
		$(this).removeClass("current");
		$(this).find("p").attr("class","");
		$(this).find(".city_select").css("display","none")
	})

	//TOP 右边

	var btn = $(".toolbar_r").find("li");	
		btn.eq(2).hover(function(){
			$(this).addClass("current");
			btn.eq(2).find("div").css("display","block")
		},function(){
			btn.eq(2).removeClass("current");
			btn.eq(2).find("div").css("display","none")
		})
		btn.eq(3).hover(function(){
			btn.eq(3).addClass("current");
			btn.eq(3).find("div").css("display","block")
		},function(){
			btn.eq(3).removeClass("current");
			btn.eq(3).find("div").css("display","none")
		})
		btn.eq(4).hover(function(){
			btn.eq(4).addClass("current");
			btn.eq(4).find("div").css("display","block")
		},function(){
			btn.eq(4).removeClass("current");
			btn.eq(4).find("div").css("display","none")
		})

		//购物车
		
		$(".nav_r").hover(function(){
			$(this).addClass("current");
			
		},function(){
			$(this).removeClass("current");
			
		})

		//导航	
		$(".nav_l").hover(function(){
			$(".nav_shoplist").css("display","block")
		},function(){
			$(".nav_shoplist").css("display","none")
		})

		
		//banner轮播图
		
		flash(".bg",".ban_num")
		
		//内容部分切换
		
		$(".dog_le").find("a").mouseover(function(){
			$(".dog_le").find("a").removeClass("current")
			$(this).addClass("current");

			$(".dog_bot").find("div").addClass("none");
			$(".dog_bot").find("div").eq($(this).index()).removeClass("none");	
						
		})

		//商品列表切换
		
		
		$(".dog_left").find("li").mouseover(function(){
			$(".dog_left").find("li").removeClass();
			$(".dog_left").find("li").eq($(this).index()).addClass("current")

			/*$(".dog_left").find(".dog_center").addClass("none")
			$(".dog_left").find(".dog_center").eq($(this).index()).removeClass("current")*/
			$(".dog_center").css("display","none")
			$(".dog_center").eq($(this).index()).css("display","block")
		})

		//ajax 加载
		
		$.ajax({
			url: "../js/shoplist.json",
			type: "GET",
			success: function(data){
					var html = "";
				for(var i = 0; i < data.length; i++){
					var html1 = "";
					for(var j = 0; j < data[i].kind.length;j++){
						html1 += '<span><a href="#">' +data[i].kind[j].ti + '</a></span>'
					}
				    var html2 = "";
					for(var j = 0; j < data[i].sum.length;j++){
						var html3 = "";
						for(var k = 0;k < data[i].sum[j].skind.length;k++){
							html3 +='|<a href="#">' + data[i].sum[j].skind[k].name +'</a>'
						}

						html2 += '<dl><dt><a href="#">' +  data[i].sum[j].sname +'</a></dt><dd>' + html3 + '</dd></dl>'
					}
					html += '<div class="menu_list"><div class="menu_list_l"><div class="menu_tit"><em class="' + data[i].class + '"></em><a href="#">' + data[i].title + '</a><span></span></div><div class="menu_body">' + html1 + '</div><div class= "menu_right" style="display:none">'+ html2 + '</div></div></div>'				
				}//for
				$(".nav_shoplist").append(html)
				var nav = $(".menu_list")
				nav.eq(0).hover(function(){
					$(this).find(".menu_right").css("display","block")
				},function(){
					$(this).find(".menu_right").css("display","none")
				})
				nav.eq(1).hover(function(){
					$(this).find(".menu_right").css("display","block")
				},function(){
					$(this).find(".menu_right").css("display","none")
				})
				nav.eq(2).hover(function(){
					$(this).find(".menu_right").css("display","block")
				},function(){
					$(this).find(".menu_right").css("display","none")
				})
				nav.eq(3).hover(function(){
					$(this).find(".menu_right").css("display","block")
				},function(){
					$(this).find(".menu_right").css("display","none")
				})
				nav.eq(4).hover(function(){
					$(this).find(".menu_right").css("display","block")
				},function(){
					$(this).find(".menu_right").css("display","none")
				})

			}

		})

		//炫酷magic
		
		$(".sbar_oper").find("li").hover(function(){
			$(".sbar_oper").find("li").eq($(this).index()).addClass("on")
		},function(){
			$(this).removeClass("on");
		})
		
		//侧边栏 返回顶部
		
		$(".sbar_top").hover(function(){
			$(this).addClass("on");

		},function(){
			$(this).removeClass("on");
		})

		//侧边栏开启购物车
		
		$(".sbar_oper").find("li").eq(1).click(function(){
			$(".magic").css("right","217px");
			$(".mag_back").css("display","block");
		})

		//顶部关闭购物车
		
		$(".mag_back").click(function(){ 
			$(".magic").css("right","0");
			$(".mag_back").css("display","none");
		})

		//TOP事件
		
		$(".sbar_top").click(function(){
			 $('body').animate({scrollTop:0},800);
		})











})
//轮播图
function flash(a,b){
			var iNow = 0;
			var timer = 0;
			timer = setInterval(function(){		
				if(iNow < $(a).find("li").length-1){ 
			      iNow ++; 
			    }else{ 
			      iNow = 0;
			    }
			    tab(iNow);
			},2500)
			$(b).find("span").each(function(item){ 
		    $(this).hover(function(){ 
		      clearInterval(timer);
		      /*tab(item);
		      iNow = item;*/
		    },function(){ 
		      	timer = setInterval(function(){ 
			        if(iNow < $(".bg").find("li").length-1){ 
			          iNow ++; 
			        }else{ 
			          iNow = 0;
			        }
			        //调用变换处理函数
			        tab(iNow); 
		     	 },2500);
		    });
		  });
		  function tab(num){ 
		    $(a).find("li").removeClass("current").hide().eq(num).fadeIn().addClass("current");
		    $(b).find("span").removeClass("current").eq(num).addClass("current");
		  }
		}