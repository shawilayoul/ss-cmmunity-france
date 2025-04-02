export interface Location {
    name: string;
    address: string;
    city: string;
    googleMapsLink?: string; 
  }
  export interface Event {
  [x: string]: any;
    id: string;
    title: string;
    description: string;
    date: Date;
    endDate?: Date; 
    location: Location;
    imageUrl?: string;
    category: 'cultural' | 'educational' | 'social' | 'sports';
    price?: number; 
    organizer: string;
    contactEmail?: string;
    registrationLink?: string;
    attendees?: number;
    isFeatured?: boolean;
  }
  