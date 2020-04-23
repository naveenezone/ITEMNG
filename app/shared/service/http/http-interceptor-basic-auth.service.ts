import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthService } from '../auth/basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {


  constructor(private authService: BasicAuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'sam';
    // let password = 'pass123';
    let basicAuthString = this.authService.getAuthenticatedToken();
    let username = this.authService.getAuthenticatedUser();

    // let basicAuthString = 'Basic ' + window.btoa(username + ':' + password);

    if (basicAuthString && username) {
      request = request.clone(
        {
          setHeaders: {
            Authorization: basicAuthString
          }
        }
      );
    }
    return next.handle(request);

  }

}
