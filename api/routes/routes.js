module.exports = (app) => {
  app.route('/tasks')
    .get(function(req,res){
      res.json({message: 'Hello tasks!'});
    })
}
