const mongodb = require ('mongodb')

    const mongoClient = mongodb.MongoClient

    const connectionUrl = 'mongodb://127.0.0.1:27017'

    const dbname = "db_project"

    mongoClient.connect(connectionUrl , (error,res1) =>{
        if(error){
            return  console.log('error has occured')
        }
        console.log('All Perf')

        const db = res1.db(dbname)
        /////insert one
        
 

        // db.collection('users').insertOne({
        //     name : 'mariam',
        //     age :23
        // },(error , data) => {
        //     if(error){
        //         console.log('Unable to insert Data')
        //     }
        //     console.log(data.insertedId)
        // })
        
   

        // db.collection('users').insertOne({
        //     name : 'yosr',
        //     age : 26
        // },(error , data) => {
        //     if(error){
        //         console.log('Unable to insert Data')
        //     }
        //     console.log(data.insertedId)
        // })
        // //insert many
        // db.collection ('users').insertMany(
        //     [ {
        //          name: 'mohamed',
        //          age:27
        //      },
        //      {
        //          name: 'adel',
        //          age: 27
        //      },
        //      {
        //          name: 'zahra',
        //          age: 24
        //      },
        //      {
        //          name: 'tasneem',
        //          age: 21
        //      },
        //      {
        //          name: 'zakria',
        //          age:30
        //      },
        //      {
        //          name: 'esraa',
        //          age: 27
        //      },
        //      {
        //          name: 'shika',
        //          age: 26
        //      },
        //      {
        //          name: 'Ahmed',
        //          age: 33
        //      },
        //      {
        //          name: 'aya',
        //          age: 27
        //      }
        //     ,
        //     {
        //         name: 'Alaa',
        //         age: 27
        //     }
        // ] , (error,data)=>{
        //          if(error){
        //              console.log('Unable to insert data')
        //          }
        //          // console.log(data.insertedCount)
        //      } 
        //  )
         
         //  to get data that match filter
      
    //   db.collection('users').find({age:27}).toArray((error , users)=>{
    //     if (error) {
    //         return console.log('error has occured')
    //     }
    //     console.log(users)
    //   })
    //         // to limit number 
    //   db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
    //     if (error) {
    //         return console.log('error has occured')
    //     }
    //     console.log(users)
    //   })
    // $set  name    for the first 4 doc
       db.collection("users").updateMany({},{
        $set:{name : "Osama"},

       
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})
        db.collection("users").updateOne({_id:mongodb.ObjectId("657f287768476041ed24fbbe")},{
        $set:{name : "sohila" },
       
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})

          db.collection("users").updateOne({_id:mongodb.ObjectId("657f287768476041ed24fbbf")},{
        $set:{name : "Afnan" },
       
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})
            db.collection("users").updateOne({_id:mongodb.ObjectId("657f287768476041ed24fbc0")},{
        $set:{name : "ahmed" },
       
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})
   // $inc  age     for the first 4  => 27    => 4 
   db.collection("users").updateMany({age:27},{
    $inc : {age : 4}
  })
  .then((data1) =>{console.log(data1.modifiedCount)})
  .catch((error)=> console.log(error))
   // updateMany  inc  {}   10
      db.collection("users").updateMany({},{
        $inc : {age :10}
      })
      .then((data1) =>{console.log(data1.modifiedCount)})
      .catch((error)=> console.log(error))
    // //deleteMany  age : 41   => deletedCount
    //    db.collection("users").deleteMany({age:41})
    //   .then((data1) =>{console.log(data1.deletedCount)})
    //   .catch((error)=> console.log(error))
 

 
    })