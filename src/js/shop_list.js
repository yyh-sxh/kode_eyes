$(function() {

	//初始化请求ajax的次数
	i = 0;

	//ajax请求数据
	$.ajaxSetup({
		
		type: "get",
		
		url: "/data/index_banner.json",
		
		dataType: "json",
		
		success: function(res) {

			//每次请求ajax成功时让i加1
			i++;

			//遍历数据
			$.each(res, function(idx, ele) {

				//将请求到的数据加载到页面中
				var $span = $("<span/>");
				
				$span.html($("<img src='../" + ele.imgurl + "'/>")).appendTo($(".shop_list"));
				
				$("<p>" + "￥" + ele.price + "</p>").css({
					"color": "orangered"
				}).appendTo($span);
				
				$("<p id='shuoming'>" + ele.shuoming + "</p>").appendTo($span);
				
				$("<p>" + ele.tehui + "</p>").css("color", "orangered").appendTo($span);

			});
		}
	})

	//开启ajax请求
	$.ajax()

	// 给window绑定scroll事件，当差不多滚动到底部是加载更多内容
	$(window).on('scroll', function() {
		
		// 获取滚动条滚动过的距离
		var scrollTop = $(window).scrollTop();

		// 当差不多滚动到底部时加载更多内容,且加载三次后停止加载
		if(scrollTop >= $(document).height() - $(window).height() - 100 && i <= 3) {
			
			//对ajax进行请求
			$.ajax();
		}
	})

})