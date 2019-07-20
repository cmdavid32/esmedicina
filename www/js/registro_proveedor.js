$(document).ready(function() {

	$('#register-form').submit(function() {
		contra_check = false;
		user_check = false;
		pass1 = $('[name="pass"]').val();
		pass2 = $('[name="check_pass"]').val();
		username = $('[name="nombre"]').val();

		if (pass2 == pass1) {
			contra_check = true;
		}

		if (contra_check) {
			$.ajax({
				url: ws_url+'crear_cuenta_proveedor',
				type: 'POST',
				dataType: 'JSON',
				data: $(this).serialize(),
			}).done(function(response) {
				if (response.error==1) {
					alert_top('error',response.mensaje);
					$('#login-load').addClass('d-none');
				}else{
					alert_top('success',response.mensaje);
					$('#login-load').addClass('d-none');
					location.href="login.html";
				}
			})
			.fail(function() {
				alert_top('error','Ocurrió un problema, intente más tarde');
			});
		}else{
			alert_top('error','Las contraseñas deben coincidir');
		}

		return false;
	});
});