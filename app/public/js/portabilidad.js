var nip = true, sim= true;

var load = function(){ 
	/*
		Consulta si la linea se puede hacer portable
	*/
  	var portabilidad = function(){	
		connectApi('https://jsonplaceholder.typicode.com/posts', 'POST','json',"#consulta-portabilidad", function (result, object) {
			if(result){				
				if(nip){
					document.getElementById("recuerda-nip").style.display = 'block';
					document.getElementById("consulta-portabilidad-main").style.display = 'none';
				}else{
					document.getElementById("consulta-portabilidad-main").style.display = 'none';
					document.getElementById("nip").style.display='block';
				}
			}else{
				if(object.status==404) {
					document.getElementById("message").innerHTML = "La página no existe";
		    	}
			}
		});	  				
	};

	/*
		En caso de recordar el nip
	*/
	var rememberNip = function(){
		document.getElementById("recuerda-nip").style.display="none";
		document.getElementById("validate-nip-main").style.display='block';
	}

	/*
		En caso de no recordar el nip
	*/
	var notRememeberNip = function(){
		document.getElementById("message").innerHTML = "Se ha enviado de nuevo el NIP";
		document.getElementById("recuerda-nip").style.display="none";
		document.getElementById("validate-nip-main").style.display='block';
	}

	/*
		Solicita el NIP por primera vez
	*/
	var solicitudNip = function(){
		connectApi('https://jsonplaceholder.typicode.com/posts', 'POST','json',"#solicitud-nip", function (result, object) {
			if(result){				
				if(sim){
					document.getElementById("nip").style.display='none';
					document.getElementById("validate-nip-main").style.display='block';
					document.getElementById("message").innerHTML = "Se ha enviado el NIP";
				}
			}else{
				if(object.status==404) {
					document.getElementById("message").innerHTML = "La página no existe";
		    	}
			}
		});
	};

	var validarNip = function(){
		connectApi('https://jsonplaceholder.typicode.com/posts', 'POST','json',"#validate-nip", function (result, object) {
			if(result){							
				document.getElementById("validate-nip-main").style.display='none';
				document.getElementById("sim").style.display='block';			
			}else{
				if(object.status==404) {
					document.getElementById("message").innerHTML = "La página no existe";
		    	}
			}
		});
	}

	/*
		En caso de tener sim card
	*/
	var haveSim = function(){
		document.getElementById("portabilidad-main").style.display="block";
		document.getElementById("sim").style.display='none';
	}

	/*
		Solicitud portabilidad
	*/
	var solicitudPortabilidad = function(){	
		connectApi('https://jsonplaceholder.typicode.com/posts', 'POST','json',"#portabilidad", function (result, object) {
			if(result){				
				document.getElementById("estado-main").style.display='block';
				document.getElementById("numero-radicacion").innerHTML="ABC-1234567";
				document.getElementById("portabilidad-main").style.display='none';				
			}else{
				if(object.status==404) {
					document.getElementById("message").innerHTML = "La página no existe";
		    	}
			}
		});	  				
	};



	/*Eventos*/
	document.querySelector("#consulta-portabilidad #consulta-portabilidad").addEventListener('click', portabilidad);
	document.querySelector("#solicitud-nip button").addEventListener('click', solicitudNip);
	document.querySelector("#haveSim").addEventListener('click', haveSim);	
	document.querySelector("#portabilidad button").addEventListener('click', solicitudPortabilidad);
	document.querySelector("#rememberNip").addEventListener('click', rememberNip);
	document.querySelector("#notRememberNip").addEventListener('click', notRememeberNip);
	document.querySelector("#validate-nip button").addEventListener('click', validarNip);
};

document.addEventListener("DOMContentLoaded", load, false);
