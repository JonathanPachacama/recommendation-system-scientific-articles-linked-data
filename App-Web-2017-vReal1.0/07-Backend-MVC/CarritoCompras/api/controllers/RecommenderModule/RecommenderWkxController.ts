declare var module;
declare var sails;
declare var LinkPublication;
declare var Articulo;

declare var Wkx_collection;
declare var Wkx_creator;
declare var Wkx_publisher;
declare var Wkx_resource_misc;
declare var Wkx_resource;


module.exports = {


  recommenderWkx:(req,res)=>{


    let parametros = req.allParams();
    // if(!parametros.busqueda){
    //   parametros.busqueda ='';
    // }
    sails.log.info("Parametros",parametros);
    Wkx_resource
      .find()
      .where({
        resourceTitle:{
          contains:parametros.busqueda
        }
      })
      .exec((err,resourceFound)=>{
        if(err) return res.negotiate(err);

        return res.view('RecommenderModule/MainWikindx',{
          resource:resourceFound
        })
      });
  },

  bringParametersCreator:(req,res)=>{
    let parameters = req.allParams();
    if(parameters.resourceId){
      Wkx_resource.findOne({
        resourceId:parameters.resourceId
      })
        .exec((err,resourceFound)=>{
          if(err) return res.serverError(err);
          if(resourceFound){
            //Si encontro
            Wkx_resource.query('SELECT creatorId,creatorFirstname,creatorSurname,resourceId,resourceTitle,categoryId,categoryCategory,keywordId,keywordKeyword\n' +
              'FROM wkx_resource,wkx_creator,wkx_resource_creator,wkx_category,wkx_resource_category,wkx_keyword,wkx_resource_keyword\n' +
              'WHERE wkx_creator.creatorId=wkx_resource_creator.resourcecreatorId AND wkx_resource.resourceId=wkx_resource_creator.resourcecreatorResourceId\n' +
              'AND(wkx_category.categoryId=wkx_resource_category.resourcecategoryCategoryId AND wkx_resource_category.resourcecategoryResourceId=wkx_resource.resourceId)\n' +
              'AND (wkx_keyword.keywordId=wkx_resource_keyword.resourcekeywordKeywordId AND wkx_resource_keyword.resourcekeywordResourceId=wkx_resource.resourceId)\n' +
              'AND (wkx_resource.resourceId=?)' , [ resourceFound.resourceId ] ,function(err, rawResult) {
              if (err) { return res.serverError(err); }
              if(rawResult.length!= 1 || rawResult.length == 1){
                sails.log("tamaño",rawResult.length);
                sails.log("valor",rawResult);

                var query = [];
                let iteracion = [];
                let keyword = []
                let category = []
                let firstname = []
                let surname = []
                for (let i = 0; i < rawResult.length;i++){
                  if(rawResult[i]. resourceId == resourceFound.resourceId){
                    iteracion.push( rawResult[i]);
                    keyword.push( rawResult[i].keywordKeyword);
                    category.push( rawResult[i].categoryCategory);
                    firstname.push( rawResult[i].creatorFirstname);
                    surname.push( rawResult[i].creatorSurname);
                  }
                }
                query = iteracion;
                sails.log("query ",query);
                sails.log("keyword ",keyword);
                sails.log("category ",category);
                sails.log("firstname ",firstname);
                sails.log("surname ",surname);
                var outKeyword=[]
                var outCategory=[]
                var outFirstname=[]
                var outSurname=[]=[]
                function eliminateDuplicatesKeyword(arr) {
                  var i,
                    len=arr.length,
                    obj={};

                  for (i=0;i<len;i++) {
                    obj[arr[i]]=0;
                  }
                  for (i in obj) {
                    outKeyword.push(i);
                  }

                  return outKeyword;
                }
                function eliminateDuplicatesCategory(arr) {
                  var i,
                    len=arr.length,
                    obj={};

                  for (i=0;i<len;i++) {
                    obj[arr[i]]=0;
                  }
                  for (i in obj) {
                    outCategory.push(i);
                  }

                  return outCategory;
                }

                function eliminateDuplicatesFirstname(arr) {
                  var i,
                    len=arr.length,
                    obj={};

                  for (i=0;i<len;i++) {
                    obj[arr[i]]=0;
                  }
                  for (i in obj) {
                    outFirstname.push(i);
                  }

                  return outFirstname;
                }

                function eliminateDuplicatesSurname(arr) {
                  var i,
                    len=arr.length,
                    obj={};

                  for (i=0;i<len;i++) {
                    obj[arr[i]]=0;
                  }
                  for (i in obj) {
                    outSurname.push(i);
                  }

                  return outSurname;
                }
                eliminateDuplicatesKeyword(keyword);
                eliminateDuplicatesCategory(category);
                eliminateDuplicatesFirstname(firstname);
                eliminateDuplicatesSurname(surname);
                keyword =outKeyword;
                category = outCategory;
                firstname = outFirstname;
                surname = outSurname;

                sails.log("keyword Sin duplicados ",keyword);
                sails.log("category Sin duplicados ",category);
                sails.log("firstname Sin duplicados ",firstname);
                sails.log("surname Sin duplicados ",surname);

                Wkx_resource.query('SELECT "Title" as Type,resourceId AS Id,resourceTitle AS Value FROM wkx_resource WHERE resourceId = ? ' +
                  'UNION ' +
                  'SELECT "Abstract",resourcetextId,resourcetextAbstract FROM wkx_resource_text WHERE resourcetextId =?', [ rawResult[0].resourceId, rawResult[0].resourceId ] ,function(err, rawResult2) {
                  if (err) { return res.serverError(err); }
                  sails.log("valor2: ",rawResult2);
                  let abstract = rawResult2[1].Value

                  if (rawResult2[0].id == rawResult2[1].id ){

                    Wkx_resource.query('SELECT "Metadata" as Type, collectionId, publisherId, collectionTitle,publisherName,publisherLocation\n' +
                      'FROM wkx_collection,wkx_publisher,wkx_resource_misc\n' +
                      'WHERE wkx_collection.collectionId=wkx_resource_misc.resourcemiscCollection \n' +
                      'AND wkx_resource_misc.resourcemiscPublisher=wkx_publisher.publisherId\n' +
                      'AND (wkx_collection.collectionId = wkx_publisher.publisherId)\n' +
                      'AND wkx_collection.collectionId  = ?\n' +
                      'UNION \n' +
                      'SELECT "Title [idT|idT|title|type|type]", resourceId,resourceId,resourceTitle,resourceType,resourceType FROM wkx_resource\n' +
                      'WHERE wkx_resource.resourceId= ?', [ rawResult[0].resourceId, rawResult[0].resourceId] ,function(err, rawResult3) {
                      if (err) { return res.serverError(err); }
                      sails.log(rawResult3);

                      if (rawResult3[0].collectionId == rawResult3[1].collectionId ){

                        let publisher = rawResult3[0].publisherName
                        let locationPublisher = rawResult3[0].publisherLocation
                        let journal = rawResult3[0].collectionTitle
                        sails.log(publisher);
                        sails.log(locationPublisher);
                        sails.log(journal);

                        return res.view('RecommenderModule/recommenderWkx',{
                          creator:resourceFound,
                          query:query[0],
                          firstname:firstname,
                          surname:surname,
                          keyword:keyword,
                          category:category,
                          abstract:abstract,
                          journal:journal,
                          publisher:publisher,
                          locationPublisher:locationPublisher
                        })
                      }
                      else {
                        return res.redirect('/')
                      }
                    });
                  }
                  else{
                    return res.redirect('/')
                  }
                });
              }
              else {
                return res.redirect('/')
              }
            });
          } else{
            //No encontro
            return res.redirect('/')
          }
        })
    }else{
      return res.redirect('/')
    }
  }
}
