$(document).ready(function(){

	$("#login").on( "click", function() {

		$.ajax({
			method: "POST",
			url: "login",
			dataType: "json",
			data: { userOrEmail: $("#user-or-email").val(),password: $("#password").val()}
		})
		.done(function( msg ) {
			$("#message").html(msg.message);
		});			
	
	});


})