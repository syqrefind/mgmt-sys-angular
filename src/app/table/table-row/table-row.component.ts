// This component should get 1. #entries 2. Order by 3. Descending 4. Search Entry
import { Component, OnInit, Input, } from '@angular/core';
import { MockDataService } from '../../mock-data.service';
import { GetJsonService } from '../../get-json.service';
import { Observable } from 'rxjs';

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


  constructor(private atService: MockDataService)  {}

  ngOnInit() {
    this.columns = this.atService.getColumns();
    // ["name", "age", "species", "occupation"]
    this.characters = this.atService.getCharacters();
    // all data in mock-data.ts

  }

}
