import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of, merge } from 'rxjs';
import { mapTo, delay } from 'rxjs/operators';
import { CHARACTERS } from './mock-data';

// import { CHARACTERS } from './mock-data';


@Injectable()
export class MockDataService {

  CHARACTERS: Array<object>;

  constructor() {
    this.CHARACTERS = JSON.parse(localStorage.getItem('sample-data'));
  }

  getCharacters(): Observable<any[]> {
    return of(this.CHARACTERS).pipe(delay(100));
  }

  getColumns(): string[] {
    return ['Quote Type', 'Quote#', 'Contact', 'Task', 'Due Date', 'Task Type'];
  }
}
