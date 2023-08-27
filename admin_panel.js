function validate()
{
	var username = document.getElementById("uname");
	var password = document.getElementById("pass");


	if(username.value.trim() == "" || password.value.trim() == "")
	{
		username.style.border = "solid 3px red";
		password.style.border = "solid 3px red";
		alert("Blank input not allowed !");
		return false;
	}
	else if(username.value == "admin" && password.value == "admin123")
	{
		alert("Login Succesful , Welcome !");
		return true;
	}
	else
	{
		username.style.border = "solid 3px red";
		password.style.border = "solid 3px red";
		alert("Wrong Username or Password , Try Again");
		return false;
	}
}

//--------------------------------------------------------------------
function changebg1()
{
	var newbg1 = document.querySelector("#adminsetting");
	newbg1.style.background = "red";

}
function changebg2()
{
	var newbg2 = document.querySelector("#adminsetting");
	newbg2.style.background = "green";

}
function changebg3()
{
	var newbg3 = document.querySelector("#adminsetting");
	newbg3.style.background = "gray";

}
function changebg4()
{
	var newbg4 = document.querySelector("#adminsetting");
	newbg4.style.background = "blue";

}
function changebg5()
{
	var newbg5 = document.querySelector("#adminsetting");
	newbg5.style.background = "";

}

//--------------------------------------------------------------------
function font1()
{
	var newfont1 = document.querySelector("#adminsetting");
	var newfontt1 = document.querySelector("#body");
	newfont1.style.fontFamily = "arial";
	newfontt1.style.fontFamily = "arial";
}
function font2()
{
	var newfont2 = document.querySelector("#adminsetting");
	var newfontt2 = document.querySelector("#body");
	newfont2.style.fontFamily = "ranchers";
	newfontt2.style.fontFamily = "ranchers";
}
function font3()
{
	var newfont3 = document.querySelector("#adminsetting");
	var newfontt3 = document.querySelector("#body");
	newfont3.style.fontFamily = "cursive";
	newfontt3.style.fontFamily = "cursive";
}
function font4()
{
	var newfont4 = document.querySelector("#adminsetting");
	var newfontt4 = document.querySelector("#body");
	newfont4.style.fontFamily = "";
	newfontt4.style.fontFamily = "";
}

//----------------------------------------------------------------------
function fontC1()
{
	var newfontC1 = document.querySelector("#adminsetting");
	var newfonttC1 = document.querySelector("#body");
	newfontC1.style.color = "green";
	newfonttC1.style.color = "green";
}
function fontC2()
{
	var newfontC2 = document.querySelector("#adminsetting");
	var newfonttC2 = document.querySelector("#body");
	newfontC2.style.color = "blue";
	newfonttC2.style.color = "blue";
}
function fontC3()
{
	var newfontC3 = document.querySelector("#adminsetting");
	var newfonttC3 = document.querySelector("#body");
	newfontC3.style.color = "yellow";
	newfonttC3.style.color = "yellow";
}
function fontC4()
{
	var newfontC4 = document.querySelector("#adminsetting");
	var newfonttC4 = document.querySelector("#body");
	newfontC4.style.color = "";
	newfonttC4.style.color = "";
}
