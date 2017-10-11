//Función para enviar datos de un formulario a una url (la url y el fomulario deben tener el mismo valor)
function sendform(object) {
	$.ajax({
		method: "POST",
		url: object,
		dataType: "json",
		data:$("#"+object).serialize()
	})
	.done(function( msg ) {
		$("#message").html(msg.message);
	});			
}

function senddata($this,url) {
	var serialize=serializedata($this);
	var message;
	$.ajax({
		method: "POST",
		url: url,
		dataType: "json",
		data: serialize
	})
	.done(function( msg ) {
		message=msg;
	});
	return message;
}

function createtemporarydata($this) {
	var serialize=serializedata($this);
	$.ajax({
		method: "POST",
		url: 'create-temporary-data',
		dataType: "json",
		data: serialize
	});		
}

function serializedata($this){

	var serialize="";
	$this.each(function() {
	  $.each(this.attributes, function(index) {
	    if(this.specified) {
	    	if (this.name.match("^data-")) {
	     		var name=this.name.split("data-");
	     		serialize+=name[1]+"="+this.value+"&";
			}
	    }
	  });
	});
	return serialize.slice(0,-1);
}