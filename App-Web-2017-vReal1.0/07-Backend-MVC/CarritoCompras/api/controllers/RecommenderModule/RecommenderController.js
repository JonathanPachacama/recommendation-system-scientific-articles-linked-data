module.exports = {
    articlesToRecommend: function (req, res) {
        Articulo
            .find()
            .exec(function (err, articlesFound) {
            if (err)
                return res.negotiate(err);
            console.log("Article:", articlesFound);
            return res.view('RecommenderModule/recommender', {
                articles: articlesFound
            });
        });
    },
    bringParameters: function (req, res) {
        var parameters = req.allParams();
        if (parameters.id) {
            Articulo.findOne({
                id: parameters.id
            })
                .exec(function (err, articleFound) {
                if (err)
                    return res.serverError(err);
                if (articleFound) {
                    //Si encontro
                    var id = articleFound.id;
                    var title = articleFound.title;
                    var authors = articleFound.authores;
                    var abstract = articleFound.abstract;
                    var keywords = articleFound.keywords;
                    var category = articleFound.category;
                    sails.log.info("id:", id);
                    sails.log.info("Titulo:", title);
                    sails.log.info("Autor/es:", authors);
                    sails.log.info("Abstract:", abstract);
                    sails.log.info("Palabras clave:", keywords);
                    sails.log.info("Categoria:", category);
                    // sails.log.info("Articulo:",articleFound);
                    return res.view('RecommenderModule/byArticle', {
                        /*authors:articleFound,
                        abstract:articleFound,
                        keywords:articleFound,
                        category:articleFound*/
                        article: articleFound
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
