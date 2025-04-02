import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Event } from './events.model';
import { EventService } from '../../services/event.service';
@Component({
  selector: 'app-events',
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent implements OnInit {
  events: any[] = [];
  filteredEvents: any[] = [];
  activeFilter: string = 'all';
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.filteredEvents = this.events;
  }


  filterEvents(category: string): void {
    this.activeFilter = category;
    this.filteredEvents =
      category === 'all'
        ? this.events
        : this.events.filter((event) => event.category === category);
  }

  getUpcomingEvents(): Event[] {
    const today = new Date();
    return this.events.filter((event) => new Date(event.date) >= today);
  }
}
