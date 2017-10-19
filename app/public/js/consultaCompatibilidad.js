var load = function(){ 
  	var consultaCompatibilidad = function(){	
		connectApi('https://jsonplaceholder.typicode.com/posts', 'POST','json',"#consulta-compatibilidad", function (result, object) {
			if(result){				
				document.getElementById("message").innerHTML = "el equipo es compatible";
			}else{
				if(object.status==404) {
					document.getElementById("message").innerHTML = "La página no existe";
		    	}
			}
		});	  				
	};

	document.querySelector("#consulta-compatibilidad button").addEventListener('click', consultaCompatibilidad);
};

document.addEventListener("DOMContentLoaded", load, false);