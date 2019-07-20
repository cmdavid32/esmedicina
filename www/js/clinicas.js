$(document).ready(function() {
	$.post(ws_url+'get_departamentos', {}, function(response) {
		for (var i = 0; i < response.length; i++) {
			$('#select_depa').append('<option value="'+response[i].id_departamento+'">'+response[i].departamento+'</option>');
		}
		
	});

	$.post(ws_url+'get_especialidad', {}, function(response) {
		for (var i = 0; i < response.length; i++) {
			$('#select_especialidad').append('<option value="'+response[i].id_especialidad+'">'+response[i].especialidad+'</option>');
		}
	});

	$('#select_depa').on('change', function() {
		var valor = $(this).val();
		$('#select_ciudad').html('');
		$.post(ws_url+'get_ciudades', {depa: valor}, function(respuesta) {
			for (var i = 0; i < respuesta.length; i++) {
				$('#select_ciudad').append('<option value="'+respuesta[i].id_ciudad+'">'+respuesta[i].ciudad+'</option>');
			}
			$('#select_ciudad').removeAttr('disabled');
		});
	});


	$('#search_btn').click(function() {
		var depa = $('#select_depa').val();
		var ciudad = $('#select_ciudad').val();

		$.ajax({
			url: ws_url+'get_clinicas',
			type: 'POST',
			dataType: 'HTML',
			data: {depa: depa,ciudad:ciudad},
		})
		.done(function(html) {
			$('#container-form-clinic').fadeOut('fast');
			$('#container-result-clinic').removeClass('d-none').fadeIn('slow');
			$('#container-result-clinic').html(html);
		})
		.fail(function() {
			console.log("error");
		});
		
	});

});