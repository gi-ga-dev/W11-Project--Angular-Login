import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ISignupData } from 'src/app/auth/interfaces/isignup-data';

@Component({
  selector: 'app-exp-panel',
  templateUrl: './exp-panel.component.html',
  styleUrls: ['./exp-panel.component.scss']
})
export class ExpPanelComponent implements OnInit {

  users: ISignupData[] = [];
  panelOpenState = false;
  error = undefined;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
    console.log(this.users);
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
