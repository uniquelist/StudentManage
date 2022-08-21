/**
 * 
 */
window.onload = function () {
	    document.getElementById("form").onsubmit = function () {
	        return checkUsername()&&checkPassword()&&checAginPassword() ;
	    }

	    document.getElementById("user").onblur = checkUsername;
	    document.getElementById("pwd").onblur = checkPassword;
	    document.getElementById("aginpwd").onblur=checkAginPassword;
	}

	function checkUsername() {
	    var username=document.getElementById("user").value;
	    var reg_username = /^([a-zA-Z0-9_-])/;
	    var flag =reg_username.test(username);
	    var s_username =document.getElementById("sname");
	    if (flag) {
	        s_username.innerHTML = "用户名有效";
	    } else {
	        s_username.innerHTML = "用户名格式有误！";
	    }
	    return flag;
	}

	//校验密码
	function checkPassword(){
	    var password = document.getElementById("pwd").value;
	    var reg_password = /^\w{6,12}$/;
	    var flag=reg_password.test(password);
	    var s_password=document.getElementById("spassword");
	    if(flag){
	        s_password.innerHTML = "密码正确";
	    }else{
	        s_password.innerHTML = "密码格式有误";
	    }
	    return flag;
	}
	function checkAginPassword(){
		var password = document.getElementById("pwd").value;
		var aginpassword = document.getElementById("aginpwd").value;
		var s_aginpwd =document.getElementById("aginpwd");
		if(aginpassword!=password)
			{
				alert("两次密码不一样!");
					return true;
			}
		else
			{
				return false;
			}
	}