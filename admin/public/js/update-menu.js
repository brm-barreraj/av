$(document).ready(function(){
	
	$('#tree').hortree({
		data: getdata("tree",$("#fhater"))
	});

	$(".update-item").on( "click", function(e) {
		e.preventDefault();
		var item=$(this).attr("data-id");
		var response=senddata($("#item-"+item),"update-menu");
		$("#message").html(response.message);
	});

	$(".delete-item").on( "click", function(e) {
		e.preventDefault();
		var item=$(this).attr("data-id");
		var response=senddata($("#item-"+item),"delete-menu");
		$("#message").html(response.message);
	});
	
	
})

