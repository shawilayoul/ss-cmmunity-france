import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Event } from './events.model';
import { EventsService } from '../../services/event.service';
@Component({
  selector: 'app-events',
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent implements OnInit {
  totalEvents = 0;
  upcomingEvents = 0;
  featuredEvents = 0;
  recentEvents: Event[] = [];
  activeFilter: string = 'all';
  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.eventsService.getEvents().subscribe((events) => {
      this.totalEvents = events.length;
      this.upcomingEvents = events.filter(
        (e) => new Date(e.date) > new Date()
      ).length;
      this.featuredEvents = events.filter((e) => e.isFeatured).length;
      this.recentEvents = events
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 4);
    });
  }

  viewDetails(eventId: string): void {
    // Implement navigation to details or use dialog
  }
}
