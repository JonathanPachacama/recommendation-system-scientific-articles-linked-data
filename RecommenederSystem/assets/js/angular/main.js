// Creación del módulo
var angularApp = angular.module('appRecommenderLayout', ['ui.bootstrap']);


angularApp.controller("layoutController",function ($scope,$http) {
}).factory('url_config', function() {
  var base_url = 'http://localhost:1337/RecommenderModule/'
  http://localhost:1337/RecommenderModule/RecommenderWkx/bringParametersCreatorAPI?resourceId=2
    return {
      base_url : base_url,
    };
});

angularApp.controller("recommenderController",function ($scope,$http, $log) {

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
// start uib-pagination
        $scope.size = data.length;
        console.log("Número de resultados: ",$scope.size);
        $scope.viewby = 20;
        $scope.totalItems = $scope.size;
        $scope.currentPage = 1;
        $scope.itemsPerPage = $scope.viewby;
        $scope.setPage = function (pageNo) {
          $scope.currentPage = pageNo;
        };
        $scope.pageChanged = function() {
          $log.log('Page changed to: ' + $scope.currentPage);
        };
        $scope.maxSize = 5;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;
        $scope.setItemsPerPage = function(num) {
          $scope.itemsPerPage = num;
          $scope.currentPage = 1; //reset to first page
        }
        // end uib-pagination

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
        // start uib-pagination
        $scope.size = data.length;
        console.log("Número de resultados: ",$scope.size);
        $scope.viewby = 20;
        $scope.totalItems = $scope.size;
        $scope.currentPage = 1;
        $scope.itemsPerPage = $scope.viewby;
        $scope.setPage = function (pageNo) {
          $scope.currentPage = pageNo;
        };
        $scope.pageChanged = function() {
          $log.log('Page changed to: ' + $scope.currentPage);
        };
        $scope.maxSize = 5;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;
        $scope.setItemsPerPage = function(num) {
          $scope.itemsPerPage = num;
          $scope.currentPage = 1; //reset to first page
        }
        // end uib-pagination
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
        // start uib-pagination
        $scope.size = data.length;
        console.log("Número de resultados: ",$scope.size);
        $scope.viewby = 20;
        $scope.totalItems = $scope.size;
        $scope.currentPage = 1;
        $scope.itemsPerPage = $scope.viewby;
        $scope.setPage = function (pageNo) {
          $scope.currentPage = pageNo;
        };
        $scope.pageChanged = function() {
          $log.log('Page changed to: ' + $scope.currentPage);
        };
        $scope.maxSize = 5;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;
        $scope.setItemsPerPage = function(num) {
          $scope.itemsPerPage = num;
          $scope.currentPage = 1; //reset to first page
        }
        // end uib-pagination
      })
      .error(function (err) {
      });
  }
});


angularApp.controller('mainWikindxController',
    function($scope, url_config, $http) {
      $scope.currentPage = 0;
      $scope.pageSize = 10;
      $scope.pages = [];



      $scope.articles = [];

      $scope.busqueda = "";
      $scope.resourceId;

      $scope.buscarArticulo = function () {

        var url = url_config.base_url+'recommenderWkx/recommenderWkxAPI?busqueda='+$scope.busqueda


        console.log('url',url);
        $http.get(url)
          .success(function (data) {
            console.log(data);
            $scope.articles = data.resource;

          })
          .error(function (err) {
          });

        $scope.configPages = function() {
          $scope.pages.length = 0;
          var ini = $scope.currentPage - 4;
          var fin = $scope.currentPage + 5;
          if (ini < 1) {
            ini = 1;
            if (Math.ceil($scope.articles.length / $scope.pageSize) > 10)
              fin = 10;
            else
              fin = Math.ceil($scope.articles.length / $scope.pageSize);
          } else {
            if (ini >= Math.ceil($scope.articles.length / $scope.pageSize) - 10) {
              ini = Math.ceil($scope.articles.length / $scope.pageSize) - 10;
              fin = Math.ceil($scope.articles.length / $scope.pageSize);
            }
          }
          if (ini < 1) ini = 1;
          for (var i = ini; i <= fin; i++) {
            $scope.pages.push({
              no: i
            });
          }

          if ($scope.currentPage >= $scope.pages.length)
            $scope.currentPage = $scope.pages.length - 1;
        };

        $scope.setPage = function(index) {
          $scope.currentPage = index - 1;
        };
      }

      $scope.irRecomendacion = function () {

        var url = url_config.base_url+'RecommenderWkx/bringParametersCreatorAPI?resourceId='+$scope.resourceId


        console.log('url',url);
        $http.get(url)
          .success(function (data) {
            console.log(data);
            $scope.articles = data;

          })
          .error(function (err) {
          });

        $scope.configPages = function() {
          $scope.pages.length = 0;
          var ini = $scope.currentPage - 4;
          var fin = $scope.currentPage + 8;
          if (ini < 1) {
            ini = 1;
            if (Math.ceil($scope.articles.length / $scope.pageSize) > 10)
              fin = 10;
            else
              fin = Math.ceil($scope.articles.length / $scope.pageSize);
          } else {
            if (ini >= Math.ceil($scope.articles.length / $scope.pageSize) - 10) {
              ini = Math.ceil($scope.articles.length / $scope.pageSize) - 10;
              fin = Math.ceil($scope.articles.length / $scope.pageSize);
            }
          }
          if (ini < 1) ini = 1;
          for (var i = ini; i <= fin; i++) {
            $scope.pages.push({
              no: i
            });
          }

          if ($scope.currentPage >= $scope.pages.length)
            $scope.currentPage = $scope.pages.length - 1;
        };

        $scope.setPage = function(index) {
          $scope.currentPage = index - 1;
        };
      }


    }
  )

  .filter('startFromGrid', function() {
    return function(input, start) {
      start = +start;
      return input.slice(start);
    }
  });
