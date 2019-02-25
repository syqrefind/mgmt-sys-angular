"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// This component should pass to its child messages incluidng: 1. #entries 2. Order by 3. Descending 4. Search Entry
var core_1 = require("@angular/core");
var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    TableComponent.prototype.toNumber = function () {
        this.selectedDisplay = +this.searchKeyword;
    };
    TableComponent.prototype.ngOnInit = function () {
        // options selected - to be two-way bound
        this.displayOptions = [10, 20, 50];
        this.orderOptions = ['Contact', 'Due Date', 'Quote Type', 'Quote#'];
        this.selectedDisplay = this.displayOptions[0];
        this.selectedOrder = 'Contact';
        this.isDescending = true;
        this.searchKeyword = '';
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css']
        })
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
