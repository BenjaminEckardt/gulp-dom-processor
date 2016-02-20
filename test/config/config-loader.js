'use strict';
module.exports = {
  load: function () {
    return [{
      selector: 'div',
      replace: function () {
        return '<span></span>';
      }
    }];
  }
};
