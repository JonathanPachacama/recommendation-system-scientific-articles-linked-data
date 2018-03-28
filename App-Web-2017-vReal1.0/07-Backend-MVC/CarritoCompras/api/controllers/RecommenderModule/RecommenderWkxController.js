module.exports = {
    test: function (req, res) {
        return res.view('RecommenderModule/MainWikindx');
    },
    recommenderWkx: function (req, res) {
        //let CollectionId:number[] = [];
        Wkx_collection.find()
            .exec(function (error, collectionFound) {
            if (error) {
                return res.serverError(error);
            }
            else {
                for (var i = 0; i < collectionFound.length; i++) {
                    CollectionId = collectionFound[i].collectionId;
                    console.log("CollectionId:", CollectionId);
                }
                Wkx_publisher.find()
                    .exec(function (error, publisherFound) {
                    if (error) {
                        return res.serverError(error);
                    }
                    else {
                        for (var i = 0; i < collectionFound.length; i++) {
                            PublisherId = publisherFound[i].publisherId;
                            console.log("publisherFound:", PublisherId);
                        }
                        Wkx_resource_misc.find({
                            resourcemiscCollection: CollectionId,
                            resourcemiscPublisher: PublisherId,
                        })
                            .exec(function (error, resource_miscFound) {
                            if (error) {
                                return res.serverError(error);
                            }
                            else {
                                return res.view('RecommenderModule/MainWikindx', {
                                    resourcemisc: resource_miscFound
                                });
                                // return res.ok(resource_miscFound)
                            }
                        });
                    }
                });
            }
        });
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
                    var Firstname = creatorFound.creatorFirstname;
                    var Surname = creatorFound.creatorSurname;
                    sails.log.info("Nombre:", Firstname);
                    sails.log.info("Apellido:", Surname);
                    return res.view('RecommenderModule/wkx_creator', {
                        creator: creatorFound
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
