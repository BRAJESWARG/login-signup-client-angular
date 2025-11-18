import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) { }

  signup() {
    const payload = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    console.log("Sending signup payload:", payload);

    this.auth.register(payload).subscribe({
      next: (res: any) => {
        console.log("SIGNUP SUCCESS:", res);
        alert("Signup successful!");
      },
      error: (err) => {
        console.error("SIGNUP ERROR:", err);
        alert("Signup failed!");
      }
    });
  }
}
