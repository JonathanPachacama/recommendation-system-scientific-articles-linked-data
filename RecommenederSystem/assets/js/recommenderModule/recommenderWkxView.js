var app = angular.module("appRecommender",[]);
app.controller("Controller",function ($scope,$http) {  /////////////////////////  start angular

  $(document).ready(function(){///////////////////////////start Jquery


    /////////////////////////////////use algorithm ///////////////////////////////////////////////////////////

    let urlLuceneIEEE = "http://localhost:8080/JavaAPI/api/articulos/getBusquedaIEEE/?Busqueda="
    let urlLuceneACM = "http://localhost:8080/JavaAPI/api/articulos/getBusquedaACM/?Busqueda="
    let urlLuceneDBLP = "http://localhost:8080/JavaAPI/api/articulos/getBusquedaDBLP/?Busqueda="
    // let TitleLucene = $("#title").val();    //get value of keywords of the title
    let fullTitle = $("#fullTitle").text();    //get value of full title
    let urlSendIEEE = urlLuceneIEEE+fullTitle
    let urlSendACM = urlLuceneACM+fullTitle
    let urlSendDBLP = urlLuceneDBLP+fullTitle


    $scope.showIEEE;
    $scope.showACM;
    $scope.showDBLP;

    $scope.listArticlesIEEE = function () {
      $http.get(urlSendIEEE)
        .success(function (data) {
          $scope.showIEEE = true;
          $scope.showACM = false;
          $scope.showDBLP = false;
          $("#ieeeNav").attr("class","nav-item active");
          $("#acmNav").attr("class","nav-item disabled");
          $("#dblpNav").attr("class","nav-item disabled");
          $scope.responseJsonLucene = data;
          $scope.endPointDinamic = "http://acm.rkbexplorer.com/sparql/";
          console.log("la url es:" + urlSendIEEE);
          console.log("numero de articulos:" + $scope.responseJsonLucene.length);
          for (let i = 0; i < $scope.responseJsonLucene.length; i++) {
            let TitleLucene = $scope.responseJsonLucene[i].tituloArticulo
            let score = $scope.responseJsonLucene[i].score
            // console.log(i + 1 + ": Titulo:" + TitleLucene);
            // console.log(i + 1 + ": Score:" + score);
          }
        })
        .error(function (err) {
        });
    }
    $scope.listArticlesACM  = function () {
      $http.get(urlSendACM)
        .success(function (data) {
          $scope.showIEEE = false;
          $scope.showACM = true;
          $scope.showDBLP = false;
          $("#ieeeNav").attr("class","nav-item disabled");
          $("#acmNav").attr("class","nav-item active");
          $("#dblpNav").attr("class","nav-item disabled");
          $scope.responseJsonLucene = data;
          console.log("la url es:" + urlSendACM);
          console.log("numero de articulos:" + $scope.responseJsonLucene.length);
          for (let i = 0; i < $scope.responseJsonLucene.length; i++) {
            let TitleLucene = $scope.responseJsonLucene[i].tituloArticulo
            let score = $scope.responseJsonLucene[i].score
            // console.log(i + 1 + ": Titulo:" + TitleLucene);
            // console.log(i + 1 + ": Score:" + score);
          }
        })
        .error(function (err) {
        });
    }
    $scope.listArticlesDBLP = function () {
      $http.get(urlSendDBLP)
        .success(function (data) {
          $scope.showIEEE = false;
          $scope.showACM = false;
          $scope.showDBLP = true;
          $("#ieeeNav").attr("class","nav-item disabled");
          $("#acmNav").attr("class","nav-item disabled");
          $("#dblpNav").attr("class","nav-item active");
          $scope.responseJsonLucene = data;
          console.log("la url es:" + urlSendDBLP);
          console.log("numero de articulos:" + $scope.responseJsonLucene.length);
          for (let i = 0; i < $scope.responseJsonLucene.length; i++) {
            let TitleLucene = $scope.responseJsonLucene[i].tituloArticulo
            let score = $scope.responseJsonLucene[i].score
            // console.log(i + 1 + ": Titulo:" + TitleLucene);
            // console.log(i + 1 + ": Score:" + score);
          }
        })
        .error(function (err) {
        });
    }

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
