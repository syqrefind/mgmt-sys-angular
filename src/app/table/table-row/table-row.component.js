"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// This component should get 1. #entries 2. Order by 3. Descending 4. Search Entry
var core_1 = require("@angular/core");
var TableRowComponent = /** @class */ (function () {
    function TableRowComponent(atService) {
        this.atService = atService;
    }
    TableRowComponent.prototype.ngOnInit = function () {
        this.columns = this.atService.getColumns();
        // ["name", "age", "species", "occupation"]
        this.characters = this.atService.getCharacters();
        // all data in mock-data.ts
    };
    __decorate([
        core_1.Input()
    ], TableRowComponent.prototype, "display", void 0);
    __decorate([
        core_1.Input()
    ], TableRowComponent.prototype, "order", void 0);
    __decorate([
        core_1.Input()
    ], TableRowComponent.prototype, "descending", void 0);
    __decorate([
        core_1.Input()
    ], TableRowComponent.prototype, "search", void 0);
    TableRowComponent = __decorate([
        core_1.Component({
            selector: 'app-table-row',
            templateUrl: './table-row.component.html',
            styleUrls: ['./table-row.component.css']
        })
    ], TableRowComponent);
    return TableRowComponent;
}());
exports.TableRowComponent = TableRowComponent;
