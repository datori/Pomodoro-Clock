$(document).ready(function(){
	$work = $("#work");
	$rest = $("#rest");
	work_val = Number($work.text());
	rest_val = Number($rest.text());

	$(".increment-work").click(function(){
		work_val += 1;
		updateVal();
	});
	$(".decrement-work").click(function(){
		work_val -= 1;
		updateVal();
	});

	$(".increment-rest").click(function(){
		rest_val += 1;
		updateVal();
	});
	$(".decrement-rest").click(function(){
		rest_val -= 1;
		updateVal();
	});

	$("#start").click(function(){
		$workRot = $(".work-rotator");
		$restRot = $(".rest-rotator");

		// Begin first rotator.
		$workRot.css({"opacity":"1", "transform":"rotate(360deg)","transition": `opacity 0.5s linear, transform ${work_val * 60}s linear`});
		// Animate BG to blue while in work.
		$("body").animate({backgroundColor:"#2196f3"}, work_val * 1000 * 60, 
			function(){
				// Remove first rotator. Fade transition is 500ms, so rotate to start is delayed 500ms.
				$workRot.css({"opacity":"0"});
				setTimeout(function(){ $workRot.css("transform", "rotate(0deg)") }, 500);
				// Begin second rotator.
				$restRot.css({"opacity":"1", "transform":"rotate(360deg)","transition": `opacity .5s linear, transform ${rest_val * 60}s linear`});
				// BG to white, both to clear pallete, and to provide visual feedback to the user.
				$("body").animate({backgroundColor:"rgb(205,205,205)"}, 0);
				// Begin animation to green while in rest.
				$("body").animate({backgroundColor:"#4caf50"}, rest_val * 1000 * 60, function(){
					// Remove second rotator.
					$restRot.css({"opacity":"0"});
					setTimeout(function(){ $restRot.css("transform", "rotate(0deg)") }, 500)
				});
				// Return to start BG.
				$("body").animate({backgroundColor:"rgb(50,50,50)"}, 500);
			}
		);
	});

	function updateVal(){
		$work.text(work_val)
		$rest.text(rest_val);
	}
});