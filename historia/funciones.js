var x = $(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;

  x=$("p");
  x.hide();
  x=$("input");
  x.hide();
  x=$("img");
  x.hide();
  $("a").hide();

  x = $("p3");
  x.click(function() {
  	x=$("#puerta");
  	x.show("slow");
  })

  x=$("#puerta");
  
  x.click(function(){
  	alert('Puerta cerrada. Eso está mejor');
  	x=$("#luz");
  	x.show("slow");
  });	

  x=$("#luz");
  x.click(function(){
  	alert('Así está bien la luz, vamos a seguir');
  	x=$("#pis");
  	x.show("slow");
  	x=$("#enviar");
  	x.show("slow");
  	x.click(function() {
      var respuesta;
      do {
  		  respuesta = prompt("¿Quieres hacer pis? Respuesta: si o no");
      } while (respuesta!="si" && respuesta!="no")

      if (respuesta == "si") {
        alert("No olvides lavarte las manos");
        $("#enviar").hide("slow");
      }
      if(respuesta == "no") {
        alert("Pues sigamos");
        $("#enviar").hide("slow");
      }

  		x=$("#fotos");
  		x.show("slow");
  	})
  });

  x=$("#fotos");
  x.mousemove(function(){
  	x=$("#imagen1");
  	x.show("slow");
  	x=$("#greco");
  	x.show("slow");
  })

  x=$("#greco");
  x.click(function () {
    x=$("#escribe");
    x.show("slow");
    x=$("#escribir");
    x.show("slow");
  });

  x=$("#escribir");
  x.click(function (){
    x=$("#texto");
    var text = prompt("Continúa tu la historia en lo que vuelvo");
    x.html(text);
    x.show("slow");
    x=$("#escribir");
    x.hide("slow");
  });

  x=$("#texto");
  x.click(function () {
    x=$("#magnifico");
    x.show("slow");
  });

  x=$("#magnifico");
  x.click(function () {
    x=$("#fin");
    x.show("slow");
    $("a").show("slow");
  });






}
