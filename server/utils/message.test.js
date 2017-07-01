var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var res = generateMessage('name', 'body');

    expect(res.from).toBe('name');
    expect(res.text).toBe('body');
    expect(res.createdAt).toBeA('number');

  });
});
