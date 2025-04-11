import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TeamMember,Milestone } from './about.model';



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
    { icon: 'diversity_3', title: 'Inclusion', description: 'Welcoming all South Sudanese' }
  ];

  teamMembers: TeamMember[] = [
    {
      name: 'Michael Deng',
      role: 'President',
      bio: 'Founder and community leader since 2015',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6TDicfuVUbtaxW1Vss6K-EDfRzuISbHzhQ&s',
      socialLinks: {
        facebook: '#',
        linkedIn: '#'
      }
    },
    {
      name: 'Achol Malek',
      role: 'Cultural Director',
      bio: 'Organizer of cultural events and youth programs',
      photo: 'https://cdn.pixabay.com/photo/2016/11/18/17/08/fashion-1835871_1280.jpg'
    }
  ];

  milestones: Milestone[] = [
    {
      year: 2023,
      title: 'Founded',
      description: 'Established by South Sudanese diaspora in Lyon',
      icon: 'flag'
    },
    {
      year: 2024,
      title: 'First Festival',
      description: 'Hosted inaugural cultural festival with 300+ attendees',
      icon: 'festival'
    },
    {
      year: 2024,
      title: 'Expanded',
      description: 'Opened regional chapters in Paris and Marseille',
      icon: 'location_city'
    }
  ];

 
}
