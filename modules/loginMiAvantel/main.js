jQuery(document).ready(function(){
	jQuery.ajax({
		method: "POST",
		url: "module/loginMiAvantel/user",
		data: { name: "John", location: "Boston" }
	})
	.done(function( msg ) {
		//alert( "Data Saved: " + msg );
	});

	jQuery.ajax({
		method: "GET",
		url: "module/loginMiAvantel/user",
		data: { name: "John", location: "Boston" }
	})
	.done(function( msg ) {
		//alert( "Data Saved: " + msg );
	});
})