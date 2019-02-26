// This component should pass to its child messages incluidng: 1. #entries 2. Order by 3. Descending 4. Search Entry
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayOptions: number[];
  orderOptions: string[];

  selectedDisplay: number;
  selectedOrder: string;
  isDescending: boolean;
  searchKeyword: string;

  constructor() {}

  toNumber() {
    this.selectedDisplay = +this.searchKeyword;
  }

  ngOnInit() {
    // options selected - to be two-way bound
    this.displayOptions = [10, 20, 50];
    this.orderOptions = ['Contact', 'Due Date', 'Quote Type', 'Quote#'];

    this.selectedDisplay = this.displayOptions[0];
    this.selectedOrder = 'Contact';
    this.isDescending = true;
    this.searchKeyword = '';
  }
}

// event binding - once value changed, pass new values to table-row-component
