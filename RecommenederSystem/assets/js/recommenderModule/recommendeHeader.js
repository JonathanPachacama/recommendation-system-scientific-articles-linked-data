//add Jonathan start

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
//add Jonathan end

var webACM = "https://dl.acm.org/citation.cfm?id="
// function exec() {
//   var endpoint = d3.select("#endpoint").property("value")
//   var sparql = d3.select("#sparql").property("value")
//   d3sparql.query(endpoint, sparql, render)
// }

// function render(json) {
//   var config = {
//     "selector": "#result"
//   }
//
//   var Title = json.results.bindings;
//
//   console.log("Total Articulo: ",Title.length);
//   d3sparql.htmltable2(json, config)
//
//
// }

////////////////////////////////////////////////////////////////////////////////add Jonathan start


function  web(button){
  // $("#metadataACM").modal({backdrop: 'static', keyboard: false})
  var idButton = button.id
  var resIdBuuton = idButton.replace("btn", '');
  var valueQueryTitle = $("#btn"+resIdBuuton).val()        // use for result with algorithm
  // var valueQueryTitle = $("#btn"+resIdBuuton).text()    // use for result without algorithm

  console.log("valueQueryTitle",valueQueryTitle)
  // query to find the URI of the title found
  var sparqlURI2 = prefix + "SELECT DISTINCT ?titleUri WHERE { ?titleUri akt:has-title ?p. filter (?p='" +valueQueryTitle+"')}"
  var endpoint = d3.select("#endpointDynamic").property("value")  // use for result with algorithm
  // var endpoint = d3.select("#endpoint").property("value") // use for result without algorithm

  d3sparql.query(endpoint, sparqlURI2,almURI)

  function  almURI(json){   //function to result of sparqlURI
    var dataURI = json.results.bindings;
    console.log("dataURI",dataURI)
    var valueQuery = dataURI[0].titleUri.value
    var endpoint = d3.select("#endpointDynamic").property("value") // use for result with algorithm
    // var endpoint = d3.select("#endpoint").property("value") // use for result without algorithm
    console.log("valueQuery",valueQuery)
    //query sparql
    sparqlTittle = prefix + "SELECT DISTINCT ?title WHERE {<" +valueQuery+"> akt:has-title ?title}"
    sparqlAuthor = prefix + "SELECT DISTINCT ?nameAutor WHERE {<" +valueQuery+"> akt:has-author ?a.?a akt:full-name ?nameAutor}"
    sparqlDate = prefix + "SELECT DISTINCT ?date WHERE {<" +valueQuery+"> akt:has-date ?a.?a akts:has-pretty-name ?date}"
    sparqlAbstract = prefix + "SELECT DISTINCT ?abstract WHERE {<" +valueQuery+"> extension:has-abstract ?abstract}"
    sparqlKeyword1 = prefix + "SELECT DISTINCT ?keyword1 WHERE {<" +valueQuery+"> akt:has-ieee-keyword ?keyword1 }"
    sparqlJournal = prefix + "SELECT DISTINCT ?TittleJournal ?webJournal ?dateJournalYears \n" +
      "WHERE {<" +valueQuery+"> akt:paper-in-proceedings ?a.\n" +
      "?a akt:has-title ?TittleJournal.\n"+
      "?a akt:has-web-address ?webJournal.\n"+
      "?a akt:has-date ?b.?b akts:year-of ?dateJournalYears}"
    sparqlWeb = prefix + "SELECT DISTINCT ?web WHERE {<" +valueQuery+"> akt:has-web-address ?web.}"


    sparqlCited = prefix + "SELECT DISTINCT ?cited WHERE { <" +valueQuery+"> akt:cites-publication-reference ?o.?o akt:has-title ?cited}"
    sparqlWhoCited = prefix + "SELECT DISTINCT ?whoCitedTheir WHERE { ?s akt:cites-publication-reference <"+valueQuery+">. ?s akt:has-title ?whoCitedTheir}"
    sparqlVolume = prefix + "SELECT DISTINCT ?volume WHERE { <"+valueQuery+"> akt:has-volume ?volume}"




    //add query sparql to textarea
    $("#sparqlTittle").text(sparqlTittle);
    $("#sparqlAuthor").text(sparqlAuthor);
    $("#sparqlDate").text(sparqlDate);
    $("#sparqlAbstract").text(sparqlAbstract);
    $("#sparqlKeyword").text(sparqlKeyword1);
    $("#sparqlJournal").text(sparqlJournal);
    $("#sparqlWeb").text(sparqlWeb);
    $("#sparqlCited").text(sparqlCited);
    $("#sparqlWhoCited").text(sparqlWhoCited);
    $("#sparqlVolume").text(sparqlVolume);

    //add value of textarea to d3sparql
    var sparqlTittle = d3.select("#sparqlTittle").property("value")
    var sparqlAuthor = d3.select("#sparqlAuthor").property("value")
    var sparqlDate = d3.select("#sparqlDate").property("value")
    var sparqlAbstract = d3.select("#sparqlAbstract").property("value")
    var sparqlKeyword1 = d3.select("#sparqlKeyword").property("value")
    var sparqlJournal = d3.select("#sparqlJournal").property("value")
    var sparqlWeb = d3.select("#sparqlWeb").property("value")
    var sparqlCited = d3.select("#sparqlCited").property("value")
    var sparqlWhoCited = d3.select("#sparqlWhoCited").property("value")
    var sparqlVolume = d3.select("#sparqlVolume").property("value")
    //query d3sparql
    d3sparql.query(endpoint, sparqlTittle,almTittle)
    d3sparql.query(endpoint, sparqlAuthor,almAuthor)
    d3sparql.query(endpoint, sparqlDate,almDate)
    d3sparql.query(endpoint, sparqlAbstract,almAbstract)
    d3sparql.query(endpoint, sparqlKeyword1,almKeyword1)
    d3sparql.query(endpoint, sparqlJournal,almJournal)
    d3sparql.query(endpoint, sparqlWeb,almWeb)
    d3sparql.query(endpoint, sparqlCited,almCited)
    d3sparql.query(endpoint, sparqlWhoCited,almWhoCited)
    d3sparql.query(endpoint, sparqlVolume,almVolume)
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


        sparqlDate2 = prefix + " SELECT DISTINCT ?date WHERE {<"+valueQuery+"> akt:has-date ?a.?a akts:year-of ?date}"
        $("#sparqlDate").text(sparqlDate2);
        var sparqlDate2 = d3.select("#sparqlDate").property("value")
        d3sparql.query(endpoint, sparqlDate2,almDate2)

        function  almDate2(json){
          var dataDate2 = json.results.bindings;
          console.log("Año Dblp: ", dataDate2 ); //query for date (dataset DBLP)
          if(Object.entries(dataDate2).length != 0 )
          {
            $("#dateIEEE").val(dataDate2[0].date.value)
            $("#dateIEEE").css({"font-style": "normal"})
            console.log("Fecha: ",dataDate2[0].date.value);

          }else{
            $("#dateIEEE").val("");
            $("#dateIEEE").attr("placeholder","without date!, can you edit the date?")
            $("#dateIEEE").css({"font-style": "italic"})
          }
        }
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
        sparqlKeyword2 = prefix + "SELECT DISTINCT ?keyword2 WHERE {<" +valueQuery+"> iai:has-ieee-keyword ?keyword2 }"
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

            sparqlKeyword3 = prefix + "SELECT DISTINCT ?nameArea WHERE {<"+valueQuery+"> akt:addresses-generic-area-of-interest ?a.?a rdfs:label ?nameArea}"
            $("#sparqlKeyword").text(sparqlKeyword3);
            var sparqlKeyword3 = d3.select("#sparqlKeyword").property("value")
            d3sparql.query(endpoint, sparqlKeyword3,almKeyword3)

            function  almKeyword3(json){
              var allKeyword3 = new Array()
              var dataKeyword3 = json.results.bindings;
              console.log("Area de interes ACM: ", dataKeyword3 ); //query for addresses-generic-area-of-interest (dataset ACM)
              if(Object.entries(dataKeyword3).length != 0 )
              {
                for(i = 0; i<dataKeyword3.length;i++){
                  allKeyword3.push(dataKeyword3[i].nameArea.value)
                  console.log("Area de interes ACM: ",dataKeyword3[i].nameArea.value); //query for addresses-generic-area-of-interest (dataset ACM)
                }
                $("#keywordIEEE").val(allKeyword3)
                $("#keywordIEEE").css({"font-style": "normal"})

              }else{
                $("#keywordIEEE").val("");
                $("#keywordIEEE").attr("placeholder","without keywords!, can you edit the keywords? ")
                $("#keywordIEEE").css({"font-style": "italic"})
              }
            }
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

        sparqlJournal2 = prefix + "SELECT DISTINCT ?journal WHERE {<"+valueQuery+"> akt:article-of-journal ?a.?a akt:has-title ?journal}"
        $("#sparqlJournal").text(sparqlJournal2);
        var sparqlJournal2 = d3.select("#sparqlJournal").property("value")
        d3sparql.query(endpoint, sparqlJournal2,almJournal2)

        function  almJournal2(json){

          var dataJournal2 = json.results.bindings;
          console.log("Journal DBLP: ", dataJournal2 ); //query for journal (dataset DBLP)
          if(Object.entries(dataJournal2).length != 0 )
          {

            $("#journalIEEE").val(dataJournal2[0].journal.value)
            $("#journalDateIEEE").val("");
            $("#journalWebAddressIEEE").val("");
            $("#journalIEEE").attr("placeholder","without journal!, can you edit the journal?")
            $("#journalDateIEEE").attr("placeholder","without journal Date!, can you edit the journal Date?")
            $("#journalWebAddressIEEE").attr("placeholder","without journal web address!, can you edit the journal web address?")
            $("#journalIEEE").css({"font-style": "normal"})
            $("#journalDateIEEE").css({"font-style": "italic"})
            $("#journalWebAddressIEEE").css({"font-style": "italic"})
            console.log("Titulo Journal: ",dataJournal2[0].journal.value);

          }else{
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
      }
    }
    function  almWeb(json){
      var dataWeb = json.results.bindings;
      if(Object.entries(dataWeb).length != 0 ){
        $("#webIEEE").val(dataWeb[0].web.value);
        $("#webIEEE").css({"font-style": "normal"})
        $("#webAddress").text("web").attr({"href":dataWeb[0].web.value,"title":dataWeb[0].web.value});
        $("#webAddressLink").text("Visitar Dirección Web del recurso: ");
        console.log("Web: ",dataWeb[0].web.value);
      }else {
        var resSparqlWeb2 = valueQuery.replace("http://acm.rkbexplorer.com/id/", '');
        var sparqlWeb2 = Number(resSparqlWeb2)
        if (Number.isInteger(sparqlWeb2)){
          var webACMresult = webACM+sparqlWeb2
          $("#webIEEE").val(webACMresult);
          $("#webIEEE").css({"font-style": "normal"})
          $("#webAddress").text("web").attr({"href":webACMresult,"title":webACMresult});
          $("#webAddressLink").text("Visitar Dirección Web del recurso: ");
          console.log("Web: ",webACMresult);
        }else{
          $("#webIEEE").val("");
          $("#webIEEE").attr("placeholder","without web!, can you edit the web?")
          $("#webIEEE").css({"font-style": "italic"})
          $("#webAddress").text("-").attr({"href":"#","title":" "});
          $("#webAddressLink").text("Sin dirección web");
        }
      }
    }
    function  almCited(json){
      var allCited = new Array()
      var dataCited = json.results.bindings;
      if(Object.entries(dataCited).length != 0 ){

        for(i = 0; i<dataCited.length;i++){
          allCited.push(dataCited[i].cited.value)
          console.log("Todos los Citados: ",dataCited[i].cited.value); //query for ieee-publications-ftcs.rdf (dataset IEEE)
        }
        $("#cited").val(allCited)
        $("#cited").css({"font-style": "normal"})
        console.log("Citados: ",dataCited);
      }
      else{
        sparqlCited2 = prefix + "SELECT DISTINCT ?cited WHERE { <"+valueQuery+"> iai:is-very-strongly-related-to ?o.?o akt:has-title ?cited}"

        $("#sparqlCited").text(sparqlCited2);
        var sparqlCited2 = d3.select("#sparqlCited").property("value")
        d3sparql.query(endpoint, sparqlCited2,almCited2)

        function  almCited2(json){
          var allCited2 = new Array()
          var dataCited2 = json.results.bindings;
          console.log("CITADOS IEEE: ", dataCited2 ); //query for cited (dataset IEEEE)
          if(Object.entries(dataCited2).length != 0 )
          {

            for(i = 0; i<dataCited2.length;i++){
              allCited2.push(dataCited2[i].cited.value)
              console.log("Todos los Citados IEEE: ",dataCited2[i].cited.value); //query for iai:is-very-strongly-related-to (dataset IEEE)
            }
            $("#cited").val(allCited2)
            $("#cited").css({"font-style": "normal"})
            console.log("Citados: ",dataCited2);
          }else{
            $("#cited").val("");
            $("#cited").attr("placeholder","without Related articles!")
            $("#cited").css({"font-style": "italic"})
          }
        }
      }
    }
    function  almWhoCited(json){
      var allWhoCited = new Array()
      var dataWhoCited = json.results.bindings;
      if(Object.entries(dataWhoCited).length != 0 ){

        for(i = 0; i<dataWhoCited.length;i++){
          allWhoCited.push(dataWhoCited[i].whoCitedTheir.value)
          console.log("Todos Quien le Cita: ",dataWhoCited[i].whoCitedTheir.value); //query for CITADOS
        }
        $("#whoCited").val(allWhoCited)
        $("#whoCited").css({"font-style": "normal"})
        console.log("Quien le cita: ",dataWhoCited);
      }
      else{


        sparqlWhoCited2 = prefix + "SELECT DISTINCT ?whoCitedTheir WHERE { ?s iai:is-very-strongly-related-to <"+valueQuery+">. ?s akt:has-title ?whoCitedTheir } "
        $("#sparqlWhoCited").text(sparqlWhoCited2);
        var sparqlWhoCited2 = d3.select("#sparqlWhoCited").property("value")
        d3sparql.query(endpoint, sparqlWhoCited2,almWhoCited2)

        function  almWhoCited2(json){
          var allWhoCited2 = new Array()
          var dataWhoCited2 = json.results.bindings;
          console.log("quien Cita IEEE DBLP: ", dataWhoCited2 ); //query for WHO CITED (dataset IEEE)
          if(Object.entries(dataWhoCited2).length != 0 )
          {
            for(i = 0; i<dataWhoCited2.length;i++){
              allWhoCited2.push(dataWhoCited2[i].whoCitedTheir.value)
              console.log("Todos Quien le Cita: ",dataWhoCited2[i].whoCitedTheir.value); //query for CITADOS
            }

            $("#whoCited").val(allWhoCited2)
            $("#whoCited").css({"font-style": "normal"})
            console.log("Citados: ",dataWhoCited2);

          }else{
            $("#whoCited").val("");
            $("#whoCited").attr("placeholder","without Related articles!")
            $("#whoCited").css({"font-style": "italic"})
          }
        }

      }
    }
    function  almVolume(json){
      var dataVolume = json.results.bindings;
      if(Object.entries(dataVolume).length != 0 ){
        $("#volume").val(dataVolume[0].volume.value)
        $("#volume").css({"font-style": "normal"})
        console.log("Volumen: ",dataVolume[0].volume.value);
      }
      else{
        $("#volume").val("");
        $("#volume").attr("placeholder","without volume!, can you edit the volume?")
        $("#volume").css({"font-style": "italic"})
      }
    }
  } // end function to result of sparqlURI
}

//////////////////////////////////////////////////////////////////////////////////add Jonathan end



