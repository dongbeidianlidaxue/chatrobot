//开场白延时显示
$(function(){
	setTimeout(palert,1500);  //第一个参数可以是函数指针，但不能是带括号的函数，不然会直接执行。
	function palert(){
		var $first_talking = $("<li class = 'first-talking'><div class = 'test-yaliya'><span>亚</span></div><div class = 'chat-info-others'>跪下来舔我的脚吧!</div></li>");
		$first_talking.appendTo($("ul.chats-list"));
	}
});

//ajax聊天交互部分
$(function(){
	document.querySelector("div.robot-submitbtn").onclick = function(){
	//1.获取填写的值，并把值存于变量中
 	var input_text = $("textarea.robot-footer").val();
	//2.判断填写的值是否为空，不为空则将值封装在HTML结构中,并将封装好的HTML追加在面板中
	/*<li class = "border">
					<div class = "test-myself"><span>我</span></div>
					<div class = "my-container">
					<div class = "chat-info-me">跪下来舔我的脚吧！跪下来舔我的脚吧！跪下来舔我的脚吧！跪下来舔我的脚吧！跪下来舔我的脚吧！跪下来舔我的脚吧！跪下来舔我的脚吧！跪下来舔我的脚吧！跪下来舔我的脚吧！跪下来舔我的脚吧！跪下来舔我的脚吧！跪下来舔我的脚吧！跪下来舔我的脚吧！跪下来舔我的脚吧！跪下来舔我的脚吧！跪下来舔我的脚吧！跪下来舔我的脚吧！跪下来舔我的脚吧！跪下来舔我的脚吧！</div>
				</li>*/
	var $create_li = $("<li class = 'border'></li>");
	$create_li.append($("<div class = 'test-myself'><span>我</span></div>"));
	$create_li.append($("<div class = 'my-container'></div>"));
	$ter").val("");
	// $("div[class |= 'robot'][class $= 'pannal']").animate({scrollTop:$(this).scrollHeight + 'px'},"slow");	
	//4.点击按钮，同时通过Ajax获取后台的答复
		//创建异步对象
	var xhr = new XMLHttpRequest();
		//请求行
	xhr.open("post","robot.php");
		//请求头
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		//设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200)
		{
	//5.将答复封装在HTML中，并将封装好的HTML追加在面板中		
			console.log(xhr.responseText);
	     //封住返回内容
 		/*<li>
			<div class = "test-yaliya"><span>亚</span></div>
			<div class = "chat-info-others">跪下来舔我的脚吧!</div>
		</li>*/
		var $create_other = $(
					"<li><div class = 'test-yaliya'><span>亚</span></div><div class = 'chat-info-others'>"+ xhr.responseText +"</div></li>");
		$create_other.appendTo("ul.chats-list");
		var height = document.querySelector("div[class |= 'robot'][class $= 'pannal']").scrollHeight;
		document.querySelector("div[class |= 'robot'][class $= 'pannal']").scrollTop = height;
		} //对应if的大括号
	}
		//发送请求
	xhr.send("my_say=" + input_text);
	}
});

//按钮动态化
$(function(){
	//1.获取按钮对象
	var $submitbtn = $(".robot-submitbtn")
	var default_border = $submitbtn.css("border");
 	//2.当按下鼠标时去掉外边框
 	//3.当抬起鼠标时获得外边框
 	$submitbtn.mousedown(function(){
 		//检测时间是否绑定成功
 		console.log("已按下");
 		$submitbtn.css("border","0px");
 	}).mouseup(function(){
 		$submitbtn.css("border",default_border);
 	});
	//当点击检测到回车被按下时，自动发送数据并设置样式
});
