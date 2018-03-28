declare var module;
declare var sails;
declare var LinkPublication;
declare var Articulo;

declare var Wkx_collection;
declare var Wkx_creator;
declare var Wkx_publisher;
declare var Wkx_resource_misc;

declare var PublisherId;
declare var CollectionId;

module.exports = {

  test:(req,res)=>{


    return res.view('RecommenderModule/MainWikindx')

  },

  recommenderWkx:(req,res)=>{

    //let CollectionId:number[] = [];


    Wkx_collection.find()
      .exec(
        (error,collectionFound)=>{
          if(error){
            return res.serverError(error);
          }else{

            for(let i = 0;i<collectionFound.length;i ++){
              CollectionId=collectionFound[i].collectionId
              console.log("CollectionId:", CollectionId)
            }

            Wkx_publisher.find()
              .exec(
                (error,publisherFound)=>{
                  if(error){
                    return res.serverError(error);
                  }else{
                    for(let i = 0;i<collectionFound.length;i ++){
                      PublisherId=publisherFound[i].publisherId
                      console.log("publisherFound:", PublisherId)
                    }

                    Wkx_resource_misc.find({
                      resourcemiscCollection:CollectionId,
                      resourcemiscPublisher: PublisherId,
                    })
                      .exec(
                        (error,resource_miscFound)=>{
                          if(error){
                            return res.serverError(error);
                          }

                          else{
                            return res.view('RecommenderModule/MainWikindx',{
                              resourcemisc:resource_miscFound

                            })


                            // return res.ok(resource_miscFound)
                          }
                        }

                      )


                  }

                }
              )
          }
        }
      )

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
