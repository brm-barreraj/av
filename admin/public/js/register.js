$(document).ready(function(){
			console.log("asd");

	$("#register").on( "click", function() {
			console.log("asd-2");

		$.ajax({
			method: "POST",
			url: "newUser",
			data: { user: $("#user").val(), email: $("#email").val(), password: $("#password").val()}
		})
		.done(function( msg ) {
			$("#message").html(msg.message);
		});		
	});


})