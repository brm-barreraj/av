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
        required: true
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
        required: 'Digite el usuario'
      },
      email: {
        email: 'Correo electr&oacute;nico erroneo (ejemplo@dominio.com).'
      },
      name: {
        required: 'Digite el nombre'
      },
      lastname: {
        required: 'Digite el apellido'
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