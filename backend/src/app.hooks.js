// Application hooks that run for every service

module.exports = {
   before: {
      all: [],
      find: [],
      get: [],
      create: [],
      update: [],
      patch: [],
      remove: []
   },
   after: {
      all: [],
      find: [],
      get: [],
      create: [],
      update: [],
      patch: [],
      remove: []
   },
   error: {
      all: [async context => {
         if (context.error.code !== 404) {
            console.error({
               path: context.path,
               method: context.method,
               error: {
                  code: context.error.code,
                  message: context.error.message,
                  errors: context.error.errors,
                  data: context.error.data,
               },
            });
         }
         return context;
      }],
      find: [],
      get: [],
      create: [],
      update: [],
      patch: [],
      remove: []
   }
};
