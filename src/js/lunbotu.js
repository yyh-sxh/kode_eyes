$(function() {
	var index = 0;
	var $ul = $("#Img ul");
	var len = $ul.children().length;

    //设置轮播图的初始状态
	init();
	picShow();

    //设置图片切换的时间间隔
	var timer = setInterval(function() {
		index++;
		
		//显示当前轮播图片
		picShow();
		
		//显示的图片对应的下标设为高亮状态
		$page.children().removeClass().eq(index).addClass('active');
	}, 5000)
    
    //设置页面和点击按钮
	function init() {
		$page = $("<div/>").addClass("page");
		
		//创建图片序号
		for(var i = 1; i <= len; i++) {
			var $span = $("<span/>");
            
            //图片序号初始状态
			if(i == 1) {
				$span.addClass("active");
			}

			$span.text(i).appendTo($page);
		}
		
		//将图片序号加载到页面中
		$page.appendTo($("#Img"));
        
        //点击图片下标按钮事件
		$page.on("click", "span", function() {
			
			//保存当前点击的序号
			index = $(this).index();
			
			//显示当前轮播图片
			picShow();
			
			//将当前点击的序号设为高亮状态，其他序号为默认状态
			$page.children().removeClass().eq(index).addClass('active');
		});
        
        //将上下页按钮添加到页面中
		$('<div/>').html('&gt;').addClass('next').appendTo($("#Img"));
		$('<div/>').html('&lt;').addClass('previous').appendTo($("#Img"));
		
		//点击下一页按钮触发的事件
		$(".next").on('click', function() {
			index++;
			
			//显示当前轮播图片
			picShow();
			
			//显示当前的轮播图片对应的序号设为高亮
			$page.children().removeClass().eq(index).addClass('active');
		});
        
        //点击上一页按钮触发的事件
		$(".previous").on('click', function() {
			index--;
			
			//显示当前轮播图片
			picShow();
			
			//显示当前的轮播图片对应的序号设为高亮
			$page.children().removeClass().eq(index).addClass('active');
		});

	}

    //图片轮播的方法
	function picShow() {
		
		//当图片到最后一张的时候令下一张图片为第一章图片
		if(index >= len) {
			index = 0;
		}
		
		//当图片为第一章图片的时候令前一张图片为最后一张
		else if(index < 0) {
			index = len - 1;
		}
		
		//图片渐变
		$ul.children().eq(index).animate({
			opacity: 1
		}).siblings('li').animate({
			opacity: 0
		});
	}
})