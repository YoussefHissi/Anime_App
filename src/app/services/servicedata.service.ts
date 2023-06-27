import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicedataService {
  url = 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D';
  apiKey = '6b1256293e8f6397b8dc3443d5c1fd19';

  constructor(private http: HttpClient) { }

  getdata() {
    // Set the headers with the API key
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey
    });

    return this.http.get(this.url, { headers }).pipe(
      map(response => {
        return response;
      })
    );
  }
}
