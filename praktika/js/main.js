$(function(){

	var lift1 = $(".lift1");
	var lift2 = $(".lift2");
	var lift3 = $(".lift3");


	$('.lift').each(function(i,el){

     // var tLeft = Math.floor(Math.random()*500),
       var tBottom = Math.floor(Math.random()*500),
       tTop  = Math.floor(Math.random()*500);

    	$(el).css({position:'relative',bottom: tBottom, top: tTop});

	});

	$('.man-button').click(function() {
		if (true) {}
	});
});