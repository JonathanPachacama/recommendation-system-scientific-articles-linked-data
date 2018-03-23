declare var module;
declare var sails;
declare var LinkPublication;
declare var Articulo;
declare var Wkx_creator;

module.exports = {

  test:(req,res)=>{


        return res.view('RecommenderModule/MainWikindx')

  },

  creatorToRecommend:(req,res)=>{

    Wkx_creator
      .find()
      .exec((err,creatorsFound)=>{
        if(err) return res.negotiate(err);
        console.log("Article:",creatorsFound)

        return res.view('RecommenderModule/MainWikindx',{
          creators:creatorsFound
        })
      });

  },


  bringParametersCreator:(req,res)=>{
    let parameters = req.allParams();
    if(parameters.creatorId){
      Wkx_creator.findOne({
        creatorId:parameters.creatorId
      })
        .exec((err,creatorFound)=>{
          if(err) return res.serverError(err);
          if(creatorFound){
            //Si encontro

            let Firstname=creatorFound.creatorFirstname;
            let Surname=creatorFound.creatorSurname;

            sails.log.info("Nombre:",Firstname);
            sails.log.info("Apellido:",Surname);
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
