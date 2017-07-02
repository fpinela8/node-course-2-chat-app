var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var res = generateMessage('name', 'body');

    expect(res.from).toBe('name');
    expect(res.text).toBe('body');
    expect(res.createdAt).toBeA('number');

  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {

    var url = "http://www.google.com/maps?q=15,19";
    var res = generateLocationMessage('name', 15, 19);

    expect(res.from).toBe('name');
    expect(res.url).toBe(url);
    expect(res.createdAt).toBeA('number');

  });
});
