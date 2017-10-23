$(document).ready(function(){

	$("#create-user button").on( "click", function() {
		var response=sendform("create-user");
		if (response['boolean']) {
      		setTimeout(function(){ window.location = "usuarios"; }, 3000);
		}
	});

})