import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-header',
  imports:[CommonModule,RouterModule,MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuActive = false;
  isLoggedIn = false; // Set this based on auth status

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  logout() {
    // Implement logout logic
  }
}