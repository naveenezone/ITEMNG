import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeauthService } from '../shared/service/auth/hardcodeauth.service';
import { BasicAuthService } from '../shared/service/auth/basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // username = 'sam';
  // password = '';
  public username = this.authService.getAuthenticatedUser();
  password;
  invalidLogin = false;
  
  
  constructor(private authService: BasicAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    // console.log("Login Buttton");
    //  console.log(this.username);
    //  console.log(this.password);

  //   if (this.username === "sam" && this.password === "pass123") {
  //     this.router.navigate(['welcome', this.username]);
  //     this.invalidLogin = false;
  //   }
  //   else {
  //     this.invalidLogin = true;
  //   }
  // }

  // if(this.authService.authenticate(this.username, this.password)){
  //   this.router.navigate(['welcome', this.username]);
  //     this.invalidLogin = false;
  // }else {
  //   this.invalidLogin = true;
  // }

  this.authService.authenticate(this.username, this.password).subscribe(
    data => {
      console.log(data);
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }, error => {
      console.log(error);
      this.invalidLogin = true;
    }
  )


}


}
