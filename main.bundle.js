webpackJsonp([1,4],{

/***/ 343:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 343;


/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(455);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/simmi/AngularNew/TransformerGame-master/src/main.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattleData; });
// Dataholder of attrubutes of a battle
var BattleData = (function () {
    function BattleData() {
    }
    return BattleData;
}());
//# sourceMappingURL=D:/simmi/AngularNew/TransformerGame-master/src/BattleData.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattleException; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var BattleException = (function (_super) {
    __extends(BattleException, _super);
    function BattleException() {
        _super.call(this, true);
    }
    BattleException.prototype.handleError = function (exception) {
        alert(exception);
        //super.handleError(error);
    };
    return BattleException;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ErrorHandler */]));
//# sourceMappingURL=D:/simmi/AngularNew/TransformerGame-master/src/BattleExceptionHandler.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transformer__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BattleData__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolveBattleService__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validationService__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BattleExceptionHandler__ = __webpack_require__(453);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(battleService, battleValidaton) {
        this.title = 'Autobots vs Decepticons Battle';
        this.battleInput = "";
        this.battleService = battleService;
        this.battleExceptionHandler = new __WEBPACK_IMPORTED_MODULE_5__BattleExceptionHandler__["a" /* BattleException */]();
        this.battleData = new __WEBPACK_IMPORTED_MODULE_2__BattleData__["a" /* BattleData */]();
        this.battleValidation = new __WEBPACK_IMPORTED_MODULE_4__validationService__["a" /* BattleValidationHelper */]();
    }
    // initializes all the properties
    AppComponent.prototype.init = function () {
        this.battleData.aTeam = [];
        this.battleData.dTeam = [];
        this.battleData.winners = [];
        this.battleData.lefts = [];
        this.battleData.numberOfBattles = null;
        this.battleData.aWins = 0;
        this.battleData.dWins = 0;
        this.battleData.defeated = "";
        this.battleData.finalWinner = "";
    };
    // master method for battle
    /* 1. Form Autobots and Decepticons teams
       2. Make the teams fight
       3. Set the intermediate winners
       4. Set the survivors
       5. Set the final winner
  
    */
    AppComponent.prototype.startBattle = function () {
        try {
            this.init();
            this.constructTeams();
            this.battleData.numberOfBattles = 0;
            if (!(this.isBattlePossible())) {
                this.exception = "Battle is not possible within single or no team. ";
                throw (this.exception);
            }
            // Fight will go till both teams have fighters left
            while (this.battleData.aTeam.length > 0 && this.battleData.dTeam.length > 0) {
                this.battleService = new __WEBPACK_IMPORTED_MODULE_3__resolveBattleService__["a" /* ResolveBattleService */]();
                // for one on one fight, high ranked fighter is chosen from each team and then removed from the list of figthers
                var winTeam = this.battleService.findWinner(this.battleData.aTeam.pop(), this.battleData.dTeam.pop(), this.exception);
                if (winTeam != null) {
                    this.winnerSetup(winTeam);
                }
                this.battleData.numberOfBattles += 1;
            }
            this.setLefts();
            this.setFinalWinner();
        }
        catch (exception) {
            this.battleExceptionHandler.handleError(exception);
        }
    };
    // If no team or only single team figthers are available, so no battle
    AppComponent.prototype.isBattlePossible = function () {
        if (this.battleData.aTeam.length == 0 || this.battleData.dTeam.length == 0) {
            return false;
        }
        return true;
    };
    // validates the figthers data entered by user and creates the seperate teams for autobots and decepticons sorted by rank
    AppComponent.prototype.constructTeams = function () {
        var input = [];
        input = this.battleInput.split('\n');
        for (var i = 0; i < input.length; i++) {
            this.battleValidation.validateInput(input[i], this.exception);
            this.transformer = new __WEBPACK_IMPORTED_MODULE_1__transformer__["a" /* Transformer */]();
            var trans = this.transformer.createTransformer(input[i], this.transformer);
            if (trans == undefined)
                continue;
            if (trans.team == "A")
                this.battleData.aTeam.push(trans);
            if (trans.team == "D")
                this.battleData.dTeam.push(trans);
            //sort
            this.battleData.aTeam = this.battleData.aTeam.sort(function (a, b) {
                if (a.rank < b.rank) {
                    return -1;
                }
                else if (a.rank > b.rank) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            this.battleData.dTeam = this.battleData.dTeam.sort(function (a, b) {
                if (a.rank < b.rank) {
                    return -1;
                }
                else if (a.rank > b.rank) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
    };
    // Sets the data to decide final winner(no of wins, intermediate winner)
    AppComponent.prototype.winnerSetup = function (winner) {
        if (winner.team == "D") {
            this.battleData.dWins++;
        }
        if (winner.team == "A") {
            this.battleData.aWins++;
        }
        this.battleData.winners.push(winner);
    };
    // sets the survivors of loosing team
    AppComponent.prototype.setLefts = function () {
        if ((this.battleData.dWins == this.battleData.aWins) && (this.battleData.dWins > 0)) {
            this.exception = "Its a tie as both the transformers knocked same number of opponents in " + this.battleData.numberOfBattles + " battles.";
            throw (this.exception);
        }
        else {
            this.battleData.defeated = this.battleData.dWins > this.battleData.aWins ? "Autobots" : "Decepticons";
            this.battleData.lefts = (this.battleData.defeated == "Decepticons") ? this.battleData.dTeam : this.battleData.aTeam;
        }
    };
    // sets the final winner
    AppComponent.prototype.setFinalWinner = function () {
        var winner;
        winner = this.battleData.winners;
        for (var i = winner.length - 1; i >= 0; i--) {
            var looser = this.battleData.defeated == "Decepticons" ? "D" : "A";
            if (winner[i].team != looser) {
                this.battleData.finalWinner = winner[i];
            }
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(615),
            styles: [__webpack_require__(614)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__resolveBattleService__["a" /* ResolveBattleService */], __WEBPACK_IMPORTED_MODULE_4__validationService__["a" /* BattleValidationHelper */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__resolveBattleService__["a" /* ResolveBattleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__resolveBattleService__["a" /* ResolveBattleService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__validationService__["a" /* BattleValidationHelper */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__validationService__["a" /* BattleValidationHelper */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/simmi/AngularNew/TransformerGame-master/src/app.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(454);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/simmi/AngularNew/TransformerGame-master/src/app.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResolveBattleService; });
var ResolveBattleService = (function () {
    function ResolveBattleService() {
        this.kingOfTransformers = null;
        this.aTeam = [];
        this.dTeam = [];
        this.exception = null;
    }
    // checks if any of the transformer is the superpower(Optimus Prime, Predaking)
    ResolveBattleService.prototype.FindSpecialTransformer = function () {
        if ((this.aTeam.name == "OptimusPrime" || this.aTeam.name == "Predaking") && (this.dTeam.name == "OptimusPrime" || this.dTeam.name == "Predaking")) {
            this.kingOfTransformers = null;
            this.exception = "Fight between " + this.aTeam.name + " and " + this.dTeam.name + ". So, no Battle as they are the superpowers.";
            throw (this.exception);
        }
        else if (this.aTeam.name == "OptimusPrime" || this.aTeam.name == "Predaking") {
            this.kingOfTransformers = this.aTeam;
        }
        else if (this.dTeam.name == "OptimusPrime" || this.dTeam.name == "Predaking") {
            this.kingOfTransformers = this.dTeam;
        }
    };
    // master method to figure out the winner
    /* 1. Check if any of the transformer is superpower
       2. Check opponent run away based on strength and courage
       3. Check Skill
       4. Check Overall rating
    */
    ResolveBattleService.prototype.findWinner = function (autobot, decepticon, ex) {
        this.exception = ex;
        this.aTeam = autobot;
        this.dTeam = decepticon;
        this.FindSpecialTransformer();
        if (this.kingOfTransformers == null) {
            if ((this.aTeam.strength - this.dTeam.strength) >= 3 && (this.aTeam.courage - this.dTeam.courage) >= 3) {
                this.kingOfTransformers = this.aTeam;
            }
            else if ((this.dTeam.strength - this.aTeam.strength) >= 3 && (this.dTeam.courage - this.aTeam.courage) >= 3) {
                this.kingOfTransformers = this.dTeam;
            }
            else if (this.aTeam.skill - this.dTeam.skill >= 3) {
                this.kingOfTransformers = this.aTeam;
            }
            else if (this.dTeam.skill - this.aTeam.skill >= 3) {
                this.kingOfTransformers = this.dTeam;
            }
            else if (this.aTeam.overallRating > this.dTeam.overallRating) {
                this.kingOfTransformers = this.aTeam;
            }
            else if (this.dTeam.overallRating > this.aTeam.overallRating) {
                this.kingOfTransformers = this.dTeam;
            }
            else if (this.aTeam.overallRating == this.dTeam.overallRating) {
                this.kingOfTransformers = null;
                this.exception = "Its a tie between " + this.aTeam.name + " and " + this.dTeam.name + ".";
                throw (this.exception);
            }
        }
        return this.kingOfTransformers;
    };
    return ResolveBattleService;
}());
//# sourceMappingURL=D:/simmi/AngularNew/TransformerGame-master/src/resolveBattleService.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transformer; });
var Transformer = (function () {
    function Transformer() {
    }
    Transformer.prototype.createTransformer = function (input, transformer) {
        input = input.replace(/ /gi, "");
        var arr = input.split(',');
        if (arr.length == 1 && arr[0] == "") {
            return;
        }
        transformer.name = arr[0];
        transformer.team = arr[1];
        transformer.strength = Number(arr[2]);
        transformer.intelligence = Number(arr[3]);
        transformer.speed = Number(arr[4]);
        transformer.endurance = Number(arr[5]);
        transformer.rank = Number(arr[6]);
        transformer.courage = Number(arr[7]);
        transformer.firePower = Number(arr[8]);
        transformer.skill = Number(arr[9]);
        transformer.overallRating = transformer.strength + transformer.intelligence + transformer.speed + transformer.endurance + transformer.firePower;
        return transformer;
    };
    return Transformer;
}());
//# sourceMappingURL=D:/simmi/AngularNew/TransformerGame-master/src/transformer.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattleValidationHelper; });
var BattleValidationHelper = (function () {
    function BattleValidationHelper() {
    }
    BattleValidationHelper.prototype.validateInput = function (input, exception) {
        // removes spaces from the input
        input = input.replace(/ /gi, "");
        var arr = input.split(',');
        if (arr.length == 1 && arr[0] == "") {
            return;
        }
        if (arr.length < 10) {
            exception = "Enter complete details for " + arr[0] + " and try again";
            throw (exception);
        }
        else {
            for (var i = 0; i < arr.length; i++) {
                if (i == 0 || i == 1) {
                    if (arr[i] == null || arr[i].length == 0) {
                        exception = "Transformers name (and/or) team cannot be left blank. Kindly check attributes for  " + arr[0] + " and try again.";
                        throw (exception);
                    }
                    if (i == 1) {
                        if (arr[i] != "D" && arr[i] != "A") {
                            exception = "Transformers team should either be 'D' or 'A'.Kindly check attributes for  " + arr[0] + " and try again.";
                            throw (exception);
                        }
                    }
                }
                else {
                    if (arr[i] == null || arr[i] == "" || isNaN(arr[i]) || arr[i] > 10 || arr[i] < 0) {
                        exception = "Transformers attributes should be a number between 1 to 10. Kindly check attributes for " + arr[0] + " and try again.";
                        throw (exception);
                    }
                }
            }
        }
    };
    return BattleValidationHelper;
}());
//# sourceMappingURL=D:/simmi/AngularNew/TransformerGame-master/src/validationService.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/simmi/AngularNew/TransformerGame-master/src/environment.js.map

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <section>\n    <h4> Enter the participant details below in order(Name, Team, Strength, Intelligence, Speed, Endurance, Rank, Courage, FirePower,\n      Skill):</h4>\n    <form (ngSubmit)=\"startBattle()\" #myForm=\"ngForm\">\n      <textarea [(ngModel)]=\"battleInput\" ng-trim=\"false\" required name=\"input\" rows=\"15\" cols=\"45\"></textarea>\n      <br>\n      <button type=\"submit\" name=\"btn\" class=\"btnbtn-default\" [disabled]=\"!myForm.form.valid\">Start Battle</button>\n    </form>\n    <div *ngIf=\"battleData.numberOfBattles!=undefined && battleData.numberOfBattles!='' && battleData.numberOfBattles>=0\">\n      <p id=\"battle\">{{ battleData.numberOfBattles }} &nbsp; battle(s)</p>\n      <p *ngIf=\"battleData.finalWinner != undefined && battleData.finalWinner != '' \">Winning team ({{battleData.defeated=='Decepticons'?'Autobots':'Decepticons'}}) :\n        <span class=\"winner\" *ngIf=\"battleData.finalWinner != undefined\">{{ battleData.finalWinner.name }} </span>\n      </p>\n      <p *ngIf=\"battleData.defeated=='Decepticons'||battleData.defeated== 'Autobots'\">Survivors from the losing team ({{battleData.defeated}}) :\n        <span class=\"survivor\" *ngFor=\"let survivor of battleData.lefts\">{{ survivor.name }}. </span>\n      </p>\n    </div>\n  </section>"

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(344);


/***/ })

},[630]);
//# sourceMappingURL=main.bundle.map