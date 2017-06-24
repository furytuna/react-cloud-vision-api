'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __ = require('underscore');

var Feature = function () {
  function Feature(type, maxResults) {
    _classCallCheck(this, Feature);

    var options = __.isObject(type) ? type : {
      type: type,
      maxResults: maxResults
    };
    this._type = options.type;
    this._maxResults = options.maxResults || 10;
  }

  _createClass(Feature, [{
    key: 'build',
    value: function build() {
      return {
        type: this._type,
        maxResults: this._maxResults
      };
    }
  }]);

  return Feature;
}();

module.exports = Feature;