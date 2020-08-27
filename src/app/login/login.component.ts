import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../signup/signup.component.scss'],
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {}
  async signin() {
    const user = await this.sharedService.signin(this.user);
    if (user) this.router.navigate(['quiz']);
  }
}
