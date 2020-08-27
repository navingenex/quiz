import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { QuizComponent } from './quiz/quiz.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { CanActivateGuard } from './can-activate.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'quiz', component: QuizComponent, canActivate: [CanActivateGuard] },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: '**', component: QuizComponent, canActivate: [CanActivateGuard] },
];

export const appRoutes = RouterModule.forRoot(routes);
