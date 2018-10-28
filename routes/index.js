const user_route = require('./user_route');
const place_route = require('./place_route');

module.exports = (app, db)=>{
    user_route(app, db);
    place_route(app, db);
}