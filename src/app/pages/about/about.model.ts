export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    photo: string;
    socialLinks?: {
      facebook?: string;
      twitter?: string;
      linkedIn?: string;
    };
  }
  
  export interface Milestone {
    year: number;
    title: string;
    description: string;
    icon: string;
  }