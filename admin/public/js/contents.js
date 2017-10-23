$(document).ready(function(){

	$(".update-content").on( "click", function() {
		window.location = "editar-contenido?"+serializedata($(this));
	});

	$(".delete-content").on( "click", function() {
		var message=senddata($(this),"delete-content");
		window.location = "contenidos";
	});

})