$(document).ready(function(){

 	var maxItems = 10; 
    var wrapper = $("#items-wrap");
    var item=
	itme+='<fieldset>';
	itme+='<legend>Item 1</legend>';
	itme+='<div>';
	itme+='<label for="item-1">Item </label>';
	itme+='<input type="text" name="texto[]" id="texto-1" placeholder="Digite el texto 1">';
	itme+='<input type="text" name="url[]" id="url-1" placeholder="Digite la url item 1">';
	itme+='</div>';
	itme+='</fieldset>';
    
    var x = 1; 
    $("#add-item").click(function(e){
        e.preventDefault();
        if(x < maxItems){ 
            x++; 
            $(wrapper).append('<div><input type="text" name="item[]" id="item-'+x+'" placeholder="Digite el item '+x+'"/><a href="#" class="remove-item">Eliminar item</a></div>');
        }
    });
    
    $(wrapper).on("click",".remove-item", function(e){
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })

	$("#create-menu button").on( "click", function() {
		sendform("create-menu");
	});

})