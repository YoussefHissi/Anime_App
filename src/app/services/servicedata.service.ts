import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicedataService {
  url = 'http://localhost:3000/posts';
 

  constructor(private http: HttpClient) { }
   
  getdata() {

    return this.http.get(this.url).pipe(
      map(response => {
        return response;
      })
    );
  }
}
