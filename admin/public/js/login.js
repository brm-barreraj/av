$(document).ready(function(){

	$("#login").on( "click", function() {
		$.ajax({
			method: "POST",
			url: "validateCredentials",
			data: { user: $("#user"), password: $("#password")}
		})
		.done(function( msg ) {
			//alert( "Data Saved: " + msg );
		});		
	});


})