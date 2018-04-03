module.exports = {
    test: function (req, res) {
        return res.view('RecommenderModule/MainWikindx');
    },
    recommenderWkx: function (req, res) {
        //let CollectionId:number[] = [];
        Wkx_creator
            .find()
            .exec(function (err, creatorsFound) {
            if (err)
                return res.negotiate(err);
            console.log("Article:", creatorsFound);
            return res.view('RecommenderModule/MainWikindx', {
                creators: creatorsFound
            });
        });
        // Wkx_collection.find().exec((error,collectionFound)=>{
        //       if(error){
        //         return res.serverError(error);
        //       }
        //       else{
        //         for(let i = 0;i<collectionFound.length;i ++){
        //           CollectionId=collectionFound[i].collectionId
        //           console.log("CollectionId:", CollectionId)
        //         }
        //
        //         Wkx_publisher.find().exec((error,publisherFound)=>{
        //               if(error){
        //                 return res.serverError(error);
        //               }else{
        //                 for(let i = 0;i<collectionFound.length;i ++){
        //                   PublisherId=publisherFound[i].publisherId
        //                   console.log("publisherFound:", PublisherId)
        //                 }
        //                 Wkx_resource_misc.find({resourcemiscCollection:CollectionId, resourcemiscPublisher: PublisherId,}).exec((error,resource_miscFound)=>{
        //                       if(error){
        //                         return res.serverError(error);
        //                       }
        //                       else{
        //                         return res.view('RecommenderModule/MainWikindx',{
        //                           resourcemisc:resource_miscFound
        //                         })
        //
        //
        //                         // return res.ok(resource_miscFound)
        //                       }
        //                     });
        //               }
        //
        //             });
        //       }
        //     });
    },
    bringParametersCreator: function (req, res) {
        var parameters = req.allParams();
        if (parameters.creatorId) {
            Wkx_creator.findOne({
                creatorId: parameters.creatorId
            })
                .exec(function (err, creatorFound) {
                if (err)
                    return res.serverError(err);
                if (creatorFound) {
                    //Si encontro
                    Wkx_creator.query('SELECT creatorId,creatorFirstname,creatorSurname,resourceId,resourceTitle,categoryId,categoryCategory,keywordId,keywordKeyword\n' +
                        'FROM wkx_resource,wkx_creator,wkx_resource_creator,wkx_category,wkx_resource_category,wkx_keyword,wkx_resource_keyword\n' +
                        'WHERE wkx_creator.creatorId=wkx_resource_creator.resourcecreatorId AND wkx_resource.resourceId=wkx_resource_creator.resourcecreatorResourceId\n' +
                        'AND(wkx_category.categoryId=wkx_resource_category.resourcecategoryCategoryId AND wkx_resource_category.resourcecategoryResourceId=wkx_resource.resourceId)\n' +
                        'AND (wkx_keyword.keywordId=wkx_resource_keyword.resourcekeywordKeywordId AND wkx_resource_keyword.resourcekeywordResourceId=wkx_resource.resourceId)\n' +
                        'AND (wkx_creator.creatorId=?)', [creatorFound.creatorId], function (err, rawResult2) {
                        if (err) {
                            return res.serverError(err);
                        }
                        if (rawResult2.length != 1) {
                            sails.log("tamaño", rawResult2.length);
                            var query = [];
                            //query[0] = rawResult2[0]
                            //sails.log("query[0]",query[0]);
                            var iteracion = [];
                            var keyword = [];
                            var category = [];
                            for (var i = 0; i < rawResult2.length; i++) {
                                if (rawResult2[i].creatorId == creatorFound.creatorId) {
                                    iteracion.push(rawResult2[i]);
                                    keyword.push(rawResult2[i].keywordKeyword);
                                    category.push(rawResult2[i].categoryCategory);
                                }
                            }
                            query = iteracion;
                            sails.log("query ", query);
                            sails.log("keyword ", keyword);
                            sails.log("category ", category);
                            sails.log("category ", query[0]);
                            return res.view('RecommenderModule/wkx_keyword', {
                                creator: creatorFound,
                                query: query[0],
                                keyword: keyword,
                                category: category
                            });
                            // return res.ok()
                            ///////////////////////ejemplo
                            //                 var data = [];
                            // // ...
                            //                 data[0] = { "ID": "1", "Status": "Valid" };
                            //                 data[1] = { "ID": "2", "Status": "Invalid" };
                            // // ...
                            //                 var tempData = [];
                            //                 for ( var index=0; index<data.length; index++ ) {
                            //                   if ( data[index].Status == "Valid" ) {
                            //                     tempData.push( data );
                            //                   }
                            //                 }
                            //                 data = tempData;
                        }
                        else {
                            sails.log("rawResult", rawResult2);
                            sails.log("creatorFound", creatorFound);
                            var query_1 = rawResult2[0];
                            return res.view('RecommenderModule/wkx_creator', {
                                creator: creatorFound,
                                query: query_1
                            });
                        }
                    });
                }
                else {
                    //No encontro
                    return res.redirect('/');
                }
            });
        }
        else {
            return res.redirect('/');
        }
    }
};
