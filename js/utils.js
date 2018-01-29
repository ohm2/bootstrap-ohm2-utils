

function ohm2_postJSON(url, data, onSuccess, onError) {
    data = typeof data === "undefined" ? {} : data;
    onSuccess = typeof onSuccess === "undefined" ? function(){} : onSuccess;
	onError = typeof onError === "undefined" ? function(){} : onError;
	data.csrfmiddlewaretoken = Cookies.get('csrftoken')
    

    var jqxhr = $.ajax({
		type: "POST",
		url: url,
		data: data,
		success: onSuccess,
		error: onError,
		dataType: 'json',
    })
    return jqxhr
}
function ohm2_isEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	return re.test(email);
}
function ohm2_blockScreen(options) {
    $('body').loading({
        stoppable: false,
    })
}
function ohm2_unblockScreen(options) {
	$('body').loading('stop');
}
function ohm2_redirect(url) {
	window.location.replace(url);
}
function ohm2_followLink(url) {
	window.location.href = url;
}
function ohm2_bindInteger() {
	$('.ohm2-integer').keypress(function(event) {
		if (event.which == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46) {
			return true;
		} else if ((event.which < 48 || event.which > 57)) {
			event.preventDefault();
		}
	});
}
function ohm2_bindNumber() {
	$('.ohm2-number').keypress(function(event) {
		if (event.which == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46) {
			return true;
		} else if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
			event.preventDefault();
		}
	});
}