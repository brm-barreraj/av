$(document).ready(function(){

	$("#update-module button").on( "click", function() {
		var response=sendform("update-module");
		if (response['boolean']) {
      		setTimeout(function(){ window.location = "modulos"; }, 3000);
		}
	});

})