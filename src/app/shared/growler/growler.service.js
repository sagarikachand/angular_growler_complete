"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GrowlerService = (function () {
    function GrowlerService() {
    }
    GrowlerService = __decorate([
        core_1.Injectable()
    ], GrowlerService);
    return GrowlerService;
}());
exports.GrowlerService = GrowlerService;
var GrowlMessageType;
(function (GrowlMessageType) {
    GrowlMessageType[GrowlMessageType["Success"] = 0] = "Success";
    GrowlMessageType[GrowlMessageType["Warning"] = 1] = "Warning";
    GrowlMessageType[GrowlMessageType["Danger"] = 2] = "Danger";
    GrowlMessageType[GrowlMessageType["Info"] = 3] = "Info";
})(GrowlMessageType = exports.GrowlMessageType || (exports.GrowlMessageType = {}));
//# sourceMappingURL=growler.service.js.map