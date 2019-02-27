// This service is for one-time use only.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetJsonService {

  constructor(private http: HttpClient) {
    // alert('Constructor of GetJsonService is called.');
    this.getJSON().subscribe(data => {
      localStorage.setItem('sample-data', JSON.stringify(data));
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/data.json');
}
}
