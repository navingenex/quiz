import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { throwError, BehaviorSubject } from 'rxjs';
import { map, max } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SharedService {
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  users: User[] = [
    { name: 'navin', email: 'navingenex@gmail.com', password: '12345' },
  ];
  score: number = 0;
  leaderBoard = [];
  constructor(private cookie: CookieService, private http: HttpClient) {}

  async signin(payload: User) {
    if (payload.email && payload.password) {
      const user = await this.findUser(payload);
      if (user.length) {
        await this.setCredential(user);
        return true;
      } else {
        return false;
      }
    }
  }
  async setCredential(user: any) {
    this.cookie.put('user', JSON.stringify(user));
    this.isLoggedIn$.next(true);
  }
  async removeCredential() {
    this.cookie.remove('user');
    this.isLoggedIn$.next(false);
  }

  async isAuthenticate() {
    const user = this.cookie.get('user');
    if (user) return true;
    return false;
  }
  async signup(user: User) {
    if (user.email && user.password && user.name) {
      const found = await this.findUser(user);
      if (found.length) {
        return {
          success: false,
          message: 'User already available',
        };
      } else {
        this.users.push(user);
        this.setCredential([user]);
        return {
          success: true,
          data: user,
        };
      }
    } else throwError('enter name ,email and password');
  }

  async findUser(user: User) {
    const found = this.users.filter(
      (u: User) => u.email == user.email && u.password == user.password
    );
    return found;
  }

  startQuiz() {
    return this.http
      .get('./assets/questions.json')
      .pipe(map((m: any) => m.sort(() => Math.random() - 0.5)));
  }
  storeScore(score: number) {
    this.score += score;
  }
  resetScore() {
    this.score = 0;
  }
  async calculateScore(score: number) {
    this.storeScore(score);
    const user: User = JSON.parse(this.cookie.get('user'));
    this.leaderBoard.push({
      name: user[0].name,
      score: this.score,
    });
    return this.score;
  }
  getLeaderBoardScore() {
    return this.leaderBoard.sort((a, b) => b.score - a.score).slice(0, 10);
  }
}
