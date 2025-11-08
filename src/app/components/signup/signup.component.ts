import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  onSignup() {
    const user = { name: this.name, email: this.email, password: this.password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Account created successfully!');
    this.router.navigate(['/login']);
  }
}
