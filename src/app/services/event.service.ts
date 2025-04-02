import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor() {}

  getEvents() {
    return [
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
        imageUrl: '../../../assets/images/Cultural2.jpg',
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
        imageUrl: '../../../assets/images/frends.jpeg',
        category: 'educational',
        price: 0,
        organizer: 'Education Committee',
        registrationLink: '/register/french-workshop'
      },
      {
        id: '3',
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
        imageUrl: '../../../assets/images/Cultural2.jpg',
        category: 'cultural',
        organizer: 'SS Community Council',
        contactEmail: 'culture@sscommunity.fr',
        attendees: 120,
        isFeatured: true
      },
      {
        id: '4',
        title: 'French Language Workshop',
        description: 'Free intensive French course for beginners with certified instructors.',
        date: new Date(2024, 5, 10),
        location: {
          name: 'Community Learning Center',
          address: '22 Rue de la Liberté',
          city: 'Lyon'
        },
        imageUrl: '../../../assets/images/frends.jpeg',
        category: 'sports',
        price: 0,
        organizer: 'Education Committee',
        registrationLink: '/register/french-workshop'
      },
      {
        id: '5',
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
        imageUrl: '../../../assets/images/Cultural2.jpg',
        category: 'social',
        organizer: 'SS Community Council',
        contactEmail: 'culture@sscommunity.fr',
        attendees: 120,
        isFeatured: true
      },
      {
        id: '6',
        title: 'French Language Workshop',
        description: 'Free intensive French course for beginners with certified instructors.',
        date: new Date(2024, 5, 10),
        location: {
          name: 'Community Learning Center',
          address: '22 Rue de la Liberté',
          city: 'Lyon'
        },
        imageUrl: '../../../assets/images/frends.jpeg',
        category: 'sports',
        price: 0,
        organizer: 'Education Committee',
        registrationLink: '/register/french-workshop'
      }
    ];
  }
}
