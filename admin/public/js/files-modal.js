$(document).ready(function(){

	$(".modal").on( "click", function() {
		var iamges=getdata("get-images");
		for (var i = 0; i < iamges.length; i++) {
			console.log(iamges[i]);
		}
	});

		var iamges=getdata("get-images");
		for (var i = 0; i < iamges.length; i++) {
			console.log(iamges[i]);
		}

})