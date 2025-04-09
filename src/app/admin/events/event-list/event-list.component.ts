// src/app/events/event-list/event-list.component.ts
import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/event.service';
import { Event } from '../../../pages/events/events.model';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventFormComponent } from '../event-form/event-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  filteredEvents: Event[] = [];
  searchTerm = '';
  isLoading = true;

  constructor(
    private eventsService: EventsService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.isLoading = true;
    this.eventsService.getEvents().subscribe((events) => {
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
    this.filteredEvents = this.events.filter(
      (event) =>
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

  openAddEventRequest() {
    const dialogRef = this.dialog.open(EventFormComponent, {
      width: '600px',
      maxWidth: '90vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Handle the submitted form data
        console.log('Membership request submitted:', result);
        // You would typically send this to your backend here
      }
    });
  }
}
