import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from './../../../../services/user.service';
import { AuthApiService } from './../../services/auth-api.service';

import { AdminGuard } from './../../../../guards/admin.guard';

import { User } from './../../../../models/user.model';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.scss'],
})
export class AuthHomeComponent implements OnInit, AfterViewInit {
  container: HTMLDivElement;
  @ViewChild('signUpForm') suForm: NgForm;
  @ViewChild('signInForm') siForm: NgForm;

  constructor(
    private userService: UserService,
    private authApiService: AuthApiService,
    private adminGuard: AdminGuard,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.container = document.getElementById('container') as HTMLDivElement;
  }

  onSignUpChosen(): void {
    this.container.classList.add('right-panel-active');
  }

  onSignInChosen(): void {
    this.container.classList.remove('right-panel-active');
  }

  onSignUpSubmit(form: NgForm): void {
    const value = form.value;
    const newCurrentUser = new User(
      value.email,
      value.password,
      value.firstName,
      value.lastName
    );
    this.authApiService.register(newCurrentUser).subscribe((res) => {
      if (res && res.token) {
        this.userService.currentUser = newCurrentUser;
        this.router.navigateByUrl('/home');
      }
    });
  }

  onSignInSubmit(form: NgForm): void {
    const value = form.value;
    const currentUser = new User(value.email, value.password);
    this.authApiService
      .login(currentUser.email, currentUser.password)
      .subscribe((res) => {
        if (res && res.token) {
          this.userService.currentUser = currentUser;
          this.router.navigateByUrl(
            `/${
              currentUser.email === this.adminGuard.adminEmail
                ? 'dashboard'
                : 'home'
            }`
          );
        }
      });
  }
}
