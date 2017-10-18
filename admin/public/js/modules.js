$(document).ready(function(){

	$(".update-module").on( "click", function() {
		window.location = "editar-modulo?"+serializedata($(this));
	});

	$(".configurate-module").on( "click", function() {
		window.location = "configurar-modulo?"+serializedata($(this));
	});

	$(".delete-module").on( "click", function() {
		senddata($(this),"delete-module");
		window.location = "modulos";
	});

})