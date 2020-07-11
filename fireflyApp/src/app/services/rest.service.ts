import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  // apiUrl = 'http://localhost:8080/';
  apiUrl = 'https://fireflyservice.firefly.in.th/';

  constructor(private http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  sendData(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      const sendParam = {
        data : param
      };

      this.http.post(this.apiUrl + 'addSheet', sendParam, { headers: header })
        .subscribe(res => {

          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  getAllData() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + 'getAll')
        .subscribe(res => {

          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

}
