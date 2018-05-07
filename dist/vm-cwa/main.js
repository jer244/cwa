(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _new_company_new_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-company/new-company.component */ "./src/app/new-company/new-company.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pwreset_pwreset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pwreset/pwreset.component */ "./src/app/pwreset/pwreset.component.ts");
/* harmony import */ var _tc_tc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tc/tc.component */ "./src/app/tc/tc.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"] },
    { path: 'new/:email', component: _new_company_new_company_component__WEBPACK_IMPORTED_MODULE_3__["NewCompanyComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'pwreset', component: _pwreset_pwreset_component__WEBPACK_IMPORTED_MODULE_5__["PwresetComponent"] },
    { path: 'tc', component: _tc_tc_component__WEBPACK_IMPORTED_MODULE_6__["TcComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content-container {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- DISPLAY TOP BAR -->\n<cwa-top-bar></cwa-top-bar>\n<!-- DISPLAY MAIN CONTENT INSIDE CONTAINER -->\n<div class=\"main-content-container\">\n  <router-outlet></router-outlet>\n</div>  \n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cwa';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cwa-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/top-bar/top-bar.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _start_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./start/modal/modal.component */ "./src/app/start/modal/modal.component.ts");
/* harmony import */ var _start_user_exists_error_user_exists_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./start/user-exists-error/user-exists-error.component */ "./src/app/start/user-exists-error/user-exists-error.component.ts");
/* harmony import */ var _new_company_new_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-company/new-company.component */ "./src/app/new-company/new-company.component.ts");
/* harmony import */ var _new_company_company_exists_error_company_exists_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./new-company/company-exists-error/company-exists-error.component */ "./src/app/new-company/company-exists-error/company-exists-error.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pwreset_pwreset_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pwreset/pwreset.component */ "./src/app/pwreset/pwreset.component.ts");
/* harmony import */ var _tc_tc_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tc/tc.component */ "./src/app/tc/tc.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_8__["StartComponent"],
                _start_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"],
                _start_user_exists_error_user_exists_error_component__WEBPACK_IMPORTED_MODULE_10__["UserExistsErrorComponent"],
                _new_company_new_company_component__WEBPACK_IMPORTED_MODULE_11__["NewCompanyComponent"],
                _new_company_company_exists_error_company_exists_error_component__WEBPACK_IMPORTED_MODULE_12__["CompanyExistsErrorComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _pwreset_pwreset_component__WEBPACK_IMPORTED_MODULE_15__["PwresetComponent"],
                _tc_tc_component__WEBPACK_IMPORTED_MODULE_16__["TcComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"main-content-text\">\n        <h3>Dummy Login Link</h3>\n        <p>This is where you would login</p>\n    </div>\n    <a routerLink=\"/\" class=\"button content-btn\">HOME</a>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cwa-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/new-company/company-exists-error/company-exists-error.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/new-company/company-exists-error/company-exists-error.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.error-wrapper {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    top: -102px;\r\n    height: 100px;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 0;\r\n}\r\n\r\n.error-box {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100px;\r\n    width: 70%;\r\n    background: var(--error-red);\r\n    color: var(--main-light-color);\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    padding: 1em;\r\n}\r\n\r\n.error-box p {\r\n    font-weight: 100;\r\n    font-size: 0.8em;\r\n    padding: 0;\r\n    line-height: 150%;\r\n}\r\n\r\n.error-bubble {\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-top: 5px solid var(--error-red);\r\n    margin: 0 auto;\r\n}\r\n\r\n.error-link {\r\n    color: var(--main-light-color);\r\n    text-decoration: none;\r\n    font-weight: 700;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/new-company/company-exists-error/company-exists-error.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/new-company/company-exists-error/company-exists-error.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-wrapper\">\n  <div class=\"error-box\">\n    <p>That company looks like it already exists. Try to\n      <a routerLink=\"/\" class=\"error-link\">Find My Team</a> using your work email.</p>\n  </div>\n  <div class=\"error-bubble\"></div>\n</div>"

/***/ }),

/***/ "./src/app/new-company/company-exists-error/company-exists-error.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/new-company/company-exists-error/company-exists-error.component.ts ***!
  \************************************************************************************/
/*! exports provided: CompanyExistsErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyExistsErrorComponent", function() { return CompanyExistsErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyExistsErrorComponent = /** @class */ (function () {
    function CompanyExistsErrorComponent() {
    }
    CompanyExistsErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cwa-company-exists-error',
            template: __webpack_require__(/*! ./company-exists-error.component.html */ "./src/app/new-company/company-exists-error/company-exists-error.component.html"),
            styles: [__webpack_require__(/*! ./company-exists-error.component.css */ "./src/app/new-company/company-exists-error/company-exists-error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyExistsErrorComponent);
    return CompanyExistsErrorComponent;
}());



/***/ }),

/***/ "./src/app/new-company/new-company.component.css":
/*!*******************************************************!*\
  !*** ./src/app/new-company/new-company.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".domain-input {\r\n    border: none;\r\n}"

/***/ }),

/***/ "./src/app/new-company/new-company.component.html":
/*!********************************************************!*\
  !*** ./src/app/new-company/new-company.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  GET PERSONAL INFO -->\n\n<div *ngIf=\"getPersonalInfo\" class=\"main-content\">\n    <div class=\"main-content-text\">\n        <h3>Get started on Company</h3>\n        <p>Your email wasn't associated with an existing company. Fill out the information below to create a new one.</p>\n    </div>\n    <form #f=\"ngForm\" class=\"input-container\">\n        <input [(ngModel)]='firstName' id=\"first\" name=\"first\" type=\"text\" placeholder=\"First Name\" class=\"input-box\" required>\n        <input [(ngModel)]='lastName' id=\"last\" name=\"last\" type=\"text\" placeholder=\"Last Name\" class=\"input-box\" required>\n        <input [(ngModel)]='displayName' id=\"displayName\" name=\"displayName\" class=\"full-line-input input-box\" type=\"text\" placeholder=\"Display Name\">\n        <input [(ngModel)]='password' id=\"password\" name=\"password\" class=\"full-line-input input-box\" type=\"password\" placeholder=\"Password\" required>\n        <div class=\"input-wrapper full-line-input\">\n            <input [(ngModel)]='company' id='company' name=\"company\" class=\"input-box input-box-error\" type=\"text\" placeholder=\"Company Name\" [ngClass]=\"{'error-input-box': companyExists}\" required>\n            <cwa-company-exists-error *ngIf=\"companyExists\"></cwa-company-exists-error>\n        </div>\n    </form>\n    <a (click)=\"createUser()\" class=\"button content-btn\">SIGN UP</a>\n    <p class=\"footnote\">By selecting Sign Up, you agree to our\n        <a routerLink=\"/tc\">Terms & Conditions</a>\n    </p>\n</div>\n\n<!-- GET COMPANY INFO -->\n\n<div *ngIf=\"!getPersonalInfo\" class=\"main-content\">\n    <div class=\"main-content-text\">\n        <h3>Company sign up mode</h3>\n        <p>Anyone with a specified email domain can join your team. Otherwise, an owner or co-owner will have to invite all\n            team members.</p>\n    </div>\n    <div class=\"input-container-flex\">\n        <div class=\"radio-container\">\n            <input type=\"radio\" name=\"signup-mode\" id=\"open-mode\" [(ngModel)]=\"companyMode\" value=\"open\">\n            <label for=\"open-mode\">Any email from my domains</label>\n        </div>\n        <div class=\"tags-container\">\n            <div *ngFor=\"let domain of domains; index as i\" class=\"tag\">\n                <p class=\"tag-content\">{{domain}}</p>\n                <div class=\"round-close-button\" (click)=\"removeTag(i)\">&times;</div>\n            </div>\n            <input class=\"domain-input\" name=\"domain\" [(ngModel)]=\"domainValue\" (keyup.enter)=\"addTag()\">\n        </div>\n        <div class=\"radio-container\">\n            <input type=\"radio\" name=\"signup-mode\" id=\"invite-mode\" [(ngModel)]=\"companyMode\" value=\"invite\">\n            <label for=\"invite-mode\">Invite Only</label>\n        </div>\n    </div>\n    <a (click)=\"onSave()\" class=\"button content-btn\">DONE</a>\n</div>"

/***/ }),

/***/ "./src/app/new-company/new-company.component.ts":
/*!******************************************************!*\
  !*** ./src/app/new-company/new-company.component.ts ***!
  \******************************************************/
/*! exports provided: NewCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCompanyComponent", function() { return NewCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewCompanyComponent = /** @class */ (function () {
    function NewCompanyComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.domains = [];
        this.getPersonalInfo = true;
        this.companyExists = false;
        this.company = '';
        this.alias = '';
        this.firstName = '';
        this.lastName = '';
        this.displayName = '';
        this.password = '';
        this.email = '';
        this.domainValue = '';
        this.companyMode = '';
        this.email = route.snapshot.params['email'];
    }
    NewCompanyComponent.prototype.createUser = function () {
        var _this = this;
        var newUser = {
            firstName: this.firstName,
            lastName: this.lastName,
            displayName: this.displayName,
            email: this.email,
            password: this.password,
            company: this.company
        };
        this.userService.checkCompany(newUser.company)
            .subscribe(function (data) {
            if (data.companyExists) {
                _this.companyExists = true;
                return;
            }
            else {
                _this.userService.createUser(newUser)
                    .subscribe(function (data) {
                    alert("New User Created - " + JSON.stringify(data));
                    _this.getPersonalInfo = false;
                });
            }
        });
    };
    NewCompanyComponent.prototype.removeTag = function (index) {
        this.domains.splice(index, 1);
    };
    NewCompanyComponent.prototype.addTag = function () {
        this.domains.push(this.domainValue);
        this.domainValue = '';
    };
    //WHEN COMPANYMODE IS OPEN (AS OPPOSED TO INVITE ONLY), ADD DOMAINS FROM ALL TAGS
    NewCompanyComponent.prototype.onSave = function () {
        var _this = this;
        var counter = 0;
        //MAKE SURE MODE IS SELECTED
        if (this.companyMode == '') {
            alert('please select a mode');
            return;
        }
        else if (this.companyMode == 'invite') {
            alert('Company saved');
            this.reset();
        }
        else {
            this.domains.forEach(function (domain) {
                _this.userService.addDomain(domain, _this.company)
                    .subscribe(function () {
                    counter++;
                    console.log(counter);
                    if (counter == _this.domains.length) {
                        alert('Domains Saved');
                        _this.reset();
                    }
                });
            });
        }
    };
    //RESET VARIABLES AND NAVIGATE TO HOME PAGE
    NewCompanyComponent.prototype.reset = function () {
        this.company = '';
        this.alias = '';
        this.firstName = '';
        this.lastName = '';
        this.displayName = '';
        this.password = '';
        this.email = '';
        this.router.navigate(['/']);
    };
    NewCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cwa-new-company',
            template: __webpack_require__(/*! ./new-company.component.html */ "./src/app/new-company/new-company.component.html"),
            styles: [__webpack_require__(/*! ./new-company.component.css */ "./src/app/new-company/new-company.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewCompanyComponent);
    return NewCompanyComponent;
}());



/***/ }),

/***/ "./src/app/pwreset/pwreset.component.html":
/*!************************************************!*\
  !*** ./src/app/pwreset/pwreset.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"main-content-text\">\n        <h3>Dummy Password Reset Link</h3>\n        <p>This is where you would change your password</p>\n    </div>\n    <a routerLink=\"/\" class=\"button content-btn\">HOME</a>\n</div>"

/***/ }),

/***/ "./src/app/pwreset/pwreset.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pwreset/pwreset.component.ts ***!
  \**********************************************/
/*! exports provided: PwresetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PwresetComponent", function() { return PwresetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PwresetComponent = /** @class */ (function () {
    function PwresetComponent() {
    }
    PwresetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cwa-pwreset',
            template: __webpack_require__(/*! ./pwreset.component.html */ "./src/app/pwreset/pwreset.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PwresetComponent);
    return PwresetComponent;
}());



/***/ }),

/***/ "./src/app/start/modal/modal.component.css":
/*!*************************************************!*\
  !*** ./src/app/start/modal/modal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.modal-content {\r\n    position: relative;\r\n    height: 45vh;\r\n    width: 30vw;\r\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\r\n    color: var(--content-font-color);\r\n    text-align: center;\r\n    background-color: var(--main-light-color);\r\n    padding: 3em 2em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    border-radius: 3px;\r\n}\r\n\r\n.modal-content p {\r\n    line-height: 170%;\r\n}\r\n\r\n.email-pic {\r\n    background: var(--main-blue) URL(\"./assets/email.png\") no-repeat center;\r\n    background-size: 50%;\r\n    border-radius: 50%;\r\n    width: 40%;\r\n    padding-top: 40%;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n}\r\n\r\n.modal-close {\r\n    position: absolute;\r\n    right: 0;\r\n    top: -25px;\r\n    text-decoration: none;\r\n    color: var(--main-light-color);\r\n    margin: 3px;\r\n    font-weight: 600;\r\n    align-self: flex-end;\r\n    font-style: italic;\r\n}"

/***/ }),

/***/ "./src/app/start/modal/modal.component.html":
/*!**************************************************!*\
  !*** ./src/app/start/modal/modal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-container\">\n  <div class=\"modal-content\">\n    <a (click)=\"close.emit()\" class=\"modal-close\">CLOSE X</a>\n    <div class=\"email-pic\"></div>\n    <h3>That looks familiar</h3>\n    <p>That email looks like it's part of an existing company. Check your email for an invite to your company.</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/start/modal/modal.component.ts":
/*!************************************************!*\
  !*** ./src/app/start/modal/modal.component.ts ***!
  \************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        //TRIGGER CLOSE MODAL IN PARENT COMPONENT TO CONTROL PARENT COMPONENT STATE
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "close", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cwa-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/start/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/start/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/start/start.component.html":
/*!********************************************!*\
  !*** ./src/app/start/start.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START BY ASKING FOR EMAIL -->\n\n<div *ngIf=\"!showJoin\" class=\"main-content\">\n    <div class=\"main-content-text\">\n        <h3>Get started on Company</h3>\n        <p>Enter your work email</p>\n    </div>\n        <div class=\"input-wrapper\">\n            <input name=\"primaryEmail\" [ngModel]=\"email\" email #prmEmail=\"ngModel\" class=\"input-box\" [ngClass]=\"{'error-input-box': userExists}\" placeholder=\"name@company.com\" (keyup.enter)=\"(!prmEmail.errors?.email) ? onClick(prmEmail.value) : null\">\n            <cwa-user-exists-error *ngIf=\"userExists\"></cwa-user-exists-error>\n        </div>\n        <a [ngClass]=\"{'disabled': prmEmail.errors?.email}\" class=\"button content-btn\" (click)=\"onClick(prmEmail.value)\">NEXT</a>\n</div>\n\n<!-- SHOW MODAL IF USER ALREADY EXISTS -->\n<cwa-modal (close)=\"closeModal()\" *ngIf=\"displayModal\"></cwa-modal>\n\n<!-- SHOW PAGE FOR JOINING CURRENT COMPANY -->\n<div *ngIf=\"showJoin\" class=\"main-content\">\n    <div class=\"main-content-text\">\n        <h3>Join the Company team</h3>\n        <p>Your email is associated with an existing company. Fill out the information below to finish the setup.</p>\n    </div>\n    <form #f=\"ngForm\" class=\"input-container\">\n            <input [(ngModel)]= 'firstName' id=\"first\" name=\"first\" type=\"text\" placeholder=\"First Name\" class=\"input-box\" required>\n            <input [(ngModel)]= 'lastName' id=\"last\" name=\"last\" type=\"text\" placeholder=\"Last Name\" class=\"input-box\" required>\n            <input [(ngModel)]= 'displayName' id=\"displayName\" name=\"displayName\" class=\"full-line-input input-box\" type=\"text\" placeholder=\"Display Name\">\n            <input [(ngModel)]= 'password' id=\"password\" name=\"password\" class=\"full-line-input input-box\" type=\"password\" placeholder=\"Password\" required>\n        </form>\n        <a (click)=\"createUser()\" class=\"button content-btn\">SIGN UP</a>\n    <p class=\"footnote\">By selecting Sign Up, you agree to our\n        <a routerLink=\"/tc\">Terms & Conditions</a>\n    </p>\n</div>"

/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartComponent = /** @class */ (function () {
    function StartComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    //RESET VARIABLES ON PAGE LOAD
    StartComponent.prototype.ngOnInit = function () {
        this.displayModal = false;
        this.userExists = false;
        this.showJoin = false;
        this.company = '';
        this.alias = '';
        this.firstName = '';
        this.lastName = '';
        this.displayName = '';
        this.password = '';
        this.email = '';
    };
    //WHEN NEXT BUTTON PUSHED, CHECK IF EMAIL OR DOMAIN ARE IN USE
    StartComponent.prototype.onClick = function (email) {
        var _this = this;
        this.email = email;
        //CHECK IF EMAIL IS ALREADY IN USE
        this.userService.checkEmail(email)
            .subscribe(function (data) {
            if (data.userExists == true) {
                //EMAIL IN USE - THROW ERROR STATE
                _this.userExists = true;
                return;
            }
            if (data.companyExists == true) {
                //COMPANY ALREADY EXISTS - DIRECT TO ADD USER TO EXISTING COMPANY
                _this.company = data.company.parent;
                _this.alias = data.company.alias;
                _this.displayModal = true;
                return;
            }
            //IF EMAIL AND DOMAIN ARE NEW
            _this.router.navigate(["/new/" + _this.email]);
        });
        ;
    };
    //REMOVE MODAL FROM SCREEN AND SHOW FORM FOR NEW USER TO EXISTING COMPANY
    StartComponent.prototype.closeModal = function () {
        this.displayModal = false;
        this.showJoin = true;
        console.log(this.alias, this.company);
    };
    StartComponent.prototype.createUser = function () {
        var _this = this;
        //CONSTRUCT USER
        var newUser = {
            firstName: this.firstName,
            lastName: this.lastName,
            displayName: this.displayName,
            email: this.email,
            password: this.password,
            company: this.company
        };
        //SAVE USER AND RESET FORM
        this.userService.createUser(newUser)
            .subscribe(function (data) {
            alert("New User Created - " + JSON.stringify(data));
            _this.showJoin = false;
            _this.company = '';
            _this.alias = '';
            _this.firstName = '';
            _this.lastName = '';
            _this.displayName = '';
            _this.password = '';
            _this.email = '';
        });
    };
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cwa-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/start/start.component.html")
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/start/user-exists-error/user-exists-error.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/start/user-exists-error/user-exists-error.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.error-wrapper {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    top: -102px;\r\n    height: 100px;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 0;\r\n}\r\n\r\n.error-box {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100px;\r\n    width: 70%;\r\n    background: var(--error-red);\r\n    color: var(--main-light-color);\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    padding: 1em;\r\n}\r\n\r\n.error-box p {\r\n    font-weight: 100;\r\n    font-size: 0.8em;\r\n    padding: 0;\r\n    line-height: 150%;\r\n}\r\n\r\n.error-bubble {\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-top: 5px solid var(--error-red);\r\n    margin: 0 auto;\r\n}\r\n\r\n.error-link {\r\n    color: var(--main-light-color);\r\n    text-decoration: none;\r\n    font-weight: 700;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/start/user-exists-error/user-exists-error.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/start/user-exists-error/user-exists-error.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-wrapper\">\n  <div class=\"error-box\">\n    <p>That email looks like it's already taken. Do you want to\n      <a routerLink=\"/login\" class=\"error-link\">login</a> or\n      <a routerLink=\"/pwreset\" class=\"error-link\">reset your password</a>?</p>\n  </div>\n  <div class=\"error-bubble\"></div>\n</div>"

/***/ }),

/***/ "./src/app/start/user-exists-error/user-exists-error.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/start/user-exists-error/user-exists-error.component.ts ***!
  \************************************************************************/
/*! exports provided: UserExistsErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExistsErrorComponent", function() { return UserExistsErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserExistsErrorComponent = /** @class */ (function () {
    function UserExistsErrorComponent() {
    }
    UserExistsErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cwa-user-exists-error',
            template: __webpack_require__(/*! ./user-exists-error.component.html */ "./src/app/start/user-exists-error/user-exists-error.component.html"),
            styles: [__webpack_require__(/*! ./user-exists-error.component.css */ "./src/app/start/user-exists-error/user-exists-error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserExistsErrorComponent);
    return UserExistsErrorComponent;
}());



/***/ }),

/***/ "./src/app/tc/tc.component.html":
/*!**************************************!*\
  !*** ./src/app/tc/tc.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"main-content-text\">\n        <h3>Legal Ipsum</h3>\n        <p>In other words, you may use, reproduce, display, perform, sublicense and distribute the Program originate from and\n            are distributed by the Recipient, this Agreement or Distributor's own license agreement, such license applies\n            only to the extent it does not give you the right to change the software accompanying this Agreement as released\n            by, including source code, documentation source, and configuration files for the physical act of running the\n            Standard Version, and of any installation facilities provided by the Copyright Holder. This license has been\n            modified. If you obtain such knowledge after the cause of action arose.</p>\n    </div>\n    <a routerLink=\"/\" class=\"button content-btn\">HOME</a>\n</div>"

/***/ }),

/***/ "./src/app/tc/tc.component.ts":
/*!************************************!*\
  !*** ./src/app/tc/tc.component.ts ***!
  \************************************/
/*! exports provided: TcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TcComponent", function() { return TcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TcComponent = /** @class */ (function () {
    function TcComponent() {
    }
    TcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cwa-tc',
            template: __webpack_require__(/*! ./tc.component.html */ "./src/app/tc/tc.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TcComponent);
    return TcComponent;
}());



/***/ }),

/***/ "./src/app/top-bar/top-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-bar {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background: rgba(0, 0, 0, 0);\r\n    height: 4.5em;\r\n    padding: 1em;\r\n}\r\n.logo {\r\n    background: URL(\"../assets/logo.png\") no-repeat center;\r\n    background-size: 100% auto;\r\n    height: 50px;\r\n    width: 50px;\r\n}"

/***/ }),

/***/ "./src/app/top-bar/top-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/top-bar/top-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-bar\">\n  <a (click)=\"refresh()\" class=\"logo\"></a>\n  <div class=\"btn-container\">\n    <p>Already have an account?</p>\n    <a routerLink=\"/login\" class=\"button login-btn\">LOG IN</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/top-bar/top-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopBarComponent = /** @class */ (function () {
    function TopBarComponent(router) {
        this.router = router;
    }
    //LINK ICON TO NAVIGATE TO HOME PAGE
    TopBarComponent.prototype.refresh = function () {
        this.router.navigate(['/']);
    };
    TopBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cwa-top-bar',
            template: __webpack_require__(/*! ./top-bar.component.html */ "./src/app/top-bar/top-bar.component.html"),
            styles: [__webpack_require__(/*! ./top-bar.component.css */ "./src/app/top-bar/top-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
    }
    /*
    *   USE SERVICE TO MAKE HTTP CALLS TO API
    */
    UserService.prototype.checkEmail = function (email) {
        return this.http.get("/api/checkuser/" + email);
    };
    UserService.prototype.checkCompany = function (company) {
        return this.http.get("/api/checkcompany/" + company);
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post('/api/newUser', user);
    };
    UserService.prototype.addDomain = function (domain, parent) {
        var alias = {
            domain: domain,
            parent: parent
        };
        return this.http.post('/api/addDomain', alias);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hurle\OneDrive\WebDev\vm-cwa\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map