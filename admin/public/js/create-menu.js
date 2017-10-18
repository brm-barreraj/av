$(document).ready(function(){

 	var maxItems = 10; 
    var wrapper = $("#items-wrap");

    
    var x = 1; 
    $("#add-item").click(function(e){
        e.preventDefault();
        if(x < maxItems){ 
            x++; 
            $(wrapper).append(cretateitem(x));
        }
    });
    
    $(wrapper).on("click",".remove-item", function(e){
        e.preventDefault(); $(this).parent('fieldset').remove(); x--;
    })

	$("#create-menu button").on( "click", function() {
		sendform("create-menu");
	});

})

function cretateitem(number) {
    var item=
		item+='<fieldset>';
		itme+='<button class="remove-item">Eliminar item</button>'
		item+='<legend>Item '+number+'</legend>';
		item+='<div>';
		item+='<label for="item-'+number+'">Item </label>';
		item+='<input type="text" name="texto[]" id="texto-'+number+'" placeholder="Digite el texto '+number+'">';
		item+='<input type="text" name="url[]" id="url-'+number+'" placeholder="Digite la url item '+number+'">';
		item+='</div>';
		item+='</fieldset>';
	return item;
}