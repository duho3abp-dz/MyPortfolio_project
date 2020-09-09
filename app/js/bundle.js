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

/***/ "./app/js/modules/hide.js":
/*!********************************!*\
  !*** ./app/js/modules/hide.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const hide = ({hideElemClass, elemTargetClass}) => {
    
    const hideElement = document.querySelector(hideElemClass),
          elementTarget = document.querySelector(elemTargetClass),
          clientHeightScreen = document.documentElement.clientHeight;
    let targetHeight = elementTarget.getBoundingClientRect().bottom - clientHeightScreen;

    const heightTest = (target, elem) => {
        if (+target <= 0) {
            elem.style.display = 'none';
        } else {
            elem.style.display = '';
        }
    };

    document.addEventListener('scroll', () => {
        targetHeight = elementTarget.getBoundingClientRect().bottom - clientHeightScreen;

        heightTest(targetHeight, hideElement);
    });

    heightTest(targetHeight, hideElement);

};

/* harmony default export */ __webpack_exports__["default"] = (hide);

/***/ }),

/***/ "./app/js/modules/modal.js":
/*!*********************************!*\
  !*** ./app/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modal = ({
    linksClass,
    modalsClass,
    closeButtonsClass,
    activeBtnClass,
    active,
    fade,
    background
}) => {
    const links = document.querySelectorAll(linksClass),
          modals = document.querySelectorAll(modalsClass),
          closeBtns = document.querySelectorAll(closeButtonsClass);

    const openCloseModalCareer = links => links.forEach((link, i) => {
        link.addEventListener('click', e => {
            e.preventDefault();

            if (activeBtnClass) { link.classList.toggle(activeBtnClass); }
            if (fade) { modals[i].classList.toggle(fade); }

            modals[i].classList.toggle(active);
            modals[i].classList.contains(active) ? 
                document.body.style.overflow = 'hidden' : 
                document.body.style.overflow = '' ;
        });
    });

    const closeModalCareer = modal => {
        if (activeBtnClass) { links.forEach(link => link.classList.toggle(activeBtnClass)); }
        if (fade) { modal.classList.remove(fade); }

        modal.classList.remove(active);
        document.body.style.overflow = '';
    };

    document.body.addEventListener('keydown', e => {
        if (e.keyCode == 27) {
            modals.forEach(modal => {
                if (modal.classList.contains(active)) {
                    closeModalCareer(modal);
                }
            });
        }
    });

    if (background) {
        modals.forEach(modal => {
            modal.addEventListener('click', e => {
                if (e.target.classList.contains(modalsClass.replace(/\./, ''))) { closeModalCareer(modal); }
            });
        });
        openCloseModalCareer(closeBtns);
    }
    
    openCloseModalCareer(links);
};
/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./app/js/modules/slider.js":
/*!**********************************!*\
  !*** ./app/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slider = ({
    nextBtnClass, 
    prevBtnClass, 
    allSlidesClass,
    active,
    fade
}) => {
    const next = document.querySelector(nextBtnClass),
          prev = document.querySelector(prevBtnClass),
          allSlides = document.querySelectorAll(allSlidesClass);
    let index = 0;

    const changeSlide = (compare, slides) => {
        compare === next ? index++ : index-- ;

        if (index >= slides.length) {
            index = 0;
        } else if (index < 0) {
            index = slides.length - 1;
        }
        
        slides.forEach((slide, i) => {
            index === i ? 
                slide.classList.add(active, fade) : 
                slide.classList.remove(active, fade) ;
        });
    };

    const buttonAssignmentEvent = (compare, sliders) => {
        if (compare) {
            compare.addEventListener('click', e => {
                e.preventDefault();
                changeSlide(compare, sliders);
            });
        }
    };

    document.addEventListener('keydown', e => {
        if (e.keyCode == 39) {
            changeSlide(next, allSlides);
        }
        if (e.keyCode == 37) {
            changeSlide(prev, allSlides);
        }
    });

    buttonAssignmentEvent(next, allSlides);
    buttonAssignmentEvent(prev, allSlides);
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
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./app/js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./app/js/modules/slider.js");
/* harmony import */ var _modules_hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/hide */ "./app/js/modules/hide.js");






window.addEventListener('DOMContentLoaded', () => {

    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])({
        linksClass: '.fixed_menu-link',
        modalsClass: '.navi_menu',
        closeButtonsClass: '.fixed_menu-link',
        activeBtnClass: 'active_menu',
        active: 'navi__menu--active'
    });

    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])({
        linksClass: '.career__menu_block-click',
        modalsClass: '.career-modal',
        closeButtonsClass: '.career-modal__close',
        active: 'career-modal__active',
        fade: 'career-modal__fade',
        background: true
    });
    
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])({
        nextBtnClass: '.button_next', 
        prevBtnClass: '.button_prev',
        allSlidesClass: '.project_block',
        active: 'project__active',
        fade: 'project__fade',
    });

    Object(_modules_hide__WEBPACK_IMPORTED_MODULE_2__["default"])({
        hideElemClass: '.fixed-socials',
        elemTargetClass: '.footer .socials'
    });
    
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map