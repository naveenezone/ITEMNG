import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeauthService } from '../shared/service/auth/hardcodeauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // username = 'sam';
  // password = '';
  username;
  password;
  invalidLogin = false;
  
  
  constructor(private authService: HardcodeauthService, private router: Router) { }

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

  if(this.authService.authenticate(this.username, this.password)){
    this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
  }else {
    this.invalidLogin = true;
  }
}


}
