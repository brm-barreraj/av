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
function connectApi(url, type, dataType, form, callback) {
	var result = null;
	
	jQuery.ajax({
		url:url,
		type:type,
		dataType:dataType,
		data:jQuery(form).serialize(),		
	})
	.done(function(data){
		callback(true,data);
	})
	.fail(function(jqXHR){
		callback(false,jqXHR);
	});
}