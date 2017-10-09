$(document).ready(function(){

	$("#register").on( "click", function() {

		$.ajax({
			method: "POST",
			url: "newUser",
			dataType: "json",
			data: { user: $("#user").val(), email: $("#email").val(), password: $("#password").val()}
		})
		.done(function( msg ) {
			$("#message").html(msg.message);
		});		
	});


})