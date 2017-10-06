jQuery(document).ready(function(){
	jQuery.ajax({
		method: "POST",
		url: "module/algo/user",
		data: { name: "John", location: "Boston" }
	})
	.done(function( msg ) {
		//alert( "Data Saved: " + msg );
	});

	jQuery.ajax({
		method: "GET",
		url: "module/algo/user",
		data: { name: "John", location: "Boston" }
	})
	.done(function( msg ) {
		//alert( "Data Saved: " + msg );
	});
})