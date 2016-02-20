'use strict';
var assert = require('assert');
var File = require('vinyl');
var gulpDomProcessor = require('../');
var configLoader = require('./config/config-loader');

var invokedPath;
var load = configLoader.load;
configLoader.load = function(path) {
  invokedPath = path;
  return load(path);
};

describe('load function', function() {
  it('should be invoked with file path', function(done) {

    var fakeFile = new File({
      path: 'FAKE_PATH',
      contents: new Buffer([])
    });

    var processor = gulpDomProcessor(configLoader);

    processor.write(fakeFile);

    processor.once('data', function() {
      assert.equal('FAKE_PATH', invokedPath);
      done();
    });
  });
});
