var app = angular.module("appRecommender",[]);
app.controller("Controller",function ($scope,$http) {  /////////////////////////  start angular

  $(document).ready(function(){///////////////////////////start Jquery

    let urlLuceneIEEE = "http://localhost:8080/JavaAPI/api/articulos/getBusquedaIEEE/?Busqueda="
    let urlLuceneACM = "http://localhost:8080/JavaAPI/api/articulos/getBusquedaACM/?Busqueda="
    let urlLuceneDBLP = "http://localhost:8080/JavaAPI/api/articulos/getBusquedaDBLP/?Busqueda="
    // let TitleLucene = $("#title").val();    //get value of keywords of the title
    let TitleLucene = $("#fullTitle").val();    //get value of full title
    let urlSend = urlLuceneIEEE+TitleLucene

    $scope.listArticles = function () {
      $http.get(urlSend)
        .success(function (data) {
          $scope.responseJsonLucene = data;
          console.log("la url es:" + urlSend);
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



  });   //end jquery
});/////////////
