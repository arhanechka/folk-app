module.exports = (app, database)=>{

    app.post('/place', (req, res) => {
        const place = { region: req.body.region, area: req.body.area, village: req.body.village };
        var data = database.db('folk');
       
        data.collection('village').insert(place, (err, result) => {
          if (err) { 
            res.send({ 'error': 'An error has occurred' }); 
          } else {
            res.send(result.ops[0]);
          }
        });
      });
    }