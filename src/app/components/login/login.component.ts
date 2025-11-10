import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private appComponent: AppComponent // 👈 inject root component
  ) { }

  onLogin() {
    this.http.post<any>('http://localhost:8040/auth/login', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          alert('✅ Login successful!');

          // ✅ Redirect to home
          this.router.navigate(['/home']).then(() => {
            this.appComponent.refreshNavbar(); // 👈 updates navbar immediately
          });
        } else {
          alert('❌ Login failed: No token received');
        }
      },
      error: (err) => {
        console.error('❌ Login failed:', err);
        alert('Invalid username or password!');
      }
    });
  }
}
