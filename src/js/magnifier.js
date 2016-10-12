jQuery(function($) {
	
    //初始化状态
	$('.fdj li').xzoom({
		position: 'right'
	});
	$(".minit img").eq(0).css("border", "1px solid green");

    //鼠标移入小图片时显示大图
	$(".minit").on("mouseenter", "img", function() {
        
        //获取当前图片下标
		var index = $(this).index();
		
		if(index == 0) {
			index = 3;
		}
        
        //当前小图的状态
		$(this).css("border", "1px solid green").siblings().css("border", "1px solid gainsboro")
		
		//显示对应的大图
		$('.fdj li').eq(index - 1).show().siblings("li").hide();

	})

});