webpackJsonp(["main"],{

/***/ "../../../../../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- input -->\n\n<h2 class=\"mt-5 mb-5\">\n  Awesome form.\n  <small class=\"\"> ng2-trim-directive</small>\n  <a href=\"https://www.npmjs.com/package/ng2-trim-directive\">\n    <img src=\"https://img.shields.io/npm/v/ng2-trim-directive.svg\" alt=\"\">\n  </a>\n</h2>\n\n<form novalidate [formGroup]=\"exampleForm\" class=\"mx-auto\">\n  <!--text-->\n  <div class=\"form-group\">\n    <label>\n      Text.\n      <small>\n        <i>status: {{ exampleForm.controls.text.status}}</i>\n      </small>\n    </label>\n    <input formControlName=\"text\" placeholder=\"text\" class=\"form-control\" trim=\"blur\"/>\n  </div>\n\n  <!--email-->\n  <div class=\"form-group\">\n    <label>\n      Email.\n      <small>\n        <i>status: {{ exampleForm.controls.email.status}}</i>\n      </small>\n    </label>\n    <input formControlName=\"email\" placeholder=\"email@example.com\" type=\"email\" class=\"form-control\" trim/>\n  </div>\n\n  <!-- number -->\n  <div class=\"form-group\">\n    <label>\n      Number\n      <small>\n        <i>status: {{ exampleForm.controls.number.status}}</i>\n      </small>\n    </label>\n    <input formControlName=\"number\" placeholder=\"0\" type=\"number\" class=\"form-control\" trim=\"blur\"/>\n  </div>\n\n  <!-- url -->\n  <div class=\"form-group\">\n    <label>\n      URL\n      <small>\n        <i>status: {{ exampleForm.controls.url.status}}</i>\n      </small>\n    </label>\n    <input formControlName=\"url\" placeholder=\"www.github.com\" type=\"url\" class=\"form-control\" trim=\"blur\"/>\n  </div>\n\n  <!--textarea-->\n  <div class=\"form-group\">\n    <label>\n      Textarea.(maxLength=10)\n      <small>\n        <i>status: {{ exampleForm.controls.textarea.status}}</i>\n      </small>\n    </label>\n    <textarea formControlName=\"textarea\" placeholder=\"textarea\" class=\"form-control\" trim=\"blur\"></textarea>\n  </div>\n  <hr/>\n  <pre>\n    <p> Form values {{ exampleForm.value | json }}</p>\n    <p> Form status {{ exampleForm.status | json }}</p>\n  </pre>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var AppComponent = (function () {
    function AppComponent(fb) {
        this.fb = fb;
        this.exampleForm = this.fb.group({
            'text': ['', forms_1.Validators.required],
            'email': ['', [forms_1.Validators.required, forms_1.Validators.email]],
            'number': ['', [forms_1.Validators.required]],
            'url': ['', [forms_1.Validators.required]],
            'textarea': ['', [forms_1.Validators.required, forms_1.Validators.maxLength(10)]]
        });
    }
    AppComponent.prototype.onSubmit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            'selector': 'in-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            'styles': ['pre { background-color: whitesmoke;}'],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __param(0, core_1.Inject(forms_1.FormBuilder))
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var ng2_trim_directive_1 = __webpack_require__("../../../../ng2-trim-directive/dist/index.js");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                ng2_trim_directive_1.InputTrimModule,
                forms_1.ReactiveFormsModule,
            ],
            declarations: [
                app_component_1.AppComponent,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);