$(document).ready(function(){

	$("#update-file button").on( "click", function() {
		var response=sendform("update-file");
		if (response['boolean']) {
      		setTimeout(function(){ window.location = "archivos"; }, 3000);
		}
	});

})