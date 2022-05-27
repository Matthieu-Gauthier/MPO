const assert = require('assert');
const app = require('../../src/app');

describe('\'competitors\' service', () => {
  it('registered the service', () => {
    const service = app.service('competitors');

    assert.ok(service, 'Registered the service');
  });
});
