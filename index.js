'use strict';
var PLUGIN_NAME = 'gulp-dom-processor';

var Transform = require('readable-stream/transform');
var PluginError = require('gulp-util').PluginError;
var DomProcessor = require('dom-processor');

function gulpDomProcessor(configLoader) {
  var processor = new DomProcessor(configLoader);

  return new Transform({
    objectMode: true,
    transform: function(file, encoding, callback) {

      if (file.isStream()) {
        callback(new PluginError(PLUGIN_NAME, 'Streams are not supported.'));
      }

      if (file.isBuffer()) {
        var result = processor.process(file.contents.toString(encoding), file.path);
        file.contents = new Buffer(result, encoding);
      }

      this.push(file);
      callback();
    }
  });
}

module.exports = gulpDomProcessor;
