module.exports = {
    test: function (req, res) {
        var parameters = req.allParams();
        var newLinks = {
            // links_Value: parameters.links_Value,
            // link_Type: parameters.link_Type,
            // o_Value: parameters.o_Value,
            // o_Type: parameters.o_Type,
            links_Value: "valor",
            link_Type: "tipo",
            o_Value: "valor2",
            o_Type: "tipo2",
        };
        return res.view('RecommenderModule/byLink', {
            link: newLinks
        });
    },
    test2: function (req, res) {
        return res.view('RecommenderModule/byAuthor', {});
    },
    test3: function (req, res) {
        return res.view('RecommenderModule/byTitleSameAuthor', {});
    },
    createLinkToAPublication: function (req, res) {
        var parameters = req.allParams();
        var newLinks = {
            links_Value: parameters.links_Value,
            link_Type: parameters.link_Type,
            o_Value: parameters.o_Value,
            o_Type: parameters.o_Type,
        };
        LinkPublication.create(newLinks)
            .exec(function (error, linkcreated) {
            if (error) {
                return res.serverError(error);
            }
            else {
                // return res.ok(linkCreado);
                //return res.created('Nuevo articulo creado.');
                return res.view('RecommenderModule/byLink', {
                    link: linkcreated
                });
            }
        });
    },
};
