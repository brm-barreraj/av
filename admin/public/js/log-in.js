var login;

jQuery(document).ready(function(){

	jQuery("#log-in button").on( "click", function() { login(); });

})

login = function() {

  var form, message, response;
  form = jQuery('#log-in');
  showerrors(form);

  form.validate({
    rules: {
      ['user-or-email']: {
        required: true
      },
      password: {
        required: true
      }
    },
    messages: {
      ['user-or-email']: {
        required: 'Digite el usuario'
      },
      password: {
        required: 'Digite la contrseña'
      }
    }
  });
  if (form.valid()) {
		response=sendform("log-in");
		if (response['boolean']) {
      		setTimeout(function(){ window.location = "perfil"; }, 3000);
		}
  }
};