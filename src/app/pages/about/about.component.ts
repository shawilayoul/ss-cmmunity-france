import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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



@Component({
  selector: 'app-about',
  imports :[CommonModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  missionStatement = `We unite South Sudanese people in France through cultural preservation, 
                     education, and social support to build a stronger community.`;

  visionStatement = `To be the leading organization fostering unity and development 
                    among South Sudanese in France.`;

  coreValues = [
    { icon: 'groups', title: 'Unity', description: 'Bringing our community together' },
    { icon: 'school', title: 'Education', description: 'Empowering through knowledge' },
    { icon: 'celebration', title: 'Culture', description: 'Preserving our heritage' },
    { icon: 'diversity', title: 'Inclusion', description: 'Welcoming all South Sudanese' }
  ];

  teamMembers: TeamMember[] = [
    {
      name: 'Michael Deng',
      role: 'President',
      bio: 'Founder and community leader since 2015',
      photo: 'assets/team/michael.jpg',
      socialLinks: {
        facebook: '#',
        linkedIn: '#'
      }
    },
    {
      name: 'Achol Malek',
      role: 'Cultural Director',
      bio: 'Organizer of cultural events and youth programs',
      photo: 'assets/team/achol.jpg'
    }
  ];

  milestones: Milestone[] = [
    {
      year: 2015,
      title: 'Founded',
      description: 'Established by South Sudanese diaspora in Paris',
      icon: 'flag'
    },
    {
      year: 2018,
      title: 'First Festival',
      description: 'Hosted inaugural cultural festival with 300+ attendees',
      icon: 'festival'
    },
    {
      year: 2022,
      title: 'Expanded',
      description: 'Opened regional chapters in Lyon and Marseille',
      icon: 'location_city'
    }
  ];
}
