$(document).ready(function(){

	$(".update-menu").on( "click", function() {
		window.location = "editar-menu?"+serializedata($(this));
	});

	$(".delete-menu").on( "click", function() {
		senddata($(this),"delete-menu");
		window.location = "menus";
	});

})