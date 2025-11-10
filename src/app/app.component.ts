import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkLoginStatus();

    // 👇 Still keep this for cross-tab sync
    window.addEventListener('storage', () => this.checkLoginStatus());
  }

  checkLoginStatus() {
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  // 👇 Add a public method to trigger navbar refresh manually
  refreshNavbar() {
    this.checkLoginStatus();
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
