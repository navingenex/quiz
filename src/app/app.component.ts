import { Router } from '@angular/router';
import { SharedService } from './shared/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private sharedService: SharedService, private router: Router) {
    this.sharedService.isLoggedIn$.subscribe((b) => (this.isLoggedIn = b));
  }
  async ngOnInit() {
    this.isLoggedIn = await this.sharedService.isAuthenticate();
  }
  signOut() {
    this.sharedService.removeCredential();
    this.router.navigate(['/login']);
  }
}
