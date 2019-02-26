// This component should get 1. #entries 2. Order by 3. Descending 4. Search Entry
import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { MockDataService } from '../../mock-data.service';
import { GetJsonService } from '../../get-json.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { TableRowDetailsComponent } from './table-row-details/table-row-details.component';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit, OnChanges {
  @Input() display: number;
  @Input() order: string;
  @Input() descending: boolean;
  @Input() search: string;

  @Input() length: number;
  @Input() pageSize: number;
  @Input() pageIndex: number;
  @Input() pageSizeOptions: Array<number>;

  characters: Observable<any[]>;
  columns: string[];
  // status: string;
  // dataObject: object;
  editField: string;
  isEditable: string;

  // columns
  // characters

  constructor(private atService1: MockDataService, private atService0: GetJsonService, public dialog: MatDialog) {}

  ngOnChanges() {
    // alert('pagination change detected');
  }

  ngOnInit() {
    this.atService0.getJSON().subscribe(data => {
      this.columns = this.atService1.getColumns();
      this.characters = this.atService1.getCharacters();
    });

    this.isEditable = 'false';
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(TableRowDetailsComponent, {
      width: '600px',
      height: '400px',
      data: {name: 'abc'},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

    toggleEdit() {
      if (this.isEditable === 'false') {
        this.isEditable = 'true';
      } else {
        this.isEditable = 'false';
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
