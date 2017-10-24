  function numbersletters(e) {
    keyboardkey = (document.all) ? e.keyCode : e.which;
    if (keyboardkey==8) return true;
    pattern =/^[a-zA-Z0-9 ]*$/;
    getkeyboardkey = String.fromCharCode(keyboardkey);
    return pattern.test(getkeyboardkey);
}
  function numbersletterscharacters(e) {
    keyboardkey = (document.all) ? e.keyCode : e.which;
    if (keyboardkey==8) return true;
    pattern =/^[a-zA-Z0-9!"#$%&/()=?@]*$/;
    getkeyboardkey = String.fromCharCode(keyboardkey);
    return pattern.test(getkeyboardkey);
}
function letters(e) {
    keyboardkey = (document.all) ? e.keyCode : e.which;
    if (keyboardkey==8) return true;
    pattern =/[A-Za-z\s]/;
    getkeyboardkey = String.fromCharCode(keyboardkey);
    return Pattern.test(getkeyboardkey);
}

function numbers(e) {
    keyboardkey = (document.all) ? e.keyCode : e.which;
    if (keyboardkey==8) return true;
    pattern =/\d/;
    getkeyboardkey = String.fromCharCode(keyboardkey);
    return pattern.test(getkeyboardkey);
}
function decimals(e) {
    keyboardkey = (document.all) ? e.keyCode : e.which;
    if (keyboardkey==8) return true;
    pattern =/[0-9.]/;
    getkeyboardkey = String.fromCharCode(keyboardkey);
    return pattern.test(getkeyboardkey);
}

function copypaste(){
    jQuery('*').bind("cut copy paste",function(e) { e.preventDefault();});
}

jQuery.fn.reset = function () {
  $(this).each (function() { this.reset(); });
}


jQuery(document).ready(function() {

    jQuery.validator.addMethod('minStrict', function (value, el, param) {
        return value > param;
    });

     jQuery.validator.addMethod("valueNotEquals", function(value, element, arg){
      return arg != value;
     }, "Value must not equal arg.");

    jQuery.validator.addMethod("notEqualTo", function(v, e, p) {
      return this.optional(e) || v != p;
    }, "Please specify a different value");

    $.fn.hasAttr = function(name) {
       return this.attr(name) !== undefined;
    };

});

function showerrors(form){
    var container,message;
	if (form.find(".form-error").length==0) {
		container = $( "<div>", { class: "form-error", html: $( "<p>" )});
		form.append(container);
		message = container.find("p");
	}

    jQuery.validator.setDefaults({
        showErrors: function(map, list) {
            jQuery.each(list, function(index, error) {
                if(index==0 ){
                    error.element.focus();
                }
            });
            var focussed = document.activeElement;
            if (focussed && jQuery(focussed).is("input, textarea, select")) {
                message.html('');
            }
            container.hide();
            if (focussed && jQuery(focussed).is("input, textarea, select")) {
                this.currentElements.removeAttr("title").removeClass("error");
            }else{
                jQuery(focussed).removeClass("error");
            }
            $.each(list, function(index, error) {
                if (focussed && jQuery(focussed).is("input, textarea, select")) {
                    jQuery(error.element).attr("title", error.message).addClass("error");
                }else{
                    jQuery(error.element).addClass("error");
                }
            });
            if (focussed && jQuery(focussed).is("input, textarea, select")) {
                if(jQuery(focussed).hasClass('error')){
                        container.show();
                }
                message.html(jQuery(focussed).attr("title"));
            }
        }
    });
}

function showmessage(form,response){
    var container,message;
    if (form.find(".form-error").length==0) {
        container = jQuery( "<div>", { class: "form-error", html: $( "<p>" )});
        form.append(container);
        message = container.find("p");
    }else{
        message = form.find(".form-error").find("p");
    }
    message.html(response["message"]);
    container.show();
}



