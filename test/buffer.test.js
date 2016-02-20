'use strict';
var assert = require('assert');
var File = require('vinyl');
var gulpDomProcessor = require('../');
var configLoader = require('./config/config-loader');

describe('buffer mode', function() {
  it('should replace <div> with <span>', function(done) {

    var fakeFile = new File({
      contents: new Buffer('<div></div>')
    });

    var processor = gulpDomProcessor(configLoader);

    processor.write(fakeFile);

    processor.once('data', function(file) {
      assert(file.isBuffer());
      assert.equal(file.contents.toString(), '<span></span>');
      done();
    });
  });
});
