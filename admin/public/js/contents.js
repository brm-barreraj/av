$(document).ready(function(){

	$(".update-content").on( "click", function() {
		window.location = "editar-contenido?"+serializedata($(this));
	});

	$(".delete-content").on( "click", function() {
		var response=senddata($(this),"delete-content");
		$("#message").html(response.message);
	    if (response['boolean']) {
	      setTimeout(function(){ window.location = "contenidos"; }, 3000);
	    }
		
	});

})