const expect = require('chai').expect
const server = require('../src/index');

describe('test', () => {
  it('should return a string', () => {
    expect('ci with travis').to.equal('ci with travis');
  });
});
