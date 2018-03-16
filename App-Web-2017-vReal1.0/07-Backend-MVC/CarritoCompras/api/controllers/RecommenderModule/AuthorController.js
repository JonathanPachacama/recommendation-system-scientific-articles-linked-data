module.exports = {
    test: function (req, res) {
        return res.view('RecommenderModule/MainWikindx');
    },
    creatorToRecommend: function (req, res) {
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
