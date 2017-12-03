var random_result;
var win = 0;
var lost = 0;
var previous = 0;



var resetAndStart = function (){

	$(".crystals").empty();

	var images = [
				'https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/1f71c9fd-6a2b-4397-8505-069f472ab3a8.jpg._CB521559690__SL300__.jpg', 
				'https://vignette.wikia.nocookie.net/mgefanon/images/6/69/Kinetic_Crystal.jpg/revision/latest?cb=20150409231719', 
				'https://www.nature.com/polopoly_fs/7.45449.1500565223!/image/WEB_Crystal.jpg_gen/derivatives/landscape_630/WEB_Crystal.jpg', 
				'http://beadage.net/wp-content/uploads/2015/08/blue-zircon-crystal-gemstone.jpg'];

	random_result = Math.floor(Math.random() *101) + 19;
	$("#result").html('Random Result: ' + random_result);

	for(var i=0; i < 4; i++){

		var random = Math.floor(Math.random() *11) + 1;
		console.log(random);

		var crystal = $("<div>");
		crystal.attr({"class":'crystal',
			"data-random": random
	})
		crystal.css({
			"background-image":"url('" + images[i] + "')",
			"background-size":"cover"
					});
		$(".crystals").append(crystal);
	}

	$("#previous").html("Total Score: " + previous);
}

resetAndStart();


$(document).on('click',".crystal", function (){

	var num = parseInt($(this).attr('data-random'));

	previous += num;

	$("#previous").html("Total Score: " + previous);

	if(previous > random_result){

		lost++;

		$("#lost").html("You Lost: " + lost);

		previous = 0;
		
		resetAndStart();
	}
	else if(previous === random_result){
		win++;

		$("#win").html("You Win: " + win);

		
		previous = 0;


		resetAndStart();
	}

});