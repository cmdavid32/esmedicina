usuario = userget();
$(document).ready(function() {
	template = $($('.template-mensaje').clone().html());
	console.log(usuario);
	$.ajax({
		url: ws_url+'get_mensajes',
		type: 'POST',
		dataType: 'HTML',
		data: {id: (usuario.id?usuario.id:usuario.id_proveedor),tipo:(usuario.id?'1':'2')},
	})
	.done(function(response) {
		$('.testimonials-container').html(response);
	})
	.fail(function(error) {
		console.log(error);
	});

});

$(document).on('click', '.responder', function(event) {
	localStorage.setItem('receptor',JSON.stringify($(this).data('usuario')));
	location.href='chat.html';
});