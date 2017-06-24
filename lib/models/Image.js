'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var //fs = require('react-native-fs'),

  __ = require('underscore');

var Image = function () {
  function Image(path) {
    _classCallCheck(this, Image);

    var options = __.isObject(path) ? path : {
      path: path
    };
    this._path = options.path;
    this._url = options.url;
    this._base64 = options.base64;
  }

  _createClass(Image, [{
    key: 'load',
    value: function load() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (_this._path) {
          resolve(fs.readFileSync(_this._path).toString('base64')); //TODO: Implement for react native if it is needed
        } else if (_this._url) {
          _this._loadRemote().then(resolve);
        } else if (_this._base64) {
          _this._base64 = _this._base64.substring(_this._base64.indexOf(',') + 1); // remove 'data:image/jpeg;base64,' if included
          resolve(_this._base64);
        } else {
          console.log('No path or url are specified in image');
          reject();
        }
      });
    }
  }, {
    key: '_loadRemote',
    value: function _loadRemote() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        request({
          url: _this2._url,
          encoding: null
        }, function (err, response, body) {
          if (!err && response.statusCode == 200) {
            resolve(new Buffer(body).toString('base64'));
          } else {
            console.log('Error while loading image. code: ' + response.statusCode, err
              // reject(err)
            ); resolve(''
              // reject(err)
            );
          }
        });
      });
    }
  }, {
    key: 'build',
    value: function build() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.load().then(function (cotent) {
          resolve({ content: content });
        });
      });
    }
  }]);

  return Image;
}();

module.exports = Image;