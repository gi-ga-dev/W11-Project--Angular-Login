import { IAuthData } from './../../auth/interfaces/iauth-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ISignupData } from 'src/app/auth/interfaces/isignup-data';

@Component({
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss']
})
export class UsersPage implements OnInit {

  users: ISignupData[] = [];
  error = undefined;

  /* dati dell'account corrente */
  userName!: string | undefined;
  userSurname!: string | undefined;
  userEmail!: string | undefined;

  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  /* chiamata ajax, dati presi dal service */
  getAllUsers() {
    console.log('Chiamata Ajax al server')
    this.authService.authSubject.subscribe(userLogin => {

      this.userName = userLogin?.user.firstname;
      this.userSurname = userLogin?.user.lastname;
      this.userEmail = userLogin?.user.email;
      console.log(userLogin?.user.email, userLogin?.user);

      this.http.get<ISignupData[]>('http://localhost:4201/users', {
        headers: new HttpHeaders({ "Authorization": "Bearer " + userLogin?.accessToken })
      })
        .subscribe(
          resp => {
            this.users = resp;
            console.log(this.users);
          },
          err => {
            this.error = err.error
          }
        )
    })
  }

}
