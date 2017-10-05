$(document).ready(function(){

	$("#forget-data").on( "click", function() {
		$.ajax({
			method: "POST",
			url: "forgetData",
			data: { userOrEmail: $("#user-or-email")}
		})
		.done(function( msg ) {
		});		
	});


})