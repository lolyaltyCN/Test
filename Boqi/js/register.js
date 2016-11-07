$(function(){

	//头部切换

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

	//切换注册类别

	$(".reg_l_tag").find("div").click(function(){
		$(".reg_l_tag").find("div").removeClass("current");
		$(this).addClass("current");
		$(".tag_body").css("display","none")
		$(".tag_body").eq($(this).index()).css("display","block")
	})

	//验证判断
	
	$("#mobile").on("blur",function(){
		alert($("#mobile").val())
	})
	
		

})
