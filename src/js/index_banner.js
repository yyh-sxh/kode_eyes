$(function(){
	
	//ajax请求数据
	$.ajax({
		type:"get",
		url:"/data/index_banner.json",
		dataType:"json",
		success:function(res){
			
			//遍历数据
			$.each(res, function(idx,ele){
				
				//将请求到的数据加载到页面中
				var $span = $("<span/>");
				$span.html($("<img src='"+ele.imgurl+"'/>")).appendTo($("#banner"));
				$("<p>"+"￥"+ele.price+"</p>").css({"color":"orangered"}).appendTo($span);
				$("<p id='shuoming'>"+ele.shuoming+"</p>").appendTo($span);
				$("<p>"+ele.tehui+"</p>").css("color","orangered").appendTo($span);
				
				//点击商品框时进入商品的详情页面
				$span.on("click","img",function(){
					open("html/details.html")
				})
				
			});
		}
	})
})
