//Función para enviar datos de un formulario a una url (la url y el fomulario deben tener el mismo valor)
function sendform(object) {
	var response;
	$.ajax({
		method: "POST",
		url: object,
		dataType: "json",
        cache: false,
        async:false,
		data:$("#"+object).serialize()
	})
	.done(function( msg ) {
		response=msg;
		$("#message").html(msg.message);
	});
	return response;
}

//Funcíon que lee los atributo data de un nodo, tambien puede serializar un fomulario
function senddata($this,url) {
	var serialize=serializedata($this);
	var response;
	$.ajax({
		method: "POST",
		url: url,
		dataType: "json",
        cache: false,
        async:false,
		data: serialize
	})
	.done(function( msg ) {
		response=msg;
	});
	return response;
}

function serializedata($this){

	var serialize="";

	if ( $this.is( "form" ) ) {
		serialize=$this.serialize();
	}else{
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
		serialize=serialize.slice(0,-1)
	}

	return serialize;
}

//Función para obtener datos de una url, se puede tbn enviar los artibutos data- del nodo
function getdata(object,$this) {
	var serialize=serializedata($this);
	var response="";
	$.ajax({
		method: "POST",
		url: object,
		dataType: "json",
        cache: false,
        async:false,
        data:serialize
	})
	.done(function( msg ) {
		response=msg;
	});
	return response;	
}