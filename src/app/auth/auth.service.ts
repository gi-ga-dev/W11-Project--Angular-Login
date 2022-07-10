import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { IAuthData } from './interfaces/iauth-data';
import { ISignupData } from './interfaces/isignup-data';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IPostsData } from './interfaces/iposts-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSubject = new BehaviorSubject<IAuthData | null>(null);
  private urlJsonServer = 'http://localhost:4201';
  helper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {
    this.restoreUserLogin();
  }

  restoreUserLogin() {
    const json = localStorage.getItem('isAuthenticated');
    if (json) {
      const user = JSON.parse(json);
      if (this.helper.isTokenExpired(user.accessToken)) {
        localStorage.removeItem('isAuthenticated');
        return
      } else {
        this.authSubject.next(user);
      }
    }
  }

  login(obj: ISignupData) {
    return this.http.post<IAuthData>(this.urlJsonServer + '/login', obj).pipe(
      tap(data => {
        this.authSubject.next(data);
        localStorage.setItem('isAuthenticated', JSON.stringify(data));
      })
    )
  }

  signup(obj: ISignupData) {
    return this.http.post(this.urlJsonServer + '/register', obj);
  }

  logout() {
    this.authSubject.next(null);
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }

  createPosts(obj: IPostsData) {
    return this.http.post(this.urlJsonServer + '/posts', obj);
  }

}
