$(document).ready(function(){
	var menu=[];
	$("#tree-menu").on('click', '.add-item', function(e) {

		e.preventDefault();
		var $td = $(this).parent();

		var key=$(this).attr("data-key")+"-"+getcounter($(this).attr("data-key"));

		var fhater=addson($(this).attr("data-key"));

		var $td1 = $('<td>', {
			html: cretateitem(key,fhater)
		});

		var $tbl = $td.children('table')

		if ($tbl.length){
			$tbl.find('tr').eq(0).append($td1);
		}
		else{
			$td.append($('<table>', {
				html: $('<tr>', {
					html: $td1
				})
			}))
		}

	}).on('click', '.remove-item', function(e) {

		e.preventDefault();
	   $(this).parent().remove();

	}).on('click', '.close-item', function(e) {
		e.preventDefault();
		addson( $(this).attr("data-key") );
		//$("#item-"+$(this).attr("data-key")+" :input, #item-"+$(this).attr("data-key")+" :button").attr("disabled", true);
	});

	$("#end").on('click', function(e) {
      	setTimeout(function(){ window.location = "menus"; }, 3000);
	});

});

function addson(key){

	var id;
	
	if ($("#id-"+key).val()=="null") {
		var response=senddata( $("#item-"+key) , "create-menu" );
		$("#id-"+key).val(response.id);
		id=response.id;
	}else{
		id=$("#id-"+key).val();
	}

	$("#counter-"+key).val(getcounter(key)+1);

	return id;
}

function removeson(key){
	if ($("#id-"+key).val()=="null") {
		senddata( $("#item-"+key) , "delete-menu" );
	}
}

function getcounter(key){
	return parseInt( $("#counter-"+key).val());
}

function cretateitem(key,fhater) {
	
    var item='<form id="item-'+key+'"  method="post" accept-charset="utf-8">';
    	item+='<fieldset>';
		item+='<legend>'+key+'</legend>';

		item+='<label for="text">Digite el valor</label>';
		item+='<input type="text" name="text" placeholder="Digite el texto"><br>';
		
		item+='<label for="link">Digite el enlace</label>';
		item+='<input type="text" name="link" placeholder="Digite la url"><br>';
		
		item+='<input type="hidden" name="counter-'+key+'" id="counter-'+key+'" value="0">';
		item+='<input type="hidden" name="fhater" value="'+fhater+'">';
		item+='<input type="hidden" name="id" id="id-'+key+'" value="null">';
		
		item+='<button data-key="'+key+'" class="remove-item" >-</button>'
		item+='<button data-key="'+key+'" class="add-item">+</button>'
		item+='<button data-key="'+key+'" class="close-item">✓</button>'

		item+='</fieldset>';
		item+='</form>';

	return item;
}