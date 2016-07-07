'use strict';

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

	/***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

	var Users = __webpack_require__(2);
	var Foo = __webpack_require__(5);
	var Bar = __webpack_require__(7);

	//路由器需要一个根组件。
	var Menu = Vue.extend({});
	// 创建一个路由器实例
	var router = new VueRouter();
	// 定义路由规则
	router.map({
		'/foo': {
			component: Foo
		},
		'/bar': {
			component: Bar
		},
		'/users': {
			component: Users
		}
	});

	// 现在我们可以启动应用了！
	router.start(Menu, 'body');

	/***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__vue_script__ = __webpack_require__(3);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
		console.warn('[vue-loader] wwwroot\\components\\users.vue: named exports in *.vue files are ignored.');
	}
	__vue_template__ = __webpack_require__(4);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	if (__vue_template__) {
		(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
	}
	if (false) {
		(function () {
			module.hot.accept();
			var hotAPI = require("vue-hot-reload-api");
			hotAPI.install(require("vue"), false);
			if (!hotAPI.compatible) return;
			var id = "_v-ed078a12/users.vue";
			if (!module.hot.data) {
				hotAPI.createRecord(id, module.exports);
			} else {
				hotAPI.update(id, module.exports, __vue_template__);
			}
		})();
	}

	/***/
},
/* 3 */
/***/function (module, exports) {

	'use strict';

	module.exports = {
		data: function data() {
			return {
				msg: 'hello!'
			};
		}
	};

	/***/
},
/* 4 */
/***/function (module, exports) {

	module.exports = "\n<div id=\"box\">\n  {{msg}}\n</div>\n";

	/***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__vue_template__ = __webpack_require__(6);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	if (__vue_template__) {
		(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
	}
	if (false) {
		(function () {
			module.hot.accept();
			var hotAPI = require("vue-hot-reload-api");
			hotAPI.install(require("vue"), false);
			if (!hotAPI.compatible) return;
			var id = "_v-30915716/foo.vue";
			if (!module.hot.data) {
				hotAPI.createRecord(id, module.exports);
			} else {
				hotAPI.update(id, module.exports, __vue_template__);
			}
		})();
	}

	/***/
},
/* 6 */
/***/function (module, exports) {

	module.exports = "\n<p>This is foo!</p>\n";

	/***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__vue_template__ = __webpack_require__(8);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	if (__vue_template__) {
		(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
	}
	if (false) {
		(function () {
			module.hot.accept();
			var hotAPI = require("vue-hot-reload-api");
			hotAPI.install(require("vue"), false);
			if (!hotAPI.compatible) return;
			var id = "_v-0736557c/bar.vue";
			if (!module.hot.data) {
				hotAPI.createRecord(id, module.exports);
			} else {
				hotAPI.update(id, module.exports, __vue_template__);
			}
		})();
	}

	/***/
},
/* 8 */
/***/function (module, exports) {

	module.exports = "\n<p>This is bar!</p>\n";

	/***/
}
/******/]);