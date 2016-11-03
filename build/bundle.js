/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/resources/js";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Sidebar = __webpack_require__(1);

	var _Sidebar2 = _interopRequireDefault(_Sidebar);

	var _Overlay = __webpack_require__(2);

	var _Overlay2 = _interopRequireDefault(_Overlay);

	var _DisableBackgroundScrolling = __webpack_require__(3);

	var _DisableBackgroundScrolling2 = _interopRequireDefault(_DisableBackgroundScrolling);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(4);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = Sidebar = function () {
	  /* Set the width of the side navigation to 250px */
	  var openNav = function openNav() {
	    var mask = document.getElementById('mask'),
	        sideNav = document.getElementById('mySidenav'),
	        main = document.getElementById('main');

	    mask.style.display = 'block';
	    sideNav.style.width = '75vw';
	    main.classList.add('noscroll');
	    disableBackgroundScrolling.disableAll('main', 'mySidenav', 'nextSibling');
	  };

	  /* Set the width of the side navigation to 0 */
	  var closeNav = function closeNav() {
	    var mask = document.getElementById('mask'),
	        sideNav = document.getElementById('mySidenav'),
	        main = document.getElementById('main');

	    mask.style.display = 'none';
	    sideNav.style.width = '0';
	    main.classList.remove('noscroll');
	    disableBackgroundScrolling.reset('main');
	  };

	  return {
	    open: openNav,
	    close: closeNav
	  };
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = Overlay = function () {
	  var overlayOpen = function overlayOpen(event) {
	    var overlay = document.getElementById('overlay'),
	        mask = document.getElementById('mask'),
	        main = document.getElementById('main');

	    mask.style.display = 'block';
	    overlay.style.height = '450px';
	    overlay.style.top = '0';
	    overlay.classList.add('noscroll');

	    disableBackgroundScrolling.disableAll('main', 'overlay', 'nextSibling');
	  };

	  var overlayClose = function overlayClose() {
	    var overlay = document.getElementById('overlay'),
	        mask = document.getElementById('mask');

	    mask.style.display = 'none';
	    overlay.style.height = '0';
	    overlay.style.top = '-50px';
	  };

	  return {
	    open: overlayOpen,
	    close: overlayClose
	  };
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = DisableBackgroundScrolling = function () {

	    var disableTouch = function disableTouch(elementId, touchTarget) {
	        var elem = document.getElementById(elementId);
	        elem.classList.add('noscroll');

	        return document.ontouchmove = function (evt) {
	            var isTouchMoveAllowed = true,
	                target = evt.target;

	            while (target !== null) {
	                if (target.classList && target.classList.contains('noscroll')) {
	                    isTouchMoveAllowed = false;
	                    break;
	                }
	                target = touchTarget !== undefined ? target[touchTarget] : target.parentNode;
	            }

	            if (!isTouchMoveAllowed) {
	                evt.preventDefault();
	            }
	        };
	    };

	    var disableElasticScrolling = function disableElasticScrolling(elementId) {
	        var scrollable = document.getElementById(elementId);

	        return scrollable.addEventListener('touchstart', function () {

	            var top = scrollable.scrollTop,
	                totalScroll = scrollable.scrollHeight,
	                currentScroll = top + scrollable.offsetHeight;

	            if (top === 0) {
	                scrollable.scrollTop = 1;
	            } else if (currentScroll === totalScroll) {
	                scrollable.scrollTop = top - 1;
	            }
	        });
	    };

	    var reset = function reset(elementId) {
	        document.getElementById(elementId).classList.remove('noscroll');
	    };

	    var disableAll = function disableAll(noscroll, scrollable, touchTarget) {
	        disableTouch(noscroll, touchTarget);
	        disableElasticScrolling(scrollable);
	    };

	    return {
	        disableTouch: disableTouch,
	        disableElasticScrolling: disableElasticScrolling,
	        reset: reset,
	        disableAll: disableAll
	    };
	}();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".content p {\n  font-size: 32px; }\n\n.btn {\n  position: fixed;\n  background: tomato;\n  font-size: 5rem;\n  padding: 10px 20px; }\n\n/* The side navigation menu */\n.sidenav {\n  height: 100%;\n  /* 100% Full-height */\n  width: 0;\n  /* 0 width - change this with JavaScript */\n  position: fixed;\n  /* Stay in place */\n  z-index: 100;\n  /* Stay on top */\n  top: 0;\n  left: 0;\n  background-color: #111;\n  /* Black*/\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  padding-top: 60px;\n  /* Place content 60px from the top */\n  transition: 0.5s;\n  /* 0.5 second transition effect to slide in the sidenav */\n  -webkit-overflow-scrolling: touch; }\n\n/* The navigation menu links */\n.sidenav a {\n  margin: 2rem;\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 4rem;\n  color: white;\n  display: block;\n  transition: 0.3s; }\n\n/* When you mouse over the navigation links, change their color */\n.sidenav a:hover, .offcanvas a:focus {\n  color: tomato; }\n\n/* Position and style the close button (top right corner) */\n.sidenav .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 4rem;\n  margin-left: 50px; }\n\n/*maks that will close the sidebar*/\n#mask {\n  display: none;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 50; }\n\n#closeComponent {\n  display: none;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 50; }\n\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\n#main {\n  transition: margin-left .5s;\n  padding: 20px; }\n\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px; }\n  .sidenav a {\n    font-size: 18px; } }\n\n#overlay {\n  width: 100%;\n  height: 0;\n  padding: 25px 7px 0;\n  background: #fff;\n  z-index: 999;\n  position: fixed;\n  top: -50px;\n  left: 0;\n  -webkit-transition: -webkit-transform 0.6s ease;\n  transition: transform 0.6s ease;\n  text-align: center;\n  -webkit-box-shadow: 0 3px 5px 1px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 5px 1px rgba(0, 0, 0, 0.2);\n  overflow: scroll; }\n\n.overlay-btn {\n  margin: 0 auto;\n  height: 100px;\n  width: 80%;\n  color: white;\n  font-size: 2rem;\n  background-color: tomato; }\n\n.overlay-content {\n  font-size: 50px; }\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);