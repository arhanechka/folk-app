const config = require('./config');
const mongoClient = require("mongodb").MongoClient;

module.exports = function(app){
    mongoClient.connect(config.db.url, { useNewUrlParser: true }, (err, database) => {
        if (err) return console.log(err)
        if (database){
            console.log('Database connected!')
           
            require('./routes')(app, database);
        }
                   
      })
}