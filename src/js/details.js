$(function() {
	
	//点击加入购物车按钮事件
	$("#btn6").on("click", function() {
		
		//获取商品的属性
		var price1 = $("#shop_price1").text();
		var price2 = $("#shop_price2").text();
		var price3 = $("#shop_price3").text();
		var name = $("#shop_name").text();
		var img = $(".minit img").eq(0).attr("src");
		var num = parseInt($(".txt1").val()) + parseInt($(".txt2").val())
		
        
        //设置cookie保存商品的属性
		var d = new Date;
		d.setDate(d.getDate() + 7);
		var Price1 = setCookie("price1", price1, d);
		var Price2 = setCookie("price2", price2, d);
		var Price3 = setCookie("price3", price3, d);
		var Name = setCookie("name",name,d);
		var Img = setCookie("img",img,d)
		var Num = setCookie("num",num,d)
		
		//点击加入购物车后的弹框
		alert("加入购物车成功")
		
	})
	
})