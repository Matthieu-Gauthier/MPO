const dateModule = require('./dates');
const axiosModule = require('./services');

module.exports ={
  ...dateModule,
  ...axiosModule,
}
