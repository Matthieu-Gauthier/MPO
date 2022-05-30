const users = require('./users/users.service.js');
const events = require('./events/events.service.js');
const fights = require('./fights/fights.service.js');
const statistics = require('./statistics/statistics.service.js');
const competitors = require('./competitors/competitors.service.js');
const venues = require('./venues/venues.service.js');
const sportradar = require('./sportradar/sportradar.service.js');

module.exports = function (app) {
   app.configure(users);
   app.configure(events);
   app.configure(fights);
   app.configure(statistics);
   app.configure(competitors);
   app.configure(venues);
   app.configure(sportradar);
};
