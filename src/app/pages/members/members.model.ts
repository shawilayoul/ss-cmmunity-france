export interface Member {
  id?: string;
  name: string;
  email?: string;
  phone?: string;
  role?: 'member' | 'volunteer' | 'organizer';
  region: string;
  profilePhoto?: string;
  skills?: string[];
  joinedDate: Date;
  bio?: string;
  isActive?: boolean;
}
