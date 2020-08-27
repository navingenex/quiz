import { Router } from '@angular/router';
import { SharedService } from './../shared/shared.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user: any = {};
  @ViewChild('signupForm', { static: false }) signupForm: NgForm;
  data:
    | { success: boolean; message: string; data?: undefined }
    | {
        success: boolean;
        data: import('h:/quiz/src/app/model/user').User;
        message?: undefined;
      };
  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {}
  async signup() {
    this.data = await this.sharedService.signup(this.user);
    if (this.data.success) {
      this.router.navigate(['/quiz']);
    } else {
      this.signupForm.reset();
    }
    this.user = {};
  }
}
