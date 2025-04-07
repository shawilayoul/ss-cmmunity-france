import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events/events.service';
import { Event } from '../events/event/event.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule,RouterModule]
})
export class DashboardComponent implements OnInit {
  totalEvents = 0;
  upcomingEvents = 0;
  featuredEvents = 0;
  recentEvents: Event[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.eventsService.getEvents().subscribe(events => {
      this.totalEvents = events.length;
      this.upcomingEvents = events.filter(e => new Date(e.date) > new Date()).length;
      this.featuredEvents = events.filter(e => e.isFeatured).length;
      this.recentEvents = events
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 4);
    });
  }

  viewDetails(eventId: string): void {
    // Implement navigation to details or use dialog
  }
}