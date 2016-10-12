$(function(){
    
    //获取商品的属性
	var price1 = getCookie("price1");
	var price2 = getCookie("price2");
	var price3 = getCookie("price3");
	var name = getCookie("name")
	var img = getCookie("img")
	var num = getCookie("num")

	
	//当商品存在时，将商品的属性加载到购物车上
	if(name){
		
		//隐藏空购物车时的状态
		$(".not_shop").hide();
		
		//创建购物车列表的头部并加载到页面中
		var $ul_nav = $("<ul class='shop_nav'/>")
		$("<li class='one'/>").text("商品").appendTo($ul_nav)
		$("<li class='tow'/>").text("数量").appendTo($ul_nav)
		$("<li class='three'/>").text("单价").appendTo($ul_nav)
		$ul_nav.appendTo($("#shop"))
		
		//创建商品的属性并加载到页面中
		var $ul = $("<ul class='shop_banner'/>")
		$list = $("<li/>")
		$("<span class='imgpic'/>").html($("<img src='"+ img+"'/>")).appendTo($list);
		$("<span class='shop_name'/>").html(name).appendTo($list)
		$("<span class='num'/>").html(num).appendTo($list)

        //商品数量为1件时的单价
		if(parseInt(num) == 1){
			$("<span class='shop_price'/>").html(price1).appendTo($list)
			
			//计算商品的总价钱
			$(".balance_price").text(parseInt(num)*158)
			
		}
		
		//商品数量为2件到3件时的单价
		else if(parseInt(num) > 1 && parseInt(num) <=3){
			$("<span class='shop_price'/>").html(price2).appendTo($list)
			
			//计算商品的总价钱
			$(".balance_price").text(parseInt(num)*138)
			
		}
		
		//商品为4件以上时的单价
		else if(parseInt(num) >= 4){
			$("<span class='shop_price'/>").html(price3).appendTo($list)
			
			//计算商品的总价钱
			$(".balance_price").text(parseInt(num)*118)
		}
		
						
		$list.appendTo($ul);
		
		$ul.appendTo($("#shop"))
		
		
		//创建继续购物链接
		$("<a/>").text("继续购物").attr("href","../index.html").appendTo($(".back_index"))
		
	}
	
	else{
		
		//没有商品时显示空的购物车
		$(".not_shop").show();
	}
	

})
