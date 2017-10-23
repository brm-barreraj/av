var latitude= null, longitude = null, map =  null;

var locationInitial = function(){
	var startPos;
	var geoSuccess = function(position) {
		startPos = position;
		latitude = startPos.coords.latitude;
		longitude = startPos.coords.longitude;
		initMap();
	};
	var geoError = function(error) {
    	latitude= -34.397;
    	longitude = 150.644;
    	initMap();
	};
	navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};

var initMap = function(){
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: latitude, lng: longitude},
	  zoom: 17
	});
}

var load = function(){ 
  	var cobertura = function(){	  		
		connectApi('https://jsonplaceholder.typicode.com/users', 'GET','json',"#cobertura", function (result, object) {
			if(result){				
				for (var i = 0; i < object.length; i++) {
					var marker = new google.maps.Marker({
					    position: {
					    	lat: (latitude+(i/10000)),
					    	lng: (longitude+(i/10000))
					    },
					    title: 'Hello World!'
				  	});
				  	marker.setMap(map);
				}
			}else{
				if(object.status==404) {
					document.getElementById("message").innerHTML = "La página no existe";
		    	}
			}
		});	  				
	};
	document.querySelector("#cobertura button").addEventListener('click', cobertura);
};

document.addEventListener("DOMContentLoaded", load, false);

