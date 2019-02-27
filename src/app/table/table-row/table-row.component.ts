// This component should get 1. #entries 2. Order by 3. Descending 4. Search Entry
import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { MockDataService } from '../../mock-data.service';
import { GetJsonService } from '../../get-json.service';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TableRowDetailsComponent } from './table-row-details/table-row-details.component';
import { Inject } from '@angular/core';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit, OnChanges {
  animal: string;
  name: string;

  @Input() display: number;
  @Input() order: string;
  @Input() descending: boolean;
  @Input() search: string;

  @Input() length: number;
  @Input() pageSize: number;
  @Input() pageIndex: number;
  @Input() pageSizeOptions: Array<number>;

  characters: Observable<any[]>;
  temp: Array<object>;
  columns: string[];

  editField: string;
  isEditable: string;

  borderColor: string;
  originalColor: string;

  // columns: headers
  // characters: Array<object>

  constructor(private atService1: MockDataService, private atService0: GetJsonService, public dialog: MatDialog) {}

  ngOnChanges() {
    // alert('pagination change detected');
  }

  ngOnInit() {
    // this.atService0.getJSON().subscribe(data => {
    this.columns = this.atService1.getColumns();
    this.characters = this.atService1.getCharacters();
    // });

    this.isEditable = 'false';
    this.originalColor = this.borderColor;
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(TableRowComponentDialog, {
      width: '600px',
      height: '400px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      console.log(result);
    });
  }

    toggleEdit() {
      if (this.isEditable === 'false') {
        this.isEditable = 'true';
        this.borderColor = 'carol';
        alert('The table entries are now editable!');
      } else {
        this.isEditable = 'false';
        this.borderColor = this.originalColor;
      }
    }

    saveEdit() { // save to local storage

    }

  // updateList(id: number, property: string, event: any) {
  //   const editField = event.target.textContent;
  //   this.personList[id][property] = editField;
  // }

  // changeValue(id: number, property: string, event: any) {
  //   this.editField = event.target.textContent;
  // }

  // remove(id: any) {
  //   this.awaitingPersonList.push(this.personList[id]);
  //   this.personList.splice(id, 1);
  // }

  // add() {
  //   if (this.awaitingPersonList.length > 0) {
  //     const person = this.awaitingPersonList[0];
  //     this.personList.push(person);
  //     this.awaitingPersonList.splice(0, 1);
  //   }
  // }

}

@Component({
  selector: 'app-table-row-dialog',
  templateUrl: './table-row-dialog.component.html',
})
export class TableRowComponentDialog{

  constructor(
    public dialogRef: MatDialogRef<TableRowComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
