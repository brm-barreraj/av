$(document).ready(function(){

	$(".update-module").on( "click", function() {
		window.location = "editar-modulo?"+serializedata($(this));
	});

	$(".configurate-module").on( "click", function() {
		window.location = "configurar-modulo?"+serializedata($(this));
	});

	$(".delete-module").on( "click", function() {
		var response=senddata($(this),"delete-module");
		$("#message").html(response.message);
		if (response['boolean']) {
      		setTimeout(function(){ window.location = "modulos"; }, 3000);
		}
	});

})