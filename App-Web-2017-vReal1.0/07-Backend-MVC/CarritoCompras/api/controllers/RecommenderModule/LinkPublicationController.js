module.exports = {
    result: function (req, res) {
        return res.view('RecommenderModule/byLink', {});
    },
    test2: function (req, res) {
        return res.view('RecommenderModule/byAuthor', {});
    },
    test3: function (req, res) {
        return res.view('RecommenderModule/byTitleSameAuthor', {});
    },
    test4: function (req, res) {
        return res.view('RecommenderModule/bySameAreaOfinterest', {});
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
