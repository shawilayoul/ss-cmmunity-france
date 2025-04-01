import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor() {}

  getEvents() {
    return [
      {
        id: 1,
        title: 'Cultural Festival',
        date: '2025-06-15',
        location: 'Paris, France',
        description: 'A celebration of South Sudanese culture with music, dance, and food.'
      },
      {
        id: 2,
        title: 'Community Meeting',
        date: '2025-07-05',
        location: 'Lyon, France',
        description: 'Discussing community initiatives and upcoming projects.'
      },
      {
        id: 3,
        title: 'Fundraising Dinner',
        date: '2025-08-20',
        location: 'Marseille, France',
        description: 'A dinner event to raise funds for educational programs.'
      }
    ];
  }
}
