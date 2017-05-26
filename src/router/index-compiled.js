'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Hello = require('../components/Hello.vue');

var _Hello2 = _interopRequireDefault(_Hello);

var _second = require('../components/second.vue');

var _second2 = _interopRequireDefault(_second);

var _question = require('../components/question.vue');

var _question2 = _interopRequireDefault(_question);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  mode: 'history',
  routes: [{ path: '/hello', component: _Hello2.default }, { path: '/second', component: _second2.default }, { path: '/question', component: _question2.default }, { path: '/', redirect: '/hello' }]
});

//# sourceMappingURL=index-compiled.js.map