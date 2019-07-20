$(document).ready(function() {
	var tipo = $('[name="tipo"]').val();
	$.ajax({
		url: ws_url+'get_seguros',
		type: 'POST',
		dataType: 'HTML',
		data: {tipo:tipo},
	})
	.done(function(html) {
		$('#container-result-seguros').html(html);
	})
	.fail(function() {
		console.log("error");
	});
});