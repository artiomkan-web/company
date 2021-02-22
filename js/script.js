 (function(modules) { 
 	var installedModules = {};
 	function __webpack_require__(moduleId) {
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 		module.l = true;
 		return module.exports;
 	}
 	__webpack_require__.m = modules;
 	__webpack_require__.c = installedModules;
 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};
 	__webpack_require__.r = function(exports) {
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};
 	__webpack_require__.t = function(value, mode) {
 		if(mode & 1) value = __webpack_require__(value);
 		if(mode & 8) return value;
 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		__webpack_require__.r(ns);
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 		return ns;
 	};
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
 	__webpack_require__.p = "";
 	return __webpack_require__(__webpack_require__.s = "./#src/js/script.js");
 })
 ({

 "./#src/js/script.js":
 (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction testWebP(callback) {\n  var webP = new Image();\n\n  webP.onload = webP.onerror = function () {\n    callback(webP.height == 2);\n  };\n\n  webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\n}\n\ntestWebP(function (support) {\n  if (support == true) {\n    document.querySelector('body').classList.add('webp');\n  } else {\n    document.querySelector('body').classList.add('no-webp');\n  }\n}); // Header Burger\n\nvar headerBurger = document.querySelector('.header__burger'),\n    headerMenuList = document.querySelector('.header__navigation'),\n    headerMenuItem = document.querySelectorAll('.header__list > li > a');\n\nfunction rootMenu() {\n  if (headerMenuList.classList.contains('active')) {\n    headerMenuList.classList.remove('active');\n    headerBurger.classList.remove('active');\n  } else {\n    headerMenuList.classList.add('active');\n    headerBurger.classList.add('active');\n  }\n}\n\nheaderBurger.addEventListener('click', function (e) {\n  rootMenu();\n});\nheaderMenuItem.forEach(function (i) {\n  i.addEventListener('click', function (e) {\n    rootMenu();\n  });\n}); // Home Slider\n\nvar homepage = document.querySelector('.home'),\n    homepageBgLength = 4,\n    homepageIndex = 1;\n\nfunction homepageBgChanger() {\n  if (homepageIndex == homepageBgLength + 1) {\n    homepageIndex = 1;\n    homepage.style.background = \"url(img/background/home-main_bg\".concat(homepageIndex, \".webp)  center center / cover\");\n  }\n\n  if (homepageIndex == 0) {\n    homepageIndex = homepageBgLength;\n    homepage.style.background = \"url(img/background/home-main_bg\".concat(homepageIndex, \".webp)  center center / cover\");\n  } else {\n    homepage.style.background = \"url(img/background/home-main_bg\".concat(homepageIndex, \".webp)  center center / cover\");\n  }\n}\n\nhomepage.addEventListener('click', function (e) {\n  if (e.target.classList.contains('prev')) {\n    homepageIndex--;\n    homepageBgChanger();\n  }\n\n  if (e.target.classList.contains('next')) {\n    homepageIndex++;\n    homepageBgChanger();\n  }\n}); // Feedback Reviews\n\nvar feedbackReviews = document.querySelectorAll('.feedback__reviews > p'),\n    feedbackNumber = document.querySelector('.feedback__slider__number'),\n    feedbackPrev = document.querySelectorAll('.feedback__slider__btn')[0],\n    feedbackNext = document.querySelectorAll('.feedback__slider__btn')[1],\n    feedbackIndex = 0;\n\nfunction rootReviews() {\n  if (feedbackIndex == feedbackReviews.length) {\n    feedbackIndex = 0;\n  }\n\n  if (feedbackIndex < 0) {\n    feedbackIndex = feedbackReviews.length - 1;\n  }\n\n  feedbackReviews.forEach(function (i) {\n    i.classList.remove('active');\n  });\n  feedbackReviews[feedbackIndex].classList.add('active');\n  feedbackNumber.innerHTML = \"\".concat(feedbackIndex + 1, \" / \").concat(feedbackReviews.length);\n}\n\nfeedbackPrev.addEventListener('click', function (e) {\n  feedbackIndex--;\n  rootReviews();\n});\nfeedbackNext.addEventListener('click', function (e) {\n  feedbackIndex++;\n  rootReviews();\n});\n\n//# sourceURL=webpack:///./#src/js/script.js?");

 })

 });