$(document).ready(function(){

	$("#update-file button").on( "click", function() {
		sendform("update-file");
	});

})
var insert;

insert = function() {
  var dataform, finale, form;
  form = jQuery('#form-create-case');
  showerrors(form);
  form.validate({
    errorClass: 'error',
    validClass: 'valid',
    errorElement: 'label',
    rules: {
      nombre: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      tema: {
        required: true,
        notEqualTo: '0'
      },
      descripcion: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      nombre: {
        required: 'Digite un nombre',
        minlength: 'El nombre no puede ser menor de 2 carateres',
        maxlength: 'El nombre no puede ser mayor de 15 carateres'
      },
      tema: {
        required: 'Seleccione un tema.',
        notEqualTo: 'Seleccione un tema.'
      },
      descripcion: {
        required: 'Su caso debe contener mínimo 150 caracteres.',
        minlength: 'Su caso debe contener mínimo 150 caracteres.'
      }
    }
  });
  if (form.valid()) {
    finale = sendformajax('insert', 'caso', form, '', 'json');
    switch (finale[0]) {
      case true:
        jQuery('#description').val(jQuery('#descripcion').val());
        jQuery('#numregistro').val(finale[2]);
        dataform = jQuery('#salesforce-form').serialize();
        jQuery.ajax({
          url: 'https://www.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8',
          type: 'POST',
          cache: false,
          async: false,
          data: dataform
        });
        dataLayer.push({
          'event': 'caso enivado'
        });
        redirectpage('mi-perfil');
        break;
      case false:
        dataLayer.push({
          'event': 'caso no enivado'
        });
        redirectpage('crear-caso', '#message=0');
        break;
      case 'block':
        redirectpage('autenticaion');
    }
  } else {
    return false;
  }
  return false;
};