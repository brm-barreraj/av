$(document).ready(function(){

	$("#log-in button").on( "click", function() {
		var response=sendform("log-in");
		if (response['boolean']) {
      		setTimeout(function(){ window.location = "perfil"; }, 3000);
		}
	});

})