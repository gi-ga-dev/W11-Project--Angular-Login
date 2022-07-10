import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ISignupData } from '../auth/interfaces/isignup-data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})
export class ContactPage implements OnInit {

  users: ISignupData[] = [];
  error = undefined;

  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    console.log('Chiamata Ajax al server')
    this.authService.authSubject.subscribe(userLogin => {

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
