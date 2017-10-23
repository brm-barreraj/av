$(document).ready(function(){

	$("#create-content button").on( "click", function() {
		var response=sendform("create-content");
		if (response['boolean']) {
      		setTimeout(function(){ window.location = "contenidos"; }, 3000);
		}
	});

})