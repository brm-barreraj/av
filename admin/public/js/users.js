$(document).ready(function(){

	$(".update-user").on( "click", function() {
		window.location = "editar-usuario?"+serializedata($(this));
	});

	$(".delete-user").on( "click", function() {
		var response=senddata($(this),"delete-user");
		$("#message").html(response.message);
	    if (response['boolean']) {
	      setTimeout(function(){ window.location = "usuarios"; }, 3000);
	    }
	});

})