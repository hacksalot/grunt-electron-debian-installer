'use strict';

var fs = require('fs');

var testExistence = function (test, expectations) {
  test.expect(expectations.length);

  expectations.forEach(function (expectation) {
    test.equal(fs.existsSync(expectation), true, expectation + ' should exist');
  });

  test.done();
};

exports.command = {
  'app with asar': function (test) {
    testExistence(test, [
      'test/fixtures/out/footest_i386.deb'
    ]);
  },
  'app without asar': function (test) {
    testExistence(test, [
      'test/fixtures/out/bartest_amd64.deb'
    ]);
  }
};
