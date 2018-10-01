$(document).ready(function(){
	for(var i = 0; i < nab.length; i++){
		var res=("<div class='cart'><img class='img' src='img/"+nab[i].Picture+"'><p>"+nab[i].price+"</p><p>"+nab[i].status+"</p><button class='btn'>buy</button>");
		$("#container").prepend(res);
	}
		$(".btn").click(function(){
			$(this).parent().slideToggle(500);

		});

	/*$(".btn").click(function(){
		$(this).parent().prepend(res);

	});*/
});