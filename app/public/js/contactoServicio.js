var load = function(){ 
  	var contactoServicio = function(){	
		connectApi('https://jsonplaceholder.typicode.com/posts', 'POST','json',"#contacto-servicio", function (result, object) {
			if(result){				
				document.getElementById("message").innerHTML = "Se ha enviado correctamente";
			}else{
				if(object.status==404) {
					document.getElementById("message").innerHTML = "La página no existe";
		    	}
			}
		});	  				
	};

	document.querySelector("#contacto-servicio button").addEventListener('click', contactoServicio);
};

document.addEventListener("DOMContentLoaded", load, false);
