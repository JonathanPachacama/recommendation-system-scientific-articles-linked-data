module.exports = {
    recommenderWkx: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        Wkx_resource
            .find()
            .where({
            resourceTitle: {
                contains: parametros.busqueda
            }
        })
            .exec(function (err, resourceFound) {
            if (err)
                return res.negotiate(err);
            return res.view('RecommenderModule/MainWikindx', {
                resource: resourceFound
            });
        });
    },
    bringParametersCreator: function (req, res) {
        var Tokenizer = require('tokenize-text'); // npm => tokenize-text
        var tokenize = new Tokenizer();
        var tokensWords = new Array;
        var parameters = req.allParams();
        if (parameters.resourceId) {
            Wkx_resource.findOne({
                resourceId: parameters.resourceId
            })
                .exec(function (err, resourceFound) {
                if (err)
                    return res.serverError(err);
                if (resourceFound) {
                    //Si encontro
                    Wkx_resource.query('SELECT creatorId,creatorFirstname,creatorSurname,resourceId,resourceTitle,categoryId,categoryCategory,keywordId,keywordKeyword\n' + 'FROM wkx_resource,wkx_creator,wkx_resource_creator,wkx_category,wkx_resource_category,wkx_keyword,wkx_resource_keyword\n' + 'WHERE wkx_creator.creatorId=wkx_resource_creator.resourcecreatorId AND wkx_resource.resourceId=wkx_resource_creator.resourcecreatorResourceId\n' + 'AND(wkx_category.categoryId=wkx_resource_category.resourcecategoryCategoryId AND wkx_resource_category.resourcecategoryResourceId=wkx_resource.resourceId)\n' + 'AND (wkx_keyword.keywordId=wkx_resource_keyword.resourcekeywordKeywordId AND wkx_resource_keyword.resourcekeywordResourceId=wkx_resource.resourceId)\n' + 'AND (wkx_resource.resourceId=?)', [resourceFound.resourceId], function (err, rawResult) {
                        if (err) {
                            return res.serverError(err);
                        }
                        if (rawResult.length != 1 || rawResult.length == 1) {
                            // sails.log("tamaño",rawResult.length);
                            sails.log("valor:", rawResult[0].resourceTitle);
                            var repeatedWords = tokenize.flow(// Tokenize as sections
                            tokenize.sections(), // For each sentence
                            tokenize.flow(// Tokenize as words
                            tokenize.words(), //Filter words to extract only repeated ones
                            tokenize.filter(function (word, current, prev) {
                                return (/[a-zA-Z]/.test(word[0]));
                            })));
                            var tokens = repeatedWords(rawResult[0].resourceTitle);
                            sails.log("tokens", tokens.length);
                            for (var i = 0; i < tokens.length; i++) {
                                sails.log("tokens: ", tokens[i].value);
                                tokensWords.push(tokens[i].value);
                            }
                            tokensWords.sort();
                            function eliminateDuplicates(arr) {
                                var i, len = arr.length, out = [], obj = {};
                                for (i = 0; i < len; i++) {
                                    obj[arr[i]] = 0;
                                }
                                for (i in obj) {
                                    out.push(i);
                                }
                                return out;
                            }
                            var tokensTitle_1 = eliminateDuplicates(tokensWords);
                            sails.log("title: ", tokensTitle_1);
                            var query_1 = [];
                            var iteracion = [];
                            var keyword_1 = [];
                            var category_1 = [];
                            var firstname_1 = [];
                            var surname_1 = [];
                            for (var i = 0; i < rawResult.length; i++) {
                                if (rawResult[i].resourceId == resourceFound.resourceId) {
                                    iteracion.push(rawResult[i]);
                                    keyword_1.push(rawResult[i].keywordKeyword);
                                    category_1.push(rawResult[i].categoryCategory);
                                    firstname_1.push(rawResult[i].creatorFirstname);
                                    surname_1.push(rawResult[i].creatorSurname);
                                }
                            }
                            query_1 = iteracion;
                            // sails.log("query ",query);
                            // sails.log("keyword ",keyword);
                            // sails.log("category ",category);
                            // sails.log("firstname ",firstname);
                            // sails.log("surname ",surname);
                            var outKeyword_1 = [];
                            var outCategory_1 = [];
                            var outFirstname_1 = [];
                            var outSurname_1 = [];
                            function eliminateDuplicatesKeyword(arr) {
                                var i, len = arr.length, obj = {};
                                for (i = 0; i < len; i++) {
                                    obj[arr[i]] = 0;
                                }
                                for (i in obj) {
                                    outKeyword_1.push(i);
                                }
                                return outKeyword_1;
                            }
                            function eliminateDuplicatesCategory(arr) {
                                var i, len = arr.length, obj = {};
                                for (i = 0; i < len; i++) {
                                    obj[arr[i]] = 0;
                                }
                                for (i in obj) {
                                    outCategory_1.push(i);
                                }
                                return outCategory_1;
                            }
                            function eliminateDuplicatesFirstname(arr) {
                                var i, len = arr.length, obj = {};
                                for (i = 0; i < len; i++) {
                                    obj[arr[i]] = 0;
                                }
                                for (i in obj) {
                                    outFirstname_1.push(i);
                                }
                                return outFirstname_1;
                            }
                            function eliminateDuplicatesSurname(arr) {
                                var i, len = arr.length, obj = {};
                                for (i = 0; i < len; i++) {
                                    obj[arr[i]] = 0;
                                }
                                for (i in obj) {
                                    outSurname_1.push(i);
                                }
                                return outSurname_1;
                            }
                            eliminateDuplicatesKeyword(keyword_1);
                            eliminateDuplicatesCategory(category_1);
                            eliminateDuplicatesFirstname(firstname_1);
                            eliminateDuplicatesSurname(surname_1);
                            keyword_1 = outKeyword_1;
                            category_1 = outCategory_1;
                            firstname_1 = outFirstname_1;
                            surname_1 = outSurname_1;
                            // sails.log("keyword Sin duplicados ",keyword);
                            // sails.log("category Sin duplicados ",category);
                            // sails.log("firstname Sin duplicados ",firstname);
                            // sails.log("surname Sin duplicados ",surname);
                            Wkx_resource.query('SELECT "Title" as Type,resourceId AS Id,resourceTitle AS Value FROM wkx_resource WHERE resourceId = ? ' + 'UNION ' + 'SELECT "Abstract",resourcetextId,resourcetextAbstract FROM wkx_resource_text WHERE resourcetextId =?', [rawResult[0].resourceId, rawResult[0].resourceId], function (err, rawResult2) {
                                if (err) {
                                    return res.serverError(err);
                                }
                                // sails.log("valor2: ",rawResult2);
                                var abstract = rawResult2[1].Value;
                                if (rawResult2[0].id == rawResult2[1].id) {
                                    Wkx_resource.query('SELECT "Metadata" as Type, collectionId, publisherId, collectionTitle,publisherName,publisherLocation\n' + 'FROM wkx_collection,wkx_publisher,wkx_resource_misc\n' + 'WHERE wkx_collection.collectionId=wkx_resource_misc.resourcemiscCollection \n' + 'AND wkx_resource_misc.resourcemiscPublisher=wkx_publisher.publisherId\n' + 'AND (wkx_collection.collectionId = wkx_publisher.publisherId)\n' + 'AND wkx_collection.collectionId  = ?\n' + 'UNION \n' + 'SELECT "Title [idT|idT|title|type|type]", resourceId,resourceId,resourceTitle,resourceType,resourceType FROM wkx_resource\n' + 'WHERE wkx_resource.resourceId= ?', [rawResult[0].resourceId, rawResult[0].resourceId], function (err, rawResult3) {
                                        if (err) {
                                            return res.serverError(err);
                                        }
                                        // sails.log(rawResult3);
                                        if (rawResult3[0].collectionId == rawResult3[1].collectionId) {
                                            var publisher = rawResult3[0].publisherName;
                                            var locationPublisher = rawResult3[0].publisherLocation;
                                            var journal = rawResult3[0].collectionTitle;
                                            // sails.log(publisher);
                                            // sails.log(locationPublisher);
                                            // sails.log(journal);
                                            return res.view('RecommenderModule/recommenderWkx', {
                                                creator: resourceFound,
                                                query: query_1[0],
                                                firstname: firstname_1,
                                                surname: surname_1,
                                                keyword: keyword_1,
                                                category: category_1,
                                                abstract: abstract,
                                                journal: journal,
                                                publisher: publisher,
                                                locationPublisher: locationPublisher,
                                                tokensTitle: tokensTitle_1
                                            });
                                        }
                                        else {
                                            return res.redirect('/');
                                        }
                                    });
                                }
                                else {
                                    return res.redirect('/');
                                }
                            });
                        }
                        else {
                            return res.redirect('/');
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
