// Formulario adicional para el cliente

$(document).ready(function(){
  $("select").on('change',function(){
    if(this.value == 'user'){
      
      $("#formulario-cliente div").fadeOut();
      $("#number").html("");

      $("#formulario-cliente div").fadeIn();
      $("#male").html("<input type='radio' name='sex' value='m'> Hombre <i class='fa fa-mars' aria-hidden='true'></i><br/>");
      $("#female").html("<input type='radio' name='sex' value='f'> Mujer <i class='fa fa-mars' aria-hidden='true'></i><br/>");
      $("#heigth").html("<input type='number' class='form-control' name='heigth' min='1' max='3' placeholder='Estatura' required>");
      $("#weigth").html("<input type='number' class='form-control' name='weigth' min='20' max='300'placeholder='Peso' required>");
    
    }else if(this.value == 'nutritionist'){
      
      $("#formulario-cliente div").fadeOut();
      $("#male").html("");
      $("#female").html("");
      $("#heigth").html("");
      $("#weigth").html("");

      $("#formulario-cliente div").fadeIn();
      $("#number").html("<input type='number' class='form-control' name='assoc-numb' placeholder='Nº colegiado/a' required>");
      $("#number").css('margin','0 auto');
    }else{
      
      $("#formulario-cliente div").fadeOut();
      $("#heigth").html("");
      $("#weigth").html("");
    
    }
  });
});