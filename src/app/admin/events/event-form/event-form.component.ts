import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EventsService } from '../../../services/event.service';
import { Event } from '../../../pages/events/events.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-event-form',
  standalone: true,
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class EventFormComponent implements OnInit {
  @Input() event: Event | null = null;
  @Output() submitEvent = new EventEmitter<Event>();
  eventForm: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private eventsService: EventsService,
    private dialogRef: MatDialogRef<EventFormComponent>
  ) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      endDate: [''],
      imageUrl: ['', Validators.required],
      category: ['', Validators.required],
      price: [0, Validators.min(0)],
      organizer: ['', Validators.required],
      contactEmail: ['', [Validators.required, Validators.email]],
      registrationLink: ['', Validators.required],
      attendees: [0, Validators.min(0)],
      isFeatured: [false],
    });
  }

  ngOnInit(): void {
    if (this.event) {
      this.eventForm.patchValue(this.event);
    }
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      this.isLoading = true;
      this.errorMessage = null;

      const formData = this.eventForm.value;

      if (formData.date) {
        formData.date = new Date(formData.date).toISOString();
      }
      if (formData.endDate) {
        formData.endDate = new Date(formData.endDate).toISOString();
      }

      this.eventsService.createEvent(formData).subscribe({
        next: (createdEvent) => {
          this.isLoading = false;
          this.submitEvent.emit(createdEvent); // Notify parent component
          this.dialogRef.close();
          if (!this.event) {
            this.eventForm.reset();
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMessage = err.message || 'Failed to create event';
          console.error('Error creating event:', err);
        },
      });
    }
  }
}
