# gulp-dom-processor [![Build Status](https://travis-ci.org/BenjaminEckardt/gulp-dom-processor.svg?branch=master)](https://travis-ci.org/BenjaminEckardt/gulp-dom-processor)
> Transform HTML-Files.

## Installation
```sh
npm install gulp-dom-processor --save-dev
```

## Example
```js
var gulp = require('gulp');
var domProcessor = require('./');
var configLoader = require('./test/config/config-loader');

gulp.task('default', function() {
  gulp.src('./input/*.html')
    .pipe(domProcessor(configLoader))
    .pipe(gulp.dest('./output'));
});
```

## License
MIT © [Benjamin Eckardt](https://github.com/BenjaminEckardt)
