var score = {
	correct: 0,
	incorrect: 0
}



$("div").addClass("hide");

$(".start").click(function(event){

	$(this).toggleClass("hide");
	$(this).next().toggleClass("hide");

});

$("form").submit(function(event) {

	event.preventDefault();

	var answer = $(this).parent().find(".correct").val();

	var guess = $(this).parent().find("input:checked").val();


	if ( answer == guess) {
		$(this).parent().find("p").text("Correct!");
		score.correct += 1;
	}

	else {
		$(this).parent().find("p").text("Incorrect. The answer is: " + answer);
		score.incorrect +=1
	}

	$(this).parent().find(".submit").toggleClass("hide");

	$(this).parent().find("button").toggleClass("hide");

	var total = score.correct + " correct, " + score.incorrect + " incorrect";
 	var finalTotal = score.correct + " correct<br>"+ score.incorrect + " incorrect";
	$(".Score").html(total);
	$(".score").html(finalTotal);


});

$(".next").click(function(event) {

	event.preventDefault();

	$(this).parent().parent().toggleClass("hide");
	$(this).parent().parent().next().toggleClass("hide");

});

$(".again").click( function(event) {

	score.correct=0;
	score.incorrect=0;
	$(".Score").empty();
	$(".score").empty();
	$(".submit").removeClass("hide");
	$(".next").addClass("hide");
	$(".start").toggleClass("hide");
	$(".Results").toggleClass("hide");

});


