'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __ = require('underscore'),
  createAPIRequest = require('../models/apirequest');

var API_ANNOTATE = 'https://vision.googleapis.com/v1/images:annotate';

var Client = function () {
  function Client(options) {
    _classCallCheck(this, Client);

    this._options = options || {};
  }

  /**
   * annotate
   *
   * @desc Call cloud vision API
   *
   * @param  {array} requests - Parameters for request
   */


  _createClass(Client, [{
    key: 'annotate',
    value: function annotate(requests) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this._buildRequests(requests).then(function (params) {

          var parameters = {
            options: {
              url: API_ANNOTATE,
              method: 'POST'
            },
            bodyJSON: true,
            data: {
              requests: params
            },
            params: {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            },
            requiredParams: [],
            pathParams: [],
            context: _this
          };
          createAPIRequest(parameters, function (err, response) {
            if (err) {
              reject(err);
            } else {
              resolve(response);
            }
          });
        });
      });
    }
  }, {
    key: '_buildRequests',
    value: function _buildRequests(requests) {
      return Promise.all(__.map(requests, function (req) {
        return req.build();
      }));
    }
  }]);

  return Client;
}();

module.exports = Client;