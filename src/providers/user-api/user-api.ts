import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserApiProvider {
  private url: string = "https://reqres.in/api/users";

  constructor(
    private http: HttpClient
  ) { }

  getUsers () {
    let promise = new Promise((resolve, reject) => {
        this.http.get(`${this.url}?delay=3`, {})
            .toPromise()
            .then(res => {
                resolve(res);
            }, error => {
                reject(error);
            });
    });
    return promise;
  }

}
