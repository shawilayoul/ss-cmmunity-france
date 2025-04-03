export interface GalleryItem {
    id: number;
    title: string;
    category: 'cultural' | 'events' | 'community';
    imageUrl: string;
    date?: Date;
    description?: string;
  }
  