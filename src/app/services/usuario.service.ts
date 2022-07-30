import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';
  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.url}/users`)
      .pipe(map((users:any) => users['data']));
  }

  getUser(id: number|string) {

    return this.http.get(`${this.url}/users/${id}`)
      .pipe(map((user: any) => user['data']));

  }
}
