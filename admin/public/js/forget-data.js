$(document).ready(function(){

	$("#forget-data").on( "click", function() {

		$.ajax({
			method: "POST",
			url: "forgetData",
			dataType: "json",
			data: { userOrEmail: $("#user-or-email").val()}
		})
		.done(function( msg ) {
			$("#message").html(msg.message);
		});			
	
	});


})