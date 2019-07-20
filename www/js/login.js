if (userget()) {
  if (userget().id_proveedor>0) {
    location.href="solicitudes.html";
  }else{
    location.href="home.html";
  }

}

$(document).ready(function() {
  $('#login-form').submit(function() {
    if ($('[name="proveedor"]').is(':checked')) {
      controller = 'login_proveedor';
      url = 'solicitudes.html';
    }else{
      controller = 'login';
      url = 'home.html';
    }
    $.ajax({
      url: ws_url+controller,
      type: 'POST',
      dataType: 'JSON',
      data: $(this).serialize(),
      beforeSend:function(load) {
        $('#login-load').removeClass('d-none');
      }
    })
    .done(function(response) {
     if (response.error==1) {
      alert_top('error',response.message);
      $('#login-load').addClass('d-none');
    }else{
      localStorage.setItem("APP_USER",JSON.stringify(response.result));
      location.href=url;
    }
  })
    .fail(function() {
      console.log("error");
    });

    return false;
  });

});