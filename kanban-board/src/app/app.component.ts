import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private router: Router, private userService: UserService){

  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/']);
  }

  isLoggedIn(){
    return this.userService.isLoggedIn();
  }
}
