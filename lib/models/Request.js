'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __ = require('underscore');

var Request = function () {
  function Request(options) {
    _classCallCheck(this, Request);

    options = options || {};
    this._image = options.image;
    this._features = options.features || [];
  }

  _createClass(Request, [{
    key: 'setImage',
    value: function setImage(image) {
      this._image = image;
      return this;
    }
  }, {
    key: 'addFeature',
    value: function addFeature(feature) {
      this._features.push(feature);
      return this;
    }
  }, {
    key: 'build',
    value: function build() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this._image.load().then(function (content) {
          resolve({
            image: { content: content },
            features: __.map(_this._features, function (f) {
              return f.build();
            })
          });
        }).catch(function (e) {
          reject(e);
        });
      });
    }
  }]);

  return Request;
}();

module.exports = Request;