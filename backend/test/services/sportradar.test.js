const assert = require('assert');
const app = require('../../src/app');

describe('\'sportradar\' service', () => {
  it('registered the service', () => {
    const service = app.service('sportradar');

    assert.ok(service, 'Registered the service');
  });
});
