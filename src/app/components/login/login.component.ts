import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) { }

  login() {
    const payload = {
      email: this.email,
      password: this.password
    };

    console.log("Sending login payload:", payload);

    this.auth.login(payload).subscribe({
      next: (res: any) => {
        console.log("LOGIN SUCCESS:", res);
        alert("Login successful!");
      },
      error: (err) => {
        console.error("LOGIN ERROR:", err);
        alert("Login failed: " + err.status);
      }
    });
  }
}
