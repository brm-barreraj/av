//Función para enviar datos de un formulario a una url (la url y el fomulario deben tener el mismo valor)
function sendform(object) {
	var response;
	jQuery.ajax({
		method: "POST",
		url: object,
		dataType: "json",
        cache: false,
        async:false,
		data:jQuery("#"+object).serialize()
	})
	.done(function( reply ) {
    	showmessage(jQuery("#"+object),reply);
		response=reply;
	});
	return response;
}

//Funcíon que lee los atributo data de un nodo, tambien puede serializar un fomulario
function senddata($this,url) {
	var serialize=serializedata($this);
	var response;
	jQuery.ajax({
		method: "POST",
		url: url,
		dataType: "json",
        cache: false,
        async:false,
		data: serialize
	}).done(function( reply ) { response=reply; });
    jQuery("#message").html(response.message);
	return response;
}

//Funcíon para enviar un array, en php lo obtenemos en la posición data
function  sendarray(array,url){
	var serialize=JSON.stringify( array );
	serialize=JSON.parse(serialize);
	console.log(serialize);
	var response;
	jQuery.ajax({
		method: "POST",
		url: url,
		dataType: "json",
        cache: false,
        async:false,
		data: {data:serialize}
	}).done(function( reply ) { response=reply; });
	return response;
}


//Función para obtener datos de una url, se puede tbn enviar los artibutos data- del nodo
function getdata(object,$this="") {
	var serialize=serializedata($this);
	var response;
	jQuery.ajax({
		method: "POST",
		url: object,
		dataType: "json",
        cache: false,
        async:false,
        data:serialize
	}).done(function( reply ) { response=reply; });
	return response;	
}

function serializedata($this){

	var serialize="";

	if ( $this.is( "form" ) ) {
		serialize=$this.serialize();
	}else{
		$this.each(function() {
		  jQuery.each(this.attributes, function(index) {
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
