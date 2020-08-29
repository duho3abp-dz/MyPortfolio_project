/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/modules/modal_career.js":
/*!****************************************!*\
  !*** ./app/js/modules/modal_career.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modalCareer = () => {
    const brendLinks = document.querySelectorAll('.career__menu_block-click'),
        brendModals = document.querySelectorAll('.career-modal'),
        closeButtonsModals = document.querySelectorAll('.career-modal__close');

    const openCloseModalCareer = links => {
        links.forEach((link, i) => {
            link.addEventListener('click', e => {
                e.preventDefault();

                brendModals[i].classList.toggle('career-modal__active');
                brendModals[i].classList.toggle('career-modal__fade');
                brendModals[i].classList.contains('career-modal__active') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
            });
        });
    };

    const closeModalCareer = modal => {
        modal.classList.remove('career-modal__active');
        modal.classList.remove('career-modal__fade');
        document.body.style.overflow = '';
    };

    document.body.addEventListener('keydown', e => {
        if (e.keyCode == 27) {
            brendModals.forEach(modal => {
                if (modal.classList.contains('career-modal__active')) {
                    closeModalCareer(modal);
                }
            });
        }
    });

    brendModals.forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target.classList.contains('career-modal') == modal.classList.contains('career-modal')) {
                closeModalCareer(modal);
            }
        });
    });

    openCloseModalCareer(brendLinks);
    openCloseModalCareer(closeButtonsModals);
};
/* harmony default export */ __webpack_exports__["default"] = (modalCareer);

/***/ }),

/***/ "./app/js/modules/modal_menu.js":
/*!**************************************!*\
  !*** ./app/js/modules/modal_menu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modalMenu = () => {
    const naviMenu = document.querySelector('.navi_menu'),
        fixedMenu = document.querySelector('.fixed_menu-link');

    fixedMenu.addEventListener('click', e => {
        e.preventDefault();

        naviMenu.classList.toggle('navi__menu--active');
        fixedMenu.classList.toggle('active_menu');
        naviMenu.classList.contains('navi__menu--active') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
    });

    document.addEventListener('keydown', e => {
        if (e.keyCode === 27 && naviMenu.classList.contains('navi__menu--active')) {
            naviMenu.classList.remove('navi__menu--active');
            fixedMenu.classList.remove('active_menu');
            document.body.style.overflow = '';
        }
    });
};
/* harmony default export */ __webpack_exports__["default"] = (modalMenu);

/***/ }),

/***/ "./app/js/modules/slider.js":
/*!**********************************!*\
  !*** ./app/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slider = () => {
    const nextSlide = document.querySelector('.button_next'),
        prevSlide = document.querySelector('.button_prev'),
        allSliders = document.querySelectorAll('.project_block'),
        firstSlide = document.querySelector('.project__slide--wrap').firstElementChild,
        lastSlide = document.querySelector('.project__slide--wrap').lastElementChild;

    const changeSlide = (extr, compare, sliders) => {
        let activeElem;

        sliders.forEach((slide, i) => {
            if (slide != extr) {
                if (slide.classList.contains('project__active')) {
                    if (sliders.length == i + 2) {
                        compare.style.display = 'none';
                    } else {
                        nextSlide.style.display = 'block';
                        prevSlide.style.display = 'block';
                    }
                    if (slide != extr) {
                        slide.classList.remove('project__active');
                        slide.classList.remove('project__fade');
                        if (compare == nextSlide) {
                            activeElem = slide.nextElementSibling;
                        } else if (compare == prevSlide) {
                            activeElem = slide.previousElementSibling;
                        }
                    } else {
                        activeElem = slide;
                    }
                }
            }
        });

        if (!activeElem.classList.contains('project__active')) {
            activeElem.classList.add('project__active');
            activeElem.classList.add('project__fade');
        }
    };

    const buttonAssignmentEvent = (extr, compare, sliders) => {
        compare.addEventListener('click', e => {
            e.preventDefault();

            changeSlide(extr, compare, sliders);
        });
    };

    document.addEventListener('keydown', e => {
        if (e.keyCode == 39) {
            changeSlide(lastSlide, nextSlide, allSliders);
        }
        if (e.keyCode == 37) {
            changeSlide(firstSlide, prevSlide, allSliders);
        }
    });

    buttonAssignmentEvent(lastSlide, nextSlide, allSliders);
    buttonAssignmentEvent(firstSlide, prevSlide, allSliders);
};
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./app/js/script.js":
/*!**************************!*\
  !*** ./app/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal_menu */ "./app/js/modules/modal_menu.js");
/* harmony import */ var _modules_modal_career__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal_career */ "./app/js/modules/modal_career.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./app/js/modules/slider.js");






window.addEventListener('DOMContentLoaded', () => {

    Object(_modules_modal_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
    Object(_modules_modal_career__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
    
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map