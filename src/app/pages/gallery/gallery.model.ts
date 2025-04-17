export interface GalleryItem {
    id?: string;
    title: string;
    category: 'cultural' | 'events' | 'community';
    imageUrl?: string;
    date: Date;
    description: string;
  }
  