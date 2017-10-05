$(document).ready(function(){
			console.log("asd");

	$("#edit-profile").on( "click", function() {
		$.ajax({
			method: "POST",
			url: "editProfile",
			data: { user: $("#user").val(), email: $("#email").val(), password: $("#password").val()}
		})
		.done(function( msg ) {
			$("#message").html(msg.message);
		});		
	});


})