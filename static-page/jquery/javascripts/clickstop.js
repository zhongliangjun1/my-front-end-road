
$(function(){

	$('#container-prevent').on('click', function(e){
		console.log('click');
		e.preventDefault();
	});

	$('#click-stop').on('click', function(e){
		console.log('click');
		e.stopPropagation();
	});

	$('#container-stop').on('click', function(e){
		alert('get it!');
	});

});