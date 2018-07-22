const test = require('tape');
const find = require('../lib/find.js');
const resize = require('../lib/resize.js');

test('resize test', function (t) {
  t.plan(2);

  const fileArr = find(['test/fixture/find']);
  const result = resize(fileArr);
  t.equal(result[0].width, 800);
  t.equal(result[1].width, 320);
});
