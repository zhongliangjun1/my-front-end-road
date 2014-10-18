
$(function(){

	demo1();

	function demo1() {  // error : var demo1 = function() {...} you know ?
		var tagSelectedId = 1;
		//  tab selected switch
		$('.tab').on('click', function(){
			var tagId = $(this).attr("tabId");
			tagSelectedId = parseInt(tagId);
			picSwitch(tagSelectedId);
		});

		// slide switch
		$('#left-btn').on('click', function(){
			if (tagSelectedId===1) {
				tagSelectedId = 6;
			} else {
				tagSelectedId = tagSelectedId - 1;
			}
			picSwitch(tagSelectedId);
		});
		$('#right-btn').on('click', function(){
			if (tagSelectedId===6) {
				tagSelectedId = 1;
			} else {
				tagSelectedId = tagSelectedId + 1;
			}
			picSwitch(tagSelectedId);
		});

		// time switch
		setInterval( function(){
			if (tagSelectedId===6) {
				tagSelectedId = 1;
			} else {
				tagSelectedId = tagSelectedId + 1;
			}
			picSwitch(tagSelectedId);
		}, 5000);

		var picSwitch = function(tagSelectedId) {
			$(".big-pic").removeClass("pic-show");
			$(".big-pic-"+tagSelectedId).addClass("pic-show");
			$(".tab-pic").removeClass("tab-pic-selector");
			$(".tab-pic-"+tagSelectedId).addClass("tab-pic-selector");
		}

		$("#main").on("mouseenter", function(){
			$('.desc').addClass("desc-stand");
		});
		$("#main").on("mouseleave", function(){
			$('.desc').removeClass("desc-stand");
		});




	};

	

});


