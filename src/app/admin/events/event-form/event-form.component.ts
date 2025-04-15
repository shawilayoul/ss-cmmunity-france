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
      //imageUrl: ['', Validators.required],
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
  selectedImageFile: any | null = null;

  onFileSelected(event: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedImageFile = input.files[0];
      console.log('Selected file:', this.selectedImageFile);
    }
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      this.isLoading = true;
      this.errorMessage = null;

      const eventData = this.eventForm.value;

      // Convert dates to ISO strings
      if (eventData.date) {
        eventData.date = new Date(eventData.date).toISOString();
      }
      if (eventData.endDate) {
        eventData.endDate = new Date(eventData.endDate).toISOString();
      }

      this.eventsService
        .createEvent(eventData, this.selectedImageFile)
        .subscribe({
          next: (createdEvent) => {
            this.isLoading = false;
            this.submitEvent.emit(createdEvent);
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
