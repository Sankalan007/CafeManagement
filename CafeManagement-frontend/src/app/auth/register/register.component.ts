import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage!: String;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        (response) => {
          console.log('Registration successful!');
          console.log(response);
          this.router.navigate(['/login']);
          this.toastr.success('Please log In', 'Registration successful', {
            positionClass: 'toast-bottom-right',
          });
        },
        (error) => {
          this.errorMessage = 'Username or Email already exists!';
          console.log('Registration failed!');
          console.log(error);
          this.toastr.error('WARNING: Username or Email already exists!');
        }
      );
    }
  }

  goToHome() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    } else {
      this.toastr.warning(
        'You have to be logged in to access the website',
        'Please log in'
      );
    }
  }
}
