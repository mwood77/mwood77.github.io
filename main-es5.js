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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar>\n  <a mat-tab-link *ngFor=\"let link of routerLinks\"\n      [routerLink]=\"link.path\"\n      routerLinkActive #rla=\"routerLinkActive\"\n      [routerLinkActiveOptions]=\"{ exact: true }\"\n      [active]=\"rla.isActive\"\n      (click)=\"activeLink = link\">{{ link.label }}</a>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-me/contact-me.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-me/contact-me.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>you found a hidden page - nice going</p>\n\n<!-- <h2>howdy</h2>\n\n<form (ngSubmit)=\"onSubmit()\" #contactMeForm=\"ngForm\">\n\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" id=\"name\"\n           required\n           [(ngModel)]=\"model.name\" name=\"name\"\n           #name=\"ngModel\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" id=\"email\"\n           required\n           [(ngModel)]=\"model.email\" name=\"email\"\n           #email=\"ngModel\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"message\">Message</label>\n    <input type=\"text\" id=\"message\"\n           required\n           [(ngModel)]=\"model.message\" name=\"message\"\n           #message=\"ngModel\">\n  </div>\n\n\n  <button type=\"submit\" [disabled]=\"!contactMeForm.form.valid\">Submit</button>\n</form> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cv/cv.component.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cv/cv.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container font\">\n  <div class=\"content\">\n    <button mat-raised-button color=\"primary\" (click)=\"downloadCV()\">let's do this</button>\n  </div>\n  <div class=\"content font\">\n    <h5>this will open in a new tab</h5>\n  </div>\n  <div class=\"content buffer-top font grid\">\n    <h4 class=\"title\">find me here</h4>\n    <div class=\"item\">\n      <a (click)=\"openURL('github', 'https://github.com/mwood77')\">\n        <img src=\"../../assets/iconmonstr-github-1.svg\" alt=\"Github\" class=\"filter-brown\">\n      </a>\n    </div>\n    <div class=\"item\">\n      <a (click)=\"openURL('linkedin', 'https://www.linkedin.com/in/mich-wood/')\">\n        <img src=\"../../assets/iconmonstr-linkedin-3.svg\" alt=\"LinkedIn\" class=\"filter-brown\">\n      </a>\n    </div>\n    <div class=\"item\">\n      <a (click)=\"openURL('instagram', 'https://www.instagram.com/wmaw/')\">\n        <img src=\"../../assets/iconmonstr-instagram-9.svg\" alt=\"Instagram\" class=\"filter-brown\">\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"welcome-message\">\n    <h4 class=\"content\">hello.</h4>\n    <p class=\"content\">I'm michael. I like to do things.</p>\n    <p class=\"content\">Sometimes, it's things like this. Sometimes not.</p>\n    <p class=\"content\">Have a look around, and maybe you'll find something interesting.</p>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"hidden-message\">\n    <h4 class=\"content\">this is the only page that with capitalization</h4>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/open-source-commits/open-source-commits.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/open-source-commits/open-source-commits.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z4\">\n\n    <!-- iso date -->\n    <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef> date </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ convertDate(element.date) }} </td>\n    </ng-container>\n\n    <!-- repository -->\n    <ng-container matColumnDef=\"repository\">\n      <th mat-header-cell *matHeaderCellDef> repository </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.repository }} </td>\n    </ng-container>\n\n    <!-- type -->\n    <ng-container matColumnDef=\"type\">\n      <th mat-header-cell *matHeaderCellDef> type </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.fixType }} </td>\n    </ng-container>\n\n    <!-- short description -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef> description </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.description }} </td>\n    </ng-container>\n\n    <!-- commit -->\n    <ng-container matColumnDef=\"pull request\">\n      <th mat-header-cell *matHeaderCellDef class=\"button-padding-correction\"> pull request </th>\n      <td mat-cell *matCellDef=\"let element\" class='commit-hash'>\n        <button mat-button (click)=\"navToCommit(element)\">\n            <mark>{{ element.commit.displayName }}</mark>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/analytics.service.ts":
/*!**************************************!*\
  !*** ./src/app/analytics.service.ts ***!
  \**************************************/
/*! exports provided: AnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return AnalyticsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnalyticsService = /** @class */ (function () {
    function AnalyticsService() {
    }
    AnalyticsService.prototype.eventEmitter = function (eventName, eventCategory, eventAction, eventLabel, eventValue) {
        if (eventLabel === void 0) { eventLabel = null; }
        if (eventValue === void 0) { eventValue = null; }
        gtag('event', eventName, {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue
        });
    };
    AnalyticsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AnalyticsService);
    return AnalyticsService;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-me/contact-me.component */ "./src/app/contact-me/contact-me.component.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/cv/cv.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _open_source_commits_open_source_commits_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./open-source-commits/open-source-commits.component */ "./src/app/open-source-commits/open-source-commits.component.ts");







var routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
    },
    {
        path: 'resume',
        component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_4__["CvComponent"],
    },
    {
        path: 'open-source',
        component: _open_source_commits_open_source_commits_component__WEBPACK_IMPORTED_MODULE_6__["OpenSourceCommitsComponent"],
    },
    {
        path: 'contact-me',
        component: _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_3__["ContactMeComponent"],
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  justify-content: center;\n}\n\n.mat-tab-link {\n  font-family: \"Source Code Pro\", monospace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsd29vZC9EZXNrdG9wL3N0dWZmL3B3ZWJzaXRlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQ0NGOztBREdBO0VBQ0UseUNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuXG4ubWF0LXRhYi1saW5rIHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgQ29kZSBQcm8nLCBtb25vc3BhY2U7XG59XG4iLCIqIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXQtdGFiLWxpbmsge1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgQ29kZSBQcm9cIiwgbW9ub3NwYWNlO1xufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Michael Wood';
        this.routerLinks = [
            { path: 'home', label: 'home' },
            { path: 'open-source', label: 'open-source' },
            { path: 'resume', label: 'resume' },
        ];
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                gtag('config', 'xx-xxxxx-xx', { page_path: event.urlAfterRedirects });
            }
        });
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        // window.addEventListener('devtoolschange', event => {
        // console.warn(`you cheeky devil`, event.detail.isOpen);
        // });
        console.warn("you cheeky devil");
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _open_source_commits_open_source_commits_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./open-source-commits/open-source-commits.component */ "./src/app/open-source-commits/open-source-commits.component.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/cv/cv.component.ts");
/* harmony import */ var _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-me/contact-me.component */ "./src/app/contact-me/contact-me.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_imports_material_imports_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material-imports/material-imports.module */ "./src/app/material-imports/material-imports.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./analytics.service */ "./src/app/analytics.service.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _open_source_commits_open_source_commits_component__WEBPACK_IMPORTED_MODULE_6__["OpenSourceCommitsComponent"],
                _cv_cv_component__WEBPACK_IMPORTED_MODULE_7__["CvComponent"],
                _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_8__["ContactMeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _material_imports_material_imports_module__WEBPACK_IMPORTED_MODULE_10__["MaterialImportsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            ],
            providers: [_analytics_service__WEBPACK_IMPORTED_MODULE_12__["AnalyticsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-me/contact-me.component.scss":
/*!******************************************************!*\
  !*** ./src/app/contact-me/contact-me.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-top: 8%;\n  display: flex;\n  text-align: center;\n  font-family: \"Source Code Pro\", monospace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsd29vZC9EZXNrdG9wL3N0dWZmL3B3ZWJzaXRlL3NyYy9hcHAvY29udGFjdC1tZS9jb250YWN0LW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0LW1lL2NvbnRhY3QtbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtbWUvY29udGFjdC1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBtYXJnaW4tdG9wOiA4JTtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZTtcbn1cbiIsInAge1xuICBtYXJnaW4tdG9wOiA4JTtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgQ29kZSBQcm9cIiwgbW9ub3NwYWNlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/contact-me/contact-me.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-me/contact-me.component.ts ***!
  \****************************************************/
/*! exports provided: ContactMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMeComponent", function() { return ContactMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/app/contact-me/contact.ts");



var ContactMeComponent = /** @class */ (function () {
    function ContactMeComponent() {
        this.model = new _contact__WEBPACK_IMPORTED_MODULE_2__["Contact"](undefined, undefined, undefined);
        this.submitted = false;
    }
    ContactMeComponent.prototype.onSubmit = function (formModel) {
        this.submitted = true;
    };
    ContactMeComponent.prototype.ngOnInit = function () {
    };
    ContactMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-me',
            template: __webpack_require__(/*! raw-loader!./contact-me.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-me/contact-me.component.html"),
            styles: [__webpack_require__(/*! ./contact-me.component.scss */ "./src/app/contact-me/contact-me.component.scss")]
        })
    ], ContactMeComponent);
    return ContactMeComponent;
}());



/***/ }),

/***/ "./src/app/contact-me/contact.ts":
/*!***************************************!*\
  !*** ./src/app/contact-me/contact.ts ***!
  \***************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
    Contact.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Contact;
}());



/***/ }),

/***/ "./src/app/cv/cv.component.scss":
/*!**************************************!*\
  !*** ./src/app/cv/cv.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100%;\n  margin-top: 10%;\n}\n.container .content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #9c9b9b;\n  font-family: \"Source Code Pro\", monospace;\n}\n.container .content h5 {\n  font-size: 12px;\n}\n.container .content img {\n  cursor: pointer;\n}\n.container .buffer-top {\n  margin-top: 5%;\n}\n.container .grid {\n  display: grid;\n  grid-template-columns: repeat(2, 5%);\n  grid-auto-rows: minmax(50px, auto);\n}\n.container .title {\n  grid-column: 1/4;\n  text-align: center;\n}\n.container .filter-brown {\n  -webkit-filter: invert(27%) sepia(7%) saturate(1449%) hue-rotate(320deg) brightness(95%) contrast(85%);\n          filter: invert(27%) sepia(7%) saturate(1449%) hue-rotate(320deg) brightness(95%) contrast(85%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsd29vZC9EZXNrdG9wL3N0dWZmL3B3ZWJzaXRlL3NyYy9hcHAvY3YvY3YuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N2L2N2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtBQ0NOO0FERUk7RUFDRSxlQUFBO0FDQU47QURLRTtFQUNFLGNBQUE7QUNISjtBRE1FO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7QUNKSjtBRE9FO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xKO0FEUUU7RUFDRSxzR0FBQTtVQUFBLDhGQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9jdi9jdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwJTtcblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjOWM5YjliO1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIENvZGUgUHJvJywgbW9ub3NwYWNlO1xuXG4gICAgaDUge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gIH1cblxuICAuYnVmZmVyLXRvcCB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gIH1cblxuICAuZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1JSk7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg1MHB4LCBhdXRvKTtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5maWx0ZXItYnJvd24ge1xuICAgIGZpbHRlcjogaW52ZXJ0KDI3JSkgc2VwaWEoNyUpIHNhdHVyYXRlKDE0NDklKSBodWUtcm90YXRlKDMyMGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDg1JSk7XG4gIH1cblxufVxuIiwiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuLmNvbnRhaW5lciAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogIzljOWI5YjtcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIENvZGUgUHJvXCIsIG1vbm9zcGFjZTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQgaDUge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGFpbmVyIC5jb250ZW50IGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLmJ1ZmZlci10b3Age1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5jb250YWluZXIgLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1JSk7XG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoNTBweCwgYXV0byk7XG59XG4uY29udGFpbmVyIC50aXRsZSB7XG4gIGdyaWQtY29sdW1uOiAxLzQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmZpbHRlci1icm93biB7XG4gIGZpbHRlcjogaW52ZXJ0KDI3JSkgc2VwaWEoNyUpIHNhdHVyYXRlKDE0NDklKSBodWUtcm90YXRlKDMyMGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDg1JSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/cv/cv.component.ts":
/*!************************************!*\
  !*** ./src/app/cv/cv.component.ts ***!
  \************************************/
/*! exports provided: CvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function() { return CvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../analytics.service */ "./src/app/analytics.service.ts");



var resume = 'https://docs.google.com/document/d/1WDTFXYEEXIcaYurEHhBO0z5zBpj7OutjGgFssJ6QVSo/edit?usp=sharing';
var CvComponent = /** @class */ (function () {
    function CvComponent(analytics) {
        this.analytics = analytics;
    }
    CvComponent.prototype.downloadCV = function () {
        this.analytics.eventEmitter('open_resume', 'cv', 'click', 'resume_google_docs');
        window.open(resume);
    };
    CvComponent.prototype.openURL = function (site, url) {
        this.analytics.eventEmitter("open_url_" + site, 'cv', 'click', "" + site);
        window.open(url);
    };
    CvComponent.prototype.ngOnInit = function () {
    };
    CvComponent.ctorParameters = function () { return [
        { type: _analytics_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsService"] }
    ]; };
    CvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cv',
            template: __webpack_require__(/*! raw-loader!./cv.component.html */ "./node_modules/raw-loader/index.js!./src/app/cv/cv.component.html"),
            styles: [__webpack_require__(/*! ./cv.component.scss */ "./src/app/cv/cv.component.scss")]
        })
    ], CvComponent);
    return CvComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  width: 100%;\n  font-family: \"Source Code Pro\", monospace;\n}\n.container .welcome-message {\n  padding: 5% 15%;\n}\n.container .welcome-message h4 {\n  padding: 4rem 0;\n}\n.container .welcome-message .content {\n  margin-bottom: 3%;\n}\n.container .hidden-message {\n  color: #F5F5F5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsd29vZC9EZXNrdG9wL3N0dWZmL3B3ZWJzaXRlL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtBQ0NOO0FERUk7RUFDRSxpQkFBQTtBQ0FOO0FES0U7RUFDRSxjQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIENvZGUgUHJvJywgbW9ub3NwYWNlO1xuXG4gIC53ZWxjb21lLW1lc3NhZ2Uge1xuICAgIHBhZGRpbmc6IDUlIDE1JTtcblxuICAgIGg0IHtcbiAgICAgIHBhZGRpbmc6IDRyZW0gMDtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgICB9XG5cbiAgfVxuXG4gIC5oaWRkZW4tbWVzc2FnZSB7XG4gICAgY29sb3I6ICNGNUY1RjU7XG4gIH1cblxufVxuXG4iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLCBtb25vc3BhY2U7XG59XG4uY29udGFpbmVyIC53ZWxjb21lLW1lc3NhZ2Uge1xuICBwYWRkaW5nOiA1JSAxNSU7XG59XG4uY29udGFpbmVyIC53ZWxjb21lLW1lc3NhZ2UgaDQge1xuICBwYWRkaW5nOiA0cmVtIDA7XG59XG4uY29udGFpbmVyIC53ZWxjb21lLW1lc3NhZ2UgLmNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cbi5jb250YWluZXIgLmhpZGRlbi1tZXNzYWdlIHtcbiAgY29sb3I6ICNGNUY1RjU7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material-imports/material-imports.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/material-imports/material-imports.module.ts ***!
  \*************************************************************/
/*! exports provided: MaterialImportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialImportsModule", function() { return MaterialImportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");







var MaterialImportsModule = /** @class */ (function () {
    function MaterialImportsModule() {
    }
    MaterialImportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            ],
            exports: [
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            ]
        })
    ], MaterialImportsModule);
    return MaterialImportsModule;
}());



/***/ }),

/***/ "./src/app/open-source-commits/open-source-commits.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/open-source-commits/open-source-commits.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n  margin-top: 9%;\n  text-align: center;\n}\ntable th {\n  text-align: center;\n}\ntable a {\n  text-decoration: none;\n}\ntable button {\n  font-size: 12px;\n}\ntable .mat-cell {\n  font-size: 11px;\n}\ntable .button-padding-correction {\n  padding-left: 16px;\n}\ntable mark {\n  background-color: #e2e2e2;\n  font-weight: 500;\n  color: #3e2723;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsd29vZC9EZXNrdG9wL3N0dWZmL3B3ZWJzaXRlL3NyYy9hcHAvb3Blbi1zb3VyY2UtY29tbWl0cy9vcGVuLXNvdXJjZS1jb21taXRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vcGVuLXNvdXJjZS1jb21taXRzL29wZW4tc291cmNlLWNvbW1pdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0FDQ0o7QURFRTtFQUNFLHFCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7QUNESjtBRElFO0VBQ0UsZUFBQTtBQ0ZKO0FES0U7RUFDRSxrQkFBQTtBQ0hKO0FETUU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvb3Blbi1zb3VyY2UtY29tbWl0cy9vcGVuLXNvdXJjZS1jb21taXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogOSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICB0aCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAubWF0LWNlbGwge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuXG4gIC5idXR0b24tcGFkZGluZy1jb3JyZWN0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIH1cblxuICBtYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzZTI3MjM7XG4gIH1cblxufVxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogOSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnRhYmxlIHRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGFibGUgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbnRhYmxlIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbnRhYmxlIC5tYXQtY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbnRhYmxlIC5idXR0b24tcGFkZGluZy1jb3JyZWN0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxudGFibGUgbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjM2UyNzIzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/open-source-commits/open-source-commits.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/open-source-commits/open-source-commits.component.ts ***!
  \**********************************************************************/
/*! exports provided: OpenSourceCommitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSourceCommitsComponent", function() { return OpenSourceCommitsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../analytics.service */ "./src/app/analytics.service.ts");



var tableData = [
    {
        date: 1601927057222,
        repository: 'microsoft/vscode',
        description: 'added colour styling for additional git statuses',
        fixType: 'feature',
        commit: {
            displayName: 'b8c953da4b8ed1f19158080157a5715081a71678',
            url: 'https://github.com/microsoft/vscode/commit/b8c953da4b8ed1f19158080157a5715081a71678'
        }
    },
    {
        date: 1601328078000,
        repository: 'skhye05/nativescript-multi-select',
        description: 'removal of faulty code',
        fixType: 'fix',
        commit: {
            displayName: '8e55b6602faa08112047c42ff7dd18a0d6082619',
            url: 'https://github.com/skhye05/nativescript-multi-select/pull/16/commits/8e55b6602faa08112047c42ff7dd18a0d6082619'
        }
    },
];
var tableHeaders = [
    'date',
    'repository',
    'type',
    'description',
    'pull request'
];
var OpenSourceCommitsComponent = /** @class */ (function () {
    function OpenSourceCommitsComponent(analytics) {
        this.analytics = analytics;
        this.dataSource = tableData;
        this.displayedColumns = tableHeaders;
    }
    OpenSourceCommitsComponent.prototype.convertDate = function (isoDate) {
        var date = new Date(isoDate);
        return date.toLocaleString();
    };
    OpenSourceCommitsComponent.prototype.navToCommit = function (element) {
        this.analytics.eventEmitter("open_commit_" + element.repository, 'open-source', 'click', "" + element.repository);
        window.open(element.commit.url);
    };
    OpenSourceCommitsComponent.prototype.ngOnInit = function () {
    };
    OpenSourceCommitsComponent.ctorParameters = function () { return [
        { type: _analytics_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsService"] }
    ]; };
    OpenSourceCommitsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-open-source-commits',
            template: __webpack_require__(/*! raw-loader!./open-source-commits.component.html */ "./node_modules/raw-loader/index.js!./src/app/open-source-commits/open-source-commits.component.html"),
            styles: [__webpack_require__(/*! ./open-source-commits.component.scss */ "./src/app/open-source-commits/open-source-commits.component.scss")]
        })
    ], OpenSourceCommitsComponent);
    return OpenSourceCommitsComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michaelwood/Desktop/stuff/pwebsite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map