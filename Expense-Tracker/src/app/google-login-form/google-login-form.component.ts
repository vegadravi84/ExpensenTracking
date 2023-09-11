import { Component, Inject, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-google-login-form',
  templateUrl: './google-login-form.component.html',
  styleUrls: ['./google-login-form.component.scss']
})
export class GoogleLoginFormComponent implements OnInit {

  user: SocialUser | any;
  loggedIn: boolean | any;

  constructor(private authService: SocialAuthService) { }
  
  ngOnInit() {
      this.authService.authState.subscribe((user) => {
          console.log(user)
          this.user = user;
          this.loggedIn = (user != null);
      });
  }

  signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
      this.authService.signOut();
  }

}