export interface Event {
    id: number;
    title: string;
    date: Date;
    location: string;
    description: string;
    imageUrl: string;
    category: 'cultural' | 'educational' | 'social';
  }
  
  export interface Testimonial {
    quote: string;
    author: string;
    role: string;
  }