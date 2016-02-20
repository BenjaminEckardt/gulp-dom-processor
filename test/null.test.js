'use strict';
var assert = require('assert');
var File = require('vinyl');
var gulpDomProcessor = require('../');
var configLoader = require('./config/config-loader');

describe('dealing with null contents', function() {
  it('should pass null', function(done) {

    var fakeFile = new File({
      contents: null
    });

    var domProcessor = gulpDomProcessor(configLoader);

    domProcessor.write(fakeFile);

    domProcessor.once('data', function(file) {
      assert(file.isNull());
      assert.equal(file.contents, null);
      done();
    });
  });
});
