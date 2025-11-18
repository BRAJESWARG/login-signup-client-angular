import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email = "";
  password = "";
  error = "";

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    const data = { email: this.email, password: this.password };

    this.auth.login(data).subscribe({
      next: (res: any) => {
        localStorage.setItem("token", res.token);
        this.router.navigate(['/']);
      },
      error: (_err: any) => {
        this.error = "Invalid credentials!";
      }
    });
  }
}
