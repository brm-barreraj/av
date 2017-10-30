webpackJsonp([0],{

/***/ 106:
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
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_mocks_user_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_request_service__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(alertCtrl, loadingCtrl, navCtrl, userService, request) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.request = request;
        this.user = { email: '', password: '' };
        this.login = function () {
            if (_this.user.email != '' && _this.user.password != '') {
                var loading_1 = _this.loadingCtrl.create({
                    content: 'please wait....'
                });
                loading_1.present();
                _this.userService.loginUser(_this.user.email, _this.user.password)
                    .then(function (response) {
                    loading_1.dismiss();
                    console.log(response, 'Respeusta ');
                    if (response != undefined) {
                        console.log(response);
                        //this.navCtrl.push(TabsPage);
                    }
                    else {
                        // let alert = this.alertCtrl.create({
                        // 	title:'Login',
                        // 	subTitle:'Usuario y/o contraseña incorrecta',
                        // 	buttons: ['Aceptar']
                        // });
                        //alert.present();
                    }
                });
            }
            else {
                var alert = _this.alertCtrl.create({
                    title: 'Login',
                    subTitle: 'Usuario y contraseña requeridas',
                    buttons: ['Aceptar']
                });
                alert.present();
            }
        };
    }
    LoginPage.prototype.ngOnInit = function () {
        var json = 'token=34221068&consulta=getDepartamentos&isRedirect=NO&pageRedirect=&pageError=&callback=getDepartamentos';
        this.request.postp('https://www.avantel.co/funcionalidadmiavantel/consultasgenerales.du', json)
            .subscribe(function (result) {
            console.log(result, 'resultado request');
            console.log(result.object.token, 'resultado token');
        }, function (error) {
            console.log(error, 'error');
        });
        //user = this.find(email,password);
        //console.log(this.user,'resultado antes de enviar');
        //return Promise.resolve("this.user");
        /*.then(response => {
                console.log(response,'Respeusta ');
                if( response != undefined){
                    console.log(response);
                    //this.navCtrl.push(TabsPage);
                }else{
                    // let alert = this.alertCtrl.create({
                    // 	title:'Login',
                    // 	subTitle:'Usuario y/o contraseña incorrecta',
                    // 	buttons: ['Aceptar']
                    // });
                    //alert.present();
                }

            }
        );*/
        console.log('arranco el inti');
        //si el usuairo esta logueado redireccionar a home
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"c:\xampp5\htdocs\av\aplicacion\src\pages\login\login.html"*/'<img src="https://www.rocketlanguages.com/images/common/generic-avatar-500x500.png">\n\n<h1>Login</h1>\n\n<ion-item>\n\n	<ion-label color="primary" stacked>E-mail</ion-label>\n\n	<ion-input [(ngModel)]="user.email" type="email" placeholder="Email"></ion-input>			\n\n</ion-item>	\n\n<ion-item>\n\n	<ion-label color="primary" stacked>Password</ion-label>\n\n	<ion-input [(ngModel)]="user.password" type="password" placeholder="Password"></ion-input>			\n\n</ion-item>	\n\n<button ion-button (tap)="login()" >Login</button>\n\n<button ion-button (tap)="signin()" >Sign In</button>'/*ion-inline-end:"c:\xampp5\htdocs\av\aplicacion\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_mocks_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_mocks_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_request_service__["a" /* RequestService */]) === "function" && _e || Object])
], LoginPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { USERS } from '../mocks/users';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';



var UserService = (function () {
    function UserService(request) {
        this.request = request;
    }
    UserService.prototype.testService = function () {
        var json = 'token=34221068&consulta=getDepartamentos&isRedirect=NO&pageRedirect=&pageError=&callback=getDepartamentos';
        this.request.post('https://www.avantel.co/funcionalidadmiavantel/consultasgenerales.du', json)
            .subscribe(function (result) {
            console.log(result, 'resultado request');
            console.log(result.object.token, 'resultado token');
        }, function (error) {
            console.log(JSON.stringify(error), 'error');
        });
        //user = this.find(email,password);
        //console.log(this.user,'resultado antes de enviar');
        return Promise.resolve("this.user");
    };
    UserService.prototype.loginUser = function (email, password) {
        var _this = this;
        var json = 'usuario=' + email + '&clave=' + password + '&token=&consulta=LOGIN&isRedirect=NO&pageRedirect=&pageError=';
        this.request.post('https://www.avantel.co/funcionalidadmiavantel/login.du', json)
            .subscribe(function (result) {
            console.log(result, 'resultado request');
            console.log(result.object.token, 'resultado token');
            if (result.object.token != undefined) {
                console.log('entra respuesta positiva');
                _this.user.nick_name = 'nick_name';
                _this.user.full_name = 'full_name';
                _this.user.email = email;
                _this.user.password = password;
                console.log(_this.user, 'usuario 2');
            }
            else {
                _this.user = undefined;
                console.log('no creo usuario porq token = undefined');
            }
            console.log(_this.user, 'resultado');
        }, function (error) {
            console.log(error, 'error');
        });
        //user = this.find(email,password);
        console.log(this.user, 'resultado antes de enviar');
        return Promise.resolve(this.user);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestService = (function () {
    function RequestService(http, _jsonp) {
        this.http = http;
        this._jsonp = _jsonp;
    }
    RequestService.prototype.post = function (url, parameters) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ headers: headers, method: "post" });
        return this.http.post(url, parameters, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RequestService.prototype.postp = function (url, parameters) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ headers: headers, method: "post" });
        return this._jsonp.get(url + '?' + parameters)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RequestService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    RequestService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return RequestService;
}());
RequestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]) === "function" && _b || Object])
], RequestService);

var _a, _b;
//# sourceMappingURL=request.service.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.listado = [{ img: "https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314", nick_name: "@Json_", text: "Este es mi primer texto" },
            { img: "https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314", nick_name: "@Json_", text: "Este es mi segundo texto" },
            { img: "https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314", nick_name: "@Json_", text: "Este es mi tercer texto" }];
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"c:\xampp5\htdocs\av\aplicacion\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n	  <ion-item *ngFor="let item of listado">\n	    <ion-avatar item-start>\n	      <img src="{{item.img}}">\n	    </ion-avatar>\n	    <h2>{{item.nick_name}}</h2>\n	    <p>{{item.text}}</p>\n	    <ion-grid>\n		    <ion-row>\n		    	<ion-col width-33>\n			    	<ion-icon name="share-alt" color="retwit"></ion-icon>\n		    	</ion-col> \n		    	<ion-col width-33>\n			    	<ion-icon name="heart-outline"></ion-icon>\n					</ion-col> \n					<ion-col width-33>\n			    	<ion-icon name="repeat"></ion-icon>\n					</ion-col> \n\n		    </ion-row>\n\n	    </ion-grid>\n	  </ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"c:\xampp5\htdocs\av\aplicacion\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__verNotification__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationPage = (function () {
    function NotificationPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cositos = [
            { img: "https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314", nick_name: "@Json_", text: "Este es mi tercer texto", action: "reply" },
            { img: "https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314", nick_name: "@Json_", text: "Este es mi tercer texto", action: "retwitt" },
            { img: "https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314", nick_name: "@Json_", text: "Este es mi tercer texto", action: "mention" }
        ];
    }
    NotificationPage.prototype.verNotification = function (noti) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__verNotification__["a" /* VerNotificationPage */], {
            id: noti
        });
    };
    return NotificationPage;
}());
NotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notification',template:/*ion-inline-start:"c:\xampp5\htdocs\av\aplicacion\src\pages\notification\notification.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n     	Notification\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<ion-list>\n\n		<ion-item *ngFor="let item of cositos">\n\n			<ion-thumbnail item-left>\n\n				<img src="{{item.img}}">\n\n			</ion-thumbnail>\n\n			<h5>{{item.action}}</h5>\n\n			<h2>{{item.nick_name}}</h2>\n\n			<p>{{item.text}}</p>\n\n			<button (tap)="verNotification(item)" ion-button clear item-rigth>View</button>\n\n		</ion-item>\n\n	</ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"c:\xampp5\htdocs\av\aplicacion\src\pages\notification\notification.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
], NotificationPage);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerNotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerNotificationPage = (function () {
    function VerNotificationPage(navParams) {
        this.navParams = navParams;
        this.notification = navParams.get('id');
    }
    return VerNotificationPage;
}());
VerNotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ver-notification',
        template: "\n\t\t\t<ion-header>\n\t\t\t  <ion-navbar>\n\t\t\t    <ion-title>\n\t\t\t     \tNotification\n\t\t\t    </ion-title>\n\t\t\t  </ion-navbar>\n\t\t\t</ion-header>\n\n\t\t\t<ion-content padding>\n\t\t\t\t\t\t<ion-thumbnail item-left>\n\t\t\t\t\t\t\t<img src=\"{{notification.img}}\">\n\t\t\t\t\t\t</ion-thumbnail>\n\t\t\t\t\t\t<h5>{{notification.action}}</h5>\n\t\t\t\t\t\t<h2>{{notification.nick_name}}</h2>\n\t\t\t\t\t\t<p>{{notification.text}}</p>\n\n\t\t\t</ion-content>\n\t"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], VerNotificationPage);

//# sourceMappingURL=verNotification.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.twits = [
            { img: "https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314", nick_name: "@Json_", text: "Este es mi primer texto" },
            { img: "https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314", nick_name: "@Json_", text: "Este es mi segundo texto" },
            { img: "https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314", nick_name: "@Json_", text: "Este es mi tercer texto" }
        ];
        this.me = {
            img: "https://scontent-bog1-1.xx.fbcdn.net/v/t31.0-8/q85/c0.32.851.315/p851x315/16143501_10154932307544819_2112696325829089220_o.jpg?oh=31b701f71831e2a7845e64f3098437a3&oe=5A50F8C2",
            nick_name: "@Json_",
            interaction: "1",
            github: "brm-jbarraganj",
            twitter: "@Jasson_",
            medium: "@Jasson_",
            bio: "Aquí deberia tener una descripción larga de lo que sea",
        };
    }
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"c:\xampp5\htdocs\av\aplicacion\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n     	Profile\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<ion-card>\n\n  <img src="{{me.img}}"/>\n\n  <ion-card-content>\n\n    <ion-card-title>\n\n      {{me.nick_name}}\n\n      </ion-card-title>\n\n    <p>\n\n      {{me.bio}}\n\n    </p>\n\n\n\n    <ion-item>\n\n    	<ion-icon name="logo-twitter" style="color:blue">{{me.twitter}}</ion-icon>\n\n    </ion-item>    \n\n\n\n    <ion-item>\n\n    	<ion-icon name="logo-github" style="color:blue">{{me.github}}</ion-icon>\n\n    </ion-item>    \n\n\n\n    <ion-item>\n\n    	<ion-icon name="book" style="color:blue">{{me.medium}}</ion-icon>\n\n    </ion-item>\n\n\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n	<ion-list>\n\n		<ion-item *ngFor="let item of twits">\n\n			<ion-thumbnail item-left>\n\n				<img src="{{item.img}}">\n\n			</ion-thumbnail>\n\n			<h2>{{item.nick_name}}</h2>\n\n			<p>{{item.text}}</p>\n\n			<button ion-button clear item-rigth>View</button>\n\n		</ion-item>\n\n	</ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"c:\xampp5\htdocs\av\aplicacion\src\pages\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_notification_verNotification__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_mocks_user_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_request_service__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//refactor por router
var links = [
    { component: __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */], name: "Login", segment: "login" },
    { component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */], name: "tabs", segment: "tabs" },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_notification_verNotification__["a" /* VerNotificationPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, { links: links }),
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* JsonpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_notification_verNotification__["a" /* VerNotificationPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_13__services_mocks_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_14__services_request_service__["a" /* RequestService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"c:\xampp5\htdocs\av\aplicacion\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"c:\xampp5\htdocs\av\aplicacion\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__notification_notification__["a" /* NotificationPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"c:\xampp5\htdocs\av\aplicacion\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n	<ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" ></ion-tab>\n\n	<ion-tab [root]="tab2Root" tabTitle="Notification" tabIcon="information-circle" ></ion-tab>\n\n	<ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="contacts" ></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"c:\xampp5\htdocs\av\aplicacion\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map