const assert = require('assert');
const app = require('../../src/app');

describe('\'fights\' service', () => {
  it('registered the service', () => {
    const service = app.service('fights');

    assert.ok(service, 'Registered the service');
  });
});
