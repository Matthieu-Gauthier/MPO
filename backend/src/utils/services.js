const services = require('axios');

const callAxios = async (app, serviceMapper) => {
   const api = app.get('api');
   const result = await services({
      url: `${ api.baseUrl }${ serviceMapper.route }`,
      method: 'get',
      params: {
         api_key: api.api_key,
      },
   });
   return result.data?.[serviceMapper.result] || result.data;
};

const findAndUpdateOrCreate = (service, data) => {
   return service.get(data.id)
      .then(async (s) => {
         return service.update(s.id, data);
      }, async () => {
         return service.create(data);
      });
};

const findOrCreate = (service, data) => {
   return service.get(data.id)
      .then(async (s) => {
         return s;
      }, async () => {
         return service.create(data);
      });
};

const sleep = async (ms) => {
   await new Promise(resolve => setTimeout(resolve, ms));
};

module.exports = {
   callAxios,
   findOrCreate,
   findAndUpdateOrCreate,
   sleep
};
