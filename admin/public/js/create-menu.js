$(document).ready(function(){
	var menu=[];
	$("#tree-menu").on('click', '.add-item', function(e) {

		e.preventDefault();
		var $td = $(this).parent();

		var fhater = $(this).attr("data-id");
		var son=fhater+"-"+getcounter(fhater);

		addson(fhater);

		var $td1 = $('<td>', {
			html: cretateitem(fhater,son)
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
		var fhater = $(this).attr("data-fhater");
		removeson(fhater);
	   $(this).parent().remove();
	});

	$("#button").on( "click", function() {


		var arrNumber = new Array();
		$('input[type=text]').each(function(){
			var position=$(this).attr("data-position").split("-");
			var val=$(this).val();
			position.forEach(function(element) {
			    console.log(element,"element");
			    arrNumber[element]=new Array();
			    arrNumber[element]=val;
			});
			var nameposition=$(this).attr("data-name-position");
			console.log(nameposition,"nameposition");
			console.log(position,"position");
		});
		console.log(arrNumber,"arrNumber");

		//sendform("create-menu");
	});
})

function addson(fhater){
	$("#sons-"+fhater).val(getsons(fhater)+1);
	$("#counter-"+fhater).val(getcounter(fhater)+1);
}

function removeson(fhater){
	$("#sons-"+fhater).val(getsons(fhater)-1);
}

function getsons(fhater){
	return parseInt( $("#sons-"+fhater).val() );
}

function getcounter(fhater){
	return parseInt( $("#counter-"+fhater).val());
}

function cretateitem(fhater,son) {
	
	var sons=son.split("-");
	var position="";
	for (var i = 0; i < sons.length; i++) {
		position+="["+sons[i]+"]";
	}

    var item='<div id="item-'+son+'"  method="post" accept-charset="utf-8">';
    	item+='<fieldset>';
		item+='<legend>Item '+son+'</legend>';
		item+='<label for="text">Digite el valor del item  '+son+'</label>';
		item+='<input type="text" data-position="'+son+'" data-name-position="text" name="text-'+son+'" placeholder="Digite el texto '+son+'"><br>';
		item+='<label for="link">Digite el enlace del item  '+son+'</label>';
		item+='<input type="text" data-position="'+son+'" data-name-position="link" name="link-'+son+'" placeholder="Digite la url item '+son+'"><br>';
		item+='<input type="hidden" name="sons-'+son+'" id="sons-'+son+'" value="0">';
		item+='<input type="hidden" name="counter-'+son+'" id="counter-'+son+'" value="0">';
		item+='<button data-id="'+son+'" data-fhater="'+fhater+'" class="remove-item">-</button>'
		item+='<button data-id="'+son+'" data-fhater="'+fhater+'" class="add-item">+</button>'
		item+='</fieldset>';
		item+='</div>';
	return item;
}