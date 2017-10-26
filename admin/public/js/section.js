var createuser;

jQuery(document).ready(function(){

    jQuery("#create-section button").on( "click", function() { section('create'); });
    jQuery("#update-section button").on( "click", function() { section('update'); });

    jQuery(".update-section").on( "click", function() {
      window.location = "editar-seccion?"+serializedata($(this));
    });

    jQuery(".configurate-section").on( "click", function() {
      window.location = "configurar-seccion?"+serializedata($(this));
    });

    jQuery(".delete-section").on( "click", function() {
      var response=senddata(jQuery(this),"delete-user");
      if (response['boolean']) {
        setTimeout(function(){ window.location = "usuarios"; }, 3000);
      }
    });

  if (typeof Sortable !== 'undefined') {

      var sections = $('#sections')[0];
      var menus = $('#menus')[0];
      var modules = $('#modules')[0];
      var contents = $('#contents')[0];

      new Sortable(sections, {
        group:{
          name: 'components',
          pull: false,
          put: true
        },
        sort: true,
        animation: 150,
        filter: '.remove',
        onAdd: function (e) {
          var items = e.to.children;
          var result = [];
          for (var i = 0; i < items.length; i++) {
              result.push($(items[i]).data('key'));
          }
          sendarray(result,"create-component");
        },
        onFilter: function (e) {
          console.log(e.item);
          //evt.item.parentNode.removeChild(evt.item);
        },
        onSort: function (e) {
          var items = e.to.children;
          var result = [];
          for (var i = 0; i < items.length; i++) {
              result.push($(items[i]).data('key'));
          }
          sendarray(result,"create-component");
        }
      });

      new Sortable(menus, { group:{ name: 'components', pull: true, put: false }, animation: 150, sort: false });
      new Sortable(modules, { group:{ name: 'components', pull: true, put: false }, animation: 150, sort: false });
      new Sortable(contents, { group:{ name: 'components', pull: true, put: false }, animation: 150, sort: false });
  }



})

section = function(action) {

  var form, message, response;
  form = jQuery('#'+action+'-section');
  showerrors(form);

  form.validate({
    rules: {
      route: {
        required: true
      },
      title: {
        required: true
      },
      description: {
        required: true
      },
      state: {
         valueNotEquals: 'default'
      }
    },
    messages: {
      route: {
        required: 'Digite la ruta'
      },
      title: {
        required: 'Digite el título'
      },
      description: {
        required: 'Digite la descripción'
      },
      state: {
        valueNotEquals: 'Seleccioné el estado'
      }
    }
  });
  if (form.valid()) {
    response=sendform(action+"-section");
    if (response['boolean']) {
          setTimeout(function(){ window.location = "secciones"; }, 3000);
    }
  }
};







