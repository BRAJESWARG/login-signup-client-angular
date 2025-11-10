import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) { }


  onLogin() {
    this.http.post<any>('http://localhost:8040/login', { username: this.username, password: this.password })
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']).then(() => {
            window.location.reload(); // 🔄 Refresh navbar state
          });
        },
        error: (err) => {
          alert('Invalid username or password');
        }
      });
  }

}
