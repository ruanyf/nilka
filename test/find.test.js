const test = require('tape');
const find = require('../lib/find.js');

test('find test', function (t) {
  t.plan(2);
  t.equal(find(['test/fixture/find'])[0].substr(-6), 'u1.jpg');
  t.equal(find(['test/fixture/find'])[1].substr(-6), 'x1.png');
});
