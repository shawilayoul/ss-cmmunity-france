export interface Member {
    id: string;
    name: string;
    role?: 'member' | 'volunteer' | 'organizer' | 'admin';
    region: string; // South Sudanese region of origin
    profilePhoto?: string;
    skills?: string[];
    joinedDate: Date;
    contact?: {
  whatsapp: any;
      email?: string;
      phone?: string;
      socialMedia?: {
        facebook?: string;
        whatsapp?: string;
      };
    };
    bio?: string;
    isActive?: boolean;
  }