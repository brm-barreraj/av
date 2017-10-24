$(document).ready(function(){

	$(".update-file").on( "click", function() {
		window.location = "editar-archivo?"+serializedata($(this));
	});

	$(".delete-file").on( "click", function() {
		var response=senddata($(this),"delete-file");
		$("#message").html(response.message);
	    if (response['boolean']) {
	      setTimeout(function(){ window.location = "archivos"; }, 3000);
	    }
	});

})