// This component should get 1. #entries 2. Order by 3. Descending 4. Search Entry
import { Component, OnInit, Input, } from '@angular/core';
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
export class TableRowComponent implements OnInit {
  @Input() display: number;
  @Input() order: string;
  @Input() descending: boolean;
  @Input() search: string;

  characters: Observable<any[]>;
  columns: string[];
  // status: string;
  // dataObject: object;

  constructor(private atService: MockDataService, private atService0: GetJsonService, public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TableRowDetailsComponent, {
      width: '600px',
      height: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }


  ngOnInit() {
    this.atService0.getJSON().subscribe(data => {
      this.columns = this.atService.getColumns();
      this.characters = this.atService.getCharacters();
    });
  }


}
