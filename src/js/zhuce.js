window.onload = function() {
	
	//获取用户名框
	var username = document.getElementById("name");
	
	//获取密码框
	var pwd = document.getElementById("pwd");
	
	//获取确认密码框
	var Npwd = document.getElementById("Npwd");
	
	//获取输入验证码框
	var yanzhengk = document.getElementById("yanzhengk");
	
	//获取验证码框
	var yanzhengm = document.getElementById("yanzhengm");
	
	//获取对应框的提示信息
	var txt1 = document.getElementById("txt1");
	var txt2 = document.getElementById("txt2");
	var txt3 = document.getElementById("txt3");
	var txt4 = document.getElementById("txt4");
	
	//验证用户名框
	username.onblur = function() {
		
		//判断用户名是否为4-20位,且由数字和字母组成并第一位不为数字
		if(/^\D[a-zA-Z0-9]{3,19}$/.test(this.value)) {
			
			//输入正确的用户名格式时的提示信息
			txt1.innerHTML = " ";
		} else {
			
			//输入用户名格式不正确时的提示信息
			txt1.innerHTML = "请输入4-20位非数字开头的数字、字母组成的用户名.";
		}
	}
	
	//验证密码框
	pwd.onblur = function(){
		
		//判断密码是否为6-12位，且由数字和字母组成
		if(/^[a-zA-Z0-9]{6,12}$/.test(this.value)){
			
			//输入正确的密码格式时的提示信息
			txt2.innerHTML = " ";
		}else{
			
			//输入不正确格式的密码时的提示信息
			txt2.innerHTML = "密码由英文字母、数字组成，长度6-12位."
		}
	}
	
	//确认密码框
	Npwd.onblur = function(){
		
		//判断输入的两次密码是否一致
		if(this.value==pwd.value){
			
			//输入两次密码一样的提示信息
			txt3.innerHTML = " ";
		}else{
			
			//输入两次密码不一样的提示信息
			txt3.innerHTML = "两次密码输入不一致."
		}
	}
	
	//验证验证码框
	yanzhengk.onblur = function(){
		
		//判断验证码是否正确
		if(this.value == yanzhengm.value){
			
			//验证码输入正确的提示信息
			txt4.innerHTML = "";
		}else{
			
			//验证码输入错误的提示信息
			txt4.innerHTML = "请输入正确的验证码";
		}
	}
	
	    //创建验证码
		var str = "";
		
		    //设置验证码的长度
			for(var i=0; i<4; i++){
				
				//随机出现数字、字母的条件
				var isNum = parseInt(Math.random() * 10) % 2;
				
				//判断isNum
				if(isNum){
					
					//随机出现一个数字
					str += parseInt(Math.random() * 10);
				}else{
					
					//随机出现一个字母
					str += String.fromCharCode(parseInt(Math.random() * 26) + 65);
				}
			}
			
    //将随机出现的验证码加载到对应的框上
	yanzhengm.value = str;
	
}