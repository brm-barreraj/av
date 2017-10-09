$(document).ready(function(){

	$("#update-user").on( "click", function() {

		$.ajax({
			method: "POST",
			url: "updateUser",
			dataType: "json",
			data: { name: $("#name").val(),lastname: $("#lastname").val(),email: $("#email").val()}
		})
		.done(function( msg ) {
			$("#message").html(msg.message);
		});			
	
	});


})