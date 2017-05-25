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
		$("body").animate({backgroundColor:"blue"}, work_val * 1000 * 60, 
			function(){
				$("body").animate({backgroundColor:"rgb(250,250,250)"}, 0);
				$("body").animate({backgroundColor:"green"}, rest_val * 1000 * 60);
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