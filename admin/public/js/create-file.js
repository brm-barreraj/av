$(document).ready(function(){

	$("#create-file").dropzone({ 
		maxFilesize: 2,
		acceptedFiles:'image/*,video/*',
		dictDefaultMessage: "Arrastra los archivos aqui"
	});

});