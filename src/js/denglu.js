window.onload = function() {
	
	//获取用户名
	var username = document.getElementById("name")
	
	//获取密码
	var userpwd = document.getElementById("pwd")
	
	//获取记住用户名和密码框
	var jzmm = document.getElementById("jzmm");
	
	//获取登录按钮
	var btn = document.getElementsByClassName("btn")

	//获取保存的用户名和密码
	var odlName = getCookie("name");
	var oldPwd = getCookie("pwd");
	
	//判断保存的用户名是否存在，如果存在将保存用户名和密码赋值上去
	if(odlName) {
		username.value = odlName;
		userpwd.value = oldPwd;
	}
    
    //点击记住用户名和密码按钮事件
	jzmm.onclick = function() {
		var Name = username.value;
		var Pwd = userpwd.value;
		
		//判断记住密码框是否被选中，如果选中将用户名和密码保存下来
		if(jzmm.checked) {
			var d = new Date;
			d.setDate(d.getDate() + 10)
			var name = setCookie("name", Name, d);
			var pwd = setCookie("pwd", Pwd, d);
		}
	}
	
	//点击登录按钮时跳转到主页
	btn.onclick = function(){
		open("../index.html")
	}
}