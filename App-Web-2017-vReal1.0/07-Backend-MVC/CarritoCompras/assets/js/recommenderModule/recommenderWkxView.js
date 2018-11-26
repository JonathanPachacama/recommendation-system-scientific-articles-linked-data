var app = angular.module("appRecommender",[]);
app.controller("Controller",function ($scope,$http) {  /////////////////////////  start angular

  $(document).ready(function(){///////////////////////////start Jquery


    /////////////////////////////////////VIEW ///////////////////////////////////////////////////////////////////
    //quitar las etiquetas innecesarias en la vista
    var contenido = abstract
    var texto = $(contenido).text();
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


  });   //end jquery
});/////////////////////////////// end angular
