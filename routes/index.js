const user_route = require('./user_route');

module.exports = (app, db)=>{
    user_route(app, db);
}