// src/app/events/event.model.ts
export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  endDate: Date;
  imageUrl: string;
  category: string;
  price: number;
  organizer: string;
  contactEmail: string;
  registrationLink: string;
  attendees: number;
  isFeatured: boolean;
}
