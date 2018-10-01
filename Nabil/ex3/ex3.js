$(document).ready(function(){
	$("a[href]").attr("href","https://www.codefactory.wien")
	$("code").css("color","red")
	$("ol>li").css("background","#2a7b90");
	$("form textarea").attr("placeholder","Express your opinion")
	$("img").attr("src","https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png")
	$("blockquote").css({"background":"orange","font-style":"italic"})
	$("#logo").css("color","black");
	$(".gray").css("color","white");
	$("span.date").remove();
	$(".sidemenu").append("<li><a href='http://all-free-download.com/free-website-templates/'>New Templates</a></li><li><a href='http://all-free-download.com/free-website-templates/'>Order Template</a></li><li><a href='http://all-free-download.com/free-website-templates/'>Contact Us</a></li>");
	 $("#sidebar p:first").text("When someone says: I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");
});