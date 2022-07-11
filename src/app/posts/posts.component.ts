import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { IPostsData } from '../auth/interfaces/iposts-data';
import { ISignupData } from '../auth/interfaces/isignup-data';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @ViewChild('f') form!: NgForm;
  posts: IPostsData[] = [];
  hide = true;
  error = undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void { this.getAllPosts(); }

  /* ---- Post nel db.json ---- */
  onSubmit() {
    this.authService.createPosts(this.form.value).subscribe(
      resp => {
        this.error = undefined;
        this.router.navigate(['/posts'])
      },
      err => {
        this.error = err.error;
      }
    )
  }

  /* ---- Get dal db.json ---- */
  getAllPosts() {
    console.log('Chiamata Ajax al server')
    this.authService.authSubject.subscribe(userPosts => {

      this.http.get<IPostsData[]>('http://localhost:4201/posts', {
        headers: new HttpHeaders({ "Authorization": "Bearer " + userPosts?.accessToken })
      })
        .subscribe(
          resp => {
            this.posts = resp;
          },
          err => {
            this.error = err.error
          }
        )
    })
  }

}
