module.exports = {
    articlesToRecommend: function (req, res) {
        Wkx_creator
            .find()
            .exec(function (err, creatorFound) {
            if (err)
                return res.negotiate(err);
            sails.log.info("Autoreeeees:", creatorFound);
            return res.view('RecommenderModule/recommender', {
                articles: creatorFound
            });
        });
    },
    bringCreatorWkx: function (req, res) {
        var parameters = req.allParams();
        if (parameters.creatorId) {
            Wkx_creator.findOne({
                creatorId: parameters.creatorId
            })
                .exec(function (err, creatorFound) {
                if (err)
                    return res.serverError(err);
                if (creatorFound) {
                    var nombre = creatorFound.creatorFirstname;
                    var apellido = creatorFound.creatorSurname;
                    sails.log.info("nombre:", nombre);
                    sails.log.info("apellido:", apellido);
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
