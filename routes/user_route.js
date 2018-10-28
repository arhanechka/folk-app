


module.exports = (app, database)=>{

app.post('/user', (req, res) => {
    const user = { login: req.body.login, password: req.body.password, name: req.body.name };
    var data = database.db('folk');
   
    data.collection('user').insert(user, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
}