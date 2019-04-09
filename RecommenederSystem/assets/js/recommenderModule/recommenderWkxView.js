$(document).ready(function(){///////////////////////////start Jquery


  ///////////////////////////////////VIEW ///////////////////////////////////////////////////////////////////
  //quitar las etiquetas innecesarias en la vista

  var texto = $("#abstract").text();
  var res = texto.replace(/<[^>]*>?/g, '');
  $("#abstract").text(res);
  //modificar la salida de undefined
  var	a = $("#keyword").val()
  var	b = texto
  if(a == "undefined") {
    $("#keyword").val("")
    $("#keyword").attr("placeholder","This article does not contain keyword")
    $("#keyword").css({"font-style": "italic"})
    $("#keyword").css({"color": "Silver"})
  }
  if(b == "undefined") {
    $("#abstract").val("")
    $("#abstract").attr("placeholder","This article does not contain abstract")
    $("#abstract").css({"font-style": "italic"})
    $("#abstract").css({"color": "Silver"})
  }

  $('#reload').click(function() {
    window.location.reload();
  });


  $("scroll-top").click(function(){
    alert($("div").scrollTop() + " px");
  });

  $("#navBusqueda").click(function(){
    $("#navBusqueda").attr("class","nav-link active show")
    $("#navBiblioteca").attr("class","nav-link")
    $("#navMisArticulos").attr("class","nav-link")
  });
  $("#navBiblioteca").click(function(){
    $("#navBusqueda").attr("class","nav-link")
    $("#navBiblioteca").attr("class","nav-link active show")
    $("#navMisArticulos").attr("class","nav-link")
  });
  $("#navMisArticulos").click(function(){
    $("#navBusqueda").attr("class","nav-link")
    $("#navBiblioteca").attr("class","nav-link")
    $("#navMisArticulos").attr("class","nav-link active show")
  });

});   //end jquery

