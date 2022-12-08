/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '@not-reddit/data';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user!: UserRegistration;
  faCheck = faCheck;
  faTimes = faTimes;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = {
      emailAddress: '',
      password: '',
      username: ''
    };
  }

  onSubmit(): void {
    this.authService.registerUser(this.user).subscribe((result) => {
      if (result.id) {
        this.router.navigate(['user']);
      }
    });
  }
}