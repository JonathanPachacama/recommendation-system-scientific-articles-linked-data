declare var module;
declare var sails;
declare var LinkPublication;
declare var Articulo;

module.exports = {

  articlesToRecommend:(req,res)=>{

    Wkx_creator
      .find()
      .exec((err,creatorFound)=>{
        if(err) return res.negotiate(err);

        sails.log.info("Autoreeeees:",creatorFound);

        return res.view('RecommenderModule/recommender',{
          articles:creatorFound
        })
      });

  },


  bringCreatorWkx:(req,res)=>{
    let parameters = req.allParams();

    if(parameters.creatorId){
      Wkx_creator.findOne({
        creatorId:parameters.creatorId
      })
        .exec((err,creatorFound)=>{
          if(err) return res.serverError(err);
          if(creatorFound){
            let nombre=creatorFound.creatorFirstname;
            let apellido=creatorFound.creatorSurname;
            sails.log.info("nombre:",nombre);
            sails.log.info("apellido:",apellido);

            return res.view('RecommenderModule/wkx_creator',{
              creator:creatorFound
            })
          }else{
            //No encontro
            return res.redirect('/')
          }
        })
    }else{
      return res.redirect('/')
    }




  }

}
