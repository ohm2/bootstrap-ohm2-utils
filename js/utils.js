

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