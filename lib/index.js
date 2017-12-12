(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ct-adc-date"] = factory();
	else
		root["ct-adc-date"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author rubyisapm
 */
!(module.exports = {
    /**
     * 获取字符串的字节长度
     * @param str
     * @returns {number}
     */
    getByteLen: function (str) {
        var str1=str.replace(/([^\x00-\xff])/ig,'$1 ');
        return str1.length;
    },
    /**
     * 按字节截取内容
     * @param source 原字符串
     * @param length 要截取的长度
     * @param halfCut 是否要舍弃半个中文
     * @returns {string}
     */
    subByte: function (source,length,halfCut) {
        var sliced=(source + '').substr(0, length).replace(/([^\x00-\xff])/g, '$1 ').substr(0, length).replace(/([^\x00-\xff]) /g, '$1');
        if(halfCut && this.getByteLen(sliced)>length){
            sliced=sliced.substr(0,sliced.length-1);
        }
        return sliced;
    },
    /**
     * 将字符串的首字母大写
     * @param {string} str 原字符串
     * @returns {string} 转换后的字符串
     */
    upperCaseFirst: function (str) {
        str = str + '';
        return str.replace(/^[a-z]/, function (firstLetter) {
            return firstLetter.toUpperCase();
        })
    },
    /**
     * 将字符串的首字母小写
     * @param {string} str 原字符串
     * @returns {string} 转换后的字符串
     */
    lowerCaseFirst: function (str) {
        str = str + '';
        return str.replace(/^[A-Z]/, function (firstLetter) {
            return firstLetter.toLowerCase();
        })
    },
    /**
     * 判断一个值是不是window对象
     * @param obj
     * @returns {boolean}
     */
    isWindow: function (obj) {
        return obj != null && obj === obj.window;
    },
    /**
     * 判断一个值是不是数组
     * @param {*} val 要判断的值
     * @returns {boolean} 是否为数组
     */
    isArray: function (val) {
        return Array.isArray(val);
    },
    /**
     * 判断一个值是不是对象
     * @param {*} val 要判断的值
     * @returns {boolean} 是否为数组
     */
    isObject: function (val) {
        return typeof val === 'object' && !this.isArray(val);
    },
    /**
     * 判断一个值是不是纯文本对象
     * 即其属性不是对象/dom节点/window
     * @param obj
     * @returns {boolean}
     */
    isPlainObject: function (obj) {
        if (!this.isObject(obj) || obj.nodeType || this.isWindow(obj)) {
            return false;
        }
        if (obj.constructor && !obj.constructor.prototype.hasOwnProperty('isPrototypeOf')) {
            return false;
        }
        return true;
    },
    /**
     * 判断一个值是不是JSON
     * @param val
     * @returns {boolean}
     */
    isJSON: function (val) {
        try {
            var result = JSON.parse(val);
            return typeof result === 'object';
        } catch (e) {
            return false;
        }
    },
    /**
     * 判断一个值是不是函数
     * @param val
     * @returns {boolean}
     */
    isFunction: function (val) {
        return typeof val === 'function';
    },
    /**
     * 判断一个值是不是正则表达式
     * @param obj
     * @returns {boolean}
     */
    isRegExp: function (obj) {
        return Object.prototype.toString.call(obj) === "[object RegExp]";
    },

    extend: function () {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;

            // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !this.isFunction(target)) {
            target = {};
        }

        // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {

            // Only deal with non-null/undefined values
            if (( options = arguments[i] ) != null) {

                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    // Prevent never-ending loop
                    if (target === copy) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && ( this.isPlainObject(copy) ||
                        ( copyIsArray = this.isArray(copy) ) )) {

                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && this.isArray(src) ? src : [];

                        } else {
                            clone = src && this.isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[name] = this.extend(deep, clone, copy);

                        // Don't bring in undefined values
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        // Return the modified object
        return target;
    },

    /**
     * 检测对象是否为空对象
     * @param {?Object} obj 要检测的对象，null会被检测为空对象
     * @returns {boolean}
     */
    isEmptyObject: function (obj) {
        for (var i in obj) {
            return false;
        }
        return true;
    },

    /**
     * 获取一个对象中具体key[组]的值，原样输出，如果为引用类型则保持引用
     * @param {Object|Array} obj 对象
     * @param {String} key key[组]
     * @returns {*} key[组]对应的值
     */
    getObjValByKey: function (obj, key) {
        key = key.split('.');
        var result = obj;
        key.map(function (item) {
            result = result[item];
        });
        return result;
    },
    /**
     * 设置一个对象中具体key[组]的值，可以为具体的值或者处理方法
     * @param {Object} obj 对象
     * @param {String} key key[组]
     * @param {*} valOrFn 设置的值或者处理方法(方法接受两个参数:key所在的对象，最后的key)
     * @returns {*}
     */
    setObjValByKey:function(obj,key,valOrFn){
        var that=this;
        key = key.split('.');
        var result={},
            targetClone = JSON.parse(JSON.stringify(obj)),
            pointer=[targetClone];
        //targetClone用于逐渐定位至目标key
        if(typeof that.setObjValByKey.$rules==='undefined'){
            //内置规则
            that.setObjValByKey.$rules= {
                '$null2str':function(obj,key){
                    if(obj[key]===null){
                        obj[key]='';
                    }
                },// null -> ''
                '$null2zero':function(obj,key){
                    if(obj[key]===null){
                        obj[key]=0;
                    }
                },// null -> 0
                '$null2arr':function(obj,key){
                    if(obj[key]===null){
                        obj[key]=[];
                    }
                },// null -> []
                '$null2obj':function(obj,key){
                    if(obj[key]===null){
                        obj[key]={};
                    }
                },// null -> {}
                '$empty2zero-strict':function(obj,key){
                    if(obj[key]===''){
                        obj[key]=0;
                    }
                },// '' -> 0
                '$empty2zero-relaxed':function(obj,key){
                    if(/^\s*$/.test(obj[key])){
                        obj[key]=0;
                    }
                },// '  ' || '' -> 0
                '$trim':function(obj,key){
                    if(typeof obj[key]==='string'){
                        obj[key]=obj[key].replace(/(^\s*|\s*$)/g, '');
                    }
                }// 去掉前后空格
            };
        }

        key.map(function (key,index,arr) {
            if(index===arr.length-1 && typeof pointer[pointer.length-1]!=='undefined'){
                if(!that.isObject(pointer[pointer.length-1])){
                    console.log('warning from ct-ct-utility:setObjValBykey中key所属的不是一个对象(你可能正在给非对象添加属性!)');
                }
                if(typeof valOrFn==='function'){
                    valOrFn(pointer[pointer.length-1],key);
                }else if(typeof valOrFn==='string' && valOrFn.indexOf('$')===0 && typeof that.setObjValByKey.$rules[valOrFn] !=='undefined'){
                    //当匹配到内置规则时，使用内置规则对目标值做转换
                    that.setObjValByKey.$rules[valOrFn](pointer[pointer.length-1],key);
                }else{
                    pointer[pointer.length-1][key]=valOrFn;
                }
            }else{
                if(typeof pointer[pointer.length-1][key]!=='undefined'){
                    pointer.push(pointer[pointer.length-1][key]);
                }
            }
        });
        //在原对象中更新targetClone对目标key的变化
        this.extend(true,result,obj,targetClone);
        return result;
    },

    /**
     * 判断浏览器是否支持storage
     * @param {string} type 'localStorage'/'sessionStorage'
     * @returns {boolean}
     */
    isStorageAvailable: function (type) {
        try {
            var x = '__storage_test__',
                storage = window[type];
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return false;
        }
    }
})
;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(2)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(57),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/rubyisapm/teamshare/adc-packages/date/src/component/date.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] date.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cc787024", Component.options)
  } else {
    hotAPI.reload("data-v-cc787024", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.2' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(8);
var defined = __webpack_require__(7);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by wx-wangxiang on 17/01/03.
 */
!(module.exports = {
	//将字符串转化为数字
	toInt: function(str){
	    return parseInt(str, 10) || 0;
	},
	/**
	 * 补零操作
	 * @param  {int} num    需要进行补零操作的参数
	 * @param  {int} digits 想要拓展的位数
	 * @return {string}     补零操作后的数字
	 */
	zeroFill: function(num, digits) {
		var num = '' + num; //将数字转为字符串的简便方法，同样的如果将数字字符串转为数字可以在其前面加上"+"号
		while(num.length < digits) {
			num = '0' + num;
		}
		return num;
	},
    split: function(num, len, sep) {
	    len = len || 3; // 默认3位分割
	    sep = sep || ','; // 默认分隔符为 ','

        // \B   匹配非单词边界（单词字符包括：a-z、A-Z、0-9，以及下划线）
        // ?=n  匹配任何其后紧接指定字符串 n 的字符串
        // (?:x)    匹配 x 不会捕获匹配项。这被称为非捕获括号（non-capturing parentheses）。匹配项不能够从结果数组的元素 [1], ..., [n] 或已被定义的 RegExp 对象的属性 $1, ..., $9 再次访问到。
        // x(?!y)   只有当 x 后面不是紧跟着 y 时，才匹配 x。例如，/\d+(?!\.)/ 只有当一个数字后面没有紧跟着一个小数点时，才会匹配该数字。/\d+(?!\.)/.exec("3.141") 匹配 141 而不是 3.141。
        // 嗯，合起来就懵逼了吧= =
        var reg = new RegExp('\\B(?=(?:\\d{' + len + '})+(?!\\d))', 'g');

        // 把数字以小数点分割：parts[0] 整数部分，parts[1] 小数部分
        var parts = (num + '').split('.');

        // 如果整数部分大于需要分割的位数
        if (parts[0].length > len) {
            parts[0] = parts[0].replace(reg, sep);
        }

        return parts.join('.');
    }
})

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(56),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/rubyisapm/teamshare/adc-packages/date/src/component/dates.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dates.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bb3e5216", Component.options)
  } else {
    hotAPI.reload("data-v-bb3e5216", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_component_date_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_component_date_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_component_date_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_component_dates_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_component_dates_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_component_dates_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "DateInput", function() { return __WEBPACK_IMPORTED_MODULE_0__src_component_date_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "DatesInput", function() { return __WEBPACK_IMPORTED_MODULE_1__src_component_dates_vue___default.a; });




/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ct_utility__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ct_utility___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ct_utility__);




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'date',
    props: {
        initialDate: {
            type: [String, Number],
            default: ''
        },
        ops: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },
    data: function data() {
        return {
            date: ''
        };
    },

    computed: {
        mixedOps: function mixedOps() {
            var defaultOps = {
                type: 'date',
                dateFormat: 'yyyy-MM-dd',
                timeFormat: 'HH:mm:ss',
                timeStart: '00:00:00',
                timeBtn: true,
                clearBtn: true,
                monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                shortMonthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                shortMonthNames2: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                shortDayNames: ["日", "一", "二", "三", "四", "五", "六"],
                errorOutOfRange: "选择的日期不符合规则",
                selectableDays: [0, 1, 2, 3, 4, 5, 6],
                nonSelectable: [],
                recNonSelectable: [],
                startOfWeek: 1,
                showWeek: false,
                selectWeek: false,
                weekLabel: "周",
                dateMin: "",
                dateMax: ""

            };
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(defaultOps, this.ops);
        }
    },
    methods: {
        getDate: function getDate(readable) {
            if (readable) {
                return this.date;
            } else {
                return this.date === '' ? 0 : +new Date(this.date.replace(/[^\d\:\s]/g, '\/'));
            }
        },
        initDate: function initDate() {
            if (this.initialDate == parseInt(this.initialDate) && this.initialDate !== 0) {
                if (this.mixedOps.type === 'date') {
                    this.date = __WEBPACK_IMPORTED_MODULE_1_ct_utility___default.a.dateFilter(this.initialDate, this.mixedOps.dateFormat);
                } else {
                    this.date = __WEBPACK_IMPORTED_MODULE_1_ct_utility___default.a.dateFilter(this.initialDate, this.mixedOps.dateFormat + ' ' + this.mixedOps.timeFormat);
                }
            } else if (this.initialDate != '' && this.initialDate !== 0) {
                this.date = this.initialDate;
            } else {
                this.date = '';
            }
            this.$refs.date.value = this.date;
        }
    },
    mounted: function mounted() {
        var that = this;
        that.initDate();
        var ops = {
            date_format: this.mixedOps.dateFormat,
            timeShow: this.mixedOps.type === 'date' ? 0 : 1,
            time_start: this.mixedOps.timeStart,
            timeBtn: this.mixedOps.timeBtn ? 1 : 0,
            clearBtn: this.mixedOps.clearBtn ? 1 : 0,
            month_names: this.mixedOps.monthNames,
            short_month_names: this.mixedOps.shortMonthNames,
            short_month_names2: this.mixedOps.shortMonthNames2,
            short_day_names: this.mixedOps.shortDayNames,
            error_out_of_range: this.mixedOps.errorOutOfRange,
            selectable_days: this.mixedOps.selectableDays,
            non_selectable: this.mixedOps.nonSelectable,
            rec_non_selectable: this.mixedOps.recNonSelectable,
            start_of_week: this.mixedOps.startOfWeek,
            show_week: this.mixedOps.showWeek ? 1 : 0,
            select_week: this.mixedOps.selectWeek ? 1 : 0,
            week_label: this.mixedOps.weekLabel,
            date_min: this.mixedOps.dateMin,
            date_max: this.mixedOps.dateMax,
            change: function change() {
                var date = that.$refs.date.value;
                that.date = date;
                that.$emit('change', that.date);
            }
        };
        $(this.$refs.date).jdPicker(ops);
        if (this.date != '') {
            this.$refs.date.value = this.date;
        }
    },

    watch: {
        initialDate: function initialDate() {
            this.initDate();
        }
    }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__date__);



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'dates',
    components: {
        date: __WEBPACK_IMPORTED_MODULE_0__date___default.a
    },
    props: {
        beginPlaceholder: {
            type: String,
            default: '开始时间'
        },
        endPlaceholder: {
            type: String,
            default: '结束时间'
        },
        initialBeginDate: {
            type: [Number, String],
            default: ''
        },
        initialEndDate: {
            type: [Number, String],
            default: ''
        },
        beginOps: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        endOps: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        related: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            beginDate: '',
            endDate: ''
        };
    },
    created: function created() {
        this.initDates();
    },

    methods: {
        initDates: function initDates() {
            this.beginDate = this.initialBeginDate === 0 ? '' : this.initialBeginDate;
            this.endDate = this.initialEndDate === 0 ? '' : this.initialEndDate;
        },
        getDates: function getDates(readable, endTransfered) {
            var begin = this.$refs.beginDate.getDate(readable),
                end = this.$refs.endDate.getDate(readable);

            if (!readable && endTransfered && (this.beginOps.type === 'date' || typeof this.beginOps.type === 'undefined') && (this.endOps.type === 'date' || typeof this.endOps.type === 'undefined') && end !== 0) {
                end += 86400000 - 1;
            }

            if (!readable && endTransfered && this.beginOps.type === 'datetime' && end !== 0) {
                end += 999;
            }
            return {
                begin: begin,
                end: end
            };
        },
        changeBeginDate: function changeBeginDate(date) {
            this.beginDate = date;
            var endDate = this.$refs.endDate.getDate(true);

            if (date !== '' && this.related) {
                this.interveneDate(date, endDate, true);
            }
            this.$nextTick(function () {
                this.$emit('change', this.getDates(true));
            });
        },
        changeEndDate: function changeEndDate(date) {
            this.endDate = date;
            var beginDate = this.$refs.beginDate.getDate(true);

            if (date !== '' && this.related) {
                this.interveneDate(beginDate, date, false);
            }
            this.$nextTick(function () {
                this.$emit('change', this.getDates(true));
            });
        },
        interveneDate: function interveneDate(beginDate, endDate, beginRefer) {
            var beginTime;
            if (beginDate === '') {
                beginTime = 0;
            } else {
                beginTime = +new Date(beginDate.replace(/[^\d\:\s]/g, '\/'));
            }
            var endTime;
            if (endDate === '') {
                endTime = 0;
            } else {
                endTime = +new Date(endDate.replace(/[^\d\:\s]/g, '\/'));
            }
            var isSameDay = endTime != 0 && beginTime != 0 && endDate.replace(/^(\d{4})\D(\d{2})\D(\d{2}).*$/, '$1$2$3') === beginDate.replace(/^(\d{4})\D(\d{2})\D(\d{2}).*$/, '$1$2$3');
            if (beginRefer && (endDate === '' || beginTime > endTime)) {
                if (this.beginOps.type === 'datetime' && this.endOps.type === 'datetime' && (endDate === '' || !isSameDay)) {
                    this.endDate = beginDate.replace(/\d{2}:\d{2}:\d{2}/, this.endOps.timeStart || ' 00:00:00');
                } else {
                    this.endDate = beginDate;
                }
            }
            if (!beginRefer && (beginDate === '' || beginTime > endTime)) {
                if (this.beginOps.type === 'datetime' && this.endOps.type === 'datetime' && (beginDate === '' || !isSameDay)) {
                    this.beginDate = endDate.replace(/\d{2}:\d{2}:\d{2}/, this.beginOps.timeStart || ' 00:00:00');
                } else {
                    this.beginDate = endDate;
                }
            }
        }
    },
    watch: {
        initialBeginDate: function initialBeginDate(newVal) {
            this.beginDate = newVal === 0 ? '' : newVal;
        },
        initialEndDate: function initialEndDate(newVal) {
            this.endDate = newVal === 0 ? '' : newVal;
        }
    }
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(18), __esModule: true };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
module.exports = __webpack_require__(6).Object.assign;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10);
var toLength = __webpack_require__(40);
var toAbsoluteIndex = __webpack_require__(39);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(19);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(6);
var ctx = __webpack_require__(23);
var hide = __webpack_require__(28);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(31);
var createDesc = __webpack_require__(36);
module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(2)(function () {
  return Object.defineProperty(__webpack_require__(24)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(34);
var gOPS = __webpack_require__(32);
var pIE = __webpack_require__(35);
var toObject = __webpack_require__(41);
var IObject = __webpack_require__(8);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(2)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(29);
var toPrimitive = __webpack_require__(42);
var dP = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(27);
var toIObject = __webpack_require__(10);
var arrayIndexOf = __webpack_require__(21)(false);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(38)('keys');
var uid = __webpack_require__(43);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(9);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(9);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(7);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(26);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(30) });


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @author rubyisapm
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    var base = __webpack_require__(0),
        objTransfer = __webpack_require__(53),
        cookie = __webpack_require__(48),
        localStorage = __webpack_require__(52),
        sessionStorage = __webpack_require__(55),
        URIParser = __webpack_require__(46),
        numberFormat = __webpack_require__(11),
        dateFilter = __webpack_require__(50),
        areaDataFormat = __webpack_require__(47),
        INFO = __webpack_require__(51),
        scrollbar = __webpack_require__(54),
        coordinator=__webpack_require__(49);

    return {
        base: base,
        objTransfer: objTransfer,
        cookie: cookie,
        localStorage: localStorage,
        sessionStorage: sessionStorage,
        URIParser: URIParser,
        numberFormat: numberFormat,
        dateFilter: dateFilter,
        areaDataFormat:areaDataFormat,
        INFO: INFO,
        scrollbar: scrollbar,
        coordinator: coordinator
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @author rubyisapm
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){
    var base=__webpack_require__(0);
    /**
     * 将查询字符串解析为查询参数数组
     * @param {string} search
     */
    function searchToParamGroup(search){
        var paramGroup={};
        if(search!==''){
            search.replace(/(?:\?|&|\b)(?:([^=?&]+)=([^=&]*))/g,function(_,$1,$2){
                paramGroup[$1]=$2;
            });
        }
        return paramGroup;
    }

    /**
     * URL解析并返回对应的参数
     * @param {string} uri uri
     * @returns {{protocol: *, hostname: *, port: *, pathname: *, search: *, hash: *, host: *}}
     */
    function uriParser(uri){
        var parser = document.createElement('a');
        parser.href = uri;
        return {
            protocol:parser.protocol,
            hostname:parser.hostname,
            port:parser.port,
            pathname:parser.pathname,
            search:parser.search,
            hash:parser.hash,
            host:parser.host
        };
    }

    /**
     * 获取url中指定参数的值
     * @param {string} uri 要解析的url
     * @param {string} param 要获取的查询参数的key值
     * @returns {undefined | string}
     */
    function getParam(uri,param){
        var paramGroup=searchToParamGroup(uriParser(uri).search);
        if(!base.isEmptyObject(paramGroup)){
            return paramGroup[param];
        }
    }

    /**
     * 获取url中的参数集合
     * @param {string} uri 要解析的url
     * @returns {object}
     */
    function getParamGroup(uri){
        return searchToParamGroup(uriParser(uri).search);
    }


    return{
        uriParser:uriParser,
        getParamGroup:getParamGroup,
        getParam:getParam,
        searchToParamGroup:searchToParamGroup
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author rubyisapm
 */
/**
 * 该地区常量AREA为内部地区源数据，请直接从script引入该全局变量
 */
!(module.exports = {
    /**
     * 检测当前的地区类似
     * @param nameOrId 地区ID[组]或者名称[组]
     * @returns {String} 'province' | 'city' | 'region' | 'other'
     */
    areaType: function (nameOrId) {
        var isId = /^\d+$/.test(nameOrId);
        if (isId) {
            if (nameOrId.length === 2) {
                return 'province';
            } else if (nameOrId.length === 4) {
                return 'city';
            } else if (nameOrId.length === 6) {
                return 'region';
            }
        } else {
            var areaArr = nameOrId.split(/[^\u4e00-\u9fa5]+/);
            if (areaArr.length === 1) {
                return 'province';
            } else if (areaArr.length === 2) {
                return 'city';
            } else if (areaArr.length === 3) {
                return 'region';
            }
        }
        return 'other';
    },
    /**
     * 根据地区名称组获取对应的id组 如'浙江-杭州'转换为0601
     * @param {String} name 地区名称如'浙江'(或名称组如'浙江-杭州')
     * @returns {String}
     */
    getAreaIdByName: function (name) {
        name = name.split(/[^\u4e00-\u9fa5]+/);
        var provinceName = name[0],
            cityName = name.length > 1 ? name[1] : '',
            regionName = name.length > 2 ? name[2] : '',
            provinceId = AREA.province.filter(function (item) {
                return item.Name === provinceName;
            })[0].ID,
            cityId = cityName != '' ? AREA.city[provinceName].filter(function (item) {
                return item.Name === cityName;
            })[0].ID : '',
            regionId = regionName != '' ? AREA.region[cityName].filter(function (item) {
                return item.Name === regionName;
            })[0].ID : '';

        return [provinceId, cityId, regionId][name.length - 1];
    },
    /**
     * 根据Id组获取地区组名称 如0601转换为'浙江-杭州'
     * @param {String} id 地区ID如'06'（或ID组如'0601'）
     * @param {String} [sep='-'] 分隔符
     * @returns {String}
     */
    getAreaNameById: function (id, sep) {
        sep = sep || '-';
        var provinceId = id.substr(0, 2),
            cityId = id.length > 2 ? id.substr(0, 4) : '',
            regionId = id.length > 4 ? id.substr(0, 6) : '',
            provinceName = provinceId !== '' ? AREA.province.filter(function(item) {
                return item.ID === provinceId;
            })[0].Name : '',
            cityName = cityId !== '' ? AREA.city[provinceName].filter(function(item) {
                return item.ID === cityId;
            })[0].Name : '',
            regionName = regionId !== '' ? AREA.region[cityName].filter(function(item) {
                return item.ID === regionId;
            })[0].Name : '';

        if (id.length === 2) {
            return provinceName;
        } else if (id.length === 4) {
            return provinceName + sep + cityName;
        } else if (id.length == 6) {
            return provinceName + sep + cityName + sep + regionName;
        }
    },
    /**
     * 获取具体province下的city
     * @param {String} provinceName province名称
     * @return {Array} province名称下的所有city组成的数组，其中每项是一个对象，包含单一city的ID和Name
     */
    getCitiesOfProvinceName: function (provinceName) {
        var cities = AREA.city[provinceName],
            citiesData = [];
        if (typeof cities !== 'undefined') {
            for (var c in cities) {
                if (cities.hasOwnProperty(c)) {
                    citiesData.push(cities[c]);
                }
            }
        }
        return citiesData;
    },
    /**
     * 获取具体city下的region
     * @param {String} cityName city名称
     * @return {Array} city名称下的所有region组成的数组，其中每项是一个对象，包含单一region的ID和Name
     */
    getRegionsOfCityName: function (cityName) {
        var regions = AREA.region[cityName],
            regionsData = [];
        if (typeof regions !== 'undefined') {
            for (var r in regions) {
                if (regions.hasOwnProperty(r)) {
                    regionsData.push(regions[r]);
                }
            }
        }
        return regionsData;
    },
    /**
     * 将扁平的数据结构变成树状结构
     * @param {String} [childrenKey='children'] 表示层级的key名称
     * @returns {Array}
     */
    areaTransfer: function (childrenKey) {
        childrenKey = childrenKey || 'children';
        var provincesData = AREA.province,
            that = this;

        provincesData.map(function (province) {
            var provinceName = province.Name,
                citiesData = that.getCitiesOfProvinceName(provinceName);
            province[childrenKey] = citiesData;
            citiesData.map(function (city) {
                city[childrenKey] = that.getRegionsOfCityName(city.Name);
            })
        });
        return provincesData;
    }
});





/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @author liwei
 */


!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	/**
	 * 获取 cookie
	 * @param  {String} sKey 键名
	 * @return {String}      键名
	 */
	function get(sKey) {
		return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
	}

	/**
	 * 设置 cookie
	 * @param {String} sKey    键名
	 * @param {String} sValue  键值
	 * @param {[type]} vEnd    过期时间
	 * @param {String} sPath   路径
	 * @param {String} sDomain 域名
	 * @param {Boolean} bSecure 安全
	 */
	function set(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
		var sExpires = '';

		if ( !sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey) ) {
			return false;
		}

		if (vEnd) {
			switch (vEnd.constructor) {
				case Number:
					sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
					break;

				case String:
					sExpires = '; expires=' + vEnd;
					break;
					
				case Date:
					sExpires = '; expires=' + vEnd.toUTCString();
					break;
			}
		}

		document.cookie = encodeURIComponent( sKey ) + '=' + encodeURIComponent( sValue ) +
			sExpires +
			(sDomain ? '; domain=' + sDomain : '') +
			(sPath ? '; path=' + sPath : '') +
			(bSecure ? '; secure' : '');

		return true;
	}

	/**
	 * 移除某个 cookie
	 * @param  {String} sKey    键名
	 * @param  {String} sPath   路径
	 * @param  {String} sDomain 域名
	 * @return {Boolean}        true-删除成功，false-删除失败
	 */
	function remove(sKey, sPath, sDomain) {
		if ( !sKey || !has(sKey) ) {
			return false;
		}

		document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
							(sDomain ? '; domain=' + sDomain : '') +
								(sPath ? '; path=' + sPath : '');
		
		return true;
	}

	/**
	 * 判断是否拥有某个 key
	 * @param  {String}  sKey 键名
	 * @return {Boolean}
	 */
	function has(sKey) {
		var patt = new RegExp( '(?:^|;\\s*)' + encodeURIComponent( sKey ).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=' );

		return patt.test( document.cookie );
	}

	/**
	 * 获取
	 * @return {Object} 所有的 cookie 键值对
	 */
	function keys() {
		var map     = {},
			allKeys = document.cookie.
						replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').
							split( /\s*(?:\=[^;]*)?;\s*/ );


		allKeys.forEach(function( key ) {
			map[ decodeURIComponent(key) ] = get( key );
		});

		return map;
	}

	return {
		get    : get,
		set    : set,
		remove : remove,
		has    : has,
		keys   : keys
	};
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){

    function isInCTAdm(){
        document.domain = 'ct108.org';
        return window.parent.window.location.hostname.indexOf('admin.ct108.org')===0;
    }
    /**
     * 打开一个畅唐业务管理后台的某个菜单(该菜单需在页面上，否则会抛出异常)
     * @param href 链接 形式可以为'HREF?t='+new Date()(其中HREF为菜单原有链接)或'http://admin.ct108.org:1505....' 一般情况下，链接为菜单原有链接+查询字符串;
     * @param permissionCode 权限码 需要打开的页面的权限码
     */
    function openCTAdmPage(href, permissionCode) {
        document.domain = 'ct108.org';
        var parentDoc = $(window.parent.window.document);
        var link = parentDoc.find('a[data-id=' + permissionCode + ']');
        var tab = parentDoc.find('li[data-key=' + permissionCode + ']');
        var hrefBefore = link.attr('href');
        if (typeof parentDoc === 'undefined' || link.length === 0) {
            throw '访问不到菜单项';
        } else {
            tab.find('a')
                .append('<span> </span>')
                .find('span')
                .click();
            link.attr('href', href.replace('HREF', hrefBefore))
                .append('<span> </span>')
                .find('span')
                .click()
                .remove('span');
            link.attr('href', hrefBefore);
        }
    }

    return{
        isInCTAdm:isInCTAdm,
        openCTAdmPage:openCTAdmPage
    }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @author wangxiang
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	var numberFormat = __webpack_require__(11),
		rdateFormat = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
    	raspnetjson = /^\/Date\((\d+)\)\/$/, //匹配 /Date(12345)/ 类型的字符串
		DATE_FORMATS = {
		yyyy: dateGetter("FullYear", 4), //对年份进行四位数的显示 如：2017/01/06
		yy: dateGetter("FullYear", 2, 0, true), //对年份进行两位数的显示 如：17/01/06
		y: dateGetter("FullYear", 1), //年份的一般的显示 如：2017/01/06
		MM: dateGetter("Month", 2, 1), //对于月份的单个数字会进行补零, 如：2017/01/06
	  	M: dateGetter("Month", 1, 1), //对于月份的单个数字不会进行补零, 如：2017/1/06
	  	dd: dateGetter("Date", 2), //对于日期的单个数字会进行补零, 如：2017/01/06
	  	d: dateGetter("Date", 1), //对于日期的单个数字不会补零, 如：2017/01/6
	  	HH: dateGetter("Hours", 2), //对于小时的单个数字会进行补零,并且是24小时制 如：2017/01/06 08:01
	  	H: dateGetter("Hours", 1), //对于小时的单个数字不会进行补零,并且是24小时制 如：2017/01/06 8:01
	  	hh: dateGetter("Hours", 2, -12), //对于小时的单个数字会进行补零,并且是12小时制 如：2017/01/06 08:01
	  	h: dateGetter("Hours", 1, -12), //对于小时的单个数字不会进行补零,并且是12小时制 如：2017/01/06 8:01
	  	mm: dateGetter("Minutes", 2), //对于分钟的单个数字会进行补零 如：2017/03/06 08:01
	  	m: dateGetter("Minutes", 1), //对于分钟的单个数字不会进行补零 如：2017/03/06 08:1
	  	ss: dateGetter("Seconds", 2), //对于秒数的单个数字会进行补零 如：2017/03/06 08:01:09
	  	s: dateGetter("Seconds", 1) //对于秒数的单个数字会进行补零 如：2017/03/06 08:01:9
	};
	/**
	 * 根据不同的日期format,获取相应的年，月，日，时，分，秒的显示格式
	 * @param  {string} name   函数通过该参数执行不同的时间操作的方法
	 * @param  {int} size   日期显示的位数
	 * @param  {int} offset 时间显示的格式，12小时制还是24小时制(用于小时的显示)
	 * @param  {boolean} trim   用于年份的两位数的显示
	 * @return {Function}        返回数字格式化方法
	 */
	function dateGetter(name, size, offset, trim) {
	    return function (date) {
		    var value = date["get" + name]();
		    if (offset > 0 || value > -offset){
		      	value += offset;
		    }
		    if (value === 0 && offset === -12) {
		      	value = 12;
		    }
		    return padNumber(value, size, trim);
		}
	}
	/**
	 * 数字格式化
	 * @param  {int} num    获得的日期
	 * @param  {[type]} digits 日期要显示的位数
	 * @param  {boolean} trim   年份是否是两位数显示
	 * @return {string}        返回格式化后的数字
	 */
	function padNumber(num, digits, trim) {
		var neg = '';
		if (num < 0) {
		    neg = '-';
		    num = -num;
		}
		num = numberFormat.zeroFill(num, digits); //补零操作
		if (trim){
		    num = num.substr(num.length - digits);
		}
		return neg + num;
	}
	/**
	 * 日期格式化
	 * @param  {obj} date   日期对象
	 * @param  {string} format 格式化的方式
	 * @return {string}        格式化后的日期
	 */
	function dateFilter(date, format) {
		var text = "",
		    parts = [],
		    fn, match;
		format = format || "yyyy-M-d";
		if (typeof date === "string") {
		    if (/^\d+$/.test(date)) {
		      	date = numberFormat.toInt(date);
		    } else if (raspnetjson.test(date)) { //匹配 '/Date(1483410908227)/' 类型的字符串
		      	date = +RegExp.$1; //RegExp.$1 表示前面raspnetjson.test()匹配到的第一个括号中的内容
		    } else if(/^\d{4}\D*\d{2}\D*\d{2}$/.test(date)){
				date=new Date(date)-8*3600*1000;
			}else if(/^\d{4}\D*\d{2}\D*\d{2} \d{2}:\d{2}:\d{2}$/.test(date)){
				date=new Date(date);
			}else{
		      	console.error('请输入合法的日期');
		      	return;
		    }
		}
		if (typeof date === 'number') {
		    date = new Date(date);
		}
		while (format) {
		    match = rdateFormat.exec(format);
		    /* istanbul ignore else */
		    if (match) {
		      	parts = parts.concat(match.slice(1));
		      	format = parts.pop();
		    } else {
		      	parts.push(format);
		      	format = null;
		    }
		}
		parts.forEach(function (value) {
		    fn = DATE_FORMATS[value];
		    text += fn ? fn(date) : value.replace(/(^'|'$)/g, "").replace(/''/g, "'");
		});
		return text;
	}

	return dateFilter
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author rubyisapm
 */
!(module.exports = {
    list:{
        needSearch:'请点击搜索',
        noData:'没有数据',
        defaultError:'请求出错'
    }
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * @author liwei
 */

!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	'use strict';

	var base = __webpack_require__(0);

	var IS_LOCAL_STORAGE_AVAILABLE = base.isStorageAvailable( 'localStorage' );

	/**
	 * 设置一个 storage
	 * @param {String} sKey   键名
	 * @param {String} sValue 键值
	 */
	function set( sKey, sValue ) {
		if ( IS_LOCAL_STORAGE_AVAILABLE ) {
			localStorage.setItem( sKey, sValue );
		}
	}

	/**
	 * 获取 storage
	 * @param  {String} sKey 键名
	 * @return {String}      键值
	 */
	function get( sKey ) {
		if ( IS_LOCAL_STORAGE_AVAILABLE ) {

			return localStorage.getItem( sKey );
		}
	}

	/**
	 * 清除所有 storage
	 */
	function clear() {
		if ( IS_LOCAL_STORAGE_AVAILABLE ) {

			localStorage.clear();
		}
	}

	/**
	 * 删除一个 storage
	 * @param  {String} sKey 键名
	 */
	function remove( sKey ) {
		if ( IS_LOCAL_STORAGE_AVAILABLE ) {

			localStorage.removeItem( sKey );
		}
	}

	return {
		set: set,
		get: get,
		clear: clear,
		remove: remove
	};
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @author rubyisapm
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    var base = __webpack_require__(0);

    /**
     * 按照给定的规则转换原对象中的key的格式
     * @param {Function} transfer 转换函数
     * @param {?Object} obj 原对象
     * @returns {?Object} obj 转换后的对象
     */
    function transferKeyInObj(transfer, obj, jsonTransfer) {
        if (obj === null) {
            return obj;
        }
        var newObj = {},
            keys = Object.keys(obj);
        if (keys.length === 0) {
            return obj;
        }
        keys.map(function (key) {
            var val = obj[key],
                newKey = transfer(key);
            if (base.isObject(val)) {
                newObj[newKey] = transferKeyInObj(transfer, val, jsonTransfer);
            } else if (base.isArray(val)) {
                newObj[newKey] = transferKeyInArray(transfer, val, jsonTransfer);
            } else if (base.isJSON(val) && jsonTransfer) {
                newObj[newKey] = JSON.stringify(transferKeyInJSON(transfer, val, jsonTransfer));
            } else {
                newObj[newKey] = val;
            }
        });
        return newObj;
    }

    /**
     * 按照给定的规则转换原数组中的对象中的key的格式
     * @param {Function} transfer 转换函数
     * @param {Array} arr 原对象
     * @returns {?Object} obj 转换后的对象
     */
    function transferKeyInArray(transfer, arr, jsonTransfer) {
        if (arr.length == 0) {
            return arr;
        }
        var newArray = [];
        arr.map(function (item, index) {
            if (base.isArray(item)) {
                newArray[index] = transferKeyInArray(transfer, item, jsonTransfer);
            } else if (base.isObject(item)) {
                newArray[index] = transferKeyInObj(transfer, item, jsonTransfer);
            } else if (base.isJSON(item) && jsonTransfer) {
                newArray[index] = JSON.stringify(transferKeyInJSON(transfer, item, jsonTransfer));
            } else {
                newArray[index] = item;
            }
        });
        return newArray;
    }

    /**
     * 按照给定的规则转换原json字符串中的key的格式
     * @param {Function} transfer
     * @param {String} json
     */
    function transferKeyInJSON(transfer, json) {
        var jsonObj = JSON.parse(json);
        if (base.isArray(jsonObj)) {
            return transferKeyInArray(transfer, jsonObj, true);
        } else if (base.isObject(jsonObj)) {
            return transferKeyInObj(transfer, jsonObj, true);
        } else if (base.isJSON(jsonObj)) {
            return transferKeyInJSON(transfer, jsonObj, true)
        }

    }

    /**
     * 去除对象中某些属性值的前后空格
     * @param {object} obj 原对象
     * @param {array} keys 要修改的key，支持以.分隔的串联属性如app.id
     * @returns {*} 处理后的对象
     */
    function trimSomeInObj(obj, keys) {
        var objClone = JSON.parse(JSON.stringify(obj));
        keys.map(function (key) {
            objClone = base.setObjValByKey(objClone, key, function (obj, key) {
                obj[key] = obj[key].replace(/(^\s*|\s*$)/g, '');
            });
        });
        return objClone;
    }

    /**
     * 去除数组中单一项的某些属性值的前后空格
     * @param {Array} arr 原数组
     * @param {Array} keys 要修改的key，支持以.分隔的串联属性如app.id
     * @returns {*} 处理后的数组
     */
    function trimSomeInArray(arr, keys) {
        return arr.map(function(item){
            return trimSomeInObj(item,keys);
        })
    }

    /**
     * 以具体的方式转换对象中的key
     * @param {Object} obj 原对象
     * @param {Array} rules 规则定义
     * @param {Array} rules[].keys 每项为要转换的key
     * @param {String | Function} rules[].rule 转换规则
     */
    function transferSomeInObj(obj,rules){
        var objClone = JSON.parse(JSON.stringify(obj));
        rules.map(function(item){
            var keys=item.keys,
                transfer=item.rule;
            keys.map(function (key) {
                objClone = base.setObjValByKey(objClone, key, transfer);
            });
        });
        return objClone;
    }

    /**
     * 以具体的方式转换对象中的key
     * @param {Array} arr 原数组
     * @param {Array} rules 规则定义
     * @param {Array} rules[].keys 每项为要转换的key
     * @param {String | Function} rules[].rule 转换规则
     */
    function transferSomeInArray(arr,rules){
        return arr.map(function(item){
            return trimSomeInObj(item,rules);
        })
    }

    return {
        /**
         * 将原对象中的key的首字母小写
         * @param {Object} obj 原对象
         * @param {Boolean} jsonTransfer 是否转换json中的内容
         * @returns {Object} 转换后的对象
         */
        upperKey: function (obj, jsonTransfer) {
            if (base.isArray(obj)) {
                return transferKeyInArray(base.upperCaseFirst, obj, jsonTransfer);
            } else {
                return transferKeyInObj(base.upperCaseFirst, obj, jsonTransfer);
            }
        },
        /**
         * 将原对象中的key的首字母小写
         * @param {Object} obj 原对象
         * @param {Boolean} jsonTransfer 是否转换json中的内容
         * @returns {Object} 转换后的对象
         */
        lowerKey: function (obj, jsonTransfer) {
            if (base.isArray(obj)) {
                return transferKeyInArray(base.lowerCaseFirst, obj, jsonTransfer);
            } else {
                return transferKeyInObj(base.lowerCaseFirst, obj, jsonTransfer);
            }
        },
        trimSome: function(obj,keys){
            if (base.isArray(obj)) {
                return trimSomeInArray(obj,keys);
            } else {
                return trimSomeInObj(obj,keys);
            }
        },
        transferSome:function(obj,rules){
            if (base.isArray(obj)) {
                return transferSomeInArray(obj,rules);
            } else {
                return transferSomeInObj(obj,rules);
            }
        }
    }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

!(module.exports = {
    // 获取滚动条宽度
    getWidth: function () {
        var scrollBarWidth = 0;

        var outer = document.createElement('div');

        outer.className = 'ct-adc-scrollbar__wrap';
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.position = 'absolute';
        outer.style.top = '-9999px';
        document.body.appendChild(outer);

        var widthNoScroll = outer.offsetWidth;

        outer.style.overflow = 'scroll';

        var inner = document.createElement('div');

        inner.style.width = '100%';
        outer.appendChild(inner);

        var widthWithScroll = inner.offsetWidth;

        outer.parentNode.removeChild(outer);
        scrollBarWidth = widthNoScroll - widthWithScroll;

        return scrollBarWidth;
    }
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * @author liwei
 */


!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	'use strict';

	var base = __webpack_require__(0);

	var IS_SESSION_STORAGE_AVAILABLE = base.isStorageAvailable( 'sessionStorage' );

	/**
	 * 设置一个 storage
	 * @param {String} sKey   键名
	 * @param {String} sValue 键值
	 */
	function set( sKey, sValue ) {
		if ( IS_SESSION_STORAGE_AVAILABLE ) {

			sessionStorage.setItem( sKey, sValue );
		}
	}

	/**
	 * 获取 storage
	 * @param  {String} sKey 键名
	 * @return {String}      键值
	 */
	function get( sKey ) {
		if ( IS_SESSION_STORAGE_AVAILABLE ) {

			return sessionStorage.getItem( sKey );
		}
	}

	/**
	 * 清除所有 storage
	 */
	function clear() {
		if ( IS_SESSION_STORAGE_AVAILABLE ) {
			
			sessionStorage.clear();
		}
	}

	/**
	 * 删除一个 storage
	 * @param  {String} sKey 键名
	 */
	function remove( sKey ) {
		if ( IS_SESSION_STORAGE_AVAILABLE ) {

			sessionStorage.removeItem( sKey );
		}
	}

	return {
		set: set,
		get: get,
		clear: clear,
		remove: remove
	};
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group"
  }, [_c('date', {
    ref: "beginDate",
    attrs: {
      "initial-date": _vm.beginDate,
      "placeholder": _vm.beginPlaceholder,
      "ops": _vm.beginOps
    },
    on: {
      "change": _vm.changeBeginDate
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-addon"
  }, [_vm._v("至")]), _vm._v(" "), _c('date', {
    ref: "endDate",
    staticStyle: {
      "border-radius": "0 4px 4px 0"
    },
    attrs: {
      "initial-date": _vm.endDate,
      "placeholder": _vm.endPlaceholder,
      "ops": _vm.endOps
    },
    on: {
      "change": _vm.changeEndDate
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bb3e5216", module.exports)
  }
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    ref: "date",
    staticClass: "form-control",
    attrs: {
      "type": "text"
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cc787024", module.exports)
  }
}

/***/ })
/******/ ]);
});