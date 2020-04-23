import { Component, OnInit } from '@angular/core';
import { BasicAuthService } from '../shared/service/auth/basic-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authService: BasicAuthService) { }

  ngOnInit(): void {
  }

  

}
