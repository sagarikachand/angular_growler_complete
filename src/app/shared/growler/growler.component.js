"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var growler_service_1 = require("./growler.service");
var core_2 = require("@angular/core");
var GrowlerComponent = (function () {
    function GrowlerComponent(growlerService) {
        this.timeout = 3000;
        this.growlerCount = 0;
        this.growls = [];
        this.position = 'top';
        growlerService.growl = this.growl.bind(this);
    }
    GrowlerComponent.prototype.growl = function (growlMessage, mesgType) {
        this.growlerCount++;
        var bootstrapstyle = growler_service_1.GrowlMessageType[mesgType].toLowerCase();
        console.log("bootstrap " + bootstrapstyle);
        var messageType = "alert-" + bootstrapstyle;
        var growl = new Growl(growlMessage, messageType, this.growlerCount, this.timeout, this);
        this.growls.push(growl);
        return growl.id;
    };
    GrowlerComponent.prototype.remove = function (id) {
        var _this = this;
        this.growlerCount--;
        this.growls.forEach(function (growl, index) {
            if (growl.id == id) {
                _this.growlerCount--;
                _this.growls.splice(index, 1);
                console.log('removed ' + id);
            }
        });
    };
    __decorate([
        core_2.Input(),
        __metadata("design:type", Number)
    ], GrowlerComponent.prototype, "timeout", void 0);
    __decorate([
        core_2.Input(),
        __metadata("design:type", Object)
    ], GrowlerComponent.prototype, "position", void 0);
    GrowlerComponent = __decorate([
        core_1.Component({
            selector: 'cm-growler',
            template: "<div [ngClass]=\"position\" class=\"growler\">\n  <div *ngFor=\"let growl of growls\" [ngClass]=\"{active: growl.enabled}\"\n     class=\"growl alert {{ growl.mesgType }}\">\n     <span class=\"growl-message\">{{ growl.message }}</span>\n  </div>\n</div>",
            styleUrls: ['./app/shared/growler/growler.component.css']
        }),
        __metadata("design:paramtypes", [growler_service_1.GrowlerService])
    ], GrowlerComponent);
    return GrowlerComponent;
}());
exports.GrowlerComponent = GrowlerComponent;
var Growl = (function () {
    function Growl(message, mesgType, id, timeoutid, growlerComponent) {
        this.message = message;
        this.mesgType = mesgType;
        this.id = id;
        this.timeoutid = timeoutid;
        this.growlerComponent = growlerComponent;
        this.enabled = false;
        console.log(mesgType);
        this.show();
    }
    Growl.prototype.show = function () {
        var _this = this;
        window.setTimeout(function () {
            _this.enabled = true;
            _this.timeout();
        }, 0);
    };
    Growl.prototype.timeout = function () {
        var _this = this;
        setTimeout(function () {
            _this.hide();
        }, this.timeoutid);
    };
    Growl.prototype.hide = function () {
        var _this = this;
        this.enabled = false;
        setTimeout(function () {
            _this.growlerComponent.remove(_this.id);
        }, this.timeoutid);
    };
    return Growl;
}());
exports.Growl = Growl;
//# sourceMappingURL=growler.component.js.map