(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _form_data_form_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-data/form-data.component */ "./src/app/form-data/form-data.component.ts");
/* harmony import */ var _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgetpass/forgetpass.component */ "./src/app/forgetpass/forgetpass.component.ts");
/* harmony import */ var _resetpass_resetpass_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resetpass/resetpass.component */ "./src/app/resetpass/resetpass.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");











const routes = [{ path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'forgetpass', component: _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPassComponent"] },
    { path: 'resetpass', component: _resetpass_resetpass_component__WEBPACK_IMPORTED_MODULE_6__["ResetpassComponent"] },
    { path: 'FormData', component: _form_data_form_data_component__WEBPACK_IMPORTED_MODULE_4__["FormDataComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'result', component: _result_result_component__WEBPACK_IMPORTED_MODULE_7__["ResultComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponents = [_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.url = "http://localhost:3000/";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _form_data_form_data_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form-data/form-data.component */ "./src/app/form-data/form-data.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forgetpass/forgetpass.component */ "./src/app/forgetpass/forgetpass.component.ts");
/* harmony import */ var _resetpass_resetpass_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./resetpass/resetpass.component */ "./src/app/resetpass/resetpass.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
        _auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["TokenInterceptorService"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            // MatFormField,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_16__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _form_data_form_data_component__WEBPACK_IMPORTED_MODULE_14__["FormDataComponent"],
        _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_19__["ForgetPassComponent"],
        _resetpass_resetpass_component__WEBPACK_IMPORTED_MODULE_20__["ResetpassComponent"],
        _result_result_component__WEBPACK_IMPORTED_MODULE_21__["ResultComponent"]
        // TestComponent
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        // MatFormField,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_16__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _form_data_form_data_component__WEBPACK_IMPORTED_MODULE_14__["FormDataComponent"],
                    _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_19__["ForgetPassComponent"],
                    _resetpass_resetpass_component__WEBPACK_IMPORTED_MODULE_20__["ResetpassComponent"],
                    _result_result_component__WEBPACK_IMPORTED_MODULE_21__["ResultComponent"]
                    // TestComponent
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    // MatFormField,
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_16__["MaterialModule"]
                ],
                providers: [
                    _auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
                    _auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                        useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["TokenInterceptorService"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    canActivate() {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthService {
    constructor(http, _router) {
        this.http = http;
        this._router = _router;
        this.loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
        this.baseUrl = "http://localhost:3000";
        //public baseUrl="https://hallsback.eu-gb.mybluemix.net"
        this._loginUrl = this.baseUrl + "/user/login";
        this._signUpUrl = this.baseUrl + "/user/signup";
        this._verifyUrl = this.baseUrl + "/user/forgetPassword/";
        this._resetPassUrl = this.baseUrl + "/user/resetPassword";
        this._isMailExistUrl = this.baseUrl + "/user/mailExist";
    }
    loginUser(user) {
        console.log(user);
        // console.log(rememberMe)
        return this.http.post(this._loginUrl, user);
    }
    setLoggedIn(value) {
        this.loggedInStatus = value;
        localStorage.setItem('loggedIn', 'true');
    }
    get isLoggedIn() {
        return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
    }
    SignUp(user) {
        return this.http.post(this._signUpUrl, {
            name: user.name,
            email: user.email,
            password: user.password
        });
    }
    forgetPassword(user) {
        const url = this._verifyUrl + user.email;
        console.log(url);
        return this.http.get(url);
    }
    resetPassword(user, id) {
        console.log(id);
        const query = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: "_id=`${id}`" }) };
        return this.http.post(this._resetPassUrl, {
            newPassword: user.password,
            confirmedPassword: user.Repassword
        }, { params: { id: id } });
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    getToken() {
        console.log("tokennnnnn   " + localStorage.getItem('token'));
        return localStorage.getItem('token');
    }
    logOut() {
        localStorage.removeItem('token');
        this._router.navigate(['']);
    }
    isMailExist(mail) {
        console.log("in auth");
        console.log(mail);
        return this.http.get(this._isMailExistUrl + "/" + mail);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/forgetpass/forgetpass.component.ts":
/*!****************************************************!*\
  !*** ./src/app/forgetpass/forgetpass.component.ts ***!
  \****************************************************/
/*! exports provided: ForgetPassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPassComponent", function() { return ForgetPassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _signup_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../signup/validator */ "./src/app/signup/validator.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ForgetPassComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required and it should be an email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetPassComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This email is invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetPassComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " the Verificaton mail has been sent to your inbox ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ForgetPassComponent {
    constructor(fb, _auth) {
        this.fb = fb;
        this._auth = _auth;
        this.isValidEmail = true;
        this.mailSent = false;
        this.rForm = fb.group({
            'email': ['', _signup_validator__WEBPACK_IMPORTED_MODULE_1__["emailValidator"]],
        });
    }
    ngOnInit() {
    }
    focusIn(event) {
        this.isValidEmail = true;
    }
    Submit(data) {
        this._auth.forgetPassword(data).subscribe(res => {
            this.mailSent = true;
        }, err => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    this.isValidEmail = false;
                }
            }
        });
    }
}
ForgetPassComponent.ɵfac = function ForgetPassComponent_Factory(t) { return new (t || ForgetPassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
ForgetPassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetPassComponent, selectors: [["app-forgetpass"]], decls: 16, vars: 5, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css"], [3, "formGroup", "ngSubmit"], [1, "form-container"], [1, "row", "columns"], ["src", "../../assets/images/halls.png", "alt", "halls"], ["type", "text", "placeholder", "Enter your email", "formControlName", "email", 3, "focus"], ["class", "alert", 4, "ngIf"], ["class", "alert invalidEmail", 4, "ngIf"], ["type", "submit", "value", "Send Verificaton mail", 1, "button", "expanded", 3, "disabled"], ["class", "alert mailSent", 4, "ngIf"], [1, "alert"], [1, "alert", "invalidEmail"], [1, "alert", "mailSent"]], template: function ForgetPassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgetPassComponent_Template_form_ngSubmit_1_listener() { return ctx.Submit(ctx.rForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Forget Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ForgetPassComponent_Template_input_focus_9_listener($event) { return ctx.focusIn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ForgetPassComponent_div_10_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ForgetPassComponent_div_11_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Please Open your email to reset the password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ForgetPassComponent_div_15_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.rForm.controls["email"].valid && ctx.rForm.controls["email"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isValidEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.rForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mailSent);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".sign-up-form[_ngcontent-%COMP%]\n{\n    width: 400px;\n    box-shadow: 0 0 3px rgba(0, 0,0, 3);\n    background: #fff;\n    padding: 20px;\n    margin:8px auto;\n    text-align: center;\n    border: #869CB8;\n}\n.form-container[_ngcontent-%COMP%] {\n    display:block;\n    width:530px;\n    padding:2em;\n    margin: 2em auto;\n    background:#fff;\n    background-position: center;\n    border: #fff;\n}\n.alert[_ngcontent-%COMP%] {\n    background: #f2edda;\n    padding: 7px;\n    font-size: .9em;\n    margin-bottom: 20px;\n    display: inline-block;\n    animation: 2s alertAnim forwards;\n}\nlabel[_ngcontent-%COMP%]{\n    color:#2C3C5B;\n    font-weight:bold;\n}\ninput[_ngcontent-%COMP%]{\n    border-radius: 20px;\n    font-size: small;\n}\n.button[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n    color:#2C3C5B;\n    background-color:#f5f5f5;\n    font-weight: bold;\n    width:50%;\n    padding:10px;\n    border-radius: 20px;\n    font-size: 15px;\n    border:none;\n    outline: none;\n    cursor: pointer;\n}\n.invalidEmail[_ngcontent-%COMP%]{\n    color: red;\n    font-size: medium;\n    font-weight: bold;\n  }\n.mailSent[_ngcontent-%COMP%]{\n      color:green;\n      font-size: medium;\n      font-weight: bold;\n  }\np[_ngcontent-%COMP%]{\n    color:#2C3C5B;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-weight: bold;\n  }\nh1[_ngcontent-%COMP%] {\n    color: #0AC5A8;\n    margin-bottom: 2rem;\n    font-weight:bold;\n    font-family:'Muli';\n    font-size: 2em;\n    text-align: center;\n}\nimg[_ngcontent-%COMP%]{\n    width:70%; \n    -webkit-text-emphasis: center; \n            text-emphasis: center;\n }\n@keyframes alertAnim {\n    from {\n        opacity:0;\n        transform: translateY(-20px);\n    }\n    to {\n        opacity:1;\n        transform: translateY(0);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0cGFzcy9mb3JnZXRwYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNBO01BQ0ksV0FBVztNQUNYLGlCQUFpQjtNQUNqQixpQkFBaUI7RUFDckI7QUFDQTtJQUNFLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsaUJBQWlCO0VBQ25CO0FBQ0Y7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksU0FBUztJQUNULDZCQUFxQjtZQUFyQixxQkFBcUI7Q0FDeEI7QUFFRDtJQUNJO1FBQ0ksU0FBUztRQUNULDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksU0FBUztRQUNULHdCQUF3QjtJQUM1QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZm9yZ2V0cGFzcy9mb3JnZXRwYXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi11cC1mb3JtXG57XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLDAsIDMpO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46OHB4IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogIzg2OUNCODtcbn1cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICB3aWR0aDo1MzBweDtcbiAgICBwYWRkaW5nOjJlbTtcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAjZmZmO1xufVxuXG4uYWxlcnQge1xuICAgIGJhY2tncm91bmQ6ICNmMmVkZGE7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBhbmltYXRpb246IDJzIGFsZXJ0QW5pbSBmb3J3YXJkcztcbn1cblxubGFiZWx7XG4gICAgY29sb3I6IzJDM0M1QjtcbiAgICBmb250LXdlaWdodDpib2xkO1xufVxuaW5wdXR7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuLmJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBjb2xvcjojMkMzQzVCO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDo1MCU7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGJvcmRlcjpub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmludmFsaWRFbWFpbHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5tYWlsU2VudHtcbiAgICAgIGNvbG9yOmdyZWVuO1xuICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBwe1xuICAgIGNvbG9yOiMyQzNDNUI7XG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5oMSB7XG4gICAgY29sb3I6ICMwQUM1QTg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIGZvbnQtZmFtaWx5OidNdWxpJztcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pbWd7XG4gICAgd2lkdGg6NzAlOyBcbiAgICB0ZXh0LWVtcGhhc2lzOiBjZW50ZXI7XG4gfVxuXG5Aa2V5ZnJhbWVzIGFsZXJ0QW5pbSB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetPassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgetpass',
                templateUrl: './forgetpass.component.html',
                styleUrls: ['./forgetpass.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/form-data/form-data.component.ts":
/*!**************************************************!*\
  !*** ./src/app/form-data/form-data.component.ts ***!
  \**************************************************/
/*! exports provided: FormDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataComponent", function() { return FormDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validators */ "./src/app/form-data/validators.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");












function FormDataComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.titleAlert, " ");
} }
function FormDataComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.titleAlert, " ");
} }
function FormDataComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.titleAlert, " ");
} }
function FormDataComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.titleAlert, " ");
} }
function FormDataComponent_div_52_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.titleAlert, " ");
} }
function FormDataComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "please enter the width of bench in the centimeters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FormDataComponent_div_52_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.checkValue(); })("ngModelChange", function FormDataComponent_div_52_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.widBench = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormDataComponent_div_52_div_6_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.widBench);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.validBench && ctx_r5.myForm.controls["isBenchClicked"].touched);
} }
function FormDataComponent_div_65_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.titleAlert, " ");
} }
function FormDataComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "please enter after how many columns appears the gap");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FormDataComponent_div_65_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.checkValueGap(); })("ngModelChange", function FormDataComponent_div_65_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.numGap = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormDataComponent_div_65_div_6_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.numGap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.validGap && ctx_r7.myForm.controls["isGapClicked"].touched);
} }
class FormDataComponent {
    constructor(http, fb, _authService, router) {
        this.http = http;
        this.fb = fb;
        this._authService = _authService;
        this.router = router;
        this.showhidepregnant = true;
        this.titleAlert = "This field is required and should be a positive number";
        this.message = "please enter a positive number";
        this.isBench = false;
        this.isGap = false;
        this.validBench = true;
        this.validGap = true;
    }
    ngOnInit() {
        this.myForm = this.fb.group({
            rowsCnt: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators__WEBPACK_IMPORTED_MODULE_2__["numValidator"]]],
            colsCnt: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators__WEBPACK_IMPORTED_MODULE_2__["numValidator"]]],
            lenChair: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators__WEBPACK_IMPORTED_MODULE_2__["numValidator"]]],
            widChair: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators__WEBPACK_IMPORTED_MODULE_2__["numValidator"]]],
            benchRadio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators__WEBPACK_IMPORTED_MODULE_2__["numValidator"]]],
            gapRadio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators__WEBPACK_IMPORTED_MODULE_2__["numValidator"]]],
            isBenchClicked: [''],
            isGapClicked: [''],
        });
        this.myForm.valueChanges.subscribe(console.log);
    }
    submit(data) {
        console.log(data);
        this.http.get(this._authService.baseUrl + '/FormData')
            .subscribe(data => {
            console.log("Response\n" + data.message + "\n" + data.token);
            console.log("Should be done");
            this.router.navigate(['/result']);
        }, err => console.log(err));
        return;
    }
    check(value) {
        if (value == "yes") {
            this.isBench = true;
            this.checkValue();
        }
        else {
            this.isBench = false;
            this.validBench = true;
        }
    }
    checkValue() {
        if (this.widBench >= 1) {
            this.validBench = true;
        }
        else {
            this.validBench = false;
        }
    }
    checkGap(value) {
        if (value == "yes") {
            this.isGap = true;
            this.checkValueGap();
        }
        else {
            this.isGap = false;
            this.validGap = true;
        }
    }
    checkValueGap() {
        if (this.numGap >= 1) {
            this.validGap = true;
        }
        else {
            this.validGap = false;
        }
    }
}
FormDataComponent.ɵfac = function FormDataComponent_Factory(t) { return new (t || FormDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
FormDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormDataComponent, selectors: [["app-form-data"]], decls: 67, vars: 12, consts: [[1, "topnav"], [3, "click"], ["href", ""], ["href", "#home", 1, "active"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css"], [3, "formGroup", "ngSubmit"], [1, "form-container"], [1, "title"], ["for", ""], ["matInput", "", "formControlName", "rowsCnt", 3, "placeholder"], ["class", "alert", 4, "ngIf"], ["matInput", "", "formControlName", "colsCnt", 3, "placeholder"], ["for", "", 1, "chair"], ["matInput", "", "formControlName", "lenChair", 3, "placeholder"], ["matInput", "", "formControlName", "widChair", 3, "placeholder"], ["formControlName", "benchRadio"], ["id", "yesBench", "value", "yes", 3, "change"], ["register", ""], ["id", "noBench", "value", "no", 3, "change"], [4, "ngIf"], ["formControlName", "gapRadio"], ["value", "yes", 3, "change"], ["gapExist", ""], ["value", "no", 3, "change"], ["type", "submit", "value", "Submit", 1, "button", "expanded", 3, "disabled"], [1, "alert"], ["matInput", "", "placeholder", "width of bench", "formControlName", "isBenchClicked", 3, "ngModel", "keyup", "ngModelChange"], ["matInput", "", "placeholder", "number of columns", "formControlName", "isGapClicked", 3, "ngModel", "keyup", "ngModelChange"]], template: function FormDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormDataComponent_Template_a_click_2_listener() { return ctx._authService.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormDataComponent_Template_form_ngSubmit_11_listener() { return ctx.submit(ctx.myForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Hall Data Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Enter count of rows in the hall ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FormDataComponent_div_20_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Enter count of columns in the hall ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FormDataComponent_div_25_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Chair dimensions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Enter length of the chair in the centimeters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, FormDataComponent_div_36_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Enter width of the chair in the centimeters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, FormDataComponent_div_41_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Is there a bench infront of chairs?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-radio-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-radio-button", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormDataComponent_Template_mat_radio_button_change_46_listener($event) { return ctx.check($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-radio-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormDataComponent_Template_mat_radio_button_change_50_listener($event) { return ctx.check($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, FormDataComponent_div_52_Template, 7, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Is there a gap between columns?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-radio-group", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-radio-button", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormDataComponent_Template_mat_radio_button_change_59_listener($event) { return ctx.checkGap($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-radio-button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormDataComponent_Template_mat_radio_button_change_63_listener($event) { return ctx.checkGap($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, FormDataComponent_div_65_Template, 7, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.myForm.controls["rowsCnt"].valid && ctx.myForm.controls["rowsCnt"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.myForm.controls["colsCnt"].valid && ctx.myForm.controls["colsCnt"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.myForm.controls["lenChair"].valid && ctx.myForm.controls["lenChair"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.myForm.controls["widChair"].valid && ctx.myForm.controls["widChair"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.myForm.valid || !ctx.validBench || !ctx.validGap);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioButton"]], styles: ["header[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.topnav[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: #2C3C5B;\n}\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: right;\n  color: #f5f5f5;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n}\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n  color:#2C3C5B;\n}\n\n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #ddd;\n  color: #2C3C5B;\n}\n\nForm[_ngcontent-%COMP%]{\n}\n\n.chair[_ngcontent-%COMP%]{\n  font-size: 1.8em;\n  color: #0AC5A8;\n  text-align: center;\n  \n}\n\n.sign-up-form[_ngcontent-%COMP%]\n{\n    width: 400px;\n    box-shadow: 0 0 3px rgba(0, 0,0, 3);\n    background: #fff;\n    padding: 20px;\n    margin:8px auto;\n    text-align: center;\n    border: #869CB8;\n}\n\n.form-container[_ngcontent-%COMP%] {\n    display:block;\n    width:530px;\n    padding:2em;\n    margin: 2em auto;\n    background:#fff;\n    background-position: center;\n     border: #fff; \n}\n\n.alert[_ngcontent-%COMP%] {\n    background: #f2edda;\n    padding: 7px;\n    font-size: .9em;\n    margin-bottom: 20px;\n    display:inherit;\n    \n    animation: 2s alertAnim forwards;\n}\n\n.title[_ngcontent-%COMP%]{\n  font-size: 2.5em;\n  color:#0AC5A8;\n  text-align: center;\n}\n\nlabel[_ngcontent-%COMP%]{\n    color:#2C3C5B;\n    \n    font-size:medium ;\n}\n\ninput[_ngcontent-%COMP%]{\n    \n    font-size: small;\n}\n\n.button[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n    color:#2C3C5B;\n    background-color:#f5f5f5;\n    font-weight: bold;\n    width:30%;\n    padding:10px;\n    border-radius: 20px;\n    font-size: 15px;\n    border:none;\n    outline: none;\n    cursor: pointer;\n}\n\nh1[_ngcontent-%COMP%] {\n    color: #0AC5A8;\n    margin-bottom: 2rem;\n    font-weight:bold;\n    font-family:'Muli';\n    font-size: 2em;\n    text-align: center;\n}\n\nimg[_ngcontent-%COMP%]{\n    width:70%; \n    -webkit-text-emphasis: center; \n            text-emphasis: center;\n }\n\n@keyframes alertAnim {\n    from {\n        opacity:0;\n        transform: translateY(-20px);\n    }\n    to {\n        opacity:1;\n        transform: translateY(0);\n    }\n}\n\nmat-radio-button[_ngcontent-%COMP%]{\n  font-size:small;\n  color:#0AC5A8\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1kYXRhL2Zvcm0tZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBQ0E7QUFDQTs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCOztBQUVwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiwyQkFBMkI7S0FDMUIsWUFBWTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQzs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUNBO0lBQ0ksYUFBYTs7SUFFYixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFNBQVM7SUFDVCw2QkFBcUI7WUFBckIscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0k7UUFDSSxTQUFTO1FBQ1QsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxTQUFTO1FBQ1Qsd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7RUFDRSxlQUFlO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tZGF0YS9mb3JtLWRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi50b3BuYXYge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzQzVCO1xufVxuXG4udG9wbmF2IGEge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjZjVmNWY1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi50b3BuYXYgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGNvbG9yOiMyQzNDNUI7XG59XG5cbi50b3BuYXYgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogIzJDM0M1Qjtcbn1cbkZvcm17XG59XG5cblxuLmNoYWlye1xuICBmb250LXNpemU6IDEuOGVtO1xuICBjb2xvcjogIzBBQzVBODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbn1cblxuLnNpZ24tdXAtZm9ybVxue1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwwLCAzKTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOjhweCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6ICM4NjlDQjg7XG59XG4uZm9ybS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgd2lkdGg6NTMwcHg7XG4gICAgcGFkZGluZzoyZW07XG4gICAgbWFyZ2luOiAyZW0gYXV0bztcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICBib3JkZXI6ICNmZmY7IFxufVxuXG4uYWxlcnQge1xuICAgIGJhY2tncm91bmQ6ICNmMmVkZGE7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6aW5oZXJpdDtcbiAgICAvKiB3aWR0aDogMjUwcHg7ICovXG4gICAgYW5pbWF0aW9uOiAycyBhbGVydEFuaW0gZm9yd2FyZHM7XG59XG4udGl0bGV7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGNvbG9yOiMwQUM1QTg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmxhYmVse1xuICAgIGNvbG9yOiMyQzNDNUI7XG4gICAgXG4gICAgZm9udC1zaXplOm1lZGl1bSA7XG59XG5pbnB1dHtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAyMHB4OyAqL1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG4uYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIGNvbG9yOiMyQzNDNUI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOjMwJTtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oMSB7XG4gICAgY29sb3I6ICMwQUM1QTg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIGZvbnQtZmFtaWx5OidNdWxpJztcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pbWd7XG4gICAgd2lkdGg6NzAlOyBcbiAgICB0ZXh0LWVtcGhhc2lzOiBjZW50ZXI7XG4gfVxuXG5Aa2V5ZnJhbWVzIGFsZXJ0QW5pbSB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG5cbm1hdC1yYWRpby1idXR0b257XG4gIGZvbnQtc2l6ZTpzbWFsbDtcbiAgY29sb3I6IzBBQzVBOFxufVxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-data',
                templateUrl: './form-data.component.html',
                styleUrls: ['./form-data.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/form-data/validators.ts":
/*!*****************************************!*\
  !*** ./src/app/form-data/validators.ts ***!
  \*****************************************/
/*! exports provided: numValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numValidator", function() { return numValidator; });
function numValidator(control) {
    if (this.isBench) {
        if (control.value == null || control.value == undefined) {
            if (control.value <= 0) {
                return {
                    isError: true
                };
            }
        }
    }
    return null;
}


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function HomeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.titleAlert, " ");
} }
function HomeComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.titleAlert, " ");
} }
function HomeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " this password is invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(_auth, http, appComponent, fb, router) {
        this._auth = _auth;
        this.http = http;
        this.appComponent = appComponent;
        this.fb = fb;
        this.router = router;
        this.titleAlert = "This field is required";
        this.getToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLogged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loggedIn = false;
        this.token = "";
        this.isValidPass = true;
        this.showPassword = false;
        this.rForm = fb.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'rememberMe': ['']
        });
    }
    ngOnInit() {
    }
    focusIn(event) {
        console.log(event.detail);
        this.isValidPass = true;
    }
    SignIn(data) {
        const user = {
            email: data.email,
            password: data.password
        };
        this._auth.loginUser(user).subscribe(res => {
            console.log(res);
            localStorage.setItem('token', res.token);
            this.router.navigate(['/FormData']);
        }, err => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    this.isValidPass = false;
                }
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], outputs: { getToken: "getToken", isLogged: "isLogged" }, decls: 38, vars: 5, consts: [[1, "container"], [1, "split", "left"], [3, "formGroup", "ngSubmit"], [1, "leftHeader"], ["type", "text", "name", "email", "placeholder", "Enter your email", "formControlName", "email", 1, "inputData", "email"], ["class", "alert", 4, "ngIf"], ["type", "password", "name", "password", "placeholder", "Enter your Password", "formControlName", "password", 1, "inputData", "password", 3, "focus"], ["class", "alert invalidPassword", 4, "ngIf"], ["routerLink", "/forgetpass", 1, "forgetPass"], ["id", "rememberMe", "type", "checkbox"], ["type", "submit", "value", "Sign In", 1, "leftBtn", 3, "disabled"], ["routerLink", "/signup", 1, "createAccount"], [1, "split", "right"], [1, "rightHeader"], [1, "About"], [1, "alert"], [1, "alert", "invalidPassword"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_2_listener() { return ctx.SignIn(ctx.rForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function HomeComponent_Template_input_focus_7_listener($event) { return ctx.focusIn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_div_9_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Forgot Your Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Create an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Welcome !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "We are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "H a l l s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " and we believe we have to change a thing for the current ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "panadmeic covid-19,So we set our website to keep people safe by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "guranteeing the social distance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Enter the image of you to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "H a l l s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " and we will distribute it Give it a try ;)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.rForm.controls["email"].valid && ctx.rForm.controls["email"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.rForm.controls["password"].valid && ctx.rForm.controls["password"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isValidPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.rForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["[_ngcontent-%COMP%]:root {\n    --container-bg-color:black;\n    --left-bg-color: #f5f5f5;\n    --left-button-hover-color: rgba(92, 92, 92, 0.3);;\n    --right-bg-color: rgba(230, 215, 215, 0.815);\n    --right-button-hover-color: rgba(92, 92, 92, 0.3);\n    --hover-width: 65%;\n    --other-width: 35%;\n    --speed: 1000ms;\n  }\n  \n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n    padding:0;\n    margin:0;\n    font-family: Charcoal;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n  }\n  \n  .leftHeader[_ngcontent-%COMP%]{\n    font-size: 3rem;\n    color:#2C3C5B;\n    position: absolute;\n    left: 50%;\n    top: 15%;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    transform: translateX(-50%);\n    white-space: nowrap;\n\n  }\n  \n  .rightHeader[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    font-family: Cambria;\n    color:black;\n    position: absolute;\n    left: 25%;\n    top: 15%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    font-weight: bold;\n  }\n  \n  .About[_ngcontent-%COMP%]{\n    font-size:1.2rem;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    top:35%;\n    left:14%;\n    position: relative;\n    columns: #000000;;\n  \n  }\n  \n  span[_ngcontent-%COMP%]{\n    color:#2C3C5B;\n    font-size: 1.2rem;\n    margin-bottom: 10px;\n    font-family:  Tahoma, Geneva, Verdana, sans-serif;\n  }\n  \n  .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color:#2C3C5B\n  }\n  \n  .button[_ngcontent-%COMP%]{\n    display: block;\n    position: absolute;\n    left: 70%;\n    top: 65%;\n    height: 2.5rem;\n    padding-top: 1.3rem;\n    width: 15rem;\n    text-align: center;\n    color:black;\n    border: #fff solid 0.2rem;\n    font-size: 1rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    text-decoration: none;\n    transform: translateX(-50%);\n    border-radius: 20px;\n  }\n  \n  .leftBtn[_ngcontent-%COMP%]{\n    display: block;\n    position: absolute;\n    left: 50%;\n    top: 65%;\n    height: 3.5rem;\n    padding-top: 1rem;\n    width: 15rem;\n    text-align: center;\n    color:#2C3C5B;\n    border: #2C3C5B solid 0.2rem;\n    font-size: 1rem;\n    font-weight: bold;\n    text-decoration: none;\n    transform: translateX(-50%);\n    border-radius: 20px;\n    padding-bottom:20px;\n    margin-top: 25px;\n    text-transform: uppercase;\n  }\n  \n  .split.left[_ngcontent-%COMP%]   .leftBtn[_ngcontent-%COMP%]:hover {\n    background-color: var(--left-button-hover-color);\n    border-color: var(--left-button-hover-color);\n  }\n  \n  .split.right[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\n    background-color: var(--right-button-hover-color);\n    border-color: var(--right-button-hover-color);\n  }\n  \n  .container[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background: var(--container-bg-color);\n  }\n  \n  .split[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 50%;\n    height: 100%;\n    overflow: hidden;\n  }\n  \n  .split.left[_ngcontent-%COMP%] {\n    left:0;\n    background-color: #F5F5F5;\n    background-size: cover;\n  }\n  \n  .split.right[_ngcontent-%COMP%] {\n    right:0;\n    background-color: #0AC5A8;\n    background-size: cover;\n  }\n  \n  .split.left[_ngcontent-%COMP%], .split.right[_ngcontent-%COMP%], .split.right[_ngcontent-%COMP%]:before, .split.left[_ngcontent-%COMP%]:before {\n    transition: var(--speed) all ease-in-out;\n  }\n  \n  .hover-left[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    width: var(--hover-width);\n  }\n  \n  .hover-left[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    width: var(--other-width);\n  }\n  \n  .hover-left[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]:before {\n    z-index: 2;\n  }\n  \n  .hover-right[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    width: var(--hover-width);\n  }\n  \n  .hover-right[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    width: var(--other-width);\n  }\n  \n  .hover-right[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]:before {\n    z-index: 2;\n  }\n  \n  form[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\tpadding: 0 50px;\n\theight: 100%;\n\t\n}\n  \n  .inputData[_ngcontent-%COMP%] {\n\tbackground-color:rgb(221, 221, 221);\n\tborder: none;\n  padding: 12px 15px;\n  border-radius: 20px;\n\tmargin: 8px 0;\n  width: 25rem;\n    \n}\n  \n  .email[_ngcontent-%COMP%]{\n  margin-top: 100px;\n}\n  \n  .forgetPass[_ngcontent-%COMP%] {\n\tcolor:#088673;\n\tfont-size: 14px;\n\ttext-decoration: none;\n  margin-top: 30px;\n}\n  \n  .createAccount[_ngcontent-%COMP%]{\n  color:#088673;\n\tfont-size: 20px;\n  margin-top: 130px;\n  font-weight: bold;\n  font-family: 'Calibri';\n\n}\n  \n  @media(max-width: 800px) {\n    h1[_ngcontent-%COMP%] {\n      font-size: 2rem;\n    }\n  \n    .button[_ngcontent-%COMP%] {\n      width: 12rem;\n    }\n    .inputData[_ngcontent-%COMP%]{\n        width:20rem;\n    }\n    .leftBtn[_ngcontent-%COMP%]{\n        width:12rem;\n    }\n  }\n  \n  @media(max-height: 700px) {\n    .button[_ngcontent-%COMP%] {\n      top: 70%;\n    }\n  }\n  \n  .alert[_ngcontent-%COMP%] {\n    background: #f5f5f5;\n    padding: 7px;\n    font-size: .9em;\n    margin-bottom: 20px;\n    display: inline-block;\n    animation: 2s alertAnim forwards;\n    color: #2C3C5B;    \n}\n  \n  .invalidPassword[_ngcontent-%COMP%]{\n  color: red;\n  font-size: medium;\n  font-weight: bold;\n}\n  \n  @keyframes alertAnim {\n    from {\n        opacity:0;\n        transform: translateY(-20px);\n    }\n    to {\n        opacity:1;\n        transform: translateY(0);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLGdEQUFnRDtJQUNoRCw0Q0FBNEM7SUFDNUMsaURBQWlEO0lBQ2pELGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixzRUFBc0U7SUFDdEUsMkJBQTJCO0lBQzNCLG1CQUFtQjs7RUFFckI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQiw2RUFBNkU7SUFDN0UsT0FBTztJQUNQLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsZ0JBQWdCOztFQUVsQjs7RUFDQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlEQUFpRDtFQUNuRDs7RUFDQTtJQUNFO0VBQ0Y7O0VBQ0E7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLGdEQUFnRDtJQUNoRCw0Q0FBNEM7RUFDOUM7O0VBRUE7SUFDRSxpREFBaUQ7SUFDakQsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUNBQXFDO0VBQ3ZDOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0UsTUFBTTtJQUNOLHlCQUF5QjtJQUN6QixzQkFBc0I7RUFDeEI7O0VBQ0E7SUFDRSxPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLHNCQUFzQjtFQUN4Qjs7RUFDQTtJQUNFLHdDQUF3QztFQUMxQzs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtDQUNELGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0QixlQUFlO0NBQ2YsWUFBWTtDQUNaLHdCQUF3QjtBQUN6Qjs7RUFHQTtDQUNDLG1DQUFtQztDQUNuQyxZQUFZO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQixhQUFhO0VBQ1osWUFBWTs7QUFFZDs7RUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7RUFFQTtDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2YscUJBQXFCO0VBQ3BCLGdCQUFnQjtBQUNsQjs7RUFDQTtFQUNFLGFBQWE7Q0FDZCxlQUFlO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixzQkFBc0I7O0FBRXhCOztFQUdFO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsWUFBWTtJQUNkO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxRQUFRO0lBQ1Y7RUFDRjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLGNBQWM7QUFDbEI7O0VBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7RUFDQTtJQUNJO1FBQ0ksU0FBUztRQUNULDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksU0FBUztRQUNULHdCQUF3QjtJQUM1QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1jb250YWluZXItYmctY29sb3I6YmxhY2s7XG4gICAgLS1sZWZ0LWJnLWNvbG9yOiAjZjVmNWY1O1xuICAgIC0tbGVmdC1idXR0b24taG92ZXItY29sb3I6IHJnYmEoOTIsIDkyLCA5MiwgMC4zKTs7XG4gICAgLS1yaWdodC1iZy1jb2xvcjogcmdiYSgyMzAsIDIxNSwgMjE1LCAwLjgxNSk7XG4gICAgLS1yaWdodC1idXR0b24taG92ZXItY29sb3I6IHJnYmEoOTIsIDkyLCA5MiwgMC4zKTtcbiAgICAtLWhvdmVyLXdpZHRoOiA2NSU7XG4gICAgLS1vdGhlci13aWR0aDogMzUlO1xuICAgIC0tc3BlZWQ6IDEwMDBtcztcbiAgfVxuICBcbiAgaHRtbCwgYm9keSB7XG4gICAgcGFkZGluZzowO1xuICAgIG1hcmdpbjowO1xuICAgIGZvbnQtZmFtaWx5OiBDaGFyY29hbDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB9XG4gIC5sZWZ0SGVhZGVye1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBjb2xvcjojMkMzQzVCO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxNSU7XG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICB9XG4gIFxuICAucmlnaHRIZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhO1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyNSU7XG4gICAgdG9wOiAxNSU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLkFib3V0e1xuICAgIGZvbnQtc2l6ZToxLjJyZW07XG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gICAgdG9wOjM1JTtcbiAgICBsZWZ0OjE0JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sdW1uczogIzAwMDAwMDs7XG4gIFxuICB9XG4gIHNwYW57XG4gICAgY29sb3I6IzJDM0M1QjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLmxlZnQgcHtcbiAgICBjb2xvcjojMkMzQzVCXG4gIH0gIFxuICAuYnV0dG9ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA3MCU7XG4gICAgdG9wOiA2NSU7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgcGFkZGluZy10b3A6IDEuM3JlbTtcbiAgICB3aWR0aDogMTVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGJvcmRlcjogI2ZmZiBzb2xpZCAwLjJyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG5cbiAgLmxlZnRCdG57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDY1JTtcbiAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICB3aWR0aDogMTVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiMyQzNDNUI7XG4gICAgYm9yZGVyOiAjMkMzQzVCIHNvbGlkIDAuMnJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOjIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5zcGxpdC5sZWZ0IC5sZWZ0QnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sZWZ0LWJ1dHRvbi1ob3Zlci1jb2xvcik7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1sZWZ0LWJ1dHRvbi1ob3Zlci1jb2xvcik7XG4gIH1cbiAgXG4gIC5zcGxpdC5yaWdodCAuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yaWdodC1idXR0b24taG92ZXItY29sb3IpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcmlnaHQtYnV0dG9uLWhvdmVyLWNvbG9yKTtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb250YWluZXItYmctY29sb3IpO1xuICB9XG4gIC5zcGxpdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnNwbGl0LmxlZnQge1xuICAgIGxlZnQ6MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH0gIFxuICAuc3BsaXQucmlnaHQge1xuICAgIHJpZ2h0OjA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBBQzVBODtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIC5zcGxpdC5sZWZ0LCAuc3BsaXQucmlnaHQsIC5zcGxpdC5yaWdodDpiZWZvcmUsIC5zcGxpdC5sZWZ0OmJlZm9yZSB7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tc3BlZWQpIGFsbCBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmhvdmVyLWxlZnQgLmxlZnQge1xuICAgIHdpZHRoOiB2YXIoLS1ob3Zlci13aWR0aCk7XG4gIH1cbiAgXG4gIC5ob3Zlci1sZWZ0IC5yaWdodCB7XG4gICAgd2lkdGg6IHZhcigtLW90aGVyLXdpZHRoKTtcbiAgfVxuICBcbiAgLmhvdmVyLWxlZnQgLnJpZ2h0OmJlZm9yZSB7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICBcbiAgLmhvdmVyLXJpZ2h0IC5yaWdodCB7XG4gICAgd2lkdGg6IHZhcigtLWhvdmVyLXdpZHRoKTtcbiAgfVxuICBcbiAgLmhvdmVyLXJpZ2h0IC5sZWZ0IHtcbiAgICB3aWR0aDogdmFyKC0tb3RoZXItd2lkdGgpO1xuICB9XG4gIFxuICAuaG92ZXItcmlnaHQgLmxlZnQ6YmVmb3JlIHtcbiAgICB6LWluZGV4OiAyO1xuICB9XG5cbiAgZm9ybSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRwYWRkaW5nOiAwIDUwcHg7XG5cdGhlaWdodDogMTAwJTtcblx0LyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xufVxuXG5cbi5pbnB1dERhdGEge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMjEsIDIyMSwgMjIxKTtcblx0Ym9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdG1hcmdpbjogOHB4IDA7XG4gIHdpZHRoOiAyNXJlbTtcbiAgICBcbn1cbi5lbWFpbHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5mb3JnZXRQYXNzIHtcblx0Y29sb3I6IzA4ODY3Mztcblx0Zm9udC1zaXplOiAxNHB4O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uY3JlYXRlQWNjb3VudHtcbiAgY29sb3I6IzA4ODY3Mztcblx0Zm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnQ2FsaWJyaSc7XG5cbn1cblxuICBcbiAgQG1lZGlhKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICBcbiAgICAuYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMnJlbTtcbiAgICB9XG4gICAgLmlucHV0RGF0YXtcbiAgICAgICAgd2lkdGg6MjByZW07XG4gICAgfVxuICAgIC5sZWZ0QnRue1xuICAgICAgICB3aWR0aDoxMnJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYShtYXgtaGVpZ2h0OiA3MDBweCkge1xuICAgIC5idXR0b24ge1xuICAgICAgdG9wOiA3MCU7XG4gICAgfVxuICB9XG5cbiAgLmFsZXJ0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYW5pbWF0aW9uOiAycyBhbGVydEFuaW0gZm9yd2FyZHM7XG4gICAgY29sb3I6ICMyQzNDNUI7ICAgIFxufVxuLmludmFsaWRQYXNzd29yZHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuQGtleWZyYW1lcyBhbGVydEFuaW0ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { getToken: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isLogged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");



const MaterialComponents = [
    // MatMenuModule,
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[MaterialComponents], 
        // MatMenuModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [
        // MatMenuModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"]], exports: [
        // MatMenuModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [MaterialComponents],
                exports: [MaterialComponents]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/resetpass/resetpass.component.ts":
/*!**************************************************!*\
  !*** ./src/app/resetpass/resetpass.component.ts ***!
  \**************************************************/
/*! exports provided: ResetpassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpassComponent", function() { return ResetpassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _signup_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../signup/validator */ "./src/app/signup/validator.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ResetpassComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This password should have at least 8 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetpassComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The passwords don't match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetpassComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your password has been reset successfully ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetpassComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your password hasn't been reset,Please try again ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetpassComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "click here to start using the website");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ResetpassComponent {
    constructor(fb, _auth, route) {
        this.fb = fb;
        this._auth = _auth;
        this.route = route;
        this.successReset = false;
        this.failedReset = false;
        this.rForm = fb.group({
            'password': ['', _signup_validator__WEBPACK_IMPORTED_MODULE_1__["passValidator"]],
            'Repassword': [null, _signup_validator__WEBPACK_IMPORTED_MODULE_1__["cnfPassValidator"]]
        });
    }
    ngOnInit() {
        this.id = this.route.snapshot.queryParamMap.get('id');
        console.log(this.id);
    }
    Submit(data) {
        console.log(this.id);
        this._auth.resetPassword(data, this.id).subscribe(res => {
            if (res.message === "You reset password successfly") {
                console.log("Success Reset");
                this.successReset = true;
                localStorage.setItem('token', res.token);
            }
        }, err => {
            this.failedReset = true;
        });
        console.log(data);
    }
}
ResetpassComponent.ɵfac = function ResetpassComponent_Factory(t) { return new (t || ResetpassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ResetpassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetpassComponent, selectors: [["app-resetpass"]], decls: 20, vars: 7, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css"], [3, "formGroup", "ngSubmit"], [1, "form-container"], [1, "row", "columns"], ["src", "../../assets/images/halls.png", "alt", "halls"], ["for", "passwordInput"], ["type", "password", "placeholder", "Enter your password", "formControlName", "password"], ["class", "alert", 4, "ngIf"], ["for", "ConfPassword"], ["type", "password", "placeholder", "Confirm your password", "formControlName", "Repassword"], ["type", "submit", "value", "Change Password", 1, "button", "expanded", 3, "disabled"], ["class", "alertPass Success", 4, "ngIf"], ["class", "alertPass Fail", 4, "ngIf"], ["class", "back", "routerLink", "/formData", 4, "ngIf"], [1, "alert"], [1, "alertPass", "Success"], [1, "alertPass", "Fail"], ["routerLink", "/formData", 1, "back"]], template: function ResetpassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetpassComponent_Template_form_ngSubmit_1_listener() { return ctx.Submit(ctx.rForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResetpassComponent_div_10_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Retype password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ResetpassComponent_div_14_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ResetpassComponent_div_16_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ResetpassComponent_div_17_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ResetpassComponent_a_19_Template, 2, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.rForm.controls["password"].valid && ctx.rForm.controls["password"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.rForm.controls["Repassword"].valid && ctx.rForm.controls["Repassword"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.rForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successReset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.failedReset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successReset);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".form-container[_ngcontent-%COMP%] {\n    display:block;\n    width:530px;\n    padding:2em;\n    margin: 2em auto;\n    background:#fff;\n    background-position: center;\n    border: #fff;\n}\n\n.alert[_ngcontent-%COMP%] {\n    background: #f2edda;\n    padding: 7px;\n    font-size: .9em;\n    margin-bottom: 20px;\n    display: inline-block;\n    animation: 2s alertAnim forwards;\n}\n\n.alertPass[_ngcontent-%COMP%]{\n    background: #ffffff;\n    padding: 7px;\n    font-size: 1.0em;\n    margin-bottom: 20px;\n    display: inline-block;\n    animation: 2s ease-in forwards;\n    font-weight: bold;\n    margin-left: 65px;\n}\n\n.Success[_ngcontent-%COMP%]{\n    color:green;\n    text-align: center;\n}\n\n.Fail[_ngcontent-%COMP%]{\n    color:red;\n    text-align: center;\n}\n\nlabel[_ngcontent-%COMP%]{\n    color:#2C3C5B;\n    font-weight:bold;\n}\n\ninput[_ngcontent-%COMP%]{\n    border-radius: 20px;\n    font-size: small;\n}\n\n.back[_ngcontent-%COMP%]{\n    color:#088673;\n    font-size: 20px;\n    font-weight: bold;\n    font-family: 'Calibri';\n    margin-left: 65px;\n  \n}\n\n.button[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n    color:#2C3C5B;\n    background-color:#f5f5f5;\n    font-weight: bold;\n    width:50%;\n    padding:10px;\n    border-radius: 20px;\n    font-size: 15px;\n    border:none;\n    outline: none;\n    cursor: pointer;\n}\n\n.invalidEmail[_ngcontent-%COMP%]{\n    color: red;\n    font-size: medium;\n    font-weight: bold;\n  }\n\np[_ngcontent-%COMP%]{\n    color:#2C3C5B;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-weight: bold;\n  }\n\nh1[_ngcontent-%COMP%] {\n    color: #0AC5A8;\n    margin-bottom: 2rem;\n    font-weight:bold;\n    font-family:'Muli';\n    font-size: 2em;\n    text-align: center;\n}\n\nimg[_ngcontent-%COMP%]{\n    width:70%; \n    -webkit-text-emphasis: center; \n            text-emphasis: center;\n }\n\n@keyframes alertAnim {\n    from {\n        opacity:0;\n        transform: translateY(-20px);\n    }\n    to {\n        opacity:1;\n        transform: translateY(0);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXRwYXNzL3Jlc2V0cGFzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGlCQUFpQjs7QUFFckI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsU0FBUztJQUNULFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztBQUNBO0lBQ0UsYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxpQkFBaUI7RUFDbkI7O0FBQ0Y7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFNBQVM7SUFDVCw2QkFBcUI7WUFBckIscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0k7UUFDSSxTQUFTO1FBQ1QsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxTQUFTO1FBQ1Qsd0JBQXdCO0lBQzVCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZXNldHBhc3MvcmVzZXRwYXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICB3aWR0aDo1MzBweDtcbiAgICBwYWRkaW5nOjJlbTtcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAjZmZmO1xufVxuXG4uYWxlcnQge1xuICAgIGJhY2tncm91bmQ6ICNmMmVkZGE7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBhbmltYXRpb246IDJzIGFsZXJ0QW5pbSBmb3J3YXJkcztcbn1cbi5hbGVydFBhc3N7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBhbmltYXRpb246IDJzIGVhc2UtaW4gZm9yd2FyZHM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWxlZnQ6IDY1cHg7XG59XG4uU3VjY2Vzc3tcbiAgICBjb2xvcjpncmVlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uRmFpbHtcbiAgICBjb2xvcjpyZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5sYWJlbHtcbiAgICBjb2xvcjojMkMzQzVCO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG5pbnB1dHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG4uYmFja3tcbiAgICBjb2xvcjojMDg4NjczO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogJ0NhbGlicmknO1xuICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xuICBcbn1cbi5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgY29sb3I6IzJDM0M1QjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgd2lkdGg6NTAlO1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbnZhbGlkRW1haWx7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBwe1xuICAgIGNvbG9yOiMyQzNDNUI7XG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5oMSB7XG4gICAgY29sb3I6ICMwQUM1QTg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIGZvbnQtZmFtaWx5OidNdWxpJztcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pbWd7XG4gICAgd2lkdGg6NzAlOyBcbiAgICB0ZXh0LWVtcGhhc2lzOiBjZW50ZXI7XG4gfVxuXG5Aa2V5ZnJhbWVzIGFsZXJ0QW5pbSB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetpassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resetpass',
                templateUrl: './resetpass.component.html',
                styleUrls: ['./resetpass.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



class ResultComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
}
ResultComponent.ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultComponent, selectors: [["app-result"]], decls: 10, vars: 0, consts: [[1, "topnav"], [3, "click"], ["href", ""], ["href", "#home", 1, "active"]], template: function ResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_Template_a_click_2_listener() { return ctx.authService.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["header[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    background-color: #2C3C5B;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: right;\r\n    color: #f5f5f5;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #ddd;\r\n    color:#2C3C5B;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background-color: #ddd;\r\n    color: #2C3C5B;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULHlDQUF5QztFQUMzQzs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzNDNUI7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgYSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdiBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBjb2xvcjojMkMzQzVCO1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBjb2xvcjogIzJDM0M1QjtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-result',
                templateUrl: './result.component.html',
                styleUrls: ['./result.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validator */ "./src/app/signup/validator.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function SignupComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.titleAlert, " ");
} }
function SignupComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required and it should be in an email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This mail exists for another account,Enter another one ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.passAlert, " ");
} }
function SignupComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.cnfPassAlert, " ");
} }
class SignupComponent {
    constructor(http, appComponent, fb, _auth, router) {
        this.http = http;
        this.appComponent = appComponent;
        this.fb = fb;
        this._auth = _auth;
        this.router = router;
        this.name = '';
        this.password = "";
        this.Repassword = "";
        this.signUpUrl = "";
        this.MailExist = false;
        this.titleAlert = "This field is required";
        this.passAlert = "Password should has minuimum 8 characters";
        this.cnfPassAlert = "The passwords don't match";
        this.rForm = fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'email': ['', _validator__WEBPACK_IMPORTED_MODULE_2__["emailValidator"]],
            'password': ['', _validator__WEBPACK_IMPORTED_MODULE_2__["passValidator"]],
            'Repassword': [null, _validator__WEBPACK_IMPORTED_MODULE_2__["cnfPassValidator"]]
        });
    }
    ngOnInit() {
    }
    SignUp(data) {
        this._auth.SignUp(data).subscribe(res => {
            localStorage.setItem('token', res.token);
            this.router.navigate(['/FormData']);
        }, err => { });
        return;
    }
    isMailExist() {
        if (this.email != undefined && this.email != null) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            const isMatched = this.email.match(regex);
            // console.log("isMatched"+isMatched)
            if (isMatched != null) {
                console.log("Request Sent Mail Exist");
                this._auth.isMailExist(this.email).subscribe(res => {
                    console.log("IN RESPONSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                    console.log(res);
                    if (res.message === "success") {
                        this.MailExist = false;
                        console.log(this.MailExist);
                    }
                }, err => {
                    if (err.status === 409) {
                        this.MailExist = true;
                        console.log(this.MailExist);
                    }
                });
            }
        }
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 25, vars: 9, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css"], [3, "formGroup", "ngSubmit"], [1, "form-container"], [1, "row", "columns"], ["src", "../../assets/images/halls.png", "alt", "halls"], ["type", "text", "formControlName", "name", "placeholder", "Enter your user name", 3, "value"], ["class", "alert", 4, "ngIf"], ["type", "text", "id", "myInput", "placeholder", "Enter your email", "formControlName", "email", 3, "ngModel", "input", "ngModelChange"], ["for", "passwordInput"], ["type", "password", "placeholder", "Enter your password", "formControlName", "password"], ["for", "ConfPassword"], ["type", "password", "placeholder", "Confirm your password", "formControlName", "Repassword"], ["type", "submit", "value", "Sign Up", 1, "button", "expanded", 3, "disabled"], [1, "alert"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_1_listener() { return ctx.SignUp(ctx.rForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign Up Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "User Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SignupComponent_div_10_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SignupComponent_Template_input_input_13_listener() { return ctx.isMailExist(); })("ngModelChange", function SignupComponent_Template_input_ngModelChange_13_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignupComponent_div_14_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignupComponent_div_15_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignupComponent_div_19_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Retype password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SignupComponent_div_23_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.rForm.controls["name"].valid && ctx.rForm.controls["name"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.rForm.controls["email"].valid && ctx.rForm.controls["email"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.MailExist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.rForm.controls["password"].valid && ctx.rForm.controls["password"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.rForm.controls["Repassword"].valid && ctx.rForm.controls["Repassword"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.rForm.valid || ctx.MailExist);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".sign-up-form[_ngcontent-%COMP%]\n{\n    width: 400px;\n    box-shadow: 0 0 3px rgba(0, 0,0, 3);\n    background: #fff;\n    padding: 20px;\n    margin:8px auto;\n    text-align: center;\n    border: #869CB8;\n}\n.form-container[_ngcontent-%COMP%] {\n    display:block;\n    width:530px;\n    padding:2em;\n    margin: 2em auto;\n    background:#fff;\n    background-position: center;\n    border: #fff;\n}\n.alert[_ngcontent-%COMP%] {\n    background: #f2edda;\n    padding: 7px;\n    font-size: .9em;\n    margin-bottom: 20px;\n    display: inline-block;\n    animation: 2s alertAnim forwards;\n}\nlabel[_ngcontent-%COMP%]{\n    color:#2C3C5B;\n    font-weight:bold;\n}\ninput[_ngcontent-%COMP%]{\n    border-radius: 20px;\n    font-size: small;\n}\n.button[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n    color:#2C3C5B;\n    background-color:#f5f5f5;\n    font-weight: bold;\n    width:50%;\n    padding:10px;\n    border-radius: 20px;\n    font-size: 15px;\n    border:none;\n    outline: none;\n    cursor: pointer;\n}\nh1[_ngcontent-%COMP%] {\n    color: #0AC5A8;\n    margin-bottom: 2rem;\n    font-weight:bold;\n    font-family:'Muli';\n    font-size: 2em;\n    text-align: center;\n}\nimg[_ngcontent-%COMP%]{\n    width:70%; \n    -webkit-text-emphasis: center; \n            text-emphasis: center;\n }\n@keyframes alertAnim {\n    from {\n        opacity:0;\n        transform: translateY(-20px);\n    }\n    to {\n        opacity:1;\n        transform: translateY(0);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsU0FBUztJQUNULFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFNBQVM7SUFDVCw2QkFBcUI7WUFBckIscUJBQXFCO0NBQ3hCO0FBRUQ7SUFDSTtRQUNJLFNBQVM7UUFDVCw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLFNBQVM7UUFDVCx3QkFBd0I7SUFDNUI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduLXVwLWZvcm1cbntcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsMCwgMyk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjo4cHggYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAjODY5Q0I4O1xufVxuLmZvcm0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHdpZHRoOjUzMHB4O1xuICAgIHBhZGRpbmc6MmVtO1xuICAgIG1hcmdpbjogMmVtIGF1dG87XG4gICAgYmFja2dyb3VuZDojZmZmO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBib3JkZXI6ICNmZmY7XG59XG5cbi5hbGVydCB7XG4gICAgYmFja2dyb3VuZDogI2YyZWRkYTtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgZm9udC1zaXplOiAuOWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGFuaW1hdGlvbjogMnMgYWxlcnRBbmltIGZvcndhcmRzO1xufVxuXG5sYWJlbHtcbiAgICBjb2xvcjojMkMzQzVCO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG5pbnB1dHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG4uYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIGNvbG9yOiMyQzNDNUI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOjUwJTtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oMSB7XG4gICAgY29sb3I6ICMwQUM1QTg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIGZvbnQtZmFtaWx5OidNdWxpJztcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pbWd7XG4gICAgd2lkdGg6NzAlOyBcbiAgICB0ZXh0LWVtcGhhc2lzOiBjZW50ZXI7XG4gfVxuXG5Aa2V5ZnJhbWVzIGFsZXJ0QW5pbSB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/signup/validator.ts":
/*!*************************************!*\
  !*** ./src/app/signup/validator.ts ***!
  \*************************************/
/*! exports provided: passValidator, cnfPassValidator, emailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passValidator", function() { return passValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cnfPassValidator", function() { return cnfPassValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailValidator", function() { return emailValidator; });
function passValidator(control) {
    if (control && (control.value != null || control.value != undefined)) {
        const passValue = control.value;
        if (passValue.length < 8) {
            return {
                isError: true
            };
        }
    }
    return null;
}
function cnfPassValidator(control) {
    if (control && (control.value != null || control.value != undefined)) {
        const cnfpassValue = control.value;
        const passControl = control.root.get('password');
        if (passControl) {
            const passValue = passControl.value;
            if (passValue !== cnfpassValue) {
                return {
                    isError: true
                };
            }
        }
        return null;
    }
    else {
        return {
            isError: true
        };
    }
}
function emailValidator(control) {
    if (control && (control.value != null || control.value != undefined)) {
        const emailValue = control.value;
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const isMatched = emailValue.match(regex);
        if (isMatched == null) {
            return {
                isError: true
            };
        }
    }
    return null;
}


/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        let authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
        console.log("whaaaaat " + authService.getToken());
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${authService.getToken()}`
            }
        });
        return next.handle(tokenizedReq);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell\Desktop\IBM_Call-for-code\Halls\Halls-FrontEnd\Halls-FrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map