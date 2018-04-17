declare var module;
declare var sails;
declare var LinkPublication;
declare var Articulo;


module.exports = {


  result1:(req, res) =>{
    return res.view('RecommenderModule/byLink', {

    })
  },
  result2:(req, res) =>{

    return res.view('RecommenderModule/byAuthor', {

    })
  },

  result3:(req, res) =>{

    return res.view('RecommenderModule/byTitleSameAuthor', {

    })
  },

  result4:(req, res) =>{

    return res.view('RecommenderModule/bySameAreaOfinterest', {

    })
  },

  ranking:(req, res) =>{

    return res.view('RecommenderModule/ranking', {

    })
  },


  createLinkToAPublication: (req, res) => {

    let parameters = req.allParams();
    let newLinks = {
      links_Value: parameters.links_Value,
      link_Type: parameters.link_Type,
      o_Value: parameters.o_Value,
      o_Type: parameters.o_Type,
    };
    LinkPublication.create(newLinks)
      .exec(
        (error,linkcreated)=>{
          if(error){
            return res.serverError(error);
          }else{
            // return res.ok(linkCreado);
            //return res.created('Nuevo articulo creado.');
            return res.view('RecommenderModule/byLink', {
              link:linkcreated
            })
          }
        }
      )

  },

}
