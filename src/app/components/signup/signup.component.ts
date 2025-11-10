import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) { }

  onSignup(): void {
    this.http.post<{ token: string }>('http://localhost:8040/register', {
      username: this.username,
      password: this.password
    })
      .subscribe({
        next: (res: { token: string }) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']).then(() => {
            window.location.reload(); // Refresh navbar state
          });
        },
        error: (err: any) => {
          if (err.status === 409) {
            alert('Username already exists!');
          } else {
            alert('Registration failed');
          }
        }
      });
  }
}
