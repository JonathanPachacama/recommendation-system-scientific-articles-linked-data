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
    recommenderWkxAPI: function (req, res) {
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
            return res.json({
                resource: resourceFound
            });
        });
    },
    bringParametersCreator: function (req, res) {
        var Tokenizer = require('tokenize-text'); // npm =>npm install --save nltk-stopwords
        var stopwords = require('nltk-stopwords'); // npm => npm install --save nltk-stopwords
        var english = stopwords.load('english');
        var tokenize = new Tokenizer();
        var tokensWords = new Array;
        var tokens;
        var tokenizeWords;
        var tokensEliminateDuplicates;
        var tokensTitle;
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
                            //////////////////////////////// start information retrival ///////////////////////////////////////////////////
                            tokenizeWords = tokenize.flow(// Tokenize as sections
                            tokenize.sections(), // For each sentence
                            tokenize.flow(// Tokenize as words
                            tokenize.words(), //Filter words to extract only words without numbers
                            tokenize.filter(function (word, current, prev) {
                                return (/[a-zA-Z]/.test(word[0]));
                            })));
                            tokens = tokenizeWords(rawResult[0].resourceTitle); // tokens: stores the resulting tokens
                            for (var i = 0; i < tokens.length; i++) { //
                                // sails.log("tokens: ", tokens[i].value);
                                tokensWords.push(tokens[i].value.toLowerCase()); //tokensWords: stores the value of each tokens
                            }
                            tokensWords.sort(); //  sort array tokensWords
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
                            tokensEliminateDuplicates = eliminateDuplicates(tokensWords); // invoke function eliminateDuplicates()
                            tokensTitle = stopwords.remove(tokensEliminateDuplicates, english); // remove stop-words
                            sails.log("tokens", tokens.length);
                            sails.log("tokensEliminateDuplicates: ", tokensEliminateDuplicates);
                            sails.log("title-stop-words: ", tokensTitle);
                            //////////////////////////////// end information retrival ///////////////////////////////////////////////////
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
                                                tokensTitle: tokensTitle
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
    },
    bringParametersCreatorAPI: function (req, res) {
        var Tokenizer = require('tokenize-text'); // npm =>npm install --save nltk-stopwords
        var stopwords = require('nltk-stopwords'); // npm => npm install --save nltk-stopwords
        var english = stopwords.load('english');
        var tokenize = new Tokenizer();
        var tokensWords = new Array;
        var tokens;
        var tokenizeWords;
        var tokensEliminateDuplicates;
        var tokensTitle;
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
                            //////////////////////////////// start information retrival ///////////////////////////////////////////////////
                            tokenizeWords = tokenize.flow(// Tokenize as sections
                            tokenize.sections(), // For each sentence
                            tokenize.flow(// Tokenize as words
                            tokenize.words(), //Filter words to extract only words without numbers
                            tokenize.filter(function (word, current, prev) {
                                return (/[a-zA-Z]/.test(word[0]));
                            })));
                            tokens = tokenizeWords(rawResult[0].resourceTitle); // tokens: stores the resulting tokens
                            for (var i = 0; i < tokens.length; i++) { //
                                // sails.log("tokens: ", tokens[i].value);
                                tokensWords.push(tokens[i].value.toLowerCase()); //tokensWords: stores the value of each tokens
                            }
                            tokensWords.sort(); //  sort array tokensWords
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
                            tokensEliminateDuplicates = eliminateDuplicates(tokensWords); // invoke function eliminateDuplicates()
                            tokensTitle = stopwords.remove(tokensEliminateDuplicates, english); // remove stop-words
                            sails.log("tokens", tokens.length);
                            sails.log("tokensEliminateDuplicates: ", tokensEliminateDuplicates);
                            sails.log("title-stop-words: ", tokensTitle);
                            //////////////////////////////// end information retrival ///////////////////////////////////////////////////
                            var query_2 = [];
                            var iteracion = [];
                            var keyword_2 = [];
                            var category_2 = [];
                            var firstname_2 = [];
                            var surname_2 = [];
                            for (var i = 0; i < rawResult.length; i++) {
                                if (rawResult[i].resourceId == resourceFound.resourceId) {
                                    iteracion.push(rawResult[i]);
                                    keyword_2.push(rawResult[i].keywordKeyword);
                                    category_2.push(rawResult[i].categoryCategory);
                                    firstname_2.push(rawResult[i].creatorFirstname);
                                    surname_2.push(rawResult[i].creatorSurname);
                                }
                            }
                            query_2 = iteracion;
                            // sails.log("query ",query);
                            // sails.log("keyword ",keyword);
                            // sails.log("category ",category);
                            // sails.log("firstname ",firstname);
                            // sails.log("surname ",surname);
                            var outKeyword_2 = [];
                            var outCategory_2 = [];
                            var outFirstname_2 = [];
                            var outSurname_2 = [];
                            function eliminateDuplicatesKeyword(arr) {
                                var i, len = arr.length, obj = {};
                                for (i = 0; i < len; i++) {
                                    obj[arr[i]] = 0;
                                }
                                for (i in obj) {
                                    outKeyword_2.push(i);
                                }
                                return outKeyword_2;
                            }
                            function eliminateDuplicatesCategory(arr) {
                                var i, len = arr.length, obj = {};
                                for (i = 0; i < len; i++) {
                                    obj[arr[i]] = 0;
                                }
                                for (i in obj) {
                                    outCategory_2.push(i);
                                }
                                return outCategory_2;
                            }
                            function eliminateDuplicatesFirstname(arr) {
                                var i, len = arr.length, obj = {};
                                for (i = 0; i < len; i++) {
                                    obj[arr[i]] = 0;
                                }
                                for (i in obj) {
                                    outFirstname_2.push(i);
                                }
                                return outFirstname_2;
                            }
                            function eliminateDuplicatesSurname(arr) {
                                var i, len = arr.length, obj = {};
                                for (i = 0; i < len; i++) {
                                    obj[arr[i]] = 0;
                                }
                                for (i in obj) {
                                    outSurname_2.push(i);
                                }
                                return outSurname_2;
                            }
                            eliminateDuplicatesKeyword(keyword_2);
                            eliminateDuplicatesCategory(category_2);
                            eliminateDuplicatesFirstname(firstname_2);
                            eliminateDuplicatesSurname(surname_2);
                            keyword_2 = outKeyword_2;
                            category_2 = outCategory_2;
                            firstname_2 = outFirstname_2;
                            surname_2 = outSurname_2;
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
                                            return res.json({
                                                creator: resourceFound,
                                                query: query_2[0],
                                                firstname: firstname_2,
                                                surname: surname_2,
                                                keyword: keyword_2,
                                                category: category_2,
                                                abstract: abstract,
                                                journal: journal,
                                                publisher: publisher,
                                                locationPublisher: locationPublisher,
                                                tokensTitle: tokensTitle
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
