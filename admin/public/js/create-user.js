var createuser;

jQuery(document).ready(function(){

	jQuery("#create-user button").on( "click", function() { createuser(); });

})

createuser = function() {

  var form, message, response;
  form = jQuery('#create-user');
  showerrors(form);

  form.validate({
    rules: {
      user: {
        minlength: 4
      },
      email: {
        email: true
      },
      name: {
        required: true
      },
      lastname: {
        required: true
      },
      profile: {
         valueNotEquals: 'default'
      },
      state: {
         valueNotEquals: 'default'
      }
    },
    messages: {
      user: {
        minlength: 'El usurio no puede ser menor de 4 carateres'
      },
      email: {
        email: 'Correo electr&oacute;nico erroneo (ejemplo@dominio.com).'
      },
      name: {
        minlength: 'Digite el nombre'
      },
      lastname: {
        minlength: 'Digite el apellido'
      },
      profile: {
        valueNotEquals: 'Seleccione el perfil'
      },
      state: {
        valueNotEquals: 'Seleccione el estado'
      }
    }
  });
  if (form.valid()) {
		response=sendform("create-user");
		if (response['boolean']) {
      		setTimeout(function(){ window.location = "usuarios"; }, 3000);
		}
  }
};