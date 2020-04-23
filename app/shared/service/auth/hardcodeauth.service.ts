import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeauthService {

  constructor() { }

  authenticate(username, password) {
    if (username === "sam" && password === "pass123") {
      sessionStorage.setItem('authenticated user', username);
      return true;
    }
    else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticated user')
    return !(user === null);
  }
  
  logout() {
    sessionStorage.removeItem('authenticated user');
  }

}
