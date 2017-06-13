module.exports = (app) => {
  app.route('/tasks')
    .get(function(req,res){
      res.send('Hello tasks');
    })
}
