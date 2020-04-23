import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthBean } from '../../model/authBean.model';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http: HttpClient) { }


  // authenticate(username, password) {
  //   if (username === "sam" && password === "pass123") {
  //     sessionStorage.setItem('authenticated user', username);
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

  authenticate(username, password) {
    let basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders(
      { Authorization: basicAuthString }
    );
    return this.http.get<AuthBean>(`${API_URL}/auth`, { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticated user', username);
          sessionStorage.setItem('authToken', basicAuthString);
          return data;
        }
      )
    )

  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticated user')
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticated user');
    sessionStorage.removeItem('authToken');
  }


  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticated user');
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('authToken');
    }
  }

}
