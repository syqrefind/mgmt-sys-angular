import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../mock-data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  characters: Observable<any[]>;
  columns: string[];

  constructor(private atService: MockDataService) { }

  ngOnInit() {
    this.columns = this.atService.getColumns(); 
    //["name", "age", "species", "occupation"]
    this.characters = this.atService.getCharacters();
    //all data in mock-data.ts
  }
}

