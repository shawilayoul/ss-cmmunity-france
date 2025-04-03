export interface Member {
  id: string;
  name: string;
  role?: 'member' | 'volunteer' | 'organizer';
  region: string;
  profilePhoto?: string;
  skills?: string[];
  joinedDate: Date;
  bio?: string;
  contact?: {
    email?: string;
    phone?: string;
    whatsapp?: string;
  };
  isActive?: boolean;
}