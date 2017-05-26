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
		// Begin rotator animation.
		$(".work-rotator").css({"opacity":"1", "transform":"rotate(360deg)","transition": `opacity 0.5s linear, transform ${work_val}s linear`});
		$("body").animate({backgroundColor:"#2196f3"}, work_val * 1000, 
			function(){
				// Remove first rotator.
				$(".work-rotator").css({"opacity":"0"});
				// Begin second rotator.
				$(".rest-rotator").css({"opacity":"1", "transform":"rotate(360deg)","transition": `opacity .5s linear, transform ${rest_val}s linear`});
				$("body").animate({backgroundColor:"rgb(205,205,205)"}, 0);
				$("body").animate({backgroundColor:"#4caf50"}, rest_val * 1000, function(){
					// Remove second rotator.
					$(".rest-rotator").css({"opacity":"0"});
				});
				$("body").animate({backgroundColor:"rgb(50,50,50)"}, 500);
			}
		);
	});

	$("#reset").click(function(){
		work_val = 1;
		rest_val = 1;
		updateVal();
	});

	function updateVal(){
		$work.text(work_val)
		$rest.text(rest_val);
	}
});