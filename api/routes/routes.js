module.exports = (app,db) => {
  app.route('/tasks')
    .get(function(req,res){
      if(!db) initDb(function(err){});
      if(db){
        db.collection('counts').find({}).toArray(function(err, result) {
          if (err) throw err;
          res.json(result);
        });
      }
      res.json({message: 'Hello tasks!'});
   });
   
   
   app.route('/routes').get(function(req,res){
    res.json({mes:'ok'});
   })
}