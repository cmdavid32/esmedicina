<?php foreach ($recibidos as $i => $mensaje):?>

  <div class="testimonials-item">
    <div class="user row">
      <div class="testimonials-caption">
        <div class="user_text ">
          <p class="mbr-fonts-style  display-7"><em class="mensaje"><?=$mensaje->mensaje?></em></p>
        </div>
        <div class="user_name mbr-bold mbr-fonts-style align-left pt-3 display-7 nombre_taller"><?=$mensaje->proveedor?></div>
        <div class="user_desk mbr-light mbr-fonts-style align-left pt-2 display-7"><span class="responder c-principal" onclick="" data-usuario="<?=$mensaje->id_proveedor?>">RESPONDER</span></div>
      </div>
    </div>
  </div>

  <?php endforeach; ?>