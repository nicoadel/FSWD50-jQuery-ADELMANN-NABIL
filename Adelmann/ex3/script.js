$(document).ready(function(){
	$("a[href]").attr("href","https://www.w3schools.com/jquery/");
	$("code").css("color","red");
	$("ol li").css("background-color","#2a7b90");
	$("form input").val("Express your opinion");
	$("img").attr("src","https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png");
	$("blockquote").css("background-color","orange").css("font-style","italic");
	$("#logo").css("color","black");
	$(".gray").css("color","white");
	$(".date").remove();
	$(".sidemenu").append("<li><a>New Templates</a></li><li><a>Order Templates</a></li><li><a>Contact us</a></li>");
	$("#sidebar p:first").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");
	})