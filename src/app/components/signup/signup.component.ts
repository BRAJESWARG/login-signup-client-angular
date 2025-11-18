import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  name = "";
  email = "";
  password = "";
  confirmPassword = "";
  error = "";

  constructor(private auth: AuthService, private router: Router) { }

  signup() {
    if (this.password !== this.confirmPassword) {
      this.error = "Passwords do not match!";
      return;
    }

    const data = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.auth.signup(data).subscribe({
      next: (_res: any) => {
        this.router.navigate(['/login']);
      },
      error: (_err: any) => {
        this.error = "Signup failed!";
      }
    });
  }
}
