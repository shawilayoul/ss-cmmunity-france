import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
  getUpcomingEvents(){
    return  [
        {
          id: 1,
          title: 'Cultural Festival',
          date: new Date(2025, 6, 15),
          location: 'Paris',
          description:
            'Celebrate South Sudanese heritage with traditional dances, music, and food',
          imageUrl: '../../../assets/images/Cultural2.jpg',
          category: 'cultural',
        },
        {
          id: 2,
          title: 'French Language Workshop',
          date: new Date(2025, 5, 10),
          location: 'Lyon',
          description: 'Free intensive course for beginners',
          imageUrl: '../../../assets/images/frends.jpeg',
          category: 'educational',
        },
      ];
  }
  getTestimonials(){
    return[
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
  }
}
