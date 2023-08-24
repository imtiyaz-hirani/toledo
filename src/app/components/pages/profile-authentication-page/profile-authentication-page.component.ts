import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-authentication-page',
  templateUrl: './profile-authentication-page.component.html',
  styleUrls: ['./profile-authentication-page.component.scss']
})
export class ProfileAuthenticationPageComponent {
    username: string;
    password: string;

    constructor(private router: Router){

    }
    login(){

            this.router.navigateByUrl('/dashboard')

    }
}
