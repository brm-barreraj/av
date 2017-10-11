$(document).ready(function(){

	$(".update-user").on( "click", function() {
		window.location = "editar-usuario?"+serializedata($(this));
	});

	$(".delete-user").on( "click", function() {
		var message=senddata($(this),"delete-user");
		window.location = "usuarios";
	});

})