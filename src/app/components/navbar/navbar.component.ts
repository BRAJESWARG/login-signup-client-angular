import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Recheck login status on every route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      }
    });
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    alert('Logged out successfully!');
    this.router.navigate(['/login']);
  }
}
