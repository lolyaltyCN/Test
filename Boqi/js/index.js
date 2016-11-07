$(function(){

	//Top移入移出
	var btn = $("#top").find("li");	
		btn.eq(2).hover(function(){
			btn.eq(2).attr("class","toolbar_wb_current")
			btn.eq(2).find("div").css("display","block")
		},function(){
			btn.eq(2).attr("class","toolbar_wb")
			btn.eq(2).find("div").css("display","none")
		})
		btn.eq(3).hover(function(){
			btn.eq(3).attr("class","toolbar_weixin_current")
			btn.eq(3).find("div").css("display","block")
		},function(){
			btn.eq(3).attr("class","toolbar_weixin")
			btn.eq(3).find("div").css("display","none")
		})
		btn.eq(4).hover(function(){
			btn.eq(4).attr("class","last_current");
			btn.eq(4).find("dl").css("display","block")
		},function(){
			btn.eq(4).attr("class","last")
			btn.eq(4).find("dl").css("display","none")
		})

		$.ajax({
			url: "js/nav.json",
			type: "GET",
			success: function(data){
				var html = "";	
				for(var i = 0; i < data.length; i++){
					var html1 = "";
					var html2 = "";					
					for(var j = 0;j <data[i].kind.length;j++){
						if(data[i].kind[j].child_kind){
							var html3 = "";
							for(var k = 0; k < data[i].kind[j].child_kind.length; k++){
								
								html3 += '<a href="" id = ' + data[i].kind[j].child_kind[k].id +'>'+ data[i].kind[j].child_kind[k].name +'</a>'
							}
						}
						var l = 0;
						if(data[i].kind[j].child_title){
							html1 += '<div class="nav_list_body"><dl><dt><a href="">' + data[i].kind[j].child_title +'</a></dt><dd>' + html3 + '</dd></dl></div>'							
						}else{
							html2 += '<dl class="nav_list_r"><dt><a href="#"><img src=' + data[i].kind[j].img1 + '/></a></dt><dd><a href="#">'+data[i].kind[j].img2 + '</a></dd><dd>' + data[i].kind[j].img3 + '</dd></dl>'
						}
						
					}

					html += '<li class="' + data[i].class +'"><p><a href="">' + data[i].title + '<em></em></a></p><div class="nav_list" style="display: none;"><div class="nav_list_l">' + html1 + '</div></div></li>';
					
				}
				$("#nav_box").append(html); // 将一级菜单添加到ul中
				 $(".menu_list").insertAfter($(".fr_current"));//在push到首页的后面
				 $(".nav_list").append(html2);// 将二级菜单的图片插入到li中

				 var oli = $("#nav_box").find(".menu_list");
					oli.hover(function(){
						$(this).find(".nav_list").css("display","block");
						$(this).find("em").attr("class","up");
						
					},function(){
						$(this).find(".nav_list").css("display","none");
						$(this).find("em").attr("class","");
					})
			}
		})


		Banner(".banner_num") //banner轮播图


		document.onclick = function(event){
			event||window.event;
			// console.dir(event.pageY-event.clientY)
		}
		 $("#dog").click(function(){
		 	$("#dog").animate({top:800},800,function(){
		 		console.dir($("#dog"))
		 	})
		 })	

		//模块轮播图
		
		flash("#001");
		flash("#002");
		flash("#003");
		flash("#004");
		flash("#005");

		//magic 滚动事件 

		$("#go_top").click(function(){
			 $('body').animate({scrollTop:0},800);
		})
		$("#dog").click(function(){
			
			 $('body').animate({scrollTop:$('#001').offset().top},800);
		})
		$("#cat").click(function(){
			 $('body').animate({scrollTop:$('#002').offset().top},800);
		})
		$("#pet").click(function(){
			 $('body').animate({scrollTop:$('#003').offset().top},800);
		})
		$("#Nationality").click(function(){
			 $('body').animate({scrollTop:$('#004').offset().top},800);
		})
		$("#creeper").click(function(){
			 $('body').animate({scrollTop:$('#005').offset().top},800);
		})
		

		//滚动条事件

		$(window).scroll(function(){
			var wh =$(window).height(); 
			if($(window).scrollTop()>40){
				$("#go_top").css("display","block")
			}else{
				$("#go_top").css("display","none")
			}

		})



})

function Banner(itarget){
	var btn1 = $(itarget).find("span");
	var odiv = $("#banner").find(".banner_list");
	var iNow = 0; 
	var timer = 0; 
	btn1.mouseover(function(){
		iNow = $(this).index();
		tab()
	})
	timer = setInterval(function(){
		iNow++;
		tab();
		
	},850)
	$("#banner").hover(function(){
		clearInterval(timer);
		},function(){
			timer = setInterval(function(){
				iNow++;
				tab();
			},2550)
	});
	function tab(){
		btn1.attr("class", "")
		btn1.eq(iNow).attr("class", "current");
		odiv.css("display","none")
		odiv.eq(iNow).css("display","block");
		if(iNow == btn1.size()){
			btn1.eq(0).attr("class", "current");
			odiv.eq(0).css("display","block");
			iNow = 0;
		}
	}
}


function flash(itarget){
	var slide = $(itarget).find("span");
	var oslide = $(itarget).find(".dog_slideflash");
	var iNow1 = 0;
	var timer = 0;
	slide.mouseover(function(){
		iNow1 = $(this).index();
		tab1();
	})
	timer = setInterval(function(){
		iNow1++;
		tab1();
		
	},2680)
	slide.closest(".dog_left_slide").hover(function(){
		clearInterval(timer);
		},function(){
			timer = setInterval(function(){
				iNow1++;
				tab1();
			},2680)
	});
	function tab1(){
		slide.attr("class", "");
		slide.eq(iNow1).attr("class", "current");
		if(iNow1 == slide.size()){
			slide.eq(0).attr("class", "current");
			iNow1 = 0;
		}
		oslide.animate({left:-360*iNow1});
	}
}
