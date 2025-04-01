import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'; 
import { RouterModule } from '@angular/router';

interface Event {
  id: number;
  title: string;
  date: Date;
  location: string;
  description: string;
  imageUrl: string;
  category: 'cultural' | 'educational' | 'social';
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

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
export class HomeComponent {
  upcomingEvents: Event[] = [
    {
      id: 1,
      title: 'Cultural Festival',
      date: new Date(2024, 6, 15),
      location: 'Paris',
      description:
        'Celebrate South Sudanese heritage with traditional dances, music, and food',
      imageUrl: 'assets/events/cultural-festival.jpg',
      category: 'cultural',
    },
    {
      id: 2,
      title: 'French Language Workshop',
      date: new Date(2024, 5, 10),
      location: 'Lyon',
      description: 'Free intensive course for beginners',
      imageUrl: 'assets/events/language-workshop.jpg',
      category: 'educational',
    },
  ];

  testimonials: Testimonial[] = [
    {
      quote:
        'This community helped me feel at home when I first arrived in France',
      author: 'Mary Akech',
      role: 'Community Member',
    },
    {
      quote:
        'The cultural events keep our traditions alive for the younger generation',
      author: 'James Lado',
      role: 'Youth Leader',
    },
  ];

  stats = [
    { number: '500+', label: 'Members' },
    { number: '50+', label: 'Events Yearly' },
    { number: '10', label: 'Volunteers' },
    { number: '5', label: 'Cities' },
  ];
}
