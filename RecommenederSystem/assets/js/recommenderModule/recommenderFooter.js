$(document).ready(function(){///////////////////////////start Jquery

  ///////////////////////// QUERY OF KEYWORDS TO TITLE //////////////////////////////
  var title = $("#title").val();    //get value of title
  var queryHeader = "SELECT DISTINCT ?TITULO \n"+
    "WHERE { ?p akt:has-title ?TITULO. FILTER (\n"        //header of query
  var queryFooter = ")}"    //footer of query
  var stringRegex = new Array ()    // string that contains the value of function regex of SPARQL
  var arrayOfString  // string that contains the value of the title
  var cont  = 0  //counter used in the while loop
  var keywordsTitle = ""  // final result to include in the SPARQL query
  var spaceSeparator = ",";  //separator for the argument of the function StringToSplit()







  function splitString (StringToSplit,separator){
    arrayOfString = StringToSplit.split(separator);
    console.log("arrayOfString.length", arrayOfString.length)

    // add words of title in function regex (SPARQL)
    for (var j=0;j<arrayOfString.length;j++){
      if(j != (arrayOfString.length-1)){
        stringRegex.push("regex(str(?TITULO), '"+arrayOfString[j]+"', 'i')||\n");
      }else{
        stringRegex.push("regex(str(?TITULO), '"+arrayOfString[j]+"', 'i')\n");
      }
    }
    // add results to variable keywordsTitle
    while ( cont < arrayOfString.length ) {
      keywordsTitle += stringRegex[cont];
      cont++
    }

    $("#sparql").text(prefix + queryHeader + keywordsTitle +queryFooter); // send query to VIEW (#sparql)
  };

  splitString(title,spaceSeparator);


//////////// RESULTS TABLE OF FIRTS QUERY (d3sparql.htmltable2) //////////////////////////////
  d3sparql.htmltable2 = function(json, config) {
    config = config || {}
    var head = json.head.vars
    var data = json.results.bindings
    var opts = {
      "selector": config.selector || null
    }
    var table = d3sparql.select(opts.selector, "htmltable").append("table").attr("class", "table table-bordered")
    var thead = table.append("thead")
    var tbody = table.append("tbody")
    thead.append("tr")
      .selectAll("th")
      .data(head)
      .enter()
      .append("th")
      .text(function(col) { return col })
    var rows = tbody.selectAll("tr")
      .data(data)
      .enter()
      .append("tr")
    var cells = rows.selectAll("td")
      .data(function(row) {
        return head.map(function(col) {
          return row[col].value

        })
      })
      .enter()
      .append("td")
      .append("lu")
      .append("li")
      .append("button")
      .text(function(val) {return val })
    // default CSS

    table.style({
      "margin": "10px"
    })
    table.selectAll("th").style({
      "background": "#eeeeee",
      "text-transform": "capitalize",
    })
    for(i=0 ; i<data.length*2 ; i++) {


      $("tbody tr td lu li:eq("+i+")").css("list-style","none")//quita el punto de la lista
      $("tbody tr td lu li:eq("+i+") button").attr("id","btn"+i)

        .attr({
          "class": "btn btn-outline-success btn-lg btn-block",
          "data-toggle": "modal",
          "data-target": "#metadataACM",
          "onclick":"web(this)"
        })


      // if (i % 2 != 1 || i == 0){
      // }
      // else {
      // }

    }
  }
});   //end jquery



