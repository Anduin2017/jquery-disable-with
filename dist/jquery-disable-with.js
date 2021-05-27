(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DisableWith"] = factory();
	else
		root["DisableWith"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var DisableWith = /** @class */ (function () {
    function DisableWith(property, onInit) {
        this.initDisableWith(property, onInit);
    }
    DisableWith.prototype.initDisableWith = function (property, onInit) {
        var _this = this;
        document.querySelectorAll("*[" + property + "]").forEach(function (element) {
            var value = element.getAttribute(property);
            _this.initElement(element, value, onInit);
        });
    };
    DisableWith.prototype.getParentForm = function (element) {
        if (element.nodeName.toLowerCase() === 'form') {
            return element;
        }
        if (element == null) {
            return null;
        }
        return this.getParentForm(element.parentElement);
    };
    DisableWith.prototype.initElement = function (submitButton, value, onInit) {
        var isButton = submitButton.nodeName.toLowerCase() === 'button';
        var prevalue = '';
        if (isButton) {
            prevalue = submitButton.innerHTML;
        }
        else {
            prevalue = submitButton.getAttribute("value");
        }
        // Form of the control
        var firstForm = this.getParentForm(submitButton);
        if (!firstForm) {
            console.warn('The disable-with control needs to be put in a form.');
            return;
        }
        // Handle form on submit to disable the control.
        firstForm.addEventListener('submit', function () {
            submitButton.setAttribute('disabled', 'disabled');
            if (isButton) {
                submitButton.innerHTML = value;
            }
            else {
                submitButton.setAttribute('value', value);
            }
        });
        if (onInit) {
            onInit(firstForm, submitButton, prevalue, isButton);
        }
    };
    return DisableWith;
}());
exports.default = DisableWith;

})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});