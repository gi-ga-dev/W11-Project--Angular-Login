import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, DoCheck {

  showSignUp: boolean = true;
  showLogin: boolean = true;
  showLogout: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngDoCheck(): void {
    // se sono loggato nascondo login e register btns 
    // **sostituire con output ed event emitter dopo login
    if (localStorage.length >= 1) {
      this.showLogout = true;
      this.showLogin = false;
      this.showSignUp = false;
      console.log(localStorage);
    }
  }

  ngOnInit(): void {

  }

  logout() {
    this.authService.logout();
    this.showLogout = false;
    this.showLogin = true;
    this.showSignUp = true;
  }


}
