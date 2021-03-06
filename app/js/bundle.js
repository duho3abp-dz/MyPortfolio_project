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

/***/ "./app/js/modules/methods/testHrefLink.js":
/*!************************************************!*\
  !*** ./app/js/modules/methods/testHrefLink.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const testHrefLink = (elem, id, themeLink) => {
    if (elem.id === id) {    
        elem.href = themeLink;
    } else {
        elem.href = `../${themeLink}`;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (testHrefLink);

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
    background,
    escape
}) => {
    const links = document.querySelectorAll(linksClass),
          modals = document.querySelectorAll(modalsClass),
          closeBtns = document.querySelectorAll(closeButtonsClass);

    const openCloseModal = (modal, link) => {
        if (activeBtnClass) { link.classList.toggle(activeBtnClass); }
        if (fade) { modal.classList.toggle(fade); }

        modal.classList.toggle(active);

        if (modal.classList.contains(active)) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
        } else {
            document.body.style.overflow = '';
            document.body.style.position = 'relative';
        }
    };

    const addEvent = links => links.forEach((link, i) => {
        link.addEventListener('click', e => {
            e.preventDefault();

            openCloseModal(modals[i], link);
        });

        if (escape) {
            window.addEventListener('keydown', e => {
                if (e.key === 'Escape') {
                    openCloseModal(modals[i], link);
                }
            });
        }
    });

    const closeModalCareer = modal => {
        if (activeBtnClass) { links.forEach(link => link.classList.toggle(activeBtnClass)); }
        if (fade) { modal.classList.remove(fade); }

        modal.classList.remove(active);
        
        document.body.style.overflow = '';
        document.body.style.position = 'relative';
        document.html.style.overflow = '';
        document.html.style.position = '';
    };

    if (background) {
        modals.forEach(modal => {
            modal.addEventListener('click', e => {
                if (e.target.classList.contains(modalsClass.replace(/\./, ''))) { closeModalCareer(modal); }
            });
        });
        addEvent(closeBtns);
    }
    
    addEvent(links);
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
    sliderWrapClass,
    nextBtnClass, 
    prevBtnClass,
    actualPageClass,
    allPagesClass,
    allSlidesClass,
    active,
    fade
}) => {
    const next = document.querySelector(nextBtnClass),
          prev = document.querySelector(prevBtnClass),
          allSlides = document.querySelectorAll(allSlidesClass),
          actualPage = document.querySelector(actualPageClass),
          allPages = document.querySelector(allPagesClass),
          wrapSlider = document.querySelector(sliderWrapClass);
    let index = 0;

    const testCounter = (num) => num < 10 ? `0${num}` : num ;

    const counterProjects = (ind, elem) => elem ? elem.textContent = `${testCounter(ind + 1)}/` : null;

    const changeSlide = (compare, slides, actual) => {
        compare === next ? index++ : index-- ;

        if (index >= slides.length) {
            index = 0;
        } else if (index < 0) {
            index = slides.length - 1;
        }

        counterProjects(index, actual);
        
        slides.forEach((slide, i) => {
            index === i ? 
                slide.classList.add(active, fade) : 
                slide.classList.remove(active, fade) ;
        });
    };

    const buttonAssignmentEvent = (compare, slides, actual) => {
        if (compare) {
            compare.addEventListener('click', e => {
                e.preventDefault();
                changeSlide(compare, slides, actual);
            });
        }
    };

    if (allPages) { allPages.textContent = testCounter(allSlides.length); }

    if (wrapSlider) { 
        wrapSlider.addEventListener('touchstart', e => {
            const startTouchX = e.targetTouches[0].pageX,
                  startTouchY = e.targetTouches[0].pageY;



            const touchMoveEvent = e => {
                e.preventDefault();

                if (startTouchX > e.targetTouches[0].pageX) {
                    if ((startTouchY + 3) >= e.targetTouches[0].pageY && (startTouchY - 3) <= e.targetTouches[0].pageY) {
                        changeSlide(next, allSlides, actualPage);
                    };
                }
                if (startTouchX < e.targetTouches[0].pageX) {
                    if ((startTouchY + 3) >= e.targetTouches[0].pageY && (startTouchY - 3) <= e.targetTouches[0].pageY) {
                        changeSlide(prev, allSlides, actualPage);
                    };
                }

                wrapSlider.removeEventListener('touchmove', touchMoveEvent);    
            }

            wrapSlider.addEventListener('touchmove', touchMoveEvent);
        }); 
    }
    
    document.addEventListener('keydown', e => {
        if (e.keyCode == 39) {
            changeSlide(next, allSlides, actualPage);
        }
        if (e.keyCode == 37) {
            changeSlide(prev, allSlides, actualPage);
        }
    });

    counterProjects(index, actualPage);
    buttonAssignmentEvent(next, allSlides, actualPage);
    buttonAssignmentEvent(prev, allSlides, actualPage);
};
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./app/js/modules/theme.js":
/*!*********************************!*\
  !*** ./app/js/modules/theme.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _methods_testHrefLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/testHrefLink */ "./app/js/modules/methods/testHrefLink.js");




const theme = ({
    classStyleLink, 
    idIndex, 
    lightThemeLink, 
    darkThemeLink,
    toggleBtnClass,
    switchClass,
    activeDarkClass
}) => {
    const mainStyle = document.querySelector(classStyleLink),
          toggleBtn = document.querySelector(toggleBtnClass),
          switchElem = document.querySelector(switchClass);

    toggleBtn.addEventListener('click', e => {
        if (switchElem.classList.contains(activeDarkClass)) {

            localStorage.setItem('theme', 'light');

            switchElem.classList.remove(activeDarkClass);
            Object(_methods_testHrefLink__WEBPACK_IMPORTED_MODULE_0__["default"])(mainStyle, idIndex, lightThemeLink);

        } else {

            localStorage.setItem('theme', 'dark');

            switchElem.classList.add(activeDarkClass);
            Object(_methods_testHrefLink__WEBPACK_IMPORTED_MODULE_0__["default"])(mainStyle, idIndex, darkThemeLink);

        }
    });

};

/* harmony default export */ __webpack_exports__["default"] = (theme);

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
/* harmony import */ var _modules_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/theme */ "./app/js/modules/theme.js");
/* harmony import */ var _modules_methods_testHrefLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/methods/testHrefLink */ "./app/js/modules/methods/testHrefLink.js");









window.addEventListener('DOMContentLoaded', () => {

    const checkTheme = () => {
        const classStyleLink = '.theme',
              idIndex = 'index',
              lightThemeLink = 'css/light.min.css',
              darkThemeLink = 'css/dark.min.css',
              activeDarkClass = 'theme-toggle__switch--dark';

        const mainStyle = document.querySelector(classStyleLink),
            switchElem = document.querySelector('.theme-toggle__switch'),
            actualTheme = localStorage.getItem('theme');
            
        if (actualTheme === 'light') {
            switchElem.classList.remove(activeDarkClass);
            Object(_modules_methods_testHrefLink__WEBPACK_IMPORTED_MODULE_4__["default"])(mainStyle, idIndex, lightThemeLink);
        } else if (actualTheme === 'dark') {
            switchElem.classList.add(activeDarkClass);
            Object(_modules_methods_testHrefLink__WEBPACK_IMPORTED_MODULE_4__["default"])(mainStyle, idIndex, darkThemeLink);
        } else {
            Object(_modules_methods_testHrefLink__WEBPACK_IMPORTED_MODULE_4__["default"])(mainStyle, idIndex, lightThemeLink);
        }

        Object(_modules_theme__WEBPACK_IMPORTED_MODULE_3__["default"])({
            classStyleLink,
            idIndex,
            activeDarkClass,
            lightThemeLink,
            darkThemeLink,
            toggleBtnClass: '.theme-toggle',
            switchClass: '.theme-toggle__switch'
        });
    };
    
    checkTheme();

    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])({
        linksClass: '.fixed_menu-link',
        modalsClass: '.navi_menu',
        closeButtonsClass: '.fixed_menu-link',
        activeBtnClass: 'active_menu',
        active: 'navi__menu--active',
        escape: true
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
        sliderWrapClass: '.project__slide--wrap',
        nextBtnClass: '.button_next', 
        prevBtnClass: '.button_prev',
        allSlidesClass: '.project_block',
        active: 'project__active',
        fade: 'project__fade',
        actualPageClass: '.project_counter-active',
        allPagesClass: '.project_counter-all'
    });

    Object(_modules_hide__WEBPACK_IMPORTED_MODULE_2__["default"])({
        hideElemClass: '.fixed-socials',
        elemTargetClass: '.footer .socials'
    });
    
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map