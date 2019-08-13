// Creación del módulo
var angularApp = angular.module('appRecommenderLayout', ['ui.bootstrap']);
angularApp.controller("layoutController",function () {
}).factory('urlService', function() {
  var pathServer = 'JavaAPIRecom/api/articulos/'
  // var pathServer = 'JavaAPI/api/articulos/'
  return {
    url:{},
    pathServer: pathServer
  };
});
angularApp.controller('mainWikindxController',
  function($scope, urlService, $http) {
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.pages = [];
    $scope.articles = [];
    $scope.busqueda = "";
    $scope.resourceId;

    $scope.buscarArticulo = function () {

      urlService.url.sails = $scope.url;
      console.log('urlService.url.sails',urlService.url.sails);
      var url = urlService.url.sails+'RecommenderModule/recommenderWkx/recommenderWkxAPI?busqueda='+$scope.busqueda
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

      var url = urlService.url.sails+'RecommenderWkx/bringParametersCreatorAPI?resourceId='+$scope.resourceId
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
).filter('startFromGrid', function() {
  return function(input, start) {
    if (!input || !input.length) { return; }
    start = +start; //parse to int
    return input.slice(start);
  }
});


angularApp.controller('mainRDFController',
  function($scope, urlService,  $log, $http) {

    $scope.articles = [];
    $scope.responseJsonCited= [];
    $scope.responseJsonWhoCited= [];
    $scope.busqueda = "";
    $scope.showIEEErdf;
    $scope.showACMrdf;
    $scope.showResultIEEErdf;
    $scope.showResultACMrdf;

    var result = new Array;
    var prefix = "PREFIX acm: <http://acm.rkbexplorer.com/id/>\n"+
      "PREFIX ieee: <http://ieee.rkbexplorer.com/id/>\n"+
      "PREFIX dblp: <http://dblp.rkbexplorer.com/id/>\n"+
      "PREFIX rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n" +
      "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
      "PREFIX akt:  <http://www.aktors.org/ontology/portal#>\n" +
      "PREFIX owl:  <http://www.w3.org/2002/07/owl#>\n" +
      "PREFIX iai: <http://www.iai.uni-sb.de/resist#>\n"+
      "PREFIX dc: <http://purl.org/dc/elements/1.1/>\n"+
      "PREFIX dct: <http://purl.org/dc/terms/>\n" +
      "PREFIX akts: <http://www.aktors.org/ontology/support#>\n"+
      "PREFIX unlocode: <http://unlocode.rkbexplorer.com/id/>\n" +
      "PREFIX class: <http://acm.rkbexplorer.com/ontologies/acm#>\n"+
      "PREFIX extension: <http://www.aktors.org/ontology/extension#>\n\n"

    $scope.buscarArticuloIEEE = function () {
      $scope.showIEEErdf = true
      $scope.showACMrdf = false
      $scope.showResultIEEErdf = false
      $scope.showResultACMrdf = false
      urlService.url.java = $scope.url;
      console.log('urlService.url.sails',urlService.url.java);
      var url = urlService.url.java+urlService.pathServer+"getBusquedaIEEE/?Busqueda="+$scope.busqueda
      console.log('url',url);
      $http.get(url)
        .success(function (data) {
          console.log(data);
          $scope.articles = data;

          // start uib-pagination
          $scope.size = data.length;
          console.log("Número de resultados: ",$scope.size);
          $scope.viewby = 10;
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
    $scope.buscarArticuloACM = function () {
      $scope.showIEEErdf = false
      $scope.showACMrdf = true
      $scope.showResultIEEErdf = false
      $scope.showResultACMrdf = false
      urlService.url.java = $scope.url;
      console.log('urlService.url.sails',urlService.url.java);
      var url = urlService.url.java+urlService.pathServer+"getBusquedaACM/?Busqueda="+$scope.busqueda
      console.log('url',url);
      $http.get(url)
        .success(function (data) {
          console.log(data);
          $scope.articles = data;

          // start uib-pagination
          $scope.size = data.length;
          console.log("Número de resultados: ",$scope.size);
          $scope.viewby = 10;
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


    $scope.irRecomendacionIEEE = function ($event) {

      $scope.showResultIEEErdf = true
      $scope.showResultACMrdf = false
      var title = $event.target.value
      result.splice(0, result.length);
      console.log("result antes de la consulta",result.splice(0, result.length))
      var endPoint = $("#endpointDynamicRDF").val();
      var query1 = prefix + "SELECT DISTINCT ?titleUri WHERE { ?titleUri akt:has-title ?p. filter (?p='" +title+"')}"
      var url1 = endPoint+"?format=json&query="+encodeURIComponent(query1);

      $http.get(url1)
        .success(function (data){
          var uri = data.results.bindings;
          $scope.responseJsonRecommender = title;
          var dataURI = uri[0].titleUri.value
          // console.log("la url es:" + url1);
          console.log("dataURI",dataURI)


          // Artículos que cita este artículo.
          var query2 = prefix + "SELECT DISTINCT ?CitaURI ?titulo ?Fecha ?FechaPretty WHERE { <"+dataURI+"> iai:is-strongly-related-to ?CitaURI.\n" +
            "?CitaURI akt:has-title ?titulo.\n" +
            "?CitaURI akt:has-date ?Fecha.\n" +
            "?Fecha akts:has-pretty-name ?FechaPretty}"
          // Articulos que citan a este articulo
          var query3 = prefix + "SELECT DISTINCT ?CitaURI ?titulo ?Fecha ?FechaPretty WHERE { ?CitaURI iai:is-strongly-related-to <" +dataURI+">.\n" +
            "?CitaURI akt:has-title ?titulo.\n" +
            "?CitaURI akt:has-date ?Fecha.\n" +
            "?Fecha akts:has-pretty-name ?FechaPretty}"

          var url2= endPoint+"?format=json&query="+encodeURIComponent(query2);
          var url3= endPoint+"?format=json&query="+encodeURIComponent(query3);

          $http.get(url2)
            .success(function (data){
              $scope.responseJsonCited = data.results.bindings;
              console.log("la url2 ieee es:" , url2);
              console.log("numero de articulos citados ieee:" , $scope.responseJsonCited.length);
              for (let i = 0; i < $scope.responseJsonCited.length; i++) {
                result.push($scope.responseJsonCited[i].titulo.value)
                // console.log(i + 1 + ":" + $scope.responseJsonCited[i].titulo.value);
              }

            })
            .error(function (err) {
            });


          $http.get(url3)
            .success(function (data){
              $scope.responseJsonWhoCited = data.results.bindings;
              console.log("la url3 ieee es:" , url3);
              console.log("numero de articulos iee que cito ieee:" , $scope.responseJsonWhoCited.length);
              for (let i = 0; i < $scope.responseJsonWhoCited.length; i++) {
                result.push($scope.responseJsonWhoCited[i].titulo.value)
                // console.log(i + 1 + "_:" + $scope.responseJsonWhoCited[i].titulo.value);
              }
            })
            .error(function (err) {
            });
            $scope.responseJson = result;
            console.log("result despues de la consulta)",result)
        })
        .error(function (err) {
        });

    }


    $scope.irRecomendacionACM = function ($event) {

      $scope.showResultIEEErdf = false
      $scope.showResultACMrdf = true
      var title = $event.target.value
      result.splice(0, result.length);
      console.log("result antes de la consulta",result.splice(0, result.length))
      var endPoint = $("#endpointDynamicRDF").val();
      var query1 = prefix + "SELECT DISTINCT ?titleUri WHERE { ?titleUri akt:has-title ?p. filter (?p='" +title+"')}"
      var url1 = endPoint+"?format=json&query="+encodeURIComponent(query1);




      $http.get(url1)
        .success(function (data){
          var uri = data.results.bindings;
          $scope.responseJsonRecommender = title;
          var dataURI = uri[0].titleUri.value
          // console.log("la url es:" + url1);
          console.log("dataURI",dataURI)



          // Artículos que cita este artículo.
          var query2 = prefix + "SELECT DISTINCT ?CitaURI ?titulo ?Fecha ?FechaDef WHERE {\n" +
            "?CitaURI akt:cites-publication-reference <"+dataURI+" >.\n" +
            "?CitaURI akt:has-title ?titulo.\n" +
            "?CitaURI akt:has-date ?Fecha.\n" +
            "?Fecha akts:has-pretty-name ?FechaDef}"

          // Articulos que citan a este articulo
          var query3 = prefix + "SELECT DISTINCT ?CitaURI ?titulo ?Fecha ?FechaDef WHERE {\n" +
            "<" +dataURI+"> akt:cites-publication-reference ?CitaURI.\n" +
            "?CitaURI akt:has-title ?titulo.\n" +
            "?CitaURI akt:has-date ?Fecha.\n" +
            "?Fecha akts:has-pretty-name ?FechaDef}"
          var url2= endPoint+"?format=json&query="+encodeURIComponent(query2);
          var url3= endPoint+"?format=json&query="+encodeURIComponent(query3);

          $http.get(url2)
            .success(function (data){

              $scope.responseJsonCited = data.results.bindings;
              console.log("la url2 es acm:" , url2);
              console.log("numero de articulos citados acm:" , $scope.responseJsonCited.length);
              for (let i = 0; i < $scope.responseJsonCited.length; i++) {
                result.push($scope.responseJsonCited[i].titulo.value)
                // console.log(i + 1 + ":" + $scope.responseJsonCited[i].titulo.value);
              }
            })
            .error(function (err) {
            });


          $http.get(url3)
            .success(function (data){
              $scope.responseJsonWhoCited = data.results.bindings;
              console.log("la url3 acm es:" , url3);
              console.log("numero de articulos que cito acm:" , $scope.responseJsonWhoCited.length);
              for (let i = 0; i < $scope.responseJsonWhoCited.length; i++) {
                result.push($scope.responseJsonWhoCited[i].titulo.value)
                // console.log(i + 1 + "_:" + $scope.responseJsonWhoCited[i].titulo.value);
              }
            })
            .error(function (err) {
            });

          $scope.responseJson = result;
          console.log("result despues de la consulta",result)

        })
        .error(function (err) {
        });

    }

  }
);



angularApp.controller("recommenderController",function ($scope,$http, $log, urlService) {

  // let TitleLucene = $("#title").val();    //get value of keywords of the title
  let fullTitle = $("#fullTitle").text();    //get value of full title
  $scope.showIEEE;
  $scope.showACM;
  $scope.showDBLP;

  $scope.listArticlesIEEE = function () {
    urlService.url.java = $scope.url;
    console.log('urlService.url.java',urlService.url.java);
    let urlSendIEEE = urlService.url.java+urlService.pathServer+"getBusquedaIEEE/?Busqueda="+fullTitle
    $http.get(urlSendIEEE)
      .success(function (data) {
        $scope.showIEEE = true;
        $scope.showACM = false;
        $scope.showDBLP = false;
        $("#ieeeNav").attr("class","nav-item active");
        $("#acmNav").attr("class","nav-item disabled");
        $("#dblpNav").attr("class","nav-item disabled");
        $scope.responseJsonLucene = data;
        console.log("la url es:" +  urlSendIEEE);
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
        $scope.viewby = 10;
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

    urlService.url.java = $scope.url;
    console.log('urlService.url.java',urlService.url.java);
    let urlSendACM = urlService.url.java+urlService.pathServer+"getBusquedaACM/?Busqueda="+fullTitle

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
        $scope.viewby = 10;
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

    urlService.url.java = $scope.url;
    console.log('urlService.url.java',urlService.url.java);
    let urlSendDBLP = urlService.url.java+urlService.pathServer+"getBusquedaDBLP/?Busqueda="+fullTitle
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
        $scope.viewby = 10;
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

angularApp.controller("Controller",function ($scope,$http) {

  $scope.responseJson= [];

  var prefix = "PREFIX acm: <http://acm.rkbexplorer.com/id/>\n"+
    "PREFIX ieee: <http://ieee.rkbexplorer.com/id/>\n"+
    "PREFIX dblp: <http://dblp.rkbexplorer.com/id/>\n"+
    "PREFIX rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n" +
    "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
    "PREFIX akt:  <http://www.aktors.org/ontology/portal#>\n" +
    "PREFIX owl:  <http://www.w3.org/2002/07/owl#>\n" +
    "PREFIX iai: <http://www.iai.uni-sb.de/resist#>\n"+
    "PREFIX dc: <http://purl.org/dc/elements/1.1/>\n"+
    "PREFIX dct: <http://purl.org/dc/terms/>\n" +
    "PREFIX akts: <http://www.aktors.org/ontology/support#>\n"+
    "PREFIX unlocode: <http://unlocode.rkbexplorer.com/id/>\n" +
    "PREFIX class: <http://acm.rkbexplorer.com/ontologies/acm#>\n"+
    "PREFIX extension: <http://www.aktors.org/ontology/extension#>\n\n"
  var querySparql = "SELECT DISTINCT ?links ?o\n" +
    "WHERE {<http://acm.rkbexplorer.com/id/100233> ?links ?o}\n" +
    "Limit 20"

  let endPointAcm ="http://acm.rkbexplorer.com/sparql/";
  let queryParametersSparql = "?format=json&query=";
  let apiAcm = endPointAcm + queryParametersSparql  //api de ACM con sus parametros


  let query = prefix+querySparql


  let url_proxy = 'http://192.168.1.6:8083/fetch/'
  let concatenation = url_proxy+apiAcm+encodeURIComponent(query);
  $http.get(concatenation)
    .success(function (data){
      console.log(data);
      $scope.responseJson = data.results.bindings;
      console.log("la url es:" + concatenation);
      console.log("numero de articulos:" + $scope.responseJson.length);
      for(let i = 0;i<$scope.responseJson.length;i ++){
        let linksValue = $scope.responseJson[i].links.value
        let linksType = $scope.responseJson[i].links.type
        let oValue = $scope.responseJson[i].o.value
        let oType = $scope.responseJson[i].o.type

        console.log(i+1+": valor del link es:"+ linksValue);
        console.log(i+1+": tipo del link es:"+ linksType);
        console.log(i+1+": valor del o es:"+ oValue);
        console.log(i+1+": tipo del o es:"+ oType);

      }
    })
    .error(function (err) {
    });


});



