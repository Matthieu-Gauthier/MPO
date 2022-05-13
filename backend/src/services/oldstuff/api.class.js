const { getNextFight } = require('./call/nextFight');

exports.Api = class Api {
  constructor (options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  async find (params) {
    throw Error('Unsupported');
  }

  async get (id) {
    await getNextFight(this.app);
  }

  async create (data, params) {
    throw Error('Unsupported');
  }

  async update (id, data, params) {
    throw Error('Unsupported');
  }

  async patch (id, data, params) {
    throw Error('Unsupported');
  }

  async remove (id, params) {
    throw Error('Unsupported');
  }
};
