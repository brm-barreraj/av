$(document).ready(function(){

	$(".update-file").on( "click", function() {
		window.location = "editar-archivo?"+serializedata($(this));
	});

	$(".delete-file").on( "click", function() {
		var message=senddata($(this),"delete-file");
		//window.location = "archivos";
	});

})