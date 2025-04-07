// src/app/events/event-list/event-list.component.ts
import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Event } from '../event/event.module';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  imports:[CommonModule,FormsModule,RouterModule],
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  filteredEvents: Event[] = [];
  searchTerm = '';
  isLoading = true;

  constructor(private eventsService: EventsService, private router: Router) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.isLoading = true;
    this.eventsService.getEvents().subscribe(events => {
      this.events = events;
      this.filteredEvents = [...events];
      this.isLoading = false;
    });
  }

  filterEvents(): void {
    if (!this.searchTerm) {
      this.filteredEvents = [...this.events];
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.filteredEvents = this.events.filter(event =>
      event.title.toLowerCase().includes(term) ||
      event.description.toLowerCase().includes(term) ||
      event.category.toLowerCase().includes(term) ||
      event.organizer.toLowerCase().includes(term)
    );
  }

  editEvent(id: string): void {
    this.router.navigate(['/admin/events/edit', id]);
  }

  deleteEvent(id: string): void {
    if (confirm('Are you sure you want to delete this event?')) {
      this.eventsService.deleteEvent(id).subscribe(() => {
        this.loadEvents();
      });
    }
  }
}