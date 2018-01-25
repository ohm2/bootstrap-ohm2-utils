

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
function ohm2_blockScreen(message, css) {

	var html = ""
	if (typeof message === "undefined") {

		html += "<div class='block-screen-container'>"
		html += 	'<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>'
		html += "</div>"

	} else {
		html += message
	}
	$.blockUI({
		message: html,
		css: css,
	});
}
function ohm2_unblockScreen() {
	$.unblockUI();
}