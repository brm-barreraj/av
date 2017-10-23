$(document).ready(function(){
	
	$('#tree').hortree({
		data: getdata("tree",$("#fhater"))
	});

	$(".update-item").on( "click", function(e) {
		e.preventDefault();
		var item=$(this).attr("data-id");
		senddata($("#item-"+item),"update-menu");
	});

	$(".delete-item").on( "click", function(e) {
		e.preventDefault();
		var item=$(this).attr("data-id");
		senddata($("#item-"+item),"delete-menu");
	});
	
	
})

