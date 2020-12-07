(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Fiverr\survey\survey-frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "3UCP":
/*!*******************************************************************!*\
  !*** ./src/app/components/mc-qs-option/mc-qs-option.component.ts ***!
  \*******************************************************************/
/*! exports provided: McQsOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McQsOptionComponent", function() { return McQsOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function McQsOptionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function McQsOptionComponent_div_0_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.radioChangeMcqs($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function McQsOptionComponent_div_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.choices[ctx_r4.index].option = $event; })("change", function McQsOptionComponent_div_0_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.changeOption(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.choices[ctx_r0.index].answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Option ", ctx_r0.index + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.choices[ctx_r0.index].option);
} }
function McQsOptionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function McQsOptionComponent_div_1_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.radioChangeMcqs($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.choices[ctx_r1.index].answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.choices[ctx_r1.index].option, " ");
} }
class McQsOptionComponent {
    constructor() {
        this.choices = [];
        this.choicesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    changeOption() {
        this.choicesChange.emit(this.choices);
    }
    radioChangeMcqs(event) {
        // this.choices[this.index].answer = event.value;
        var choices1 = this.choices;
        for (let i = 0; i < this.choices.length; i++) {
            if (parseInt(this.index) === i) {
                choices1[i] = {
                    answer: true,
                    option: this.choices[i].option
                };
            }
            else
                choices1[i] = {
                    answer: false,
                    option: this.choices[i].option
                };
        }
        this.choices = choices1;
        this.choicesChange.emit(this.choices);
    }
}
McQsOptionComponent.ɵfac = function McQsOptionComponent_Factory(t) { return new (t || McQsOptionComponent)(); };
McQsOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: McQsOptionComponent, selectors: [["app-mc-qs-option"]], inputs: { choices: "choices", index: "index", showCheckBox: "showCheckBox" }, outputs: { choicesChange: "choicesChange" }, decls: 2, vars: 2, consts: [["class", "checkbox", 4, "ngIf"], [1, "checkbox"], ["color", "primary", 1, "example-margin", 3, "checked", "change"], ["appearance", "outline", 1, "mcqsoption"], ["matInput", "", "placeholder", "Placeholder", 3, "ngModel", "ngModelChange", "change"]], template: function McQsOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, McQsOptionComponent_div_0_Template, 6, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, McQsOptionComponent_div_1_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCheckBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showCheckBox);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckbox"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".mcqsoption[_ngcontent-%COMP%]{\r\n    position: relative !important ;\r\n    width: 330px;\r\n}\r\n.checkbox[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 100%;\r\n    margin-top: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1jLXFzLW9wdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6Im1jLXFzLW9wdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1jcXNvcHRpb257XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudCA7XHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbn1cclxuLmNoZWNrYm94e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McQsOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mc-qs-option',
                templateUrl: './mc-qs-option.component.html',
                styleUrls: ['./mc-qs-option.component.css']
            }]
    }], function () { return []; }, { choices: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showCheckBox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], choicesChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "9Bqo":
/*!*************************************************************************!*\
  !*** ./src/app/components/LoginPage/login-page/login-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/HTTPServices/httphandler.service */ "SLqi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/user-data.service */ "poM3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












function LoginPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_div_0_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_div_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.hide = !ctx_r4.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Are you New Here? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_div_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.handleSignUpClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "SIGN UP HERE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.login_page(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.hide ? "password" : "text")("ngModel", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r0.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.hide ? "visibility_off" : "visibility");
} }
class LoginPageComponent {
    constructor(http, router, userDataService) {
        this.http = http;
        this.router = router;
        this.userDataService = userDataService;
        this.hide = true;
        this.registered = true;
        this.email = "";
        this.password = "";
        this.userData = null;
    }
    ngOnInit() {
        this.userDataService.userData.subscribe(data => {
            this.userData = data;
            if (data)
                this.router.navigate(['/Dashboard']);
        });
    }
    login_page() {
        console.log("login", {
            email: this.email,
            password: this.password
        });
        this.http.apiPost('/user/login', {
            email: this.email,
            password: this.password
        }).subscribe((res) => {
            console.log("res", res);
            this.userDataService.updateUser(res.user);
            localStorage.setItem("token", res.token);
            localStorage.setItem("userData", JSON.stringify(res.user));
            // this.router.navigate(['/Dashboard'])
        }, console.error);
    }
    handleSignUpClick() {
        // this.registered=false;
        this.router.navigate(['/signup']);
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_1__["HttphandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 1, vars: 1, consts: [["class", "login-wrapper", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [1, "mat-card-haeder-1"], [1, "login-header"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Email", "type", "email", 3, "ngModel", "ngModelChange"], ["matInput", "", 3, "type", "ngModel", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "new-user-note"], ["mat-button", "", "color", "warn", 1, "signup-button", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "btn-block", 3, "click"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginPageComponent_div_0_Template, 24, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registered);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: [".login-wrapper[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 100%; \r\n  \r\n\r\n}\r\n.login-wrapper[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%], .login-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.box[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 50%;\r\n  \r\n  transform: translateX(-50%);\r\n  top: 114px;\r\n  \r\n  \r\n  \r\n  max-width: 330px;\r\n}\r\n.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  \r\n  font-weight: 700;\r\n}\r\n.mat-card-haeder-1[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: -webkit-fit-content !important;\r\n  width: -moz-fit-content !important;\r\n  width: fit-content !important;\r\n  left: 50%;\r\n  transform: translateX(-50px);\r\n  font-family: cursive;\r\n  margin-bottom: 20px;\r\n}\r\n.login-header[_ngcontent-%COMP%]{\r\n  font-weight: 600 !important;\r\n  font-size: 22px;\r\n}\r\n.new-user-note[_ngcontent-%COMP%]{\r\n  margin-top: -37px;\r\n  margin-bottom: 33px;\r\n  font-size: 12px;\r\n  color: black;\r\n}\r\n.signup-button[_ngcontent-%COMP%]{\r\n  color: RED;\r\n  height: 0px;\r\n  padding: 0px;\r\n  border: none;\r\n  font-size: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7OENBQzRDOztBQUU5QztBQUNBOztFQUVFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUNBQTZCO0VBQTdCLGtDQUE2QjtFQUE3Qiw2QkFBNkI7RUFDN0IsU0FBUztFQUNULDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4td3JhcHBlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7IFxyXG4gIC8qIGhlaWdodDogMTAwdmg7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5ICFpbXBvcnRhbnQ7ICovXHJcblxyXG59XHJcbi5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZ1bGwtd2lkdGgsXHJcbi5sb2dpbi13cmFwcGVyIC5idG4tYmxvY2sge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC8qIHRvcDogNTAlOyAqL1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB0b3A6IDExNHB4O1xyXG4gIC8qIHdpZHRoOiAxMDAlOyAgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7ICovXHJcbiAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cclxuICBtYXgtd2lkdGg6IDMzMHB4O1xyXG59XHJcblxyXG5cclxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhhZWRlci0xe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcclxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5sb2dpbi1oZWFkZXJ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4ubmV3LXVzZXItbm90ZXtcclxuICBtYXJnaW4tdG9wOiAtMzdweDtcclxuICBtYXJnaW4tYm90dG9tOiAzM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnNpZ251cC1idXR0b257XHJcbiAgY29sb3I6IFJFRDtcclxuICBoZWlnaHQ6IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.css']
            }]
    }], function () { return [{ type: _Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_1__["HttphandlerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_Services_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/HTTPServices/httphandler.service */ "SLqi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









class ProfileComponent {
    constructor(http) {
        this.http = http;
        this.hide = true;
    }
    ngOnInit() {
        let userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            this.user = {
                name: userData.name,
                _id: userData._id,
                email: userData.email,
                password: ""
            };
        }
        else {
            this.http.apiPost('/users/logout', {}).subscribe((res) => {
                localStorage.clear();
            });
        }
    }
    updateUser() {
        let data = {
            name: this.user.name,
            email: this.user.email
        };
        if (this.user.password.length > 6)
            data["password"] = this.user.password;
        this.http.apiPost('/users/me', data).subscribe((res) => {
            console.log("rees", res);
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_1__["HttphandlerService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 23, vars: 7, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [1, "mat-card-haeder-1"], [1, "login-header"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Username", "type", "email", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Email", "type", "email", 3, "ngModel", "ngModelChange"], ["matInput", "", 3, "type", "ngModel", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "btn-block", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_9_listener($event) { return ctx.user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_13_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_17_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_18_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_21_listener() { return ctx.updateUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: [".login-wrapper[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: lightgray !important;\r\n\r\n}\r\n.login-wrapper[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%], .login-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\n}\r\n.box[_ngcontent-%COMP%] {\r\nposition: relative;\r\nleft: 50%;\r\ntransform: translateX(-50%);\r\ntop: 114px;\r\nwidth: 100%; \r\n\r\nborder-radius: 10px;\r\nmax-width: 330px;\r\n}\r\n.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\r\ntext-align: center;\r\nwidth: 100%;\r\nfont-weight: 700;\r\n}\r\n.mat-card-haeder-1[_ngcontent-%COMP%]{\r\nposition: relative;\r\nwidth: -webkit-fit-content !important;\r\nwidth: -moz-fit-content !important;\r\nwidth: fit-content !important;\r\nleft: 50%;\r\ntransform: translateX(-50px);\r\nfont-family: cursive;\r\nmargin-bottom: 20px;\r\n}\r\n.login-header[_ngcontent-%COMP%]{\r\nfont-weight: 600 !important;\r\nfont-size: 22px;\r\n}\r\n.new-user-note[_ngcontent-%COMP%]{\r\nmargin-top: -37px;\r\nmargin-bottom: 33px;\r\nfont-size: 12px;\r\ncolor: black;\r\n}\r\n.signup-button[_ngcontent-%COMP%]{\r\ncolor: RED;\r\nheight: 0px;\r\npadding: 0px;\r\nborder: none;\r\nfont-size: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNDQUFzQzs7QUFFMUM7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsMkJBQTJCO0FBQzNCLFVBQVU7QUFDVixXQUFXO0FBQ1gsaUNBQWlDO0FBQ2pDLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEI7QUFHQTtBQUNBLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsZ0JBQWdCO0FBQ2hCO0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIscUNBQTZCO0FBQTdCLGtDQUE2QjtBQUE3Qiw2QkFBNkI7QUFDN0IsU0FBUztBQUNULDRCQUE0QjtBQUM1QixvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsZUFBZTtBQUNmO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZixZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVixXQUFXO0FBQ1gsWUFBWTtBQUNaLFlBQVk7QUFDWixlQUFlO0FBQ2YiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXdyYXBwZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXkgIWltcG9ydGFudDtcclxuXHJcbn1cclxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZnVsbC13aWR0aCxcclxuLmxvZ2luLXdyYXBwZXIgLmJ0bi1ibG9jayB7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm94IHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5sZWZ0OiA1MCU7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxudG9wOiAxMTRweDtcclxud2lkdGg6IDEwMCU7IFxyXG4vKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7ICovXHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbm1heC13aWR0aDogMzMwcHg7XHJcbn1cclxuXHJcblxyXG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIge1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbndpZHRoOiAxMDAlO1xyXG5mb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaGFlZGVyLTF7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxud2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbmxlZnQ6IDUwJTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcclxuZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbm1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmxvZ2luLWhlYWRlcntcclxuZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG5mb250LXNpemU6IDIycHg7XHJcbn1cclxuLm5ldy11c2VyLW5vdGV7XHJcbm1hcmdpbi10b3A6IC0zN3B4O1xyXG5tYXJnaW4tYm90dG9tOiAzM3B4O1xyXG5mb250LXNpemU6IDEycHg7XHJcbmNvbG9yOiBibGFjaztcclxufVxyXG4uc2lnbnVwLWJ1dHRvbntcclxuY29sb3I6IFJFRDtcclxuaGVpZ2h0OiAwcHg7XHJcbnBhZGRpbmc6IDBweDtcclxuYm9yZGVyOiBub25lO1xyXG5mb250LXNpemU6IDEwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: src_app_Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_1__["HttphandlerService"] }]; }, null); })();


/***/ }),

/***/ "HDlY":
/*!********************************************************************!*\
  !*** ./src/app/Services/httpInterceptor/httpconfig.interceptor.ts ***!
  \********************************************************************/
/*! exports provided: HttpConfigInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptor", function() { return HttpConfigInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







class HttpConfigInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        let loadingExists;
        const routeURL = request.headers.get('routeURL');
        const token = localStorage.getItem('token');
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
            if (request.url == "/") {
                this.router.navigate(['Home']);
                return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
            }
        }
        else {
            if (request.url.substr(-10) == "User/Login" || request.url.substr(-23) == "User/forgetUserPassword") {
                console.log('Either Login or Forgot Password request');
            }
            else {
                localStorage.removeItem('token');
                localStorage.removeItem('userData');
                this.router.navigate(['']);
                return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
            }
        }
        return (next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                if (!request.body || (request.body && !request.body.isLoderHide && loadingExists)) {
                }
                let token_tk = event.headers.get('token_tk');
                if (token_tk) {
                    localStorage.setItem('token', token_tk);
                }
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            if (!request.body || (request.body && !request.body.isLoderHide && loadingExists)) {
            }
            if (error.status == 401) {
                localStorage.removeItem('token');
                localStorage.removeItem('userData');
                this.router.navigate(['']);
                return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
            }
            if (error.status == 403) {
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        })));
    }
}
HttpConfigInterceptor.ɵfac = function HttpConfigInterceptor_Factory(t) { return new (t || HttpConfigInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HttpConfigInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpConfigInterceptor, factory: HttpConfigInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpConfigInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "NIEI":
/*!*********************************************************************!*\
  !*** ./src/app/components/create-survey/create-survey.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSurveyComponent", function() { return CreateSurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/HTTPServices/httphandler.service */ "SLqi");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _mc_qs_option_mc_qs_option_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mc-qs-option/mc-qs-option.component */ "3UCP");










function CreateSurveyComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateSurveyComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateSurveyComponent_div_29_div_7_app_mc_qs_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-mc-qs-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("choicesChange", function CreateSurveyComponent_div_29_div_7_app_mc_qs_option_4_Template_app_mc_qs_option_choicesChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const question_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; return question_r5.options = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = ctx.index;
    const question_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCheckBox", true)("choices", question_r5.options)("index", i_r12);
} }
function CreateSurveyComponent_div_29_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateSurveyComponent_div_29_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.addChoice(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Choice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-radio-group", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateSurveyComponent_div_29_div_7_app_mc_qs_option_4_Template, 1, 3, "app-mc-qs-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", question_r5.options);
} }
function CreateSurveyComponent_div_29_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your Response");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateSurveyComponent_div_29_div_8_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const question_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return question_r5.options = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", question_r5.options);
} }
function CreateSurveyComponent_div_29_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-group", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateSurveyComponent_div_29_div_9_Template_mat_radio_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const question_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return question_r5.options = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-radio-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Agree");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Disagree");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", question_r5.options);
} }
function CreateSurveyComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateSurveyComponent_div_29_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const question_r5 = ctx.$implicit; return question_r5.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateSurveyComponent_div_29_div_7_Template, 5, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateSurveyComponent_div_29_div_8_Template, 5, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateSurveyComponent_div_29_div_9_Template, 6, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Question ", i_r6 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", question_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.surveyType === "mcqs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.surveyType === "shortanswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.surveyType === "agreedisagree");
} }
function CreateSurveyComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateSurveyComponent_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.saveSurvey(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CreateSurveyComponent {
    constructor(http) {
        this.http = http;
        this.title = "";
        this.description = "";
        this.choices = null;
        this.surveyType = null;
        this.questions = [];
        let userData = JSON.parse(localStorage.getItem('userData'));
        this.user = {
            name: userData.name,
            _id: userData._id
        };
        // const today = new Date();
        // const month = today.getMonth();
        // const year = today.getFullYear();
        // this.campaignOne = new FormGroup({
        //   start: new FormControl(new Date(year, month, 13)),
        //   end: new FormControl(new Date(year, month, 16))
        // });
        // this.campaignTwo = new FormGroup({
        //   start: new FormControl(new Date(year, month, 15)),
        //   end: new FormControl(new Date(year, month, 19))
        // });
    }
    addQuestion() {
        if (this.surveyType === "mcqs")
            this.questions.push({ title: '', options: [{ option: "", answer: false }, { option: "", answer: false }] });
        else if (this.surveyType === "shortanswer")
            this.questions.push({ title: '', options: "" });
        else if (this.surveyType === "agreedisagree")
            this.questions.push({ title: '', options: "" });
    }
    addChoice(i) {
        this.questions[i].options.push({ option: "", answer: false });
    }
    radioChange(event) {
        console.log("event", event.value);
        this.surveyType = event.value;
        if (event.value === "mcqs")
            this.questions = [{ title: '', options: [{ option: '', answer: false }, { option: '', answer: false }] }];
        else if (event.value === "shortanswer")
            this.questions = [{ title: '', options: "" }];
        else if (event.value === "agreedisagree")
            this.questions = [{ title: '', options: "" }];
    }
    saveSurvey() {
        let data = {
            title: this.title,
            description: this.description,
            type: this.surveyType,
            questions: this.questions,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.user && (data['createdBy'] = this.user);
        this.choices && (data['options'] = this.choices);
        this.http.apiPost('/survey/create', data).subscribe((res) => {
            this.title = "";
            this.description = "";
            this.choices = null;
            this.surveyType = "",
                this.startDate = this.startDate,
                this.endDate = this.endDate,
                this.questions = [];
        });
    }
    ngOnInit() {
    }
}
CreateSurveyComponent.ɵfac = function CreateSurveyComponent_Factory(t) { return new (t || CreateSurveyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_1__["HttphandlerService"])); };
CreateSurveyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateSurveyComponent, selectors: [["app-create-survey"]], decls: 31, vars: 8, consts: [[1, "createSurveyWrapper"], [1, "createsurverheader"], ["aria-label", "Select an option", 1, "radiogrup", 3, "ngModel", "ngModelChange"], [1, "surverytype"], ["color", "primary", "value", "mcqs", 1, "type-button", 3, "change"], ["color", "primary", "value", "shortanswer", 1, "type-button", 3, "change"], ["color", "primary", "value", "agreedisagree", 1, "type-button", 3, "change"], ["appearance", "outline", 1, "example-full-width", "createsurveytextboxes"], ["matInput", "", "placeholder", "Title", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Description", 1, "desc-textarea", 3, "ngModel", "ngModelChange"], ["appearance", "outline", 1, "example-full-width", "createsurveytimetextboxes"], ["matInput", "", "type", "datetime-local", "placeholder", "start date", 3, "ngModel", "ngModelChange"], ["appearance", "outline", 1, "example-full-width", "createsurveytimetextboxes", "rigthtime"], ["matInput", "", "type", "datetime-local", "placeholder", "end date", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", "class", "addquestionbutton", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", "class", "saveSurveyButton", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "addquestionbutton", 3, "click"], [1, "question-header"], ["matInput", "", "placeholder", "question.title", 3, "ngModel", "ngModelChange"], ["class", "optionsBox", 4, "ngIf"], [1, "optionsBox"], ["mat-raised-button", "", "color", "primary", 1, "addchoicebutton", 3, "click"], ["aria-label", "Select an option"], [3, "showCheckBox", "choices", "index", "choicesChange", 4, "ngFor", "ngForOf"], [3, "showCheckBox", "choices", "index", "choicesChange"], ["matInput", "", "placeholder", "Your Response", 3, "ngModel", "ngModelChange"], ["color", "primary", "value", "true", 1, "type-button"], ["color", "primary", "value", "false", 1, "type-button"], ["mat-raised-button", "", "color", "primary", 1, "saveSurveyButton", 3, "click"]], template: function CreateSurveyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateSurveyComponent_Template_mat_radio_group_ngModelChange_3_listener($event) { return ctx.surveyType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose any survey Template: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-radio-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateSurveyComponent_Template_mat_radio_button_change_6_listener($event) { return ctx.radioChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Multiple Choice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateSurveyComponent_Template_mat_radio_button_change_8_listener($event) { return ctx.radioChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Short Answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateSurveyComponent_Template_mat_radio_button_change_10_listener($event) { return ctx.radioChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Agree/Disagree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateSurveyComponent_Template_input_ngModelChange_15_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateSurveyComponent_Template_textarea_ngModelChange_19_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateSurveyComponent_Template_input_ngModelChange_23_listener($event) { return ctx.startDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateSurveyComponent_Template_input_ngModelChange_27_listener($event) { return ctx.endDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CreateSurveyComponent_button_28_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CreateSurveyComponent_div_29_Template, 10, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CreateSurveyComponent_button_30_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.surveyType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.surveyType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.surveyType);
    } }, directives: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_2__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _mc_qs_option_mc_qs_option_component__WEBPACK_IMPORTED_MODULE_8__["McQsOptionComponent"]], styles: [".createSurveyWrapper[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top: 100px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 50%;\r\n}\r\n.createsurveytextboxes[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n.createsurverheader[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    margin-bottom: 20px;\r\n    font-family: monospace;\r\n}\r\n.createsurveytimetextboxes[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 49%;\r\n}\r\n.rigthtime[_ngcontent-%COMP%]{\r\n    margin-left: 2%;\r\n}\r\n.type-button[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-bottom: 13px;\r\n}\r\n.desc-textarea[_ngcontent-%COMP%]{\r\n    height: 95px\r\n}\r\n.surverytype[_ngcontent-%COMP%]{\r\n    margin-right: 20px;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    font-weight: 300;\r\n}\r\n.surveryLifetime[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n.radiogrup[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 110px;\r\n    position: relative;\r\n}\r\n.optionsBox[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 75%;   \r\n    margin-top: 15px;\r\n}\r\n.addchoicebutton[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    left: 100%;\r\n    transform: translateX(-100%);\r\n}\r\n.addquestionbutton[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    margin-bottom: 20px;\r\n    left: 100%;\r\n    transform: translateX(-100%);\r\n}\r\n.saveSurveyButton[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    left: 50%;\r\n    margin-top: 40px;\r\n    width: 140px;\r\n    transform: translateX(-50%);\r\n    margin-bottom: 80px;\r\n}\r\n.question-header[_ngcontent-%COMP%]{\r\n    background-color: #3f51b5;\r\n    color: white;\r\n    padding-left: 10px;\r\n    font-size: 17px;\r\n    padding: 10px;\r\n    margin-bottom: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1zdXJ2ZXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULDJCQUEyQjtJQUMzQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDViw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJjcmVhdGUtc3VydmV5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlU3VydmV5V3JhcHBlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbi5jcmVhdGVzdXJ2ZXl0ZXh0Ym94ZXN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY3JlYXRlc3VydmVyaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG59XHJcbi5jcmVhdGVzdXJ2ZXl0aW1ldGV4dGJveGVze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQ5JTtcclxufVxyXG4ucmlndGh0aW1le1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcbi50eXBlLWJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxufVxyXG4uZGVzYy10ZXh0YXJlYXtcclxuICAgIGhlaWdodDogOTVweFxyXG59XHJcbi5zdXJ2ZXJ5dHlwZXtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi5zdXJ2ZXJ5TGlmZXRpbWV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnJhZGlvZ3J1cHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ub3B0aW9uc0JveHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA3NSU7ICAgXHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5hZGRjaG9pY2VidXR0b257XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxufVxyXG4uYWRkcXVlc3Rpb25idXR0b257XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuLnNhdmVTdXJ2ZXlCdXR0b257XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxufVxyXG4ucXVlc3Rpb24taGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateSurveyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-survey',
                templateUrl: './create-survey.component.html',
                styleUrls: ['./create-survey.component.css']
            }]
    }], function () { return [{ type: _Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_1__["HttphandlerService"] }]; }, null); })();


/***/ }),

/***/ "NOdj":
/*!*******************************************************!*\
  !*** ./src/app/components/Survey/survey.component.ts ***!
  \*******************************************************/
/*! exports provided: SurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function() { return SurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/HTTPServices/httphandler.service */ "SLqi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _mc_qs_option_mc_qs_option_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mc-qs-option/mc-qs-option.component */ "3UCP");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "QibW");











function SurveyComponent_div_7_div_6_app_mc_qs_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-mc-qs-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("choicesChange", function SurveyComponent_div_7_div_6_app_mc_qs_option_1_Template_app_mc_qs_option_choicesChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const question_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; return question_r1.options = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.index;
    const question_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCheckBox", false)("choices", question_r1.options)("index", i_r8);
} }
function SurveyComponent_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SurveyComponent_div_7_div_6_app_mc_qs_option_1_Template, 1, 3, "app-mc-qs-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", question_r1.options);
} }
function SurveyComponent_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your Response");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SurveyComponent_div_7_div_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const question_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (question_r1.options[0] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", question_r1.options[0]);
} }
function SurveyComponent_div_7_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SurveyComponent_div_7_div_8_Template_mat_radio_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const question_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return question_r1.options = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-radio-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Agree");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Disagree");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", question_r1.options);
} }
function SurveyComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SurveyComponent_div_7_div_6_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SurveyComponent_div_7_div_7_Template, 5, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SurveyComponent_div_7_div_8_Template, 6, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Question ", i_r2 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.survey.type === "mcqs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.survey.type === "shortanswer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.survey.type === "agreedisagree");
} }
class SurveyComponent {
    constructor(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        let userData = JSON.parse(localStorage.getItem('userData'));
        this.user = {
            name: userData.name,
            _id: userData._id
        };
    }
    ngOnInit() {
        this.survey = JSON.parse(this.route.snapshot.paramMap.get('survey'));
        if (this.survey.type !== 'shortanswer') {
            this.survey.questions = this.survey && this.survey.questions.map(q => {
                return Object.assign(Object.assign({}, q), { options: q.options.map(o => {
                        return Object.assign(Object.assign({}, o), { answer: false });
                    }) });
            });
        }
        else {
            this.survey.questions = this.survey && this.survey.questions.map(q => {
                return Object.assign(Object.assign({}, q), { options: [''] });
            });
        }
    }
    saveSurvey() {
        let data = this.survey;
        console.log("survey", data);
        this.user && (data['performedBy'] = this.user);
        data['surveyID'] = this.survey._id;
        this.http.apiPost('/surveyResponse/save', data).subscribe((res) => {
            this.router.navigate(['/Dashboard']);
        });
    }
}
SurveyComponent.ɵfac = function SurveyComponent_Factory(t) { return new (t || SurveyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_2__["HttphandlerService"])); };
SurveyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SurveyComponent, selectors: [["app-survey"]], decls: 10, vars: 3, consts: [[1, "survey-mock-wrapper"], [1, "survey-title"], [1, "survey-desc-head"], [1, "survey-desc"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 1, "saveSurveyButton", 3, "click"], [1, "question-header"], [1, "question-qno"], ["class", "optionsBox", 4, "ngIf"], [1, "optionsBox"], [3, "showCheckBox", "choices", "index", "choicesChange", 4, "ngFor", "ngForOf"], [3, "showCheckBox", "choices", "index", "choicesChange"], ["appearance", "outline", 1, "example-full-width", "fillsurveytextbox"], ["matInput", "", "placeholder", "Your Response", 3, "ngModel", "ngModelChange"], ["aria-label", "Select an option", 1, "radiogrup", 3, "ngModel", "ngModelChange"], ["color", "primary", "value", "true", 1, "agree-button"], ["color", "primary", "value", "false", 1, "agree-button"]], template: function SurveyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SurveyComponent_div_7_Template, 9, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SurveyComponent_Template_button_click_8_listener() { return ctx.saveSurvey(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Save Record");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.survey.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.survey.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.survey.questions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _mc_qs_option_mc_qs_option_component__WEBPACK_IMPORTED_MODULE_5__["McQsOptionComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioButton"]], styles: [".survey-mock-wrapper[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top: 100px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 70%;\r\n}\r\n.survey-title[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    font-family: inherit;\r\n    margin-bottom: 20px;\r\n    padding: 20px;\r\n    width: 100%;\r\n    background-color: #dedede;\r\n    padding: 15px;\r\n}\r\n.survey-desc-head[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    font-family: inherit;\r\n    margin-bottom: 20px;\r\n    padding: 5px;\r\n}\r\n.survey-desc[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    font-family: inherit;\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n    background-color: #dedede;\r\n    padding: 15px;\r\n}\r\n.saveSurveyButton[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    left: 50%;\r\n    margin-top: 40px;\r\n    width: 140px;\r\n    transform: translateX(-50%);\r\n    margin-bottom: 80px;\r\n}\r\n.question-header[_ngcontent-%COMP%]{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    position: relative;\r\n    float: left;\r\n    font-size: 16px;\r\n}\r\n.question-qno[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    font-size: 16px;\r\n    left: 10px;\r\n    margin-top: 20px;\r\n}\r\n.agree-button[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-top: 16px;\r\n}\r\n.fillsurveytextbox[_ngcontent-%COMP%]{\r\n    width: 85%;\r\n    margin-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cnZleS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3VydmV5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VydmV5LW1vY2std3JhcHBlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcbi5zdXJ2ZXktdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG4uc3VydmV5LWRlc2MtaGVhZHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4uc3VydmV5LWRlc2N7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi5zYXZlU3VydmV5QnV0dG9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbn1cclxuLnF1ZXN0aW9uLWhlYWRlcntcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ucXVlc3Rpb24tcW5ve1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmFncmVlLWJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG4uZmlsbHN1cnZleXRleHRib3h7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurveyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-survey',
                templateUrl: './survey.component.html',
                styleUrls: ['./survey.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_2__["HttphandlerService"] }]; }, null); })();


/***/ }),

/***/ "Q8yv":
/*!***********************************************************************!*\
  !*** ./src/app/components/Dashboard/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/HTTPServices/httphandler.service */ "SLqi");
/* harmony import */ var src_app_Services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/user-data.service */ "poM3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







function DashboardComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const survey_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.checkSignInFirst(survey_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const survey_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](survey_r1.title);
} }
class DashboardComponent {
    constructor(http, userDataService, router) {
        this.http = http;
        this.userDataService = userDataService;
        this.router = router;
        this.limit = 10;
        this.skip = 0;
        this.count = 0;
        this.totalDocCounts = 0;
        this.surveys = [];
        this.userData = null;
    }
    ngOnInit() {
        this.userDataService.userData.subscribe(data => {
            this.userData = data;
        });
        this.http.apiGet(`/survey/getAll/${this.limit}/${this.skip}`).subscribe((res) => {
            this.totalDocCounts = res.count;
            this.surveys = res.surveys;
            this.count = res.count;
        });
    }
    handlePage(event) {
        console.log("event", event);
    }
    checkSignInFirst(survey) {
        if (this.userData) {
            this.mockSurvey(survey);
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    mockSurvey(survey) {
        this.router.navigate(['/Survey', { survey: JSON.stringify(survey) }]);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_1__["HttphandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 1, consts: [[1, "dashboard-main-wrapper"], ["mat-raised-button", "", "class", "dashboard-card", 3, "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "dashboard-card", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_button_1_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.surveys);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".dashboard-main-wrapper[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 80%;\r\n    left: 10%;\r\n    margin-top: 104px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n}\r\n.paginator[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 100%;    \r\n    background-color: inherit;\r\n}\r\n.dashboard-card[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: left;\r\n    height: 54px;\r\n    margin-bottom: 20px;\r\n    font-size: 18px;\r\n    font-family: cursive;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtbWFpbi13cmFwcGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwNHB4O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG4ucGFnaW5hdG9ye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG4uZGFzaGJvYXJkLWNhcmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_1__["HttphandlerService"] }, { type: src_app_Services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "SLqi":
/*!**************************************************************!*\
  !*** ./src/app/Services/HTTPServices/httphandler.service.ts ***!
  \**************************************************************/
/*! exports provided: HttphandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttphandlerService", function() { return HttphandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const basicUrl = "/api";
class HttphandlerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    apiGet(routeURL, content_type, isCompleteURI) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("X-CustomHttpHeader", "CUSTOM_VALUE");
        const obj = {};
        if (!content_type) {
            headers.append('Content-Type', 'application/json');
        }
        else {
            obj.responseType = 'text';
        }
        obj.headers = headers;
        let uri = basicUrl + routeURL;
        if (isCompleteURI) {
            uri = routeURL;
        }
        return this.httpClient.get(uri, obj);
    }
    ;
    apiPut(routeURL, putData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("X-CustomHttpHeader", "CUSTOM_VALUE");
        headers.append('Content-Type', 'application/json');
        return this.httpClient.put(basicUrl + routeURL, putData, { headers });
    }
    apiDelete(routeURL) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("X-CustomHttpHeader", "CUSTOM_VALUE");
        headers.append('Content-Type', 'application/json');
        return this.httpClient.delete(basicUrl + routeURL, { headers });
    }
    apiPost(routeURL, postData, content_type) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("X-CustomHttpHeader", "CUSTOM_VALUE");
        const obj = {};
        if (!content_type) {
            headers.append('Content-Type', 'application/json');
        }
        else {
            obj.responseType = 'text';
        }
        obj.headers = headers;
        return this.httpClient.post(basicUrl + routeURL, postData, obj);
    }
}
HttphandlerService.ɵfac = function HttphandlerService_Factory(t) { return new (t || HttphandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttphandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttphandlerService, factory: HttphandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttphandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "wn8t");



class AppComponent {
    constructor() {
        this.title = 'survey-frontend';
        localStorage.setItem("token", "dwyb");
    }
    isAuthorized() {
        return localStorage.getItem("userData");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-landing-page");
    } }, directives: [_components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__["LandingPageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TWkg":
/*!********************************************************************!*\
  !*** ./src/app/components/SignUpPage/sign-up/sign-up.component.ts ***!
  \********************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/HTTPServices/httphandler.service */ "SLqi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/user-data.service */ "poM3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












function SignUpComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.Username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_div_0_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_div_0_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_div_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.hide = !ctx_r5.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Already Registered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_div_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.handleLoginClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "LOGIN HERE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_div_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.signUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.Username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.hide ? "password" : "text")("ngModel", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r0.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.hide ? "visibility_off" : "visibility");
} }
class SignUpComponent {
    constructor(http, router, userDataService) {
        this.http = http;
        this.router = router;
        this.userDataService = userDataService;
        this.hide = true;
        this.Username = "";
        this.email = "";
        this.password = "";
        this.confirmpassword = "";
        this.registered = false;
    }
    ngOnInit() {
        this.userDataService.userData.subscribe(data => {
            if (data)
                this.router.navigate(['/Dashboard']);
        });
    }
    signUp() {
        console.log("signup", {
            name: this.Username,
            email: this.email,
            password: this.password
        });
        this.http.apiPost('/user/create', {
            name: this.Username,
            email: this.email,
            password: this.password
        }).subscribe((res) => {
            console.log("res", res);
            this.userDataService.updateUser(res.user);
            localStorage.setItem("token", res.token);
            localStorage.setItem("userData", JSON.stringify(res.user));
            // this.router.navigate(['/Dashboard'])
        });
    }
    handleLoginClick() {
        this.router.navigate(['/login']);
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_1__["HttphandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 1, vars: 1, consts: [["class", "login-wrapper", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [1, "mat-card-haeder-1"], [1, "login-header"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Username", "type", "name", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Email", "type", "email", 3, "ngModel", "ngModelChange"], ["matInput", "", 3, "type", "ngModel", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "new-user-note"], ["mat-button", "", "color", "warn", 1, "signup-button", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "btn-block", 3, "click"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SignUpComponent_div_0_Template, 28, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.registered);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: [".login-wrapper[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    \r\n\r\n}\r\n.login-wrapper[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%], .login-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\n}\r\n.box[_ngcontent-%COMP%] {\r\nposition: relative;\r\nleft: 50%;\r\ntransform: translateX(-50%);\r\ntop: 114px;\r\nwidth: 100%; \r\n\r\nborder-radius: 10px;\r\nmax-width: 330px;\r\n}\r\n.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\r\ntext-align: center;\r\nwidth: 100%;\r\nfont-weight: 700;\r\n}\r\n.mat-card-haeder-1[_ngcontent-%COMP%]{\r\nposition: relative;\r\nwidth: -webkit-fit-content !important;\r\nwidth: -moz-fit-content !important;\r\nwidth: fit-content !important;\r\nleft: 50%;\r\ntransform: translateX(-50px);\r\nfont-family: cursive;\r\nmargin-bottom: 20px;\r\n}\r\n.login-header[_ngcontent-%COMP%]{\r\nfont-weight: 600 !important;\r\nfont-size: 22px;\r\n}\r\n.new-user-note[_ngcontent-%COMP%]{\r\nmargin-top: -37px;\r\nmargin-bottom: 33px;\r\nfont-size: 12px;\r\ncolor: black;\r\n}\r\n.signup-button[_ngcontent-%COMP%]{\r\ncolor: RED;\r\nheight: 0px;\r\npadding: 0px;\r\nborder: none;\r\nfont-size: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQjs7NkNBRXlDOztBQUU3QztBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCwyQkFBMkI7QUFDM0IsVUFBVTtBQUNWLFdBQVc7QUFDWCxpQ0FBaUM7QUFDakMsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQjtBQUdBO0FBQ0Esa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEI7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixxQ0FBNkI7QUFBN0Isa0NBQTZCO0FBQTdCLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVTtBQUNWLFdBQVc7QUFDWCxZQUFZO0FBQ1osWUFBWTtBQUNaLGVBQWU7QUFDZiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4td3JhcHBlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheSAhaW1wb3J0YW50OyAqL1xyXG5cclxufVxyXG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mdWxsLXdpZHRoLFxyXG4ubG9naW4td3JhcHBlciAuYnRuLWJsb2NrIHtcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ib3gge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmxlZnQ6IDUwJTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG50b3A6IDExNHB4O1xyXG53aWR0aDogMTAwJTsgXHJcbi8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTsgKi9cclxuYm9yZGVyLXJhZGl1czogMTBweDtcclxubWF4LXdpZHRoOiAzMzBweDtcclxufVxyXG5cclxuXHJcbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciB7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxud2lkdGg6IDEwMCU7XHJcbmZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oYWVkZXItMXtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG53aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxubGVmdDogNTAlO1xyXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG5mb250LWZhbWlseTogY3Vyc2l2ZTtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ubG9naW4taGVhZGVye1xyXG5mb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbmZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4ubmV3LXVzZXItbm90ZXtcclxubWFyZ2luLXRvcDogLTM3cHg7XHJcbm1hcmdpbi1ib3R0b206IDMzcHg7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxuY29sb3I6IGJsYWNrO1xyXG59XHJcbi5zaWdudXAtYnV0dG9ue1xyXG5jb2xvcjogUkVEO1xyXG5oZWlnaHQ6IDBweDtcclxucGFkZGluZzogMHB4O1xyXG5ib3JkZXI6IG5vbmU7XHJcbmZvbnQtc2l6ZTogMTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.css']
            }]
    }], function () { return [{ type: _Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_1__["HttphandlerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_Services_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_LoginPage_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/LoginPage/login-page/login-page.component */ "9Bqo");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _components_SignUpPage_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/SignUpPage/sign-up/sign-up.component */ "TWkg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _Services_httpInterceptor_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Services/httpInterceptor/httpconfig.interceptor */ "HDlY");
/* harmony import */ var _components_HomePage_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/HomePage/home/home.component */ "d9/D");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _components_Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/Dashboard/dashboard/dashboard.component */ "Q8yv");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/create-survey/create-survey.component */ "NIEI");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_mc_qs_option_mc_qs_option_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/mc-qs-option/mc-qs-option.component */ "3UCP");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _components_MySurvey_survey_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/MySurvey/survey.component */ "jtA1");
/* harmony import */ var _components_Survey_survey_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/Survey/survey.component */ "NOdj");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _components_survey_record_survey_record_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/survey-record/survey-record.component */ "ybwX");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "wn8t");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");























// import { MatDatepickerModule} from '@angular/material/datepicker';
// import { MatNativeDateModule} from '@angular/material/core'

// import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from 'ngx-mat-datetime-picker';










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _Services_httpInterceptor_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_14__["HttpConfigInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
            // MatDatepickerModule,
            // MatNativeDateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
            // NgxMatTimepickerModule,
            // NgxMatDatetimePickerModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"]
            // FormControl 
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_LoginPage_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
        _components_SignUpPage_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"],
        _components_HomePage_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
        _components_Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
        _components_MySurvey_survey_component__WEBPACK_IMPORTED_MODULE_26__["MySurveyComponent"],
        _components_Survey_survey_component__WEBPACK_IMPORTED_MODULE_27__["SurveyComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
        _components_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_21__["CreateSurveyComponent"],
        _components_mc_qs_option_mc_qs_option_component__WEBPACK_IMPORTED_MODULE_24__["McQsOptionComponent"],
        _components_survey_record_survey_record_component__WEBPACK_IMPORTED_MODULE_29__["SurveyRecordComponent"],
        _components_HomePage_home_home_component__WEBPACK_IMPORTED_MODULE_15__["DialogOverviewExampleDialog"],
        _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_30__["LandingPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
        // MatDatepickerModule,
        // MatNativeDateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
        // NgxMatTimepickerModule,
        // NgxMatDatetimePickerModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"]
        // FormControl 
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_LoginPage_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
                    _components_SignUpPage_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"],
                    _components_HomePage_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                    _components_Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
                    _components_MySurvey_survey_component__WEBPACK_IMPORTED_MODULE_26__["MySurveyComponent"],
                    _components_Survey_survey_component__WEBPACK_IMPORTED_MODULE_27__["SurveyComponent"],
                    _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
                    _components_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_21__["CreateSurveyComponent"],
                    _components_mc_qs_option_mc_qs_option_component__WEBPACK_IMPORTED_MODULE_24__["McQsOptionComponent"],
                    _components_survey_record_survey_record_component__WEBPACK_IMPORTED_MODULE_29__["SurveyRecordComponent"],
                    _components_HomePage_home_home_component__WEBPACK_IMPORTED_MODULE_15__["DialogOverviewExampleDialog"],
                    _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_30__["LandingPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
                    // MatDatepickerModule,
                    // MatNativeDateModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
                    // NgxMatTimepickerModule,
                    // NgxMatDatetimePickerModule,
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"]
                    // FormControl 
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _Services_httpInterceptor_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_14__["HttpConfigInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "d9/D":
/*!************************************************************!*\
  !*** ./src/app/components/HomePage/home/home.component.ts ***!
  \************************************************************/
/*! exports provided: HomeComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/HTTPServices/httphandler.service */ "SLqi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/user-data.service */ "poM3");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _LoginPage_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../LoginPage/login-page/login-page.component */ "9Bqo");













function HomeComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "LOGOUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ".example-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n    background-image: url('back.jpg');\r\n    background-size: 100% 108vh;\r\n    position: absolute !important;\r\n    width: 100%;\r\n    top: 0px;\r\n    overflow-y: hidden;\r\n    height: 100vh;\r\n}\r\n.toolbar[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    z-index: 100 !important;\r\n    background: none;\r\n    color: #6dbad4;\r\n    box-shadow: 2px 24px 140px 7px rgba(222,248,245,1);\r\n}\r\n.drawer[_ngcontent-%COMP%]{\r\n    width: 236px;\r\n    background: #e0e0de;\r\n}\r\n.navbar-button[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 90%;\r\n    border-radius: 20px 200px;\r\n    margin-bottom: 4px;\r\n}\r\n.navbar-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    \r\n}\r\n.drawer-inner-div[_ngcontent-%COMP%]{\r\n    margin-top: 103px;\r\n    margin-left: 24px; \r\n    width: -webkit-fit-content; \r\n    width: -moz-fit-content; \r\n    width: fit-content;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;   \r\n}\r\n.ddrawer-conent[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 100%;\r\n    overflow-y: scroll;\r\n}\r\n.dialog-width[_ngcontent-%COMP%]{\r\n    width: inherit;\r\n    height: inherit;\r\n}\r\n.loginSignup[_ngcontent-%COMP%]{\r\n    color: white;\r\n    background-color: inherit;\r\n    font-family: monospace;\r\n    font-size: 17px;\r\n    font-weight: 500 !important;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 10px;\r\n  }\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: inherit;\r\n  }\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #dbf5f2;\r\n    border-radius: 100%;\r\n  }\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #dcf6f3;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlDQUErQztJQUMvQywyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFHZCxrREFBa0Q7QUFDdEQ7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7QUFDQSxVQUFVO0FBQ1Y7SUFDSSxXQUFXO0VBQ2I7QUFFQSxVQUFVO0FBQ1Y7SUFDRSxtQkFBbUI7RUFDckI7QUFFQSxXQUFXO0FBQ1g7SUFDRSxtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0UsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2ltYWdlcy9iYWNrLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTA4dmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi50b29sYmFye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY29sb3I6ICM2ZGJhZDQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAyNHB4IDE0MHB4IDdweCByZ2JhKDIyMiwyNDgsMjQ1LDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggMjRweCAxNDBweCA3cHggcmdiYSgyMjIsMjQ4LDI0NSwxKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAyNHB4IDE0MHB4IDdweCByZ2JhKDIyMiwyNDgsMjQ1LDEpO1xyXG59XHJcbi5kcmF3ZXJ7XHJcbiAgICB3aWR0aDogMjM2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGRlO1xyXG59XHJcbi5uYXZiYXItYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuLm5hdmJhci1idXR0b24gOmhvdmVye1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDsgKi9cclxufVxyXG4uZHJhd2VyLWlubmVyLWRpdntcclxuICAgIG1hcmdpbi10b3A6IDEwM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7IFxyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDsgICBcclxufVxyXG4uZGRyYXdlci1jb25lbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4uZGlhbG9nLXdpZHRoe1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuLmxvZ2luU2lnbnVwe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogd2lkdGggKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogVHJhY2sgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhhbmRsZSAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI2RiZjVmMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2RjZjZmMztcclxuICB9Il19 */";
// import image from "../../../images/back.jpg"
class HomeComponent {
    constructor(http, router, dialog, userDataService) {
        this.http = http;
        this.router = router;
        this.dialog = dialog;
        this.userDataService = userDataService;
        this.userData = null;
    }
    ngOnInit() {
        this.userDataService.userData.subscribe(data => {
            this.userData = data;
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '500px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    }
    checkSignIn(route) {
        if (this.userData) {
            this.router.navigate([route]);
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    login() {
        this.router.navigate(['/login']);
    }
    logout() {
        this.http.apiPost('/users/logout', {}).subscribe((res) => {
            console.log("res", res);
            localStorage.clear();
            this.userDataService.updateUser(null);
            window.location.reload();
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_2__["HttphandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 22, vars: 3, consts: [["color", "primary", 1, "toolbar"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon", 3, "click"], [1, "example-spacer"], ["mat-raised-button", "", "class", "loginSignup", 3, "click", 4, "ngIf"], [1, "example-container", 3, "hasBackdrop"], [1, "drawer"], ["drawer", ""], [1, "drawer-inner-div"], ["mat-raised-button", "", "color", "primary", "routerLink", "Dashboard", 1, "navbar-button"], ["mat-raised-button", "", "color", "primary", 1, "navbar-button", 3, "click"], [1, "ddrawer-conent"], ["mat-raised-button", "", 1, "loginSignup", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return _r2.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_button_8_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_button_9_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-drawer-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-drawer", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_16_listener() { return ctx.checkSignIn("MySurvey"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "My Survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_18_listener() { return ctx.checkSignIn("Profile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-drawer-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", false);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawer"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [_c0] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_2__["HttphandlerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: src_app_Services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"] }]; }, null); })();
class DialogOverviewExampleDialog {
    constructor(dialogRef, data, userDataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userDataService = userDataService;
        this.dialogRef.afterClosed().subscribe(result => {
            console.log("result", result);
        });
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) { return new (t || DialogOverviewExampleDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"])); };
DialogOverviewExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogOverviewExampleDialog, selectors: [["dialog-overview-example-dialog"]], decls: 3, vars: 0, consts: [[1, "main-dialog-div"], ["mat-dialog-content", "", "width", "300", 1, "dialog-width"]], template: function DialogOverviewExampleDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-login-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _LoginPage_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPageComponent"]], styles: [_c0] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogOverviewExampleDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dialog-overview-example-dialog',
                templateUrl: 'dialog-overview-example-dialog.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_Services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"] }]; }, null); })();


/***/ }),

/***/ "jtA1":
/*!*********************************************************!*\
  !*** ./src/app/components/MySurvey/survey.component.ts ***!
  \*********************************************************/
/*! exports provided: MySurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySurveyComponent", function() { return MySurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/HTTPServices/httphandler.service */ "SLqi");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function MySurveyComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MySurveyComponent_button_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const survey_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.navigateToRecord(survey_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const survey_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](survey_r1.title);
} }
class MySurveyComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.user = { _id: "", name: "" };
        this.surveys = [];
        this.limit = 10;
        this.skip = 0;
        this.count = 0;
        this.totalDocCounts = 0;
        let userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            this.user = {
                name: userData.name,
                _id: userData._id
            };
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    ngOnInit() {
        this.http.apiGet(`/user/survey/${this.user._id}/${this.limit}/${this.skip}`).subscribe((res) => {
            this.surveys = res.survey;
            this.count = res.count;
        });
    }
    navigateToCreate() {
        this.router.navigate(['/CreateSurvey']);
    }
    navigateToRecord(survey) {
        this.router.navigate(['/SurveyRecord', { survey: JSON.stringify(survey) }]);
    }
    handlePage(event) {
        console.log("event", event);
    }
}
MySurveyComponent.ɵfac = function MySurveyComponent_Factory(t) { return new (t || MySurveyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_2__["HttphandlerService"])); };
MySurveyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MySurveyComponent, selectors: [["app-my-survey"]], decls: 4, vars: 1, consts: [[1, "survey-main-wrapper"], ["mat-raised-button", "", "color", "primary", 1, "createsurvey", 3, "click"], ["mat-raised-button", "", "class", "dashboard-card", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "dashboard-card"], [1, "survey-ttitle"], ["mat-raised-button", "", "color", "primary", 1, "record", 3, "click"]], template: function MySurveyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MySurveyComponent_Template_button_click_1_listener() { return ctx.navigateToCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MySurveyComponent_button_3_Template, 5, 1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.surveys);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".survey-main-wrapper[_ngcontent-%COMP%]{\r\n\r\n    position: relative;\r\n    width: 80%;\r\n    left: 10%;\r\n    margin-top: 104px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n}\r\n.createsurvey[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    position: relative;\r\n    left: 85%;\r\n    margin-bottom: 20px;\r\n}\r\n.dashboard-card[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: left;\r\n    height: 54px;\r\n    margin-bottom: 20px;\r\n    font-size: 18px;\r\n    font-family: cursive;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\r\n.paginator[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 100%;    \r\n    background-color: inherit;\r\n}\r\n.record[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    left: 20px;\r\n}\r\n.survey-ttitle[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    float: left;\r\n    width: 88%;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cnZleS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULGlCQUFpQjtJQUNqQiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzdXJ2ZXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdXJ2ZXktbWFpbi13cmFwcGVye1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDRweDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLmNyZWF0ZXN1cnZleXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA4NSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5kYXNoYm9hcmQtY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ucGFnaW5hdG9ye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG4ucmVjb3Jke1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMjBweDtcclxufVxyXG4uc3VydmV5LXR0aXRsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDg4JTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MySurveyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-survey',
                templateUrl: './survey.component.html',
                styleUrls: ['./survey.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_2__["HttphandlerService"] }]; }, null); })();


/***/ }),

/***/ "poM3":
/*!***********************************************!*\
  !*** ./src/app/Services/user-data.service.ts ***!
  \***********************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class UserDataService {
    constructor() {
        var struser = localStorage.getItem("userData");
        console.log("struser", struser);
        var user = JSON.parse(struser);
        console.log("user", user);
        user && (this.userDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](user));
        !user && (this.userDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null));
        this.userData = this.userDataSource.asObservable();
    }
    updateUser(data) {
        this.userDataSource.next(data);
    }
}
UserDataService.ɵfac = function UserDataService_Factory(t) { return new (t || UserDataService)(); };
UserDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserDataService, factory: UserDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create-survey/create-survey.component */ "NIEI");
/* harmony import */ var _components_Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Dashboard/dashboard/dashboard.component */ "Q8yv");
/* harmony import */ var _components_LoginPage_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/LoginPage/login-page/login-page.component */ "9Bqo");
/* harmony import */ var _components_MySurvey_survey_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/MySurvey/survey.component */ "jtA1");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_SignUpPage_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SignUpPage/sign-up/sign-up.component */ "TWkg");
/* harmony import */ var _components_survey_record_survey_record_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/survey-record/survey-record.component */ "ybwX");
/* harmony import */ var _components_Survey_survey_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Survey/survey.component */ "NOdj");












const routes = [
    { path: '', component: _components_Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'login', component: _components_LoginPage_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"] },
    { path: 'signup', component: _components_SignUpPage_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"] },
    { path: 'Dashboard', component: _components_Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'MySurvey', component: _components_MySurvey_survey_component__WEBPACK_IMPORTED_MODULE_5__["MySurveyComponent"] },
    { path: 'Survey', component: _components_Survey_survey_component__WEBPACK_IMPORTED_MODULE_9__["SurveyComponent"] },
    { path: 'Profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'CreateSurvey', component: _components_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_2__["CreateSurveyComponent"] },
    { path: 'SurveyRecord', component: _components_survey_record_survey_record_component__WEBPACK_IMPORTED_MODULE_8__["SurveyRecordComponent"] },
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


/***/ }),

/***/ "wn8t":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _HomePage_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HomePage/home/home.component */ "d9/D");



class LandingPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 1, vars: 0, template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
    } }, directives: [_HomePage_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ybwX":
/*!*********************************************************************!*\
  !*** ./src/app/components/survey-record/survey-record.component.ts ***!
  \*********************************************************************/
/*! exports provided: SurveyRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyRecordComponent", function() { return SurveyRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/HTTPServices/httphandler.service */ "SLqi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function SurveyRecordComponent_table_1_tbody_8_tr_4_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opts_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opts_r6.option);
} }
function SurveyRecordComponent_table_1_tbody_8_tr_4_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opts_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opts_r6.count ? opts_r6.count : 0);
} }
function SurveyRecordComponent_table_1_tbody_8_tr_4_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opts_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", opts_r6.count ? ctx_r9.round(opts_r6.count / ctx_r9.rec.length * 100) : 0, "%");
} }
function SurveyRecordComponent_table_1_tbody_8_tr_4_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opts_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opts_r6);
} }
function SurveyRecordComponent_table_1_tbody_8_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SurveyRecordComponent_table_1_tbody_8_tr_4_td_1_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SurveyRecordComponent_table_1_tbody_8_tr_4_td_2_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SurveyRecordComponent_table_1_tbody_8_tr_4_td_3_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SurveyRecordComponent_table_1_tbody_8_tr_4_td_4_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r5.surveyType === "shortanswer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r5.surveyType === "shortanswer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r5.surveyType === "shortanswer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.surveyType === "shortanswer");
} }
function SurveyRecordComponent_table_1_tbody_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SurveyRecordComponent_table_1_tbody_8_tr_4_Template, 5, 4, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const qnos_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](qnos_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", qnos_r4.options);
} }
function SurveyRecordComponent_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SurveyRecordComponent_table_1_tbody_8_Template, 5, 2, "tbody", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.questions);
} }
function SurveyRecordComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SurveyRecordComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.export_xlsx("exportContent"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SurveyRecordComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SurveyRecordComponent {
    constructor(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.questions = [];
        // shortanswerquestions=[]
        this.surveyType = null;
    }
    ngOnInit() {
        this.survey = JSON.parse(this.route.snapshot.paramMap.get('survey'));
        this.http.apiGet(`/surveyResponse/getFromSurveyID/${this.survey._id}`).subscribe((res) => {
            var _a, _b, _c, _d;
            this.surveyRecords = res.survey;
            const rec = res.survey;
            this.surveyType = res.survey[0].type;
            if (res.survey[0].type === "agreedisagree") {
                console.log("agreedisagree");
                const ric = res.survey[0].questions.map(m => {
                    return {
                        title: m.title,
                        _id: m._id,
                        options: [
                            { option: "Agree", count: 0 },
                            { option: 'Disagree', count: 0 }
                        ]
                    };
                });
                this.questions = ric;
            }
            else if (res.survey[0].type === "mcqs") {
                console.log("mcqs");
                this.questions = res.survey[0].questions.map(m => {
                    return {
                        title: m.title,
                        _id: m._id,
                        options: m.options.map(op => { return Object.assign(Object.assign({}, op), { count: 0 }); }),
                    };
                });
            }
            else {
                console.log("shortanswer");
                this.questions = res.survey[0].questions.map(m => {
                    return {
                        title: m.title,
                        _id: m._id,
                        options: []
                    };
                });
            }
            if (res.survey.length)
                for (let sur = 0; sur < res.survey.length; sur++) {
                    for (let qno = 0; qno < ((_a = res.survey[sur]) === null || _a === void 0 ? void 0 : _a.questions.length); qno++) {
                        for (let opt = 0; opt < ((_b = res.survey[sur]) === null || _b === void 0 ? void 0 : _b.questions[qno].options.length); opt++) {
                            if (res.survey[sur].type === "mcqs") {
                                if ((_c = res.survey[sur].questions[qno]) === null || _c === void 0 ? void 0 : _c.options[opt].answer) {
                                    this.questions[qno].options[opt]['count'] = this.questions[qno].options[opt]['count'] + 1;
                                }
                            }
                            else if (res.survey[sur].type === "agreedisagree") {
                                if (((_d = res.survey[sur].questions[qno]) === null || _d === void 0 ? void 0 : _d.options[0]) === "true") {
                                    this.questions[qno].options[0]['count'] = this.questions[qno].options[0]['count'] + 1;
                                }
                                else {
                                    this.questions[qno].options[1]['count'] = this.questions[qno].options[1]['count'] + 1;
                                }
                            }
                            else if (res.survey[sur].type === "shortanswer") {
                                this.questions[qno].options.push(res.survey[sur].questions[qno].options[0]);
                            }
                        }
                    }
                }
            this.rec = rec;
            // for(let i=0;i<res.survey[0].questions.length;i++){
            //   let rec={
            //     title:res.survey[0].questions[i].title,
            //     options:{...res.survey[0].questions[i].options,count:0}
            //   }
            //   for(let j=0;j<res.survey[0].questions[i].options.length;j++){
            //     for(let k=0;k<res.survey;k++){
            //       if(res.survey[k].questions[i].options[j].answer===true){
            //         rec.options[j].count++
            //         console.log("dwd",res.survey[k].questions[i].options[j].answer)
            //       }
            //     }
            //   }
            //   console.log("rec",rec)
            // }
        });
    }
    round(r) {
        return Math.round(r * 100) / 100;
    }
    export_xlsx(element) {
        var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
        tab_text = tab_text + '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';
        tab_text = tab_text + '<x:Name>Record Sheet</x:Name>';
        tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
        tab_text = tab_text + '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';
        tab_text = tab_text + "<table border='1px'>";
        tab_text = tab_text + document.getElementById(element).innerHTML;
        tab_text = tab_text + '</table></body></html>';
        var data_type = 'data:application/vnd.ms-excel';
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            if (window.navigator.msSaveBlob) {
                var blob = new Blob([tab_text], {
                    type: "application/csv;charset=utf-8;"
                });
                navigator.msSaveBlob(blob, 'Record.xls');
            }
        }
        else {
            var downloadLink = document.createElement("a");
            document.body.appendChild(downloadLink);
            downloadLink.href = data_type + ', ' + encodeURIComponent(tab_text);
            downloadLink.download = 'Test file.xls';
            downloadLink.click();
        }
    }
}
SurveyRecordComponent.ɵfac = function SurveyRecordComponent_Factory(t) { return new (t || SurveyRecordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_2__["HttphandlerService"])); };
SurveyRecordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SurveyRecordComponent, selectors: [["app-survey-record"]], decls: 4, vars: 3, consts: [[1, "record-wrapper"], ["class", "table-record", "id", "exportContent", 4, "ngIf"], ["class", "exportbtn", "color", "primary", "mat-raised-button", "", 3, "click", 4, "ngIf"], [4, "ngIf"], ["id", "exportContent", 1, "table-record"], [1, "table-h"], [4, "ngFor", "ngForOf"], [1, "qno-head"], ["colspan", "3", 1, "qno-head-title"], ["class", "normal-body", 4, "ngIf"], ["colspan", "3", "class", "normal-body shortans", 4, "ngIf"], [1, "normal-body"], ["colspan", "3", 1, "normal-body", "shortans"], ["color", "primary", "mat-raised-button", "", 1, "exportbtn", 3, "click"]], template: function SurveyRecordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SurveyRecordComponent_table_1_Template, 9, 1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SurveyRecordComponent_button_2_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SurveyRecordComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rec && ctx.rec.length && ctx.surveyType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rec && ctx.rec.length && ctx.surveyType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.rec);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".record-wrapper[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top: 100px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 70%;\r\n}\r\n.table-record[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 100%;\r\n}\r\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n  }\r\n.table-h[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n}\r\n.qno-head[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    font-size: 20px;\r\n    height: 42px;\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n}\r\n.normal-body[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-size: 18px;\r\n    padding: 10px;\r\n}\r\n.qno-head-title[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    left: 10px;\r\n    font-size: 23px;\r\n    padding-left: 20px;\r\n}\r\n.shortans[_ngcontent-%COMP%]{\r\n    text-align: left !important;\r\n}\r\n.exportbtn[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    margin-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cnZleS1yZWNvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULDJCQUEyQjtJQUMzQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7RUFDM0I7QUFDRjtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzdXJ2ZXktcmVjb3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjb3JkLXdyYXBwZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG4udGFibGUtcmVjb3Jke1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxudGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgfVxyXG4udGFibGUtaHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLnFuby1oZWFke1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLm5vcm1hbC1ib2R5e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4ucW5vLWhlYWQtdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4uc2hvcnRhbnN7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmV4cG9ydGJ0bntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurveyRecordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-survey-record',
                templateUrl: './survey-record.component.html',
                styleUrls: ['./survey-record.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_Services_HTTPServices_httphandler_service__WEBPACK_IMPORTED_MODULE_2__["HttphandlerService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/compiler */ "1uSB");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map