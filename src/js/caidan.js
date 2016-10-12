$(function(){
	
	//获取菜单栏
	var oList = $(".caidan_li1")
	
	//获取内容栏
	var Banner = $("div[class=list1]")
	
	//数遍移入和移出菜单栏触发的事件
	oList.on("mouseenter",function(){
		
		//显示内容栏
		$("div[class=list1]").show();
	}).on("mouseleave",function(){
		
		//隐藏内容栏
		$("div[class=list1]").hide();
	})
	
	//鼠标移入和移出内容栏触发事件
	Banner.on("mouseenter",function(){
		
		//显示内容栏
		$("div[class=list1]").show();
	}).on("mouseleave",function(){
		
		//隐藏内容栏
		$("div[class=list1]").hide();
	})
})