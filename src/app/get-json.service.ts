import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetJsonService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
      localStorage.setItem('sample-data', data);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./data.json');
}
}
