import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { Testimonial, Event } from './home.model';
import { HomeService } from '../../services/home.service';
import { RequestMembershipDialogComponent } from '../request-membership-dialog/request-membership-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService,
     private dialog: MatDialog,
  ) {}

  upcomingEvents: any[] = [];
  testimonials: Testimonial[] = [];
  ngOnInit(): void {
    this.upcomingEvents = this.homeService.getUpcomingEvents();
    this.testimonials = this.homeService.getTestimonials();
  }

  stats = [
    { number: '100+', label: 'Members' },
    { number: '10+', label: 'Events Yearly' },
    { number: '5', label: 'Volunteers' },
    { number: '10', label: 'Cities' },
  ];

  
    openMembershipRequest() {
      const dialogRef = this.dialog.open(RequestMembershipDialogComponent, {
        width: '600px',
        maxWidth: '90vw'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Handle the submitted form data
          console.log('Membership request submitted:', result);
          // You would typically send this to your backend here
        }
      });
    }
}
