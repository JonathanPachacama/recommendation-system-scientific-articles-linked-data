var arrayURIS = new Array();
var arrayValores = new Array();
var prefixs = "PREFIX id:   <http://acm.rkbexplorer.com/id/>"+
  "PREFIX rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#>"+
  "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>"+
  "PREFIX akt:  <http://www.aktors.org/ontology/portal#>"+
  "PREFIX owl:  <http://www.w3.org/2002/07/owl#>"+
  "PREFIX akt:  <http://www.aktors.org/ontology/portal#>"+
  "PREFIX akts: <http://www.aktors.org/ontology/support#>"

//add Jonathan start
var prefixIeee = "PREFIX id:   <http://ieee.rkbexplorer.com/id/>\n"+
  "PREFIX rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n" +
  "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
  "PREFIX akt:  <http://www.aktors.org/ontology/portal#>\n" +
  "PREFIX owl:  <http://www.w3.org/2002/07/owl#>\n" +
  "PREFIX iai: <http://www.iai.uni-sb.de/resist#>\n"+
  "PREFIX akts: <http://www.aktors.org/ontology/support#>\n" +
  "PREFIX extension: <http://www.aktors.org/ontology/extension#>\n\n"
//add Jonathan end

function exec() {
  var endpoint = d3.select("#endpoint").property("value")
  var sparql = d3.select("#sparql").property("value")
  d3sparql.query(endpoint, sparql, render)
}

function render(json) {
  var config = {
    "selector": "#result"
  }
  d3sparql.htmltable2(json, config)
}

////////////////////////////////////////////////////////////////////////////////add Jonathan start

function  web(button){
  // $("#metadataACM").modal({backdrop: 'static', keyboard: false})
  var idButton = button.id
  var resIdBuuton = idButton.replace("btn", '');
  var valueQueryTitle = $("#btn"+resIdBuuton).text()


  // query to find the URI of the title found
  var sparqlURI = prefixIeee + "SELECT DISTINCT ?titleUri WHERE { ?titleUri akt:has-title ?p. filter (?p='" +valueQueryTitle+"')}"
  var endpoint = d3.select("#endpoint").property("value")
  d3sparql.query(endpoint, sparqlURI,almURI)

  function  almURI(json){   //function to result of sparqlURI
    var dataURI = json.results.bindings;
    var valueQuery = dataURI[0].titleUri.value
    var endpoint = d3.select("#endpoint").property("value")
    console.log("valueQuery",valueQuery)
    //query sparql
    sparqlTittle = prefixIeee + "SELECT DISTINCT ?title WHERE {<" +valueQuery+"> akt:has-title ?title}"
    sparqlAuthor = prefixIeee + "SELECT DISTINCT ?nameAutor WHERE {<" +valueQuery+"> akt:has-author ?a.?a akt:full-name ?nameAutor}"
    sparqlDate = prefixIeee + "SELECT DISTINCT ?date WHERE {<" +valueQuery+"> akt:has-date ?a.?a akts:has-pretty-name ?date}"
    sparqlAbstract = prefixIeee + "SELECT DISTINCT ?abstract WHERE {<" +valueQuery+"> extension:has-abstract ?abstract}"
    sparqlKeyword1 = prefixIeee + "SELECT DISTINCT ?keyword1 WHERE {<" +valueQuery+"> akt:has-ieee-keyword ?keyword1 }"
    sparqlJournal = prefixIeee + "SELECT DISTINCT ?TittleJournal ?webJournal ?dateJournalYears \n" +
      "WHERE {<" +valueQuery+"> akt:paper-in-proceedings ?a.\n" +
      "?a akt:has-title ?TittleJournal.\n"+
      "?a akt:has-web-address ?webJournal.\n"+
      "?a akt:has-date ?b.?b akts:year-of ?dateJournalYears}"
    sparqlWeb = prefixIeee + "SELECT DISTINCT ?web WHERE {<" +valueQuery+"> akt:has-web-address ?web.}"
    //add query sparql to textarea
    $("#sparqlTittle").text(sparqlTittle);
    $("#sparqlAuthor").text(sparqlAuthor);
    $("#sparqlDate").text(sparqlDate);
    $("#sparqlAbstract").text(sparqlAbstract);
    $("#sparqlKeyword").text(sparqlKeyword1);

    $("#sparqlJournal").text(sparqlJournal);
    $("#sparqlWeb").text(sparqlWeb);
    //add value of textarea to d3sparql
    var sparqlTittle = d3.select("#sparqlTittle").property("value")
    var sparqlAuthor = d3.select("#sparqlAuthor").property("value")
    var sparqlDate = d3.select("#sparqlDate").property("value")
    var sparqlAbstract = d3.select("#sparqlAbstract").property("value")
    var sparqlKeyword1 = d3.select("#sparqlKeyword").property("value")
    var sparqlJournal = d3.select("#sparqlJournal").property("value")
    var sparqlWeb = d3.select("#sparqlWeb").property("value")
    //query d3sparql
    d3sparql.query(endpoint, sparqlTittle,almTittle)
    d3sparql.query(endpoint, sparqlAuthor,almAuthor)
    d3sparql.query(endpoint, sparqlDate,almDate)
    d3sparql.query(endpoint, sparqlAbstract,almAbstract)
    d3sparql.query(endpoint, sparqlKeyword1,almKeyword1)
    d3sparql.query(endpoint, sparqlJournal,almJournal)
    d3sparql.query(endpoint, sparqlWeb,almWeb)
    //result d3sparql
    function  almTittle(json){
      var dataTittle = json.results.bindings;
      if(Object.entries(dataTittle).length != 0 ){
        $("#titleEEE").val(dataTittle[0].title.value)
        $("#titleEEE").css({"font-style": "normal"})
        console.log("Titulo: ",dataTittle[0].title.value);
      }
      else{
        $("#titleEEE").val("");
        $("#titleEEE").attr("placeholder","without title!, can you edit the title?")
        $("#titleEEE").css({"font-style": "italic"})
      }
    }
    function  almAuthor(json){
      var dataAuthor = json.results.bindings;
      var allAuthor = new Array()
      var allNameAuthor = new Array()
      var allLastNameAuthor = new Array()

      if(Object.entries(dataAuthor).length != 0 ){
        for( i = 0;i<dataAuthor.length;i ++){
          allAuthor.push(dataAuthor[i].nameAutor.value)
          console.log("Autor: ",dataAuthor[i].nameAutor.value);
          var arrayNameAuthor = dataAuthor[i].nameAutor.value.split(" ");
          if(arrayNameAuthor.length == 4){
            allNameAuthor.push(arrayNameAuthor[0]);
            allLastNameAuthor.push(arrayNameAuthor[2]);
          }
          else if (arrayNameAuthor.length == 3){
            allNameAuthor.push(arrayNameAuthor[0]);
            allLastNameAuthor.push(arrayNameAuthor[2]);
          }
          else if (arrayNameAuthor.length == 2){
            allNameAuthor.push(arrayNameAuthor[0])
            allLastNameAuthor.push(arrayNameAuthor[1]);
          }
          else if (arrayNameAuthor.length == 1){
            allNameAuthor.push(arrayNameAuthor[0])
            allLastNameAuthor.push(null);
          }
        }
        $("#authorIEEE").val(allAuthor)
        $("#authorIEEE").css({"font-style": "normal"})

        if ((allAuthor.length == allNameAuthor.length)&&(allAuthor.length == allLastNameAuthor.length) ){

          ///////////////////////////////////Add author to wikindx////////////////////////
          var iCnt = 0;
          var container = $(document.createElement('div'))  // Crear un elemento div añadiendo estilos CSS
          if (iCnt <= 20) {
            iCnt = iCnt + 1;
            // Añadir mero de autores.
            $(container).append('<input hidden type="number"  class="input"  id=tb'+ iCnt + ' '+
              'name="numero_autores" value="'+dataAuthor.length+'"><br>');

            allAuthor.toString();
            $(container).append('<input hidden type="text" id="author" name="authores" value="'+allAuthor+'"><br>');

            for ( var i = 0; i< allAuthor.length ; i ++ ) {
              if ( i == 0){ // añadir nombre y apellido de cada autor
                $(container).append('<input hidden type="text" id= "nameIEEE" name=nombreAuthores value="'+allNameAuthor[i]+'">');
                $(container).append('<input hidden type="text" id= "lastNameIEEE" name=apellidoAuthores value="'+allLastNameAuthor[i]+'">');
              }
              else {
                $(container).append('<input hidden type="text" id= "nameIEEE" name=nombreAuthores'+i+' '+'value="'+allNameAuthor[i]+'">');
                $(container).append('<input hidden type="text" id= "lastNameIEEE" name=apellidoAuthores'+i+' '+'value="'+allLastNameAuthor[i]+'">');
              }
            }
            $('#AuthorsWikindx').after(container);
          }
          else {      //se establece un limite para añadir elementos, 20 es el limite
            $(container).append('<label>Limite Alcanzado de Autores permitidos</label>');
          }
          //borrar informacion al dar click fuera del modal
          $("html").click(function() {
            $(container).empty();
            $(container).remove();
            iCnt = 0;
          });
          $('#metadataACM').click(function (e) {
            e.stopPropagation();
          });
          $('.btRemoveAll').click(function() {    // Elimina todos los elementos del contenedor
            $(container).empty();
            $(container).remove();
            iCnt = 0;
          });
          ////////////////////////////////////// END Add author to wikindx///////////////////////////////
        }else{
          console.error('Error!!!, números de autores no condice => (allAuthor,allNameAuthor,allLastNameAuthor)');
        }
      }else {
        $("#authorIEEE").val("");
        $("#authorIEEE").attr("placeholder","without authors!, can you edit the authors?")
        $("#authorIEEE").css({"font-style": "italic"})
      }
    }
    function  almDate(json){
      var dataDate = json.results.bindings;
      if(Object.entries(dataDate).length != 0 ){
        $("#dateIEEE").val(dataDate[0].date.value)
        $("#dateIEEE").css({"font-style": "normal"})
        console.log("Fecha: ",dataDate[0].date.value);
      }else {
        $("#dateIEEE").val("");
        $("#dateIEEE").attr("placeholder","without date!, can you edit the date?")
        $("#dateIEEE").css({"font-style": "italic"})
      }
    }
    function  almAbstract(json){
      var dataAbstract = json.results.bindings;

      if(Object.entries(dataAbstract).length != 0 ){
        $(".abstractIEEE").val(dataAbstract[0].abstract.value)
        $(".abstractIEEE").css({"font-style": "normal"})
        console.log("Abstract: ",dataAbstract[0].abstract.value);
      }else {
        $(".abstractIEEE").val("");
        $(".abstractIEEE").attr("placeholder","without abstract!, can you edit the abstract?")
        $(".abstractIEEE").css({"font-style": "italic"})
      }
    }
    function  almKeyword1(json){
      var allKeyword = new Array()
      var dataKeyword = json.results.bindings;
      console.log("Palabras clave oakland: ", dataKeyword ); //query for ieee-publications-oakland.rdf (dataset IEEE)
      if(Object.entries(dataKeyword).length != 0 )
      {
        for(i = 0; i<dataKeyword.length;i++){
          allKeyword.push(dataKeyword[i].keyword1.value)
          console.log("Palabras clave oakland: ",dataKeyword[i].keyword1.value);  //query for ieee-publications-oakland.rdf (dataset IEEE)
        }
        $("#keywordIEEE").val(allKeyword)
        $("#keywordIEEE").css({"font-style": "normal"})
      }
      else {
        sparqlKeyword2 = prefixIeee + "SELECT DISTINCT ?keyword2 WHERE {<" +valueQuery+"> iai:has-ieee-keyword ?keyword2 }"
        $("#sparqlKeyword").text(sparqlKeyword2);
        var sparqlKeyword2 = d3.select("#sparqlKeyword").property("value")
        d3sparql.query(endpoint, sparqlKeyword2,almKeyword2)

        function  almKeyword2(json){
          var allKeyword2 = new Array()
          var dataKeyword2 = json.results.bindings;
          console.log("Palabras clave ftcs: ", dataKeyword2 ); //query for ieee-publications-ftcs.rdf (dataset IEEE)
          if(Object.entries(dataKeyword2).length != 0 )
          {
            for(i = 0; i<dataKeyword2.length;i++){
              allKeyword2.push(dataKeyword2[i].keyword2.value)
              console.log("Palabras clave ftcs: ",dataKeyword2[i].keyword2.value); //query for ieee-publications-ftcs.rdf (dataset IEEE)
            }
            $("#keywordIEEE").val(allKeyword2)
            $("#keywordIEEE").css({"font-style": "normal"})

          }else{
            $("#keywordIEEE").val("");
            $("#keywordIEEE").attr("placeholder","without keywords!, can you edit the keywords? ")
            $("#keywordIEEE").css({"font-style": "italic"})

          }
        }
      }
    }
    function  almJournal(json){
      var dataJournal = json.results.bindings;
      if(Object.entries(dataJournal).length != 0 ){
        $("#journalIEEE").val(dataJournal[0].TittleJournal.value)
        $("#journalDateIEEE").val(dataJournal[0].dateJournalYears.value)
        $("#journalWebAddressIEEE").val(dataJournal[0].webJournal.value)
        $("#journalIEEE").css({"font-style": "normal"})
        $("#journalDateIEEE").css({"font-style": "normal"})
        $("#journalWebAddressIEEE").css({"font-style": "normal"})
        console.log("Titulo Journal: ",dataJournal[0].TittleJournal.value);
        console.log("Fecha journal: ",dataJournal[0].dateJournalYears.value);
        console.log("Web Journal: ",dataJournal[0].webJournal.value);
      }else {
        $("#journalIEEE").val("");
        $("#journalDateIEEE").val("");
        $("#journalWebAddressIEEE").val("");
        $("#journalIEEE").attr("placeholder","without journal!, can you edit the journal?")
        $("#journalDateIEEE").attr("placeholder","without journal Date!, can you edit the journal Date?")
        $("#journalWebAddressIEEE").attr("placeholder","without journal web address!, can you edit the journal web address?")
        $("#journalIEEE").css({"font-style": "italic"})
        $("#journalDateIEEE").css({"font-style": "italic"})
        $("#journalWebAddressIEEE").css({"font-style": "italic"})
      }
    }
    function  almWeb(json){
      var dataWeb = json.results.bindings;
      if(Object.entries(dataWeb).length != 0 ){
        $("#webIEEE").val(dataWeb[0].web.value);
        $("#webIEEE").css({"font-style": "normal"})
        $("#webAddress").text("Full-text").attr({"href":dataWeb[0].web.value,"title":dataWeb[0].web.value});
        $("#webAddressLink").text("Visitar Direccion Web del recurso: ");
        console.log("Web: ",dataWeb[0].web.value);
      }else {
        $("#webIEEE").val("");
        $("#webIEEE").attr("placeholder","without web!, can you edit the web?")
        $("#webIEEE").css({"font-style": "italic"})
        $("#webAddress").text("-").attr({"href":"#","title":" "});
        $("#webAddressLink").text("Sin dirección web");
      }
    }
  } // end function to result of sparqlURI
}
//////////////////////////////////////////////////////////////////////////////////add Jonathan end

function recom(){

  var sparql = prefixs + "SELECT ?cr1URI WHERE {"+
    "{?cr1URI ?link <http://acm.rkbexplorer.com/id/100233>.}}"
  var endpoint = d3.select("#endpoint").property("value")
  d3sparql.query(endpoint, sparql,almArr)
}

function  almArr(json){
  var articsArr = json.results.bindings;
  for(i in articsArr){
    arrayURIS[i] = articsArr[i].cr1URI.value
  }
  var sparqlRec;
  for(i=0 ; i<arrayURIS.length ; i++){
    sparqlRec= prefixs +
      "SELECT ?links WHERE{"+
      //"{ <http://acm.rkbexplorer.com/id/100233> ?links " + "<" +arrURI[i] + ">.}"+
      //"UNION"+
      "{<"+arrayURIS[i]+">" + " ?links <http://acm.rkbexplorer.com/id/100233>.}"+
      "}"
    var endpoint = d3.select("#endpoint").property("value")
    d3sparql.query(endpoint,sparqlRec,almValues)
  }

  console.log(arrayValores.length)

}

function almValues(json){
  var uris = json.results.bindings;
  arrayValores.push(uris.length);
}

function exec_offline() {
  d3.json("cache/interpro/1117-hk.json", render)
}
function toggle() {
  d3sparql.toggle()
}