import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './routes.routing';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [AppComponent, SignupComponent, LoginComponent, QuizComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    appRoutes,
    CookieModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
