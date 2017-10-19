var load = function(){ 
  	var registraImei = function(){	
		connectApi('https://jsonplaceholder.typicode.com/posts', 'POST','json',"#registro-imei", function (result, object) {
			if(result){				
				document.getElementById("message").innerHTML = "Se ha guardado el imei correctamente";
			}else{
				if(object.status==404) {
					document.getElementById("message").innerHTML = "La página no existe";
		    	}
			}
		});	  				
	};

	document.querySelector("#registro-imei button").addEventListener('click', registraImei);
};

document.addEventListener("DOMContentLoaded", load, false);