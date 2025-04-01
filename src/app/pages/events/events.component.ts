import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
export interface Location {
  name: string;
  address: string;
  city: string;
  googleMapsLink?: string;  // Make it explicit this is optional
}
export interface Event {
[x: string]: any;
  id: string;
  title: string;
  description: string;
  date: Date;
  endDate?: Date; // For multi-day events
  location: Location;
  imageUrl?: string;
  category: 'cultural' | 'educational' | 'social' | 'sports';
  price?: number; // Free if undefined
  organizer: string;
  contactEmail?: string;
  registrationLink?: string;
  attendees?: number;
  isFeatured?: boolean;
}

@Component({
  selector: 'app-events',
  imports: [CommonModule,RouterLink,MatIconModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {

  events: Event[] = [
    {
      id: '1',
      title: 'South Sudanese Cultural Festival',
      description: 'Annual celebration featuring traditional dances, music, and cuisine from all South Sudanese regions.',
      date: new Date(2024, 6, 15),
      endDate: new Date(2024, 6, 16),
      location: {
        name: 'Maison des Cultures',
        address: '35 Rue Léon Gambetta',
        city: 'Paris',
        googleMapsLink: 'https://goo.gl/maps/example'
      },
      imageUrl: 'assets/images/cultural-festival.jpg',
      category: 'cultural',
      organizer: 'SS Community Council',
      contactEmail: 'culture@sscommunity.fr',
      attendees: 120,
      isFeatured: true
    },
    {
      id: '2',
      title: 'French Language Workshop',
      description: 'Free intensive French course for beginners with certified instructors.',
      date: new Date(2024, 5, 10),
      location: {
        name: 'Community Learning Center',
        address: '22 Rue de la Liberté',
        city: 'Lyon'
      },
      category: 'educational',
      price: 0,
      organizer: 'Education Committee',
      registrationLink: '/register/french-workshop'
    }
  ];

  filteredEvents = this.events;
  activeFilter: string = 'all';

  filterEvents(category: string): void {
    this.activeFilter = category;
    this.filteredEvents = category === 'all' 
      ? this.events 
      : this.events.filter(event => event.category === category);
  }

  getUpcomingEvents(): Event[] {
    const today = new Date();
    return this.events.filter(event => new Date(event.date) >= today);
  }

}
