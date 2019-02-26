import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  Status: string;
  'Quote Type': string;
  'Quote Num': number;
  'Task Type': string;
  Quote: string;
  'Due Date': string;
  'Task Description': string;
}

@Component({
  selector: 'app-table-row-details',
  templateUrl: './table-row-details.component.html',
  styleUrls: ['./table-row-details.component.css']
})
export class TableRowDetailsComponent {

  constructor(
    public dialogRef: MatDialogRef<TableRowDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
