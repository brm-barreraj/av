$(document).ready(function(){

	$(".update-menu").on( "click", function() {
		window.location = "editar-menu?"+serializedata($(this));
	});

	$(".delete-menu").on( "click", function() {
		var response=senddata($(this),"delete-menu");
		if (response['boolean']) {
      		setTimeout(function(){ window.location = "menus"; }, 3000);
		}
	});

})