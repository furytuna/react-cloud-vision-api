'use strict';

var __ = require('underscore');
var Endpoint = require('./lib/clients/v1');
module.exports = {

  Request: require('./lib/models/Request'),

  Feature: require('./lib/models/Feature'),

  Image: require('./lib/models/Image'),

  init: function init(options) {
    if (options) {
      options = Object.assign({ version: 'v1' }, options);
    } else options = options ? options : {};

    var ep = new Endpoint(options);
    ep.google = this;
    this._client = ep;
  },
  annotate: function annotate(requests) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      if (!requests) {
        return reject();
      }
      if (!__.isArray(requests)) {
        requests = [requests];
      }
      _this._client.annotate(requests).then(resolve, reject);
    });
  }
};