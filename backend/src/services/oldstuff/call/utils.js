const axios = require("axios");
const moment = require("moment");

const callApi = async (app, route, params) => {
  const api = app.get('api');
  const result = await axios({
    url: `${api.baseUrl}${route}`,
    method: 'get',
    params: {
      api_key: api.api_key
    },
  });
  return result.data
}

const nextNearestDate = (array, key, format) => {
  const now = moment();
  const result =  array.reduce((nearest, d) => {
    const momentDate = moment(d[key], format);
    const timeFromNow = Math.abs(momentDate - now);
    const nearestTimeFromNow = Math.abs(nearest - now);

    if (!nearestTimeFromNow || timeFromNow < nearestTimeFromNow) {
      nearest = momentDate;
    }
    return moment(nearest).isAfter(now) ? nearest : null;
  });
  return array.find(x => x[key] === moment(result).format(format));
}

module.exports = {
  callApi,
  nextNearestDate,
}
