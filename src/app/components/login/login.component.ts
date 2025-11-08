import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) { }

  onLogin() {
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    if (userData.email === this.email && userData.password === this.password) {
      alert('Login Successful!');
      this.router.navigate(['/']);
    } else {
      alert('Invalid credentials');
    }
  }
}
