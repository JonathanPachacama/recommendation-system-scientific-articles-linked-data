declare var module;
declare var sails;
declare var LinkPublication;
declare var Articulo;

declare var Wkx_collection;
declare var Wkx_creator;
declare var Wkx_publisher;
declare var Wkx_resource_misc;


module.exports = {

  test:(req,res)=>{


    return res.view('RecommenderModule/MainWikindx')

  },

  recommenderWkx:(req,res)=>{

    Wkx_creator
      .find()
      .exec((err,creatorsFound)=>{
        if(err) return res.negotiate(err);
        console.log("Article:",creatorsFound)

        return res.view('RecommenderModule/MainWikindx',{
          creators:creatorsFound
        })
      });
  },


  bringParametersCreator:(req,res)=>{
    let parameters = req.allParams();
    if(parameters.creatorId){
      Wkx_creator.findOne({
        creatorId:parameters.creatorId
      })
        .exec((err,creatorFound)=>{
          if(err) return res.serverError(err);
          if(creatorFound){
            //Si encontro
            Wkx_creator.query('SELECT creatorId,creatorFirstname,creatorSurname,resourceId,resourceTitle,categoryId,categoryCategory,keywordId,keywordKeyword\n' +
              'FROM wkx_resource,wkx_creator,wkx_resource_creator,wkx_category,wkx_resource_category,wkx_keyword,wkx_resource_keyword\n' +
              'WHERE wkx_creator.creatorId=wkx_resource_creator.resourcecreatorId AND wkx_resource.resourceId=wkx_resource_creator.resourcecreatorResourceId\n' +
              'AND(wkx_category.categoryId=wkx_resource_category.resourcecategoryCategoryId AND wkx_resource_category.resourcecategoryResourceId=wkx_resource.resourceId)\n' +
              'AND (wkx_keyword.keywordId=wkx_resource_keyword.resourcekeywordKeywordId AND wkx_resource_keyword.resourcekeywordResourceId=wkx_resource.resourceId)\n' +
              'AND (wkx_creator.creatorId=?)' , [ creatorFound.creatorId ] ,function(err, rawResult2) {
              if (err) { return res.serverError(err); }
              if(rawResult2.length!= 1){

                sails.log("tamaño",rawResult2.length);

                var query = [];

                let iteracion = [];
                let keyword = []
                let category = []
                for (let i = 0; i < rawResult2.length;i++){

                  if(rawResult2[i]. creatorId == creatorFound.creatorId){
                    iteracion.push( rawResult2[i]);
                    keyword.push( rawResult2[i].keywordKeyword);
                    category.push( rawResult2[i].categoryCategory);
                  }
                }
                query = iteracion;
                sails.log("query ",query);
                sails.log("keyword ",keyword);
                sails.log("category ",category);
                var outKeyword=[]
                var outCategory=[]
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
                eliminateDuplicatesKeyword(keyword);
                eliminateDuplicatesCategory(category);

                keyword =outKeyword;
                category = outCategory;

                sails.log("keyword Sin duplicados ",keyword);
                sails.log("category Sin duplicados ",category);

                return res.view('RecommenderModule/wkx_keyword',{
                  creator:creatorFound,
                  query:query[0],
                  keyword:keyword,
                  category:category
                })
              }
              else {
                sails.log("rawResult",rawResult2);
                sails.log("creatorFound",creatorFound);

                let query = rawResult2[0]

                return res.view('RecommenderModule/wkx_creator',{
                  creator:creatorFound,
                  query:query
                })
              }
            });
          }else{
            //No encontro
            return res.redirect('/')
          }
        })
    }else{
      return res.redirect('/')
    }

  }

}
