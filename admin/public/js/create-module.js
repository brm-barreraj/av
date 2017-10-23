$(document).ready(function(){
	$("#create-module button").on( "click", function() {
		var response=sendform("create-module");
		if (response['boolean']) {
      		setTimeout(function(){ window.location = "contenidos"; }, 3000);
		}
	});
});