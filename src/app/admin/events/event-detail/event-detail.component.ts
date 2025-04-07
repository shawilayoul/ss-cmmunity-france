// src/app/events/event-detail/event-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';
import { Event } from '../event/event.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  imports:[CommonModule],
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event: Event | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.eventsService.getEvent(id).subscribe(event => {
        this.event = event;
        this.isLoading = false;
      });
    } else {
      this.isLoading = false;
    }
  }

  editEvent(): void {
    if (this.event) {
      this.router.navigate(['/admin/events/edit', this.event.id]);
    }
  }

  deleteEvent(): void {
    if (this.event && confirm('Are you sure you want to delete this event?')) {
      this.eventsService.deleteEvent(this.event.id).subscribe(() => {
        this.router.navigate(['/admin/events']);
      });
    }
  }
}