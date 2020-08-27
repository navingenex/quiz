import { SharedService } from './../shared/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user: any = {};
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}
  async signup() {
    const user: any = await this.sharedService.signup(this.user);
    if (user.success) console.log('suceess');
    console.log(user.data);
  }
}
