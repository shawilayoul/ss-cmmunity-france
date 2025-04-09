import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss',
})
export class AdminHeaderComponent {

  isLoggedIn = false; 
  isMenuOpen =false;

  closeMenu(): void{
    this.isMenuOpen = false;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    // Implement logout logic
  }
}
